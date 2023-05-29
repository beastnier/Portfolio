<script>
  import { browser } from '$app/environment';
  import { onMount, afterUpdate, onDestroy } from 'svelte';

  let videoElement;
  let mediaStream;
  let photoDataUrl;
  let classifier;
  let label = "Click 'Classify'";
  let confidence;

  async function loadModel() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/ml5@latest/dist/ml5.min.js';
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  onMount(async () => {
    mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = mediaStream;
    await loadModel();
    classifier = ml5.imageClassifier("MobileNet", onModelReady);
  });

  afterUpdate(() => {
    if (videoElement && videoElement.srcObject !== mediaStream) {
      videoElement.srcObject = mediaStream;
    }
  });

  onDestroy(() => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
    }
  });

  async function takePhoto() {
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    photoDataUrl = canvas.toDataURL('image/jpeg'); // Save the photo as a data URL
  }

  function onModelReady() {
    console.log("Model Loaded!");
  }

  function classify() {
    // Step 2: select an image
    const img = new Image();
    img.src = photoDataUrl;

    // Step 3: Make a prediction
    classifier.predict(img, gotResults);
  }

  function gotResults(err, results) {
    if (results.length > 0) {
  let firstArray = results[0];
  label = firstArray.label;
  confidence = firstArray.confidence;
} else {
  console.log('The array is empty.');
}
  }
</script>

{#if browser}
  <div class="wrapper flex flex-col items-center gap-4">
    <div class="flex flex-row gap-4">
      <div class="flex flex-col items-center gap-4">
        <video class="h-[50vh] mt-12 rounded-3xl" bind:this={videoElement} autoplay></video>
      <div class="flex flex-row gap-4">
        <button class="btn" on:click={takePhoto}>Take Photo</button>
      <button class="btn" on:click={classify}>Classify</button>
      </div>
      </div>
      {#if photoDataUrl}
        <div class="flex flex-col items-center gap-4">
          <img class="h-[50vh] p-4 border mt-12 rounded-3xl" src={photoDataUrl} alt="Captured Photo" />
          <div class="flex border p-4 rounded-3xl text-xl flex-row gap-4">
            <h1>{label}</h1>
            <h1>{"Accuracy: "+ Math.floor(confidence * 100) + "%"}</h1>
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}
