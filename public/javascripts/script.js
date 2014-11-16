$(document).ready(function() {

	$('ul li').click(function(){
		$('footer').css('position', 'fixed');
		$(this).css('text-decoration', 'underline');
		$(this).addClass('.selected');
		$(this).siblings().css('text-decoration', 'none')

		$('div.main').html('');
		var page = $(this).attr('id');
		if(page == "works"){
			$('footer').css('position', 'inherit');
		}
		var template = _.template( $('#' + page + '_template').html() );
		$('div.main').append(template);
	});
});