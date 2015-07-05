'use strict';
(function(){
	
	var vCodeTimer = null;
	
	function layout(){
		$("#main").css('height',$(document.documentElement).height());
	}
	
	function bindEvents(){
		$(document).on('focus',"input",function(){
			$(this).addClass('active');
		}).on("blur",'input',function(){
			$(this).removeClass('active');
		}).on('click','#gender li',function(){
			$(this).addClass('selected').siblings().removeClass('selected');
		}).on('click','#sportType li',function(){
			$(this).toggleClass('selected');
		})
		
		$("#btnGetVcode").click(function(){
			var count=10;
			var $t = $(this);
			$t.addClass('disabled');
			if(vCodeTimer){//仍处于倒计时
				return;
			}else{
				$("#restSec").html(count+"s");
				$("#restSecC").show();
				
				//todo: 调用验证码接口
				
				vCodeTimer = setInterval(function(){
					if(count==1){
						clearInterval(vCodeTimer);
						vCodeTimer=null;
						$t.removeClass('disabled');
						$("#restSecC").hide();
					}
					$("#restSec").html( --count+"s");
				},1000);
			}
		});
		
		$("#btnNext").click(function(){
			$("#step1").hide();
			$("#step2").show();
			$(this).hide();
			$("#btnFinish").show();
			var eleH = $('.title').outerHeight() + $(".belt").outerHeight(true) + $(".infoBlock:eq(1)").outerHeight() +70;
			if(eleH>$(document.documentElement).height()){//小屏幕，去除单屏
				$("#main").height('auto');
			}
		});
		
		$("#btnFinish").click(function(){
			var checkedGender =$('#gender').find('.selected');
			var checkedSport = $.map($('#sportType').find('.selected'),function(item){
				return $(item).text();
			});
			alert('性别：'+ checkedGender.eq(0).text() +'\n 项目：'+ checkedSport.join('、'))
		});
	}
	
	
	$(function(){
		layout();
		bindEvents();
	});
})();
