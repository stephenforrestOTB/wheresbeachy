$(document).ready(function() {
	$('#test').hide();

	$('#imgMap').click(function(e) {
	    var offset = $(this).offset();
		$("#test").show();
	    $("#test").offset({left:e.pageX,top:e.pageY});
	    imgX = (e.pageX - offset.left);
	    imgY = (e.pageY - offset.top);
	    console.log(imgX+" "+imgY);
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
