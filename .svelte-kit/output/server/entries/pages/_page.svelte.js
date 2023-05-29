import { c as create_ssr_component, h as add_styles } from "../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{scroll-snap-type:y proximity;scroll-snap-stop:always}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scroll = 0;
  $$result.css.add(css);
  return `
    <div id="about" class="w-full h-screen bg-coffee-background bg-cover"><p class="text-6xl font-bold text-white pt-40 pl-28"${add_styles({
    "transform": `translate3d(${scroll * -5}px, 0, 0)`
  })}>Ho th&#39;re!
            <br>
            Welcometh to mine own p&#39;rtfolio.
        </p>
        <p class="text-3xl font-bold text-color6 pt-40 pl-28"${add_styles({
    "transform": `translate3d(${scroll * 5}px, 0, 0)`
  })}>Hope you don&#39;t mind the &quot;language&quot;!
        </p></div>
    <div class="flex flex-row snap-start w-full h-[91.8vh] bg-color3 mb-0 pb-0"><div class="flex h-[100%] flex-col border w-[66.666666%]"><p class="text-6xl font-bold text-white p-12">About:
            </p>
            <p class="text-4xl font-bold text-color6 max-w-[40ch] ml-40 p-12">I knoweth not what to typeth h&#39;re.  I leaveth t to thy imagination.  If &#39;t be true thee can imagineth.
            </p></div>
        <div class="flex flex-grow border flex-col-reverse h-[50vh] justify-center items-center"><p class="text-5xl pl-[6vh] pt-[1rem] font-bold text-color1">Links</p>
            <img src="/images/emojis/hand-point-up.png" alt=""></div>
    </div>`;
});
export {
  Page as default
};
