<script>
	import jquery from 'jquery';
	import 'popper.js'
	
	import Nav from '../components/Nav.svelte';
	import SideBar from '../components/SideBar.svelte';
	import Footer from '../components/Footer.svelte';

	import { onMount } from 'svelte';

  onMount(async () => {
		await import ('../../node_modules/bootstrap/dist/js/bootstrap.min.js');
	});

	export let segment;
</script>

<style lang="scss" global>
	@import "./sass/global.scss";
</style>

<header>
	<Nav/>
</header>
<SideBar/>
<div class="main-section">
	<main class="mb-3">
		<slot></slot>
	</main>

	<Footer />

</div>