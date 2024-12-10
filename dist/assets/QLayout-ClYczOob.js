import{i as c,j as h,W as pe,g as O,h as _,K as Oe,V as _e,k as G,l as Me,v as je,I as xe,z as Ae,r as z,s as M,p as Qe,t as V,T as He,x as U,ab as J,ac as B,ad as ie,ae as we,a3 as ke,m as ee,q as X,A as Se,aa as $e,n as oe,af as K,Z as De}from"./index-Esmsc9vZ.js";const te={xs:18,sm:24,md:32,lg:38,xl:46},qe={size:String};function Ee(e,t=te){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function re(e,t){return e!==void 0&&e()||t}function qt(e,t){if(e!==void 0){const i=e();if(i!=null)return i.slice()}return t}function H(e,t){return e!==void 0?t.concat(e()):t}function Et(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function Lt(e,t,i,n,o,a){t.key=n+o;const s=h(e,t,i);return o===!0?pe(s,a()):s}const le="0 0 24 24",ae=e=>e,Y=e=>`ionicons ${e}`,Le={"mdi-":e=>`mdi ${e}`,"icon-":ae,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":Y,"ion-ios":Y,"ion-logo":Y,"iconfont ":ae,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},Ce={o_:"-outlined",r_:"-round",s_:"-sharp"},Re={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Fe=new RegExp("^("+Object.keys(Le).join("|")+")"),Ne=new RegExp("^("+Object.keys(Ce).join("|")+")"),se=new RegExp("^("+Object.keys(Re).join("|")+")"),We=/^[Mm]\s?[-+]?\.?\d/,Ke=/^img:/,Ie=/^svguse:/,Ve=/^ion-/,Ue=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,ue=O({name:"QIcon",props:{...qe,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:i}}=_(),n=Ee(e),o=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),a=c(()=>{let s,r=e.name;if(r==="none"||!r)return{none:!0};if(i.iconMapFn!==null){const d=i.iconMapFn(r);if(d!==void 0)if(d.icon!==void 0){if(r=d.icon,r==="none"||!r)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if(We.test(r)===!0){const[d,y=le]=r.split("|");return{svg:!0,viewBox:y,nodes:d.split("&&").map(l=>{const[p,x,q]=l.split("@@");return h("path",{style:x,d:p,transform:q})})}}if(Ke.test(r)===!0)return{img:!0,src:r.substring(4)};if(Ie.test(r)===!0){const[d,y=le]=r.split("|");return{svguse:!0,src:d.substring(7),viewBox:y}}let v=" ";const f=r.match(Fe);if(f!==null)s=Le[f[1]](r);else if(Ue.test(r)===!0)s=r;else if(Ve.test(r)===!0)s=`ionicons ion-${i.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(se.test(r)===!0){s="notranslate material-symbols";const d=r.match(se);d!==null&&(r=r.substring(6),s+=Re[d[1]]),v=r}else{s="notranslate material-icons";const d=r.match(Ne);d!==null&&(r=r.substring(2),s+=Ce[d[1]]),v=r}return{cls:s,content:v}});return()=>{const s={class:o.value,style:n.value,"aria-hidden":"true",role:"presentation"};return a.value.none===!0?h(e.tag,s,re(t.default)):a.value.img===!0?h(e.tag,s,H(t.default,[h("img",{src:a.value.src})])):a.value.svg===!0?h(e.tag,s,H(t.default,[h("svg",{viewBox:a.value.viewBox||"0 0 24 24"},a.value.nodes)])):a.value.svguse===!0?h(e.tag,s,H(t.default,[h("svg",{viewBox:a.value.viewBox},[h("use",{"xlink:href":a.value.src})])])):(a.value.cls!==void 0&&(s.class+=" "+a.value.cls),h(e.tag,s,H(t.default,[a.value.content])))}}}),Xe={size:{type:[String,Number],default:"1em"},color:String};function Ye(e){return{cSize:c(()=>e.size in te?`${te[e.size]}px`:e.size),classes:c(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const Ze=O({name:"QSpinner",props:{...Xe,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:i}=Ye(e);return()=>h("svg",{class:i.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[h("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function ne(e,t){const i=e.style;for(const n in t)i[n]=t[n]}function Ge(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=Oe(e);if(t)return t.$el||t}function Ct(e,t){if(e==null||e.contains(t)===!0)return!0;for(let i=e.nextElementSibling;i!==null;i=i.nextElementSibling)if(i.contains(t))return!0;return!1}function Je(e,t=250){let i=!1,n;return function(){return i===!1&&(i=!0,setTimeout(()=>{i=!1},t),n=e.apply(this,arguments)),n}}function ce(e,t,i,n){i.modifiers.stop===!0&&xe(e);const o=i.modifiers.color;let a=i.modifiers.center;a=a===!0||n===!0;const s=document.createElement("span"),r=document.createElement("span"),v=Ae(e),{left:f,top:d,width:y,height:l}=t.getBoundingClientRect(),p=Math.sqrt(y*y+l*l),x=p/2,q=`${(y-p)/2}px`,b=a?q:`${v.left-f-x}px`,$=`${(l-p)/2}px`,C=a?$:`${v.top-d-x}px`;r.className="q-ripple__inner",ne(r,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${b},${C},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${o?" text-"+o:""}`,s.setAttribute("dir","ltr"),s.appendChild(r),t.appendChild(s);const P=()=>{s.remove(),clearTimeout(m)};i.abort.push(P);let m=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${q},${$},0) scale3d(1,1,1)`,r.style.opacity=.2,m=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,m=setTimeout(()=>{s.remove(),i.abort.splice(i.abort.indexOf(P),1)},275)},250)},50)}function de(e,{modifiers:t,value:i,arg:n}){const o=Object.assign({},e.cfg.ripple,t,i);e.modifiers={early:o.early===!0,stop:o.stop===!0,center:o.center===!0,color:o.color||n,keyCodes:[].concat(o.keyCodes||13)}}const et=_e({name:"ripple",beforeMount(e,t){const i=t.instance.$.appContext.config.globalProperties.$q.config||{};if(i.ripple===!1)return;const n={cfg:i,enabled:t.value!==!1,modifiers:{},abort:[],start(o){n.enabled===!0&&o.qSkipRipple!==!0&&o.type===(n.modifiers.early===!0?"pointerdown":"click")&&ce(o,e,n,o.qKeyEvent===!0)},keystart:Je(o=>{n.enabled===!0&&o.qSkipRipple!==!0&&G(o,n.modifiers.keyCodes)===!0&&o.type===`key${n.modifiers.early===!0?"down":"up"}`&&ce(o,e,n,!0)},300)};de(n,t),e.__qripple=n,Me(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const i=e.__qripple;i!==void 0&&(i.enabled=t.value!==!1,i.enabled===!0&&Object(t.value)===t.value&&de(i,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(i=>{i()}),je(t,"main"),delete e._qripple)}}),Pe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},tt=Object.keys(Pe),nt={align:{type:String,validator:e=>tt.includes(e)}};function it(e){return c(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Pe[t]}`})}function Rt(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function rt(e){return e.appContext.config.globalProperties.$router!==void 0}function Pt(e){return e.isUnmounted===!0||e.isDeactivated===!0}function fe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ve(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ot(e,t){for(const i in t){const n=t[i],o=e[i];if(typeof n=="string"){if(n!==o)return!1}else if(Array.isArray(o)===!1||o.length!==n.length||n.some((a,s)=>a!==o[s]))return!1}return!0}function ge(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((i,n)=>i===t[n]):e.length===1&&e[0]===t}function lt(e,t){return Array.isArray(e)===!0?ge(e,t):Array.isArray(t)===!0?ge(t,e):e===t}function at(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const i in e)if(lt(e[i],t[i])===!1)return!1;return!0}const Te={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},Tt={...Te,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function st({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const i=_(),{props:n,proxy:o,emit:a}=i,s=rt(i),r=c(()=>n.disable!==!0&&n.href!==void 0),v=t===!0?c(()=>s===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):c(()=>s===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),f=c(()=>v.value===!0?C(n.to):null),d=c(()=>f.value!==null),y=c(()=>r.value===!0||d.value===!0),l=c(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),p=c(()=>r.value===!0?{href:n.href,target:n.target}:d.value===!0?{href:f.value.href,target:n.target}:{}),x=c(()=>{if(d.value===!1)return-1;const{matched:g}=f.value,{length:w}=g,k=g[w-1];if(k===void 0)return-1;const E=o.$route.matched;if(E.length===0)return-1;const R=E.findIndex(ve.bind(null,k));if(R!==-1)return R;const N=fe(g[w-2]);return w>1&&fe(k)===N&&E[E.length-1].path!==N?E.findIndex(ve.bind(null,g[w-2])):R}),q=c(()=>d.value===!0&&x.value!==-1&&ot(o.$route.params,f.value.params)),b=c(()=>q.value===!0&&x.value===o.$route.matched.length-1&&at(o.$route.params,f.value.params)),$=c(()=>d.value===!0?b.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":q.value===!0?` ${n.activeClass}`:"":"");function C(g){try{return o.$router.resolve(g)}catch{}return null}function P(g,{returnRouterError:w,to:k=n.to,replace:E=n.replace}={}){if(n.disable===!0)return g.preventDefault(),Promise.resolve(!1);if(g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.button!==void 0&&g.button!==0||n.target==="_blank")return Promise.resolve(!1);g.preventDefault();const R=o.$router[E===!0?"replace":"push"](k);return w===!0?R:R.then(()=>{}).catch(()=>{})}function m(g){if(d.value===!0){const w=k=>P(g,k);a("click",g,w),g.defaultPrevented!==!0&&w()}else a("click",g)}return{hasRouterLink:d,hasHrefLink:r,hasLink:y,linkTag:l,resolvedLink:f,linkIsActive:q,linkIsExactActive:b,linkClass:$,linkAttrs:p,getLink:C,navigateToRouterLink:P,navigateOnClick:m}}const he={none:0,xs:4,sm:8,md:16,lg:24,xl:32},ut={xs:8,sm:10,md:14,lg:20,xl:24},ct=["button","submit","reset"],dt=/[^\s]\/[^\s]/,ft=["flat","outline","push","unelevated"];function ze(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}function zt(e){const t=ze(e);return t!==void 0?{[t]:!0}:{}}const vt={...qe,...Te,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ft.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...nt.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},gt={...vt,round:Boolean};function ht(e){const t=Ee(e,ut),i=it(e),{hasRouterLink:n,hasLink:o,linkTag:a,linkAttrs:s,navigateOnClick:r}=st({fallbackTag:"button"}),v=c(()=>{const b=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},b,{padding:e.padding.split(/\s+/).map($=>$ in he?he[$]+"px":$).join(" "),minWidth:"0",minHeight:"0"}):b}),f=c(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=c(()=>e.disable!==!0&&e.loading!==!0),y=c(()=>d.value===!0?e.tabindex||0:-1),l=c(()=>ze(e,"standard")),p=c(()=>{const b={tabindex:y.value};return o.value===!0?Object.assign(b,s.value):ct.includes(e.type)===!0&&(b.type=e.type),a.value==="a"?(e.disable===!0?b["aria-disabled"]="true":b.href===void 0&&(b.role="button"),n.value!==!0&&dt.test(e.type)===!0&&(b.type=e.type)):e.disable===!0&&(b.disabled="",b["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(b,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),b}),x=c(()=>{let b;e.color!==void 0?e.flat===!0||e.outline===!0?b=`text-${e.textColor||e.color}`:b=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(b=`text-${e.textColor}`);const $=e.round===!0?"round":`rectangle${f.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${$}`+(b!==void 0?" "+b:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),q=c(()=>i.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:x,style:v,innerClasses:q,attributes:p,hasLink:o,linkTag:a,navigateOnClick:r,isActionable:d}}const{passiveCapture:L}=U;let j=null,A=null,Q=null;const Bt=O({name:"QBtn",props:{...gt,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:i}){const{proxy:n}=_(),{classes:o,style:a,innerClasses:s,attributes:r,hasLink:v,linkTag:f,navigateOnClick:d,isActionable:y}=ht(e),l=z(null),p=z(null);let x=null,q,b=null;const $=c(()=>e.label!==void 0&&e.label!==null&&e.label!==""),C=c(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:v.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),P=c(()=>({center:e.round})),m=c(()=>{const u=Math.max(0,Math.min(100,e.percentage));return u>0?{transition:"transform 0.6s",transform:`translateX(${u-100}%)`}:{}}),g=c(()=>{if(e.loading===!0)return{onMousedown:F,onTouchstart:F,onClick:F,onKeydown:F,onKeyup:F};if(y.value===!0){const u={onClick:k,onKeydown:E,onMousedown:N};if(n.$q.platform.has.touch===!0){const S=e.onTouchstart!==void 0?"":"Passive";u[`onTouchstart${S}`]=R}return u}return{onClick:M}}),w=c(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+o.value,style:a.value,...r.value,...g.value}));function k(u){if(l.value!==null){if(u!==void 0){if(u.defaultPrevented===!0)return;const S=document.activeElement;if(e.type==="submit"&&S!==document.body&&l.value.contains(S)===!1&&S.contains(l.value)===!1){l.value.focus();const W=()=>{document.removeEventListener("keydown",M,!0),document.removeEventListener("keyup",W,L),l.value!==null&&l.value.removeEventListener("blur",W,L)};document.addEventListener("keydown",M,!0),document.addEventListener("keyup",W,L),l.value.addEventListener("blur",W,L)}}d(u)}}function E(u){l.value!==null&&(i("keydown",u),G(u,[13,32])===!0&&A!==l.value&&(A!==null&&D(),u.defaultPrevented!==!0&&(l.value.focus(),A=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",T,!0),l.value.addEventListener("blur",T,L)),M(u)))}function R(u){l.value!==null&&(i("touchstart",u),u.defaultPrevented!==!0&&(j!==l.value&&(j!==null&&D(),j=l.value,x=u.target,x.addEventListener("touchcancel",T,L),x.addEventListener("touchend",T,L)),q=!0,b!==null&&clearTimeout(b),b=setTimeout(()=>{b=null,q=!1},200)))}function N(u){l.value!==null&&(u.qSkipRipple=q===!0,i("mousedown",u),u.defaultPrevented!==!0&&Q!==l.value&&(Q!==null&&D(),Q=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",T,L)))}function T(u){if(l.value!==null&&!(u!==void 0&&u.type==="blur"&&document.activeElement===l.value)){if(u!==void 0&&u.type==="keyup"){if(A===l.value&&G(u,[13,32])===!0){const S=new MouseEvent("click",u);S.qKeyEvent=!0,u.defaultPrevented===!0&&Qe(S),u.cancelBubble===!0&&xe(S),l.value.dispatchEvent(S),M(u),u.qKeyEvent=!0}i("keyup",u)}D()}}function D(u){const S=p.value;u!==!0&&(j===l.value||Q===l.value)&&S!==null&&S!==document.activeElement&&(S.setAttribute("tabindex",-1),S.focus()),j===l.value&&(x!==null&&(x.removeEventListener("touchcancel",T,L),x.removeEventListener("touchend",T,L)),j=x=null),Q===l.value&&(document.removeEventListener("mouseup",T,L),Q=null),A===l.value&&(document.removeEventListener("keyup",T,!0),l.value!==null&&l.value.removeEventListener("blur",T,L),A=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function F(u){M(u),u.qSkipRipple=!0}return V(()=>{D(!0)}),Object.assign(n,{click:u=>{y.value===!0&&k(u)}}),()=>{let u=[];e.icon!==void 0&&u.push(h(ue,{name:e.icon,left:e.stack!==!0&&$.value===!0,role:"img","aria-hidden":"true"})),$.value===!0&&u.push(h("span",{class:"block"},[e.label])),u=H(t.default,u),e.iconRight!==void 0&&e.round===!1&&u.push(h(ue,{name:e.iconRight,right:e.stack!==!0&&$.value===!0,role:"img","aria-hidden":"true"}));const S=[h("span",{class:"q-focus-helper",ref:p})];return e.loading===!0&&e.percentage!==void 0&&S.push(h("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[h("span",{class:"q-btn__progress-indicator fit block",style:m.value})])),S.push(h("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+s.value},u)),e.loading!==null&&S.push(h(He,{name:"q-transition--fade"},()=>e.loading===!0?[h("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[h(Ze)])]:null)),pe(h(f.value,w.value,S),[[et,C.value,void 0,P.value]])}}}),Ot=O({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:i}}=_(),n=J(ie,B);if(n===B)return console.error("QPage needs to be a deep child of QLayout"),B;if(J(we,B)===B)return console.error("QPage needs to be child of QPageContainer"),B;const a=c(()=>{const r=(n.header.space===!0?n.header.size:0)+(n.footer.space===!0?n.footer.size:0);if(typeof e.styleFn=="function"){const v=n.isContainer.value===!0?n.containerHeight.value:i.screen.height;return e.styleFn(r,v)}return{minHeight:n.isContainer.value===!0?n.containerHeight.value-r+"px":i.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":i.screen.height-r+"px"}}),s=c(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:s.value,style:a.value},re(t.default))}}),_t=O({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:i}}=_(),n=J(ie,B);if(n===B)return console.error("QPageContainer needs to be child of QLayout"),B;ke(we,!0);const o=c(()=>{const a={};return n.header.space===!0&&(a.paddingTop=`${n.header.size}px`),n.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(a.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),a});return()=>h("div",{class:"q-page-container",style:o.value},re(t.default))}}),mt=[Element,String],bt=[null,document,document.body,document.scrollingElement,document.documentElement];function yt(e,t){let i=Ge(t);if(i===void 0){if(e==null)return window;i=e.closest(".scroll,.scroll-y,.overflow-auto")}return bt.includes(i)?window:i}function pt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function xt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let I;function Z(){if(I!==void 0)return I;const e=document.createElement("p"),t=document.createElement("div");ne(e,{width:"100%",height:"200px"}),ne(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const i=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return i===n&&(n=t.clientWidth),t.remove(),I=i-n,I}function Mt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const{passive:me}=U,wt=["both","horizontal","vertical"],kt=O({name:"QScrollObserver",props:{axis:{type:String,validator:e=>wt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:mt},emits:["scroll"],setup(e,{emit:t}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,o,a;ee(()=>e.scrollTarget,()=>{v(),r()});function s(){n!==null&&n();const y=Math.max(0,pt(o)),l=xt(o),p={top:y-i.position.top,left:l-i.position.left};if(e.axis==="vertical"&&p.top===0||e.axis==="horizontal"&&p.left===0)return;const x=Math.abs(p.top)>=Math.abs(p.left)?p.top<0?"up":"down":p.left<0?"left":"right";i.position={top:y,left:l},i.directionChanged=i.direction!==x,i.delta=p,i.directionChanged===!0&&(i.direction=x,i.inflectionPoint=i.position),t("scroll",{...i})}function r(){o=yt(a,e.scrollTarget),o.addEventListener("scroll",f,me),f(!0)}function v(){o!==void 0&&(o.removeEventListener("scroll",f,me),o=void 0)}function f(y){if(y===!0||e.debounce===0||e.debounce==="0")s();else if(n===null){const[l,p]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];n=()=>{p(l),n=null}}}const{proxy:d}=_();return ee(()=>d.$q.lang.rtl,s),X(()=>{a=d.$el.parentNode,r()}),V(()=>{n!==null&&n(),v()}),Object.assign(d,{trigger:f,getPosition:()=>i}),Se}});function St(){const e=z(!$e.value);return e.value===!1&&X(()=>{e.value=!0}),{isHydrated:e}}const Be=typeof ResizeObserver<"u",be=Be===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},ye=O({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let i=null,n,o={width:-1,height:-1};function a(v){v===!0||e.debounce===0||e.debounce==="0"?s():i===null&&(i=setTimeout(s,e.debounce))}function s(){if(i!==null&&(clearTimeout(i),i=null),n){const{offsetWidth:v,offsetHeight:f}=n;(v!==o.width||f!==o.height)&&(o={width:v,height:f},t("resize",o))}}const{proxy:r}=_();if(r.trigger=a,Be===!0){let v;const f=d=>{n=r.$el.parentNode,n?(v=new ResizeObserver(a),v.observe(n),s()):d!==!0&&oe(()=>{f(!0)})};return X(()=>{f()}),V(()=>{i!==null&&clearTimeout(i),v!==void 0&&(v.disconnect!==void 0?v.disconnect():n&&v.unobserve(n))}),Se}else{let v=function(){i!==null&&(clearTimeout(i),i=null),y!==void 0&&(y.removeEventListener!==void 0&&y.removeEventListener("resize",a,U.passive),y=void 0)},f=function(){v(),n&&n.contentDocument&&(y=n.contentDocument.defaultView,y.addEventListener("resize",a,U.passive),s())};const{isHydrated:d}=St();let y;return X(()=>{oe(()=>{n=r.$el,n&&f()})}),V(v),()=>{if(d.value===!0)return h("object",{class:"q--avoid-card-border",style:be.style,tabindex:-1,type:"text/html",data:be.url,"aria-hidden":"true",onLoad:f})}}}}),jt=O({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:i}){const{proxy:{$q:n}}=_(),o=z(null),a=z(n.screen.height),s=z(e.container===!0?0:n.screen.width),r=z({position:0,direction:"down",inflectionPoint:0}),v=z(0),f=z($e.value===!0?0:Z()),d=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=c(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),l=c(()=>f.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${f.value}px`}:null),p=c(()=>f.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${f.value}px`,width:`calc(100% + ${f.value}px)`}:null);function x(m){if(e.container===!0||document.qScrollPrevented!==!0){const g={position:m.position.top,direction:m.direction,directionChanged:m.directionChanged,inflectionPoint:m.inflectionPoint.top,delta:m.delta.top};r.value=g,e.onScroll!==void 0&&i("scroll",g)}}function q(m){const{height:g,width:w}=m;let k=!1;a.value!==g&&(k=!0,a.value=g,e.onScrollHeight!==void 0&&i("scrollHeight",g),$()),s.value!==w&&(k=!0,s.value=w),k===!0&&e.onResize!==void 0&&i("resize",m)}function b({height:m}){v.value!==m&&(v.value=m,$())}function $(){if(e.container===!0){const m=a.value>v.value?Z():0;f.value!==m&&(f.value=m)}}let C=null;const P={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:o,height:a,containerHeight:v,scrollbarWidth:f,totalWidth:c(()=>s.value+f.value),rows:c(()=>{const m=e.view.toLowerCase().split(" ");return{top:m[0].split(""),middle:m[1].split(""),bottom:m[2].split("")}}),header:K({size:0,offset:0,space:!1}),right:K({size:300,offset:0,space:!1}),footer:K({size:0,offset:0,space:!1}),left:K({size:300,offset:0,space:!1}),scroll:r,animate(){C!==null?clearTimeout(C):document.body.classList.add("q-body--layout-animate"),C=setTimeout(()=>{C=null,document.body.classList.remove("q-body--layout-animate")},155)},update(m,g,w){P[m][g]=w}};if(ke(ie,P),Z()>0){let m=function(){k=null,E.classList.remove("hide-scrollbar")},g=function(){if(k===null){if(E.scrollHeight>n.screen.height)return;E.classList.add("hide-scrollbar")}else clearTimeout(k);k=setTimeout(m,300)},w=function(R){k!==null&&R==="remove"&&(clearTimeout(k),m()),window[`${R}EventListener`]("resize",g)},k=null;const E=document.body;ee(()=>e.container!==!0?"add":"remove",w),e.container!==!0&&w("add"),De(()=>{w("remove")})}return()=>{const m=H(t.default,[h(kt,{onScroll:x}),h(ye,{onResize:q})]),g=h("div",{class:d.value,style:y.value,ref:e.container===!0?void 0:o,tabindex:-1},m);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:o},[h(ye,{onResize:b}),h("div",{class:"absolute-full",style:l.value},[h("div",{class:"scroll",style:p.value},[g])])]):g}}});export{jt as Q,et as R,Ot as a,Bt as b,_t as c,Ee as d,ue as e,Et as f,Tt as g,Lt as h,st as i,qt as j,re as k,Z as l,yt as m,Ct as n,H as o,zt as p,Rt as q,Pt as r,mt as s,xt as t,qe as u,rt as v,pt as w,Mt as x,Ze as y};