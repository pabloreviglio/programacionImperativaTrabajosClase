const prompt = require("prompt-sync")({ sigint: true });
console.clear();

//ejercicio 1
function numero(x){
    for (let a=1; a<=10; a++){
        console.log(x+a);
    }
}
numero(50);

//ejercico 2

function deTres(){
        for (let a=5; a<=20;a=a+3){
        console.log(a);
            }
}
deTres();


// ejercicio 3

function cien(){
    let suma = 0;
    for (let b=0; b<=100; b++){
         suma = suma+b
    }  
         console.log(suma)
}
cien()


// ejercicio 4

function factorial(x){
    let factor = 1;
    for (let b=1; b<=x; b++){
         factor = factor*b
    }
         console.log(factor)
}
factorial(10)

