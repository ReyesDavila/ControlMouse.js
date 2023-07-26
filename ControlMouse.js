// ControlMouse.js

// Este m�dulo proporciona funciones para controlar el mouse.

// Declara las variables
var mouseX = 0;
var mouseY = 0;

// A�ade el controlador de eventos
document.addEventListener("mousemove", function(e) {
  mouseX = e.clientX - document.documentElement.clientLeft;
  mouseY = e.clientY - document.documentElement.clientTop;
});

// Funci�n para obtener la posici�n del mouse en un elemento
function getMousePositionInElement(element) {
  // Obtiene la posici�n del elemento en p�xeles.
  const rect = element.getBoundingClientRect();

  // Calcula la posici�n del mouse en el elemento.
  const mouseXInElement = mouseX - rect.x;
  const mouseYInElement = mouseY - rect.y;

  // Devuelve la posici�n del mouse en el elemento.
  return [mouseXInElement, mouseYInElement];
}

// Exporta la funci�n.
export { getMousePositionInElement };

// Ejemplo de c�mo importar la funci�n:
// import { getMousePositionInElement } from './ControlMouse.js';
// const mousePosition = getMousePositionInElement(document.getElementById('myElement'));

// Nota: este m�dulo debe ser llamado ControlMouse.js