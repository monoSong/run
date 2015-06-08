'use strict';

(function() {
	var  i1,i2,i3;
	$(function() {
		init();
		bindEvents();

	});

	function init() {
		var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		var numHtml = '<div>' + arr.join('</div><div>') + '</div>';
		$('.iscrollC').html(numHtml);
		/*密码锁*/
		var options={
			snap: true
		}
		i1 = new IScroll('#num1', options);
		i2 = new IScroll('#num2', options);
		i3 = new IScroll('#num3', options);
		i1.on('scrollStart',function(){
			$("#game").addClass('lighting');
		});
		i2.on('scrollStart',function(){
			$("#game").addClass('lighting');
		});
		i3.on('scrollStart',function(){
			$("#game").addClass('lighting');
		});
		i1.on('scrollEnd',function(){
			$("#game").removeClass('lighting');
		});
		i2.on('scrollEnd',function(){
			$("#game").removeClass('lighting');
		});
		i3.on('scrollEnd',function(){
			$("#game").removeClass('lighting');
		});
	}

	function bindEvents() {
		$("#btnGuess").click(function(){
			var guessNum = getGuessNum();
		});
		
	}
	/**
	 * 功能：获取猜测数字
	 */
	function getGuessNum(){
		var num1=_getV(i1.y);
		var num2=_getV(i2.y);
		var num3=_getV(i3.y);
		var ret  = num1+''+num2+num3;
		return ret;
	}
	
	function _getV(offsetVule){
		var value =Math.abs(offsetVule/76);
		return value;
	}
})();