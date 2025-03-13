console.log('Hola mundo');

//Valores primitivos
let nombre = 'Jeronimo';
let edad = 23;
let masculino = true;
let terreno = null;
let padres = undefined;
let id = Symbol(1611325);
let saldo = 123473498018741913n;

console.log(typeof(edad), typeof(nombre));

/*const number1 = Number('1');
const number2 = Number(2+3);
const number3 = Number(true);
const number4 = Number(false);
const number5 = Number([].length);
*/

console.log(typeof(+'0'));
const number1 = new Number('1'); //Expresiones, función constructora, clase o prototipo
const number2 = new Number(2+3);
const number3 = new Number(true); //Type cohersion
const number4 = new Number(false); //Type cohersion
const number5 = new Number([].length);
console.log(number1,number2,number3,number4,number5);

//--------------------------------------------
//POO => Abstracción  de un objeto de la vida real

let persona = {
    nombre:'Jeronimo',
    edad:23,
    padres: [{nombre:'Gabino', edad:55}]
};

persona.nombre = 'Emiliano';

persona['nombre'];
console.log(persona);

let jero = persona; //Referencia a la dirección de memoria
jero.nombre = 'Luis';

let coleccion = ['Jeronimo','Emiliano', 'Luis'];
console.log(coleccion[0]);

const arreglo = [1,2,3,4,5];

const set = new Set (arreglo);

console.log(set);
console.log(set.size);

console.log(set.has(44));


const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4]);
console.log(odds.intersection(squares)); // Set(2) { 1, 9 }

const map = new Map();
map.set(1,'uno');
if(map.has(1) === true){

}else{
    map.set(1,"one");
}

console.log(map);

const value = map.get(1);
console.log(value);

//let resultDelete = map.delete(1);
//console.log(resultDelete);

map.clear();
console.log(map);

console.log(map.size);

const otherMap = new map([
    ['manzana', 2],
    ['banana',3],
    ['durazno',4]
]);
console.log(otherMap);

const duplicate = new map ()