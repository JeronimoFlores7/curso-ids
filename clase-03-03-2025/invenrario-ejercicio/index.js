const formulario = document.querySelector('form');
const tabla = document.getElementById('productos');

formulario.addEventListener("submit", (event)=>{
    const nombre = formulario.elements['nombre'].value;
    const precio = formulario.elements['precio'].value;
    const descripcion = formulario.elements['descripcion'].value;
    const disponibilidad = formulario.elements['disponibilidad'].value;
    
    const fila = document.createElement("tr");

    if(disponibilidad <= 15){
        fila.innerHTML += `
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${descripcion}</td>
        <td style="color:red;">${disponibilidad}</td>
        `
        tabla.appendChild(fila);
    }else if(disponibilidad >= 20){
        fila.innerHTML += `
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${descripcion}</td>
        <td style="color:green;">${disponibilidad}</td>
        `
        tabla.appendChild(fila);
    }

});