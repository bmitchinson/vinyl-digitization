<script lang="ts">
	export let images: string[] = [];

	// Track the currently selected image
	let selectedIndex = 0;

	// Select image when thumbnail is clicked
	function selectImage(index: number) {
		selectedIndex = index;
	}
</script>

{#if images.length > 0}
	<!-- Main image preview -->
	<img class="mb-4 w-80" src={images[selectedIndex]} alt="Selected" />

	<!-- Image thumbnails -->
	<div class="flex flex-wrap gap-2">
		{#each images as image, index}
			<button
				type="button"
				class="h-16 w-16 flex-shrink-0 overflow-hidden rounded focus:outline-none {selectedIndex ===
				index
					? 'ring-2 ring-blue-500'
					: 'border border-gray-200'}"
				on:click={() => selectImage(index)}
				aria-pressed={selectedIndex === index}
			>
				<img src={image} alt="" class="h-16 w-full object-cover" />
			</button>
		{/each}
	</div>
{/if}
