function inventario() {
  let inventario = [
    {
      producto: "Arroz",
      precio: 20,
      stock: 15,
    },
    {
      producto: "Leche",
      precio: 32,
      stock: 20,
    },
    {
      producto: "Huevo",
      precio: 56,
      stock: 0,
    },
    {
      producto: "Aceite",
      precio: 29,
      stock: 0,
    },
  ];

  console.log(inventario.filter((x) => x.stock > 0));
}
inventario();

function promedios() {
  let estudiantes = [
    {
      nombre: "Juan",
      notas: [
        {
          matematicas: 8,
          español: 9,
          ciencias: 8,
          ingles: 9,
          deportes: 10,
        },
      ],
    },
    {
      nombre: "Erick",
      notas: [
        {
          matematicas: 10,
          español: 7,
          ciencias: 10,
          ingles: 9,
          deportes: 10,
        },
      ],
    },
    {
      nombre: "Pedro",
      notas: [
        {
          matematicas: 7,
          español: 7,
          ciencias: 6,
          ingles: 9,
          deportes: 8,
        },
      ],
    },
    {
      nombre: "Victor",
      notas: [
        {
          matematicas: 8,
          español: 10,
          ciencias: 7,
          ingles: 9,
          deportes: 10,
        },
      ],
    },
  ];

  estudiantes.forEach((element) => {
    console.log(element.nombre);
    element.notas.forEach((nota) => {
      console.log(
        (nota.ciencias +
          nota.deportes +
          nota.español +
          nota.ingles +
          nota.matematicas) /
          5
      );
    });
  });
}
promedios();

function citas() {
  let citas = [
    {
      fecha: "2025-03-15",
      paciente: "Jeronimo",
      doctor: "Pedro",
    },
    {
      fecha: "2025-05-24",
      paciente: "Emiliano",
      doctor: "Diego",
    },
    {
      fecha: "2025-04-15",
      paciente: "Luis",
      doctor: "Victor",
    },
  ];

  while (true) {
    console.log(`
1. Agendar cita nueva
2. Ver todas las citas
3. Salir`);
    let opcion = prompt("Elige una opción: ");

    switch (opcion) {
      case "1":
        let fecha = prompt("Ingresa fecha YYYY-MM-DD: ");
        let paciente = prompt("Ingresa el nombre del paciente: ");
        let doctor = prompt("Ingresa nombre del doctor: ");

        citas.push({ fecha: fecha, paciente: paciente, doctor: doctor });
        break;

      case "2":
        for (let i = 0; i < citas.length; i++) {
          console.log(
            "fecha: " +
              citas[i].fecha +
              " paciente: " +
              citas[i].paciente +
              " doctor: " +
              citas[i].doctor
          );
        }
        break;

      case "3":
        return;

      default:
        console.log("Opción no válida");
    }
  }
}
citas();

function peliculas() {
  let peliculas = [
    {
      titulo: "Alien",
      genero: "Accion",
    },
    {
      titulo: "Coraline",
      genero: "Animacion",
    },
    {
      titulo: "Fast and Furious",
      genero: "Accion",
    },
    {
      titulo: "Jumanji",
      genero: "Aventura",
    },
    {
      titulo: "The Kings Man",
      genero: "Accion",
    },
  ];

  console.log(peliculas.filter((x) => x.genero === "Accion"));
}
peliculas();

function biblioteca() {
  let libros = [
    {
      titulo: "It",
      autor: "Stephen King",
      estado: "",
    },
  ];
  console.log(`1. Registrar libro
        2. Ver lista de libros
        3. Salir`);
  opcion = prompt("Elige una opción: ");

  while (true) {
    switch (opcion) {
      case "1":
        let titulo = prompt("Ingresa el título: ");
        let autor = prompt("Ingresa el autor: ");
        let estado = prompt("Ingresa el estado (prestado/disponible): ");

        libros.push({ titulo: titulo, autor: autor, estado: estado });
        break;
      case "2":
        console.log(libros.filter((libro) => libro.estado === "disponible"));
        break;
      case "3":
        return;
      default:
        console.log("Opción no válida");
    }
  }
}
biblioteca();

function sueldos() {
  let empleado = [
        {nombre: "Carmelo", 
        sueldo: 5000
        },
        {nombre: "Hugo", 
        sueldo: 4500
        },
        {nombre: "Gerardo",
        sueldo: 6000
        },
        {nombre: "Arturo", 
        sueldo: 3500
        }
  ];

  let total = 0;

  empleado.forEach((x) => {
    total = total + x.sueldo;
  });

  console.log("Total de sueldos: " + "$" + total);
}
sueldos();

