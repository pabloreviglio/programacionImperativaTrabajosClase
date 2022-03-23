const prompt = require("prompt-sync")({ sigint: true });
console.clear();

// Ejercicio 1:
//  Deberás escribir un objeto literal llamado estudiante que contenga las siguientes propiedades que deberás completar con tus datos:
// nombre
// apellido 
// camada 
// esParcial (VERDADERO)

estudiante = {
    nombre: "Pablo",
    apellido: "Reviglio",
    camada: '1',
    esParcial: true,
}


// 2.  Crear una función que, pasado un número entero (la futura nota), redondee según la siguiente regla: 
// 	- NOTA < 4 : desaprobado
// - 4 < NOTA < 7 : debe rendir examen final 
// 	- NOTA >= 7 : promocionado.  
// La función deberá retornar la condición final del alumno (solo retorna la palabra). 
// Al momento de llamar a la función, deberás mostrar la siguiente frase: 
// 	“El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICIÓN]” 

let nota = 5
estudiante.veredicto = function(nota) {
    if (Math.round(nota) < 4) {
        return `El alumno obtuvo una nota igual a ${nota} por lo tanto su condición es desaprobado`;
    } else if (Math.round(nota) < 7) {
        return `El alumno obtuvo una nota igual a ${nota} por lo tanto su condición es debera rendir el examen final`;
    } else if (Math.round(nota) >= 7) {
        return `El alumno obtuvo una nota igual a ${nota} por lo tanto su condición es promocionado`;
    } else {};
};

console.log(estudiante.veredicto(6));


// Ejercicio 2:
// Crea 1 array llamado clase. 
// Crea 3 objetos literales con las propiedades nombres, apellidos y bimestre de 3 compañeros. 
// Ej: Esteban Piazza 1 - Leandro Borrelli 1 - Martín Cejas 1
// Agrega estos 3 objetos al array llamado clase.
// Imprimir el array para ver que contenga esos objetos.


let clase = [{
        nombres: 'Esteban',
        apellidos: 'Piazza',
        bimestre: 1,
    },
    {
        nombres: 'Leandro',
        apellidos: 'Borelli',
        bimestre: 1,
    },
    {
        nombres: 'Martin',
        apellidos: 'Cejas',
        bimestre: 1,
    }
];
console.log(clase);


// Crea una función que reciba el array clase como parámetro e incremente en 1 el número de bimestre de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una estructura de repetición. 
// Deberás hacer el correcto llamado de la función mostrando el array clase antes y después de llamar a siguienteCursada. 

function siguienteCursada(parametro) {

    for (let i = 0; i < parametro.length; i++) {
        clase[i].bimestre++
    };
    return clase
};
console.log(siguienteCursada(clase));



// Ejercicio 3:
// 1. Crear una función que apruebe o desapruebe alumnos en base a su asistencia y a su progreso completo en PlayGround (true, false). Para ello deberán: 
// Crear una constante asistenciaMinima que almacene el número mínimo de asistencias permitidas para la aprobación de la materia, en este caso serán 23 asistencias mínimas. 
// La función deberá recibir como parámetros la cantidad de asistencias  y la condición final ante PlayGround del alumno.
// Un alumno, será aprobado si tiene la cantidad de asistencias mínima y su progreso final está completo. Si alguna de estas opciones no se cumple, el alumno será automáticamente desaprobado. 
// Deberá retornar un string aprobado o desaprobado según corresponda


const asistenciaMinima = 0;
let condFinalPlaygroun = ''

function evaluacion(asistenciasMinimas, condFinalPlayground) {
    if (asistenciasMinimas < 23) {
        return 'desaprobado';
    } else if (condFinalPlayground == 'incompleto') {
        return 'desaprobado';
    } else {
        return 'aprobado';
    };
};
console.log(evaluacion(24, 'completo'));