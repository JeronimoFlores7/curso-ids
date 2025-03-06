const busqueda = document.querySelector("form");

const prediccion = ["Chocolate", "Vainilla", "Oreo", "Fresa","Coco", "Chicle"];



busqueda.addEventListener("keyup", event => {
    const palabra = busqueda.elements['busqueda'].value;
    console.log(palabra);

    
});