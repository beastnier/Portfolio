<script>
	import { browser } from "$app/environment";

    let noseX=0;
    let noseY=0;
    let difference = 0;
    let rightWristX = 0;
    let leftWristX = 0;
    let load = false;

    if (load = true) {
        if (browser) {
            async function setup() {
                let video = createCapture(VIDEO);
                video.size(550, 500);
                let canvas = createCanvas(550, 550);
                poseNet = ml5.poseNet(video, modelLoaded);
                poseNet.on('pose', gotPoses);
            }
        }
    }

    async function modelLoaded() {
        console.log('PoseNet Is Initialized!');
    }

    function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

</script>
{#if browser}
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></script>
  <script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>






function draw() {
background('#969A97');

  fill('#F90093');
  stroke('#F90093');
  square(noseX, noseY, difference);
}

  </script>
{/if}