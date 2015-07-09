'use strict';
(function(){
	function layout(){
		var baseW=320,
			winW = $(document.documentElement).width(),
			scaleX=winW/baseW;
		$("#conatiner").css('-webkit-transform','scale('+scaleX+')');
	}
	
	
	function benefitOk(){
		var  $btn = $("#btnBenifit");
		$btn.addClass("pulse");
		setTimeout(function(){
			$btn.hide();
			$("#tipC").addClass("rubberBand");
		},300);
	}
	function bindEvents(){
		$(window).bind('resize',layout);
		

		$("#btnBenifit").click(function(){
			
			//todo:调用领取红包数据接口
			benefitOk();
		})
	}
	
	$(function(){
		layout();
		bindEvents();
	})
})();
