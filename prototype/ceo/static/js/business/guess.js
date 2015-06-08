'use strict';

(function() {
	$(function() {
		init();
		bindEvents();

	});

	function init() {
		var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		var numHtml = '<div>' + arr.join('</div><div>') + '</div>';
		$('.iscrollC').html(numHtml);
	}

	function bindEvents() {
		/*密码锁*/
		var options={
			snap: true
		}
		var a = new IScroll('#num1', options);
		new IScroll('#num2', options);
		new IScroll('#num3', options);
		
		$("#btnGuess").click(function(){
			var guessNum = getGuessNum();
			alert(guessNum);
		});
	}
	
	function getGuessNum(){
		var num1=_getV($('#num1 .iscrollC'));
		var num2=_getV($('#num2 .iscrollC'));
		var num3=_getV($('#num3 .iscrollC'));
	}
	
	function _getV($dom){
		var rawStr=$dom.css('transform');
		var dot=rawStr.lastIndexOf(',');
		var rawStr=rawStr.substring(dot);
		var value =rawStr.match(/(\d)+/)[0]/76;
		return vaule;
	}
})();