<script lang="ts">
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	// Supports weights 100-900
	import '@fontsource-variable/work-sans';
	import '@fontsource/michroma';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		font-family: 'Work Sans Variable', sans-serif;
	}
</style>
