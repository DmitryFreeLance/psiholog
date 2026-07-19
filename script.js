const track = document.querySelector("[data-gallery-track]");
const prev = document.querySelector("[data-gallery-prev]");
const next = document.querySelector("[data-gallery-next]");

if (track && prev && next) {
  const step = () => Math.max(280, Math.round(track.clientWidth * 0.72));

  prev.addEventListener("click", () => {
    track.scrollBy({ left: -step(), behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    track.scrollBy({ left: step(), behavior: "smooth" });
  });
}
