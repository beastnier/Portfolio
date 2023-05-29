<script>
  import "../app.css";
  import Navbar from '$lib/components/Navbar.svelte';
</script>
<Navbar />
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
    padding: 0px;
    color: white;
  }

  :global(a):hover {
    color: #726eff;
  }

</style>