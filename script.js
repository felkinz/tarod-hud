const params = new URLSearchParams(window.location.search);

const cardName = params.get("card") || "The Fool";
const orientation = params.get("orientation") || "Upright";

async function loadCard() {
  const response = await fetch("cards.json");
  const cards = await response.json();

  const card = cards[cardName];
  const data = card ? card[orientation] : null;

  document.getElementById("cardName").textContent = cardName;
  document.getElementById("orientation").textContent = orientation;

  if (data) {
    document.getElementById("keywords").textContent = data.keywords;
    document.getElementById("meaning").textContent = data.meaning;
  } else {
    document.getElementById("keywords").textContent = "Unknown card.";
    document.getElementById("meaning").textContent = "No meaning found for this card.";
  }
}

loadCard();
