const url = new URL(window.location.href);

const params = url.searchParams;

function value(name, fallback)
{
    let v = params.get(name);

    if(v === null || v === "")
        return fallback;

    return decodeURIComponent(v);
}

document.getElementById("cardName").textContent =
value("card","SELECT A CARD");

document.getElementById("orientation").textContent =
value("orientation","");

document.getElementById("keywords").textContent =
value("keywords","Draw or browse a card.");

document.getElementById("meaning").textContent =
value("meaning","The guidance for your reading will appear here.");
