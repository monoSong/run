(function(){
	var text = '<meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1, user-scalable=no" />';
	document.write(text);
	document.documentElement.style.fontSize = "50px";
}())

$(document).on('click','.canClick',function(){
	$('.clicked').removeClass('clicked');
	$(this).addClass('clicked');
})

	