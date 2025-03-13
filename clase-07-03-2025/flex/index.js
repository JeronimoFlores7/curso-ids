const box = document.querySelector('.box');

let posicion = box.getBoundingClientRect().y;


document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault();

        posicion += 10;
        box.style.top = posicion + "px";
    }
})