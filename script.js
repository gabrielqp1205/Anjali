/* =========================
   MÚSICA
========================= */

const musica = document.getElementById("musica");

const botonMusica =
    document.getElementById("botonMusica");


function controlarMusica() {

    if (musica.paused) {

        musica.play();

        botonMusica.textContent = "🔊 Música";

    } else {

        musica.pause();

        botonMusica.textContent = "🔇 Música";

    }

}


/* =========================
   PELÍCULAS
========================= */

const peliculas = {

    2: "imagenes/500dias.jpg",

    3: "imagenes/efecto.jpg",

    4: "imagenes/scary.jpg",

    5: "imagenes/medianoche.jpg",

    6: "imagenes/tiempo.jpg",

    7: "imagenes/esposa.jpg"

};


/* =========================
   CAMBIAR FONDO
========================= */

function cambiarFondo(numero) {

    const fondo =
        document.getElementById("fondo");


    if (numero === 1) {

        fondo.style.backgroundImage = "none";

        fondo.style.opacity = "0";

        return;
    }


    fondo.style.opacity = "0";


    setTimeout(function() {

        fondo.style.backgroundImage =
            `url("${peliculas[numero]}")`;

        fondo.style.opacity = "1";

    }, 400);

}


/* =========================
   CAMBIAR PÁGINA
========================= */

function siguiente(numero) {

    const paginas =
        document.querySelectorAll(".pagina");


    paginas.forEach(function(pagina) {

        pagina.classList.remove("activa");

    });


    const nuevaPagina =
        document.getElementById(
            "pagina" + numero
        );


    nuevaPagina.classList.add("activa");


    cambiarFondo(numero);


    /* =========================
       MÚSICA DESDE 0:00
       ========================= */

    if (numero === 2) {

        musica.pause();

        musica.currentTime = 0;

        musica.play().then(function() {

            botonMusica.textContent =
                "🔊 Música";

        }).catch(function(error) {

            console.log(
                "No se pudo iniciar la música:",
                error
            );

        });

    }

}
