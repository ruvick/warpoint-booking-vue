import{a as f,Q as h,b as _}from"./axios-D7vZYYcE.js";import{Q as k,a as v,c as C}from"./QLayout-ClYczOob.js";import{u as b,r as p,q as x,o as n,c as u,w as o,b as r,d,e as y,R as Q,Q as q,f as w,L as M}from"./index-Esmsc9vZ.js";import{_ as V}from"./Header-B35RXNc8.js";import"./use-dark-nSKCGpWu.js";import"./option-sizes-BScsjctq.js";import"./private.use-form-F1qZ0UlW.js";import"./focus-manager-BJWzFvJg.js";const B={RU:"+7(###) - ### - ## - ##",BY:"+375(##) - ### - ## - ##",KZ:"+7(###) - ### - ## - ##",KG:"+996(###) - ### - ## - ##",UZ:"+998(##) - ### - ## - ##"},L=a=>B[a]||"+#(###) - ### - ## - ##",P=async()=>{try{return(await f.get("https://restcountries.com/v3.1/all")).data.map(e=>({name:e.translations.rus.common,flag:e.flags.svg,phoneMask:L(e.cca2)})).filter(e=>["Россия","Беларусь","Казахстан","Кыргызстан","Узбекистан"].includes(e.name))}catch(a){throw console.error("Error fetching countries:",a),a}},R={class:"page-internal container-md column items-start q-pt-md q-pb-md"},S=["src"],D={__name:"CountryPage",setup(a){const l=b(),e=p(""),c=p([]),g=s=>{sessionStorage.setItem("selectedCountry",s.name),sessionStorage.setItem("selectedCountryFlag",s.flag),sessionStorage.setItem("selectedPhoneMask",s.phoneMask),l.push({name:"main"})};return x(async()=>{try{c.value=await P()}catch(s){console.error("Error fetching countries:",s)}}),(s,m)=>(n(),u(k,null,{default:o(()=>[r(C,{class:"my-page-container body--grey"},{default:o(()=>[r(v,{class:"page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm"},{default:o(()=>[r(V),d("div",R,[r(h,{class:"col-md-4 column items-start"},{default:o(()=>[(n(!0),y(q,null,Q(c.value,t=>(n(),u(_,{key:t.name,name:"shape",modelValue:e.value,"onUpdate:modelValue":m[0]||(m[0]=i=>e.value=i),val:t.name,label:t.name,onClick:i=>g(t)},{label:o(()=>[d("img",{src:t.flag,alt:"",style:{width:"20px",height:"15px","margin-right":"8px"}},null,8,S),w(" "+M(t.name),1)]),_:2},1032,["modelValue","val","label","onClick"]))),128))]),_:1})])]),_:1})]),_:1})]),_:1}))}};export{D as default};