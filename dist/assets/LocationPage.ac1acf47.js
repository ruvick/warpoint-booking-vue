import{Q as h,a as C,c as f}from"./QLayout.9e19426d.js";import{o as s,e as r,d as t,_ as n,a1 as l,u as p,r as v,Q as k,c as y,w as g,b as a}from"./index.b6191416.js";import{_ as L}from"./Header.6e56d6d0.js";const b={class:"location-card column items-start"},w={class:"location-card__header header-location-card row q-mb-xl"},S={class:"header-location-card__left col"},q={key:0,class:"header-location-card__title q-mb-xs"},x={key:1,class:"header-location-card__subtitle"},W={class:"header-location-card__right col-auto column items-center"},A=t("div",{class:"header-location-card__rating"},[t("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M11.9998 17.75L5.82784 20.995L7.00684 14.122L2.00684 9.25495L8.90684 8.25495L11.9928 2.00195L15.0788 8.25495L21.9788 9.25495L16.9788 14.122L18.1578 20.995L11.9998 17.75Z",fill:"#C4C8CF",stroke:"#C4C8CF","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"round"})])],-1),Q={key:0,class:"header-location-card__grade"},$={class:"location-card__footer footer-location-card column items-start"},B=t("div",{class:"footer-location-card__map-icon"},[t("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("g",{opacity:"0.4"},[t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.25 10.4167C3.25 5.62281 7.17493 1.75 12 1.75C16.8251 1.75 20.75 5.62281 20.75 10.4167C20.75 13.3982 19.0113 16.3409 17.1686 18.4829C16.236 19.5669 15.2463 20.482 14.3733 21.1328C13.9374 21.4577 13.5186 21.7258 13.1405 21.9162C12.786 22.0947 12.3812 22.25 12 22.25C11.6188 22.25 11.214 22.0947 10.8595 21.9162C10.4814 21.7258 10.0626 21.4577 9.62674 21.1328C8.75371 20.482 7.76395 19.5669 6.83144 18.4829C4.98872 16.3409 3.25 13.3982 3.25 10.4167ZM12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13Z",fill:"#C4C8CF"})])])],-1),M={key:0,class:"footer-location-card__address"},N={key:1,class:"footer-location-card__metro"},i={__name:"CardLocation",props:{title:{type:String,required:!0},subtitle:{type:String,default:""},rating:{type:Number,default:0},address:{type:String,required:!0},metro:{type:String,default:""}},emits:["select"],setup(e,{emit:_}){const c=e,o=_,d=()=>{o("select",{title:c.title,address:c.address})};return(m,u)=>(s(),r("div",{class:"location-card-column row col-xs-12 col-sm-6 col-md-4",onClick:d},[t("div",b,[t("div",w,[t("div",S,[e.title?(s(),r("div",q,n(e.title),1)):l("",!0),e.subtitle?(s(),r("div",x,n(e.subtitle),1)):l("",!0)]),t("div",W,[A,e.rating?(s(),r("div",Q,n(e.rating),1)):l("",!0)])]),t("div",$,[B,e.address?(s(),r("div",M,n(e.address),1)):l("",!0),e.metro?(s(),r("div",N,"\u041C\u0435\u0442\u0440\u043E: "+n(e.metro),1)):l("",!0)])])]))}},P={class:"location-cards row container-md q-pt-md q-pb-md"},j={__name:"LocationPage",setup(e){const _=p(),c=v(""),o=({title:d,address:m})=>{const u=`${d} (${m})`;c.value=u,sessionStorage.setItem("selectedLocation",u),_.push({name:"main"})};return k("selectedLocation",c),(d,m)=>(s(),y(h,null,{default:g(()=>[a(f,{class:"my-page-container body--grey"},{default:g(()=>[a(C,{class:"page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm"},{default:g(()=>[a(L),t("div",P,[a(i,{title:"\u0422\u0420\u0426 \xAB\u0410\u0432\u0438\u0430\u043F\u0430\u0440\u043A\xBB",subtitle:"Warpoint Park",rating:"4.8",address:"\u0425\u043E\u0434\u044B\u043D\u0441\u043A\u0438\u0439 \u0431\u0443\u043B\u044C\u0432\u0430\u0440, 4",metro:"\u0426\u0421\u041A\u0410",onSelect:o}),a(i,{title:"\u0410\u043A\u0430\u0434\u0435\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F",subtitle:"Warpoint Arena",rating:"4.6",address:"\u0443\u043B. \u0412\u0438\u043D\u043E\u043A\u0443\u0440\u043E\u0432\u0430 4 k1",metro:"\u0410\u043A\u0430\u0434\u0435\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F",onSelect:o}),a(i,{title:"\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434\u0441\u043A\u0438\u0439 \u043F\u0440-\u0442",subtitle:"Warpoint Arena",rating:"5.0",address:"\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434\u0441\u043A\u0438\u0439 \u043F\u0440-\u0442 32 k8",metro:"\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434\u0441\u043A\u0438\u0439 \u043F\u0440-\u0442",onSelect:o}),a(i,{title:"\u0422\u0420\u041A \xABMari",subtitle:"Warpoint Arena",rating:"5.0",address:"\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434\u0441\u043A\u0438\u0439 \u043F\u0440-\u0442 32 k8",metro:"\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434\u0441\u043A\u0438\u0439 \u043F\u0440-\u0442",onSelect:o}),a(i,{title:"\u0410\u043A\u0430\u0434\u0435\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F",subtitle:"Warpoint Arena",rating:"4.6",address:"\u0443\u043B. \u0412\u0438\u043D\u043E\u043A\u0443\u0440\u043E\u0432\u0430 4 k1",metro:"\u0410\u043A\u0430\u0434\u0435\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F",onSelect:o}),a(i,{title:"\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434\u0441\u043A\u0438\u0439 \u043F\u0440-\u0442",subtitle:"Warpoint Arena",rating:"5.0",address:"\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434\u0441\u043A\u0438\u0439 \u043F\u0440-\u0442 32 k8",metro:"\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434\u0441\u043A\u0438\u0439 \u043F\u0440-\u0442",onSelect:o})])]),_:1})]),_:1})]),_:1}))}};export{j as default};
