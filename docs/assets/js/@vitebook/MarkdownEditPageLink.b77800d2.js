import{S as I,b as N,s as j,t as S,l as F,n as B,j as m,B as h,e as _,F as q,G as D,d as f,f as u,H as J,I as O,k as d,m as p,J as Y}from"../framework.75143534.js";import{E as V,F as k,G as C,l as K,D as Q,c as U,y as z}from"../../entry-client.acbd93c0.js";const W=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.2em" height="1.2em"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M8 12h8v2H8v-2m2 8H6V4h7v5h5v3.1l2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4v-2m-2-2h4.1l.9-.9V16H8v2m12.2-5c.1 0 .3.1.4.2l1.3 1.3c.2.2.2.6 0 .8l-1 1l-2.1-2.1l1-1c.1-.1.2-.2.4-.2m0 3.9L14.1 23H12v-2.1l6.1-6.1l2.1 2.1z" fill="currentColor"></path></svg>
`,X=t=>!V(t)||/github\.com/.test(t)?"GitHub":/bitbucket\.org/.test(t)?"Bitbucket":/gitlab\.com/.test(t)?"GitLab":null,Z={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},$=({repo:t,branch:r="main",dir:e="",relativeFilePath:a,editLinkPattern:l})=>{const n=X(t);let i;return l?i=l:n!==null&&(i=Z[n]),i?i.replace(/:repo/,V(t)?t:`https://github.com/${t}`).replace(/:branch/,k(C(r))).replace(/:path/,k(`${C(e)}/${k(a)}`)):null};function A(t){let r,e,a,l,n;return{c(){r=_("p"),e=_("a"),a=_("span"),l=q(),n=D(t[1]),this.h()},l(i){r=f(i,"P",{class:!0});var o=u(r);e=f(o,"A",{href:!0,target:!0,class:!0});var c=u(e);a=f(c,"SPAN",{class:!0});var s=u(a);s.forEach(m),l=J(c),n=O(c,t[1]),c.forEach(m),o.forEach(m),this.h()},h(){d(a,"class","md-footer__edit-page__link__icon __vbk__ svelte-1fo1xgl"),d(e,"href",t[0]),d(e,"target","_blank"),d(e,"class","md-footer__edit-page__link __vbk__ svelte-1fo1xgl"),d(r,"class","md-footer__edit-page __vbk__ svelte-1fo1xgl")},m(i,o){F(i,r,o),p(r,e),p(e,a),a.innerHTML=W,p(e,l),p(e,n)},p(i,o){o&2&&Y(n,i[1]),o&1&&d(e,"href",i[0])},d(i){i&&m(r)}}}function ee(t){let r,e=t[2]&&t[0]&&A(t);return{c(){e&&e.c(),r=S()},l(a){e&&e.l(a),r=S()},m(a,l){e&&e.m(a,l),F(a,r,l)},p(a,[l]){a[2]&&a[0]?e?e.p(a,l):(e=A(a),e.c(),e.m(r.parentNode,r)):e&&(e.d(1),e=null)},i:B,o:B,d(a){e&&e.d(a),a&&m(r)}}}function te(t,r,e){let a,l,n,i,o;h(t,K,s=>e(3,n=s)),h(t,Q,s=>e(4,i=s)),h(t,U,s=>e(5,o=s));let c=null;return t.$$.update=()=>{var s,g,b,v,w,L,P,y,E,G,H,T,x,M;if(t.$$.dirty&40&&e(2,a=(b=(g=o==null?void 0:o.frontmatter.editLink)!=null?g:(s=n.markdown)==null?void 0:s.editLink)!=null?b:z.markdown.editLink),t.$$.dirty&8&&e(1,l=(w=(v=n.markdown)==null?void 0:v.editLinkText)!=null?w:z.markdown.editLinkText),t.$$.dirty&24){const R=(E=(P=(L=n.markdown)==null?void 0:L.remoteGitRepo)==null?void 0:P.url)!=null?E:(y=n.remoteGitRepo)==null?void 0:y.url;e(0,c=R&&i?$({repo:R,branch:(H=(G=n.markdown)==null?void 0:G.remoteGitRepo)==null?void 0:H.branch,dir:(x=(T=n.markdown)==null?void 0:T.remoteGitRepo)==null?void 0:x.dir,relativeFilePath:i.rootPath,editLinkPattern:(M=n.markdown)==null?void 0:M.editLinkPattern}):null)}},[c,l,a,n,i,o]}class ie extends I{constructor(r){super(),N(this,r,te,ee,j,{})}}export{ie as default};
