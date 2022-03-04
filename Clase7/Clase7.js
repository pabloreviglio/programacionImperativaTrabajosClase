const prompt = require("prompt-sync")({ sigint: true});
console.clear();

// Total a Pagar
let vehiculo = (prompt("Es Coche, moto o autobus?  ")); 
let litrosConsumidos = parseFloat (prompt("Cuantos litros quieres cargar? "));
function precioDelLitro(vehiculo) {
 if (vehiculo =="coche"){
    return 86;
} else if(vehiculo =="moto"){
    return 70;
}else if(vehiculo =="autobus"){
    return 55;
}else {
    return "ERROR";
}}
function totalAPAgar(litrosConsumidos) {
 if ((litrosConsumidos >= 0) && (litrosConsumidos <=25)){
    return ((precioDelLitro(vehiculo) * litrosConsumidos)+50);
} else if (litrosConsumidos >25){
    return ((precioDelLitro(vehiculo) * litrosConsumidos)+25);
}else {
    return "ERROR1";
}
}
console.log(`El total a Pagar es: ${totalAPAgar(litrosConsumidos)}`)

// Local de sandwiches

//Tipo de sandwich
console.log("Que tipo de sandwich prefieres")
console.log("1   Pollo - opcion 1")
console.log("2   Carne - opcion 2")
console.log("3   Veggie- opcion 3")
let sandwich = (parseInt(prompt()));


//tipo de pan
console.log("Que tipo de pan prefieres")
console.log("1   Blanco c/orégano y parmesano - opcion 1")
console.log("2   Negro c/avena opcion 2")
console.log("3   Sin gluten opcion 3")
let pan = (parseInt(prompt()));

//Aderesos
console.log("Que aderezos de los siguientes prefieres? (ingesa 1 en los que elijas) ")
let queso = (parseInt(prompt("Queso? ")))*20;
if (queso != 20);queso =0;
let tomate = (parseInt(prompt("Tomate? ")))*15;
if (tomate != 20);tomate =0;
let lechuga = (parseInt(prompt("Lechuga? ")))*10;
if (lechuga != 20);lechuga =0;
let cebolla = (parseInt(prompt("Cebolla? ")))*15;
if (cebolla != 20);cebolla =0;
let mayonesa = (parseInt(prompt("Mayonesa? ")))*5;
if (mayonesa != 20);mayonesa =0;
let mostaza = (parseInt(prompt("Mostaza? ")))*5;
if (mostaza != 20);mostaza =0;

function tipoDeSandwich(sandwich) {
    if(sandwich == 1)        {
        return 150;
    }
    else if (sandwich == 2)     {
        return 200;
    }
    else if(sandwich ==3 )       {
        return 100;
    }
    else {
        return "ERROR"
    }
}

function tipoDePan(pan) {
    if(pan == 1)        {
        return 50;
    }
    else if (pan == 2)     {
        return 60;
    }
    else if(pan == 3)       {
        return 75;
    }
    else {
        return "ERROR"
    }
}

let precioTotal=(tipoDeSandwich(sandwich) + tipoDePan(pan) + queso + tomate + lechuga + cebolla + mayonesa + mostaza)
console.log(`El precio total de tu eleccion es: ${precioTotal}`)

//Cual es el numero secreto?

let numeroElegido = parseInt(prompt("Adivina un nuemro del 1 al 10:   "))
let numeroSecreto = parseInt(Math.random() * 10)

function resultado(numeroElegido, numeroSecreto){
    if (numeroElegido === numeroSecreto){
        return console.log(`FELICITACIONES,!!! Usted ha acertado`);
    }else {
        return console.log(`La proxima vez sera!! el numero secreto era ${numeroSecreto} y usted eligo el numero ${numeroElegido}, siga participando!!`);
    }
}
console.log(resultado(numeroElegido, numeroSecreto));

// Abrir Paracaidas

let velocidad = parseFloat(prompt("Ingrese la velocidad: "))
let altura = parseFloat(prompt("Ingrese la altura: "))

function abrirParacaidas(velocidad, altura){
    if (velocidad < 1000 && altura >= 2000 && altura < 3000){
        return "Abrir Paracaidas";
    }else {
        return "No abrir paracaidas";
    }
}
console.log(abrirParacaidas(velocidad, altura));


// estructura switch
//Traductor condicional

let = palabra= prompt("Ingrese la palabra a traducir: ")
function traductorCondicional(palabra) {
	switch (palabra) {
    	case "perro":
	     	console.log("dog");
		 	break;
		case "pelota":
			console.log("ball");
			break;
		case "arbol":
			console.log("tree");
			break;
        case "genio":
            console.log("genius");
            break;
		default:
	     	console.log("La palabra ingresada es incorrecta");          	 		 
	}
}
console.log(traductorCondicional(palabra));

// Valoracion de peliculas

console.log ("Como valoras la pelicula que acabas de ver?")
console.log ("1 - Muy mala")
console.log ("2 - Mala")
console.log ("3 - Mediocre")
console.log ("4 - Buena")
console.log ("5 - Muy buena")
let = calificacion = parseInt(prompt("Ingresa una valoración del 1 al 5:  "))
function valoracion(calificacion) {
	switch (calificacion) {
    	case 1:
	     	console.log("Calificaste la pelicula como Muy mala. Lo lamentamos mucho");
		 	break;
		case 2:
			console.log("Calificaste la pelicula como Mala. Lo lamentamos");
			break;
		case 3:
			console.log("Calificaste la pelicula como Mediocre. La proxima elecccion sera mejor");
			break;
        case 4:
            console.log("Calificaste la pelicula como Buena. Felicitaciones!");
            break;
        case 5:
            console.log("Calificaste la pelicula como Muy buena. Felicitaciones!. Estamos muy feices!!!");
            break;
		default:
	     	console.log("Opcion Incorrecta");          	 		 
	}
}
console.log(valoracion(calificacion));


