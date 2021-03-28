// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){
	$('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
		}else{
		$(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
		}
		});

    $('.flipLeftTrigger').each(function(){ //flipLeftTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('flipLeft');// 画面内に入ったらflipLeftというクラス名を追記
		}else{
		$(this).removeClass('flipLeft');// 画面外に出たらflipLeftというクラス名を外す
		}
		});
    }

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

function toggleNav() {
    const body = document.body;
    const hamburger = document.getElementById("js-hamburger");
    const overlay = document.getElementById("js-overlay");
    const sideMenu_li = document.getElementById("js-sideMenu_li");
    hamburger.addEventListener("click", function () {
      body.classList.toggle("nav-open");
    });
    overlay.addEventListener("click", function () {
      body.classList.remove("nav-open");
    });
    sideMenu_li.addEventListener("click", function () {
        body.classList.remove("nav-open");
      });
    }
  toggleNav();

//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
var access = $.cookie('access')
if(!access){
    flag = true;
    $.cookie('access', false);
}else{
    flag = false	
}

//モーダル表示
$(".modal-open").modaal({
start_open:flag, // ページロード時に表示するか
overlay_close:true,//モーダル背景クリック時に閉じるか
before_open:function(){// モーダルが開く前に行う動作
    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
},
after_close:function(){// モーダルが閉じた後に行う動作
    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
}
});

tippy('.cap', {
    placememt: 'top-start',
    animation: 'shift-toward-subtitle',
    theme: 'light-border',
    duration: 200,
})

$('.title').on('click', function(){ //タイトル要素をクリックしたら
    var findEllm = $(this).next(".box"); //直後のアコーディオンを行うエリアを取得し
    $(findEllm).slideToggle(); //アコーディオンの上下動作
    if($(this).hasClass('close')){ //タイトル要素にクラス名closeがあれば
        $(this).removeClass('close'); //クラス名を除去し
    }else{ //それ以外は
        $(this).addClass('close'); //クラス名closeを付与
    }
});

//ページが読み込まれた際にopenクラスがついていたら開く動作
/* $(window).on('load', function(){
    $('.accordion-area li:first-of-type section').addClass("open");
    $(".open").each(function(index, element){
        var Title =$(element).children('.title');
        $(Title).addClass('close');
        var Box =$(element).children('box');
        $(Box).slideDown(500);
    });
}); */

$(function(){
	$('.toggle_title').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});
