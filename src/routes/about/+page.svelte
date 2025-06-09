<script>
	import { blueLink, xCenter } from '$lib/commonTailwind';
</script>

<div class="flex flex-col gap-4">
	<p>
		Hello, this is a github pages site built with sveltekit to host audio files recorded from a
		record player.
	</p>

	<div class={xCenter}>
		<video controls class="h-auto w-60 rounded bg-black">
			<source src="/recording-demo.mp4" type="video/mp4" />
		</video>
	</div>

	<h2 class="text-lg">Recording Process</h2>
	<ul class="list-disc space-y-2 pl-5">
		<li>Clean record</li>
		<li>
			Playback into a Scarlet audio interface, into a desktop PC to avoid ground loop interference
			in the 50/60hz range
		</li>
		<li>Record in ableton, export each record side to wav</li>
		<li>Control my PC from my laptop w VNC Viewer, monitor audio on TV Output</li>
		<li>
			Run through the only free (trial) declick software I could find, but it did work like magic. <a
				class={blueLink}
				href="https://archive.clickrepair.org/software_info/clickrepair.html"
			>
				"ClickRepair"</a
			>
		</li>

		<li>Convert to mp3 with ffmpeg</li>
	</ul>

	<p>
		Images of records and links to the mp3 files hosted statically from github are then populated
		into <a
			href="https://github.com/bmitchinson/vinyl-digitization/blob/main/src/lib/pages-cms.js"
			class={blueLink}>this object</a
		>, and the site builds out pages dynamically from there.
	</p>
	<p>
		<a class={blueLink} href="https://github.com/bmitchinson/vinyl-digitization"
			>GitHub: Source Code</a
		>
	</p>
</div>
