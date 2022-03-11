const prompt = require("prompt-sync")({ sigint: true });
console.clear();
/*
// Ejercicio 1
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]


// Ejercicio 2 

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let peliculasEnMayuscula = [];
for (let letra = 0; letra < peliculas.length; letra++) {
    peliculasEnMayuscula.push(peliculas[letra].toUpperCase());
    console.log(peliculasEnMayuscula[letra]);
}
console.log(peliculasEnMayuscula);

// Ejercicio 3 


let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let peliculas1 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
let peliculasEnMayuscula = [];
for (let letra = 0; letra < peliculas.length; letra++) {
    peliculasEnMayuscula.push(peliculas[letra].toUpperCase());
}
for (let letra1 = 0; letra1 < peliculas1.length; letra1++) {
    peliculasEnMayuscula.push(peliculas1[letra1].toUpperCase());
}

console.log(peliculasEnMayuscula);

// Ejercicio 4

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let peliculas1 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
let videoJuego = peliculas1.pop()
let peliculasEnMayuscula = [];
for (let letra = 0; letra < peliculas.length; letra++) {
    peliculasEnMayuscula.push(peliculas[letra].toUpperCase());
}
for (let letra1 = 0; letra1 < peliculas1.length; letra1++) {
    peliculasEnMayuscula.push(peliculas1[letra1].toUpperCase());
}

console.log(peliculasEnMayuscula);
console.log(videoJuego);


// Ejercicio 5

let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
let euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
let comparacion = ""
let resultado = [];

for (let a = 0; a < asiaScores.length; a++) {
    if (asiaScores[a] == euroScores[a]) {
        let comparacion = "iguales";
        resultado.push(a, comparacion);
    } else {
        let comparacion = "diferentes";
        resultado.push(a, comparacion);
    };
    console.log(resultado);
};



//Array inverso

//Ejercicio 1:

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function imprimirInverso() {
    console.log(numeros.reverse());
};
imprimirInverso();


//Ejercicio 2:

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let inversoNumeros = []

function imprimirInverso() {
    let inversoNumeros = numeros.reverse()
    console.log(inversoNumeros);
};
imprimirInverso();


//sumaArray()

let numeros = [0, 2, 3, 4, 5, 6, 7, 8, 9];
let suma = 0

function sumArray() {
    for (let a = 0; a < numeros.length; a++) {
        suma = suma + numeros[a];
    }
    console.log(suma);
}
sumArray()



//Simulación Array.join()

let letras = ['p', 'a', 'b', 'l', 'o'];
let join = ''

function ArrayJoin() {
    for (let a = 0; a < letras.length; a++) {
        join = join + letras[a];
    }
    console.log(join);
}
ArrayJoin()

*/