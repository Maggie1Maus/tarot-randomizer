const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const app = express();
const port = Number.parseInt(process.env.PORT || "3000", 10);
const llmProvider = (process.env.LLM_PROVIDER || "ollama").trim().toLowerCase();
const requestTimeoutMs = Number.parseInt(process.env.LLM_TIMEOUT_MS || "12000", 10);
const rateLimitWindowMs = Number.parseInt(process.env.RATE_LIMIT_WINDOW_MS || "60000", 10);
const rateLimitMaxRequests = Number.parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "20", 10);
const trustProxyEnabled = String(process.env.TRUST_PROXY || "false").trim().toLowerCase() === "true";
const defaultDisclaimer =
  "Hinweis: Tarot-Deutungen sind Impulse zur Selbstreflexion und ersetzen keine professionelle Beratung.";
const systemPrompt =
  "Du bist eine herzliche Tarot-Begleitung. Schreibe warm, freundlich, ermutigend und alltagsnah in der Du-Form. " +
  "Antworte immer auf Deutsch und gib ausschließlich JSON zurück. " +
  "Gib genau dieses Format zurück: {\"bullets\": [\"...\"], \"disclaimer\": \"...\"}. " +
  "bullets muss ein Array mit 3 bis 4 kurzen, klaren Bulletpoints sein. " +
  "Die Aussagen sollen hilfreich, konkret und nicht deterministisch sein. " +
  "Keine medizinische, rechtliche oder finanzielle Beratung.";

if (llmProvider === "openai" && !process.env.OPENAI_API_KEY) {
  console.warn("OPENAI_API_KEY fehlt. API-Requests liefern einen Konfigurationsfehler, bis der Key gesetzt ist.");
}

if (trustProxyEnabled) {
  app.set("trust proxy", true);
}

let openAiClient = null;

function getOpenAiClient() {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }

  if (!openAiClient) {
    openAiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  return openAiClient;
}

const localAllowedOrigins = new Set([
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:5500",
  "http://127.0.0.1:5500"
]);

const configuredAllowedOrigins = new Set(
  String(process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean)
);

const allowGithubPagesOrigins = String(process.env.ALLOW_GITHUB_PAGES || "false").trim().toLowerCase() === "true";

function isOriginAllowed(origin) {
  if (!origin || typeof origin !== "string") {
    return false;
  }

  if (localAllowedOrigins.has(origin) || configuredAllowedOrigins.has(origin)) {
    return true;
  }

  if (allowGithubPagesOrigins && /^https:\/\/[a-z0-9-]+\.github\.io$/i.test(origin)) {
    return true;
  }

  return false;
}

const interpretationRateLimitState = new Map();
let lastRateLimitCleanupAt = 0;

function getRateLimitIdentity(req) {
  const forwardedFor = typeof req.headers["x-forwarded-for"] === "string" ? req.headers["x-forwarded-for"] : "";
  const forwardedIp = forwardedFor.split(",")[0]?.trim();
  const ip = forwardedIp || req.ip || req.socket?.remoteAddress || "unknown";
  const origin = typeof req.headers.origin === "string" ? req.headers.origin : "no-origin";
  return `${ip}|${origin}`;
}

function interpretationRateLimit(req, res, next) {
  const now = Date.now();
  if (now - lastRateLimitCleanupAt > 5 * 60 * 1000) {
    for (const [key, value] of interpretationRateLimitState.entries()) {
      if (now >= value.resetAt) {
        interpretationRateLimitState.delete(key);
      }
    }
    lastRateLimitCleanupAt = now;
  }

  const identity = getRateLimitIdentity(req);
  const existing = interpretationRateLimitState.get(identity);
  const validWindowMs = Number.isFinite(rateLimitWindowMs) ? Math.max(rateLimitWindowMs, 1000) : 60000;
  const maxRequests = Number.isFinite(rateLimitMaxRequests) ? Math.max(rateLimitMaxRequests, 1) : 20;

  if (!existing || now >= existing.resetAt) {
    interpretationRateLimitState.set(identity, {
      count: 1,
      resetAt: now + validWindowMs
    });
    return next();
  }

  existing.count += 1;

  if (existing.count > maxRequests) {
    const retryAfterSeconds = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));
    res.setHeader("Retry-After", String(retryAfterSeconds));
    return res.status(429).json({
      error: "Zu viele Deutungsanfragen in kurzer Zeit. Warte kurz und versuche es erneut."
    });
  }

  return next();
}

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin && isOriginAllowed(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  return next();
});

