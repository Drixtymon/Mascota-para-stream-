const phases = [
  "Inicializando sistema de vida…",
  "Definiendo ciclo de vida…",
  "Ajustando estados básicos…",
  "Preparando reacciones al chat…",
  "Estabilizando criatura…"
];

let progress = 0;
let phaseIndex = 0;

const progressEl = document.getElementById("progress");
const percentEl = document.getElementById("percent");
const phaseEl = document.getElementById("phase");

setInterval(() => {
  if (progress >= 100) return;

  progress += Math.floor(Math.random() * 6) + 4;
  if (progress > 100) progress = 100;

  progressEl.style.width = progress + "%";
  percentEl.textContent = progress + "%";

  phaseEl.textContent = phases[phaseIndex];
  if (progress >= (phaseIndex + 1) * 20 && phaseIndex < phases.length - 1) {
    phaseIndex++;
  }

}, 2000);
