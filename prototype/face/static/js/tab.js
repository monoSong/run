$(function(){
	$('li','.tab').click(function(){
		if($(this).hasClass('active')){
			return;
		}
		var $p = $(this).closest('.tab');
		var $containerP = $p.next();
		$p.children().removeClass('active');
		var targetId = $(this).addClass('clicked active').attr('target');
		$containerP.addClass('gsBlur');
		setTimeout(function(){
			$containerP.find('.tabItem').hide();
			$('#'+targetId).show();
			$containerP.removeClass('gsBlur');
		},500)
	})
})
