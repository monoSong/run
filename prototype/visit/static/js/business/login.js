$(function() {
	var vCodeTimer = null;
	var ret = {
		init: function() {
			this.bindEvents();
		},
		bindEvents: function() {
			$("#btnChooseWX").click(function(){
				$("#loginPane").hide();
				$("#wxPane").addClass('fr');
			});
			
			$(document).on('focus', "input", function() {
				$(this).addClass('active');
			}).on("blur", 'input', function() {
				$(this).removeClass('active');
			})
			$("#btnGetVcode").click(function() {
				var count = 10;
				var $t = $(this);
				$t.addClass('disabled');
				if (vCodeTimer) { //仍处于倒计时
					return;
				} else {
					$("#restSec").html(count + "s");
					$("#restSecC").show();

					//todo: 调用验证码接口

					vCodeTimer = setInterval(function() {
						if (count == 1) {
							clearInterval(vCodeTimer);
							vCodeTimer = null;
							$t.removeClass('disabled clicked');
							$("#restSecC").hide();
						}
						$("#restSec").html(--count + "s");
					}, 1000);
				}
			});

		}

	}
	ret.init();
})