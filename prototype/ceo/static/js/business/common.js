'use strict';

(function() {
	$(function() {
		bindEvents();
	})
	function bindEvents() {
		$("#btnRule").click(function() {
			$("#actDesc").removeClass('hideState').addClass('show');
			util.shadow.show();
		});
		
		$(document).on('click',"#btnClose,#shadowDiv",function(){
			$("#actDesc").removeClass('show').addClass('hideState');
			setTimeout(function() {
				util.shadow.remove();
			}, 600)
		});
	}
})();
