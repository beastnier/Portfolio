import{S as Q,i as z,s as J,a as g,k as m,q as O,c as E,l as p,m as _,r as V,h as i,Q as G,n as o,b as w,F as c,G as W,H,w as X}from"../chunks/index.9e75a08f.js";function Y(b){let r,e,t,l,v,h,a;return{c(){r=m("script"),t=g(),l=m("script"),h=g(),a=m("script"),this.h()},l(s){r=p(s,"SCRIPT",{src:!0});var n=_(r);n.forEach(i),t=E(s),l=p(s,"SCRIPT",{src:!0});var S=_(l);S.forEach(i),h=E(s),a=p(s,"SCRIPT",{});var D=_(a);D.forEach(i),this.h()},h(){G(r.src,e="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js")||o(r,"src",e),G(l.src,v="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js")||o(l,"src",v)},m(s,n){w(s,r,n),w(s,t,n),w(s,l,n),w(s,h,n),w(s,a,n)},d(s){s&&i(r),s&&i(t),s&&i(l),s&&i(h),s&&i(a)}}}function K(b){let r,e;return{c(){r=m("h1"),e=O("LOADING")},l(t){r=p(t,"H1",{});var l=_(r);e=V(l,"LOADING"),l.forEach(i)},m(t,l){w(t,r,l),c(r,e)},d(t){t&&i(r)}}}function Z(b){let r,e,t,l,v,h,a,s,n,S,D,x,k,L,N,C,P,q,j,y,F,R,I=Y(),f=b[1]&&K();return{c(){I&&I.c(),r=g(),e=m("div"),t=m("div"),l=O(`Filters\r
		`),v=m("img"),a=g(),s=m("div"),n=m("img"),D=g(),x=m("div"),k=m("button"),L=O("Save your beautified face."),N=g(),C=m("button"),P=O("CLICK"),q=g(),f&&f.c(),j=g(),y=m("video"),this.h()},l(d){I&&I.l(d),r=E(d),e=p(d,"DIV",{id:!0,class:!0});var u=_(e);t=p(u,"DIV",{class:!0});var M=_(t);l=V(M,`Filters\r
		`),v=p(M,"IMG",{src:!0,class:!0,alt:!0}),M.forEach(i),a=E(u),s=p(u,"DIV",{class:!0});var U=_(s);n=p(U,"IMG",{src:!0,class:!0,alt:!0}),U.forEach(i),D=E(u),x=p(u,"DIV",{class:!0});var T=_(x);k=p(T,"BUTTON",{class:!0});var A=_(k);L=V(A,"Save your beautified face."),A.forEach(i),N=E(T),C=p(T,"BUTTON",{class:!0});var B=_(C);P=V(B,"CLICK"),B.forEach(i),T.forEach(i),q=E(u),f&&f.l(u),j=E(u),y=p(u,"VIDEO",{class:!0}),_(y).forEach(i),u.forEach(i),this.h()},h(){G(v.src,h="/images/emojis/hand-point-up.png")||o(v,"src",h),o(v,"class","h-[15vh] rotate-180"),o(v,"alt",""),o(t,"class","text-5xl flex items-center m-10"),G(n.src,S="/images/clown-nose.png")||o(n,"src",S),o(n,"class","h-14 cursor-pointer rounded-full border-dashed border p-[1rem]"),o(n,"alt",""),o(s,"class","border rounded-[50vw] grid grid-flow-col"),o(k,"class","p-[1rem] text-color3 bg-white mt-8 rounded-3xl"),o(C,"class","p-[1rem] text-color3 bg-white mt-8 rounded-3xl"),o(x,"class","flex flex-row gap-8"),o(y,"class","h-[20vh] mt-6 rounded-3xl"),o(e,"id","div-main"),o(e,"class","h-screen bg-color3 flex flex-col items-center pt-[8.2vh] text-white")},m(d,u){I&&I.m(d,u),w(d,r,u),w(d,e,u),c(e,t),c(t,l),c(t,v),c(e,a),c(e,s),c(s,n),c(e,D),c(e,x),c(x,k),c(k,L),c(x,N),c(x,C),c(C,P),c(e,q),f&&f.m(e,null),c(e,j),c(e,y),b[3](y),F||(R=W(C,"click",b[2]),F=!0)},p(d,[u]){d[1]?f||(f=K(),f.c(),f.m(e,j)):f&&(f.d(1),f=null)},i:H,o:H,d(d){I&&I.d(d),d&&i(r),d&&i(e),f&&f.d(),b[3](null),F=!1,R()}}}function $(b,r,e){let t=null,l=!1;const v=async()=>{try{e(1,l=!0);const a=await navigator.mediaDevices.getUserMedia({video:!0});e(0,t.srcObject=a,t),t.play(),e(1,l=!1)}catch(a){console.log(a)}};function h(a){X[a?"unshift":"push"](()=>{t=a,e(0,t)})}return[t,l,v,h]}class te extends Q{constructor(r){super(),z(this,r,$,Z,J,{})}}export{te as component};
