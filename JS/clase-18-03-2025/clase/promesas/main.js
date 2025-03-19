const callback = (resolve, reject) => {
  let exito = true;
  window.setTimeout(() => {
    if (exito === true) {
      resolve("Si me amo toda la vida");
    } else {
      reject("Me la robaron, chamaco");
    }
  }, 2000);
};

const promesa = new Promise(callback);
console.log(promesa);
promesa
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const obtenerInfoPokemon = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  fetch(url)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(
        `Aquí obtuve la información ditto: ${data.sprites.front_default}`
      );
    })
    .catch((error) => {
      console.log(error);
    });
};
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
  .then((results) => {
    console.log("Todas las promesas se resolvieron:", results);
  })
  .catch((error) => {
    console.error("Al menos una promesa falló:", error);
  });

//all modificado.

/**
 * 
 * @param {Array} arrayPromesas 
 * @returns {Promise}
 */
Promise.prototype.all = function(arrayPromesas){
    return new Promise((resolve, reject) =>{
      let resultados = []; 
      let contador = 0;
      for(let i = 0; i < arrayPromesas.length; i++){
        arrayPromesas[i].then((data) => {
          resultados[i] = data;
          contador++;
          if(contador === arrayPromesas.length){
            resolve(resultados);
          }
        }).catch((error) => {
          reject(error);
        });
      }
    });
}

const promis1 = Promise.resolve(1);
const promis2 = Promise.resolve("Error en promesa2");
const promis3 = Promise.resolve(3);

Promise.all([promis1, promis2, promis3])
    .then((resultados) => {
        console.log(resultados); // No se ejecuta
    })
    .catch((error) => {
        console.error(error); // "Error en promesa2"
    });


//allSelected --> Devuelve un array con el estado y resultado de cada promesa
function fetchData(id, success, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      success
        ? resolve(`Datos de la fuente ${id}`)
        : reject(`Error en la fuente ${id}`);
    }, delay);
  });
}

const promises = [
  fetchData(1, true, 2000),
  fetchData(2, false, 1000),
  fetchData(3, true, 1500),
];

Promise.allSettled(promises).then((results) => {
  console.log("Resultados:", results);
});

//any --> Recibe un array de promesas y devuelve la primera que se resuelva con éxito.
const promesa1 = Promise.reject("Error 1");
const promesa2 = Promise.resolve("Éxito 2");
const promesa3 = Promise.reject("Error 3");

Promise.any([promesa1, promesa2, promesa3])
  .then((resultado) => {
    console.log(resultado); // Imprime: "Éxito 2"
  })
  .catch((error) => {
    console.log(error); // Esto no se ejecuta
  });

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

//resolve --> Es una promesa ya resuelta con un valor específico
const promesaResuelta = Promise.resolve("¡Éxito!");

promesaResuelta
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

//try --> Permite gestionar código asincrono y sincrono, evitando errores no detectados
function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Resultado asincrónico"), 1000);
  });
}
function syncFunction() {
  return "Resultado sincrónico";
}

Promise.try(() => asyncFunction())
  .then((result) => {
    console.log(result); // Salida después de 1 segundo: Resultado asincrónico     return
    Promise.try(() => syncFunction());
  })
  .then((result) => {
    console.log(result); // Salida: Resultado sincrónico
  })
  .catch((err) => {
    console.error(err);
  });

//withResolvers --> Es una nueva forma de crear promesas
const { promise, resolve, reject } = Promise.withResolvers();

// Usar resolve y reject directamente
resolve("¡Éxito!");
// o
reject("Error");

promise
  .then((resultado) => {
    console.log(resultado); // Imprime: "¡Éxito!"
  })
  .catch((error) => {
    console.log(error); // Imprime: "Error"
  });