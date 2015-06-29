$(function(){
	var selData = {
		gender:["男","女"],
		city:["北京市","上海市","深圳市"],
		actType:["陪跑","健身"],
		years:["三个月","六个月","一年","两年以上"],
		age:[]
	};
	var iscrollMap={};
	renderSel();
	bindEvents();
	
	function renderSel(){
		/* 构建下拉单项 */
		function buildOption($owner,val){
//			$owner.append('<option value="'+val+'">'+val+'</option>');
			
			$owner.append('<div value="'+val+'" class="option">'+val+'</div>');
		}
		/* 构建下拉选项 */
		function buildOptions($owner,values){
			$.each(values,function(){
				buildOption($owner,this);
			});
		}
		for(var selId in selData){
//			console.log(selId);
//			if(selId!="age"){
//				continue;
//			}
			var data=selData[selId];
			$('<div selId="'+selId+'" id="'+selId+'C" class="wrapper">\
					<div class="op">\
						<div class="opCancel">取消</div><div class="opOk">完成</div>\
					</div>\
					<div class="iscrollC">\
						<div id="'+selId+'" class="iscroll"><div></div></div>\
					</div>\
				</div>').appendTo('body');
			if(selId =="age"){
				for(var i=15;i<50;i++){
					data.push(i);
				}
			}
			buildOptions($('div','#'+selId),data);
			var options={
				scrollX: false,
				scrollY: true,
				momentum: false,
				snap: true,
//				bounce:false,
				snapSpeed: 400
			}
			iscrollMap[selId]=new IScroll('#'+selId, options);
		}
	}
	
	function bindEvents(){
		myScroll = new IScroll('#wrapper', {bounce:false,tap:true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		
		$(document).on('tap','[relateSel]',function(){
			var $owner = $(this);
			var $sel = $('#'+$owner.attr('relateSel')+'C');
			var a = extractValue($owner.children('dd:eq(0)').html());
			showSel($sel,a);
		});
		
		$(document).on('change','select',function(){
			var $t= $(this);
			$("[relateSel="+this.id+"] dd").html($t.val());
			hideSel($t);
		});
		
		$(document).on('click',".opCancel",function(){
			hideSel();
		});
		$(document).on('click',".opOk",function(){
			var $root= $(this).closest('.wrapper');
			var selId = $root.attr("selId");
			var curY= Math.abs(iscrollMap[selId].y);
			var curIndex = Math.round(curY/30);
			var curV = $root.find(".option:eq('"+curIndex+"')").attr("value");
			$('dd','[relatesel='+selId+']').html(curV);
			hideSel();
		});
	}
	function showSel($t,initValue){
			$t.removeClass('hide').addClass('show');
		setTimeout(function(){
			var el = $t.find('[value='+initValue+']')[0];
			
			if(el){
try{				
//				iscrollMap[$t.attr("selId")].scrollToElement(el);
}catch(e){
	alert(e.message);
}
			}
			
		},30);
		$("#shadowDiv").css("height",$(document).height()).show();
	}
	function hideSel($t){
		$('.wrapper').removeClass('show').addClass('hide');
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
