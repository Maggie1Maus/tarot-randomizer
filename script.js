const tarotImageDataUrl = "https://raw.githubusercontent.com/metabismuth/tarot-json/master/tarot-images.json";
const tarotImageBaseUrl = "https://raw.githubusercontent.com/metabismuth/tarot-json/master/cards/";

const dom = {
  cardElement: document.getElementById("tarotCard"),
  drawTypeElement: document.getElementById("drawType"),
  arcanaElement: document.getElementById("arcana"),
  cardImageElement: document.getElementById("cardImage"),
  symbolElement: document.getElementById("symbol"),
  cardHintElement: document.getElementById("cardHint"),
  cardNameElement: document.getElementById("cardName"),
  cardMetaElement: document.getElementById("cardMeta"),
  featureCardNameElement: document.getElementById("featureCardName"),
  featureOrientationElement: document.getElementById("featureOrientation"),
  drawButton: document.getElementById("drawButton"),
  summaryElement: document.getElementById("cardSummary"),
  buzzwordsElement: document.getElementById("buzzwords"),
  dayImpulsesElement: document.getElementById("dayImpulses"),
  shortTakeElement: document.getElementById("shortTake"),
  closingSummaryElement: document.getElementById("closingSummary")
};

let currentDraw = null;
let tarotImageLookup = new Map();

function normalizeText(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
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

      map.set(normalizeText(card.name), `${tarotImageBaseUrl}${card.img}`);
    }

    tarotImageLookup = map;
  } catch (_error) {
    tarotImageLookup = new Map();
  }
}

function updateCardImage(card) {
  const imageUrl = tarotImageLookup.get(normalizeText(card.imageNameEn));

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

function renderBuzzwords(buzzwords) {
  dom.buzzwordsElement.innerHTML = "";

  for (const buzzword of buzzwords) {
    const item = document.createElement("li");
    item.className = "buzzword-chip";
    item.textContent = buzzword;
    dom.buzzwordsElement.appendChild(item);
  }
}

function renderDayImpulses(dayImpulses) {
  dom.dayImpulsesElement.innerHTML = "";

  for (const impulse of dayImpulses) {
    const item = document.createElement("li");
    item.textContent = impulse;
    dom.dayImpulsesElement.appendChild(item);
  }
}

function setInitialCardState() {
  dom.cardElement.classList.remove("reversed");
  dom.drawTypeElement.textContent = "Noch verborgen";
  dom.arcanaElement.textContent = "Wartet auf deinen Zieh-Moment";
  dom.symbolElement.textContent = "🔮";
  dom.symbolElement.hidden = false;
  dom.cardImageElement.removeAttribute("src");
  dom.cardImageElement.alt = "";
  dom.cardImageElement.hidden = true;
  dom.cardNameElement.textContent = "Noch keine Karte gezogen";
  dom.cardMetaElement.textContent = "Deine Botschaft wartet auf den ersten Klick.";
  dom.featureCardNameElement.textContent = "Noch keine Karte gezogen";
  dom.featureOrientationElement.textContent = "noch verborgen";
  dom.summaryElement.textContent =
    "Noch ist alles offen. Zieh zuerst eine Karte, damit ihre Tagesbedeutung sichtbar werden kann.";
  renderBuzzwords(["Tageskarte", "Neugier", "Erster Schritt"]);
  renderDayImpulses([
    "Klick auf „Karte ziehen“, wenn du bereit fuer deinen Tagesimpuls bist.",
    "Lies die gezogene Karte eher als Orientierung denn als starre Vorhersage.",
    "Nimm dir nur das mit, was sich fuer dich heute wirklich stimmig anfuehlt."
  ]);
  dom.shortTakeElement.textContent = "Kurz gesagt: Deine Botschaft wartet auf ihren Moment.";
  dom.closingSummaryElement.textContent =
    "Zieh deine Karte und nimm mit, was heute sanft mit dir in Resonanz geht.";

  if (dom.cardHintElement) {
    dom.cardHintElement.hidden = false;
  }
}

function drawCard() {
  const deck = Array.isArray(window.TAROT_DECK) ? window.TAROT_DECK : [];
  const randomCard = deck[Math.floor(Math.random() * deck.length)];

  if (!randomCard) {
    return;
  }

  const isReversed = Math.random() < 0.5;
  const meaning = isReversed ? randomCard.meanings.reversed : randomCard.meanings.upright;

  currentDraw = {
    card: randomCard,
    isReversed,
    meaning
  };

  dom.cardElement.classList.toggle("reversed", isReversed);
  dom.drawTypeElement.textContent = isReversed ? "Umgekehrt" : "Aufrecht";
  dom.arcanaElement.textContent = randomCard.arcana;
  dom.symbolElement.textContent = randomCard.symbol;
  updateCardImage(randomCard);
  dom.cardNameElement.textContent = randomCard.name;
  dom.cardMetaElement.textContent = randomCard.meta;
  dom.featureCardNameElement.textContent = randomCard.name;
  dom.featureOrientationElement.textContent = isReversed ? "umgedreht" : "aufrecht";
  dom.summaryElement.textContent = meaning.summary;
  renderBuzzwords(meaning.buzzwords);
  renderDayImpulses(meaning.dayImpulses);
  dom.shortTakeElement.textContent = meaning.shortTake;
  dom.closingSummaryElement.textContent = meaning.shortTake.replace("Kurz gesagt: ", "");

  if (dom.cardHintElement) {
    dom.cardHintElement.hidden = true;
  }
}

dom.drawButton.addEventListener("click", drawCard);

setInitialCardState();
loadTarotImageLookup();
