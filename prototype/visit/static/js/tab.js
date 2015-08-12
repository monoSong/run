$(function(){
	$('li','.tab').click(function(){
		if($(this).hasClass('active')){
			return;
		}
		var $p = $(this).closest('.tab');
		var $containerP = $p.next();
		$p.children().removeClass('active');
		var targetId = $(this).addClass('active').attr('target');
		$containerP.find('.tabItem').hide();
		$('#'+targetId).parent().show();
		$('#'+targetId).show();
		$containerP.removeClass('gsBlur');
	})
})
