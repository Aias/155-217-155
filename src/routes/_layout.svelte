<script>
  let title = "thirty(one) days of haiku";
  let description = "poems from the heart";
  let keywords = "haiku, poetry, Nick Trombley, syllables, love, Japan";
  let author = "Nick Trombley";
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content="{title}" />
  <meta name="author" content="{author}" />
  <meta name="Description" content="{description}" />
  <meta property="og:description" content="{description}" />
  <meta name="keywords" content="{keywords}" />
  <meta name="theme-color" content="#1b052b" />
</svelte:head>

<main>
  <slot></slot>
</main>

<footer>
  <slot name="footer">
    <small
      >Site made and poems written by
      <a href="https://nicktrombley.design/">Nick Trombley</a>.</small
    >
  </slot>
</footer>
