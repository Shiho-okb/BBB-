$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/

  $('.hamburger').on('click', function () {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });

  $('#navi a').on('click', function () {
     // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });


  /*=================================================
  ハンバーガ―メニュー共通処理
  ===================================================*/

  function hamburger() {
    // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、存在しない場合は追加する
    $('.hamburger').toggleClass('active');

    if ($('.hamburger').hasClass('active')) {
      // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
      $('#navi').addClass('active');
    } else {
      // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
      $('#navi').removeClass('active');
    }
  }


  /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/

  // BBBが選ばれる理由（スライド左）
  $('.inview-slide-left').on('inview', function (event, isInView, visibleParrX, visibleParrY) {
    if(isInView) {
      // 要素が表示されたらslide-leftクラスを追加
      $(this).stop().addClass('slide-left');
    }
  });
  // BBBが選ばれる理由（スライド右）
  $('.inview-slide-right').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      // 要素が表示されたらslide-rightクラスを追加
      $(this).stop().addClass('slide-right');
    }
  });
  // 受講生の声（ふきだし）
  $('.inview-balloon').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      // 要素が表示されたらballoonクラスを追加
      $(this).stop().addClass('balloon');
    }
  });
});
