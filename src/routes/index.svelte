<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`index.json`)
			.then(r => r.json())
			.then(poems => {
				return { poems };
			});
	}
</script>

<script>
	export let poems;

	const formatDate = dateString => {
		let d = new Date(dateString);
		let year = d.getFullYear();
		let month = d.getMonth() + 1;
		let day = d.getDate();

		return `${year}.${month}.${day}`;
	};
</script>

<div>
	{#each poems as {slug, meta, html}}
	<article>
		<h4 href="{`/${slug}`}">{formatDate(meta.date)} . {meta.title}</h4>
		<section>
			{@html html}
		</section>
		<small>{31 - meta.order}</small>
	</article>
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 1rem;
	}

	article {
		padding: 2rem 2rem;
		border: 1px solid black;
		position: relative;
	}

	small {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
	}

	section > :global(*:last-child) {
		margin-bottom: 0;
	}
</style>
