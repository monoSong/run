'use strict';
(function(){
	function layout(){
		$("#main").css('height',$(document.documentElement).height());
	}
	
	function bindEvents(){
		$("#btnJoin").click(function(){
			util.dialog.show('processTip');
		});
		
		$("#btnAppoint").click(function(){
			util.dialog.hide('processTip');
		});
	}
	
	$(function(){
		layout();
		bindEvents();
	})
})();
