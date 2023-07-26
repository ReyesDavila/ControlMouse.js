// ControlMouse.js

// Este módulo proporciona funciones para controlar el mouse.

// Declara las variables
var touchDevice = ('ontouchstart' in document.documentElement);
var mouseX = 0;
var mouseY = 0;

function mouseMove(e) {
  if (touchDevice){
    mouseX = e.touches[0].clientX - document.documentElement.clientLeft;
    mouseY = e.touches[0].clientY - document.documentElement.clientTop;
  } else {
    mouseX = e.clientX - document.documentElement.clientLeft;
    mouseY = e.clientY - document.documentElement.clientTop;
  }
}

// Añade el controlador de eventos
if(touchDevice) {
  document.addEventListener("touchmove", mouseMove, false);
  document.addEventListener("touchstart", mouseMove, false);
}
else {
  document.addEventListener("mousemove", mouseMove, false);
  document.addEventListener("mousedown", mouseMove, false);
}


// Función práctica para obtener la posición del mouse en un elemento
function getMousePositionInElement(element) {
  // Obtiene la posición del elemento en píxeles.
  const rect = element.getBoundingClientRect();

  // Calcula la posición del mouse en el elemento.
  const mouseXInElement = mouseX - rect.x;
  const mouseYInElement = mouseY - rect.y;

  // Devuelve la posición del mouse en el elemento.
  return [mouseXInElement, mouseYInElement];
}

