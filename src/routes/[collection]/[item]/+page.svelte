<script lang="ts">
	import { blueLink } from '../../../lib/commonTailwind';
	import ImageGallery from '../../../lib/components/ImageGallery.svelte';

	export let data;
	const item = data.item;

	let currentlyPlaying: HTMLAudioElement | null = null;
	function handlePlay(audioElement: HTMLAudioElement) {
		if (currentlyPlaying && currentlyPlaying !== audioElement) {
			currentlyPlaying.pause();
		}
		currentlyPlaying = audioElement;
	}
</script>

<svelte:head>
	<title>Vinyl - {item.title}</title>
</svelte:head>

<div class="flex flex-col justify-center gap-4">
	<div>
		<h2>Title: {item.title}</h2>
		<h2>Artist: {item.artist}</h2>
	</div>
	{#each item.records as record}
		<ImageGallery images={record.photos} />
		{#each record.songs as song}
			<div>
				<h3>Song Title: {song.title}</h3>
				<audio
					controls
					src={song.mp3Src}
					class="my-2 w-full"
					on:play={(e) => handlePlay(e.currentTarget)}
				>
					Your browser does not support the audio element.
				</audio>
			</div>
		{/each}
	{/each}

	<a href=".." class={blueLink}> ← Back to collection </a>
</div>
