class Enemy {
  constructor(ctx) {
    this.ctx = ctx;

    this.sprite = new Image();
    this.sprite.src = "imagenes/bad1.png"; 

   //tamaño del sprite
    this.frameWidth = 581 / 3;
    this.frameHeight = 161;

     // Usamos tamaño real
    this.w = 518 * 0.1;
    this.h = 161 * 0.15;

    // Posición de aparición (fuera por la derecha)
    this.x = this.ctx.canvas.width + 50; // 50px fuera de la pantalla
    this.y = 360;
    
    // Movimiento hacia la izquierda
    this.vx = -1.5;

    this.frame = 0;
    this.frameTick = 0;
  }

  draw() {
    // Alternar frames para caminar
    this.frameTick++;
    if (this.frameTick % 10 === 0) {
      this.frame = (this.frame + 1) % 2; // frame 0 y 1
    }
  
    this.ctx.drawImage(
      this.sprite,
      this.frame * this.frameWidth, // recorte X
      0,                            // recorte Y
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  move() {
    this.x += this.vx;
  }

  isVisible() {
    return this.x + this.w > 0;
  }

  collides(player) {
     return (
      this.x < player.x + player.w &&
      this.x + this.w > player.x &&
      this.y < player.y + player.h &&
      this.y + this.h > player.y
    );
  }
}
