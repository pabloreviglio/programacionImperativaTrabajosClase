const prompt = require("prompt-sync")({ sigint: true });
console.clear();


// 1. A partir de el siguiente array de edades nos solicitan realizar lo siguiente:
//const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
//const edades = [21, 12, 15, 18, 25];
//const edades = [2, 11, 54, 63, 24];

// a. Obtener en un nuevo array las edades menores a 18.

function menorDieciocho(arreglo) {
    let arregloMenor18 = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 18) {
            arregloMenor18.push(arreglo[i]);
        };
    };
    return arregloMenor18;
};
console.log(menorDieciocho(edades));



// b. Obtener en un nuevo array las edades mayor o igual a 18.\

function mayorDieciocho(arreglo1) {
    let arregloMayor18 = [];
    for (let i = 0; i < arreglo1.length; i++) {
        if (arreglo1[i] >= 18) {
            arregloMayor18.push(arreglo1[i]);
        };
    };
    return arregloMayor18;
};
console.log(mayorDieciocho(edades));


// c. Obtener en un nuevo array las edades igual a 18.
function igualDieciocho(arreglo2) {
    let arregloIgual18 = [];
    for (let i = 0; i < arreglo2.length; i++) {
        if (arreglo2[i] == 18) {
            arregloIgual18.push(arreglo2[i]);
        };
    };
    return arregloIgual18;
};
console.log(igualDieciocho(edades));

// d. Obtener el menor.

function menor(arreglo3) {
    let menorEdad = arreglo3[0];
    for (let i = 0; i < arreglo3.length; i++) {
        if (arreglo3[i] < menorEdad) {
            menorEdad = arreglo3[i];
        };
    };
    return menorEdad;
};
console.log(menor(edades));

// e. Obtener el mayor.
function mayor(arreglo4) {
    let mayorEdad = arreglo4[0];
    for (let i = 0; i < arreglo4.length; i++) {
        if (arreglo4[i] > mayorEdad) {
            mayorEdad = arreglo4[i];
        };
    };
    return mayorEdad;
};
console.log(mayor(edades));

f.Obtener el promedio de edades.

function edadPromedio(arreglo5) {
    let total = 0;
    for (let i = 0; i < arreglo5.length; i++) {
        total += arreglo5[i];
    };
    let promedio = total / (arreglo5.length)
    return promedio;
};
console.log(edadPromedio(edades));

// g. Incrementar en 1 todas las edades.

function edadIncremento(arreglo6) {
    for (let i = 0; i < arreglo6.length; i++) {
        arreglo6[i]++
    };
    return arreglo6;
};
console.log(edades);
console.log(edadIncremento(edades));


