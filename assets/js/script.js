$(document).ready(function()  {
	
	// jQuery Function Number 1
	$(".pokeball").click(function() {
		
		let currentClass = this;

		// jQuery Function Number 2
		let pokeball = $(this).text();
		
		// jQuery Function Number 3
		let pokemonactive = $(this).hasClass("active");
		
		let condition = !pokemonactive

		if (condition) {
			
			// jQuery Function Number 4
			if(pokeball === "bulbasaur") {
				$(".name").css("text-shadow", "3px 3px 5px purple");
				$(".label").css("text-shadow", "2px 2px 5px purple");
			} else if(pokeball === "charmander") {
				$(".name").css("text-shadow", "3px 3px 5px red");
				$(".label").css("text-shadow", "2px 2px 5px red");
			} else {
				$(".name").css("text-shadow", "3px 3px 5px blue");
				$(".label").css("text-shadow", "2px 2px 5px blue");
			}
			$(this).addClass("active");
			
			// jQuery Function Number 5
			$(this).removeClass("inactive");
			
			// jQuery Function Number 6
			$("." + pokeball + "-content").css("display", "block");
			
			$("body").css("background", "#b3a075");
			$(".bulbasaur-content").css("opacity", "0.95");
			$(".pokemon-pic").css("opacity", "1");
			$("#back-button").css("display", "block");
		}
		$("#back-button").click(function() {
			$(currentClass).addClass("inactive");
			$(currentClass).removeClass("active");
			$("." + pokeball + "-content").css("display", "none");
			$("body").css("background", "#e1c37e")
			$(this).css("display", "none");
		})
	})
})