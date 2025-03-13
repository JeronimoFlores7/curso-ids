//AND &&
// CASOS DE FALSE && FALSE ==> FALSE
console.log(false && false); //Con los valores booleanos false
console.log(!true && !true); //Con el operador de negación en los valores booleanos true
console.log(!10 && false); //Con el operador de negación en un número el valor boolean
console.log(!5 && !!''); // Aplicar negación a un número (turthy) y doble negación a una cadena vacía (falsy)
console.log(!!null && !!'');
console.log(!{} && false); // Aplicar negación a un objeto {turthy}
console.log(!new Date() && false); // Aplicando negación al objeto Date
const nan = 0/0;
console.log(!!nan && !'hola'); // Aplicar doble negación a un resultado NaN

let array = [1,2,3,4,5];
let arrayVacio = !array.splice(0, array.length);
console.log(false && arrayVacio); //
console.log(!Infinity && false); //Negando el valor infinity

// CASOS DE FALSE && TRUE

console.log(false && true); // Con los valores booleanos false y true
console.log(!true && true); // Aplicando negación al booleano true
console.log(!!0 && true); // Doble negación en un número falsy (0) y un booleano true
console.log(!'texto' && !!'cadena'); // Negación a una cadena no vacía (truthy) y doble negación a otra cadena
console.log(!!null && true); // Doble negación en null (falsy) y true
console.log(!undefined && !!'dato'); // Negación a undefined (falsy) y doble negación a una cadena truthy
console.log(![] && true); // Negación a un array vacío (truthy) y true
console.log(!{} && !!42); // Negación a un objeto (truthy) y doble negación a un número truthy
console.log(!new Date() && true); // Negación a un objeto Date (truthy) y true
console.log(!!NaN && true); // Doble negación a NaN (falsy) y true
