const majorArcana = [
  ["Der Narr", 0, "Neubeginn, Mut zum Schritt ins Unbekannte.", "Überstürzung oder fehlende Erdung bremsen deinen Weg."],
  ["Der Magier", 1, "Fokussierte Kraft und die Fähigkeit, Dinge zu gestalten.", "Zerstreute Energie oder Selbstzweifel schwächen deine Wirkung."],
  ["Die Hohepriesterin", 2, "Intuition, Stille und inneres Wissen führen dich.", "Ignorierte Gefühle oder Unsicherheit trüben die Wahrnehmung."],
  ["Die Herrscherin", 3, "Fülle, Kreativität und Fürsorge wachsen in deinem Umfeld.", "Überfürsorge oder mangelnde Selbstfürsorge bringen Ungleichgewicht."],
  ["Der Herrscher", 4, "Struktur, Verantwortung und klare Grenzen schaffen Stabilität.", "Zu viel Kontrolle oder Starrheit blockieren Entwicklung."],
  ["Der Hierophant", 5, "Werte, Tradition und Lernen durch erfahrene Wege.", "Blindes Folgen oder innere Rebellion erschweren Orientierung."],
  ["Die Liebenden", 6, "Wichtige Wahl aus dem Herzen und echte Verbindung.", "Unklare Entscheidungen oder innere Zerrissenheit halten fest."],
  ["Der Wagen", 7, "Entschlossenheit und klare Richtung bringen dich voran.", "Aktionismus ohne Fokus führt zu Reibung."],
  ["Die Kraft", 8, "Sanfte Stärke, Geduld und Selbstführung tragen dich.", "Innere Anspannung oder Selbstkritik kosten Energie."],
  ["Der Eremit", 9, "Rückzug, Erkenntnis und ein tiefer Blick nach innen.", "Isolation oder Grübeln ohne Umsetzung verlangsamen dich."],
  ["Das Rad des Schicksals", 10, "Wandel ist in Bewegung, neue Chancen öffnen sich.", "Widerstand gegen Veränderung fühlt sich wie Stillstand an."],
  ["Die Gerechtigkeit", 11, "Klarheit, Ausgleich und ehrliche Entscheidungen sind gefragt.", "Unausgewogenheit oder Verdrängung erschweren faire Lösungen."],
  ["Der Gehängte", 12, "Ein Perspektivwechsel bringt überraschende Einsicht.", "Festhalten am Alten verhindert einen notwendigen Shift."],
  ["Der Tod", 13, "Ein Abschluss macht Raum für eine kraftvolle Erneuerung.", "Loslassen fällt schwer und bindet dich an Vergangenes."],
  ["Die Mäßigkeit", 14, "Harmonie, Heilung und kluge Balance entstehen.", "Extreme oder Ungeduld stören den inneren Ausgleich."],
  ["Der Teufel", 15, "Erkenne Bindungen, um bewusster frei zu wählen.", "Abhängige Muster oder Verdrängung halten dich klein."],
  ["Der Turm", 16, "Ein Umbruch klärt, was keine tragfähige Basis hatte.", "Angst vor Veränderung verstärkt die innere Unruhe."],
  ["Der Stern", 17, "Hoffnung, Sinn und stille Zuversicht leuchten auf.", "Zweifel oder Erschöpfung verdecken den Blick auf Möglichkeiten."],
  ["Der Mond", 18, "Feine Signale, Träume und tiefe Gefühle zeigen den Weg.", "Verwirrung oder Projektionen machen die Lage diffuser."],
  ["Die Sonne", 19, "Lebenskraft, Freude und klare Sicht stärken dich.", "Ego oder fehlende Erdung können den Moment trüben."],
  ["Das Gericht", 20, "Erwachen, Erkenntnis und ein klarer innerer Ruf.", "Aufschub oder Selbstverurteilung verhindern den nächsten Schritt."],
  ["Die Welt", 21, "Vollendung, Integration und ein neuer Zyklus starten.", "Unvollendete Themen wollen erst abgeschlossen werden."]
];

const suitLabels = {
  staves: "Stäbe",
  cups: "Kelche",
  swords: "Schwerter",
  pentacles: "Münzen"
};

const suitSymbols = {
  staves: "♐",
  cups: "☽",
  swords: "✶",
  pentacles: "◉"
};

const ranks = [
  ["Ass", "Aufbruch und klare Initialenergie."],
  ["Zwei", "Polarität, Wahl und erster Austausch."],
  ["Drei", "Entfaltung, Ausdruck und erste Ergebnisse."],
  ["Vier", "Stabilität, Ordnung und Konsolidierung."],
  ["Fünf", "Reibung, Herausforderung und Lernmoment."],
  ["Sechs", "Harmonie, Ausgleich und Fortschritt."],
  ["Sieben", "Prüfung, Fokus und innere Klärung."],
  ["Acht", "Bewegung, Dynamik und Struktur im Wandel."],
  ["Neun", "Reife, Bilanz und beinahe Vollendung."],
  ["Zehn", "Abschluss eines Zyklus und Übergang."],
  ["Bube", "Neugier, Botschaft und frische Perspektive."],
  ["Ritter", "Vorwärtsdrang, Einsatz und aktives Handeln."],
  ["Königin", "Reife Empfänglichkeit, Intuition und Tiefe."],
  ["König", "Souveränität, Klarheit und gestaltende Verantwortung."]
];

