<script lang="ts">
	import logo from '$lib/images/sawback-logo.png';
</script>

<header>
	<img class="logo" src={logo} alt="logo" />
	<div class="menu-toggle">
		<span class="line" />
		<span class="line" />
		<span class="line" />
	</div>
</header>

<style>
	header {
		z-index: 999;
		position: fixed;
		/* border: solid 3px red; */
		display: flex;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
		align-content: center;
		padding: 1rem;
	}
	div .line {
		display: block;
		height: 3px;
		width: 2rem;
		border: 3px solid grey;
		background-color: whitesmoke;
	}
	img.logo {
		width: 7rem;
		height: auto;
		margin-left: 1rem;
	}
</style>
