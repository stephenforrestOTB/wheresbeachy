$(document).ready(function() {
	prepare_board(1)
	var i = 0
	thelog = {}

	$('#test').hide()

	$('#beach').click(function(e) {
	    var offset = $(this).offset()
			$("#test").show()
	    $("#test").offset({left:e.pageX,top:e.pageY})
	    imgX = (e.pageX - offset.left)
	    imgY = (e.pageY - offset.top)
			thelog[i] = {x1 : imgX.toFixed(0), y1: imgY.toFixed(0)}
			var thestring = ''
	    if (i >= 500) {
				for (i = 0; i < 500; i++){
					thestring += '{ x1:'+thelog[i]['x1']+',y1: '+thelog[i]['y1']+'},\n'
				}
				console.log(thestring)
			}
			i += 1
	});

  $('button').click(function(){
        $('#test').hide(500);
        //console.log('you clicked ' + this.id);
        whoGotClicked(this.id);
    })
});

function prepare_board(level){
	prepare_zone('beach', level)
}
function whoGotClicked(whobtn){
	who = whobtn.replace('btn', '')
	selected = hidden_items[who]
	if (who == 'cancel'){
		$('#test').hide()
	}
	else{
		if ( imgX >= selected.position.x1 &
			 	 imgX <= selected.position.x2 &
				 imgY <= selected.position.y1 &
				 imgY >= selected.position.y2 ){
			alert('You found '+ selected.display_name + '!')
			$('#' + whobtn).hide();
		} else {
			alert('That is not ' + selected.display_name + ', Try Again!')
		}
	}
}
function prepare_zone(zone, level){
	difficulty = 2 - level
	zone_positions = shuffle(positions[zone][level])
	index = 0
	hidden_items = {}
	Object.values(special_items).forEach( function(item) {
		random_pos = zone_positions[index]
		width = item.width * difficulty
		height = item.height * difficulty
		xpos = random_pos.x1
		ypos = random_pos.y1
		hidden_items[item.name] = {
			display_name: item.display_name,
			position: {
				x1: xpos,
				y1: ypos,
				x2: xpos + width,
				y2: ypos + height
			}
		}
		lizfunction(item.imgname, xpos, ypos, width, height)
		index ++
	})
	for(index; index < positions[zone][level].length; index++){
		item = clutter_items[Math.floor(Math.random() * clutter_items.length)];
		random_pos = zone_positions[index]
		width = item.width * difficulty
		height = item.height * difficulty
		xpos = random_pos.x1
		ypos = random_pos.y1
		lizfunction(item.imgname, xpos, ypos, width, height)
	}
}
var context = document.getElementById("beach").getContext("2d");

function lizfunction(imgname, xpos, ypos, width, height){
	var image = new Image();
	image.src = 'images/'+imgname;
	image.onload = function(){
		context.drawImage(image, xpos, ypos, width, height);
	}
}
