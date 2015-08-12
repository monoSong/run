$(function(){
	//data-configs='"slideEnd":"merDetail"'
	$('.album').each(function(){
		if($(this).data('imgs')){
			var imgs = $(this).data('imgs').split(",");
			var dom =$('<div class="iSlider-wrapper" style="height:'+$(this).height()+'px"></div>').appendTo(this);
			var data=[];
			while(imgs.length){
				data.push({content:imgs.shift()});
			}
			var opts = {
			    data: data,
			    isAutoplay:false,
			    isLooping:true,
			    showDot:true,
			    dom: dom[0]
			};
			
			var config = JSON.parse("{"+ ($(this).data('configs')||"")+"}");
			$.extend(opts,config);
			
			if(opts.onslideend){
				opts.onslideend = window[opts.onslideend];
//				debugger;
			}
			
			var	islider = new iSlider(opts);
			if(opts.showDot){
				islider.addDot();
			}
		}else{
			throw "请配置 data-imgs 参数";
		}
	})
	
})
