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
		let month = ('0' + (d.getMonth() + 1)).slice(-2);
		let day = ('0' + d.getDate()).slice(-2);

		return `${year}.${month}.${day}`;
	};
</script>

<div>
	<header>
		<h2>
			<span>one&nbsp;hundred&nbsp;fifty-five</span> /
			<span>two&nbsp;hundred&nbsp;seventeen</span> /
			<span>one&nbsp;hundred&nbsp;fifty-five</span>
		</h2>
		<h3>stupid poems for an annoying girl</h3>
	</header>
	{#each poems as {slug, meta, html}}
	<article>
		<h4 href="{`/${slug}`}">{formatDate(meta.date)} . {meta.title}</h4>
		<section>
			{@html html}
		</section>
		<small>{31 - Number(slug)}</small>
	</article>
	{/each}
</div>

<style>
	h2 {
		margin-bottom: 0.5rem;
	}

	h2 > span {
		white-space: nowrap;
	}

	h3 {
		font-weight: 200;
		margin: 0;
	}

	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 1rem;
	}

	header {
		order: -2;
	}

	article:first-of-type {
		order: -1;
	}

	@media (min-width: 1060px) {
		header {
			grid-column: span 2;
			order: 0;
		}
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
