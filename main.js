const boton = document.getElementById('inicio');
let counter = 0;

boton.addEventListener('click', () => {
    
});

/* NO SE PUEDE EDITAR NADA DE ESTO PARA ABAJO 🔽 */

function agregarBoton(botonClickeado) {
    boton.style.appearance = 'none';
    boton.style.backgroundColor = 'gray';
    boton.style.cursor = 'not-allowed';
    
    const container = document.getElementsByClassName('container')[0];
    const nuevoBoton = document.createElement('button');

    nuevoBoton.classList.add('boton');
    nuevoBoton.textContent = `Botón N°${++counter}`;

    const X = generarPosicionXRandom();
    const Y = generarPosicionYRandom();

    nuevoBoton.style.left = `${X}px`;
    nuevoBoton.style.top = `${Y}px`;

    nuevoBoton.addEventListener('click', function evento() {
        nuevoBoton.style.appearance = 'none';
        nuevoBoton.style.backgroundColor = 'gray';
        nuevoBoton.style.cursor = 'not-allowed';
        agregarBoton(nuevoBoton);
        nuevoBoton.removeEventListener('click', evento);
    });

    botonClickeado.replaceWith(botonClickeado.cloneNode(true));

    container.appendChild(nuevoBoton);
}

function generarPosicionXRandom() {
    const maxLeft = window.innerWidth - 100;
    const randomLeft = Math.random() * maxLeft;

    return randomLeft;
}

function generarPosicionYRandom() {
    const maxTop = window.innerHeight - 100;
    const randomTop = Math.random() * maxTop;

    return randomTop;
}

function funcionUltraSecretaQueTePermiteNoTenerQuePulsar100VecesUnBotonSiHubierasLeido(boton) {
    for (let i = 0; i < 100; i++) {
        agregarBoton(boton);
    }
}



