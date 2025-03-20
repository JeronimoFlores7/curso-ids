//ARRAY INSTANCE METHODS
let arreglo = [1,2,3,4,5];
let arreglo1 = [6,7,8,9,,10];
let arreglo2 = ['a','b','c','d'];
let arreglo3 = ["spray", "elite", "exuberant", "destruction", "present"];

//at --> Devuelve el elemento en la posición indicada
console.log(arreglo.at(-1));

//concat --> Se usa para unir uno o varios arrays
console.log(arreglo.concat(arreglo1));

//copyWithin --> 
console.log(arreglo.copyWithin(-1));

//Constructor -->


//entries --> Retorna un nuevo array con los pares clave/valor
const iterator1 = arreglo2.entries();
for (let e of iterator1) {
    console.log(e);
  }

//every --> Para comprobar que todos los elementos cumplen con una condición
const allEven = arreglo.every(x => x % 2 === 0);

console.log(allEven); 

//fill --> Sirve para cambiar todos los elementos de un arreglo por un valor estático
// Elemento|| posición inicial || Posición final
console.log(arreglo.fill(0, 2, 4));

//filter -->  Crea un nuevo array con todos los elementos que cumplan la condición dada
console.log(arreglo3.filter((x)=> x.length > 6));

//find --> El métodofind devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
console.log(arreglo1.find((x)=> x > 8));

//findIndex --> Devuelve el índice del primer elemento de un array que cumpla con la condición . En caso contrario devuelve -1.
console.log(arreglo.findIndex((x) => x > 3));

//findLast --> Duvuelve el último elemento que cumpla con la condición. Vaya, de derecha a izquierda

console.log(arreglo1.findLast((x)=> x < 10));

//findLastIndex --> Devuelve el índice del último elemento de un array que cumpla con la condición . En caso contrario devuelve -1.
console.log(arreglo.findLastIndex((x) => x< 5));

//flat --> Devuelve un nuevo array con todos los elementos de este array concatenados recursivamente hasta la profundidad especificada.
const arreglo4 = [1, 2, [3, 4, [5, 6]]];
arreglo4.flat(2);

//flatMap --> Devuelve un nuevo array con todos los elementos de este array concatenados recursivamente hasta la profundidad especificada.
const arreglo5 = [1, 2, [3, 4, [5, 6]]];
console.log(arreglo5.flatMap(x => [x, x * 2]));

//forEach --> Ejecuta la función indicada una vez por cada elemento del array.
arreglo2.forEach((x) => console.log(x));

//includes --> Devuelve true o false si el elemento se encuentra en el array
console.log(arreglo3.includes('elite'));

//indexOf --> Devuelve el primer indice en el que se encuentra el elemento
console.log(arreglo3.indexOf('elite'));

//join --> Devuelve un string con todos los elementos separados por el separador indicado
console.log(arreglo3.join('-'));

//keys --> Devuelve un iterador con las claves del array
const iterator2 = arreglo2.keys();
for (let e of iterator2) {
    console.log(e);
  }

//lastIndexOf --> Devuelve el ultimo indice en el que se encuentra el elemento
console.log(arreglo3.lastIndexOf('elite'));

//map --> Devuelve un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos

const arreglo6 = [1, 2, 3, 4, 5];
const dobles = arreglo6.map(x => x * 2);
console.log(dobles);

//pop --> Elimina el ultimo elemento del array y lo devuelve
console.log(arreglo3.pop());
console.log(arreglo3);

//push --> Agrega uno o varios elementos al final del array y devuelve la nueva longitud
console.log(arreglo3.push('world'));
console.log(arreglo3);

//reduce --> Reduce el array a un solo valor
const initialValue = 0;
const sumWithInitial = arreglo6.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);

//reduceRight --> Reduce el array a un solo valor (de derecha a izquierda)
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
);

//reverse --> Invierte el orden de los elementos del array
console.log(arreglo3.reverse());


//shift --> Elimina el primer elemento del array y lo devuelve
console.log(arreglo3.shift());
console.log(arreglo3);

//slice --> Devuelve un nuevo array con los elementos seleccionados del array original
console.log(arreglo3.slice(0, 2));

//some --> Devuelve true si al menos un elemento del array cumple la condición
console.log(arreglo3.some((x) => x.length > 6));

//sort --> Ordena los elementos del array
const meses = ["Marzo", "Enero", "Febrero", "Diciembre"];
meses.sort();
console.log(meses);

//splice --> Cambia elementos del array y/o agregando nuevos elementos
meses.splice(1, 0, "Noviembre");
console.log(meses);

//toLocaleString --> Devuelve un string con el contenido del array con formato local 
const precios  = [1234567.89, 9876543.21, 4567.89];
const formatoMX = precios.map(num => num.toLocaleString('es-MX'));
console.log(formatoMX);

//toReversed --> Devuelve un nuevo array con los elementos del array original en orden inverso
console.log(arreglo3.toReversed());

//toSorted --> Devuelve un nuevo array con los elementos del array original en orden ascendente
console.log(precios.toSorted());

//tosplice --> Cambia elementos del array y/o agregando nuevos elementos
console.log(meses.toSpliced(1, 0, "Abril"));

//toString --> Devuelve un string con el contenido del array
console.log(arreglo3.toString());

//unshift --> Agrega uno o varios elementos al inicio del array y devuelve la nueva longitud
console.log(arreglo3.unshift('hello','welcome'));
console.log(arreglo3);

// values --> Devuelve un iterador con los valores del array
const values = arreglo2.values();
for (const letter of values) {
  console.log(letter);
}

// with --> Cambia el elemento de un array indicando su index y el nuevo valor
console.log(meses.with(0,'Julio'));

//@@iterator --> Devuelve un iterador con los valores del array
const iterator = arreglo2[Symbol.iterator]();
for (const letter of iterator) {
  console.log(letter);
}


//----------------------------------------------------------------------------------------------
//METODOS ESTATICOS

//form --> Crea una nueva instancia de Array a partir de un objeto iterable.

let palabra = "hola mundo"
console.log(Array.from(palabra));

//fromAsync --> Crea una nueva instancia de Array a partir de un objeto iterable.
Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ]),
).then((array) => console.log(array));

//isArray --> Determina si un valor es un array o no, devuelve un true o un false
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({}));
console.log(Array.isArray('hola'));

//of --> Crea una nueva instancia de Array a partir de un objeto iterable.
console.log(Array.of(1, 2, 3));

//----------------------------------------------------------------------------------------------
//PROPIEDADES DE INSTANCIA
//length --> Devuelve la longitud del array
console.log(arreglo3.length);

//@@unscopables --> Devuelve un array con las propiedades que no pueden ser accedidas
console.log(arreglo3[Symbol.unscopables]);

