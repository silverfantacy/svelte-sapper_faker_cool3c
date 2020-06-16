<style lang="scss">
	
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="container-fluid">
    <!-- {{--		頭版區--}} -->
    <div class="row">
      <div class="col-12 promote_section">
        <!-- @foreach ($promoteList as $item)
          <div class="promote_item">
            <div class="image">
              <img src="{{ $item['banner'] }}" alt="">
            </div>
            <div class="promote_item-info">
              <span class="promote_item-info_tag">{{ $item['tag'] }}</span>
              <span class="promote_item-info_title text-white">{{ $item['title'] }}</span>
              <span class="promote_item-info_author text-sponsor">
								<i class="far fa-user-circle fa-fw"></i> {{ $item['author'] }}
							</span>
            </div>
          </div>
        @endforeach -->
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
          <!-- @foreach($newsList as $item)
            <li class="">
              <a href="" class="row">
                <div class="image col-12 col-md-4">
                  <img src="{{$item['banner']}}" alt="">
                </div>
                <div class="block-info col-12 col-md-8 d-flex flex-wrap">
                  <div class="block-info_tags">
                    @foreach($item['tag'] as $tag)
                      <span> {{ $tag }} </span>
                    @endforeach
                  </div>
                  <h3 class="block-info_title d-block w-100"> {{$item['title']}} </h3>
                  <p class="block-info_content">{{$item['teaser']}}</p>
                  <div class="d-flex mt-auto w-100">
                    <span class="block-info_author">
                      <i class="far fa-user-circle fa-fw"></i> {{$item['author']}}
                    </span> <span class="block-info_last ml-auto">
                      <i class="far fa-clock fa-fw"></i> {{$item['last']}}
                    </span>
                  </div>
                </div>
              </a>
            </li>
          @endforeach -->
        </ul>
        <div class="more">
          <a href="">下十篇文章</a>
        </div>
      </div>
      <!-- {{--			右側列表--}} -->
      <div class="col-12 col-md-4 ">
        <div class="side-container">
          <div class="search_tags">
            <h2 class="section-title">
              <a href="">站內熱搜</a>
            </h2>
            <ul>
              <!-- @foreach($searchList as $item)
                <li>{{ $item['title'] }}</li>
              @endforeach -->
            </ul>
          </div>
          <div class="hot-list">
            <h2 class="section-title">
              <a href="">熱門文章</a>
            </h2>
            <ul>
              <!-- @foreach($hotList as $item)
                <li>
                  <a href="" class="d-flex">
                    <div>{{ $item['index'] }}</div>
                    <span class="block-info d-flex flex-column justify-content-between">
										<span class="block-info_column">
											<span>{{ $item['column'] }}</span></span>
										<span class="block-info_title">{{ $item['title'] }}</span>
									</span> </a>
                </li>
              @endforeach -->
            </ul>
            <div class="more">
              <a href="">下十篇文章</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>