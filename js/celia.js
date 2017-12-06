$(function() {

	$('.testslider').hide(0); // masque les sous-menus au chargement


	$(".navbar-text.navslider").click(function() {
		$(".testslider").slideToggle(500);

	});
});