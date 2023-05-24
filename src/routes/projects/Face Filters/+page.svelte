<script lang="ts">
	import { browser } from "$app/environment";
	import { append } from "svelte/internal";
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
</script>

{#if browser}
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></script>
<script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>
<script>
</script>
{/if}

<div id="div-main" class="h-screen bg-color3 flex flex-col items-center pt-[8.2vh] text-white">
	<div class="text-5xl flex items-center m-10">
		Filters
		<img src="/images/emojis/hand-point-up.png" class="h-[15vh] rotate-180" alt="">
	</div>
	<div class="border rounded-[50vw] grid grid-flow-col">
		<img src="/images/clown-nose.png" class="h-14 cursor-pointer rounded-full border-dashed border p-[1rem]" alt="">
	</div>
    <div class="flex flex-row gap-8">
      <button class="p-[1rem] text-color3 bg-white mt-8 rounded-3xl">
        Save your beautified face.
      </button>
      <button class="p-[1rem] text-color3 bg-white mt-8 rounded-3xl" on:click={obtenerVideoCamara}>
        CLICK
      </button>
    </div>
    {#if loading}
    <h1>LOADING</h1>
    {/if}
  <!-- svelte-ignore a11y-media-has-caption -->
  <video class="h-[20vh] mt-6 rounded-3xl" bind:this={videoSource} />
  
</div>