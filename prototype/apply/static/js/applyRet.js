$(function(){
	var selData = {
		gender:["男","女"],
		city:["北京市","上海市","深圳市"],
		actType:["陪跑","健身"],
		years:["三个月","六个月","一年","两年以上"],
		age:[]
	};
	renderSel();
	bindEvents();
	
	function renderSel(){
		/* 构建下拉单项 */
		function buildOption($owner,val){
			$owner.append('<option value="'+val+'">'+val+'</option>');
		}
		/* 构建下拉选项 */
		function buildOptions($owner,values){
			$.each(values,function(){
				buildOption($owner,this);
			});
		}
		for(var selId in selData){
			var data=selData[selId];
			$('<select id="'+selId+'"></select>').appendTo('body');
			if(selId =="age"){
				for(var i=15;i<50;i++){
					data.push(i);
				}
			}
			buildOptions($('#'+selId),data)
		}
	}
	
	function bindEvents(){
		$(document).on('click','[relateSel]',function(){
			var $owner = $(this);
			var $sel = $('#'+$owner.attr('relateSel'));
			var a = extractValue($owner.children('dd:eq(0)').html());
			console.log('a',a);
			showSel($sel,a);
		});
		
		$(document).on('change','select',function(){
			var $t= $(this);
			$("[relateSel="+this.id+"] dd").html($t.val());
			hideSel($t);
		});
		
		$("#shadowDiv").click(function(){
			hideSel();
		});
	}
	function showSel($t,initValue){
		$('#age').children('[value='+initValue+']').prop('selected','true');
		$("#shadowDiv").show();
		$t.val(initValue);
		$t.show();
		$t.trigger('focusin');
	}
	function hideSel($t){
		$('select').hide();
		$("#shadowDiv").hide();
	}
	
	/**
	 * 功能：内容提取，无效返回空 
	 * @param {String} inV
	 */
	function extractValue(inV){
		if((/class="tip"/g).test(inV)){
			return "";
		}
		return inV;
	}
})
