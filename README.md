# DESCRIPCION

JS nos permite modificar el DOM (1) y agregarle eventos (2) que son permanentemente escuchados por las acciones que les indicamos.
Utilizando las funciones anonimas (3) podemos utilizar variables globales que nos permitan hacer uso durante todo el tiempo de ejecución
de la información que viaja a medida que vamos construyendo la pagina en tiempo real (4).

Es importante saber que en este caso no hay condiciones de carrera (5) pero podría haberlo habido y es bueno tener en cuenta que esos casos existen (6)

Consigna: En este ejercicio aparecerá un botón en la pantalla que al pulsarlo no hará nada.

Objetivo 1: Conseguir editando el archivo (main.js) que al oprimir un botón genere otro en una posición totalmente aleatoria.
Objetivo 2: Conseguir generar 100 botones con 1 sola pulsada del botón inicial (7)

La programación muchas veces no se trata de hacer sobre ingenieria, muchas veces los problemas ya están resueltos. Solamente hace falta mirar QUÉ
engrajage hace falta ajustar.

# TEST TEORIA

1. ¿Qué es el DOM?

DOM significa Document Object Model (Modelo de Objetos del Documento.)
Es básicamente una representación estructurada del HTML de una página web, que el navegador crea para poder leer, modificar y manipular el contenido desde JavaScript.
Con JavaScript, podés acceder y modificar esa estructura. 
Por ejemplo:
document.querySelector("h1").textContent = "¡Hola modificado!";
Este código busca el "\<h1\>" y cambia su texto. Eso es modificar el DOM.
2. ¿Qué hace el addEventListener?
El método addEventListener en JavaScript se usa para decirle a un elemento del DOM:
“Cuando pase tal cosa, ejecutá esta función”.
Sirve para escuchar eventos como clics, teclas, movimientos del mouse, envío de formularios, etc.
EJ: elemento.addEventListener("evento", función);
3. ¿Qué son las arrow functions?
Las arrow functions (funciones flecha) son una forma más corta y moderna de escribir funciones en JavaScript. Se introdujeron con ES6 (ECMAScript 2015).
EJ:
// Función tradicional
function saludar(nombre) {
  return "Hola " + nombre;
}

// Arrow function equivalente
const saludar = (nombre) => {  return "Hola " + nombre;
};

Se puede utilizar para simplificar el código y hacer funciones más compactas, especialmente en callbacks o funciones anónimas.


4. ¿Cómo se genera contenido dinámico?
Usando el DOM (el modelo de objetos del documento), podés crear, insertar o modificar elementos HTML en tiempo real.

Crear elementos	document.createElement()
Modificar contenido	.textContent o .innerHTML
Agregar al HTML	.appendChild() o .append()
Responder a eventos	addEventListener()

5. ¿Importa el orden en que estan cargados los archivos?
   Sí, el orden importa mucho cuando hablamos de cargar archivos en una página web, sobre todo si son JavaScript.
   El navegador lee el HTML de arriba hacia abajo.
Si pones un <script> de JavaScript antes de que el HTML esté cargado, ese JS intentará acceder a elementos del DOM que todavía no existen → y puede dar error.
El orden también importa si un archivo depende de otro.
Si app.js usa funciones que están en utilidades.js, primero debe cargarse utilidades.js.


6. ¿Cómo podemos asegurarnos de que nuestro JS se ejecute obligatoriamente luego de la carga del HTML?
1-Poner el <script> al final del <body>
Cuando el navegador llega al <script>, ya leyó y construyó el DOM, así que tu código puede manipularlo sin problemas.
Ventaja: simple y rápido.
Desventaja: si tienes varios scripts grandes, retrasan la carga visual de la página.
2-Usar el atributo defer
Cargas el script en el <head>, pero con defer le dices que:
Se descargue en paralelo mientras se procesa el HTML.
Se ejecute después de que el DOM esté listo.
EJ <head>  <script src="app.js" defer></script> </head>
Ventaja: más ordenado, mantiene JS separado, no bloquea la carga de la página.
Desventaja: solo funciona en scripts externos (no inline).
3-Usar el evento DOMContentLoaded
Envuelves tu código en un evento que se dispara cuando el navegador termina de construir el DOM.
Ventaja: funciona con scripts internos o externos, sin importar dónde estén.
Desventaja: un poco más de código.
EJ <script>  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("titulo").textContent = "Hola cuando el DOM está listo";
  });
</script>

* Regla práctica hoy en día:
Para proyectos modernos: <script defer> en el <head>.
Para scripts rápidos o de ejemplo: al final del <body>.


