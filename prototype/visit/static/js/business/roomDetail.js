$(function(){
//	$(document).on('click','.actions li.canClick',function(){
//		$(this).addClass("checked").removeClass('canClick');
//	});
	
	var ret={
		init:function(){
			this.renderHTML();
		},
		pageIndex:$("#pageIndex"),
		renderHTML:function(){
			$("#pics").height( $('#intro').height() )
				.width($('#intro').width());
			var data = [{
				content:""
			},
			{
				content: '<img class="coverImg" src="static/img/temp/r1.jpg"/>\
						<div>\
							<span>温馨双人间</span>\
							<em>￥1080</em>\
							<p>分享我们的旅行，感谢你的陪伴</p>\
						</div>',
			},{
				content: '<img class="coverImg" src="static/img/temp/r2.jpg"/>\
						<div>\
							<span>温馨双人间</span>\
							<em>￥1080</em>\
							<p>分享我们的旅行，感谢你的陪伴</p>\
						</div>',
			}, {
				content: '<img class="coverImg" src="static/img/temp/r1.jpg"/>\
						<div>\
							<span>温馨双人间</span>\
							<em>￥1080</em>\
							<p>分享我们的旅行，感谢你的陪伴</p>\
						</div>',
			}, {
				content: '<img class="coverImg" src="static/img/temp/r2.jpg"/>\
						<div>\
							<span>温馨双人间</span>\
							<em>￥1080</em>\
							<p>分享我们的旅行，感谢你的陪伴</p>\
						</div>'
			}];
			var dataLen = data.length-1;
			var opts = {
				type: 'dom',
				data: data,
				dom: document.getElementById("pics"),
				animateType:'depth',
				onslideend:function(curIndex){
					if(curIndex==0){
						$("#pics").removeClass('showState');
					}else{
						$("#pics").addClass('showState');
						ret.pageIndex.html( curIndex+'/'+dataLen );
					}
					
				}
			};
			new iSlider(opts);
			this.pageIndex.html( '1/'+dataLen );
		}
	}
	ret.init();
})
