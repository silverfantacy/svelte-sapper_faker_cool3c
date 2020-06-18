import jquery from "jquery";

jquery(function () {
  // 啟動時先執行一次
  calcScroll();

  // 等 scroll 的時候在執行
  jquery(window).scroll(function () {
    calcScroll();
  });
});

function calcScroll() {
  let vm = this
  let htmlHeight = jquery("body").outerHeight();
  let windowHeight = jquery(window).height();
  let windowWidth = jquery(window).width();
  let headerHeight = jquery(".promote_section").outerHeight();
  let mainHeight = jquery(".main-container").outerHeight();
  let sideHeight = jquery(".side-container").outerHeight();
  let difference = mainHeight - sideHeight;

  let scrollVal = jquery(window).scrollTop();;
  //    實際需要的總 scroll 高 = 總高 - 視窗高 - header
  let main_scroll_percentage =
    (scrollVal - headerHeight) / (htmlHeight - windowHeight - headerHeight);
  let calc = difference * main_scroll_percentage;

  if (main_scroll_percentage > 0 && windowWidth >= 768) {
    jquery(".side-container").css({
      transform: "translateY(" + calc + "px)"
    });
  } else {
    jquery(".side-container").css({ transform: "" });
  }
}