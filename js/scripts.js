$(document).ready(function () {
	
	$("form#favoriteThings").submit(function (e) { 
		e.preventDefault();
		
		const game1 = $("#game1").val();
		const game2 = $("#game2").val();
		const game3 = $("#game3").val();
		const games = [game1, game2, game3];

		const randNum = Math.round(Math.random() * ((games.length - 1)));
		console.log("I think you should replay " + games[randNum]);
	});

});