# Die Kartenstube

Cozy Tarot-Webapp mit zufaelliger Karte und vertiefender Deutung.

## Lokal starten

```bash
npm install
npm start
```

Dann auf `http://localhost:3000` oeffnen.

## Warum GitHub Pages alleine nicht reicht

GitHub Pages hostet nur statische Dateien (`index.html`, `script.js`, `style.css`).
Die Route `/api/interpretation` braucht aber ein laufendes Backend mit API-Key.

## Loesung fuer GitHub Pages

1. Backend separat deployen (z. B. Render, Railway, Fly.io, eigener VPS).
2. Dort `server.js` laufen lassen und Env-Variablen setzen (`OPENAI_API_KEY` oder Ollama-Zugriff).
3. In diesem Repo `config.example.js` nach `config.js` kopieren.
4. In `config.js` deine Backend-URL eintragen:

```js
window.TAROT_API_BASE_URL = "https://dein-backend.example.com";
```

5. `config.js` zusammen mit der Seite deployen.

Das Frontend ruft dann `https://dein-backend.example.com/api/interpretation` auf.

## Wichtige Env-Variablen

- `LLM_PROVIDER=ollama|openai`
- `OPENAI_API_KEY` (bei OpenAI)
- `OPENAI_MODEL` (Default: `gpt-4.1-nano`)
- `OLLAMA_BASE_URL`, `OLLAMA_MODEL`
- `OLLAMA_NUM_PREDICT` (kleiner = schneller)
- `LLM_TIMEOUT_MS`
- `ALLOWED_ORIGINS` (kommagetrennt)
- `ALLOW_GITHUB_PAGES=true|false`

## Sicherheits-Baseline fuer Public Pages

Wenn dein Frontend auf GitHub Pages public ist, nutze diese Mindestwerte im Backend:

```env
ALLOWED_ORIGINS=https://maggie1maus.github.io
ALLOW_GITHUB_PAGES=false
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=20
TRUST_PROXY=true
```

Hinweise:
- `OPENAI_API_KEY` bleibt nur im Backend-Host als Secret, nie im Frontend.
- Falls ein Key jemals versehentlich im Repo war: sofort in OpenAI rotieren.
- `TRUST_PROXY=true` ist fuer typische Cloud-Deployments (Render/Railway/Fly) sinnvoll.
