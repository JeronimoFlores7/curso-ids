const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const figuras = document.querySelectorAll('div');
    figuras.forEach(figura => {
        figura.style.backgroundColor = 'black';
        console.log('Mensaje recibido');
    });
});

