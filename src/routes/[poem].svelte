<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`${params.poem}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { poem: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let poem;
</script>

<h2>
	{poem.meta.title}
</h2>

<div>
	{@html poem.html}
</div>
