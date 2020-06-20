<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    // 要記得改 fetch 啊
    const res = await this.fetch(`article/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  export let post;

  onMount(async () => {
    console.log("啟動");
    import("../../js/rightScroll");
  });

  let newList = [];
  for (let $i = 1; $i <= 10; $i++) {
    newList.push({
      id: $i,
      index: $i,
      title:
        "一圖看懂 QNAP QGD-1600P、Seagate IronWolf 110 SSD ：搞定中小企業數位轉型的網路交換器+硬碟組合",
      column: "最新消息"
    });
  }
</script>

<style lang="scss">
  // @import "../../sass/page/articleRow";
  h1 {
    border-left: 3px solid #f55753;
    font-weight: 700;
  }

  .head-info > * {
    display: inline-block;
  }

  .author-list {
    li {
      position: relative;
      background: white;
      padding: 30px 15px 10px;
      margin-top: 50px;
      box-shadow: rgba(0, 0, 0, 0.1) 0 0 3px;
      text-align: center;
    }
    .logo {
      position: absolute;
      top: -45px;
      left: 0;
      width: 100%;
      img {
        height: 70px;
      }
    }
    .name {
      font-weight: bold;
      font-size: 1.2em;
    }
    .information {
      margin-top: 15px;
      border-top: 1px solid;
      padding-top: 10px;
      font-size: 0.8em;
      div {
        display: inline-block;
      }
      .social {
        padding-left: 20px;
        a {
          &:after {
            content: " | ";
            padding: 0 3px;
          }
          &:last-child:after {
            content: "";
          }
        }
      }
    }
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<nav class="breadcrumb-scroll">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a
        href="https://www.cool3c.com"
        class="gtm-track"
        data-gtm-category="Breadcrumb-Item"
        data-gtm-vis-first-on-screen-2745626_257="5783"
        data-gtm-vis-total-visible-time-2745626_257="100"
        data-gtm-vis-has-fired-2745626_257="1">
        首頁
      </a>
    </li>
    <li class="breadcrumb-item">
      <a
        href="https://www.cool3c.com/category/game"
        class="gtm-track"
        data-gtm-category="Breadcrumb-Item"
        data-gtm-vis-first-on-screen-2745626_257="5785"
        data-gtm-vis-total-visible-time-2745626_257="100"
        data-gtm-vis-has-fired-2745626_257="1">
        遊戲天堂
      </a>
    </li>
    <li class="breadcrumb-item active">
      <span>
        Pokemon Go將推新型態Fest 2020、加入超級進化模式、免費送鎧之孤島修行服
      </span>
    </li>
  </ol>
</nav>

<header class="col-12">

  <div class="row">
    <h1 class="col-12">{post.title}</h1>
  </div>

  <div class="row">
    <div class="col-12 head-info">
      <div class="author ">
        <span class="prefix">by</span>
        <a
          href="https://www.cool3c.com/author/cool3c-agent"
          class="text-sponsor gtm-track"
          data-gtm-category="HeadInfo-Link"
          data-gtm-vis-first-on-screen-2745626_257="3743"
          data-gtm-vis-total-visible-time-2745626_257="100"
          data-gtm-vis-has-fired-2745626_257="1">
          {post.author[0].name}
        </a>
      </div>
      <div class="created slacken">
        <span class="icon">
          <i class="far fa-clock" />
        </span>
        <span class="">2020.05.12 04:00PM</span>
      </div>
      <div class="views ">
        <span class="icon">
          <i class="fas fa-eye" />
        </span>
        <span class="">14181</span>
      </div>
    </div>
  </div>
</header>

<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-lg-7 col-xl-8 main-container">
      <div class="article">
        <div class="row deputation">
          <picture>
            <img src={post.cover.url} alt="" />
          </picture>
        </div>
        {@html post.body}
      </div>
    </div>

    <div class="d-none d-lg-block col-lg-5 col-xl-4">
      <div class="side-container d-flex flex-column">
        <section class="author-list">
          <ul class="list-unstyled">
            {#each post.author as item}
              <li class="author-cool3c-agent clearfix">
                <div class="logo">
                  <a
                    href="https://www.cool3c.com/author/cool3c-agent"
                    class="gtm-track">
                    <img class="rounded-circle" src={item.logo} alt="" />
                  </a>
                </div>
                <h2 class="name">
                  <a
                    href="https://www.cool3c.com/author/cool3c-agent"
                    class="gtm-track">
                    {item.name}
                  </a>
                </h2>
                <div class="description">
                  <a
                    href="https://www.cool3c.com/author/cool3c-agent"
                    class="gtm-track">
                    特務範圍涵蓋評測、議題、採訪、圖解、影音與動畫，由 TNL Brand
                    Studio 製作，各品牌單位贊助。業務與行銷相關合作，歡迎與
                    ad.service@cool3c.com 聯繫。
                  </a>
                </div>
                <div class="information">
                  <div class="post">
                    <a
                      href="https://www.cool3c.com/author/cool3c-agent"
                      class="gtm-track">
                      文章共495篇
                    </a>
                  </div>
                  <div class="social">
                    <a
                      href="https://www.facebook.com/tnlbrandstudio/"
                      target="_blank"
                      class="gtm-track">
                      <i class="fab fa-facebook-f" />
                    </a>
                  </div>
                </div>
              </li>
            {/each}
          </ul>
        </section>

        <div class="hot-list">
          <h2 class="section-title">
            <a href="">最新文章</a>
          </h2>
          <ul>
            {#each newList as item}
              <li>
                <div class="sponsor">
                  <a href="">
                    <span class="">{item.index}</span>
                  </a>
                </div>
                <div class="block-info">
                  <div class="block-info_column">
                    <div>
                      <a href="">{item.column}</a>
                    </div>
                  </div>
                  <div class="block-info_title">
                    <a href="">{item.title}</a>
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

    </div>
  </div>
</div>
