// ControlMouse.js

// Este módulo proporciona funciones para controlar el mouse.

// Declara las variables
var touchDevice = ('ontouchstart' in document.documentElement);
var mouseXY = [];
var mouse_x = 0;
var mouse_y = 0;
var mouse_count = 0;
function floor(x) {return Math.floor(x)}

function mouseMove(e) {
  if (touchDevice) {
	mouseXY = [];
	mouse_count = event.targetTouches.length;
	for(index=0;index<mouse_count;index++)
	{
		mouseXY.push([floor(event.touches[index].clientX),floor(event.touches[index].clientY)]);
	}
   }
   else{
	mouseXY = [];
	mouseXY.push([floor(event.clientX),floor(event.clientY)]);
	mouse_count = mouseXY.length;
	if(event.type == "mousedown"){touch_count = 1}
	if(event.type == "mouseup"){touch_count = 0}
       }

	if(mouse_count){mouse_x = mouseXY[0][0];mouse_y = mouseXY[0][1]};
	salida[0] = mouseXY;
}

// Añade el controlador de eventos
if(touchDevice) {
	document.addEventListener("touchstart", mouseMove, false);
        document.addEventListener("touchmove", mouseMove, false);
        document.addEventListener("touchend", mouseMove, false);
}
else {
	document.addEventListener("mousedown", mouseMove, false);
	document.addEventListener("mousemove", mouseMove, false);
	document.addEventListener("mouseup", mouseMove, false);
}


// Función práctica para obtener la posición del mouse en un elemento
function getMousePositionInElement(element) {
  // Obtiene la posición del elemento en píxeles.
const rect = element.getBoundingClientRect();

var mouseXInElement = null;
var mouseYInElement = null;

// Busca si un mouse está sobre el elemento y alcula la posición del mouse en el elemento.

  for (const [mx, my] of mouseXY) {
    if(mx>=rect.x && mx<=rect.x+rect.width && my>=rect.y && my<=rect.y+rect.height)
	{
         mouseXInElement = mx - rect.x;
	 mouseYInElement = my - rect.y;
	}
  }

  
  // Devuelve la posición del mouse en el elemento.
  return [mouseXInElement, mouseYInElement];
}
