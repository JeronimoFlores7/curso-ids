//WINDOW

//document

//Funciones

//getElementByID --> Busca un elemento por el id del elemento que se desea obtener
const box = document.getElementById('box'); //Crear una variable para poder manipular el elemento
box.style.background='blue';
console.log(box.__proto__);

box.addEventListener('click', (event)=>{
    console.log('Me dio click el usuario', event);
})

box.dispatchEvent(new Event('click'));

//querySelector --> Busca un elemento por la etiqueta, tiene la notación de CSS (.class, #id)
const box1 = document.querySelector('span');
box1.style.background='red';

//querySelectorAll --> Busca la selección de elementos que cumplan con la busqueda
const listDivs = document.querySelectorAll('div');
console.log(listDivs);

//Funciones para crear elementos o etiquetas
const newDiv = document.createElement('div');
newDiv.innerText = 'soy el div nuevo';
//Agregar la etiqueta al DOM
document.body.appendChild(newDiv);



const d = document.getElementById('box');
d.insertAdjacentHTML('beforebegin', '<div id="two">two</div>')

//Funciones para eliminar
//Funciones para modificar

//---------------------Eventos----------------
