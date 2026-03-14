class Carga  extends Phaser.Scene {

    constructor(){
        super("Carga");
    }

    preload () {
        //fondo carga
        this.add.rectangle(
            this.scale.width / 2,
            this.scale.height /2,
            this.scale.width,
            this.scale.height,
            0x222222
        );


     //texto
     let texto = this.add.text(
        this.scale.width / 2,
            this.scale.height / 2 - 50,
            "Cargando 0%",
            { fontSize: "30px", color: "#a6fdfd" }
        ).setOrigin(0.5);

     // barra fondo

       let barraFondo = this.add.rectangle(
            this.scale.width / 2,
            this.scale.height / 2,
            400,
            30,
            0x555555
        );
           // barra progreso
        let barra = this.add.rectangle(
            this.scale.width / 2 - 200,
            this.scale.height / 2,
            0,
            30,
            0x8cd4f4
        ).setOrigin(0, 0.5);

      // archivos a cargar
        this.load.image("pato1", "pato1.jpg");
        this.load.image("pato2", "pato2.jpg");
        this.load.image("pato3", "pato3.avif");

        // progreso de carga
        this.load.on("progress", (valor) => {

            let porcentaje = parseInt(valor * 100);

            texto.setText("Cargando " + porcentaje + "%");

            barra.width = 400 * valor;

        });

    }

    create(){

        // esperar un poco antes de cambiar de escena
        this.time.delayedCall(1500, () => {

            this.scene.start("Inicio");

        });

    }

}