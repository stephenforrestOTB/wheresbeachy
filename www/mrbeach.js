$(document).ready(function() {
	prepare_board(1);
	var i = 0;
	thelog = {};

	$('#test').hide();

	$('#imgMap').click(function(e) {
	    var offset = $(this).offset();
			$("#test").show();
	    $("#test").offset({left:e.pageX,top:e.pageY});
	    imgX = (e.pageX - offset.left);
	    imgY = (e.pageY - offset.top);
			xpos = imgX.toFixed(0);
			ypos = imgY.toFixed(0);
			xper = (xpos / this.width)*100;
			yper = (ypos / this.height)*100;
			thelog[i] = { x : xper, y: yper };
			var thestring = '';
	    if (i >= 5) {
				for (i = 0; i < 5; i++){
					thestring += '{ x:'+thelog[i].x+',y: '+thelog[i].y+'},\n';
				}
				console.log(thestring);
			}
			i += 1;
    });
	$('.image').click(function(e) {
			console.log("CLICKED ON IMAGE");
	    var offset = $(this).offset();
			$("#test").show();
	    $("#test").offset({left:e.pageX,top:e.pageY});
	    imgX = (e.pageX - offset.left);
	    imgY = (e.pageY - offset.top);
			//console.log("x: "+imgX+" y: "+imgY);
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
		clutter_images = ['Sandcastle1.png', 'Sandcastle2.jpg']
		mrbeach_num = Math.floor(Math.random() * beach_positions[level].length);

		for (i = 0; i < beach_positions[level].length; i ++){
			var xpos = beach_positions[level][i]['x'];
			var ypos = beach_positions[level][i]['y'];
			if (i == mrbeach_num){
				var imgname = "images/binoculars.jpg";
				var width = (mrbeach_size.width/ $('imgMap').width) * 100;
				var height = (mrbeach_size.height/ $('imgMap').height) * 100;
			  mrbeach = {
				    name: "MrBeach",
				    x1: xpos,
				    x2: xpos + width,
				    y1: ypos,
				    y2: ypos + height
				}
				console.log(mrbeach)
			}
			else {
				var imgname = "images/"+clutter_images[Math.floor(Math.random() * clutter_images.length)];
				var width = (sandcastle1_size.width / $('imgMap').width) * 100 ;
				//var height = (sandcastle1_size.height / $('imgMap').height) * 100;
			}
			add_image(imgname, xpos, ypos, width);
			//LIZ FUNCTION ( imgname, xpos, ypos ) --> put image on screen

		}
}
function add_image(name, x, y, width) {
	document.getElementById("beach").insertAdjacentHTML('beforeEnd', '<IMG CLASS="image" STYLE="position:absolute; TOP:'+y+'%; LEFT:'+x+'%; WIDTH:'+width+'%;" SRC="'+name+'">');
}
