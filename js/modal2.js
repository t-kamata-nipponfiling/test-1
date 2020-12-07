$(function() {
	$('body').css({'background-color': 'azure'});

	$('.background-colors td').on('click', function() {
		var colorval = $(this).css('backgroundColor');
		$('.chain-name').css({'background-color': hexc(colorval)});
	});

	$('.text-colors td').on('click', function() {
		var colorval = $(this).css('backgroundColor');
		$('.chain-name').css({'color': hexc(colorval)});
	});
});

function hexc(colorval) {
	var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	delete(parts[0]);
	for (var i = 1; i <= 3; ++i) {
		parts[i] = parseInt(parts[i]).toString(16);
		if (parts[i].length == 1) parts[i] = '0' + parts[i];
	}
	return '#' + parts.join('');
}