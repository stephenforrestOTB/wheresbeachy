
 firstPin = new Image(512, 516);
 // i: 1892
 secondPin = new Image(256, 288);
 // i: 2372
 firstPin.src = "images/Sandcastle1.png";
 secondPin.src = "images/Sandcastle1.png";
 firstPin.onload = function() {
     render(firstPin, 2080, 1416);
 };
 secondPin.onload = function() {
     render(secondPin, 2372, 1212);
 };

 function requestNewLocation(image) {
   if (image.x >= image.i - 200) {
         image.x -= 20;
   }
 };

 function render(image, x, y) {
   var context=document.getElementById("myCanvas");
   var c = context.getContext("2d");
   c.clearRect(0, 0, context.width, context.height);
   c.drawImage(image, x, y, image.width, image.height);
   c.shadowOffsetX = 2;
   c.shadowOffsetY = 2;
   c.shadowBlur = 2;
   c.shadowColour = 'rgba(0, 0, 0, 0.5)';
 };

  function animate(){
    context.addEventListener('click', function(event) {
      setInterval(function () {
        requestNewLocation(image);
        render(image);
      }, 100);
     }, false);
   };

   // function whatClicked() {
   //  var posX = document.getElementById("x");
   //  var posY = document.getElementById("Y");
   //  var image1 = document.getElementById(firstPin);
   //  var image2 = document.getElementById(secondPin);
   //
   //  if (posX >= image.x && posX =< image.x + image.width ) {
   //    if (posY >= image.y && posY =< image.y + image.height) {
   //          image == animate(this.image);
   //    }
   //  }
   //
   // }
