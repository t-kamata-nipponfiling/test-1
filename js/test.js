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

	$('.temperature input').change(function() {
		$('.temperature .related input').prop('disabled', $('.temperature input').prop('checked'));
		$('.temperature .related').css({ color: $('.temperature input').prop('checked') ? 'darkgray' : 'black' });
	});
	$('.temperature input').trigger('change');

});
