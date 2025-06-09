<script>
	import { blueLink } from '$lib/commonTailwind';
	import '../app.css';
	import { page } from '$app/stores';

	$: segments = $page.url.pathname.split('/').filter(Boolean);
	$: showBack = segments.length > 1;
</script>

<svelte:head>
	<title>Vinyl Digitization</title>
	<meta property="og:title" content="Vinyl Digitization" />
	<meta property="og:description" content="Digitization vinyl records of family + friends." />
	<meta property="og:image" content="https://vinyl.mitchinson.com/ableton.jpg" />
	<meta property="og:url" content="https://vinyl.mitchinson.com" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<header class="mx-4 my-4 flex flex-row justify-between space-x-4 text-2xl">
		<a href="/">vinyl</a>
		{#if showBack}
			<a href=".." class={blueLink}>← go back to collection</a>
		{/if}
	</header>

	<hr class="mb-4 w-full border-t border-gray-300" />

	<div class="m-8 flex flex-grow flex-col items-center">
		<slot />
	</div>

	<hr class="mt-4 w-full border-t border-gray-300" />

	<footer class="text-md m-4 flex flex-row justify-center gap-4">
		<a href="/about" class={blueLink}>how i made this site</a> -
		<a href="/" class={blueLink}>home</a> -
		<a href="https://home.mitchinson.dev" class={blueLink}>more of my work</a>
	</footer>
</div>
