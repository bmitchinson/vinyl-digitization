<script lang="ts">
	import { blueLink } from '../../../lib/commonTailwind';
	import ImageGallery from '../../../lib/components/ImageGallery.svelte';

	export let data;
	const item = data.item;
</script>

<div class="flex flex-col justify-center gap-4">
	<div>
		<h2>Title: {item.title}</h2>
		<h2>Artist: {item.artist}</h2>
	</div>
	{#each item.records as record}
		<ImageGallery images={record.photos} />
	{/each}

	<p>{item.description}</p>

	<a href=".." class={blueLink}> ← Back to collection </a>
</div>
