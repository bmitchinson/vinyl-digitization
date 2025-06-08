<script>
	import { blueLink } from '$lib/commonTailwind';
	import '../app.css';
	import { page } from '$app/stores';

	$: segments = $page.url.pathname.split('/').filter(Boolean);
	$: showBack = segments.length > 1;
</script>

<header class="mx-8 my-4 flex flex-row justify-between space-x-4 text-2xl">
	<a href="/">vinyl</a>
	{#if showBack}
		<a href=".." class={blueLink}>← go back to collection</a>
	{/if}
</header>

<hr class="mt-4 mb-4 w-full border-t border-gray-300" />

<div class="m-8 flex flex-col items-center justify-between">
	<slot />
</div>
