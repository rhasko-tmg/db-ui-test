import{C,S as V,b as G,s as J,e as A,d as T,f as $,j as m,k as _,l as R,w as K,N as ce,a3 as ie,z as O,A as g,x as v,B as H,G as ue,F as U,I as he,H as N,K as y,m as w,J as fe,q as Y,u as x,v as Q,y as W,o as de,g as E}from"../framework.75143534.js";import{x as me,b as p,p as X,u as _e,c as Z,l as ge,d as pe}from"../../entry-client.acbd93c0.js";const ve=me(0,l=>{const t=()=>{C().then(()=>{l(parseFloat(window.getComputedStyle(document.querySelector(".theme.__vbk__")).getPropertyValue("--vbk--navbar-height"))*16)})},e=[];return e.push(p.subscribe(t)),e.push(X.subscribe(t)),()=>{e.forEach(o=>o())}});function z(l,t,e){const o=l.slice();return o[2]=t[e],o}function j(l){let t,e;return t=new ee({props:{items:l[2].children}}),{c(){Y(t.$$.fragment)},l(o){x(t.$$.fragment,o)},m(o,r){Q(t,o,r),e=!0},p(o,r){const c={};r&1&&(c.items=o[2].children),t.$set(c)},i(o){e||(g(t.$$.fragment,o),e=!0)},o(o){v(t.$$.fragment,o),e=!1},d(o){W(t,o)}}}function D(l,t){let e,o,r=t[2].title+"",c,i,s,n,u,a=t[2].children.length>0&&j(t);return{key:l,first:null,c(){e=A("li"),o=A("a"),c=ue(r),s=U(),a&&a.c(),n=U(),this.h()},l(f){e=T(f,"LI",{class:!0});var h=$(e);o=T(h,"A",{href:!0,class:!0});var b=$(o);c=he(b,r),b.forEach(m),s=N(h),a&&a.l(h),n=N(h),h.forEach(m),this.h()},h(){_(o,"href",i=`#${t[2].slug}`),_(o,"class","md-floating-toc__link __vbk__ svelte-10smrxh"),y(o,"active",`#${t[2].slug}`===decodeURIComponent(t[1].hash)),_(e,"class","md-floating-toc__list-item __vbk__ svelte-10smrxh"),this.first=e},m(f,h){R(f,e,h),w(e,o),w(o,c),w(e,s),a&&a.m(e,null),w(e,n),u=!0},p(f,h){t=f,(!u||h&1)&&r!==(r=t[2].title+"")&&fe(c,r),(!u||h&1&&i!==(i=`#${t[2].slug}`))&&_(o,"href",i),(!u||h&3)&&y(o,"active",`#${t[2].slug}`===decodeURIComponent(t[1].hash)),t[2].children.length>0?a?(a.p(t,h),h&1&&g(a,1)):(a=j(t),a.c(),g(a,1),a.m(e,n)):a&&(K(),v(a,1,1,()=>{a=null}),O())},i(f){u||(g(a),u=!0)},o(f){v(a),u=!1},d(f){f&&m(e),a&&a.d()}}}function be(l){let t,e=[],o=new Map,r,c=l[0];const i=s=>s[2];for(let s=0;s<c.length;s+=1){let n=z(l,c,s),u=i(n);o.set(u,e[s]=D(u,n))}return{c(){t=A("ul");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=T(s,"UL",{class:!0});var n=$(t);for(let u=0;u<e.length;u+=1)e[u].l(n);n.forEach(m),this.h()},h(){_(t,"class","md-floating-toc__list __vbk__ svelte-10smrxh")},m(s,n){R(s,t,n);for(let u=0;u<e.length;u+=1)e[u].m(t,null);r=!0},p(s,[n]){n&3&&(c=s[0],K(),e=ce(e,n,i,1,s,c,o,t,ie,D,null,z),O())},i(s){if(!r){for(let n=0;n<c.length;n+=1)g(e[n]);r=!0}},o(s){for(let n=0;n<e.length;n+=1)v(e[n]);r=!1},d(s){s&&m(t);for(let n=0;n<e.length;n+=1)e[n].d()}}}function ke(l,t,e){let o;H(l,p,c=>e(1,o=c));let{items:r}=t;return l.$$set=c=>{"items"in c&&e(0,r=c.items)},[r,o]}class ee extends V{constructor(t){super(),G(this,t,ke,be,J,{items:0})}}const we=ee;function Ae(l,t){let e,o=!1;return()=>{e&&window.clearTimeout(e),o?e=window.setTimeout(l,t):(l(),o=!0,window.setTimeout(()=>{o=!1},t))}}function Te({headerLinkSelector:l,headerAnchorSelector:t,delay:e,offset:o}){const r=_e();let c=!1;const i=async()=>{var F,S,I,L;if(!c||!E(X))return;const n=E(o),u=Array.from(document.querySelectorAll(l)),f=Array.from(document.querySelectorAll(t)).filter(d=>u.some(k=>k.hash===d.hash)),h=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),b=window.innerHeight+h,te=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),oe=Math.abs(te-b)<n;for(let d=0;d<f.length;d++){const k=f[d],P=f[d+1],ne=d===0&&h===0,se=((S=(F=k.parentElement)==null?void 0:F.offsetTop)!=null?S:0)-n,re=h>=se,ae=!P||h<((L=(I=P.parentElement)==null?void 0:I.offsetTop)!=null?L:0)-n;if(!(ne||re&&ae))continue;const B=decodeURIComponent(E(p).hash),q=decodeURIComponent(k.hash);if(B===q)return;if(oe){for(let M=d+1;M<f.length;M++)if(B===decodeURIComponent(f[M].hash))return}const le=r.scrollBehaviour;r.scrollBehaviour=void 0,await r.go(q,{scroll:!1,replace:!0}),r.scrollBehaviour=le;return}},s=Ae(()=>C().then(()=>{window.requestAnimationFrame(i)}),e);de(()=>{const n=[];window.addEventListener("scroll",s);let u;return n.push(p.subscribe(({path:a})=>{a!==u&&(c=!1,C().then(()=>{setTimeout(()=>{c=!0},500)}),u=a)})),n.push(p.subscribe(s)),n.push(Z.subscribe(s)),n.push(o.subscribe(s)),()=>{n.forEach(a=>a()),window.removeEventListener("scroll",s)}})}function $e(l){var r,c;let t,e,o;return e=new we({props:{items:(c=(r=l[1])==null?void 0:r.headers)!=null?c:[]}}),{c(){t=A("div"),Y(e.$$.fragment),this.h()},l(i){t=T(i,"DIV",{class:!0});var s=$(t);x(e.$$.fragment,s),s.forEach(m),this.h()},h(){_(t,"class","md-floating-toc __vbk__ svelte-2gp06d"),y(t,"no-navbar",l[0])},m(i,s){R(i,t,s),Q(e,t,null),o=!0},p(i,[s]){var u,a;const n={};s&2&&(n.items=(a=(u=i[1])==null?void 0:u.headers)!=null?a:[]),e.$set(n),(!o||s&1)&&y(t,"no-navbar",i[0])},i(i){o||(g(e.$$.fragment,i),o=!0)},o(i){v(e.$$.fragment,i),o=!1},d(i){i&&m(t),W(e)}}}function ye(l,t,e){let o,r,c;return H(l,ge,i=>e(2,r=i)),H(l,Z,i=>e(1,c=i)),Te({headerLinkSelector:".md-floating-toc__link",headerAnchorSelector:"a.header-anchor",delay:100,offset:pe(ve,i=>i+16)}),l.$$.update=()=>{l.$$.dirty&4&&e(0,o=r.navbar===!1)},[o,c,r]}class He extends V{constructor(t){super(),G(this,t,ye,$e,J,{})}}export{He as default};