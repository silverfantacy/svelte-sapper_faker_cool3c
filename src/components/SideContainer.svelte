<script>
  import { onMount } from "svelte";

  export let searchList;
  export let hotList;
  export let y;

  // 延遲載入 SideContainer 互動
  onMount(async () => {
    import("../js/rightScroll")
  });
  
</script>

<div class="side-container">
  <div class="search_tags">
    <h2 class="section-title">
      <a href="">站內熱搜</a>
    </h2>
    <ul>
      {#each searchList as item}
        <li>
          <a href="">
            {item.title}
          </a>
        </li>
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
          <div class="sponsor">
            <a href="">
              <span class="">{item.index}</span>
            </a>
          </div>
          <div class="block-info">
            <div class="block-info_column">
              <div>
                <a href="">
                  {item.column}
                </a>
              </div>
            </div>
            <div class="block-info_title">
              <a href="">
                  {item.title}
              </a>
            </div>
          </div>
        </li>
      {/each}
    </ul>
    <div class="more">
      <a href="">下十篇文章</a>
    </div>
  </div>
</div>
