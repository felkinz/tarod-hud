const params = new URLSearchParams(window.location.search);

document.getElementById("cardName").textContent =
  params.get("card") || "Select a Card";

document.getElementById("orientation").textContent =
  params.get("orientation") || "—";

document.getElementById("keywords").textContent =
  params.get("keywords") || "Draw or browse a card.";

document.getElementById("meaning").textContent =
  params.get("meaning") || "The guidance will appear here.";
