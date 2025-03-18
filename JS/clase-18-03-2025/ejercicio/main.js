//ARRAY INSTANCE METHODS



let arreglo = [1,2,3,4,5];
let arreglo1 = [6,7,8,9,,10];
let arreglo2 = ['a','b','c','d'];
let arreglo3 = ["spray", "elite", "exuberant", "destruction", "present"];

//at -->
console.log(arreglo.at(-1));

//concat -->
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

q