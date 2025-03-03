const formulario = document.querySelector('form');
const tabla = document.getElementById('productos');

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    const nombre = formulario.elements['nombre'].value;
    const precio = formulario.elements['precio'].value;
    const descripcion = formulario.elements['descripcion'].value;
    const disponibilidad = formulario.elements['disponibilidad'].value;
    
    const fila = document.createElement("tr");
    fila.innerHTML += `
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${descripcion}</td>
        <td>${disponibilidad}</td>
        `
        tabla.appendChild(fila);
});