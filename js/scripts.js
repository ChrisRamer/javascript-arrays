$(document).ready(function () {
	
	function GetRandSelection(array) {
		return array[Math.round(Math.random() * (array.length - 1))];
	}

	$("form#favoriteThings").submit(function (e) { 
		e.preventDefault();
		
		const game1 = $("#game1").val();
		const game2 = $("#game2").val();
		const game3 = $("#game3").val();
		const games = [game1, game2, game3];

		const movie1 = $("#movie1").val();
		const movie2 = $("#movie2").val();
		const movie3 = $("#movie3").val();
		const movies = [movie1, movie2, movie3];

		const band1 = $("#band1").val();
		const band2 = $("#band2").val();
		const band3 = $("#band3").val();
		const bands = [band1, band2, band3];

		const randGame = GetRandSelection(games);
		const randMovie = GetRandSelection(movies);
		const randBand = GetRandSelection(bands);

		$("#randGame").text(randGame);
		$("#randMovie").text(randMovie);
		$("#randBand").text(randBand);
		$("#output").show();
	});

});