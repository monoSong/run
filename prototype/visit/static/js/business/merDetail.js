$(function(){
	var merDetail={
		slideEnd:function(curIndex){
			$("#albumIndex").html((curIndex+1)+'/'+this.data.length);
		}
	}
	
	window.slideEnd=merDetail.slideEnd;
	
})
