// obtenemos el canvas y su contexto
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// creamos la instancia del juego
const game = new Game(ctx);

// botón de inicio/pausa
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (btn.innerText === "PLAY") {
    btn.innerText = "PAUSE";
    game.start();
  } else {
    btn.innerText = "PLAY";
    game.stop();
  }
});
