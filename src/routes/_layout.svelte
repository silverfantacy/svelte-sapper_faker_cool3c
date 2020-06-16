<script>
	import jquery from 'jquery';
	import 'popper.js'

	import Nav from '../components/Nav.svelte';

	import { onMount } from 'svelte';

  onMount(async () => {
		await import ('../../node_modules/bootstrap/dist/js/bootstrap.min.js');
	});

	export let segment;
</script>

<style lang="scss" global>
	@import "./sass/global.scss";
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>