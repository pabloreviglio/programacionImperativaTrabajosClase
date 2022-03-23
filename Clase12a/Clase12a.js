const prompt = require("prompt-sync")({ sigint: true });
console.clear();
//Xjson

// let alumno = { nombre: "juan", edad: 33 };
// console.log(JSON.stringify(alumno));


// const alicia = [10, 80, 75];
// const bob = [90, 20, 25];
// puntosAlicia = 0;
// puntosBob = 0;

// function encontraGanador(a, b) {
//     for (let i = 0; i < alicia.length; i++) {
//         if (alicia[i] > bob[i]) {
//             puntosAlicia++;
//         } else {
//             puntosBob++;
//         };
//     };
//     if (puntosAlicia > puntosBob) {
//         return `El ganandor es Alicia`
//     } else {
//         return `El ganandor es bob`
//     }

// };

// console.log(encontraGanador(alicia, bob));

// let alicia = [10, 80, 75];
// let bob = [90, 20, 85];


// concurso = {
//     etapas: [],
//     ganador: "",
//     encontrarGanador: function(a, b) {
//         let ganoA = 0;
//         let ganoB = 0;
//         for (let i = 0; i < a.length; i++) {
//             if (a[i] > b[i]) {
//                 ganoA++;
//                 this.etapas.push('Alicia');
//             } else {
//                 ganoB++;
//                 this.etapas.push('Bob');
//             };
//         }
//         if (ganoA > ganoB) {
//             return `Alicia`;
//         } else if (ganoB > ganoA) {
//             return 'Bob';
//         } else {
//             return 'Empate';
//         }
//     },
// }


// console.log(concurso.encontrarGanador(alicia, bob));
// console.table(concurso.etapas);

// Bonus Extra
// //Creá la función digitalHouse() que recibirá 2 números como parámetros. La función
// deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los
// siguientes criterios:
// ● Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá
// mostrar el string “Digital” en lugar del número.
// ● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá
// mostrar el string “House” en su lugar del número.
// ● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string
// “Digital House” en lugar del número

function digitalHouse(a, b) {
    let print = "";
    for (let i = 1; i <= 100; i++) {
        let condicionA = i % a;
        let condicionB = i % b;
        if (condicionA + condicionB == 0) {
            print = 'Digital House';
        } else if (condicionB == 0 && condicionA !== 0) {
            print = 'Digital';
        } else if (condicionA == 0 && condicionB !== 0) {
            print = 'House';
        } else {
            print = i;
        }
        console.log(i, a, b, print);
    };
};


digitalHouse(2, 3);