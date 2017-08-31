//banner
$(function(){
	jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
	jQuery(".slideBox_prod").slide({mainCell:".bd ul",autoPlay:true});
	
	jQuery(".slideTxtBox").slide({effect:"left",trigger:"click"});
	
	jQuery(".slideTxtBox_game").slide({effect:"left",trigger:"click"});
//下拉	
$(function(){

	$(".nav_essence p").click(function(){
		var ul=$(".new_essence");
		if(ul.css("display")=="none"){
			ul.slideDown();
		}else{
			ul.slideUp();
		}
	});
	
	$(".set").click(function(){
		var _name = $(this).attr("name");
		if( $("[name="+_name+"]").length > 1 ){
			$("[name="+_name+"]").removeClass("select");
			$(this).addClass("select");
		} else {
			if( $(this).hasClass("select") ){
				$(this).removeClass("select");
			} else {
				$(this).addClass("select");
			}
		}
	});
	
	$(".nav_essence dd").click(function(){
		var li=$(this).text();
		$(".nav_essence p").html(li);
		$(".new_essence").hide();
		/*$(".set").css({background:'none'});*/
		$("p").removeClass("select") ;   
	});
})
	
	
$(".game li").hover(function(){
	//鼠标滑上去
	$(this).find(".mask").animate({"bottom":"0px"},300);
},function(){
	//鼠标移开之后
	$(this).find(".mask").animate({"bottom":"-280px"},300);
});	
	
$(".slideTxtBox_game .bd ul li .game_con:last-child").css({"margin-right":"0"});	
$(".downDiv_c ul li dl.dl_c dd:nth-child(3)").css({"margin-right":"0"});	
$(".contentWrap .content_l .frame_bot ul li:nth-child(3)").css({"margin-right":"0"});		
$(".slideTxtBox_game .bd ul li:last-child").css({"border-bottom":"none"});	
$(".product_a .duc_con .e_con  dl dd:last-child").css({"margin-right":"0"});	





});
























