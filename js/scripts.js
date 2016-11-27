$(document).ready(function(){
	$('#pokemons').slick({
		// arrows: true,
		dots: true,
		infinite: true,
		// speed: 300,
		fade: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		adaptiveHeight: true,
		adaptiveWidth: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000
	});
});