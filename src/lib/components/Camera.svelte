<script>
        let videoSource = null;
  let loading = false;
  const obtenerVideoCamara = async () => {
    try {
      loading = true;
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoSource.srcObject = stream;
      videoSource.play();
      loading = false;
    } catch (error) {
      console.log(error);
    }
  };
  obtenerVideoCamara();
</script>
  {#if loading}
    <h1 class="p-4">LOADING</h1>
    {/if}
    <!-- svelte-ignore a11y-media-has-caption -->
  <video class="m-4 rounded-3xl h-[50vh] w-[50vw]" bind:this={videoSource} />