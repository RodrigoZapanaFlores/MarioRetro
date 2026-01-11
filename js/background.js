class Background {
  constructor(ctx) {
    // TODO: inicializamos las propiedades del fondo x, y, vx, vy, img
    this.ctx = ctx;

    // x ,y posición inicial
    this.x = 0;
    this.y = 0;

    // vx, vy velocidad de movimiento
    this.vx = 2;
    this.vy = 0;

    // objeto imagen del fondo
    this.img = new Image();
    this.img.src = "imagenes/bg.png";
  }

  draw() {
    // TODO: dibujar el fondo 2 veces para simular scroll!
    // dibujamos la imagen en la posición x, y escalándola al tamaño del canvas
    this.ctx.drawImage(this.img, this.x, 0);
    // dibujamos la segunda imagen a la derecha de la primera para crear el efecto de scroll continuo
     this.ctx.drawImage(this.img, this.x + this.img.width, 0);
  }

  

  move() {
    // TODO: movemos el fondo hacia la izquierda
    this.x -= this.vx;

    //si el fondo se desplaza completamente fuera del canvas reiniciamos
    if (this.x + this.img.width <= 0) {
      this.x = 0;
    }
  }
}
