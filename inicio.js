class Inicio extends Phaser.Scene {

    constructor(){
        super("Inicio");
    }

    create(){

        // fondo
        this.cameras.main.setBackgroundColor("#1a1a1a");
        
        // titulo
        this.add.text(
            this.scale.width / 2, 
            this.scale.height / 2 - 120,
            "DESCUBRE LA IMAGEN",
            {
                fontSize: "40px",
                color: "#86f6f2"
            }
        ).setOrigin(0.5);

         // instrucciones
        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 - 40,
            "Elimina las imagenes\npara descubrir el mensaje",
            {
                fontSize: "22px",
                align: "center",
                color: "#ffffff"
            }
        ).setOrigin(0.5);

         // boton jugar
        let boton = this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 + 80,
            "JUGAR",
            {
                fontSize: "32px",
                color: "#ffffff",
                backgroundColor: "#7c66d6",
                padding: { x: 20, y: 10 }
            }
        ).setOrigin(0.5);

        boton.setInteractive();

        boton.on("pointerdown", () => {
            this.scene.start("Juego");
        });

        
        // efecto hover
        boton.on("pointerover", () => {
            boton.setStyle({ color: "#281294" });
        });

        boton.on("pointerout", () => {
            boton.setStyle({ color: "#ffffff" });
        });

    }

}
