var util={
	shadow:{
		show:function(cbFn){
			if($("#shadowDiv").length==0){
				$("<div id='shadowDiv' class='shadowDiv'></div>").appendTo('body');
			}
			$("#shadowDiv").show();
			if(cbFn){
				$("#shadowDiv").unbind().bind('click',cbFn);
			}
		},
		hide:function(){
			$("#shadowDiv").hide();
		},
		remove:function(){
			$("#shadowDiv").remove();
		}
	},
	dialog:{
		show:function(dialogId){
			$(".dialog.dialogShow").addClass('dialogHide').removeClass('dialogShow');
			
			
			
			util.shadow.show(function(){
				util.shadow.hide();
				$("#"+dialogId).addClass('dialogHide').removeClass('dialogShow');
			});
			$("#"+dialogId).addClass('dialogShow').removeClass('dialogHide');
		},
		hide:function(dialogId){
			util.shadow.hide();
			$("#"+dialogId).addClass('dialogHide').removeClass('dialogShow');
		}
	},
	addCssTxt:function(styleTxt) {
		var style = document.createElement('style');
		style.rel = 'stylesheet';
		style.type = 'text/css';
		style.innerText = styleTxt;
		document.getElementsByTagName('head')[0].appendChild(style);
	}
}
