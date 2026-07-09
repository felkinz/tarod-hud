const params = new URLSearchParams(window.location.search);

document.getElementById("cardName").textContent =
  params.get("card") || "SELECT A CARD";

document.getElementById("orientation").textContent =
  params.get("orientation") || "";

document.getElementById("keywords").textContent =
  params.get("keywords") || "Unknown card.";

document.getElementById("meaning").textContent =
  params.get("meaning") || "No meaning found for this card.";
