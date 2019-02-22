$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 100){
      $("header img").removeClass("header")
		  $("header").addClass("shrink");
		}
		else
		{
			$("header").removeClass("shrink");
		}
	});
