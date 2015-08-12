$(function(){
	var merDetail={
		slideEnd:function(curIndex){
			$("#albumIndex").html((curIndex+1)+'/'+this.data.length);
//			debugger;
		}
	}
	
	window.slideEnd=merDetail.slideEnd;
	
})
