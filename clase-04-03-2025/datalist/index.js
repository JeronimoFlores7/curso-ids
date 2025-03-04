const busqueda = document.querySelector("form");

const prediccion = ["Perro", "Gato", "León", "Jirafa"];



busqueda.addEventListener("input", (event) =>{
    
});

function buscar(){
    const palabra = busqueda.elements['busqueda'].value;
    if(prediccion.includes(palabra)){
        console.log("Si coincide");
    }

}