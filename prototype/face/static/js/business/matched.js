'use strict';
(function(){
	var changeCount=0;
	function layout(){
		var baseW=360,
			baseH=532,
			curW=$(document.documentElement).width(),
			curH= $(document.documentElement).height()-48,
			scaleX=curW/baseW;
		var curH = 	baseH*scaleX;
		$("#record").css('-webkit-transform','scale('+scaleX+')')
			.css('height',curH);
		$("#recordC").height(curH);	
			
	}
	
	
	function bindEvents(){
		$("#btnChange").click(function(){
			changeCount++;
			
			$("#record").addClass('runing');
			//转动效果
			$.each($('.dot li'),function(){
				var angle = Math.round(Math.random()*360)+ (changeCount*360)+'deg',
					runTime = Math.random()*7;
				if(runTime<2){
					runTime += 2;
				}
				$(this).css('-webkit-transition-duration',runTime+'s')
					.css('-webkit-transform','rotateZ('+angle+') translateX('+$(this).attr('translateX')+')')
			})
//			todo:抓取头像数据，成功后调用取消闪烁效果
			setTimeout(function(){
//				$("#record").removeClass('runing');
			},6000);
		});
		
		$(document).on('click','.coach section',function(){
			util.dialog.show('dialogConfig');
		})
		
		$("#btnYes").click(function(){
			//todo:调用约会接口
			util.dialog.show('appointOk');
		});
		$("#btnNo").click(function(){
			util.dialog.hide('dialogConfig');
		})
		$("#btnContinue").click(function(){
			util.dialog.hide('appointOk');
		});
		
		$(window).on('resize',function(){
			layout();
		})
	}
	
	$(function(){
		layout();
		bindEvents();
	})
})();
