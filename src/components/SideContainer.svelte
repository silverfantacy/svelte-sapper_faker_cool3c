<script>
  export let searchList;
  export let hotList;
  export let y;

  import jquery from "jquery";

  jquery(function() {
    // 啟動時先執行一次
    calcScroll();

    // 等 scroll 的時候在執行
    jquery(window).scroll(function() {
      calcScroll();
    });
  });

  function calcScroll() {
    let htmlHeight = jquery("body").outerHeight();
    let windowHeight = jquery(window).height();
    let windowWidth = jquery(window).width();
    let headerHeight = jquery(".promote_section").outerHeight();
    let mainHeight = jquery(".main-container").outerHeight();
    let sideHeight = jquery(".side-container").outerHeight();
    let difference = mainHeight - sideHeight;

    let scrollVal = y;
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
</script>

<div class="side-container">
  <div class="search_tags">
    <h2 class="section-title">
      <a href="">站內熱搜</a>
    </h2>
    <ul>
      {#each searchList as item}
        <li>{item.title}</li>
      {/each}
    </ul>
  </div>
  <div class="hot-list">
    <h2 class="section-title">
      <a href="">熱門文章</a>
    </h2>
    <ul>
      {#each hotList as item}
        <li>
          <a href="" class="d-flex">
            <div>{item.index}</div>
            <span class="block-info d-flex flex-column justify-content-between">
              <span class="block-info_column">
                <span>{item.column}</span>
              </span>
              <span class="block-info_title">{item.title}</span>
            </span>
          </a>
        </li>
      {/each}
    </ul>
    <div class="more">
      <a href="">下十篇文章</a>
    </div>
  </div>
</div>
