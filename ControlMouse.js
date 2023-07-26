// ControlMouse.js

// Este módulo proporciona funciones para controlar el mouse.

// Declara las variables
var mouseX = 0;
var mouseY = 0;

// Añade el controlador de eventos
document.addEventListener("mousemove", function(e) {
  mouseX = e.clientX - document.documentElement.clientLeft;
  mouseY = e.clientY - document.documentElement.clientTop;
});

// Función para obtener la posición del mouse en un elemento
function getMousePositionInElement(element) {
  // Obtiene la posición del elemento en píxeles.
  const rect = element.getBoundingClientRect();

  // Calcula la posición del mouse en el elemento.
  const mouseXInElement = mouseX - rect.x;
  const mouseYInElement = mouseY - rect.y;

  // Devuelve la posición del mouse en el elemento.
  return [mouseXInElement, mouseYInElement];
}

// Exporta la función.
export { getMousePositionInElement };

// Ejemplo de cómo importar la función:
// import { getMousePositionInElement } from './ControlMouse.js';
// const mousePosition = getMousePositionInElement(document.getElementById('myElement'));

// Nota: este módulo debe ser llamado ControlMouse.js