const suitMeaningFlavor = {
  staves: "Tatkraft, Wille und kreativer Impuls stehen im Vordergrund.",
  cups: "Gefühle, Verbindung und innere Resonanz prägen die Lage.",
  swords: "Gedanken, Wahrheit und Entscheidungen treten in den Fokus.",
  pentacles: "Materielle Basis, Körper und praktische Umsetzung sind zentral."
};

const tarotImageDataUrl = "https://raw.githubusercontent.com/metabismuth/tarot-json/master/tarot-images.json";
const tarotImageBaseUrl = "https://raw.githubusercontent.com/metabismuth/tarot-json/master/cards/";

const majorNameMapDeToEn = {
  "der narr": "The Fool",
  "der magier": "The Magician",
  "die hohepriesterin": "The High Priestess",
  "die herrscherin": "The Empress",
  "der herrscher": "The Emperor",
  "der hierophant": "The Hierophant",
  "die liebenden": "The Lovers",
  "der wagen": "The Chariot",
  "die kraft": "Strength",
  "der eremit": "The Hermit",
  "das rad des schicksals": "Wheel of Fortune",
  "die gerechtigkeit": "Justice",
  "der gehangte": "The Hanged Man",
  "der tod": "Death",
  "die maßigkeit": "Temperance",
  "der teufel": "The Devil",
  "der turm": "The Tower",
  "der stern": "The Star",
  "der mond": "The Moon",
  "die sonne": "The Sun",
  "das gericht": "Judgement",
  "die welt": "The World"
};

const minorRankMapDeToEn = {
  ass: "Ace",
  zwei: "Two",
  drei: "Three",
  vier: "Four",
  funf: "Five",
  sechs: "Six",
  sieben: "Seven",
  acht: "Eight",
  neun: "Nine",
  zehn: "Ten",
  bube: "Page",
  ritter: "Knight",
  konigin: "Queen",
  konig: "King"
};

const minorSuitMapDeToEn = {
  stabe: "Wands",
  kelche: "Cups",
  schwerter: "Swords",
  munzen: "Pentacles"
};

function buildMinorArcana() {
  const suits = Object.keys(suitLabels);
  const cards = [];

  for (const suit of suits) {
    for (const [rankName, rankMeaning] of ranks) {
      const cardName = `${rankName} der ${suitLabels[suit]}`;
      cards.push({
        name: cardName,
        arcana: "Kleine Arkana",
        meta: `${rankName} • ${suitLabels[suit]}`,
        symbol: suitSymbols[suit],
        meaningUpright: `${rankMeaning} ${suitMeaningFlavor[suit]}`,
        meaningReversed: `Blockierte Energie bei "${cardName}". Thema: ${suitMeaningFlavor[suit]}`
      });
    }
  }

  return cards;
}

function buildDeck() {
  const majorCards = majorArcana.map(([name, number, upright, reversed]) => ({
    name,
    arcana: "Große Arkana",
    meta: `Nummer ${number}`,
    symbol: "✦",
    meaningUpright: upright,
    meaningReversed: reversed
  }));

  return [...majorCards, ...buildMinorArcana()];
}

const deck = buildDeck();

const dom = {
  cardElement: document.getElementById("tarotCard"),
  drawTypeElement: document.getElementById("drawType"),
  arcanaElement: document.getElementById("arcana"),
  cardImageElement: document.getElementById("cardImage"),
  symbolElement: document.getElementById("symbol"),
  cardNameElement: document.getElementById("cardName"),
  cardMetaElement: document.getElementById("cardMeta"),
  meaningElement: document.getElementById("meaning"),
  drawButton: document.getElementById("drawButton"),
  interpretButton: document.getElementById("interpretButton"),
  userContextInput: document.getElementById("userContext"),
  interpretStatus: document.getElementById("interpretStatus"),
  interpretationPanel: document.getElementById("interpretationPanel"),
  interpretationList: document.getElementById("interpretationList"),
  interpretationDisclaimer: document.getElementById("interpretationDisclaimer")
};

let currentDraw = null;
let isGeneratingInterpretation = false;
let tarotImageLookup = new Map();
const API_BASE_URL =
  window.location.port === "3000"
    ? ""
    : `${window.location.protocol}//${window.location.hostname}:3000`;

