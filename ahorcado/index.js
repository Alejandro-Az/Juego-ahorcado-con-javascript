// *** AHORCADO ***
/*  *** IDEAS ***
    - Un arreglo que contenga las palabras que se tienen que adivinar.
    
    - Al iniciar el juego, debe haber una pista tal como en el juego real, 
    por lo que debo agregar letras aleatorias al juego
    
    - Una condicional que diga que si la letra ingresada es correcta, se fije si no, que se borre

    - El ahorcado puede ser varias imagenes para no dibujar con css XD

    - Entonces en la misma condicional meter que si no es correcta, entonces cambie de imagen el ahorcado

    - Creo una cadena que almacene el estado actual de la adivinanza
 */

const palabrasAhorcado = [
  "javascript",
  "programacion",
  "desarrollador",
  "tecnologia",
  "html",
  "css",
  "react",
  "angular",
  "python",
  "nodejs",
  "git",
  "base de datos",
  "inteligencia artificial",
  "openai",
  "inteligencia",
  "algoritmo",
  "computadora",
  "ciberseguridad",
  "hacker",
  "seguridad",
  "frontend",
  "backend",
  "fullstack",
  "responsive",
  "framework",
  "base de datos",
  "servidor",
  "cliente",
  "gitHub",
  "version control",
  "web",
  "aplicacion",
  "internet",
  "dominio",
  "protocolo",
  "javascript",
  "typescript",
  "ecmascript",
  "webassembly",
  "webpack",
  "babel",
  "npm",
  "yarn",
  "docker",
  "cloud",
  "firebase",
  "graphql",
  "restful",
  "api",
  "json",
  "xml",
  "http",
  "https",
  "ssl",
  "tls",
  "crypto",
  "cookie",
  "jwt",
  "oauth",
  "sql",
  "nosql",
  "mongodb",
  "mysql",
  "postgresql",
  "sqlite",
  "sequelize",
  "mongoose",
  "express",
  "django",
  "flask",
  "rails",
  "laravel",
  "spring",
  "ruby",
  "java",
  "csharp",
  "dotnet",
  "php",
  "go",
  "swift",
  "kotlin",
  "rust",
  "cplusplus",
  "cplusplus",
  "html",
  "css",
  "sass",
  "less",
  "bootstrap",
  "materialize",
  "tailwind",
  "responsive",
  "mobile",
  "tablet",
  "desktop",
  "usabilidad",
  "accesibilidad",
  "seo",
  "google",
  "bing",
  "firefox",
  "chrome",
  "safari",
  "edge",
  "devtools",
  "debugging",
  "testing",
  "jasmine",
  "mocha",
  "jest",
  "cypress",
  "selenium",
  "agile",
  "scrum",
  "kanban",
  "pair programming",
  "code review",
  "continuous integration",
  "continuous deployment",
  "gitflow",
  "uml",
  "design patterns",
  "refactoring",
  "clean code",
  "agile",
  "scrum",
  "kanban",
  "pair programming",
  "code review",
  "continuous integration",
  "continuous deployment",
  "gitflow",
  "uml",
  "design patterns",
  "refactoring",
  "clean code",
];

let palabraAleatoria = palabrasAhorcado[Math.floor(Math.random() * palabrasAhorcado.length)];
let cadenaActual = ' ';
let cadenaCortada = "";

function iniciarJuego() {
    let contenedor = document.getElementById('contenedor');
    palabraAleatoria = palabrasAhorcado[Math.floor(Math.random() * palabrasAhorcado.length)];
    console.log(palabraAleatoria);

    for(let i = 0; i < palabraAleatoria.length; i++) {
        let letraAleatoria = palabraAleatoria[Math.floor(Math.random() * palabraAleatoria.length)];
        let letras = document.createElement('span');
        letras.innerHTML = '-';
        contenedor.appendChild(letras);

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
    let palabraCompletaValor = palabraCompleta.value;

    if(palabraCompletaValor == palabraAleatoria) {
        contenedor.innerHTML = "";
        let letras = document.createElement('p');
        letras.innerHTML = palabraCompletaValor;
        contenedor.appendChild(letras);
        alert('Felicidades acertaste!');
    } else {
        alert('Fallaste');
    }
}

function adivinarCaracter() {
    let contenedor = document.getElementById('contenedor');
    let caracter = document.getElementById('parcial');
    let valorCaracter = caracter.value;
    let palabraAleatoriaArray = palabraAleatoria.toLowerCase().split('');

    if(valorCaracter == "" || palabraAleatoriaArray.includes(valorCaracter.toLowerCase())) {
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
    } else {
        alert("Fallaste!");
    }

    if(cadenaCortada === palabraAleatoria) {
        alert("¡Felicidades completaste el desafío!");
        contenedor.innerHTML = "";
        iniciarJuego();
    }
}


/*
    Creo un bucle que itere por todas las letras de la cadena actual...
    
    Le digo que si la cadena coincide con un -...

    le digo que verifique si el caracter ingresado coincide en un punto
    de la cadena
*/

/* original iteracion en cada letra
    for(let i = 0; i < palabraAleatoria.length; i++) {
        if(valorCaracter == palabraAleatoria[i]) {
            if(cadenaCortada[i] == '-') {
                cadenaCortada = cadenaCortada.replace(cadenaCortada[i], valorCaracter);
                let palabraNueva = document.createElement('p');
            }
            
        }
    }
*/