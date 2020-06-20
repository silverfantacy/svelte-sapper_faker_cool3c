<script>
	import jquery from 'jquery';
	import 'popper.js'
	
	import Nav from '../components/Nav.svelte';
	import SideBar from '../components/SideBar.svelte';
	import Footer from '../components/Footer.svelte';

	import { onMount } from 'svelte';

  onMount(async () => {
		await import ('../../node_modules/bootstrap/dist/js/bootstrap.min.js');
		await import('@fortawesome/fontawesome-free/js/all');
	});

	// Layout 可以接收一个名为 segment 的参数
	export let segment;
	console.log('segment',segment)


	// 參數區
	let name = "Zero";

  let categoryList = [];
  for (let $i = 1; $i <= 20; $i++) {
    categoryList.push({
      id: $i,
      title: "我是項目" + $i
    });
	}
	
	let navbarActive = false; 
	let userinfoActive = false; 

	function toggleNavbar() {
		navbarActive = !navbarActive;
	};
	function toggleUserinfo() {
		userinfoActive = !userinfoActive;
	};
	

</script>

<style lang="scss" global>
	@import "./sass/global.scss";
</style>

<header>
	<Nav {name} {userinfoActive} on:toggleNavbar={toggleNavbar} on:toggleUserinfo={toggleUserinfo}/>
</header>
<SideBar {categoryList} {navbarActive}/>
<div class="main-section">
	<main class="mb-3">
		<slot></slot>
	</main>

	<Footer />

</div>