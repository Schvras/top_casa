$('#barra_navegacao').on('show.bs.collapse', function() {
	$('.topCasaFina_banner').css('transform', 'translate(-50%, 10%');

});

$('#barra_navegacao').on('hide.bs.collapse', function() {
	$('.topCasaFina_banner').css('transform', 'translate(-50%, -50%');
});