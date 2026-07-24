const params = new URLSearchParams(window.location.search);
const slug = CITIES[params.get("city")] ? params.get("city") : "new-york";
const city = CITIES[slug];

document.title = `${city.name} — Do Events Raise Prices?`;
document.getElementById("city-name").textContent = city.name;

const GRAPHS = [
  { id: "graph-price", file: "price_vs_events.html" },
  { id: "graph-availability", file: "availability_vs_events.html" },
];

const placeholder = document.getElementById("graphs-placeholder");
GRAPHS.forEach(({ id, file }) => {
  const iframe = document.getElementById(id);
  if (city.hasGraphs) {
    iframe.src = `assets/graphs/figures/${slug}/${file}`;
  } else {
    iframe.hidden = true;
    placeholder.hidden = false;
  }
});
