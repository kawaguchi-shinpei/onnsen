jQuery(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});

// クリックスクロール
$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

// header
$(function () {
	"use strict";
	var flag = "view";

  $(window).on("scroll", function () {
    // scrollTop()が「200」より大きい場合
   //画面トップから、ナビゲーションメニューまでの高さ（ピクセル）を指定すれば、メニュースクロールで
   //消えていくタイミングでヘッダが表示されて固定される。  
    
    if ($(this).scrollTop() > 200) {
      if (flag === "view") {
        $(".fix-header").stop().css({opacity: '1.0'}).animate({
   //”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
          top: 0
        }, 500);

        flag = "hide";
      }
    } else {
      if (flag === "hide") {
        $(".fix-header").stop().animate({top:"-66px",opacity: 0}, 500);
		//上にあがり切ったら透過度を0%にして背景が生きるように
        　　　　//”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
        flag = "view";
      }
    }
  });
});


// menu
$(function(){
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu')
  // if (btn.innerHTML === 'メニュー') {
  //   btn.innerHTML = '閉じる';
  // } else {
  //   btn.innerHTML = 'メニュー';
  // }
  // ↑ これと同じ意味の三項演算子での書き方 ↓
  btn.innerHTML = btn.innerHTML === '開'
    ? '閉'
    : '開'
});
});

// top scroll
$(function () {
  var topBtn = $('#page-top');
  topBtn.hide();
  //スクロールが500に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  //スルスルっとスクロールでトップへもどる
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});
// navmenu
$( ".btn-menu" ).click(function() {
  $( ".btn-menu").slideToggle("slow");
  });