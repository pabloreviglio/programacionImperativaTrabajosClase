const prompt = require("prompt-sync")({ sigint: true });
console.clear();
console.log('ya viene')

//Elcifrado del Cesar

let abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
let frase = 'KZ QDZKHCZC EQDBTDMSDLDMSD DR HLOQDBHRZ';

function descifrar(cifrado) {
    let descifrado = [];
    let cifradoArray = cifrado.split('');
    for (let i = 0; i < cifradoArray.length; i++) {
        let h = 0;
        for (let j = 0; j < abecedario.length; j++) {
            h++
            if (h >= abecedario.length) {
                h = 0
            };
            if (cifrado[i] == ' ') {
                descifrado.push(' ');
                i++
            } else if (cifrado[i] == abecedario[j]) {

                descifrado.push(abecedario[h]);
            };
        };
    };
    return descifrado.join('');
};
console.log(descifrar(frase));

//2. Eliminar marcas: Tenemos una página de venta de productos para el hogar,
// donde los clientes pueden hacernos comentarios. Nuestra tienda tiene algunos
// sponsors de ciertas marcas, por lo que nos gustaría que en los comentarios de
// los clientes no se mencione ninguna otra que no forme parte de la tienda. Te
// pedimos que dada una listas de comentarios y una lista de marcas, elimines las
// marcas en esos comentarios reemplazándolas por 3 asteriscos ***. Pista: Doble
// for

//3. Convertir a romano un número entero. Pista: Ir formándolo de izquierda a
// derecha. Cada posición se considera por separado. Otra opción:
// https://gist.github.com/cronos2/6207591

// 4. Reponer stock: tenemos un local con productos en las góndolas y nos gustaría
// que una función nos indique si hay que reponer stock de algún producto,
// informando en qué góndola y estante se encuentra. Tener en cuenta que
// siempre debe haber dos productos o más de cada uno. ¿Cómo representarías
// las góndolas y los productos? (Objeto literal con propiedad góndolas que tenga
// un array de arrays. Dentro de cada array un objeto literal con el producto y la
// cantidad disponible en ese momento).


gondola1 = [{
        Producto: "harina",
        Marca: "Blancaflor",
        cantidad: 50,
    },
    {
        Producto: "Arroz",
        Marca: "Gallo",
        cantidad: 2,
    },
    {
        Producto: "Cafe",
        Marca: "Nescafe",
        cantidad: 50,
    },
    {
        Producto: "Leche",
        Marca: "Sancor",
        cantidad: 2,
    },
    {
        Producto: "Fideos",
        Marca: "Aro",
        cantidad: 200,
    },
    {
        Producto: "te",
        Marca: "La morenita",
        cantidad: 70,
    },
];

local = {
    mercaderia: gondola1,
    reponerStock: function() {
        let producto = []
        let faltante = []
        for (let i = 0; i < this.mercaderia.length; i++) {
            producto[i] = this.mercaderia[i];
            if (producto[i].cantidad <= 2) {
                faltante.push(producto[i]);
            };
        };
        return faltante;
    }

}
console.log(local.reponerStock());

// 5. Es primo: hacer una función que dado un número indique si es primo o no
// —sólo es divisible por sí mismo y por 1—

//let ingresarNumero = parseInt(prompt('Ingrese el numero a verificar: '));
for (let ingresarNumero = 1; ingresarNumero <= 100; ingresarNumero++) {
    console.log(numeroPrimo(ingresarNumero));
};

function numeroPrimo(numeroIngresado) {

    for (let i = 2; i < numeroIngresado; i++) {
        if (numeroIngresado % i == 0) {
            return `El numero ${numeroIngresado} Ingresado no es un numero primo`;
        } else {};
    };
    return `El numero ${numeroIngresado} es un numero Primo!!!`;
};


//numeros primos del 1 al 1000