/**
 * Created by Administrator on 2017/3/20.
 */
//page1中canvas的宽高设置
var bgm = document.getElementById("bgm");
$("#page1_canvas,#page2_canvas").attr({width:$("body").width(),height:$("body").height()});
//点击自动播放与停止
var num = 0;
$("#auto_music").on("touchstart",function(){
    num++;
    if(num%2 != 0){
    	$(this).css({animationPlayState:"paused"});
        bgm.pause();   
    }else{
    	$(this).css({animationPlayState:"running"});
        bgm.play();   
    }
});
//微信音乐自动播放
function audioAutoPlay(id){
    document.addEventListener("WeixinJSBridgeReady", 	function () {
        id.play();
    }, false);
}
//构建一个随机函数
function rand(min,max){
    return parseInt(Math.random()*(max-min+1)+min);
}
var canvas = document.getElementById("page1_canvas");
var context = canvas.getContext("2d");
var fus = [];
var newFu = new Image();
newFu.src = "img/fu.png";
// console.log(newFu);

function NewFu(w,x,y,deg,speedY) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.deg = deg;
    this.speedY = speedY;
}
NewFu.prototype.move = function () {
	this.y += this.speedY;
}
NewFu.prototype.draw = function () {
    context.drawImage(newFu,this.x,this.y,this.w,this.w);
}
NewFu.prototype.clear = function () {
    if(this.y > canvas.height * 0.8){
        for(var i = 0; i <fus.length; i++){
            if(this == fus[i]){
                fus.splice(i,1);
            }
        }
    }
}
var fuNum = 0;
function animate() {
    fuNum++;
    context.clearRect(0,0,canvas.width,canvas.height);
    if(fuNum % 90 == 0){
        var thisW = rand(20,60);
        var speedY = rand(1,5);
        var fuTxt = new NewFu(thisW,rand(0,canvas.width-thisW),-150,rand(0,90),speedY);
        fus.push(fuTxt);
    }
    for(var j = 0; j < fus.length; j++){
        fus[j].draw();
        fus[j].move();
        fus[j].clear();
    }
    window.requestAnimationFrame(animate);
}
animate();
//console.log($("#page1_button"));
//点击按钮切页
$("#page1_button").on("touchstart",function(){
	clickButton($("#page_1"),$("#page_2"));
});
$("#page2_button1,#page2_button2").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_2"),$("#page_3"));
});
$("#page3_button1,#page3_button2").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_3"),$("#page_4"));
});
$("#page4_button1,#page4_button2").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_4"),$("#page_5"));
});
$("#page5_button1,#page5_button2").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_5"),$("#page_6"));
});
$("#page6_button1,#page6_button2").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_6"),$("#page_7"));
})
$("#page7_button1,#page7_button2").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_7"),$("#page_8"));
})
$("#page8_button1,#page8_button2").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_8"),$("#page_9"));
})

var page10_text12 = function(){
	setTimeout(function(){
		$("#page10_text12").css({display:"block"})
	},5800);//延迟中枪出现
}


$("#page9_button2").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_9"),$("#page_10"));
	page10_text12();
});
$(".pageid_text11").on("touchstart",function(){
//	console.log("next");
	page10_text12();
	clickButton($("#page_id"),$("#page_10"));
});
$(".pageid_text12").on("touchstart",function(){
//	console.log("next");
	clickButton($("#page_id"),$("#page_1"));
})
var oldPageId; //上一次的li对应的结果
var pageIdClick = 0; //点击次数
//点击li
$("#li1").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_10"),$("#page_id"));
	clickLi(".pageid_0");
});
$("#li2").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_10"),$("#page_id"));
	clickLi(".pageid_100");
});
$("#li3").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_10"),$("#page_id"));
	clickLi(".pageid_15");
});
$("#li4").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_10"),$("#page_id"));
	clickLi(".pageid_30");
});
$("#li5").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_10"),$("#page_id"));
	clickLi(".pageid_45");
});
$("#li6").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_10"),$("#page_id"));
	clickLi(".pageid_60");
});
$("#li7").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_10"),$("#page_id"));
	clickLi(".pageid_75");
});
$("#li8").on("touchstart",function(){
	console.log("next");
	clickButton($("#page_10"),$("#page_id"));
	clickLi(".pageid_90");
});
//点击选项Li的函数
function clickLi(className){
	if(pageIdClick == 0){
		$("#page_id>"+className).css({display:"block"});
		oldPageId = "#page_id>"+className;
	}else{
		$(oldPageId).css({display:"none"});
		$("#page_id>"+className).css({display:"block"});
		oldPageId = "#page_id>"+className;
	}
	pageIdClick++;
	$("#page10_text12").css({display:"none"});
	console.log(oldPageId);
}
//切页函数
function clickButton(page,next_page){	
	next_page.css({display:"block"});
	next_page.children("div,img").css({animationPlayState:"running"});
	page.css({animation: "cut .5s forwards"});
	page.children("div,img").css({animationPlayState:"paused"});
	setTimeout(function(){
		page.css({top:$("body").height(),opacity:0});
	},500);
	setTimeout(function(){
		page.css({display:"none",top:0,opacity:1,animation:"none"});
	},1000);
}


//预加载
var imgs = ['img/text1.png','img/text2.png','img/text3.png','img/text4.png','img/text5.png','img/text6.png','img/text7.png','img/text8.png','img/text9.png'];
var loadNum = 0;
for(var i = 0; i<imgs.length; i++){
	var loadObj = new Image();
	loadObj.src = imgs[i];
	loadObj.onload = function(){
		loadNum++;
		if(loadNum >= imgs.length){
			setTimeout(function(){
				$("#loading").css({display:"none"});
				$("#page_1").css({display:"block"});
				audioAutoPlay(bgm);
				bgm.play();
			},500);
//			console.log(bgm);
		}
	}
}
