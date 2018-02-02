
 firstPin = new Image(512, 516);
 secondPin = new Image(256, 288);
 firstPin.src = "images/Sandcastle1.png";
 secondPin.src = "images/Sandcastle1.png";

 firstPin.onload = function() {
     render(firstPin, 2080, 1416);
 };

 firstPin.onclick = function() {
     myMove(firstPin, 2080);
 };

 secondPin.onload = function() {
     render(secondPin, 2372, 1212);
 };

 function render(image, x, y) {
   var context=document.getElementById("myCanvas");
   var c = context.getContext("2d");
   c.clearRect(0, 0, context.width, context.height);
   c.drawImage(image, x, y, image.width, image.height);
 };

 function wait(ms) {
  var d = new Date();
  var d2 = null;
  do { d2 = new Date(); }
  while(d2-d < ms);
  }

 function myMove(image, x) {
  var image = image;
  var pos = x;
  var id = setInterval(frame, 20);
  function frame() {
      if (pos == x + 200) {
          clearInterval(id);
          wait(8000);
          if (pos == x - 200) {
            clearInterval(id)
          } else {
              pos++;
              image = pos + 'px';
          }
      } else {
          pos++;
          image = pos + 'px';
      }
  }
}
