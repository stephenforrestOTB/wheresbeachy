$(document).ready(function() {
	prepare_board(1);
	var i = 0;
	thelog = {};

	$('#test').hide();

	$('#myCanvas').click(function(e) {
	    var offset = $(this).offset();
			$("#test").show();
	    $("#test").offset({left:e.pageX,top:e.pageY});
	    imgX = (e.pageX - offset.left);
	    imgY = (e.pageY - offset.top);
		// 	thelog[i] = {x1 : imgX.toFixed(0), y1: imgY.toFixed(0)}
		// 	var thestring = ''
	  //   if (i >= 500) {
		// 		for (i = 0; i < 500; i++){
		// 			thestring += '{ x1:'+thelog[i]['x1']+',y1: '+thelog[i]['y1']+'},\n';
		// 		}
		// 		console.log(thestring);
		// 	}
		// 	i += 1;
	});

  $('button').click(function(){
        $('#test').hide(500);
        //console.log('you clicked ' + this.id);
        whoGotClicked(this.id);
    })
});


function whoGotClicked(who){
	var selected = {};
	who === "btnMrBeach" ? selected = mrbeach :
	who === "btnBinoculars" ? selected = binoculars :
	selected = cancel;
    //console.log("who got clicked?  " + selected.name);
	if (selected.name === "Cancel") {
		$('#test').hide();
	} else {
		if (imgX >= selected.x1 & imgX <= selected.x2 & imgY >= selected.y1 & imgY <= selected.y2){
		    alert('You found ' + selected.name + '!');
		    $('#' + who).hide();
		} else {
			alert('That is not ' + selected.name + ', Try Again!')
		}
	}
}

function prepare_board(level) {
		console.log("Board preparing");
		clutter_images = ['Sandcastle1.png', 'Sandcastle2.png'];
		mrbeach_num = Math.floor(Math.random() * beach_positions[level].length);

		for (i = 0; i < beach_positions[level].length; i ++){
			var xpos = beach_positions[level][i]['x1'];
			var ypos = beach_positions[level][i]['y1'];
			if (i == mrbeach_num){
				var imgname = "binoculars.png";
				var height = mrbeach_size.height;
				var width = mrbeach_size.width;
			  binoculars = {
				    name: "The Beach's Binoculars",
				    x1: xpos,
				    x2: xpos + width,
				    y1: ypos,
				    y2: ypos + height
				}
			}
			else {
				var imgname = clutter_images[Math.floor(Math.random() * clutter_images.length)];
				var height = sandcastle1_size.height;
				var width = sandcastle1_size.width;
			}
			lizfunction(imgname, xpos, ypos, width, height)

		}
}
var context = document.getElementById("myCanvas").getContext("2d");
var beach = "m492,652l0,-2l8,2q8,2 10,3l2,0l0,0l0,1l14,3q14,3 24,6q9,3 16,5q7,2 44,2q37,2 46,3q8,2 8,3q0,0 2,0q3,0 7,1q3,1 5,2q1,1 6,1q6,1 8,4q3,2 12,4q9,2 24,6q15,4 27,4q12,0 26,-1l14,0l13,2q12,3 15,3l3,0l0,0l0,0l2,1l1,1l2,0l2,0l25,4q24,2 50,6q27,4 49,12q22,6 41,16q19,10 38,22q20,13 20,14q0,1 14,10q14,10 21,14q6,4 7,4l1,0l1,1l1,1l0,0l1,0l0,0l0,0l0,1l0,0l1,0l0,1l1,0l1,0l0,46l0,46l-270,0l-270,0l0,0l0,0l-263,-1l-264,-1l2,0l2,0l2,-1l1,-1l2,0q2,0 39,-8q38,-8 94,-17q56,-9 104,-15q49,-6 82,-11q32,-5 52,-11q19,-6 28,-10q9,-4 11,-7q2,-2 3,-2q1,0 2,-5q0,-5 -2,-7q-2,-2 -2,-3q0,-1 -6,-4q-7,-4 -12,-8q-4,-5 -6,-10l-2,-4l0,0q0,-1 -1,-1l0,0l0,-3l-1,-4l0,-2q0,-1 -3,-4q-3,-2 -3,-3q0,-1 -4,-3q-2,-1 -11,-4l-8,-4l0,0l-1,0l0,0l0,0l-1,-1l-1,0l0,-2l0,-2l1,0l0,-1l0,0l1,0l0,0l0,0l1,-1l1,-1l15,-4q15,-6 57,-16q43,-10 54,-14q10,-4 11,-5l1,-1l0,0l0,0l1,0l0,0l0,-1l1,0l0,0l0,-1l0,0l0,0l1,0l0,0l0,-1l1,0l0,-1l0,-1l-1,0l0,-1l0,0l-1,0l0,0l0,0l0,-1l0,0l-1,0l0,-1l0,0l-1,0l0,0l0,0l0,-1l0,0l-1,0q0,-1 -1,-1q-2,-2 -19,-8l-17,-6l0,0l0,0l-2,-1l-3,-1l-1,0l-2,0l-1,-1q-1,-1 -27,-7l-25,-6l-3,-1l-2,-1l0,0l0,0l3,0l3,0l8,-2q7,-2 6,-2q-2,0 12,-1q14,-1 16,0l2,1l2,0l1,0l0,-1l0,-1l2,0l2,0l0,-1l-1,0l0,-1z";
context.strokeStyle = '#000';
context.lineWidth = 1;
context.fillStyle = '#000'

var p = new Path2D(beach)
context.stroke(p);
context.fill(p);
//
// firstPin.src = "images/Sandcastle1.png";
//
// firstPin.onload = function() {
// 		context.drawImage(firstPin, 1892, 1528, 256, 288);
// 		//firstPin == myMove();
// };

function lizfunction(imgname, xpos, ypos, width, height){
	var image = new Image();
	image.src = 'images/'+imgname;
	image.onload = function(){
		context.drawImage(image, xpos, ypos);
	}
}
