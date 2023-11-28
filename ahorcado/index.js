const videojuegosAhorcado = [
    "Super Mario Bros",
    "The Legend of Zelda",
    "Final Fantasy",
    "Assassin's Creed",
    "Minecraft",
    "Fortnite",
    "Overwatch",
    "Grand Theft Auto",
    "Call of Duty",
    "League of Legends",
    "World of Warcraft",
    "FIFA",
    "Rocket League",
    "Dota 2",
    "Super Smash Bros",
    "God of War",
    "Pokémon",
    "Animal Crossing",
    "Cyberpunk 2077",
    "Red Dead Redemption",
    "Resident Evil",
    "Uncharted",
    "Halo",
    "Destiny",
    "Counter-Strike",
    "The Elder Scrolls",
    "Among Us",
    "Rainbow Six Siege",
    "Sonic the Hedgehog",
    "Donkey Kong",
    "Pac-Man",
    "Tetris",
    "Street Fighter",
    "Mortal Kombat",
    "Gears of War",
    "Dark Souls",
    "Borderlands",
    "Splatoon",
    "The Sims",
    "Star Wars: Battlefront",
    "Mass Effect",
    "The Witcher",
    "Silent Hill",
    "Kingdom Hearts",
    "Metal Gear Solid",
    "Fallout",
    "Bioshock",
    "Elder Scrolls",
  ];

let contenedorReiniciar = document.getElementById('contenedorReiniciar');
let contenedorInput = document.getElementById('contenedorInput');
let palabraAleatoria = videojuegosAhorcado[Math.floor(Math.random() * videojuegosAhorcado.length)];
let cadenaActual = ' ';
let cadenaCortada = "";

/* Imagenes */
let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let a4 = document.getElementById('a4');
let a5 = document.getElementById('a5');
let a6 = document.getElementById('a6');

/* Puntos y derrotaas */
let victorias = document.getElementById('victorias');
let contadorVictorias = 0;
let contadorFallos = 0;

function iniciarJuego() {
    let contenedor = document.getElementById('contenedor');
    palabraAleatoria = videojuegosAhorcado[Math.floor(Math.random() * videojuegosAhorcado.length)];
    console.log(palabraAleatoria);

    for(let i = 0; i < palabraAleatoria.length; i++) {
        palabraAleatoria = palabraAleatoria.toLowerCase();
        let letraAleatoria = palabraAleatoria[Math.floor(Math.random() * palabraAleatoria.length)];
        let letras = document.createElement('span');
        letras.innerHTML = '-';
        contenedor.appendChild(letras);

        if(palabraAleatoria[i] == " ") {
            letras.innerHTML = " ";
            contenedor.appendChild(letras);
        }

        if(letraAleatoria == palabraAleatoria[i]) {
            letras.innerHTML = letraAleatoria;
            contenedor.appendChild(letras);
        }
    }    

    cadenaActual = contenedor.textContent;
    cadenaCortada = cadenaActual.trim();
    console.log(cadenaCortada);
}

function adivinarCompleta() {
    let contenedor = document.getElementById('contenedor');
    let palabraCompleta = document.getElementById('completa');
    let caracter = document.getElementById('parcial');
    let palabraCompletaValor = palabraCompleta.value;

    if(palabraCompletaValor != ""){
        if(palabraCompletaValor.toLowerCase() == palabraAleatoria.toLowerCase()) {
            contenedor.innerHTML = "";
            let letras = document.createElement('p');
            letras.innerHTML = palabraCompletaValor;
            contenedor.appendChild(letras);
            alert('Felicidades, acertaste!');
            victorias.innerText = "";
            contadorVictorias++;
            victorias.innerText = contadorVictorias;
            contadorFallos = 0;
            cambiarImagen(contadorFallos);
            contenedor.innerHTML = "";
            palabraCompleta.value = "";
            caracter.value = "";
            iniciarJuego();
        } else {
            alert('Fallaste');
            contadorFallos++;
            cambiarImagen(contadorFallos);
        }
    } else {
        alert("Ingresa tu palabra");
    }
}

