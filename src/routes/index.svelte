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
</script>

<svelte:head>
	<title>thirty(one) days of haiku</title>
</svelte:head>

<header>
	<h2>
		<span>one&nbsp;hundred&nbsp;fifty-five</span> /
		<span>two&nbsp;hundred&nbsp;seventeen</span> /
		<span>one&nbsp;hundred&nbsp;fifty-five</span>
	</h2>
	<h3>stupid poems for an annoying girl</h3>
</header>

<main>
	{#each poems as {slug, meta, html}}
	<article>
		<h4 href="{`/${slug}`}">{meta.title}</h4>
		<section>
			{@html html}
		</section>
		<small>{31 - meta.order}</small>
	</article>
	{/each}
</main>

<style>
	header {
		text-align: center;
		margin-bottom: 2rem;
	}

	h2 > span {
		white-space: nowrap;
	}

	h3 {
		font-weight: 200;
	}

	main {
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
