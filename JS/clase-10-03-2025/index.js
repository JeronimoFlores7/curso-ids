console.log(
    `1. Hola mundo
        2. Suma de dos números
        3. Saludar al usuario
        4. Validar si es par o impar
        5. Pintar del 1 al 10
        6. Suma de los primeros 100 números
        7. Tablas de multiplicar
        8. Invertir una cadena de texto
        9. Contar letras vocales
        10. Validar si es un número primo`
  );
  
  let opcion = prompt("Escoge una opción: ");
  
  switch (opcion) {
    case "1":
      holaMundo();
      break;
    case "2":
      suma();
      break;
    case "3":
      saludo();
      break;
    case "4":
      par();
      break;
    case "5":
      pintar();
      break;
    case "6":
      sumaCien();
      break;
    case "7":
      multiplicar();
      break;
    case "8":
      invertir();
      break;
    case "9":
      vocales();
      break;
    case "10":
      primos();
      break;
    default:
      console.log("Opción no válida");
  }
  
  function holaMundo() {
        console.log("Hola mundo");
      }
      
function suma() {
        let num1 = prompt("Escribe el primer número: ");
        num1 = parseInt(num1);
        let num2 = prompt("Escribe el segundo número: ");
        num2 = parseInt(num2);
        let resultado = num1 + num2;
        console.log(resultado);
}

 function saludo() {
        let nombre = prompt("Escribe tu nombre: ");
        console.log("Hola " + nombre);
}

function par() {
        let numero = prompt("Escribe un número: ");
        numero = parseInt(numero);
        if (numero % 2 == 0) {
          console.log("Es par");
        } else console.log("Es impar");
}

function pintar() {
        for (let i = 1; i <= 10; i++) {
          console.log(i);
        }
}

 function sumaCien() {
        let acumulador = 0;
        for (let i = 1; i <= 100; i++) {
          acumulador = acumulador + i;
        }
        console.log(acumulador);
}

function multiplicar() {
        let numero = prompt("Dame un número: ");
        numero = parseInt(numero);
        for (let i = 1; i <= 10; i++) {
          resultado = numero * i;
          console.log(numero + " x " + i + " = " + resultado);
        }
}

function invertir() {
        let cadena = prompt("Escribe una palabra: ");
        let num = cadena.length;
        //console.log(cadena[7]);
        for (let i = num - 1; i >= 0; i--) {
          console.log(cadena[i]);
        }
}

 function vocales() {
        let vocales = ["a", "e", "i", "o", "u"];
        let palabra = prompt("Escribe una palabra: ");
  
        for (let i = 0; i < palabra.length; i++) {
          for (let j = 0; j < vocales.length; j++) {
            if (palabra[i] === vocales[j]) {
              console.log(palabra[i]);
            } else {
            }
          }
        }
}

function primos() {
        let numero = prompt("Escribe un número: ");
        numero = parseInt(numero); 
        let residuo = numero % 2;
        let residuoN = numero % numero;
        if (residuo === 0 && residuoN === 0) {
          console.log("No es primo");
        } else{
          console.log("Es primo");
        }
}