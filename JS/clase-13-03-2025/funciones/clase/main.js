//SOLID
//KISS
//DRY


/** 
* Método para mover el cuerpo de una persona
* @param {Object} persna
*/ 
function moverCuerpo(persona){
    console.log(`Se está moviendo ${persona.nombre}`);

    if(persona.edad > 18){
        console.log(`${persona.nombre} es mayor de edad y su edad es: ${persona.edad}`);
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
    return [persona.nombre, persona.edad];
}



let resultado = moverCuerpo({nombre:'Jeronimo', edad:23, sexo:'M'});
console.log(resultado);
let resultado2 = moverCuerpo({nombre:'Emiliano', edad:24, sexo:'M'});
console.log(resultado2);

function myOwnReduce(array = [], callback, initialValue = 0){
    let acumulador
}



//Function expression

// Función dentro de una expresión
const baz = function(){
    console.log('ALV');
};
baz();

// Una función retornada dentro desde otra función

function saludar(){
    //this 


    return function(){
        console.log('Hola, esto es una función dentro de otra función')
    }  
};

// Una función pasada como argumento a otra función (CALLBACK)

function despedir(obtenerNombre){
    resultado = obtenerNombre();
    console.log(  ` Saludos desde la función principal: ${resultado}`);
};

despedir(function(){ //------> Esto es una función pasada como un parametro
    return 'Hola Jero'
});


/* function getPokemonData(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    .then(function(response){
        console.log()
    }) */

// ARROW FUNCTION


//----------------------------------------------------------
//CALCULADORA
let calculadora = (op,a = 0,b = 0)=>{
    switch(op){
        case '+':
            let suma = (a,b)=>{return a +b};
            break;
        case '-':
            let resta = (a,b)=>{return a -b};
            break;
        case '/':
            let div = (a,b)=>{return a - b};
            break;
        case '*':
            let mult = (a,b)=>{return a * b};
            break;
        case '%':
            let resto = (a,b) =>{return a % b};
            break;
        default:

    }
}

let resultado1 = calculadora('+',10,10);
console.log(resultado1);


//--------------------------------------------------------

//Funciton vs Arrow Function y bindear



//---------------------------------------------------------


const btn = document.querySelector('button');

const fun1 = function(){
    console.log(this);
}

const fun2 = () =>{
    console.log(this);   
}

btn.addEventListener('click', fun1);
btn.addEventListener('click', fun2.bind(this));;


//----------------------------------------------------------------
//FUNCIONES CONSTRUCTORAS

function auto(marca, modelo, año){
    let car = {
        marca:marca,
        modelo:modelo,
        año:año
    };
    return car;
};

let auto1 = auto('KIA', 'Rio', 2022);
console.log(auto1);

function animal(){

}

function casa(direccion, mts2, precio){
    let casa = {
        direccion:direccion,
        mts2:mts2,
        precio:precio
    };
    return casa;
};

function celular(marca,modelo,año){
    let phone = {
        marca:marca,
        modelo:modelo,
        año:año
    };
    return phone;
};

