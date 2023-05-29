<div id="wrapper" class="bg-cover wrapper flex-col flex items-center">
    <h1 class="mt-8  text-5xl font-bold">
        My Projects
    </h1>
    
    <div id="card-div" class="flex pt-9 p-4 gap-20">
        <div class="card">
            <a class="underline text-4xl" href="/projects/Pokédex">
                Pokédex
            </a>
            <p class="pt-7 ">
                A simple Pokédex created with PokéAPI.
            </p>
            <a href="https://github.com/PokeAPI">
                <img class="w-[20vw] hover:invert" src="/images/pokemon-logo.png" alt="">
            </a>
        </div>
        <div class="card">
            <a class=" underline text-4xl" href="/projects/Drawx">
                Drawx
            </a>
            <p class="pt-7 ">
                A note-taking solution on the web! All the data is stored on your browser locally.
            </p>
        </div>
        <div class="card">
            <a class=" underline text-4xl" href="/projects/Drawx">
                Image Identifier
            </a>
            <p class="pt-7 ">
                No cost imitation of Google Lens.
            </p>
        </div>
    </div>
</div>
<style>
    .card {
        border: 1px solid white;
        height: max-content;
        max-width: 45ch;
        padding: 2.5rem;
        background-position: center;
        background-size: cover;
        border-radius: 1.5rem;
    }
    #wrapper {
        background:
        linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ),
        url("/images/bg/projects.jpg");
        background-size: cover;
    }
    .card:nth-child(1) {
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/images/bg/cards/1.webp");
    }
</style>