const arrayCuentas = [{
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: "$3,253.40",
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: "$3,229.45",
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: "$1,360.19",
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: "$3,627.12",
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: "$1,616.52",
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: "$1,408.68",
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
];

// a. Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

let banco = {
    cuentas: arrayCuentas,
    buscaMenoresTreinta: function() {
        let menoresTreinta = [];
        let cliente = [];
        for (let i = 0; i < this.cuentas.length; i++) {
            cliente[i] = this.cuentas[i];
            if (cliente[i].edadTitular < 30) {
                menoresTreinta.push(cliente[i])
            } else {};
        };
        return menoresTreinta;
    }
}
console.log(banco.buscaMenoresTreinta());


// b. Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a
// 30.
banco.buscaMayorIgualTreinta = function() {
    let mayoresTreinta = [];
    let cliente = [];
    for (let i = 0; i < this.cuentas.length; i++) {
        cliente[i] = this.cuentas[i];
        if (cliente[i].edadTitular >= 30) {
            mayoresTreinta.push(cliente[i])
        } else {};
    };
    return mayoresTreinta;
}

console.log(banco.buscaMayorIgualTreinta());


// c. Obtener un nuevo array de cuentas cuyas edades sean igual a 30.

banco.buscaIgualTreinta = function() {
    let igualTreinta = [];
    let cliente = [];
    for (let i = 0; i < this.cuentas.length; i++) {
        cliente[i] = this.cuentas[i];
        if (cliente[i].edadTitular == 30) {
            igualTreinta.push(cliente[i])
        } else {};
    };
    return igualTreinta;
}

console.log(banco.buscaIgualTreinta());
// d. Obtener la cuenta con el titular de la misma más joven.
banco.buscaMasJoven = function() {
    let MasJoven = this.cuentas[0];
    let cliente = [];
    for (let i = 0; i < this.cuentas.length; i++) {
        cliente[i] = this.cuentas[i];
        if (cliente[i].edadTitular < MasJoven.edadTitular) {
            MasJoven = cliente[i];
        } else {};
    };
    return MasJoven;
}
console.log('MasJoven')
console.log(banco.buscaMasJoven());


// e. Obtener un nuevo array por cada tipo de cuenta.

banco.tipoCuenta = function() {
    let cliente = [];
    let cuentaSueldo = [];
    let cuentaCorriente = [];
    for (let i = 0; i < this.cuentas.length; i++) {
        cliente[i] = this.cuentas[i];
        if (cliente[i].tipoCuenta == 'sueldo') {
            cuentaSueldo.push(cliente[i]);
        } else if (cliente[i].tipoCuenta == 'corriente') {
            cuentaCorriente.push(cliente[i]);
        } else {};
    };
    console.log(cuentaSueldo);
    console.log(cuentaCorriente);
}
banco.tipoCuenta();



// f. Obtener un nuevo array con las cuentas habilitadas.
console.log("Cuentas habilitadas");

banco.cuentaHabilitada = function() {
    let cliente = [];
    let cuentaEnable = [];
    for (let i = 0; i < this.cuentas.length; i++) {
        cliente[i] = this.cuentas[i];
        if (cliente[i].estaHabilitada == true) {
            cuentaEnable.push(cliente[i]);
        } else {};
    };
    return cuentaEnable;
};
console.log(banco.cuentaHabilitada());


// g. Obtener un nuevo array con las cuentas deshabilitadas.

console.log("Cuentas inhabilitadas");

banco.cuentaInhabilitada = function() {
    let cliente = [];
    let cuentaDisable = [];
    for (let i = 0; i < this.cuentas.length; i++) {
        cliente[i] = this.cuentas[i];
        if (cliente[i].estaHabilitada == false) {
            cuentaDisable.push(cliente[i]);
        } else {};
    };
    return cuentaDisable;
};
console.log(banco.cuentaInhabilitada());

// h. Obtener la cuenta con el menor saldo.


banco.menorSaldo = function() {
    let saldito = this.cuentas[0];
    saldito.saldo = this.cuentas[0].saldo.replace(',', '').replace('.', ',').replace('$', '');
    let cliente = [];
    for (let i = 0; i < this.cuentas.length; i++) {
        cliente[i] = this.cuentas[i];
        cliente[i].saldo = cliente[i].saldo.replace(',', '').replace('.', ',').replace('$', '');
        if (parseFloat(cliente[i].saldo) < parseFloat(saldito.saldo)) {
            saldito = cliente[i];

        } else {};
    };
    return saldito;
}
console.log('Menor Saldo')
console.log(banco.menorSaldo());


// i. Obtener la cuenta con el mayor saldo.

banco.mayorSaldo = function() {
    let saldote = this.cuentas[0];
    saldote.saldo = this.cuentas[0].saldo.replace(',', '').replace('.', ',').replace('$', '');
    let cliente = [];
    for (let i = 0; i < this.cuentas.length; i++) {
        cliente[i] = this.cuentas[i];
        cliente[i].saldo = cliente[i].saldo.replace(',', '').replace('.', ',').replace('$', '');
        if (parseFloat(cliente[i].saldo) > parseFloat(saldote.saldo)) {
            saldote = cliente[i];
        } else {};
    };
    return saldote;
}
console.log('Mayor Saldo')
console.log(banco.mayorSaldo());