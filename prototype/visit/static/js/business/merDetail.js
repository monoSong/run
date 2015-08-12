$(function(){
	$(document).on('click','.actions li.canClick',function(){
		$(this).addClass("checked").removeClass('canClick');
	});
})
