<script>
  export let categoryList;
  export let navbarActive;
</script>

<div class="siderbar bg-white" class:active={navbarActive}>
  <ul>
    <li>
      <a href="#sidebarCategory" class="text-dark collapsed" data-toggle="collapse" aria-expanded="true" aria-controls="sidebarCategory">
        <i class="fa fa-th-large fa-sm fa-fw"></i>category
        <i id="categoryCollapse" class="fas fa-angle-up fa-lg fa-fw ml-auto mr-0"></i> </a>
      <ul id="sidebarCategory" class="collapse">
        {#each categoryList as item}
          <li>
            <a href="">
              {item.title}
            </a>
          </li>
        {/each}
      </ul>
    </li>
    <li>
      <a href="" class="text-dark"> <i class="fa fa-desktop fa-sm fa-fw"></i>column</a>
    </li>
    <li>
      <a href="" class="text-dark"> <i class="far fa-grin-squint fa-sm fa-fw"></i>active</a>
    </li>
    <li>
      <a href="" class="text-dark"> <i class="fa fa-search-plus fa-sm fa-fw"></i>search</a>
    </li>
    <li>
      <a href="" class="text-sponsor"> <i class="fa fa-shopping-cart fa-sm fa-fw"></i>shop</a>
    </li>
    <li class="siderbar_ad">
      <div class="bg-primary"></div>
      <div class="bg-primary"></div>
    </li>
  </ul>
</div>