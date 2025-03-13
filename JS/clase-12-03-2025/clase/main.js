//OPERADORES

/*
* 
* */

//OPERADORES ARITMETICOS

// + , - , *, /, Math.pow(2,2), %, ++, --

const resultado =[1,2,3].reduce((acumulador,item)=>{
    acumulador += item;
    return acumulador;
},0).toString(); // "10" --> String

console.log(resultado + 10);
console.log('resultado' + 10); //Type cohercion --> Es la transformación de tipos
console.log(true + 10); //Type cohercion --> Es la transformación de tipos
console.log([10]+ resultado );
console.log([10]+ {} );
console.log(typeof(NaN)); //Number
console.log(typeof(undefined)); //Undefined
const tipo = typeof(undefined);
console.log(typeof(tipo)); //String



console.log("hola"-"jero");
console.log("hola"-true);
console.log(10-"jero");
console.log(10-"true");

`` //Back ticks

const string = `resultado ${resultado}`
const string2 = `resultado ${[1,2,3].reduce((acumulador,item)=>{
    acumulador += item;
    return acumulador;
},0).toString()}`;

console.log(`4%2 = ${4%2}`);

const potencia = Math.pow(2,2);
console.log(`La potencia de 2 es: ${potencia}`);
console.log(`La potencia de 2 es: ${2**2}`);


//OPERADRES DE COMPARACIÓN

// ==, ===, <, >, <=, >=

0==0 //Operación de coheción no estricta, valida el valor
'0'===0 // Operación de coherción estricta, valida el valor y el tipo

//Valores falsos
//-1, '',undefined,null => false, false, false, false
const varible1 = null;
if(varible1){
    console.log("Es falso");
}

//Valores verdaderos (TRUTHY)
//1, 'azar', null, [], {} => true, true, true
const varible2 = 2;
if(!varible2){
    console.log("Es verdadero");
}

console.log(typeof(null));
console.log(typeof([]));
console.log(typeof({}));


//OPERADORES LOGICOS

//AND &&

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = !!array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);

console.log(sumWithInitial);

const nombre = 'Jero';
const numero = 10;
const valor = numero && nombre;
console.log(valor);


//Cortocircuito
console.log(null && numero); //=> Un valor falsy crea un cortocircuito
console.log(numero && false); //=> Un valor falso crea un cortocircuito

//OR ||
console.log(!'Hola' || !10); //=>false
console.log(10 || null); //true
console.log(!undefined || false) // true
console.log()