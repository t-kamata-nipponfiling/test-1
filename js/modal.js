$(function() {
	var modal = $('#modal');
	var modalContent = $('#modal_content');
	var btnOpen = $('#btn_open');
	var btnClose = $('#btn_close');
	
	$(btnOpen).on('click', function() {
		modal.show();
	});
	
	$(modal).on('click', function(event) {
		if (!($(event.target).closest(modalContent).length) || ($(event.target).closest(btnClose).length)) {
			modal.hide();
		}
	});
	
	$('#lblFunctionName').css({'background-color': 'white'});
	$('body').css({'background-color': 'lightgreen'});
	
	var colorTable = $('#color_table td');
	$(colorTable).on('click', function() {
		var colorval = $(this).css('backgroundColor');
		$('body').css({'background-color': hexc(colorval)});
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