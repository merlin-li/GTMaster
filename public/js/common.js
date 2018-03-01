var common = {
    init : function(){
        this.bindEvent();
    },
    bindEvent : function(){
    	//修改需求弹框
    	$('.releaseBtn').on('click',function(){ 
    		var cont='<div class="demand">'
    				+'<p>请输入您修改项目名称：</p>'
    				+'<div class="cf"><input placeholder="中途图片文案排版修改" class="demandinput" type="text"><em>*</em><i class="active"></i></div>'
    				+'<p>请输入您需要修改数量：</p>'
    				+'<div class="cf"><input placeholder="例如：7张图片" class="demandinput" type="text"><em>*</em><i></i></div>'
    				+'<p>请输入您的QQ或微信：</p>'
    				+'<div class="cf"><input placeholder="例如：qq 563703966" class="demandinput" type="text"><em>*</em><i></i></div>'
    				+'<p>请输入您的手机号码：</p>'
    				+'<div class="cf"><input placeholder="例如：15088996633" class="demandinput" type="text"><em>*</em><i></i></div>'
    				+'<a href="javascript:void(0);" class="submitDemand">立即提交</a>'
    				+'<div class="subTip">亲！您的订单已提交成功，我们正在飞速联系您...</div>'
    				+'<a href="javascript:void(0);" class="submitDemand success">提交成功</a>'
    				+'</div>';
    		new dialogBox.tips({
				position:"center",
				id:"updatedemand",
				style:"updatedemand",
				hasTitle:true,
				title:"",
				content:cont,
				callback:function(fn){
										
				}	
			});
    	})
    	//返回顶部
    	$(".c_r5").click(function () {
	        var speed=200;
	        $('body,html').animate({ scrollTop: 0 }, speed);
	        return false;
	    });
    }
};
$(function(){
    common.init();    
});
