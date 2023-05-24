<script>
  import "../app.css";
  import Navbar from '$lib/components/Navbar.svelte';
  import MouseCursor from '$lib/components/MouseCursor.svelte';
</script>
  <Navbar />
  <MouseCursor />
<slot />
<style>
  @font-face {
    font-family: "Space Grotesk";
    src: url("$lib/fonts/SpaceGrotesk.ttf") format('truetype');
  }

  :global(body) {
    font-family: "Space Grotesk";
    overflow-x: hidden;
    margin: 0px;
    cursor: none !important;
    padding: 0px;
  }

  :global(a):hover {
    color: #726eff;
    cursor: none !important;
  }
</style>