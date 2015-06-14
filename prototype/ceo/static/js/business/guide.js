'use strict';
(function() {
	var w;
	if(skipGuide()){
		$(function() {
			setStyles();
			init();
		});
	}
	function skipGuide(){
		if(localStorage.getItem("skipGuide")=="true"){
			gotoIndexPage();
			return false;
		}
		return true;
	}
	
	function gotoIndexPage(){
		window.location='首页.html';
	}
	function setStyles() {
		var $w = $(window),
			h = $w.height();
		w = $w.width();
		util.addCssTxt("#guideDiv{width:" + w + "px;height:" + h + "px;}");
		util.addCssTxt("#wrapper{width:" + w + "px;height:" + h + "px;}");
		util.addCssTxt("#scroller{width:" + (w * $("#scroller").children().length) + "px;height:" + h + "px;}");

		util.addCssTxt(".slide{width:" + w + "px;height:" + h + "px;}");
		util.addCssTxt(".painting{width:" + w + "px;height:" + h + "px;}");
	}

	function init() {
		var myScroll;
		var itemLen = 4;
		var timer;
		myScroll = new IScroll('#wrapper', {
			scrollX: true,
			scrollY: false,
			momentum: false,
			snap: true,
			snapSpeed: 400,
			keyBindings: true,
			indicators: {
				el: document.getElementById('indicator'),
				resize: false
			}
		});
		myScroll.on('scrollEnd', function() {
			if (w) {
				var index = Math.abs(myScroll.x / w);
				if (index == $("#scroller").children().length - 1) {
					clearTimeout(timer);
					timer = setTimeout(function() {
						localStorage.setItem('skipGuide', true);
						gotoIndexPage();
					}, 3000);
				}
			}
		})
		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);
	}
})();