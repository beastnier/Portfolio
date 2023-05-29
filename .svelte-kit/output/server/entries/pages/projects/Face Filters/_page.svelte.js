import { c as create_ssr_component, b as add_attribute } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let videoSource = null;
  return `${``}

<div id="div-main" class="h-screen bg-color3 flex flex-col items-center pt-[8.2vh] text-white"><div class="text-5xl flex items-center m-10">Filters
		<img src="/images/emojis/hand-point-up.png" class="h-[15vh] rotate-180" alt=""></div>
	<div class="border rounded-[50vw] grid grid-flow-col"><img src="/images/clown-nose.png" class="h-14 cursor-pointer rounded-full border-dashed border p-[1rem]" alt=""></div>
    <div class="flex flex-row gap-8"><button class="p-[1rem] text-color3 bg-white mt-8 rounded-3xl">Save your beautified face.
      </button>
      <button class="p-[1rem] text-color3 bg-white mt-8 rounded-3xl">CLICK
      </button></div>
    ${``}
  
  <video class="h-[20vh] mt-6 rounded-3xl"${add_attribute("this", videoSource, 0)}></video></div>`;
});
export {
  Page as default
};
