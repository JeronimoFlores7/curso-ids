import * as operaciones from './operaciones.js';

const botones = document.querySelectorAll("button");
const inputResultado = document.getElementById("resultado");

let acumulador = '';
let valor1 = 0;
let valor2 = 0;
let signo = '';
let resultado = 0;

botones.forEach((boton) => {
    boton.addEventListener('click', (event) => {
        const valorBoton = event.target.value;
        Boton(valorBoton);
    });
});

function Boton(valorBoton) {
    if (valorBoton === 'C') {
        reset();
    } else if (valorBoton === '+' || valorBoton === '-' || valorBoton === '*' || valorBoton === '/') {
        manejarOperacion(valorBoton);
    } else if (valorBoton === '=') {
        calcular();
    } else {
        acumulador += valorBoton;
        display(acumulador);
    }
}

function manejarOperacion(valorBoton) {
    valor1 = parseFloat(acumulador);
    signo = valorBoton;
    acumulador = '';
    display(valor1);
}

function display(valor) {
    inputResultado.value = valor;
}

function reset() {
    acumulador = '';
    valor1 = 0;
    valor2 = 0;
    signo = '';
    resultado = 0;
    display('');
}

function calcular() {
    valor2 = parseFloat(acumulador);
    switch (signo) {
        case '+':
            resultado = operaciones.sumar(valor1, valor2);
            break;
        case '-':
            resultado = operaciones.restar(valor1, valor2);
            break;
        case '*':
            resultado = operaciones.multiplicar(valor1, valor2);
            break;
        case '/':
            resultado = operaciones.dividir(valor1, valor2);
            break;
        default:
            resultado = valor2;
    }
    display(resultado);
    valor1 = resultado;
    signo = '';
    valor2 = 0;
    acumulador = resultado.toString();
}



