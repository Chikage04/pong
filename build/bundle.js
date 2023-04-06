var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function d(){return l(" ")}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function p(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let $;function m(t){$=t}function w(t){(function(){if(!$)throw new Error("Function called outside component initialization");return $})().$$.on_mount.push(t)}const y=[],g=[];let b=[];const v=[],x=Promise.resolve();let _=!1;function M(t){b.push(t)}const T=new Set;let k=0;function E(){if(0!==k)return;const t=$;do{try{for(;k<y.length;){const t=y[k];k++,m(t),W(t.$$)}}catch(t){throw y.length=0,k=0,t}for(m(null),y.length=0,k=0;g.length;)g.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];T.has(n)||(T.add(n),n())}b.length=0}while(y.length);for(;v.length;)v.pop()();_=!1,T.clear(),m(t)}function W(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(M)}}const A=new Set;function H(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];b.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),b=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function L(t,n){-1===t.$$.dirty[0]&&(y.push(t),_||(_=!0,x.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function N(i,a,s,c,l,d,f,h=[-1]){const p=$;m(i);const w=i.$$={fragment:null,ctx:[],props:d,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(p?p.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:a.target||p.$$.root};f&&f(w.root);let y=!1;if(w.ctx=s?s(i,a.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return w.ctx&&l(w.ctx[t],w.ctx[t]=o)&&(!w.skip_bound&&w.bound[t]&&w.bound[t](o),y&&L(i,t)),n})):[],w.update(),y=!0,o(w.before_update),w.fragment=!!c&&c(w.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);w.fragment&&w.fragment.l(t),t.forEach(u)}else w.fragment&&w.fragment.c();a.intro&&((g=i.$$.fragment)&&g.i&&(A.delete(g),g.i(b))),function(t,e,i,a){const{fragment:s,after_update:u}=t.$$;s&&s.m(e,i),a||M((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(M)}(i,a.target,a.anchor,a.customElement),E()}var g,b;m(p)}class O{$destroy(){H(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function S(n){let e,o,r,i,$,m,w,y,g,b,v,x,_,M,T,k;return{c(){e=c("p"),o=l(n[0]),r=l(" : "),i=l(n[1]),$=d(),m=c("p"),w=l("Début"),y=d(),g=c("div"),b=c("div"),v=d(),x=c("div"),_=d(),M=c("div"),f(e,"class","score svelte-1tlfn4a"),p(e,"display","flex"),f(m,"class","score svelte-1tlfn4a"),f(m,"id","debut"),f(m,"style",n[5]),f(b,"class","bloc svelte-1tlfn4a"),f(b,"style",n[4]),f(x,"class","bloc svelte-1tlfn4a"),f(x,"id","bloc2"),f(x,"style",n[3]),f(M,"class","balle svelte-1tlfn4a"),f(M,"style",n[2]),p(g,"height","100vh"),p(g,"width","100vw")},m(t,u){var c,l,d,f;s(t,e,u),a(e,o),a(e,r),a(e,i),s(t,$,u),s(t,m,u),a(m,w),s(t,y,u),s(t,g,u),a(g,b),a(g,v),a(g,x),a(g,_),a(g,M),T||(c=m,l="click",d=n[6],c.addEventListener(l,d,f),k=()=>c.removeEventListener(l,d,f),T=!0)},p(t,[n]){1&n&&h(o,t[0]),2&n&&h(i,t[1]),32&n&&f(m,"style",t[5]),16&n&&f(b,"style",t[4]),8&n&&f(x,"style",t[3]),4&n&&f(M,"style",t[2])},i:t,o:t,d(t){t&&u(e),t&&u($),t&&u(m),t&&u(y),t&&u(g),T=!1,k()}}}let j=25;function z(t,n,e){let o,r,i,a,s,u,c=220,l=280,d=1200,f=280,h=new Set,p=730,$=300,m=4,y=Math.floor(4*Math.random())+1,g=!0,b=!1,v=!1,x=!1,_=0,M=0;function T(t){h.add(t.key)}function k(t){h.delete(t.key)}function E(){!0===b&&(h.has("ArrowLeft")&&e(9,d-=5),h.has("ArrowRight")&&e(9,d+=5),h.has("ArrowUp")&&e(10,f-=6),h.has("ArrowDown")&&e(10,f+=6),(h.has("q")||h.has("Q"))&&e(7,c-=5),(h.has("d")||h.has("D"))&&e(7,c+=5),(h.has("z")||h.has("Z"))&&e(8,l-=6),(h.has("s")||h.has("S"))&&e(8,l+=6),c<0&&e(7,c=0),c>window.innerWidth/2-window.innerWidth/12&&e(7,c=window.innerWidth/2-window.innerWidth/12),l<0&&e(8,l=0),l>window.innerHeight-102&&e(8,l=window.innerHeight-102),d<window.innerWidth/2+window.innerWidth/23&&e(9,d=window.innerWidth/2+window.innerWidth/23),d>window.innerWidth-18&&e(9,d=window.innerWidth-17),f<0&&e(10,f=0),f>window.innerHeight-102&&e(10,f=window.innerHeight-102))}function W(){if(!0===b){if(e(11,p+=m),e(12,$+=y),p<0&&(e(11,p=720),e(12,$=250),m=0,y=0,e(1,M++,M),setTimeout((()=>{A()}),1e3)),p>window.innerWidth-j&&(e(11,p=720),e(12,$=250),m=0,y=0,e(0,_++,_),setTimeout((()=>{A()}),1e3)),($<0||$>window.innerHeight-j-7)&&(y=-y),p<=d+17&&$+j>=f&&$<=f+100&&p+j>=d){if(!0!==g)return;g=!1,m=2*-m,e(9,d+=10),y=y>0?-(Math.floor(3*Math.random())+2):Math.floor(3*Math.random())+2,setTimeout((()=>{if(m/=2,1==v){if(6==m||-6==m)return;m>0?m+=2:m-=2}if(1==x){if(9==m||-9==m)return;m>0?m+=3:m-=3}}),170),setTimeout((()=>{g=!0}),500)}if(p<=c+17&&$+j>=l&&$<=l+100&&p+j>=c){if(!0!==g)return;g=!1,m=2*-m,e(7,c-=10),y=y>0?-(Math.floor(3*Math.random())+2):Math.floor(3*Math.random())+2,setTimeout((()=>{if(m/=2,1==v){if(6==m||-6==m)return;m>0?m+=2:m-=2}if(1==x){if(9==m||-9==m)return;m>0?m+=3:m-=3}}),170),setTimeout((()=>{g=!0}),500)}}}function A(){v=!1,x=!1,clearTimeout(s),clearTimeout(u),s=setTimeout((()=>{v=!0,console.log(v)}),1e4),u=setTimeout((()=>{x=!0,console.log(x)}),3e4);var t=Math.round(Math.random());m=4,y=Math.floor(4*Math.random())+1,0==t||(m=-m)}return A(),w((()=>{window.addEventListener("keydown",T),window.addEventListener("keyup",k),setInterval(E,9),setInterval(W,9)})),t.$$.update=()=>{8192&t.$$.dirty&&e(5,o=b?"transition: all 0.8s;  opacity: 0;":" display: flex; "),384&t.$$.dirty&&e(4,r=`transform: translate(${c}px, ${l}px); transition: all 0s;`),1536&t.$$.dirty&&e(3,i=`transform: translate(${d}px, ${f}px); transition: all 0s;`),6144&t.$$.dirty&&e(2,a=`transform: translate(${p}px, ${$}px); width: 25px; height: 25px; border-radius: 50%; background-color: azure;`)},[_,M,a,i,r,o,function(t){setTimeout((()=>{e(13,b=!0)}),900),setTimeout((()=>{v=!0}),1e4),setTimeout((()=>{x=!0}),3e4)},c,l,d,f,p,$,b]}return new class extends O{constructor(t){super(),N(this,t,z,S,i,{})}}({target:document.body,props:{name:"world"}})}();