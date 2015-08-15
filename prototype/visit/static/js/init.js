(function() {
	var text = '<meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1, user-scalable=no" />';
	document.write(text);
	document.documentElement.style.fontSize = "50px";
}())


$(document).on('click', '.canClick', function() {
	$('.clicked').removeClass('clicked');
	$(this).addClass('clicked');
}).on('click', '[linkto]', function() {
	if (window.top != window) {
		window.top.location = $(this).attr('linkTo');
	}else{
		window.location = $(this).attr('linkTo');
	}
}).on('click', '[onePageTo]', function() {
	var toUrl = $(this).attr('onePageTo');
	if (window.top != window) {
		var pWin = window.top,
			pDoc = pWin.document,
			pageBox = pWin.pageBox,
			curIndex = pageBox.slideIndex,
			toIndex = curIndex + 1;
		pWin.history.pushState(null, "", toUrl);
		pWin.pageUrls.push($('#i' + curIndex, pDoc).attr('src'));//路径保存	
		pWin.showIframe(toIndex,curIndex,toUrl);	
	}else{
		window.location = toUrl;
	}
}).on('click', '.back', function() {
	var $t = $(this);
	setTimeout(function() {
		if (window.top != window) { //单页
			if(navigator.app && navigator.app.backHistory){//phonegap
				window.top.navigator.app.backHistory();
			}else{
				window.top.history.back();
			}
		} else {
			if(navigator.app && navigator.app.backHistory){//phonegap
				navigator.app.backHistory();
			}else{
				history.back();
			}
			$t.removeClass('clicked');
		}
	}, 500);
}).on('click', '.share', function() {
	util.showSharePane();
})