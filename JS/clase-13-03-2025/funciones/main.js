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