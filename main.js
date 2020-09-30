canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mousevent="empty";
var last_x,last_y;

color="black";
width_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){

    mousevent="mousedown";


}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){

    mousevent="mouseleave";

    
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){

    mousevent="mouseup";

    
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    
    if (mousevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;

        console.log("last position of x & y= ");
        console.log("x= "+last_x+" y= "+last_y);
        ctx.moveTo(last_x,last_y);

        console.log("current position of x & y= ");
        console.log("x= "+current_x+" y= "+current_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
    

    
}