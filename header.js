var x = window.matchMedia("(min-width: 1000px)");

function largeScresn (x) {

$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 100){
      $("header img").removeClass("header", 1000)
		  $("header").addClass("shrink", 1000);
		}
		else
		{
			$("header").removeClass("shrink", 1000);
		}
	});
}
