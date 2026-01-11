class Player {
  constructor(ctx) {
    // TODO: inicializamos atributos del jugador : position, size, v, a, img, audio, score, tick
    this.ctx = ctx;
    //posición inicial de x , y (suelo) 
    this.x = 50;             
    this.y = 200;

    //ancho y alto del sprite
    this.width = 146/3;         
    this.height = 180/3;        

    //velocidad en x , y (horizontal y vertical)
    this.vx = 0;            
    this.vy = 0;             

    //gravedad
    this.ay = 0.5;  
    
    //contador de frames para animacion
    this.tick = 0;    
    this.frameIndex = 0;
    this.numFrames = 3;   
    
    //puntuacion del jugador
    this.score = 100;        
  
  
    //imagen con sprites de mario
    this.img = new Image();
    this.img.src = "imagenes/mario.png";
    this.jumpSound = new Audio("audio/jump.wav");
  }

  draw() {
    // TODO: dibujar el sprite del jugador segun frameIndex
    const frameWidth = 440 / 3; // ancho total de la imagen dividido entre el número de frames
    const frameHeight = 180; // alto de la imagen

    this.ctx.drawImage(
      this.img,
      this.frameIndex * frameWidth, 0, frameWidth, frameHeight,
      this.x, this.y, this.width, this.height
    );

    // TODO: draw score
  }

  move() {
    // TODO: movimiento del jugador actualizar velocidad y posición
     this.vy += this.ay; // gravedad
     this.y += this.vy;
     this.x += this.vx;
     
    // TODO: si toca suelo, detener caída
    if (this.y > 328) {
      this.y = 328;
      this.vy = 0;
    }

     // Limitar que no suba más allá del canvas (techo)
    if (this.y < 0) {
        this.y = 0;
        this.vy = 0;
    }

    // Limitar que no se salga por la izquierda
    if (this.x < 0) {
        this.x = 0;
        this.vx = 0;
    }

    // Limitar que no se salga por la derecha
    if (this.x + this.width > this.ctx.canvas.width) {
        this.x = this.ctx.canvas.width - this.width;
        this.vx = 0;
    }

    // TODO: cambiar frame de sprite cada cierto tiempo
    this.tick++;
    if (this.tick % 10 === 0 && this.vy === 0) {
      this.frameIndex = (this.frameIndex + 1) % this.numFrames;
    }
  }
    // TODO: move score
  

  animate() {
    // TODO: increment frameIndex only if not vy
  }

  hit() {
    // TODO: decrement score
  }

  isAlive() {
    // TODO: return true if score is > 0
  }

  keyDown(key) {

      //TODO: saltar
      if (key === "ArrowUp" && this.vy === 0) {
        this.vy = -10; // ejemplo de salto
        this.jumpSound.play();
        }

      // TODO: mover a la derecha, increase vx
       if (key === "ArrowRight") {
        this.vx = 5;
        }
    
      // TODO: mover a la izquierda, decrease vx
       if (key === "ArrowLeft") {
        this.vx = -5;
        }
  }

  keyUp(key) {
    
      // TODO: stop vx
      if (key === "ArrowRight" || key === "ArrowLeft") {
        this.vx = 0;
      }
  }
}
