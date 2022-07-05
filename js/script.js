$(function() {

    //////////////////////////////////////////
    // ヘッダー　スクロールでアクティブクラスをつける
    //////////////////////////////////////////
    $(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.header').addClass('header--active');
		} else {
			$('.header').removeClass('header--active');
		}
    });



    //////////////////////////////////////////
    // スクロールエフェクト　fadeUp
    //////////////////////////////////////////
    $(window).scroll(function() {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.fadeUp-element').each(function() {
            const elementPosition = $(this).offset().top;
            if( scroll > elementPosition - windowHeight + 100) {
                $(this).addClass('fadeUp');
            }
        });
    });



    //////////////////////////////////////////
    // トレーナー　タブ切り替え
    //////////////////////////////////////////
    $(function() {
        let tabs = $(".tab"); // tabのクラスを全て取得し、変数tabsに配列で定義
        $(".tab").on("click", function() { // tabをクリックしたらイベント発火
          $(".tab--active").removeClass("tab--active"); // activeクラスを消す
          $(this).addClass("tab--active"); // クリックした箇所にactiveクラスを追加
          const index = tabs.index(this); // クリックした箇所がタブの何番目か判定し、定数indexとして定義
          $(".tab-content").removeClass("show").eq(index).addClass("show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
        })
    })



    //////////////////////////////////////////
    //swiper スライダー
    //////////////////////////////////////////
    const swiper = new Swiper('.swiper', {

        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    //////////////////////////////////////////
    //scroll hint
    //////////////////////////////////////////
    $('.price-list').scroll(function () {
        if($(this).scrollLeft() > 20) {
            $('.price-list__scrollhint').fadeOut(200);
        }
    });

    //////////////////////////////////////////
    //acordinon
    //////////////////////////////////////////
    $(".accordion__question").on("click", function() {
        $(this).toggleClass('active');
        $(this).next('.accordion__answer').slideToggle();
    });

    //////////////////////////////////////////
    //ページトップへ戻る
    //////////////////////////////////////////
    const $pagetop = $('.page-top');

    $(window).on('scroll', function(){
    if($(this).scrollTop() < 400) {
        $pagetop.fadeOut();
    } else {
        $pagetop.fadeIn();
    }
    });
    $pagetop.on('click', function() {
    $('body, html').animate({
        scrollTop: 0
    }, 400);
        return false;
    });



    //////////////////////////////////////////
    //背景色が伸びてテキストを表示
    //////////////////////////////////////////
    function BgFadeAnime() {

        //背景色が伸びて出現
        $('.bgLRextendTrigger').each(function() {
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if(scroll >= elemPos - windowHeight) {
                $(this).addClass('bgLRextend');
            } else {
                $(this).removeClass('bgLRextend');
            }
        });

        //文字を囲う小要素
        $('.bgappearTrigger').each(function() {
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if(scroll >= elemPos - windowHeight) {
                $(this).addClass('bgappear');
            } else {
                $(this).removeClass('bgappear');
            }
        });
    }

    //画面が読み込まれたら動く
    $(window).on('load', function() {
        BgFadeAnime();
    });

});