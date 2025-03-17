//SOLID
//KISS
//DRY

/**
 * Método para mover el cuerpo de una persona
 * @param {Object} persna
 */
function moverCuerpo(persona) {
  console.log(`Se está moviendo ${persona.nombre}`);

  if (persona.edad > 18) {
    console.log(
      `${persona.nombre} es mayor de edad y su edad es: ${persona.edad}`
    );
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
  return [persona.nombre, persona.edad];
}

let resultado = moverCuerpo({ nombre: "Jeronimo", edad: 23, sexo: "M" });
console.log(resultado);
let resultado2 = moverCuerpo({ nombre: "Emiliano", edad: 24, sexo: "M" });
console.log(resultado2);

function myOwnReduce(array = [], callback, initialValue = 0) {
  let acumulador;
}

//Function expression

// Función dentro de una expresión
const baz = function () {
  console.log("ALV");
};
baz();

// Una función retornada dentro desde otra función

function saludar() {
  //this

  return function () {
    console.log("Hola, esto es una función dentro de otra función");
  };
}

// Una función pasada como argumento a otra función (CALLBACK)

function despedir(obtenerNombre) {
  resultado = obtenerNombre();
  console.log(` Saludos desde la función principal: ${resultado}`);
}

despedir(function () {
  //------> Esto es una función pasada como un parametro
  return "Hola Jero";
});

/* function getPokemonData(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    .then(function(response){
        console.log()
    }) */

// ARROW FUNCTION

//----------------------------------------------------------
//CALCULADORA
let calculadora = (op, a = 0, b = 0) => {
  switch (op) {
    case "+":
      let suma = (a, b) => {
        return a + b;
      };
      break;
    case "-":
      let resta = (a, b) => {
        return a - b;
      };
      break;
    case "/":
      let div = (a, b) => {
        return a - b;
      };
      break;
    case "*":
      let mult = (a, b) => {
        return a * b;
      };
      break;
    case "%":
      let resto = (a, b) => {
        return a % b;
      };
      break;
    default:
  }
};

let resultado1 = calculadora("+", 10, 10);
console.log(resultado1);

//--------------------------------------------------------

//Funciton vs Arrow Function y bindear

//---------------------------------------------------------

const btn = document.querySelector("button");

const fun1 = function () {
  console.log(this);
};

const fun2 = () => {
  console.log(this);
};

btn.addEventListener("click", fun1);
btn.addEventListener("click", fun2.bind(this));

//----------------------------------------------------------------
//FUNCIONES CONSTRUCTORAS

function auto(marca, modelo, año) {
  let car = {
    marca: marca,
    modelo: modelo,
    año: año,
    texto() {
      console.log("La maraca del carro es:", this.marca);
    },
  };
  return car;
}

let auto1 = auto("KIA", "Rio", 2022);
auto1.texto();
console.log(auto1);

function animal(especie, edad, alimentacion) {
  let animal = {
    especie: especie,
    edad: edad,
    alimentacion: alimentacion,
  };
}

function casa(direccion, mts2, precio) {
  let casa = {
    direccion: direccion,
    mts2: mts2,
    precio: precio,
  };
  return casa;
}

let casa1 = ("Colonia Heroes, Toluca, Edo. Mex", 150, 2000000);
let casa2 = ("Colonia Carranza, Temoaya, Edo. Mex", 200, 4000000);
let casa3 = ("Colonia Emiliano Zapata, Toluca, Edo. Mex", 100, 950000);

function celular(marca, modelo, año) {
  let phone = {
    marca: marca,
    modelo: modelo,
    año: año,
  };
  return phone;
}

let phone1 = ("Motorola", "Edge 30", 2022);
let phone2 = ("Apple", "iPhone 15", 2023);
let phone3 = ("Samsung", "Galaxy S24", 2024);

//THIS

//CLASS

/* class Persona {
  constructor(nombre, edad, sexo) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
  }
  saludar() {
    console.log(`Hola mi nombre es ${this.nombre}`);
  }
} */





let telefono = 7223164459;
telefono.toFixed();

/* let aa = [1, 2, 3];
aa.reduce();
console.log(aa); */


class Carro{
    constructor(puertas=4, modelo = 'generico',anio=2024){
        this.puertas=puertas; //Publico --> API publica
        this._modelo=modelo; //Privado
        this.__anio=anio ?? 2025; //Protegido| ? ---> nullish cloeasing operator
    }
    mover(){
        if(this.__anio < 2025){
            this._modelo='Rio';
        }
        console.log(`Moviendo ${this._modelo}`);
    }
}

const kia = new Carro(5,2024);
kia.mover();

//HERENCIA DE PROPIEDADES DE CLASES

class Persona extends Carro {
    
    constructor(nombre, edad, sexo) {
        super(4,2024);
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;

    }
    saludar() {
      console.log(`Hola mi nombre es ${this.nombre}`);
    }
  }

  let jeronimo = new Persona("Jeronimo", 23, "M");
  console.log(jeronimo);
  console.log(jeronimo.__prototype__);


  Array.prototype.myOwnReduce =  function(callback, initialValue){
    
  }