<script lang="ts">
    let scroll = 0;
    const lines = ["Hey", " ", "There!", "<br>", "Welcome", " ", "to", " ", "my", " ", "Portfolio."];
</script>

<svelte:window bind:scrollY={ scroll } />
    <div id="about" class="w-full h-screen bg-coffee-background bg-cover">
        <p class="text-6xl font-bold text-white pt-40 pl-28" style:transform={`translate3d(${scroll * -5}px, 0, 0)`}>
            Ho th're!
            <br>
            Welcometh to mine own p'rtfolio.
        </p>
        <p class="text-3xl font-bold text-color6 pt-40 pl-28" style:transform={`translate3d(${scroll * 5}px, 0, 0)`}>
            Hope you don't mind the "language"!
        </p>
    </div>
    <div class="flex flex-row snap-start w-full h-[91.8vh] bg-color3 mb-0 pb-0">
        <div class="flex h-[100%] flex-col border w-[66.666666%]">
            <p class="text-6xl font-bold text-white p-12">
                About:
            </p>
            <p class="text-4xl font-bold text-color6 max-w-[40ch] ml-40 p-12">
                I knoweth not what to typeth h're.  I leaveth t to thy imagination.  If 't be true thee can imagineth.
            </p>
        </div>
        <div class="flex flex-grow border flex-col-reverse h-[50vh] justify-center items-center">
            <p class="text-5xl pl-[6vh] pt-[1rem] font-bold text-color1">Links</p>
            <img src="/images/emojis/hand-point-up.png" alt="">
        </div>
    </div>

<style>
    :global(html) {
        scroll-snap-type: y proximity;
        scroll-snap-stop: always;
    }
</style>