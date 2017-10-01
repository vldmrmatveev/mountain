window.onload = function() {
  var canvas = document.getElementById("figure");
  var canvasone = document.getElementById("figureone");
  var canvastwo = document.getElementById("figuretwo");
  var canvasthree = document.getElementById("figurethree");
  var context = canvas.getContext("2d"); 
  var contextone = canvasone.getContext("2d");
  var contexttwo = canvastwo.getContext("2d");
  var contextthree = canvasthree.getContext("2d");
      drawCircle(canvas, context);
      drawFigure(canvas, context);
      drawCircleone(canvasone, contextone);
      drawFigureone(canvasone, contextone);
      drawCircletwo(canvastwo, contexttwo);
      drawFiguretwo(canvastwo, contexttwo);
      drawCirclethree(canvasthree, contextthree);
      drawFigurethree(canvasthree, contextthree);
      make_base();
   // drawtestCircle(canvas,context);
  } 
  function drawFigure(canvas, context) {
    context.beginPath();
    context.lineJoin="round";
    context.moveTo(30, 120);
    context.lineTo(30, 60);
    context.lineTo(90, 23);
    context.lineTo(150, 60);
    context.lineTo(150, 120);
    context.lineTo(90, 157);
    context.closePath();
    context.fillStyle = "white";
      context.shadowColor = '#999';
      context.shadowBlur = 20;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 10;
    context.fill();
  }
function drawCircle(canvas, context) {
  context.beginPath();
  context.arc(90, 90, 90, 0, Math.PI*2, true);
  context.fillStyle = "#f0f3f6";
  context.fill();
}
  function drawtestCircle(canvas, context) {
    context.beginPath();
  context.arc(90, 90, 67, 0, Math.PI*2, true);
  context.stroke();
}
  function drawFigureone(canvasone, contextone) {
    contextone.beginPath();
    contextone.lineJoin="round";
    contextone.moveTo(30, 120);
    contextone.lineTo(30, 60);
    contextone.lineTo(90, 23);
    contextone.lineTo(150, 60);
    contextone.lineTo(150, 120);
    contextone.lineTo(90, 157);
    contextone.closePath();
    contextone.fillStyle = "white";
      contextone.shadowColor = '#999';
      contextone.shadowBlur = 20;
      contextone.shadowOffsetX = 0;
      contextone.shadowOffsetY = 10;
    contextone.fill();
  }
function drawCircleone(canvasone, contextone) {
  contextone.beginPath();
  contextone.arc(90, 90, 90, 0, Math.PI*2, true);
  contextone.fillStyle = "#f0f3f6";
  contextone.fill();
}
  function drawFiguretwo(canvastwo, contexttwo) {
    contexttwo.beginPath();
    contexttwo.lineJoin="round";
    contexttwo.moveTo(30, 120);
    contexttwo.lineTo(30, 60);
    contexttwo.lineTo(90, 23);
    contexttwo.lineTo(150, 60);
    contexttwo.lineTo(150, 120);
    contexttwo.lineTo(90, 157);
    contexttwo.closePath();
    contexttwo.fillStyle = "white";
      contexttwo.shadowColor = '#999';
      contexttwo.shadowBlur = 20;
      contexttwo.shadowOffsetX = 0;
      contexttwo.shadowOffsetY = 10;
    contexttwo.fill();
  }
function drawCircletwo(canvastwo, contexttwo) {
  contexttwo.beginPath();
  contexttwo.arc(90, 90, 90, 0, Math.PI*2, true);
  contexttwo.fillStyle = "#f0f3f6";
  contexttwo.fill();
}
  function drawFigurethree(canvasthree, contextthree) {
    contextthree.beginPath();
    contextthree.lineJoin="round";
    contextthree.moveTo(30, 120);
    contextthree.lineTo(30, 60);
    contextthree.lineTo(90, 23);
    contextthree.lineTo(150, 60);
    contextthree.lineTo(150, 120);
    contextthree.lineTo(90, 157);
    contextthree.closePath();
    contextthree.fillStyle = "white";
      contextthree.shadowColor = '#999';
      contextthree.shadowBlur = 20;
      contextthree.shadowOffsetX = 0;
      contextthree.shadowOffsetY = 10;
    contextthree.fill();
  }
function drawCirclethree(canvasthree, contextthree) {
  contextthree.beginPath();
  contextthree.arc(90, 90, 90, 0, Math.PI*2, true);
  contextthree.fillStyle = "#f0f3f6";
  contextthree.fill();
}