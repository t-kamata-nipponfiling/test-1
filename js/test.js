$(function() {

	$('.tab li').click(function() {
		var index = $('.tab li').index(this);
		$('.content li').css('display','none');
		$('.content li').eq(index).css('display','block');
		$('.tab li').removeClass('select');
		$(this).addClass('select')
	});

	$('.exit input').change(function() {
		$('.exit .related input').prop('disabled', !$('.exit input').prop('checked'));
		$('.exit .related').css({ color: $('.exit input').prop('checked') ? 'black' : 'darkgray' });
	});
	$('.exit input').trigger('change');

	$('.wait input').change(function() {
		$('.wait .related input').prop('disabled', !$('.wait input').prop('checked'));
		$('.wait .related').css({ color: $('.wait input').prop('checked') ? 'black' : 'darkgray' });
	});
	$('.wait input').trigger('change');

});
