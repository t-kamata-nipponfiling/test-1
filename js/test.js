$(function() {

	$('.tab li').click(function() {
		var index = $('.tab li').index(this);
		$('.content li').css('display','none');
		$('.content li').eq(index).css('display','block');
		$('.tab li').removeClass('select');
		$(this).addClass('select')
	});

	$(".exit input").change(function() {
		$('.related input').prop('disabled', !$(".exit input").prop('checked'));
		$('.related').css({ color: $(".exit input").prop('checked') ? 'black' : 'silver' });
		$('.content span').next('p')[$(".exit input").prop('checked') ? 'show' : 'hide']();
	});
	$(".exit input").trigger('change');

});
