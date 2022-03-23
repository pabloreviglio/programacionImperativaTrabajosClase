const prompt = require("prompt-sync")({ sigint: true });
console.clear();




/*
Teniendo en cuenta esta información, se nos pide que hagamos lo siguiente:
1. Descargar y analizar el siguiente archivo, el cual contiene la lista de clientes
(cuentas bancarias).*/



/*la lista de clientes.
-Arraycuentas = contiene propiedades del objeto y sus valores (cada array contiene una propiedad con sus valores)
-Contenido o strings de array cuentas = valores de las propiedades del objeto a definir
*/

let arrayCuentas = [{
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    { // banco.buscarCliente("Ramon Connell")
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];



/*2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” que estará compuesta de la lista de objetos
obtenidos en el punto anterior.
*/

// let banco = {
//     clientes: arrayCuentas,
// };
// console.log(banco.clientes);


/* 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”); */

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function(clienteABuscar) {
        for (let i = 0; i < this.clientes.length; i++) {
            let cliente = this.clientes[i];
            if (cliente.titularCuenta == clienteABuscar) {
                return cliente;
            } else {

            };
        };
        return 'Ese cliente no existe';
    },

};
let clienteEncontrado = banco.consultarCliente('Jarret Lafuente');
console.log(clienteEncontrado);





/* 
4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”.*/

banco.deposito = function(clienteABuscar, monto) {
    for (let i = 0; i < this.clientes.length; i++) {
        let cliente = this.clientes[i];
        if (cliente.titularCuenta == clienteABuscar) {
            cliente.saldoEnPesos = cliente.saldoEnPesos + monto;

            console.log(`El monto depositado s: ${monto}, su nuevo saldo es: ${cliente.saldoEnPesos}`)
            console.log(cliente)
        } else {

        };
    };
    return 'Ese cliente no existe';
};

banco.deposito('Jarret Lafuente', 1000)
    /* 
    5. Crear un último método llamado extracción que recibirá también dos parámetros:
    el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
    correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
    menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
    De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
    saldo es: XXXX”.*/

banco.extraccion = function(clienteABuscar, monto) {
    for (let i = 0; i < this.clientes.length; i++) {
        let cliente = this.clientes[i];
        if (cliente.titularCuenta == clienteABuscar) {
            cliente.saldoEnPesos = cliente.saldoEnPesos - monto;

            console.log(`El monto retirado s: ${monto}, su nuevo saldo es: ${cliente.saldoEnPesos}`)
            console.log(cliente)
        } else {

        };
    };
    return 'Ese cliente no existe';
};

banco.extraccion('Jarret Lafuente', 1000)