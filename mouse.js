   //mouse.js
    
    const styles = `
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -ms-user-select: none;
    overscroll-behavior: contain;
    overscroll-behavior-y: contain;
    touch-action: none;
    `;

    document.documentElement.style.cssText = styles;

    let isTouchDevice ='ontouchstart' in window;
    let mouse_count = 0;
    let mouse_button = false;
    let mouse_x = [];
    let mouse_y = [];
    
    function mouseAction(event) {
        mouse_count = isTouchDevice ? event.touches.length : 1;
        mouse_button = isTouchDevice ? (mouse_count>0) : event.buttons;
        for (let i = 0; i <  mouse_count; i++) 
        {
            mouse_x[i] = Math.trunc(isTouchDevice ? event.touches[i].pageX : event.pageX);
            mouse_y[i] = Math.trunc(isTouchDevice ? event.touches[i].pageY : event.pageY);
        }    
    }

    document.addEventListener(isTouchDevice ? "touchstart" : "mousedown", mouseAction, true);
    document.addEventListener(isTouchDevice ? "touchmove" : "mousemove", mouseAction, true);
    document.addEventListener(isTouchDevice ? "touchend" : "mouseup", mouseAction, true);
