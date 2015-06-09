'use strict';

function renderPage(){
	if($("#actLogo").attr('loaded') && $('#listC').attr('loaded')){
		$('#listC').show();
	}
}


(function() {
	$(function() {
		setStyles();
		bindEvents();
	})
	
	function setStyles() {
		var dw = $(document.documentElement).width();
		var w = $('#listC').width();
		var iw = Math.floor(w / 3);
		var iiw = iw * .8; //图片尺寸
		var iicW = iiw + 2; //图片容器尺寸
		util.addCssTxt(".list .item{-webkit-transition: all 300ms linear; width:" + iw + "px; padding-top:" + (iw * .3) + "px;");
		util.addCssTxt(".index .list .item .infos{ width:" + iiw + "px; } ");
		util.addCssTxt(".index .list .item .imgBox{ width:" + iicW + "px;height:" + iicW + "px; } ");
		util.addCssTxt(".index .list .item .desc{font-size:" + (iiw / 8) + "px;margin-top:10px} ");
		util.addCssTxt(".index .list .item .imgBox img{ width:" + iiw + "px;} ");
		util.addCssTxt(".index .list .city{ -webkit-transform:scale(" + (iiw / 60) + "); } ");
		$('#listC').attr('loaded',true);
		renderPage();
	}


	function bindEvents() {
		$(window).bind('resize', setStyles);

		$("#floatUser").click(function(){return false;})
		
		$("#float_btnClose,#floatCEO").click(function() {
			$("#floatCEO").removeClass('show').addClass('hideState');
			setTimeout(function(){
				$("#floatCEO").hide();
			},400);
		});

		$('#listC').on('click', '.item', function() {
			$(this).addClass('actived').siblings().removeClass('actived');
			setTimeout(function(){
				$("#floatCEO").removeClass('hideState').addClass('show');
				$("#floatCEO").css('display', '-webkit-box');
			},400);
		})
		
		$("#btnKonow").click(function(){
			$("#guide").addClass('hideState');
			setTimeout(function(){
				$("#guide").hide();
			},1000);
		});
	}
})();
