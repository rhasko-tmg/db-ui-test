import{S as f,b as d,s as _,e as v,d as w,f as S,j as i,k as A,l as h,n as u,aa as M,X as R,t as m,Y as V,Q as x,q as I,u as B,v as C,A as D,x as H,y as j,B as q}from"../framework.75143534.js";import{c as P}from"../framework.f0fa275e.js";import{f as E,o as F,h as N,i as Q,j as T}from"../framework.07fcd977.js";import{i as U,b as X}from"../../entry-client.fe28214a.js";async function Y(a){}const z=E({__name:"App",props:{component:null},setup(a){return(e,n)=>(F(),N(Q(a.component)))}});function G(a){let e,n;return{c(){e=new R(!1),n=m(),this.h()},l(t){e=V(t,!1),n=m(),this.h()},h(){e.a=n},m(t,o){e.m(a[2],t,o),h(t,n,o)},p:u,d(t){t&&i(n),t&&e.d()}}}function J(a){let e,n=a[1]&&G(a);return{c(){e=v("div"),n&&n.c(),this.h()},l(t){e=w(t,"DIV",{class:!0});var o=S(e);n&&n.l(o),o.forEach(i),this.h()},h(){A(e,"class","__vbk__")},m(t,o){h(t,e,o),n&&n.m(e,null),a[4](e)},p(t,[o]){t[1]&&n.p(t,o)},i:u,o:u,d(t){t&&i(e),n&&n.d(),a[4](null)}}}let p=!1;function K(a,e,n){let o,s,{component:c}=e;M(()=>{l()});async function y(r){s=P(T(z,{component:r})),await Y()}async function b(r){!r||(l(),await y(r),s.mount(o,!p),p=!0)}function l(){s==null||s.unmount(),s=void 0}let tt="",$="";function k(r){x[r?"unshift":"push"](()=>{o=r,n(0,o)})}return a.$$set=r=>{"component"in r&&n(3,c=r.component)},a.$$.update=()=>{a.$$.dirty&9&&o&&b(c)},[o,!1,$,c,k]}class L extends f{constructor(e){super(),d(this,e,K,J,_,{component:3})}}const O=L;function W(a){let e,n;return e=new O({props:{component:a[0]}}),{c(){I(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,o){C(e,t,o),n=!0},p(t,[o]){const s={};o&1&&(s.component=t[0]),e.$set(s)},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}const g=new Map,st=async(a,e)=>{var t;if(!((t=a.context)!=null&&t.loader))return{};const n=await a.context.loader();return g.set(decodeURI(a.route),n.default),U(n.__pageMeta)?n.__pageMeta(a,e):n.__pageMeta};function Z(a,e,n){let t,o;return q(a,X,s=>n(1,o=s)),a.$$.update=()=>{a.$$.dirty&2&&n(0,t=g.get(o.decodedPath))},[t,o]}class rt extends f{constructor(e){super(),d(this,e,Z,W,_,{})}}export{st as __pageMeta,rt as default};