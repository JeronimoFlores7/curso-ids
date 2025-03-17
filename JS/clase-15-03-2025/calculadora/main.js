const botones = document.querySelectorAll("button");
const inputResultado = document.getElementById("resultado");
let acumulador = '';
let valor1 = 0;
let valor2 = 0;
let signo = '';
let resultado = 0;


const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

botones.forEach((boton) => {
  boton.addEventListener('click', (event) => {
    const valorBoton = event.target.value;
    acumulador += valorBoton;
    inputResultado.value = acumulador;
    //console.log(`Cadena: ${valorCadena}`);

    if (valorBoton === '+' || valorBoton === '-' || valorBoton === '*' || valorBoton === '/') {
      valor1 = parseFloat(acumulador); 
      signo = valorBoton; 
        acumulador = ''; 
      inputResultado.value = `${valor1}`; 
      
    }else if (valorBoton === 'C') {
      acumulador = '';
      valor1 = 0;
      valor2 = 0;
      signo = '';
      resultado = 0;
      inputResultado.value = ''; 
      //console.log("Reset");
      
    } else if (valorBoton === '=') {
        valor2 = parseFloat(acumulador); 
        switch (signo) {
          case '+':
            resultado = suma(valor1, valor2);
            break;
          case '-':
            resultado = resta(valor1, valor2);
            break;
          case '*':
            resultado = mult(valor1, valor2);
            break;
          case '/':
            resultado = div(valor1, valor2);
            break;
          default:
            resultado = valor2;
        }
        //console.log("Resultado:", resultado);
        inputResultado.value = resultado; 
        valor1 = resultado; 
        signo = ''; 
        valor2 = 0; 
        acumulador = resultado.toString();
      }
    
  });
});