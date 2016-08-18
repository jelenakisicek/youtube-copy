

$(document).ready(function(){
	cl("jelena");

	$(".menu-lines").click(function(){
		cl("stisnula sam menu-lines");
		$(".left-container").toggle();
		$(".right-container").toggleClass("no-padding");
	});
});


function cl(msg){
  console.log(msg);
}