app.use(express.json({ limit: "100kb" }));
app.use(express.static(path.join(__dirname)));
app.use("/api/interpretation", interpretationRateLimit);

function normalizeArcana(value) {
  if (typeof value !== "string") {
    return null;
  }

  const cleaned = value.trim().toLowerCase();
  if (cleaned.includes("kleine")) {
    return "Kleine Arkana";
  }

  if (
    cleaned.includes("große") ||
    cleaned.includes("grosse") ||
    cleaned.includes("groã") ||
    (cleaned.includes("gro") && cleaned.includes("arkana"))
  ) {
    return "Große Arkana";
  }

  return null;
}

function validatePayload(body) {
  const errors = [];

  if (!body || typeof body !== "object") {
    return ["Ungültiger Request-Body."];
  }

  if (typeof body.cardName !== "string" || body.cardName.trim().length === 0 || body.cardName.length > 120) {
    errors.push("cardName muss ein nicht-leerer String mit max. 120 Zeichen sein.");
  }

  if (!normalizeArcana(body.arcana)) {
    errors.push("arcana muss 'Große Arkana' oder 'Kleine Arkana' sein.");
  }

  if (typeof body.isReversed !== "boolean") {
    errors.push("isReversed muss ein Boolean sein.");
  }

  if (typeof body.meaningBase !== "string" || body.meaningBase.trim().length === 0 || body.meaningBase.length > 600) {
    errors.push("meaningBase muss ein nicht-leerer String mit max. 600 Zeichen sein.");
  }

  if (typeof body.userContext !== "string" || body.userContext.trim().length === 0 || body.userContext.length > 500) {
    errors.push("userContext muss ein nicht-leerer String mit max. 500 Zeichen sein.");
  }

  return errors;
}

function tryParseJson(content) {
  if (!content || typeof content !== "string") {
    return null;
  }

  try {
    return JSON.parse(content);
  } catch (_error) {
    return null;
  }
}

function buildUserPrompt(body) {
  return JSON.stringify({
    kartenname: body.cardName,
    arkana: body.arcana,
    lage: body.isReversed ? "umgekehrt" : "aufrecht",
    grundbedeutung: body.meaningBase,
    nutzerkontext: body.userContext,
    anweisung:
      "Erstelle eine knappe, warme Deutung in 3 bis 4 Bulletpoints, die zur Karte und zum Kontext passt. " +
      "Klinge empathisch und freundlich, ohne kitschig zu werden. " +
      "Füge einen kurzen Disclaimer hinzu, dass Tarot eine reflektierende Orientierung ist und keine professionelle Beratung ersetzt."
  });
}

function timeoutSignal(ms) {
  return AbortSignal.timeout(Number.isFinite(ms) ? Math.max(ms, 3000) : 12000);
}

async function generateWithOpenAi(body) {
  const client = getOpenAiClient();
  if (!client) {
    throw new Error("OPENAI_API_KEY fehlt.");
  }

  const model = process.env.OPENAI_MODEL || "gpt-4.1-nano";
  const completion = await client.chat.completions.create({
    model,
    temperature: 0.7,
    max_tokens: 170,
    response_format: { type: "json_object" },
    signal: timeoutSignal(requestTimeoutMs),
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: buildUserPrompt(body) }
    ]
  });

  return completion.choices?.[0]?.message?.content || "";
}

