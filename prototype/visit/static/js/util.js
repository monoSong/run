var util = {
	getUrlKV: function(key, url) {
		var kv = {},
			tmp;
		url = url || window.location.href;
		url = url.indexOf('#') > 0 ? url.split('#')[1] : url.split('#')[0].split('?')[1];
		//参数部分不存在的判断
		if (url) {
			url = url.split('&');
			for (var i in url) {
				if (url[i].indexOf('=') > 0) {
					tmp = url[i].split('=');
					kv[tmp[0]] = tmp[1];
				}
			}
		}
		//根据参数返回相应的值
		if (!key) {
			return kv;
		} else {
			return kv[key];
		}
	},
	showShadowDiv:function($el){
		if($("#shadowDiv").length==0){
			$('<div id="shadowDiv" class="shadowDiv"></div>').appendTo("body");
		}
		$("#shadowDiv").show();
	},
	showTelPane:function(){
		this.showShadowDiv();
		if($("#telC").length==0){
			var shareHTML = '<div id="telC" class="paneC telC">\
								<ul class="hBox">\
									<li class="flex1 canTouch">\
										<span class="iconFont"></span>400-811-888888\
									</li>\
								</ul>\
								<div onclick="util.hidePane(this)" class="btn canTouch canClick">取消</div>\
							</div>'
			$(shareHTML).appendTo("body");
		}
		$("#telC").addClass('showState');
	},
	hidePane:function(btnObj){
		setTimeout(function(){
			$("#shadowDiv").hide();
			$(".paneC").removeClass('showState');
			$(btnObj).removeClass('clicked');
		},800);
	},
	showSharePane:function(){
		this.showShadowDiv();
		if($("#shareC").length==0){
			var shareHTML = '<div id="shareC" class="shareC paneC">\
								<ul class="hBox">\
									<li class="flex1 canTouch">\
										<img src="static/img/wx.png" />\
										<p>微信好友</p>\
									</li>\
									<li class="flex1 canTouch">\
										<img src="static/img/pyq.gif" />\
										<p>朋友圈好友</p>\
									</li>\
								</ul>\
								<div onclick="util.hidePane(this)" class="btn canTouch canClick">取消</div>\
							</div>'
			$(shareHTML).appendTo("body");
		}
		$("#shareC").addClass('showState');
	}
}