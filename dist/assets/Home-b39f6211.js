import{G as $,r as d,d as I,a as T,u as m,j as e,L as P,F as z,s as B,b as F,c as M}from"./index-7f476f94.js";import{C as V,a as G,f as D,P as H}from"./productsSkeleton-f930ff84.js";import{u as y,a as U}from"./cartMiddleware-83d66376.js";function W(t){return $({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}}]})(t)}const q="_content_au0zi_1",J="_products_au0zi_6",K="_products__wrapper_au0zi_10",x={content:q,products:J,products__wrapper:K},Q="_product_1accn_1",X="_product__link_1accn_14",Y="_product__img_1accn_18",Z="_product__img_skeleton_1accn_22",tt="_product__title_1accn_28",et="_product__bot_1accn_32",st="_product__favorites_1accn_44",rt="_product__favorites_active_1accn_47",ct="_product__cart_active_1accn_51",ot="_updown_1accn_1",u={product:Q,product__link:X,product__img:Y,product__img_skeleton:Z,product__title:tt,product__bot:et,product__favorites:st,product__favorites_active:rt,product__cart_active:ct,updown:ot};var N=new Map,b=new WeakMap,O=0,nt=void 0;function it(t){return t?(b.has(t)||(O+=1,b.set(t,O.toString())),b.get(t)):"0"}function at(t){return Object.keys(t).sort().filter(s=>t[s]!==void 0).map(s=>`${s}_${s==="root"?it(t.root):t[s]}`).toString()}function _t(t){let s=at(t),o=N.get(s);if(!o){const i=new Map;let _;const r=new IntersectionObserver(n=>{n.forEach(c=>{var a;const h=c.isIntersecting&&_.some(f=>c.intersectionRatio>=f);t.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=h),(a=i.get(c.target))==null||a.forEach(f=>{f(h,c)})})},t);_=r.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),o={id:s,observer:r,elements:i},N.set(s,o)}return o}function dt(t,s,o={},i=nt){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const a=t.getBoundingClientRect();return s(i,{isIntersecting:i,target:t,intersectionRatio:typeof o.threshold=="number"?o.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:_,observer:r,elements:n}=_t(o);let c=n.get(t)||[];return n.has(t)||n.set(t,c),c.push(s),r.observe(t),function(){c.splice(c.indexOf(s),1),c.length===0&&(n.delete(t),r.unobserve(t)),n.size===0&&(r.disconnect(),N.delete(_))}}function ut({threshold:t,delay:s,trackVisibility:o,rootMargin:i,root:_,triggerOnce:r,skip:n,initialInView:c,fallbackInView:a,onChange:h}={}){var f;const[g,L]=d.useState(null),w=d.useRef(),[C,R]=d.useState({inView:!!c,entry:void 0});w.current=h,d.useEffect(()=>{if(n||!g)return;let v;return v=dt(g,(E,S)=>{R({inView:E,entry:S}),w.current&&w.current(E,S),S.isIntersecting&&r&&v&&(v(),v=void 0)},{root:_,rootMargin:i,threshold:t,trackVisibility:o,delay:s},a),()=>{v&&v()}},[Array.isArray(t)?t.toString():t,g,_,i,r,n,o,a,s]);const k=(f=C.entry)==null?void 0:f.target,A=d.useRef();!g&&k&&!r&&!n&&A.current!==k&&(A.current=k,R({inView:!!c,entry:void 0}));const l=[L,C.inView,C.entry];return l.ref=l[0],l.inView=l[1],l.entry=l[2],l}const lt=t=>(s,o)=>{console.log("BEFORE FAVORITES TOGGLE PRODUCT: ",o()),o().favorites.items.indexOf(t)>=0?s(I(t)):s(T(t)),console.log("AFTER FAVORITES TOGGLE PRODUCT: ",o())},pt=({id:t,title:s,price:o,thumbnail:i})=>{const _=y();console.log("1");const r=m(a=>a.favorites.items),{ref:n,inView:c}=ut({threshold:.5,triggerOnce:!0});return e.jsxs("div",{className:u.product,ref:n,children:[e.jsxs(P,{to:`/shop/products/${t}`,className:u.product__link,children:[c?e.jsx("img",{className:u.product__img,src:i,width:100,alt:s}):e.jsx("div",{className:u.product__img_skeleton}),e.jsx("p",{className:u.product__title,children:s})]}),e.jsxs("div",{className:u.product__bot,children:[e.jsxs("p",{children:[e.jsx("span",{children:o})," $"]}),e.jsxs("button",{onClick:()=>{_(U({id:t,title:s,thumbnail:i,pricePerOne:o,quantity:1}))},children:[" ",e.jsx(z,{})]}),e.jsx("button",{className:`${u.product__favorites} ${r.indexOf(t)>=0?u.product__favorites_active:""}`,onClick:()=>{_(lt(t))},children:e.jsx(W,{})})]})]})},mt=d.memo(pt),ht="_sidebar_1uz44_1",ft="_sidebar__list_1uz44_9",vt="_sidebar__item_1uz44_12",gt="_sidebar__item_active_1uz44_19",j={sidebar:ht,sidebar__list:ft,sidebar__item:vt,sidebar__item_active:gt},xt=()=>e.jsxs(V,{speed:4,width:270,height:300,viewBox:"0 0 270 300",backgroundColor:"#f3f3f3",foregroundColor:"#dedede",children:[e.jsx("rect",{x:"510",y:"232",rx:"3",ry:"3",width:"88",height:"6"}),e.jsx("rect",{x:"112",y:"-11",rx:"0",ry:"0",width:"107",height:"0"}),e.jsx("rect",{x:"546",y:"360",rx:"0",ry:"0",width:"70",height:"30"}),e.jsx("rect",{x:"551",y:"356",rx:"0",ry:"0",width:"70",height:"26"}),e.jsx("rect",{x:"468",y:"199",rx:"8",ry:"8",width:"100",height:"34"}),e.jsx("circle",{cx:"568",cy:"370",r:"57"}),e.jsx("circle",{cx:"753",cy:"513",r:"241"}),e.jsx("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"250",height:"35"})]}),bt=d.memo(function(){const[s,o]=d.useState(["All"]),[i,_]=d.useState(!0),r=y(),n=m(c=>c.filters.currentCategory);return d.useEffect(()=>{G.get("https://630244f2c6dda4f287b6a17b.mockapi.io/products").then(c=>{let a=Array.from(new Set(c.data.map(h=>h.category)));a=[...s,...a],o(a)}).then(()=>_(!1))},[]),e.jsxs("div",{className:j.sidebar,children:[e.jsx("h3",{children:"Категории товаров"}),e.jsx("ul",{className:j.sidebar__list,children:i?[...new Array(3)].map((c,a)=>e.jsx(xt,{},a)):s.map(c=>e.jsx("li",{className:`${j.sidebar__item} ${c===n?j.sidebar__item_active:""}`,onClick:()=>{r(B(c))},children:c},c))})]})}),jt="_sort_grs9m_1",yt="_sort__clickable_grs9m_10",wt="_sort__selected_grs9m_13",Ct="_sort__list_grs9m_16",kt="_sort__item_grs9m_26",St="_sort__item_active_grs9m_34",Nt="_sort__selected_active_grs9m_38",p={sort:jt,sort__clickable:yt,sort__selected:wt,sort__list:Ct,sort__item:kt,sort__item_active:St,sort__selected_active:Nt};function Rt(t){return $({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M3 9l4 -4l4 4m-4 -4v14"}},{tag:"path",attr:{d:"M21 15l-4 4l-4 -4m4 4v-14"}}]})(t)}const At=[{name:"По рейтингу",sortBy:"rating",order:"desc"},{name:"По убыванию цены",sortBy:"price",order:"desc"},{name:"По возрастанию цены",sortBy:"price",order:"asc"},{name:"По названию",sortBy:"title",order:"desc"}],Et=d.memo(function(){const s=d.useRef(0),[o,i]=d.useState(!1),_=y(),r=m(n=>n.filters.currentSort);return d.useEffect(()=>{const n=c=>{c.composedPath().includes(s.current)||i(!1)};return document.body.addEventListener("click",n),()=>document.body.removeEventListener("click",n)},[o]),e.jsxs("div",{className:p.sort,children:[e.jsxs("div",{className:p.sort__clickable,onClick:()=>{i(!o)},ref:s,children:[e.jsx(Rt,{}),e.jsx("span",{className:`${p.sort__selected} ${p.sort__selected_active}`,children:r.name})]}),o&&e.jsx("ul",{className:p.sort__list,children:At.map(n=>e.jsx("li",{className:`${p.sort__item} ${n.name===r.name?p.sort__item_active:""}`,onClick:()=>{_(F(n)),i(!1)},children:e.jsx("span",{children:n.name})},n.name))})]})}),It=()=>{const t=y(),s=m(r=>r.filters.currentCategory),o=m(r=>r.filters.currentSort),i=m(r=>r.data.products),_=m(r=>r.data.isLoading);return d.useEffect(()=>{t(M(!0)),t(D(s==="All"?"":s,o))},[s,o]),e.jsxs("div",{className:x.home,children:[e.jsx("h1",{children:"Каталог товаров"}),e.jsxs("div",{className:x.content,children:[e.jsx(bt,{}),e.jsxs("section",{className:x.products,children:[e.jsx(Et,{}),e.jsx("div",{className:x.products__wrapper,children:_?[...new Array(3)].map((r,n)=>e.jsx(H,{},n)):i.map(r=>e.jsx(mt,{...r},r.id))})]})]})]})};export{It as default};
