class Game {
  constructor(ctx) {
    // TODO: inicializamos las propiedades del juego
    this.ctx = ctx;

    // intervalo del game loop
    this.interval = null;

    // objetos del juego
    this.background = new Background(ctx);
    this.player = new Player(ctx);

    // array de enemigos
    this.enemies = [];

    // ticks para controlar cada cuanto se añade un enemigo
    this.tick = 0;

    // audios del juego
    this.audio = new Audio("audio/theme.mp3");
    this.gameOverAudio = new Audio("audio/game-over.mp3");

    // referencia al objeto this de la clase Game
    this.setListeners();
  }

  start() {
    // TODO: iniciar musica y animacion del juego
     this.audio.loop = true;// el audio se repite
     this.audio.play();

    // TODO:iniciar el bucle del juego 

    if (!this.interval) {
      this.interval = setInterval(() => {
        // TODO: limpia canvas
        this.clear();

    // limpia canvas
    // dibuja fondo, jugador y enemigos
    // mueve todo
        this.move();
        this.draw();

    // verifica colisiones
    // agrega enemigos de manera aleatoria según tick

      }, 1000 / 60); // 60 FPS
    }
  }

  stop() {
    // TODO: pausar audio y detener el loop del juego
      this.audio.pause();
    clearInterval(this.interval);
    this.interval = null;
  }
  

  clear() {
    // TODO: limpiar el canvas para dibujar el siguiente frame
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    // TODO: eliminar enemigos que ya salieron del canvas para optimizar
  }

  draw() {
    // TODO: dibujar el fondo, jugador, enemigos y otros elementos
    this.background.draw();
    this.player.draw();

    this.enemies.forEach(enemy => enemy.draw());
  }

  move() {
    // TODO: actualizar posiciones de fondo, jugador y enemigos
    this.background.move();
    this.player.move();

    // mover enemigos
    this.enemies.forEach(enemy => enemy.move());

     // limpiar enemigos que salen de pantalla
    this.enemies = this.enemies.filter(enemy => enemy.x + enemy.w > 0);

    // generar enemigos cada X ticks
    this.tick++;
      if (this.tick % 120 === 0) {
      this.addEnemy();
    }
  }

  addEnemy() {
    // TODO: crear un enemigo y añadirlo al array de enemigos
    if (this.tick % 1200 === 0) { // cada 2 segundos aprox si 60fps
        const enemy = new Enemy(this.ctx);
        this.enemies.push(enemy);
  }
  }
  checkCollisions() {
    // TODO: comprobar si algún enemigo colisiona con el jugador
    // verificar si el jugador pierde y terminar el juego
  }

  gameOver() {
    // TODO: reproducir el sonido de game over
    // TODO: detener el loop del juego
    // TODO: mostrar texto "Game Over" en pantalla
    // TODO: reiniciar posición del jugador y eliminar enemigos
  }

  setListeners() {
    // TODO: proxy teclas presionadas y enviarlas al jugador (salto, moverse)
    window.addEventListener("keydown", e => this.player.keyDown(e.key));
    // TODO: proxy cuando se sueltan teclas para detener movimiento del jugador
    window.addEventListener("keyup", e => this.player.keyUp(e.key));
  }
}