function adivinarCaracter() {
    let palabraCompleta = document.getElementById('completa');
    let contenedor = document.getElementById('contenedor');
    let caracter = document.getElementById('parcial');
    let valorCaracter = caracter.value;
    let palabraAleatoriaArray = palabraAleatoria.toLowerCase().split('');

    if(valorCaracter != "") {
        if(palabraAleatoriaArray.includes(valorCaracter.toLowerCase())) {
            for (let letra in palabraAleatoria.toLowerCase()) {
                if (palabraAleatoria[letra].toLowerCase() == valorCaracter) {
                    if (cadenaCortada[letra] == '-') {
                        cadenaCortada = cadenaCortada.substring(0, letra) + valorCaracter + cadenaCortada.substring(parseInt(letra) + 1);
                    }
                }
            }
    
            contenedor.innerHTML = "";
            let momentoActual = document.createElement('p');
            momentoActual.innerHTML = cadenaCortada;
            contenedor.appendChild(momentoActual);
            console.log(cadenaCortada);
            palabraCompleta.value = "";
            caracter.value = "";
        } else {
            palabraCompleta.value = "";
            caracter.value = "";
            alert("Fallaste!");
            contadorFallos++;
            cambiarImagen(contadorFallos);
        }
    } else {
        alert("Ingresa una letra");
    }

    if(cadenaCortada === palabraAleatoria) {
        alert("¡Felicidades completaste el desafío!");
        contenedor.innerHTML = "";
        victorias.innerText = "";
        contadorVictorias++;
        victorias.innerText = contadorVictorias;
        contadorFallos = 0;
        cambiarImagen(contadorFallos);
        iniciarJuego();
    }
}

function cambiarImagen(cantidadFallos) {
    let contenedor = document.getElementById('contenedor');

    if(cantidadFallos == 0) {
        a1.style.display = 'block';
        a2.style.display = 'none';
        a3.style.display = 'none';
        a4.style.display = 'none';
        a5.style.display = 'none';
        a6.style.display = 'none';
    }

    if(cantidadFallos == 1) {
        a1.style.display = 'none';
        a2.style.display = 'block';
        a3.style.display = 'none';
        a4.style.display = 'none';
        a5.style.display = 'none';
        a6.style.display = 'none';
    }
    
    if(cantidadFallos == 2) {
        a1.style.display = 'none';
        a2.style.display = 'none';
        a3.style.display = 'block';
        a4.style.display = 'none';
        a5.style.display = 'none';
        a6.style.display = 'none';
    } 
    
    if(cantidadFallos == 3) {
        a1.style.display = 'none';
        a2.style.display = 'none';
        a3.style.display = 'none';
        a4.style.display = 'block';
        a5.style.display = 'none';
        a6.style.display = 'none';
    } 
    
    if(cantidadFallos == 4) {
        a1.style.display = 'none';
        a2.style.display = 'none';
        a3.style.display = 'none';
        a4.style.display = 'none';
        a5.style.display = 'block';
        a6.style.display = 'none';
    }
    
    if(cantidadFallos == 5) {
        a1.style.display = 'none';
        a2.style.display = 'none';
        a3.style.display = 'none';
        a4.style.display = 'none';
        a5.style.display = 'none';
        a6.style.display = 'block';
        alert('Has perdido...');
        contenedorInput.style.display = "none";
        contenedorReiniciar.style.display = "block";
    }

    if(cantidadFallos == 6) {
        a1.style.display = 'block';
        a2.style.display = 'none';
        a3.style.display = 'none';
        a4.style.display = 'none';
        a5.style.display = 'none';
        a6.style.display = 'none';
        contadorVictorias = 0;
        victorias.innerText = contadorVictorias;
        contadorFallos = 0;
        contenedor.innerHTML = "";
        contenedorInput.style.display = "block";
        contenedorReiniciar.style.display = "none";
        iniciarJuego();
    }
}
