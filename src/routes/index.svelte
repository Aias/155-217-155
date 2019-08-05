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
	<title>thirty(one) days of poetry</title>
</svelte:head>

{#each poems as {id, title}}
<div>
	<a href="{`/${id}`}">{title}</a>
</div>
{/each}
