const prompt = require("prompt-sync")({ sigint: true });
console.clear();


/*Propiedad única
Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
parámetro la propiedad que fue pasada como string.
Ejemplo:
let array = [ { nombre: 'Lean', edad: 27 }, { nombre: 'Eze', edad: 49} ]
propiedadUnica(array, 'edad') debe retornar [ { edad: 27 }, { edad: 49 } ]
propiedadUnica(array, 'nombre') debe retornar [ { nombre: 'Lean'}, { nombre: 'Eze' } ]*/




// let array = [{ nombre: 'Lean', edad: 27 }, { nombre: 'Eze', edad: 49 }];

// function propiedadUnica(array, propiedad) {
//     let array1 = [];
//     for (let i = 0; i < array.length; i++) {
//         let objeto = array[i];
//         // if (objeto[propiedad]) { // !undefined = true, !null = true,
//         let nuevoObjeto = {
//             [propiedad]: objeto[propiedad],
//         };
//         array1.push(nuevoObjeto);

//         // }
//     }

//     return array1;
// }
// console.log(propiedadUnica(array, 'edad'));


// Calculador de notas
// Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
// ● Nombre
// ● Número de legajo
// ● Lista de notas
// Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
// nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
// todos los métodos y propiedades que puedan hacer falta para que el programa funcione
// correctamente de la manera solicitada.
let total = 0;
let alumno = {
    nombre: 'Pablo',
    numeroDeLegajo: 20150,
    listaDeNotas: [5, 4, 10, 5, 8, 5, 5, 10],
    notaMinima: 7,
    promedio: function() {
        for (let i = 0; i < this.listaDeNotas.length; i++) {
            total = total + this.listaDeNotas[i];
        };
        z = this.listaDeNotas.length
        if (total / z < this.notaMinima) {
            return `Ha reprobado, su nota es: ${total/z}`
        } else {
            return `Ha aprobado, su nota es: ${total/z}`
        };
    }
}

console.log(alumno.promedio())