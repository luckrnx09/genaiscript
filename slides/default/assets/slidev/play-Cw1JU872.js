const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-D5Dir24B.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-nGZGoEED.js","assets/modules/unplugin-icons-mQ84buMv.js","assets/modules/vue-DIkQULWy.js","assets/modules/shiki-BK1mXDu8.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-C15mkMOo.js","assets/index-CeRwZYn9.js","assets/index-CcwfsEDz.css","assets/DrawingPreview-D4WVZDNV.css","assets/slidev/useWakeLock-BB2v_Cud.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-D3qiVCnu.js","assets/slidev/context-Dy6KvJn8.js","assets/useWakeLock-DHFhhATP.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{d as v,O as E,o as s,c as u,B as e,b as _,e as n,f as B,i as C,g as i,a3 as R,G as M,k as b,A as P,a4 as $,U as k,l as p,F as z,x as D,v as A,h as O,t as T}from"../modules/vue-DIkQULWy.js";import{c as h,l as N,M as W,N as x,O as w,P as H,Q as I,s as V,R as L,E as S,S as U,T as G}from"../index-CeRwZYn9.js";import{b as F,G as j,c as K,u as Q,r as X,a as Y,S as q,_ as J,o as Z}from"./useWakeLock-BB2v_Cud.js";import{u as ee,b as te}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-C15mkMOo.js";import{A as se}from"../modules/unplugin-icons-mQ84buMv.js";import"../modules/shiki-BK1mXDu8.js";import"./IconButton.vue_vue_type_script_setup_true_lang-D3qiVCnu.js";import"./context-Dy6KvJn8.js";const oe="/genaiscript/slides/default/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},le=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(m,{emit:r}){const a=m,l=E(a,"modelValue",r);function d(){l.value=!1}return(f,o)=>(s(),u(R,null,[e(l)?(s(),_("div",ae,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=c=>d())}),n("div",{class:C(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[B(f.$slots,"default")],2)])):i("v-if",!0)],1024))}}),ne={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ie=["innerHTML"],re=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(m,{emit:r}){const l=E(m,"modelValue",r),d=M(()=>typeof h.info=="string");return(f,o)=>(s(),u(le,{modelValue:e(l),"onUpdate:modelValue":o[0]||(o[0]=c=>$(l)?l.value=c:null),class:"px-6 py-4"},{default:b(()=>[n("div",ne,[d.value?(s(),_("div",{key:0,class:"mb-4",innerHTML:e(h).info},null,8,ie)):i("v-if",!0),o[1]||(o[1]=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:oe,alt:"Slidev logo"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),P("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ue=v({__name:"Controls",setup(m){const{isEmbedded:r}=N(),a=!h.drawings.presenterOnly&&!r.value,t=k();a&&W(()=>import("./DrawingControls-D5Dir24B.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(f=>t.value=f.default);const l=k(),d=k();return(f,o)=>(s(),_(z,null,[e(a)&&t.value?(s(),u(e(t),{key:0})):i("v-if",!0),p(F),p(j),l.value?(s(),u(e(l),{key:1})):i("v-if",!0),d.value?(s(),u(e(d),{key:2,modelValue:e(x),"onUpdate:modelValue":o[0]||(o[0]=c=>$(x)?x.value=c:null)},null,8,["modelValue"])):i("v-if",!0),e(h).info?(s(),u(re,{key:3,modelValue:e(w),"onUpdate:modelValue":o[1]||(o[1]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):i("v-if",!0),p(K)],64))}}),de=v({__name:"PrintStyle",setup(m){function r(a,{slots:t}){if(t.default)return A("style",t.default())}return(a,t)=>(s(),u(r,null,{default:b(()=>[P(" @page { size: "+D(e(H))+"px "+D(e(I))+"px; margin: 0px; } ",1)]),_:1}))}}),ce={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},pe=v({__name:"PresenterMouse",setup(m){return(r,a)=>{const t=se;return e(V).cursor?(s(),_("div",ce,[p(t,{class:"absolute stroke-white dark:stroke-black",style:O({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):i("v-if",!0)}}}),he=v({__name:"play",setup(m){const{next:r,prev:a,isPrintMode:t}=N(),{isDrawing:l}=ee(),d=T();function f(y){var g;S.value||y.button===0&&((g=y.target)==null?void 0:g.id)==="slide-container"&&(y.pageX/window.innerWidth>.5?r():a())}Q(d),X(),Y();const o=M(()=>L.value||S.value),c=k();return(y,g)=>(s(),_(z,null,[e(t)?(s(),u(de,{key:0})):i("v-if",!0),n("div",{id:"page-root",ref_key:"root",ref:d,class:C(["grid",e(G)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(te,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(U).width.value:void 0,"is-main":"",onPointerdown:f,onContextmenu:e(Z)},{default:b(()=>[p(q,{"render-context":"slide"}),p(pe)]),controls:b(()=>[e(t)?i("v-if",!0):(s(),_("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"!opacity-100 right-0":"opacity-0 p-2",e(l)?"pointer-events-none":""]])},[p(J,{persist:o.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(s(),u(e(c),{key:0,resize:!0})):i("v-if",!0)],2),e(t)?i("v-if",!0):(s(),u(ue,{key:1})),g[0]||(g[0]=n("div",{id:"twoslash-container"},null,-1))],64))}});export{he as default};
