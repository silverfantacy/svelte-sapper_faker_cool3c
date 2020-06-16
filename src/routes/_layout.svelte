<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style lang="scss" global>
	@import "./sass/global.scss";
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>