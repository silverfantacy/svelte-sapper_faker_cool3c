<script>
  let promoteList = [];
  for (let $i = 1; $i <= 5; $i++) {
    let temp = {
      id: $i,
      title: "promote項目" + $i,
      banner:
        "https://sw.cool3c.com/user/101448/2019/637626de-7ad4-4178-8720-c93bde969d3e.jpg",
      tag: "開箱評測",
      author: "王金發"
    };
    promoteList.push(temp);
  }

  let newsList = [];
  for (let $i = 1; $i <= 10; $i++) {
    newsList.push({
      id: $i,
      title: "最新消息第" + $i + "篇",
      banner:
        "https://sw.cool3c.com/r/card/article/2019/7d7ac98c-26e1-4059-afc3-6c6b03e92f24.jpg",
      tag: ["科技應用", "微軟", "Word", "PS5"],
      author: "王金發",
      teaser:
        "令人困擾的空氣污染問題、一換季鼻子就開始發癢打噴嚏的過敏體質、惱人的灰塵或寵物臭味、甚至甲醛等有毒氣體，唯一能和你並肩對抗污濁空氣的夥伴，就是一台好用的空氣清淨機。 空氣清淨機的挑選策略，其實和擺放的空間狀態、坪數息息相關。如果你是生活在寸土寸金的城市居民，就應該認識該如何挑選一台適合小坪數空間使用的空氣清淨機。 目錄 選購重點一：先考慮 CADR 值和噪音值 選購重點二：再講究清淨方式和濾網更換費用 五款市面上小坪數空氣清淨機品牌推薦 新加坡品牌 POIEMA FIT 英國品牌 Dyson Pure Cool 瑞典品牌 Blueair JOYS 美國品牌 Honeywell HPA-162W",
      last: "1小時前"
    });
  }

  let searchList = [];
  for (let $i = 1; $i <= 10; $i++) {
    searchList.push({
      id: $i,
      title: "Tag" + $i
    });
  }

  let hotList = [];
  for (let $i = 1; $i <= 10; $i++) {
    hotList.push({
      id: $i,
      index: $i,
      title:
        "一圖看懂 QNAP QGD-1600P、Seagate IronWolf 110 SSD ：搞定中小企業數位轉型的網路交換器+硬碟組合",
      column: "科技應用"
    });
  }

  let y;
  let h;
  let height;
  $: move = scrollHotList(y,h,height)

  function scrollHotList(y,h,height) {
    console.log('y',y,'h',h,height)
    console.log('610,2214')
    if(y > 600) {
      return (y-600)* (2362 - 1184) / (2214 - 600)
    }
  }

</script>

<style lang="scss">

</style>

<svelte:window bind:scrollY={y} bind:outerHeight={h}/>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="container-fluid">
  <!-- {{--		頭版區--}} -->
  <div class="row">
    <div class="col-12 promote_section">
      {#each promoteList as item}
        <div class="promote_item">
          <div class="image">
            <img src={item.banner} alt="" />
          </div>
          <div class="promote_item-info">
            <span class="promote_item-info_tag">{item.tag}</span>
            <span class="promote_item-info_title text-white">{item.title}</span>
            <span class="promote_item-info_author text-sponsor">
              <i class="far fa-user-circle fa-fw" />
              {item.author}
            </span>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <!-- {{--		訊息列表區域--}} -->
  <div class="row">
    <!-- {{--			最新消息--}} -->
    <div class="col-12 col-md-8 main-container">
      <h2 class="section-title">
        <a href="">最新消息</a>
      </h2>
      <ul class="post-list">
        {#each newsList as item}
          <li class="">
            <a href="" class="row">
              <div class="image col-12 col-md-4">
                <img src={item.banner} alt="" />
              </div>
              <div class="block-info col-12 col-md-8 d-flex flex-wrap">
                <div class="block-info_tags">
                  {#each item.tag as tag}
                    <span class="mr-1">{tag}</span>
                  {/each}
                </div>
                <h3 class="block-info_title d-block w-100">{item.title}</h3>
                <p class="block-info_content">{item.teaser}</p>
                <div class="d-flex mt-auto w-100">
                  <span class="block-info_author">
                    <i class="far fa-user-circle fa-fw" />
                    {item.author}
                  </span>
                  <span class="block-info_last ml-auto">
                    <i class="far fa-clock fa-fw" />
                    {item.last}
                  </span>
                </div>
              </div>
            </a>
          </li>
        {/each}
      </ul>
      <div class="more">
        <a href="">下十篇文章</a>
      </div>
    </div>
    <!-- {{--			右側列表--}} -->
    <div class="col-12 col-md-4 ">
      <div class="side-container" style="transform: translateY({move}px)">
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
                  <span
                    class="block-info d-flex flex-column justify-content-between">
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
    </div>
  </div>
</div>
