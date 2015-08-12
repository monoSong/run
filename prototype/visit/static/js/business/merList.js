$(function(){
	var ret={
		init:function(){
			this.bindEvents();
		},
		bindEvents:function(){
			$('.fStatus').click(function(){
				$(this).addClass("focused");
				return false;
			});
		}
	}
	ret.init();
})
