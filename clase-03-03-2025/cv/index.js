const nombre_db = "Jeronimo";
const contrasenia_db = "admin123"
const formulario = document.querySelector('form');
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    const nombre = formulario.elements['nombre'].value;
    const contrasenia = formulario.elements['contrasenia'].value;


    if(nombre === nombre_db && contrasenia === contrasenia_db){
        window.location.href="inicio.html";
    }else{
        dialog.showModal();
    }
});
closeButton.addEventListener("click", () => {
    dialog.close();
  });