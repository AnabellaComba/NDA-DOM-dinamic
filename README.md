# DESCRIPCION

JS nos permite modificar el DOM (1) y agregarle eventos (2) que son permanentemente escuchados por las acciones que les indicamos.
Utilizando las funciones anonimas (3) podemos utilizar variables globales que nos permitan hacer uso durante todo el tiempo de ejecución
de la información que viaja a medida que vamos construyendo la pagina en tiempo real (4).

Es importante saber que en este caso no hay condiciones de carrera (5) pero podría haberlo habido y es bueno tener en cuenta que esos casos
existen (6)

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
Este código busca el "<h1>" y cambia su texto. Eso es modificar el DOM.
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

   
9. Explica el codigo con tus palabras linea por linea 


