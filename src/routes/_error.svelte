<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h2>{status} . {error.message}</h2>

<p>
	Something has happened. <br />
	An error, a problem. <br />
	Something dark and strange.
</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