async function generateWithOllama(body) {
  const ollamaBaseUrl = (process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434").trim();
  const model = process.env.OLLAMA_MODEL || "llama3.1:8b";
  const numPredict = Number.parseInt(process.env.OLLAMA_NUM_PREDICT || "170", 10);
  const ollamaTemperature = Number.parseFloat(process.env.OLLAMA_TEMPERATURE || "0.7");

  const response = await fetch(`${ollamaBaseUrl}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    signal: timeoutSignal(requestTimeoutMs),
    body: JSON.stringify({
      model,
      stream: false,
      format: "json",
      options: {
        num_predict: Number.isFinite(numPredict) ? Math.max(100, numPredict) : 170,
        temperature: Number.isFinite(ollamaTemperature) ? ollamaTemperature : 0.7
      },
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: buildUserPrompt(body) }
      ]
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = typeof data.error === "string" ? data.error : "Ollama-Request fehlgeschlagen.";
    throw new Error(message);
  }

  return data?.message?.content || "";
}

async function generateInterpretationContent(body) {
  if (llmProvider === "openai") {
    return generateWithOpenAi(body);
  }

  if (llmProvider === "ollama") {
    return generateWithOllama(body);
  }

  throw new Error("LLM_PROVIDER ist ungültig. Erlaubt sind 'ollama' oder 'openai'.");
}

app.post("/api/interpretation", async (req, res) => {
  try {
    const body = {
      ...req.body,
      userContext:
        typeof req.body?.userContext === "string" && req.body.userContext.trim().length > 0
          ? req.body.userContext.trim()
          : "allgemeine Deutung für heute"
    };

    body.arcana = normalizeArcana(body.arcana);

    const validationErrors = validatePayload(body);
    if (validationErrors.length > 0) {
      return res.status(400).json({ error: validationErrors.join(" ") });
    }

    const content = await generateInterpretationContent(body);
    const parsed = tryParseJson(content);

    if (!parsed || !Array.isArray(parsed.bullets)) {
      return res.status(502).json({ error: "Antwort konnte nicht verarbeitet werden." });
    }

    const bullets = parsed.bullets
      .filter((item) => typeof item === "string")
      .map((item) => item.trim())
      .filter((item) => item.length > 0)
      .slice(0, 6);

    if (bullets.length < 3) {
      return res.status(502).json({ error: "Antwort enthielt zu wenige Bulletpoints." });
    }

    const disclaimer =
      typeof parsed.disclaimer === "string" && parsed.disclaimer.trim().length > 0
        ? parsed.disclaimer.trim()
        : defaultDisclaimer;

    return res.json({ bullets, disclaimer });
  } catch (error) {
    console.error("Fehler bei /api/interpretation:", error);

    if (error && typeof error.message === "string") {
      if (error.message.includes("OPENAI_API_KEY")) {
        return res.status(500).json({ error: "OPENAI_API_KEY fehlt. Setze den Key oder nutze LLM_PROVIDER=ollama." });
      }

      const lowerMessage = error.message.toLowerCase();
      if (lowerMessage.includes("fetch failed") || lowerMessage.includes("econnrefused")) {
        return res.status(502).json({
          error: "Ollama nicht erreichbar. Starte Ollama und prüfe OLLAMA_BASE_URL (Standard: http://127.0.0.1:11434)."
        });
      }

      if (lowerMessage.includes("timeout")) {
        return res.status(504).json({
          error: "Die Deutung hat zu lange gebraucht. Versuche es gleich noch einmal."
        });
      }
    }

    return res.status(500).json({ error: "Die Deutung konnte aktuell nicht erstellt werden." });
  }
});

app.listen(port, () => {
  console.log(`Die Kartenstube läuft auf http://localhost:${port} (LLM_PROVIDER=${llmProvider})`);
});
