<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>

<style>
	pre {
		margin-block-start: var(--size-11);
	}
</style>
