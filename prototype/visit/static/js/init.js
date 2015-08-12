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
		$('#i' + toIndex, pDoc).attr('src',toUrl );//页面转入
		pageBox.slideTo(toIndex);	
		pWin.pageUrls.push($('#i' + curIndex, pDoc).attr('src'));//路径保存
		setTimeout(function() {
			$('#i' + curIndex, pDoc).attr('src', '');//释放
		}, 2000);
	}else{
		window.location = toUrl;
	}

}).on('click', '.back', function() {
	if (window.top != window) { //单页
		setTimeout(function() {
			var pWin = window.top,
				pDoc = pWin.document,
				pageBox = pWin.pageBox,
				curIndex = pageBox.slideIndex,
				toIndex = curIndex - 1,
				toUrl = $(this).attr('onePageTo');
			if (toIndex >= 0) {
				$('#i' + toIndex, pDoc).attr('src', pWin.pageUrls.pop());
				setTimeout(function() {
					$('#i' + curIndex, pDoc).attr('src', '');
				}, 2000);
				pageBox.slideTo(toIndex);
			}
		}, 500);
	} else {
		setTimeout(function() {
			window.history.back();
		}, 500);
	}
}).on('click', '.share', function() {
	util.showSharePane();
}).on('click','#closeShare',function(){
	util.hideSharePane();
});