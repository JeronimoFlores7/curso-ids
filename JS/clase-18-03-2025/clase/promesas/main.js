const callback = (resolve, reject) =>{
    let exito = true;
    window.setTimeout(() =>{
        if(exito === true){

            resolve('Si me amo toda la vida');
        }else{
            reject('Me la robaron, chamaco');
        }
        
    }, 2000);
};

const promesa = new Promise(callback);
console.log(promesa);
promesa.
then((result) =>{
    console.log(result);

})
.catch(error =>{
    console.log(error);
})

const obtenerInfoPokemon = () =>{
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
    fetch(url)
    .then((response) =>{
        console.log(response);
        return response.json();
    })
    .then((data) =>{
        console.log(`Aquí obtuve la información ditto: ${data.sprites.front_default}`);
    })
    .catch(error =>{
        console.log(error);
    })
}
obtenerInfoPokemon();

//Métodos de instancia
//then -->  Retorna una Promesa. Recibe dos argumentos: funciones callback para los casos de éxito y fallo de Promise
//catch --> Retorna una Promise y solo se ejecuta en los casos en los que la promesa se marca como Reject
//finally --> Retorna una promesa y se ejecuta no importa el resultado, la función callback será ejecutada

function fetchData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Datos cargados correctamente");
            } else {
                reject("Error al cargar los datos");
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}

fetchData(true) // Cambia a false para simular un error
    .then(response => {
        console.log("Éxito:", response);
    })
    .catch(error => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Operación finalizada");
    });


//Métodos estáticos
//all --> Devuelve una promesa correcta solamente si todas las promesas iterables terminan con éxito, si una falla el resultado será rechazado
function fetchData(id, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Datos de la fuente ${id}`);
        }, delay);
    });
}

const promise1 = fetchData(1, 2000);
const promise2 = fetchData(2, 1000);
const promise3 = fetchData(3, 1500);

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("Todas las promesas se resolvieron:", results);
    })
    .catch(error => {
        console.error("Al menos una promesa falló:", error);
    });

//all modificado.



//allSelected --> Devuelve un array con el estado y resultado de cada promesa
function fetchData(id, success, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            success ? resolve(`Datos de la fuente ${id}`) 
                    : reject(`Error en la fuente ${id}`);
        }, delay);
    });
}

const promises = [
    fetchData(1, true, 2000),
    fetchData(2, false, 1000),
    fetchData(3, true, 1500)
];

Promise.allSettled(promises).then(results => {
    console.log("Resultados:", results);
});

//any --> Recibe un array de promesas y devuelve la primera que se resuelva con éxito.
const promesa1 = Promise.reject(0);
const promesa2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promesa3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promesas = [promise1, promise2, promise3];

Promise.any(promesas).then((value) => console.log(value));

//race --> Devuelve una nueva promesa tan rápido como una de las promesas de un arreglo sea aceptada o rechazada
const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa 1 resuelta");
    }, 1000); // Resuelve después de 1 segundo
  });
  
  const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa 2 resuelta");
    }, 2000); // Resuelve después de 2 segundos
  });
  
  Promise.race([prom1, prom2])
    .then((resultado) => {
      console.log(resultado); 
    })
    .catch((error) => {
      console.log(error); 
    });

//reject --> Es una promesa que desde el incio ya está rechazada con un motivo 
const promesaRechazada = Promise.reject("Algo salió mal");

promesaRechazada
  .then((resultado) => {
    console.log(resultado); 
  })
  .catch((error) => {
    console.log(error); 
  });

  