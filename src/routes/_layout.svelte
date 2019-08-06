<svelte:head>
	<title>thirty(one) days of haiku</title>
</svelte:head>

<header>
	<slot name="header">
		<h2>
			<span>one&nbsp;hundred&nbsp;fifty-five</span> /
			<span>two&nbsp;hundred&nbsp;seventeen</span> /
			<span>one&nbsp;hundred&nbsp;fifty-five</span>
		</h2>
		<h3>stupid poems for an annoying girl</h3>
	</slot>
</header>

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

<style>
	header,
	footer {
		text-align: center;
	}

	header,
	main {
		margin-bottom: 2rem;
	}

	h2 > span {
		white-space: nowrap;
	}

	h3 {
		font-weight: 200;
	}
</style>
