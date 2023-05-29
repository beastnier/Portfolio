<script lang="ts">
	import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import * as Vibrant from 'node-vibrant'

  let pokemonDataArray = [];
  let isLoading = true;

  onMount(async () => {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(apiUrl);
    const data = await response.json();
    const count = data.count;
    const limit = count;
    const offset = 0;

    const pokemonListResponse = await fetch(`${apiUrl}?limit=${limit}&offset=${offset}`);
    const pokemonListData = await pokemonListResponse.json();
    const pokemonList = pokemonListData.results;

    const promises = pokemonList.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();

      if (hasImage(pokemonData)) {
        const name = pokemonData.name;
        const id = pokemonData.id;
        const imageUrl = pokemonData.sprites.front_default;
        const types = pokemonData.types.map((type) => type.type.name);

        pokemonDataArray.push({ name, id, imageUrl, types });
      }
    });
    await Promise.all(promises);

    //Vibrant.js code
    for (var i = 0; i < pokemonDataArray.length; i++) {
      let pokemonImg = pokemonDataArray[i].imageUrl;
      Vibrant.from(pokemonImg).getPalette((err, palette) => console.log(palette))
    }

    isLoading = false;
  });

  function hasImage(pokemonData) {
    return pokemonData.sprites && pokemonData.sprites.front_default;
  }

  async function handleSearch() {
    console.log("Searched!")
  }
</script>
{#if browser}
<script src=""></script>
<script>
  
</script>
{/if}

<div class="wrapper flex flex-col justify-center items-center p-8">
  {#if isLoading}
    <p class="text-xl">Loading...</p>
  {:else}
    <input type="text" name="" class="mt-8 h-[3.5rem] bg-gray-900 border w-[90vw] pl-4 rounded-3xl" on:input={handleSearch} placeholder="Type the correct spelling to search." id="">
    <div class="flex flex-wrap items-center justify-center pt-8 gap-5">
      {#each pokemonDataArray as pokemon}
        <div id="{pokemon.name}" class="border rounded-3xl flex flex-col gap-4 items-center p-8">
          <img src={pokemon.imageUrl} alt={pokemon.name} />
          <p>{pokemon.name}</p>
          <div>
            {#each pokemon.types as type}
              <span class="bg-slate-700 p-[0.5rem] m-[0.5rem] rounded-xl">{type}</span>
            {/each}
          </div>
          {#if pokemon.colors}
            <div>
              {#each Object.keys(pokemon.colors) as colorName}
                <span class="bg-{pokemon.colors[colorName].hex} p-[0.5rem] m-[0.5rem] rounded-xl">{colorName}</span>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>