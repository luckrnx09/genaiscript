import{f as V,g as W,x as q,y as A}from"../modules/unplugin-icons-VetmZvX5.js";import{d as E,o as n,c,i as M,A as e,t as $,G as b,M as z,U as H,E as j,T as J,a1 as U,a2 as K,b as k,e as t,l as o,k as g,h as N,g as O,x as Q,F as X}from"../modules/vue-BfvFKxh_.js";import{l as Y,k as Z,A as ee,q as te,s as se,B as oe,o as ne,D as ae,E as re,G as le,I as ie,J as ce,_ as ue}from"../index-C_OFr9U_.js";import{r as de,u as me,a as pe,S as _e,_ as fe,G as xe,b as ve,c as ke,o as ge}from"./useWakeLock-GiuHN2UM.js";import{c as ye,u as be,b as F,S as Ce}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-CpoP1oyZ.js";import{_ as he,C as we}from"./ClicksSlider-Czjkyd08.js";import{_ as Se}from"./DrawingControls.vue_vue_type_style_index_0_lang-BA6VsYv6.js";import{_ as B}from"./IconButton.vue_vue_type_script_setup_true_lang-C24W8OJK.js";import"../modules/shiki-DeE2dIoK.js";import"./context-D-o8IduW.js";const $e=E({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(C){const i=C,{info:l}=ye(i.no);return(u,p)=>{var _,f;return n(),c(he,{class:M(i.class),note:(_=e(l))==null?void 0:_.note,"note-html":(f=e(l))==null?void 0:f.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),ze={class:"bg-main h-full slidev-presenter"},Ne={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Fe={key:1,class:"h-full flex justify-center items-center"},Be={key:0,class:"grid-section note of-auto"},Ee={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Me={class:"border-t border-main py-1 px-2 text-sm"},De={class:"grid-section bottom flex"},Pe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Te={class:"progress-bar"},Ge=E({__name:"presenter",setup(C){const i=$();de(),me(i),pe();const{clicksContext:l,currentSlideNo:u,currentSlideRoute:p,hasNext:_,nextRoute:f,slides:D,getPrimaryClicks:P,total:T}=Y(),{isDrawing:G}=be();Z({title:`Presenter - ${ne}`}),$(!1);const{timer:I,resetTimer:h}=ee(),R=b(()=>D.value.map(v=>te(v))),a=b(()=>l.value.current<l.value.total?[p.value,l.value.current+1]:_.value?[f.value,0]:null),x=b(()=>a.value&&R.value[a.value[0].no-1]);z(a,()=>{x.value&&a.value&&(x.value.current=a.value[1])},{immediate:!0});const w=H();return j(()=>{const v=i.value.querySelector("#slide-content"),s=J(U()),y=K();z(()=>{if(!y.value||G.value||!oe.value)return;const r=v.getBoundingClientRect(),d=(s.x-r.left)/r.width*100,m=(s.y-r.top)/r.height*100;if(!(d<0||d>100||m<0||m>100))return{x:d,y:m}},r=>{se.cursor=r})}),(v,s)=>{var S;const y=V,r=W,d=q,m=A;return n(),k(X,null,[t("div",ze,[t("div",{class:M(["grid-container",`layout${e(ae)}`])},[t("div",{ref_key:"main",ref:i,class:"relative grid-section main flex flex-col"},[o(F,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e(ge)},{default:g(()=>[o(_e,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(n(),c(we,{key:(S=e(p))==null?void 0:S.no,"clicks-context":e(P)(e(p)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),s[3]||(s[3]=t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1))],512),t("div",Ne,[a.value&&x.value?(n(),c(F,{key:"next"},{default:g(()=>[(n(),c(Ce,{key:a.value[0].no,"clicks-context":x.value,route:a.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):(n(),k("div",Fe,s[4]||(s[4]=[t("div",{class:"text-gray-500"}," End of the presentation ",-1)]))),s[5]||(s[5]=t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1))]),w.value&&e(re)?(n(),k("div",Be,[o(e(w))])):(n(),k("div",Ee,[(n(),c($e,{key:`static-${e(u)}`,no:e(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:N({fontSize:`${e(le)}em`}),"clicks-context":e(l)},null,8,["no","style","clicks-context"])),t("div",Me,[o(B,{title:"Increase font size",onClick:e(ie)},{default:g(()=>[o(y)]),_:1},8,["onClick"]),o(B,{title:"Decrease font size",onClick:e(ce)},{default:g(()=>[o(r)]),_:1},8,["onClick"]),O("v-if",!0)])])),t("div",De,[o(fe,{persist:!0}),s[6]||(s[6]=t("div",{"flex-auto":""},null,-1)),t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:s[2]||(s[2]=(...L)=>e(h)&&e(h)(...L))},[o(d,{class:"absolute"}),o(m,{class:"absolute opacity-0"})]),t("div",Pe,Q(e(I)),1)]),(n(),c(Se,{key:2}))],2),t("div",Te,[t("div",{class:"progress h-3px bg-primary transition-all",style:N({width:`${(e(u)-1)/(e(T)-1)*100+1}%`})},null,4)])]),o(xe),o(ve),o(ke)],64)}}}),Ue=ue(Ge,[["__scopeId","data-v-f0da48d8"]]);export{Ue as default};
