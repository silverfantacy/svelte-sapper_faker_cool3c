import jquery from "jquery";

jquery(function () {
  // 啟動時先執行一次
  calcScroll();

  // 等 scroll 的時候在執行
  jquery(window).scroll(function () {
    // console.log('滾到')
    calcScroll();
  });
});

function calcScroll() {

  // Init
  let view_top = jquery(window).scrollTop()
  let view_height = jquery(window).outerHeight()
  // let view_bottom = view_top + view_height


  let content_height = jquery('.container-fluid').outerHeight();

  let mainStartY = jquery(".main-container").offset().top;
  let mainHeight = jquery(".main-container").outerHeight() + 16; // m-b: 16px
  let sideHeight = jquery(".side-container").outerHeight() + 16;

  let nowDistance = (view_top - mainStartY)
  let totalDistance = (mainHeight - view_height)
  let movePercent = (nowDistance / totalDistance)
  let sideTotalMoveDistance = (mainHeight - sideHeight)

  // 如果內容高度小於視窗高度 或 內容高度小於側邊高度，則不需滾動
  if (content_height <= view_height || content_height <= sideHeight) {
    return
  }

  // 計算目前需位移的距離
  let calc = (movePercent * sideTotalMoveDistance)
  // console.log('目前移動距離=>', nowDistance)
  // console.log('總移動距離=>', totalDistance)
  // console.log('移動百分比=>', movePercent)
  // console.log('側邊移動的總距離=>', sideTotalMoveDistance)
  // console.log('計算側邊移動距離=>', calc)


  if (movePercent >= 1) {
    // console.log('超出100%')
    jquery(".side-container").css({
      transform: "translateY(" + sideTotalMoveDistance + "px)"
    });
  } else if (movePercent <= 0) {
    // console.log('低於0%')
    jquery(".side-container").css({
      transform: "translateY(" + 0 + "px)"
    });
  } else {
    // console.log('運作中')
    jquery(".side-container").css({
      transform: "translateY(" + calc + "px)"
    });
  }
}