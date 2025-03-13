 function palindromo() {
  let palabra = "oso";

  for (let i = 0, j = palabra.length-1; i < palabra.length, j>=0; i++, j--) {
    if (palabra[i] === palabra[j]) {
        console.log("Es palindromo");
      } else {
        console.log("No es palindromo");
      }
  }
 

 /*  for (let j = palabra.length - 1; j >= 0; j--) {
    console.log(palabra[j]);
  }

  if (palabra[i] === palabra[j]) {
    console.log("Es palindromo");
  } else {
    console.log("No es palindromo");
  } */
}
palindromo(); 


/* function factorial(){
    let numero = 5;
    for (let i = 1; i <= numero; i++) {
      resultado = numero + i;
    }
    console.log(resultado);

}
factorial();

function fibonacci(){
    let numero = 5;
    for (let i = 0; i <= numero; i++) {
        
    }
    console.log(resultado);

}
fibonacci(); 

function contPalabras(){
    
} */