function catalogo(){
    let catalogo = [
        {
           producto:"Perfume",
           precio:210
        },
        {
            producto:"Reloj",
            precio:2000
        },
        {
            producto:"Sombrero",
            precio: 300
        },
        {
            producto:"Camisa",
            precio: 200
        }
];
    let busqueda = prompt("Que producto quieres buscar: ");
    console.log(catalogo.find((x) => x.producto == busqueda));
    
}

function rol(){
    let usuarios = [
        {
            nombre:"Rocío",
            rol:"administrador"
        },
        {
            nombre:"Alberto",
            rol:"usuario"
        },
        {
            nombre:"Martin",
            rol:"administrador"
        }
    ];
    let filtro = usuarios.filter((x)=> x.rol === "administrador");
    console.log(filtro);
}
rol();

function ventas(){
    let venta = [
        {
            platillo:"Coctel de camarón",
            precio:85
        },
        {
            platillo:"Quesadilla de pulpo",
            precio:30
        },
        {
            platillo:"Filete",
            precio:25
        },
        {
            platillo:"Empanada de camarón",
            precio:25
        }
];
let total = 0;

venta.forEach((x) => {
  total = total + x.precio;
});

console.log("Total de vendido " +"$"+ total);
}
ventas();


function asistencia(){
    let lista = [
        {
            nombre: "Jeronimo",
            asistencia:false,
        },
        {
            nombre:"Carlos",
            asistencia:true,
        },
        {
            nombre:"Naidelyn",
            asistencia:true,
        },
        
];



}
asistencia();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//SET

function repetidos() {
  const productos = ["Leche", "Huevo", "Cereal", "Leche", "Cereal", "Galletas"];
  const set = new Set(productos);

  console.log(set);
}
repetidos();

function palabras() {
  const parrafo =
    "El sol brillaba intensamente en el cielo un cielo azul y despejado que hacía que el día se sintiera aún más cálido";
  let arregloParrafo = parrafo.split(" ");
  let set = new Set(arregloParrafo);
  console.log(set);
}
palabras();

function sesion() {
  let usuarios = new Set(["Luis", "Victor", "Arturo"]);
  let usuario = promt("Escriber el nombre de usuario: ");

  let verificacion = usuarios.has(usuario);

  if (verificacion == true) {
    console.log("La sesión está ocupada");
  } else {
    console.log("Éxito al ingresar");
  }
}
sesion();

function invitados() {
  let invitados = new Set([]);
  while (true) {
    console.log(`
            1. Agregar invitado
            2. Ver lista
            3. Salir`);
    let opcion = prompt("Elige una opción: ");
    switch (opcion) {
      case "1":
        let invitado = prompt("Nombre del invitado: ");
        if (invitados.has(invitado) == true) {
          console.log("El invitado ya está en la lista");
        } else {
          invitados.add(invitado);
        }
        break;
      case "2":
        console.log(invitados);
        break;
      case "3":
        return;
      default:
        console.log("Opción no válida");
    }
  }
}
invitados();

function placas() {
  
}
placas();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//MAP
function frecuencia() {
  const text = "Hola mundo hola vida hola vida";
  let textArray = text.split(" ");
  let map =  new Map();

  for (let i = 0; i < textArray.length; i++) { 
    map.set( textArray[i], (map.get( textArray[i]) || 0) + 1);            
  }
  console.log(map);
}
frecuencia();

function productosMap(){

    const map = new Map();
    map.set("Huevo", 56);
    map.set("Cereal", 86);
    map.set("Leche", 32);

//console.log(map1);

console.log(map.get("Cereal"));

}
productosMap();


function agenda(){
    const map = new Map();
    map.set("Emiliano",{
        telefono:"722-432-0320",
    });
    map.set("Victor",{
        telefono:"722-939-0291"
    });

    map.set("Carlos",{
        telefono:"722-431-6418"
    });

    let contacto = prompt("Escribe el nombre del contacto: ");

    console.log(map.get(contacto));

}
agenda();

function voto(){
  let votos = ["Victor", "Luis", "Pedro", "Luis", "Pedro", "Luis"];

  let map = new Map();

  votos.forEach((x)=>{
    map.set(x),( (map.get(x) || 0)+1);
  });
  return map;

  console.log(map);
}
voto();

function historial(){
    let map = new Map();

    map.set("Jeronimo",["Leche", "Jamón", "Queso"]);
    map.set("Luis",["Cereal", "Crema", "Huevos"]);
    map.set("Mario",["Atún", "Huevos", "Frijoles",""]);

  
    console.log(map.get("Jeronimo"));
}
historial();

