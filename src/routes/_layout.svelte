<svelte:head>
	<title>thirty(one) days of haiku</title>
</svelte:head>

<main>
	<slot></slot>
</main>

<footer>
	<slot name="footer">
		<small
			>Site made and poems written by
			<a href="https://barnsworthburning.net/">Nick Trombley</a>.</small
		>
	</slot>
</footer>
