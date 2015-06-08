'use strict';

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
	}


	function bindEvents() {
		$(window).bind('resize', setStyles);
		$("#btnRule").click(function() {
			$("#actDesc").removeClass('hideState').addClass('show');
			util.shadow.show();
		});
		
		$(document).on('click',"#btnClose,#shadowDiv",function(){
			$("#actDesc").removeClass('show').addClass('hideState');
			setTimeout(function() {
				util.shadow.remove();
			}, 600)
		});

		$("#float_btnClose").click(function() {
			$("#floatCEO").hide();
		});

		$('#listC').on('click', '.item', function() {
			$("#floatCEO").css('display', '-webkit-box');
		})
	}
})();
