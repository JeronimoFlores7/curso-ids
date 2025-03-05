// const busqueda = document.querySelector("form");

const formulario = document.querySelector('form');
const busqueda = document.getElementById("busqueda");

palabra = busqueda.addEventListener("input",()=>{

});

formulario.addEventListener("keydown",(event)=>{
    event.preventDefault();
    if(palabra === "Fresa"){
        console.log("Es fresa")
    }
});