const prompt = require("prompt-sync")({ sigint: true });
console.clear();


// function digitalHouse(a, b) {
//     let print = "";
//     for (let i = 1; i <= 100; i++) {
//         let condicionA = i % a;
//         let condicionB = i % b;
//         if (condicionA + condicionB == 0) {
//             print = 'Digital House';
//         } else if (condicionB == 0 && condicionA !== 0) {
//             print = 'Digital';
//         } else if (condicionA == 0 && condicionB !== 0) {
//             print = 'House';
//         } else {
//             print = i;
//         }
//         console.log(i, a, b, print);
//     };
// };


// digitalHouse(2, 3);

// Pasar color Hexa a decimal

// function pasaA16(num) {
//     let salida = "ff";
//     if (num <= 255) {
//         salida = num.toString(16);
//     }

//     if (salida.length == 1) {
//         salida = "0" + salida;
//     };

//     return salida.toUpperCase();
// }



// function RGB(r, g, b) {
//     return pasaA16(r) + pasaA16(g) + pasaA16(b);
// }



// console.log(RGB(255, 255, 255));
// console.log(RGB(255, 255, 300));
// console.log(RGB(0, 0, 0));
// console.log(RGB(148, 0, 211));

// Loop de pares


// console.log(loopDePares(5));

// //Loop de impares con palabra


// loopDeImpares = function(numero, palabra) {
//     for (let i = 0; i <= 100; i++) {
//         suma = i + numero
//         if (suma % 2 !== 0)
//             console.log(`${i} , ${palabra} `);
//     } else {

//     };
// };
// loopDeImpares(5, 'Pepe');

//Sumatoria

// sumatoria = function(numero) {
//     let suma = 0;
//     for (let i = 0; i <= numero; i++) {
//         suma = suma + i
//     }
//     return ` Sumatoria ${suma}`
// }
// console.log(sumatoria(7));

// //Nuevo arreglo

// nuevoArreglo = function(numero) {
//     let arreglo = [];
//     for (let i = 0; i <= numero; i++) {
//         arreglo.push(i)
//     }
//     return ` El nuevo arreglo es [${arreglo}]`
// }
// console.log(nuevoArreglo(7));



// //Similar String.split()

// split = function(texto) {
//     const array = [];
//     for (let i = 0; i < texto.length; i++) {
//         array[i] = texto.slice(i, i + 1);

//     }
//     console.log(array)
// }
// split('Hola')

// console.log('pablo'.split(''));

// //Carácter del medio


// caracterDelMedio = function(string) {
//     let caracterDelMedio = ""
//     if (string.length % 2 == 0) {
//         return string = string.slice((string.length / 2) - 1, (string.length / 2) + 1)
//     } else {};
//     return string = string.slice(Math.trunc(string.length / 2), Math.trunc(string.length / 2) + 1)
// };
// console.log(caracterDelMedio('12345678'));

// //Mover ceros a lo último

// const numerosArray = [0, 1, 2, 0, 3, 4, 5, 0, 6, 7, 8]
// moverCeros = function(numerosArray) {
//     let u = 0;
//     let v = 0;
//     const cerosArray = [];
//     const noCerosArray = [];
//     for (let i = 0; i < numerosArray.length; i++) {
//         if (numerosArray[i] == 0) {
//             cerosArray[u] = numerosArray[i];
//             u++;
//         } else {
//             noCerosArray[v] = numerosArray[i];
//             v++;
//         };
//     };
//     return numerosArray = noCerosArray.concat(cerosArray);
// };
// console.log(moverCeros(numerosArray));

// //Manejando dos arreglos

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const array2 = ['h', 'o', 'l', 'a', 'e', 's', 't', 'a', 's'];
// arrayHandler = function(array1, array2) {
//     for (let i = 0; i < array1.length; i++) {
//         console.log(`Soy ${array1[i]} y yo soy ${array2[i]}`)
//     }

// }
// arrayHandler(array1, array2);

// //Conversor a camelCase

// camelCase = function(kcase) {
//     let result = "";
//     for (let i = 0; i < kcase.length; i++) {
//         if (kcase[i] == '-' || kcase[i] == '_') {
//             result += kcase[i + 1].toUpperCase();
//             i++
//         } else {
//             result += kcase[i]
//         }
//     }
//     return result;
// };
// console.log(camelCase('Yo-me_LlAmo-lucas'));

// //Palíndromo
// let palabra = prompt('ngrese la palabra para saber si es capicua: ');
// let x = palabra.length;
// palindromo = function(palabra) {
//     for (let i = 0; i < palabra.length; i++) {
//         x--;
//         if (palabra[i] == palabra[x]) {} else {
//             return 'false';
//         };
//     };
//     return 'true';
// };
// console.log(palindromo(palabra));

//ganadores;