class Juego extends Phaser.Scene {

    constructor(){
        super("Juego");
    }

    create(){

        //texto oculto detras
        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2,
            "🪿FELICIDADES🪿",
            {
                fontSize: "50px",
                color: "#ffffff"
            }
        ).setOrigin(0.5);

        // variables de puntos
        this.puntos = 0;
          // texto de puntos
        this.textoPuntos = this.add.text(
            20,
            20,
            "Puntos: 0",
            {
                fontSize: "28px",
                color: "#ffffff"
            }
        );

        // grupo de imagenes
        this.cubierta = this.add.group();

        // arreglo de imagenes posibles 
        this.imagenesJuego = [
            "pato1",
            "pato2",
            "pato3"
        ];

        // tamaño
let tamaño = 100;

// calcular columnas y filas
let columnas = Math.floor(this.scale.width / tamaño);
let filas = Math.floor(this.scale.height / tamaño);

// calcular espacio sobrante para centrar
let offsetX = (this.scale.width - (columnas * tamaño)) / 2;
let offsetY = (this.scale.height - (filas * tamaño)) / 2;

// cuadricula cent
for (let x = 0; x < columnas; x++){

    for (let y = 0; y < filas; y++){
         let imagenRandom = Phaser.Utils.Array.GetRandom(this.imagenesJuego);

        let posX = offsetX + x * tamaño + tamaño / 2;
        let posY = offsetY + y * tamaño + tamaño / 2;

        let img = this.add.image(posX, posY, imagenRandom);

        img.setDisplaySize(tamaño, tamaño);
        img.setInteractive();

        this.cubierta.add(img);

                // evento clic
                img.on("pointerdown", () => {
                      // sistema de puntos
                    if (img.texture.key === "pato1"){
                        this.puntos += 1;
                    }

                    if (img.texture.key === "pato2"){
                        this.puntos += 2;
                    }

                    if (img.texture.key === "pato3"){
                        this.puntos += 3;
                    }

                    // actualizar puntos
                    this.textoPuntos.setText("Puntos: " + this.puntos);

                    // animacion
                    this.tweens.add({
                        targets: img,
                        scale: 0,
                        duration: 200,
                        onComplete: () => {
                              img.destroy();

                    // VERIFICAR SI YA NO QUEDAN
                    if (this.cubierta.countActive(true) === 0){

                        this.add.text(
                            this.scale.width / 2,
                            120,
                            "GANASTE 🎉",
                            {
                                fontSize: "40px",
                                color: "#ffffff"
                            }
                        ).setOrigin(0.5);

                    }
                }
                   
                      })
                
                });

            }

        }
           let botonReiniciar = this.add.text(
            this.scale.width - 120,
            20,
            "Reiniciar",
            {
                fontSize: "24px",
                backgroundColor: "#083950",
                color: "#ffffff",
                padding: { x: 10, y: 5 }
            }
        );

        botonReiniciar.setInteractive();

        botonReiniciar.on("pointerdown", () => {

            this.scene.restart();

        });

    }

}

