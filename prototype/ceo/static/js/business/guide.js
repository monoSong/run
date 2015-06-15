'use strict';
(function() {
	//for test.
//	localStorage.clear();
	var w; 
	var timer;
	if(skipGuide()){
		$(function() {
			setStyles();
			init();
			bindEvents();
		});
	}
	
	function bindEvents(){
		$("#btnKonow").on('click',function(){
			localStorage.setItem('ceo.skipGuide', true);
			gotoIndexPage();
		});
	}
	
	function skipGuide(){
		if(localStorage.getItem("ceo.skipGuide")=="true"){
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
		var myScroll = new IScroll('#wrapper', {
			scrollX: true,
			scrollY: false,
			momentum: false,
			snap: true,
			snapSpeed: 400,
			keyBindings: true,
			click:true,
			indicators: {
				el: document.getElementById('indicator'),
				resize: false
			}
		});
		myScroll.on('scrollEnd', function() {
			if (w) {
				var index = Math.round(Math.abs(myScroll.x / w));
				if (index == $("#scroller").children().length - 1) {
					if(!$("#guide").hasClass('show')){
						$("#guide").addClass('show');
					}
				}else{
					$("#guide").removeClass('show');
				}
			}
		})
		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);
	}
})();