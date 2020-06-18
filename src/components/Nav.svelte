<script>
  import { createEventDispatcher } from "svelte";
  import UserInfo from '../components/UserInfo.svelte'
  // export let segment;
  export let name;
  export let userinfoActive;

  const dispatch = createEventDispatcher();  // 呼叫父層function用
</script>

<style>

</style>

<nav class="navbar navbar-expand-lg navbar-light bg-white nav w-100">
  <form class="form-inline my-2 my-md-0 nav-search_bar d-none d-md-flex">
    <i class="fas fa-search fa-sm fa-fw" />
    <input
      class="form-control mr-sm-2"
      type="search"
      placeholder="搜尋"
      aria-label="Search" />
    <button class="btn btn-outline-success my-2 my-sm-0 d-none" type="submit">
      Search
    </button>
  </form>
  <a class="navbar-brand nav-logo" href="http://cool3c_fake.local/">FAKER</a>
  <button
    class="navbar-toggler navbar-toggler-siderbar d-md-none js-show-navbar"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
    on:click={()=> dispatch('toggleNavbar')}
    >
    <i class="fas fa-bars fa-fw" />
  </button>

  <div class="nav-user d-block d-md-none">
    <button
      class="navbar-toggler navbar-toggler-userinfo js-show-userinfo"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      on:click={()=> dispatch('toggleUserinfo')}
      >
      <i class="fas fa-ellipsis-h fa-fw" />
    </button>
    <UserInfo {name} {userinfoActive}/>
  </div>
  <div class="nav-user d-none d-md-block">
    <a class="nav-user_info js-show-userinfo" href="" on:click={()=> dispatch('toggleUserinfo')}>
      <span>{name}</span>
      <img
        src="https://driver.cool3c.com/modify/45b39b65-6bb4-4cea-a86d-a3cc97faebb1-w200.png"
        alt="" />
    </a>
    <UserInfo {name} {userinfoActive}/>
  </div>
</nav>