7. ¿Qué es la recursividad y cómo está usada en el ejercicio?
Es una técnica de programación donde una función se llama a sí misma hasta que se cumple una condición de parada(stop) (caso base).
En el código, la función crearVariosBotones(cantidad) se llama a sí misma reduciendo la cantidad hasta llegar a 0. Esto permite generar muchos botones sin necesidad de un bucle explícito (for o while).
   
8. Explica el codigo con tus palabras linea por linea 

Dentro del archivo JS (main.js) 
"const boton = document.getElementById('inicio');"
Busca en el documento el elemento con id="inicio" (ese es tu botón inicial) y lo guarda en la variable boton.
"let counter = 0;"
Es un contador que empieza en 0 y servirá para numerar cada botón que se cree.
"boton.addEventListener('click', () => { ... })"
Cuando se hace click en el botón inicial, se ejecuta la función dentro.
"agregarBoton(boton);"
Llama a la función que genera un nuevo botón en pantalla.
"funcionUltraSecretaQueTePermiteNoTenerQuePulsar100VecesUnBotonSiHubierasLeido(boton);"
Esta función crea 100 botones automáticamente, así no necesitas hacer 100 clicks.
"function agregarBoton(botonClickeado){ //stilos varios}"
Esta parte desactiva el botón que se clickeó (sea el inicial o uno nuevo).
appearance = 'none' → le quita el estilo por defecto.
backgroundColor = 'gray' → lo pinta de gris.
cursor = 'not-allowed' → el mouse mostrará que ya no se puede usar.
Busca el primer elemento que tenga la clase "container" (donde se van a colocar los botones).
Crea un nuevo botón en memoria (todavía no aparece en pantalla).
"nuevoBoton.classList.add('boton');
 nuevoBoton.textContent = 'Botón N°${++counter}';"
classList.add('boton') → le da la clase "boton" para que herede estilos del CSS.
textContent = Botón N°${++counter} → le pone un texto con un número único.
++counter incrementa el contador en 1 y devuelve el valor.
"const X = generarPosicionXRandom();
    const Y = generarPosicionYRandom();
    nuevoBoton.style.left = '${X}px';
    nuevoBoton.style.top = '${Y}px'; "
Genera coordenadas aleatorias (X, Y) dentro de la ventana del navegador.
Asigna esas coordenadas al estilo del botón para ubicarlo en una posición aleatoria.
" nuevoBoton.addEventListener('click', function evento() {
        nuevoBoton.style.appearance = 'none';
        nuevoBoton.style.backgroundColor = 'gray';
        nuevoBoton.style.cursor = 'not-allowed';
        agregarBoton(nuevoBoton);
        nuevoBoton.removeEventListener('click', evento);
    });"
Cada botón nuevo también tiene un evento click.
Cuando se lo cliquea:
Se desactiva (como el inicial: gris, no clickeable).
Llama otra vez a agregarBoton(nuevoBoton) para generar otro botón nuevo aleatorio.
removeEventListener quita el evento, para que no se repita indefinidamente si alguien insiste en apretarlo.
"botonClickeado.replaceWith(botonClickeado.cloneNode(true));"
Esta línea reemplaza el botón clickeado por una copia idéntica de sí mismo.
Se hace para "resetear" el botón y que no conserve los eventos viejos (porque un mismo botón no debería seguir funcionando varias veces).
"container.appendChild(nuevoBoton);"
Finalmente, se agrega el nuevo botón dentro del contenedor (.container) para que aparezca en pantalla.
"function generarPosicionXRandom() {
    const maxLeft = window.innerWidth - 100;
    const randomLeft = Math.random() * maxLeft;
    return randomLeft;
}"
Calcula una posición X aleatoria dentro del ancho de la ventana.
window.innerWidth - 100 → se resta 100 para que el botón no se salga de la pantalla.
Math.random() * maxLeft → devuelve un número aleatorio entre 0 y el máximo permitido.

"function generarPosicionYRandom() {
    const maxTop = window.innerHeight - 100;
    const randomTop = Math.random() * maxTop;
    return randomTop;
}" Igual que antes, pero en vertical (posición Y).

Y mi bb bonito agregó la última funcion creyendo que no lo ibamos a leer: 
"function funcionUltraSecretaQueTePermiteNoTenerQuePulsar100VecesUnBotonSiHubierasLeido(boton) {
    for (let i = 0; i < 100; i++) {
        agregarBoton(boton);
    }
}"
Donde hace un bucle for de 100 iteraciones. En cada iteración llama a agregarBoton(boton), así aparecen 100 botones.
