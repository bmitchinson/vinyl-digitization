<script lang="ts">
	import { blueLink } from '../../lib/commonTailwind.js';

	export let data;
</script>

<h1 class="mb-4 text-2xl">{data.collectionName}</h1>
<div class="mx-auto flex w-full flex-wrap justify-center gap-16">
	{#each data.collectionItems as collectionItem}
		<a
			href="/{data.collectionRoute}/{collectionItem.itemRoute}"
			class={blueLink + ' flex flex-col items-center'}
		>
			<p>"{collectionItem.title}"</p>
			<p>{collectionItem.artist}</p>
			<img class="w-60" src={collectionItem.records[0].photos[0]} />
		</a>
	{/each}
</div>
