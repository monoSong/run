'use strict';
(function(){
	function layout(){
		var winH = $(document.documentElement).height();
console.log(winH);		
		if(585<winH){
			$("#main").css('height',winH).addClass('oneScreen');
		}
		
		
		
		
//console.log(h);	
//alert(h);
//		if(h<570){
//			$("#mirror").height('6.3rem');
//		}else{
			
//		}
	}
	
	function bindEvents(){
		$("#btnUpload").click(function(){
			$("#mirror").removeClass('noPhoto');
			$("#result").show();
		});
	}
	
	
	$(function(){
		layout();
		bindEvents();
	})
})();
