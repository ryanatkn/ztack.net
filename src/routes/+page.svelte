<script lang="ts">
	// import Svg from '@ryanatkn/fuz/Svg.svelte';
	// import {fuz_logo} from '@ryanatkn/fuz/logos.js';
	import Card from '@ryanatkn/fuz/Card.svelte';
	import {base} from '$app/paths';
</script>

<main>
	<section class="box">
		<header class="box pt_xl">
			<!-- <Svg data={fuz_logo} size="var(--icon_size_xl)" /> -->
			<span class="icon_size_xl2">🌩</span>
			<h1 class="mt_xl2">ztack</h1>
		</header>
		<blockquote>coming soon</blockquote>
		<Card href="{base}/about" icon={''}>about</Card>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
