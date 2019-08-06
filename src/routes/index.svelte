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

	$: {
		console.log(poems);
	}
</script>

<svelte:head>
	<title>thirty(one) days of poetry</title>
</svelte:head>

{#each poems as {slug, title}}
<div>
	<a href="{`/${slug}`}">{slug}</a>
</div>
{/each}
