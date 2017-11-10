$(document).ready(function() {
	prepare_board();
	var i = 0;
	thelog = {};

	$('#test').hide();

	$('#imgMap').click(function(e) {
	    var offset = $(this).offset();
		$("#test").show();
	    $("#test").offset({left:e.pageX,top:e.pageY});
	    imgX = (e.pageX - offset.left);
	    imgY = (e.pageY - offset.top);
			thelog[i] = {x1 : imgX.toFixed(0), y1: imgY.toFixed(0)}
			// var thestring = ''
	    // if (i >= 15) {
			// 	for (i = 0; i < 15; i++){
			// 		thestring += i+':{ x1:'+thelog[i]['x1']+',y1: '+thelog[i]['y1']+'},\n';
			// 	}
			// 	console.log(thestring);
			// }
			i += 1;
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
		clutter_images = ['Sandcastle1.png', 'Sandcastle2.png']
		mrbeach_num = Math.floor(Math.random() * beach_positions[level].length);

		for (i = 0; i < levelmax; i ++){
			if (i == mrbeach_num){
				var imgname = "mrBeach.jpg";
			}
			else {
				var imgname = clutter_images[Math.floor(Math.random() * clutter_images.length)];
			}
			var xpos = beach_positions[level][i]['x1']
			var ypos = beach_positions[level][i]['y1']
			//LIZ FUNCTION ( imgname, xpos, ypos ) --> put image on screen

		}
}
