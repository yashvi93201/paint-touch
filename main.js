var mouseEvent="empty";
var lastpositionofx,lastpositionofy;
color="black";
width_line=1;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_line=document.getElementById("line_width").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_positon_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if (mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line;
    ctx.moveTo(lastpositionofx,lastpositionofy);
    ctx.arc(current_positon_of_mouse_x,current_position_of_mouse_y,10,0,2*Math.PI);
    ctx.stroke();
}
lastpositionofx=current_positon_of_mouse_x;
lastpositionofy=current_position_of_mouse_y;

}
canvas.addEventListener("mouseUp",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
 canvas.addEventListener ("mouseleave",my_mouseleave);
 function my_mouseleave(e){
     mouseEvent="mouseleave";
 }
 function cleararea(){
     ctx.clearRect(0,0,canvas.width,canvas.height);
     
 }
 var width=screen.width;
 var new_width=width-70;
 var new_height=screen.height-300;
 if( width<992){
     document.getElementById("myCanvas").width=new_width;
     document.getElementById("myCanvas").height=new_height;
     document.body.style.overflow="hidden";
 }

 canvas.addEventListener("touchstart", my_touchstart);
 
 function my_touchstart(e)
 {
     //Addictonal Activity start
     color = document.getElementById("color").value;
     width_line = document.getElementById("line_width").value;
     //Addictonal Activity ends

  
 }



 canvas.addEventListener("touchmove", my_touchmove);
 function my_touchmove(e)
 {

      current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
      current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = width_line;

     console.log("Last position of x and y coordinates = ");
     console.log("x = " + lastpositionofx + "y = " + lastpositionofy);
     ctx.moveTo(lastpositionofx, lastpositionofy);

     console.log("Current position of x and y coordinates = ");
     console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
     ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
     ctx.stroke();
     

     lastpositionofx = current_position_of_mouse_x; 
     lastpositionofy = current_position_of_mouse_y;
 }
