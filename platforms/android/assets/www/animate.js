var firstPin = {
  x: 1892,
  y: 1528,
  width: 512,
  height: 516,
  i: 1892
}

var SecondPin = {
  x: 2372,
  y: 1212,
  width: 256,
  height: 288,
  i: 2372
}

 var context = document.getElementById("myCanvas");
 var firstPin = new Image();
 var secondPin = new Image();
 firstPin.src = "images/Sandcastle1.png";
 secondPin.src = "images/Sandcastle1.png";
 firstPin.onload = function() {
     render();
 };
 secondPin.onload = function() {
     render();
 };

 function requestNewLocation(image) {
   if (image.x >= image.i - 200) {
         image.x -= 20;
   }
 }

 function render(image) {
   var c = context.getContext("2d");
   c.clearRect(0, 0, context.width, context.height);
   c.drawImage(image, image.x, image.y, image.width, image.height);
 }

  function animate(image){
    context.addEventListener('click', function(event) {
      setInterval(function () {
        requestNewLocation(image);
        render(image);
      }, 100);
     }, false);
   }

   function whatClicked(image) {
    posX = document.getElementById("x");
    posY = document.getElementById("Y");
    // if (posX >= image.x && posX =< image.x + image.width ) {
    //   if (posY >= image.y && posY =< image.y + image.height) {
    //         image == animate(this.image);
    console.log(posX)
      }
    }

   }
