import { c as create_ssr_component, n as now, l as loop, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const app = "";
const Navbar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg.svelte-ignes8:hover{fill:#726eff}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `



<div class="text-white z-[1000] bg-color3 flex fixed flex-col w-full h-[8.2vh] text-lg items-center border-b"><div class="flex w-full h-[8.2vh] text-lg items-center"><h2 class="text-2xl h-[8.2vh] flex border-r p-4 basis-1/3">Portfolio
        </h2>
        <div class="border-r h-[8.2vh] p-4 basis-1/3 flex flex-row items-center justify-center"><a href="https://github.com/beastnier"><svg height="32" fill="white" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="svelte-ignes8"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg></a></div>
        <div class="flex flex-row items-center justify-center h-[8.2vh] p-4 flex-grow"><ul class="flex gap-9 flex-row items-center justify-center"><li><a href="/">About
                    </a></li>
                <li><a href="/projects">Projects
                    </a></li></ul></div></div></div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const MouseCursor_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "svg.svelte-1e4xvtg{position:absolute;top:0;left:0;pointer-events:none}",
  map: null
};
const MouseCursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $coords1, $$unsubscribe_coords1;
  let $size, $$unsubscribe_size;
  let $coords2, $$unsubscribe_coords2;
  let coords1 = spring({ x: 0, y: 0 }, { stiffness: 0.05, damping: 0.25 });
  $$unsubscribe_coords1 = subscribe(coords1, (value) => $coords1 = value);
  let coords2 = spring({ x: 0, y: 0 }, { stiffness: 0.1, damping: 0.35 });
  $$unsubscribe_coords2 = subscribe(coords2, (value) => $coords2 = value);
  let size = spring(10);
  $$unsubscribe_size = subscribe(size, (value) => $size = value);
  $$result.css.add(css$1);
  $$unsubscribe_coords1();
  $$unsubscribe_size();
  $$unsubscribe_coords2();
  return `

<svg class="h-screen z-[1000] w-screen svelte-1e4xvtg"><circle${add_attribute("cx", $coords1.x, 0)}${add_attribute("cy", $coords1.y, 0)}${add_attribute("r", $size, 0)} stroke="lightgray" stroke-width="1" fill-opacity="0"></circle><circle${add_attribute("cx", $coords2.x, 0)}${add_attribute("cy", $coords2.y, 0)}${add_attribute("r", $size / 4, 0)} fill="darkgray"></circle></svg>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: `@font-face{font-family:"Space Grotesk";src:url("$lib/fonts/SpaceGrotesk.ttf") format('truetype')}body{font-family:"Space Grotesk";overflow-x:hidden;margin:0px;cursor:none !important;padding:0px}a:hover{color:#726eff;cursor:none !important}`,
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
  ${validate_component(MouseCursor, "MouseCursor").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
