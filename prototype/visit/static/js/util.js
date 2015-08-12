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
	showSharePane:function(){
		$("#shadowDiv").show();
		$("#shareC").addClass('showState');
	},
	hideSharePane:function(){
		setTimeout(function(){
			$("#shadowDiv").hide();
			$("#shareC").removeClass('showState');
		},800)
	}
}