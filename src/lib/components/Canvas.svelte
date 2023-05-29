<script>
    import { onMount } from 'svelte';
  
    let isDrawing = false;
    let previousX = 0;
    let previousY = 0;
    let strokeColor = '#000';
    let strokeWidth = 1;
  
    let canvas;
    let context;
  
    function handleMouseDown(event) {
      isDrawing = true;
      const rect = event.target.getBoundingClientRect();
      previousX = event.clientX - rect.left;
      previousY = event.clientY - rect.top;
    }
  
    function handleMouseMove(event) {
      if (!isDrawing) return;
  
      const rect = event.target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      context.beginPath();
      context.moveTo(previousX, previousY);
      context.lineTo(x, y);
      context.strokeStyle = strokeColor;
      context.lineWidth = strokeWidth;
      context.stroke();
  
      previousX = x;
      previousY = y;
    }
  
    function handleMouseUp() {
      isDrawing = false;
    }
  
    function changeStrokeColor(event) {
      strokeColor = event.target.value;
    }
  
    function changeStrokeWidth(event) {
      strokeWidth = event.target.value;
    }
  
    onMount(() => {
      context = canvas.getContext('2d');
    });
  </script>
  
  <style>
    .canvas-container {
      position: relative;
      height: 91.8vh;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  
    .canvas {
      width: 100vw;
      height: 100%;
      border: 1px solid #000;
    }
  
    .menu {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      padding: 1rem;
      z-index: 1;
    }
  </style>
  
  <div class="canvas-container">
    <canvas
      class="canvas"
      bind:this={canvas}
      on:mousedown={handleMouseDown}
      on:mousemove={handleMouseMove}
      on:mouseup={handleMouseUp}
      width="100vw"
      height="100%"
    ></canvas>
  
    <div class="menu">
      <label for="colorPicker">Stroke Color:</label>
      <input type="color" id="colorPicker" bind:value={strokeColor} on:input={changeStrokeColor} />
  
      <label for="strokeWidth">Stroke Width:</label>
      <input type="range" id="strokeWidth" min="1" max="10" step="1" bind:value={strokeWidth} on:input={changeStrokeWidth} />
  
      <!-- Add additional menu items here -->
  
      <label for="eraser">Eraser:</label>
      <input type="checkbox" id="eraser" on:change={() => strokeColor = '#fff'} />
    </div>
  </div>
  