function normalizeText(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function toEnglishCardName(card) {
  if (card.arcana === "Große Arkana") {
    const key = normalizeText(card.name);
    return majorNameMapDeToEn[key] || null;
  }

  const [rankPart, suitPart] = card.meta.split("•").map((part) => normalizeText(part));
  if (!rankPart || !suitPart) {
    return null;
  }

  const rankName = minorRankMapDeToEn[rankPart];
  const suitName = minorSuitMapDeToEn[suitPart];
  if (!rankName || !suitName) {
    return null;
  }

  return `${rankName} of ${suitName}`;
}

async function loadTarotImageLookup() {
  try {
    const response = await fetch(tarotImageDataUrl);
    if (!response.ok) {
      return;
    }

    const data = await response.json();
    const cards = Array.isArray(data?.cards) ? data.cards : [];
    const map = new Map();

    for (const card of cards) {
      if (typeof card?.name !== "string" || typeof card?.img !== "string") {
        continue;
      }

      const key = normalizeText(card.name);
      map.set(key, `${tarotImageBaseUrl}${card.img}`);
    }

    tarotImageLookup = map;
  } catch (_error) {
    tarotImageLookup = new Map();
  }
}

function updateCardImage(card) {
  const englishName = toEnglishCardName(card);
  const imageUrl = englishName ? tarotImageLookup.get(normalizeText(englishName)) : null;

  if (imageUrl) {
    dom.cardImageElement.onerror = () => {
      dom.cardImageElement.hidden = true;
      dom.symbolElement.hidden = false;
    };
    dom.cardImageElement.src = imageUrl;
    dom.cardImageElement.alt = `${card.name} (Rider-Waite)`;
    dom.cardImageElement.hidden = false;
    dom.symbolElement.hidden = true;
    return;
  }

  dom.cardImageElement.removeAttribute("src");
  dom.cardImageElement.alt = "";
  dom.cardImageElement.hidden = true;
  dom.symbolElement.hidden = false;
}

function clearInterpretationOutput() {
  dom.interpretStatus.textContent = "";
  dom.interpretStatus.classList.remove("error");
  dom.interpretationPanel.hidden = true;
  dom.interpretationList.innerHTML = "";
  dom.interpretationDisclaimer.textContent = "";
}

function drawCard() {
  const randomCard = deck[Math.floor(Math.random() * deck.length)];
  const isReversed = Math.random() < 0.5;

  currentDraw = {
    cardName: randomCard.name,
    arcana: randomCard.arcana,
    isReversed,
    meaningBase: isReversed ? randomCard.meaningReversed : randomCard.meaningUpright,
    meta: randomCard.meta,
    symbol: randomCard.symbol
  };

  dom.cardElement.classList.toggle("reversed", isReversed);
  dom.drawTypeElement.textContent = isReversed ? "Umgekehrt" : "Aufrecht";
  dom.arcanaElement.textContent = randomCard.arcana;
  dom.symbolElement.textContent = randomCard.symbol;
  updateCardImage(randomCard);
  dom.cardNameElement.textContent = randomCard.name;
  dom.cardMetaElement.textContent = randomCard.meta;
  dom.meaningElement.textContent = currentDraw.meaningBase;

  clearInterpretationOutput();
}

function setLoadingState(isLoading) {
  isGeneratingInterpretation = isLoading;
  dom.interpretButton.disabled = isLoading;
  dom.drawButton.disabled = isLoading;
  dom.userContextInput.disabled = isLoading;
}

function renderInterpretation(bullets, disclaimer) {
  dom.interpretationList.innerHTML = "";

  for (const bullet of bullets) {
    const item = document.createElement("li");
    item.textContent = bullet;
    dom.interpretationList.appendChild(item);
  }

  dom.interpretationDisclaimer.textContent = disclaimer || "";
  dom.interpretationPanel.hidden = false;
}

async function requestInterpretation() {
  if (isGeneratingInterpretation) {
    return;
  }

  if (!currentDraw) {
    drawCard();
  }

  clearInterpretationOutput();
  dom.interpretStatus.textContent = "KI-Deutung wird erstellt...";

  const rawContext = dom.userContextInput.value.trim();
  const userContext = rawContext || "allgemeine Deutung für heute";

  const payload = {
    cardName: currentDraw.cardName,
    arcana: currentDraw.arcana,
    isReversed: currentDraw.isReversed,
    meaningBase: currentDraw.meaningBase,
    userContext
  };

  setLoadingState(true);

  try {
    const response = await fetch(`${API_BASE_URL}/api/interpretation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const responseJson = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(responseJson.error || "Die KI-Deutung konnte nicht erstellt werden.");
    }

    const bullets = Array.isArray(responseJson.bullets) ? responseJson.bullets : [];
    const disclaimer = typeof responseJson.disclaimer === "string" ? responseJson.disclaimer : "";

    if (bullets.length < 3 || bullets.length > 6) {
      throw new Error("Die KI-Antwort war nicht im erwarteten Format.");
    }

    renderInterpretation(bullets, disclaimer);
    dom.interpretStatus.textContent = "KI-Deutung bereit.";
  } catch (error) {
    if (error instanceof TypeError) {
      dom.interpretStatus.textContent =
        "Backend nicht erreichbar. Starte den Server mit `npm start` im Projektordner.";
    } else {
      dom.interpretStatus.textContent = error.message || "Ein unbekannter Fehler ist aufgetreten.";
    }
    dom.interpretStatus.classList.add("error");
  } finally {
    setLoadingState(false);
  }
}

dom.drawButton.addEventListener("click", drawCard);
dom.interpretButton.addEventListener("click", requestInterpretation);

loadTarotImageLookup().finally(drawCard);
