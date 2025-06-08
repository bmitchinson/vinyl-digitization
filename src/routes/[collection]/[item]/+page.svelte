<script lang="ts">
	import { blueLink } from '../../../lib/commonTailwind';
	import ImageGallery from '../../../lib/components/ImageGallery.svelte';

	export let data;
	const item = data.item;
</script>

<h2>Title: {item.title}</h2>
<p>{item.description}</p>

{#each item.records as record}
	<ImageGallery images={record.photos} />
{/each}

<a href=".." class={blueLink}> ← Back to collection </a>
