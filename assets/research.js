const animation = document.querySelector("#gcm-image");
const toggle = document.querySelector("#gcm-toggle");
const still = animation.getAttribute("src");
const gif = new URL("gcm_ecdf.gif", new URL(still, document.baseURI)).href;
let playing = false;

toggle.hidden = false;
toggle.addEventListener("click", () => {
  playing = !playing;
  animation.src = playing ? gif : still;
  toggle.textContent = playing ? "Stop animation" : "Play animation";
});
