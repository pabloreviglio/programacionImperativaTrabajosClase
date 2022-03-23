const prompt = require("prompt-sync")({ sigint: true });
console.clear();


//la lista de clientes.
// let arrayCuentas = [{
//         nroCuenta: 5486273622,
//         tipoDeCuenta: "Cuenta Corriente",
//         saldoEnPesos: 27771,
//         titularCuenta: "Abigael Natte",
//     },
//     {
//         nroCuenta: 1183971869,
//         tipoDeCuenta: "Caja de Ahorro",
//         saldoEnPesos: 8675,
//         titularCuenta: "Ramon Connell",
//     },
//     {
//         nroCuenta: 9582019689,
//         tipoDeCuenta: "Caja de Ahorro",
//         saldoEnPesos: 27363,
//         titularCuenta: "Jarret Lafuente",
//     },
//     {
//         nroCuenta: 1761924656,
//         tipoDeCuenta: "Cuenta Corriente",
//         saldoEnPesos: 32415,
//         titularCuenta: "Ansel Ardley",
//     },
//     {
//         nroCuenta: 7401971607,
//         tipoDeCuenta: "Cuenta Unica",
//         saldoEnPesos: 18789,
//         titularCuenta: "Jacki Shurmer",
//     },
// ];
// // podes continuar tu codigo a partir de aca!

// // 2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
// // propiedad llamada “clientes” que estará compuesta de la lista de objetos
// // obtenidos en el punto anterior.
// // 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// // nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// // objeto cliente que corresponda con ese nombre ingresado.
// // Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);


// let banco = {
//     clientes: arrayCuentas,
//     consultarCliente: function(nombreCliente) {
//         let clienteBuscado = [];
//         for (let i = 0; i < this.clientes.length; i++) {
//             if (this.clientes[i].titularCuenta == nombreCliente) {
//                 return clienteBuscado = this.clientes[i];
//             } else {};
//         };
//         return clienteBuscado = 'El cliente no existe'
//     },
// }
// console.log(banco.consultarCliente('Jarret Lafuente'))




// // 4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
// // cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
// // correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
// // Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
// // nuevo saldo es: XXXX”.

// banco.deposito = function(nombreCliente, monto) {
//     let clienteBuscado = [];
//     for (let i = 0; i < this.clientes.length; i++) {
//         if (this.clientes[i].titularCuenta == nombreCliente) {
//             this.clientes[i].saldoEnPesos += monto;
//             return clienteBuscado = this.clientes[i];

//         } else {};
//     };
// };

// console.log(banco.deposito('Jarret Lafuente', 1000));




// // 5. Crear un último método llamado extracción que recibirá también dos parámetros:
// // el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
// // correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
// // menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
// // De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
// // saldo es: XXXX”.
// // Si llegaste hasta acá, felicidades, el equipo de desarrollo y el tech leader están
// // impresionados con tu trabajo.

// banco.extraccion = function(nombreCliente, monto) {
//     let clienteBuscado = [];
//     for (let i = 0; i < this.clientes.length; i++) {
//         if (this.clientes[i].titularCuenta == nombreCliente) {
//             this.clientes[i].saldoEnPesos -= monto;
//             return clienteBuscado = this.clientes[i];

//         } else {};
//     };
// };

// console.log(banco.extraccion('Jarret Lafuente', 1000));





// Propiedad única
// Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
// parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
// parámetro la propiedad que fue pasada como string.
// Ejemplo:
// let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
// propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
// propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]


let array = [{ nombre: 'Lean', edad: 27 }, { nombre: 'Eze', edad: 49 }]

propiedadUnica = function(array, propiedad) {
    let arrayUnico = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].propiedad !== "") {
            arrayUnico.push([propiedad] + ': ' + array[i][propiedad]);
        }

    }
    return arrayUnico;
}
console.log(propiedadUnica(array, 'nombre'));



// Calculador de notas
// Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
// ● Nombre
// ● Número de legajo
// ● Lista de notas
// Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
// nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
// todos los métodos y propiedades que puedan hacer falta para que el programa funcione
// correctamente de la manera solicitada.
// 

alumnos = {
    nombre: 'Pablo Reviglio',
    numeroDeLegajo: 20150,
    promedioMinimo: 7,
    listaDeNotas: [5, 6, 8, 7, 7, 10, 8, 9, 4],
    promedio: function() {
        let total = 0;
        let cantidad = 0;
        let promedioPropio = 0;
        for (let i = 0; i < this.listaDeNotas.length; i++) {
            total += this.listaDeNotas[i];
            cantidad++;
        };
        promedioPropio = total / cantidad;
        if (promedioPropio >= this.promedioMinimo) {
            return ` Alumno ${this.nombre} , su promedio general es : ${promedioPropio} FELICITACIONES Ud. esta APROBADO!!!`;
        } else {
            return `Alumno ${this.nombre} , su promedio general es : ${promedioPropio} DEBERA ESFORZASE MAS`
        };
    },
};
console.log(alumnos.promedio());

// Ganadores

let alicia = [10, 80, 75];
let bob = [90, 20, 25];
let ganadorEtapa = [];

function encontrarGanador(a, b) {

    let aTotalVotos = 0
    let bTotalVotos = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aTotalVotos += a[i];
            ganadorEtapa.push(' gano participante a');

        } else {
            bTotalVotos += b[i];
            ganadorEtapa.push('gano participante b');
        };
    };
    if (aTotalVotos > bTotalVotos) {
        console.table(ganadorEtapa)
        return ` Ganador el participante a con una diferencia de ${aTotalVotos-bTotalVotos} votos `
    } else if (bTotalVotos > aTotalVotos) {
        console.table(ganadorEtapa)
        Return ` Ganador el participante b con una diferencia de ${bTotalVotos-aTotalVotos} votos `
    } else {
        return ` Los participantes a y b han empatado con un total  de ${aTotalVotos} votos cada uno `
    };
};

console.log(encontrarGanador(alicia, bob));


//digitalHouse

let digitalHouse = function(numero1, numero2) {
    for (let i = 1; i <= 100; i++) {
        if (i % numero1 == 0 && i % numero2 == 0) {
            console.log('Digital House');
        } else if (i % numero1 == 0) {
            console.log('Digital');
        } else if (i % numero2 == 0) {
            console.log('House');
        } else {
            console.log(i);
        };

    };

};
console.log(digitalHouse(2, 2));


// sumArray()... Reloaded

const arrayx = [1, 1, 2, 3, 4, 5, 6, 7, 9];

let sumaArray = function(a) {
    let suma = 0;
    for (let i = 0; i < a.length; i++) {
        suma += a[i];
    };
    return suma
};
console.log(sumaArray(arrayx));

// invertir array 
const arrayAInvertir = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let invertirArray = function(arreglo) {
    let invertido = []
    for (let i = arreglo.length - 1; i >= 0; i--) {
        invertido.push(arreglo[i]);

    };
    return invertido;
};
console.log(invertirArray(arrayAInvertir));