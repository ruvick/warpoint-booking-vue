import{Q as r}from"./QInput-D0fgkvee.js";import{Q as O}from"./QCheckbox-S-bD6m_N.js";import{k as Y,b as v,Q as me,a as _e,c as pe}from"./QLayout-ClYczOob.js";import{l as ve,m as he,k as ge,Q as z}from"./QToggle-DGXe9RhH.js";import{g as ee,i as te,j as se,h as Ce,V as be,k as Le,o as h,e as B,b as a,w as l,d as e,u as we,r as n,m,q as fe,c as S,N as C,L as H,O as j,W as J,X as ke}from"./index-Esmsc9vZ.js";import{u as ye,a as qe}from"./use-dark-nSKCGpWu.js";import{_ as xe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./focus-manager-BJWzFvJg.js";import"./private.use-form-F1qZ0UlW.js";import"./option-sizes-BScsjctq.js";import"./use-timeout-DL8S3auP.js";const K=ee({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(i,{slots:d}){const c=te(()=>`q-card__section q-card__section--${i.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>se(i.tag,{class:c.value},Y(d.default))}}),R=ee({name:"QCard",props:{...ye,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(i,{slots:d}){const{proxy:{$q:c}}=Ce(),_=qe(i,c),p=te(()=>"q-card"+(_.value===!0?" q-card--dark q-dark":"")+(i.bordered===!0?" q-card--bordered":"")+(i.square===!0?" q-card--square no-border-radius":"")+(i.flat===!0?" q-card--flat no-shadow":""));return()=>se(i.tag,{class:p.value},Y(d.default))}});function W(i){if(i===!1)return 0;if(i===!0||i===void 0)return 1;const d=parseInt(i,10);return isNaN(d)?0:d}const Me=be({name:"close-popup",beforeMount(i,{value:d}){const c={depth:W(d),handler(_){c.depth!==0&&setTimeout(()=>{const p=ve(i);p!==void 0&&he(p,_,c.depth)})},handlerKey(_){Le(_,13)===!0&&c.handler(_)}};i.__qclosepopup=c,i.addEventListener("click",c.handler),i.addEventListener("keyup",c.handlerKey)},updated(i,{value:d,oldValue:c}){d!==c&&(i.__qclosepopup.depth=W(d))},beforeUnmount(i){const d=i.__qclosepopup;i.removeEventListener("click",d.handler),i.removeEventListener("keyup",d.handlerKey),delete i.__qclosepopup}}),Ve={},Ze={class:"page-main__header header-page-main header-page-main--bg row items-center"},Se={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{"margin-right":"4px"}},Be=e("path",{d:"M12.5 5L7.5 10L12.5 15",stroke:"#C4C8CF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Ie=[Be],Ue=e("span",null,"На сайт",-1);function De(i,d){return h(),B("div",Ze,[a(v,{class:"no-hover",primary:"",href:"https://kursk.warpoint.ru",style:{"font-size":"11px",color:"#C4C8CF",border:"1px solid #30343B","border-radius":"24px"}},{default:l(()=>[(h(),B("svg",Se,Ie)),Ue]),_:1})])}const je=xe(Ve,[["render",De]]),Fe={class:"page-main__body body-main q-pt-lg q-pb-lg"},Qe={class:"body-main__inner row container-md"},$e={class:"card-column row col-xs-12 col-sm-6 col-md-4"},Pe={class:"card-main q-pt-lg q-pl-lg q-pr-lg q-pb-xl",style:{}},He=e("div",{class:"card-main__header row items-center q-mb-xl"},[e("div",{class:"card-main__title text-h8 text-dark-10"},"01. Место")],-1),Ne={class:"card-main__body"},Ee={class:"input-main q-mb-lg"},Ae=e("div",{class:"input-main__label"},"Страна",-1),Ge={class:"input-main__flag"},Te=["src"],Oe=e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M7.5 5L12.5 10L7.5 15",stroke:"#C4C8CF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ze={class:"input-main q-mb-lg"},Je=e("div",{class:"input-main__label"},"Город",-1),Ke=e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M7.5 5L12.5 10L7.5 15",stroke:"#C4C8CF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Re={class:"input-main"},We=e("div",{class:"input-main__label"},"Локация",-1),Xe=e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M7.5 5L12.5 10L7.5 15",stroke:"#C4C8CF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Ye={class:"card-column row col-xs-12 col-sm-6 col-md-4"},e1={class:"card-main q-pt-lg q-pl-lg q-pr-lg q-pb-xl"},t1=e("div",{class:"card-main__header row items-center q-mb-xl"},[e("div",{class:"card-main__title text-h8 text-dark-10"},"02. Игра")],-1),s1={class:"card-main__body"},o1={class:"input-main q-mb-lg"},a1=e("div",{class:"input-main__label"},"Игровая зона / мероприятие",-1),l1=e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M7.5 5L12.5 10L7.5 15",stroke:"#C4C8CF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),i1={class:"input-main q-mb-lg"},n1=e("div",{class:"input-main__label"},"Услуга",-1),d1=e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M7.5 5L12.5 10L7.5 15",stroke:"#C4C8CF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),c1={class:"card-column row col-xs-12 col-sm-6 col-md-4"},r1={class:"card-main q-pt-lg q-pl-lg q-pr-lg q-pb-xl"},u1=e("div",{class:"card-main__header row items-center q-mb-xl"},[e("div",{class:"card-main__title text-h8 text-dark-10"},"03. дата и время")],-1),m1={class:"card-main__body"},_1={class:"input-main q-mb-lg"},p1=e("div",{class:"input-main__label"},"Когда и во сколько",-1),v1=e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M7.5 5L12.5 10L7.5 15",stroke:"#C4C8CF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),h1={class:"card-column row col-xs-12 col-sm-6 col-md-4"},g1={class:"card-main q-pt-lg q-pl-lg q-pr-lg q-pb-xl",style:{}},C1=e("div",{class:"card-main__header row items-center q-mb-xl"},[e("div",{class:"card-main__title text-h8 text-dark-10"},"04. Ваши данные")],-1),b1={class:"card-main__body"},L1={class:"input-main q-mb-lg"},w1=e("div",{class:"input-main__label"},"Имя",-1),f1={class:"input-main q-mb-lg"},k1=e("div",{class:"input-main__label"},"Телефон",-1),y1={class:"input-main__flag"},q1=["src"],x1={class:"input-main q-mb-lg"},M1=e("div",{class:"input-main__label"},"Email",-1),V1={class:"input-main"},Z1=e("div",{class:"input-main__label"},"Соглашение",-1),S1={class:"card-column row col-xs-12 col-sm-6 col-md-4"},B1={class:"card-main q-pt-lg"},I1=e("div",{class:"card-main__header row items-center q-pl-lg q-pr-lg q-mb-xl"},[e("div",{class:"card-main__title text-h8 text-dark-10"},"05. Бронирование")],-1),U1={class:"card-main__body q-pl-lg q-pr-lg q-pb-xl"},D1={class:"input-main input-main--dooble q-pt-sm q-pb-lg q-mb-lg"},j1=e("div",{class:"input-main__label q-mb-md"},"Участники",-1),F1={class:"input-main__body row items-center justify-between"},Q1={class:"col-auto"},$1={class:"participants row items-center"},P1={class:"participants__item participants__item--start"},H1=e("div",{class:"participants__item"},"/",-1),N1=e("div",{class:"participants__item"},"10",-1),E1={class:"col-auto"},A1={class:"quantity row items-center",style:{gap:"4px"}},G1={class:"input-main input-main--dooble q-pt-sm q-pb-md q-mb-lg"},T1=e("div",{class:"input-main__label q-mb-sm"},"Подарочный сертификат",-1),O1={class:"input-main__body body-input-cert row items-center justify-between"},z1={class:"col-auto",style:{width:"100%"}},J1={class:"body-input-cert__top input col row items-center",style:{"min-height":"56px"}},K1=e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M7.5 5L12.5 10L7.5 15",stroke:"#C4C8CF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),R1={key:0,class:"body-input-cert__bottom input-cert-action row items-center justify-between q-mt-md",style:{gap:"8px"}},W1={class:"input-cert-action__item item-cert-action column items-start justify-between q-pt-md q-pr-md q-pl-md"},X1=e("div",{class:"item-cert-action__name"},"Баланс",-1),Y1={class:"item-cert-action__value row items-center"},et={class:"input-cert-action__item item-cert-action column items-start justify-between q-pt-md q-pr-md q-pl-md"},tt=e("div",{class:"item-cert-action__name"},"Списать",-1),st={class:"item-cert-action__value row items-center"},ot={class:"input-main input-main--dooble q-pt-sm q-pb-lg q-mb-lg"},at=e("div",{class:"input-main__label q-mb-md"},"Баллы",-1),lt={class:"input-main__body row items-center justify-between"},it={class:"col-auto"},nt=e("div",{class:"col-auto row items-center"},[e("div",{class:"ball-price q-mr-xs"},"500 ₽"),e("div",{class:"ball-icon q-mt-xs"},[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M12 8H12.01M11 12H12V16H13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"#535965","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])])],-1),dt={class:"input-main input-main--dooble q-pt-sm q-mb-lg"},ct=e("div",{class:"input-main__label q-mb-sm"},"Промокод",-1),rt={class:"input-main__body body-input-cert row items-center justify-between"},ut={class:"col-auto",style:{width:"100%"}},mt={class:"body-input-cert__top input col row items-center"},_t=e("span",{class:"block"},"Применить",-1),pt={key:1,class:"sale-block row items-center"},vt=e("div",{class:"sale-block__item"},"-10%",-1),ht=e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("mask",{id:"path-1-inside-1_4_2515",fill:"white"},[e("path",{d:"M15.2502 4.75834C15.1731 4.68108 15.0815 4.61979 14.9807 4.57798C14.8799 4.53616 14.7718 4.51463 14.6627 4.51463C14.5535 4.51463 14.4455 4.53616 14.3447 4.57798C14.2439 4.61979 14.1523 4.68108 14.0752 4.75834L10.0002 8.825L5.92519 4.75C5.84803 4.67285 5.75644 4.61165 5.65564 4.5699C5.55484 4.52814 5.4468 4.50665 5.33769 4.50665C5.22858 4.50665 5.12054 4.52814 5.01973 4.5699C4.91893 4.61165 4.82734 4.67285 4.75019 4.75C4.67303 4.82715 4.61183 4.91875 4.57008 5.01955C4.52833 5.12035 4.50684 5.22839 4.50684 5.3375C4.50684 5.44661 4.52833 5.55465 4.57008 5.65546C4.61183 5.75626 4.67303 5.84785 4.75019 5.925L8.82519 10L4.75019 14.075C4.67303 14.1522 4.61183 14.2437 4.57008 14.3446C4.52833 14.4454 4.50684 14.5534 4.50684 14.6625C4.50684 14.7716 4.52833 14.8797 4.57008 14.9805C4.61183 15.0813 4.67303 15.1729 4.75019 15.25C4.82734 15.3272 4.91893 15.3884 5.01973 15.4301C5.12054 15.4719 5.22858 15.4934 5.33769 15.4934C5.4468 15.4934 5.55484 15.4719 5.65564 15.4301C5.75644 15.3884 5.84803 15.3272 5.92519 15.25L10.0002 11.175L14.0752 15.25C14.1523 15.3272 14.2439 15.3884 14.3447 15.4301C14.4455 15.4719 14.5536 15.4934 14.6627 15.4934C14.7718 15.4934 14.8798 15.4719 14.9806 15.4301C15.0814 15.3884 15.173 15.3272 15.2502 15.25C15.3273 15.1729 15.3885 15.0813 15.4303 14.9805C15.472 14.8797 15.4935 14.7716 15.4935 14.6625C15.4935 14.5534 15.472 14.4454 15.4303 14.3446C15.3885 14.2437 15.3273 14.1522 15.2502 14.075L11.1752 10L15.2502 5.925C15.5669 5.60834 15.5669 5.075 15.2502 4.75834Z"})]),e("path",{d:"M15.2502 4.75834C15.1731 4.68108 15.0815 4.61979 14.9807 4.57798C14.8799 4.53616 14.7718 4.51463 14.6627 4.51463C14.5535 4.51463 14.4455 4.53616 14.3447 4.57798C14.2439 4.61979 14.1523 4.68108 14.0752 4.75834L10.0002 8.825L5.92519 4.75C5.84803 4.67285 5.75644 4.61165 5.65564 4.5699C5.55484 4.52814 5.4468 4.50665 5.33769 4.50665C5.22858 4.50665 5.12054 4.52814 5.01973 4.5699C4.91893 4.61165 4.82734 4.67285 4.75019 4.75C4.67303 4.82715 4.61183 4.91875 4.57008 5.01955C4.52833 5.12035 4.50684 5.22839 4.50684 5.3375C4.50684 5.44661 4.52833 5.55465 4.57008 5.65546C4.61183 5.75626 4.67303 5.84785 4.75019 5.925L8.82519 10L4.75019 14.075C4.67303 14.1522 4.61183 14.2437 4.57008 14.3446C4.52833 14.4454 4.50684 14.5534 4.50684 14.6625C4.50684 14.7716 4.52833 14.8797 4.57008 14.9805C4.61183 15.0813 4.67303 15.1729 4.75019 15.25C4.82734 15.3272 4.91893 15.3884 5.01973 15.4301C5.12054 15.4719 5.22858 15.4934 5.33769 15.4934C5.4468 15.4934 5.55484 15.4719 5.65564 15.4301C5.75644 15.3884 5.84803 15.3272 5.92519 15.25L10.0002 11.175L14.0752 15.25C14.1523 15.3272 14.2439 15.3884 14.3447 15.4301C14.4455 15.4719 14.5536 15.4934 14.6627 15.4934C14.7718 15.4934 14.8798 15.4719 14.9806 15.4301C15.0814 15.3884 15.173 15.3272 15.2502 15.25C15.3273 15.1729 15.3885 15.0813 15.4303 14.9805C15.472 14.8797 15.4935 14.7716 15.4935 14.6625C15.4935 14.5534 15.472 14.4454 15.4303 14.3446C15.3885 14.2437 15.3273 14.1522 15.2502 14.075L11.1752 10L15.2502 5.925C15.5669 5.60834 15.5669 5.075 15.2502 4.75834Z",fill:"#9E9E9E"}),e("path",{d:"M15.2502 4.75834L13.8345 6.1711L13.836 6.17255L15.2502 4.75834ZM14.6627 4.51463V2.51463V4.51463ZM14.0752 4.75834L15.488 6.174L15.4908 6.1711L14.0752 4.75834ZM10.0002 8.825L8.58597 10.2392L9.99874 11.652L11.413 10.2407L10.0002 8.825ZM5.92519 4.75L7.3394 3.33579L5.92519 4.75ZM5.33769 4.50665L5.33769 6.50665L5.33769 4.50665ZM4.50684 5.3375H2.50684H4.50684ZM4.75019 5.925L3.33597 7.33922L4.75019 5.925ZM8.82519 10L10.2394 11.4142L11.6536 10L10.2394 8.58579L8.82519 10ZM4.75019 14.075L3.33597 12.6608H3.33597L4.75019 14.075ZM4.50684 14.6625H6.50684H4.50684ZM5.92519 15.25L4.51097 13.8358H4.51097L5.92519 15.25ZM10.0002 11.175L11.4144 9.76079L10.0002 8.34658L8.58597 9.76079L10.0002 11.175ZM14.0752 15.25L12.661 16.6642L14.0752 15.25ZM15.2502 14.075L16.6644 12.6608L15.2502 14.075ZM11.1752 10L9.76097 8.58579L8.34676 10L9.76097 11.4142L11.1752 10ZM15.2502 5.925L13.836 4.51079V4.51079L15.2502 5.925ZM16.6658 3.34557C16.403 3.08217 16.0907 2.87319 15.747 2.73061L14.2144 6.42534C14.0723 6.36639 13.9432 6.28 13.8345 6.1711L16.6658 3.34557ZM15.747 2.73061C15.4033 2.58803 15.0348 2.51463 14.6627 2.51463V6.51463C14.5088 6.51463 14.3565 6.48429 14.2144 6.42534L15.747 2.73061ZM14.6627 2.51463C14.2906 2.51463 13.9221 2.58803 13.5784 2.73061L15.111 6.42534C14.9689 6.48429 14.8165 6.51463 14.6627 6.51463V2.51463ZM13.5784 2.73061C13.2346 2.87319 12.9224 3.08217 12.6595 3.34557L15.4908 6.1711C15.3822 6.28 15.2531 6.36639 15.111 6.42534L13.5784 2.73061ZM12.6624 3.34268L8.58742 7.40934L11.413 10.2407L15.488 6.174L12.6624 3.34268ZM11.4144 7.41079L7.3394 3.33579L4.51097 6.16422L8.58597 10.2392L11.4144 7.41079ZM7.3394 3.33579C7.07653 3.07292 6.76446 2.8644 6.42101 2.72214L4.89027 6.41766C4.74842 6.3589 4.61954 6.27278 4.51097 6.16422L7.3394 3.33579ZM6.42101 2.72214C6.07755 2.57987 5.70944 2.50665 5.33769 2.50665L5.33769 6.50665C5.18415 6.50665 5.03212 6.47641 4.89027 6.41766L6.42101 2.72214ZM5.33769 2.50665C4.96594 2.50665 4.59782 2.57987 4.25437 2.72214L5.7851 6.41766C5.64325 6.47641 5.49122 6.50665 5.33769 6.50665L5.33769 2.50665ZM4.25437 2.72214C3.91091 2.8644 3.59884 3.07292 3.33597 3.33579L6.1644 6.16422C6.05583 6.27278 5.92695 6.3589 5.7851 6.41766L4.25437 2.72214ZM3.33597 3.33579C3.0731 3.59866 2.86459 3.91073 2.72232 4.25418L6.41784 5.78492C6.35908 5.92677 6.27297 6.05565 6.1644 6.16422L3.33597 3.33579ZM2.72232 4.25418C2.58006 4.59764 2.50684 4.96575 2.50684 5.3375L6.50684 5.3375C6.50684 5.49103 6.4766 5.64307 6.41784 5.78492L2.72232 4.25418ZM2.50684 5.3375C2.50684 5.70925 2.58006 6.07737 2.72232 6.42082L6.41784 4.89009C6.4766 5.03194 6.50684 5.18397 6.50684 5.3375L2.50684 5.3375ZM2.72232 6.42082C2.86459 6.76428 3.0731 7.07635 3.33597 7.33922L6.1644 4.51079C6.27297 4.61936 6.35908 4.74824 6.41784 4.89009L2.72232 6.42082ZM3.33597 7.33922L7.41097 11.4142L10.2394 8.58579L6.1644 4.51079L3.33597 7.33922ZM7.41097 8.58579L3.33597 12.6608L6.1644 15.4892L10.2394 11.4142L7.41097 8.58579ZM3.33597 12.6608C3.0731 12.9237 2.86458 13.2357 2.72232 13.5792L6.41784 15.1099C6.35909 15.2518 6.27297 15.3806 6.1644 15.4892L3.33597 12.6608ZM2.72232 13.5792C2.58006 13.9226 2.50684 14.2908 2.50684 14.6625H6.50684C6.50684 14.816 6.4766 14.9681 6.41784 15.1099L2.72232 13.5792ZM2.50684 14.6625C2.50684 15.0343 2.58006 15.4024 2.72232 15.7458L6.41784 14.2151C6.4766 14.3569 6.50684 14.509 6.50684 14.6625H2.50684ZM2.72232 15.7458C2.86459 16.0893 3.07311 16.4014 3.33597 16.6642L6.1644 13.8358C6.27296 13.9444 6.35908 14.0732 6.41784 14.2151L2.72232 15.7458ZM3.33597 16.6642C3.59884 16.9271 3.91091 17.1356 4.25437 17.2779L5.7851 13.5823C5.92695 13.6411 6.05584 13.7272 6.1644 13.8358L3.33597 16.6642ZM4.25437 17.2779C4.59782 17.4201 4.96594 17.4934 5.33769 17.4934V13.4934C5.49122 13.4934 5.64325 13.5236 5.7851 13.5823L4.25437 17.2779ZM5.33769 17.4934C5.70944 17.4934 6.07755 17.4201 6.42101 17.2779L4.89027 13.5823C5.03212 13.5236 5.18415 13.4934 5.33769 13.4934V17.4934ZM6.42101 17.2779C6.76446 17.1356 7.07653 16.9271 7.3394 16.6642L4.51097 13.8358C4.61954 13.7272 4.74842 13.6411 4.89027 13.5823L6.42101 17.2779ZM7.3394 16.6642L11.4144 12.5892L8.58597 9.76079L4.51097 13.8358L7.3394 16.6642ZM8.58597 12.5892L12.661 16.6642L15.4894 13.8358L11.4144 9.76079L8.58597 12.5892ZM12.661 16.6642C12.9238 16.9271 13.2359 17.1356 13.5794 17.2779L15.1101 13.5823C15.2519 13.6411 15.3808 13.7272 15.4894 13.8358L12.661 16.6642ZM13.5794 17.2779C13.9228 17.4201 14.2909 17.4934 14.6627 17.4934V13.4934C14.8162 13.4934 14.9683 13.5236 15.1101 13.5823L13.5794 17.2779ZM14.6627 17.4934C15.0344 17.4934 15.4025 17.4201 15.746 17.2779L14.2153 13.5823C14.3571 13.5236 14.5092 13.4934 14.6627 13.4934V17.4934ZM15.746 17.2779C16.0895 17.1356 16.4015 16.9271 16.6644 16.6642L13.836 13.8358C13.9445 13.7272 14.0734 13.6411 14.2153 13.5823L15.746 17.2779ZM16.6644 16.6642C16.9273 16.4014 17.1358 16.0893 17.2781 15.7458L13.5825 14.2151C13.6413 14.0732 13.7274 13.9443 13.836 13.8358L16.6644 16.6642ZM17.2781 15.7458C17.4203 15.4024 17.4935 15.0343 17.4935 14.6625H13.4935C13.4935 14.509 13.5238 14.3569 13.5825 14.2151L17.2781 15.7458ZM17.4935 14.6625C17.4935 14.2908 17.4203 13.9226 17.2781 13.5792L13.5825 15.1099C13.5238 14.9681 13.4935 14.816 13.4935 14.6625H17.4935ZM17.2781 13.5792C17.1358 13.2357 16.9273 12.9237 16.6644 12.6608L13.836 15.4892C13.7274 15.3806 13.6413 15.2518 13.5825 15.1099L17.2781 13.5792ZM16.6644 12.6608L12.5894 8.58579L9.76097 11.4142L13.836 15.4892L16.6644 12.6608ZM12.5894 11.4142L16.6644 7.33922L13.836 4.51079L9.76097 8.58579L12.5894 11.4142ZM16.6644 7.33922C17.7621 6.2415 17.7621 4.44184 16.6644 3.34412L13.836 6.17255C13.3716 5.70817 13.3716 4.97517 13.836 4.51079L16.6644 7.33922Z",fill:"#535965",mask:"url(#path-1-inside-1_4_2515)"})],-1),gt={class:"input-main input-main--dooble q-pt-sm q-pb-lg q-mb-lg"},Ct=e("div",{class:"input-main__label q-mb-md"},"Сумма заказа",-1),bt={class:"input-main__body row items-center",style:{gap:"5px"}},Lt=e("div",{class:"price-main-old"},"3 000",-1),wt=e("div",{class:"price-main-arrow"},"→",-1),ft={id:"price-order",class:"input-main__price price-main"},kt={class:"input-main input-main--dooble q-pt-sm q-pb-lg"},yt=e("div",{class:"input-main__label q-mb-md"},"Сумма предоплаты",-1),qt={class:"input-main__body row"},xt={id:"prepayment",class:"input-main__price price-main"},Mt={class:"card-main__buttons row q-pb-sm"},Vt=e("span",{class:"block"},"Забронировать",-1),Zt=e("span",{class:"block"},"Перейти к предоплате",-1),St=e("span",{class:"block"},"Еще нет аккаунта?",-1),Bt=e("span",{class:"block"},"Зарегистрироваться",-1),It={class:"autho-card-column col-xs-12 col-sm-6 col-md-4"},Ut={class:"auth-card column items-start q-pt-sm q-pb-lg q-pl-lg q-pr-lg"},Dt=e("div",{class:"auth-card__icon-tap"},null,-1),jt=e("div",{class:"auth-card__header header-auth-card row justify-center q-pt-xl q-pb-xl"},[e("div",{class:"header-auth-card__title col-8"}," Войдите в свой аккаунт, чтобы тратить баллы ")],-1),Ft={class:"auth-card__body body-auth-card"},Qt={class:"input-main q-mb-lg"},$t=e("div",{class:"input-main__label"},"Ваш телефон",-1),Pt=e("div",{class:"input-main__flag"},[e("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_56_2611)"},[e("rect",{width:"25",height:"20",rx:"4",fill:"white"}),e("rect",{y:"8",width:"32",height:"8",fill:"#0077FF"}),e("rect",{y:"16",width:"32",height:"8",fill:"#FB370B"})]),e("defs",null,[e("clipPath",{id:"clip0_56_2611"},[e("rect",{width:"25",height:"20",rx:"4",fill:"white"})])])])],-1),Ht={class:"input-main q-mb-lg"},Nt=e("div",{class:"input-main__label"},"ПИН",-1),Et={class:"input-main q-mb-lg"},At=e("span",{class:"block"},"Отправить еще (48)",-1),Gt={class:"auth-card__footer footer-auth-card"},Tt=e("span",{class:"block"},"Подтвердить",-1),X="../src/assets/flag-def.svg",os={__name:"Main",setup(i){const d=we(),c=n(sessionStorage.getItem("selectedCountryFlag")||X),_=n(sessionStorage.getItem("selectedCountry")||""),p=n(sessionStorage.getItem("selectedCity")||""),f=n(sessionStorage.getItem("selectedLocation")||""),k=n(sessionStorage.getItem("selectedActivity")||""),y=n(sessionStorage.getItem("selectedServices")||""),L=n(sessionStorage.getItem("selectedDateTimeGame")||""),q=n(sessionStorage.getItem("selectedGiftCert")||""),I=n(sessionStorage.getItem("selectedPromocode")||""),U=n(sessionStorage.getItem("selectedName")||""),w=n(sessionStorage.getItem("selectedPhone")||null),oe=n(sessionStorage.getItem("selectedPhoneMask")||"+7(###) - ### - ## - ##"),F=n(JSON.parse(sessionStorage.getItem("selectedShape"))||["line"]),N=n(JSON.parse(sessionStorage.getItem("selectedShapeBall"))||["line"]),x=n(JSON.parse(sessionStorage.getItem("toggleCert"))||!1),Q=n(!1),D=n(!1),$=n(!1),M=n(!1),V=n(!1),Z=n(1),E=n("3100"),A=n("600"),b=(s,t)=>{s==="country"&&ae(),d.push({name:s,params:{label:t}})},ae=()=>{p.value="",sessionStorage.removeItem("selectedCity")},le=()=>{Z.value=Math.min(Z.value+1,10)},ie=()=>{Z.value=Math.max(Z.value-1,1)},ne=()=>{D.value=!1,$.value=!0},de=()=>{I.value="",D.value=!1,$.value=!1},ce=()=>{M.value=!0,V.value=!0},G=()=>{M.value=!1,V.value=!1},re=()=>{const s={city:p.value,location:f.value,dategame:L.value,activity:k.value,services:y.value,orderAmount:E.value,prepaymentAmount:A.value};sessionStorage.setItem("bookingData",JSON.stringify(s)),Q.value=!0,d.push("/booking")},g=s=>s&&s.length>0?"_active":"",u=(s,t)=>{sessionStorage.setItem(s,t)};return m(_,s=>u("selectedCountry",s)),m(p,s=>u("selectedCity",s)),m(f,s=>u("selectedLocation",s)),m(k,s=>u("selectedActivity",s)),m(y,s=>u("selectedServices",s)),m(L,s=>u("selectedDateTimeGame",s)),m(U,s=>u("selectedName",s)),m(w,s=>u("selectedPhone",s)),m(q,s=>u("selectedGiftCert",s)),m(F,s=>u("selectedShape",JSON.stringify(s))),m(x,s=>u("toggleCert",JSON.stringify(s))),m(c,s=>u("selectedCountryFlag",s)),m(I,s=>{u("selectedPromocode",s),D.value=!!s}),fe(()=>{const s=sessionStorage.getItem("selectedGiftCert");s&&(q.value=s),sessionStorage.getItem("bookingData")&&(Q.value=!0);const o=sessionStorage.getItem("selectedCountryFlag");c.value=o||X;const T=sessionStorage.getItem("selectedDateTimeGame");if(T)try{const{date:P,time:ue}=JSON.parse(T);L.value=`${P}, ${ue}`}catch(P){console.error("Error parsing savedDateTimeGame:",P)}}),window.addEventListener("beforeunload",()=>{sessionStorage.clear()}),(s,t)=>(h(),S(me,null,{default:l(()=>[a(pe,{class:"my-page-container body--dark"},{default:l(()=>[a(_e,{class:"page-main q-pt-md q-pb-md q-pl-sm q-pr-sm"},{default:l(()=>[a(je),e("div",Fe,[e("div",Qe,[e("div",$e,[e("div",Pe,[He,e("div",Ne,[e("div",Ee,[Ae,a(r,{class:C(["input-main__input",g(_.value)]),modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=o=>_.value=o),placeholder:"Выберите страну",onClick:t[1]||(t[1]=o=>b("country","Выберите страну"))},{prepend:l(()=>[e("div",Ge,[e("img",{src:c.value,alt:"flag"},null,8,Te)])]),append:l(()=>[Oe]),_:1},8,["modelValue","class"])]),e("div",ze,[Je,a(r,{class:C(["input-main__input",g(p.value)]),modelValue:p.value,"onUpdate:modelValue":t[2]||(t[2]=o=>p.value=o),placeholder:"Выберите город",onClick:t[3]||(t[3]=o=>b("city","Выберите город"))},{append:l(()=>[Ke]),_:1},8,["modelValue","class"])]),e("div",Re,[We,a(r,{class:C(["input-main__input",g(f.value)]),modelValue:f.value,"onUpdate:modelValue":t[4]||(t[4]=o=>f.value=o),placeholder:"Выберите локацию",onClick:t[5]||(t[5]=o=>b("location","Выберите локацию"))},{append:l(()=>[Xe]),_:1},8,["modelValue","class"])])])])]),e("div",Ye,[e("div",e1,[t1,e("div",s1,[e("div",o1,[a1,a(r,{class:C(["input-main__input",g(k.value)]),modelValue:k.value,"onUpdate:modelValue":t[6]||(t[6]=o=>k.value=o),placeholder:"Выберите активность",onClick:t[7]||(t[7]=o=>b("activity","Выберите активность"))},{append:l(()=>[l1]),_:1},8,["modelValue","class"])]),e("div",i1,[n1,a(r,{class:C(["input-main__input",g(y.value)]),modelValue:y.value,"onUpdate:modelValue":t[8]||(t[8]=o=>y.value=o),placeholder:"Выберите услугу",onClick:t[9]||(t[9]=o=>b("services","Выберите услугу"))},{append:l(()=>[d1]),_:1},8,["modelValue","class"])])])])]),e("div",c1,[e("div",r1,[u1,e("div",m1,[e("div",_1,[p1,a(r,{class:C(["input-main__input",g(L.value)]),modelValue:L.value,"onUpdate:modelValue":t[10]||(t[10]=o=>L.value=o),placeholder:"Выберите дату и время игры",onClick:t[11]||(t[11]=o=>b("dategame","Выберите дату и время игры"))},{append:l(()=>[v1]),_:1},8,["modelValue","class"])])])])]),e("div",h1,[e("div",g1,[C1,e("div",b1,[e("div",L1,[w1,a(r,{class:C(["input-main__input",g(U.value)]),modelValue:U.value,"onUpdate:modelValue":t[12]||(t[12]=o=>U.value=o),placeholder:"Имя Фамилия"},null,8,["modelValue","class"])]),e("div",f1,[k1,a(r,{class:C(["input-main__input",g(w.value)]),modelValue:w.value,"onUpdate:modelValue":t[13]||(t[13]=o=>w.value=o),mask:oe.value,"fill-mask":""},{prepend:l(()=>[e("div",y1,[e("img",{src:c.value,alt:"flag"},null,8,q1)])]),_:1},8,["modelValue","mask","class"])]),e("div",x1,[M1,a(r,{class:C(["input-main__input",g(s.email)]),modelValue:s.email,"onUpdate:modelValue":t[14]||(t[14]=o=>s.email=o),placeholder:"Введите Email"},null,8,["modelValue","class"])]),e("div",V1,[Z1,a(O,{class:"checkbox-main",size:"md",modelValue:F.value,"onUpdate:modelValue":t[15]||(t[15]=o=>F.value=o),val:"md",label:"Согласен с условиями соглашения"},null,8,["modelValue"])])])])]),e("div",S1,[e("div",B1,[I1,e("div",U1,[e("div",D1,[j1,e("div",F1,[e("div",Q1,[e("div",$1,[e("div",P1,H(Z.value),1),H1,N1])]),e("div",E1,[e("div",A1,[a(v,{icon:"remove",onClick:ie}),a(v,{icon:"add",onClick:le})])])])]),e("div",G1,[T1,e("div",O1,[e("div",z1,[e("div",J1,[a(ge,{modelValue:x.value,"onUpdate:modelValue":t[16]||(t[16]=o=>x.value=o)},null,8,["modelValue"]),x.value?(h(),S(r,{key:0,class:"input-main__input input-main__input--addCert q-mr-md",modelValue:q.value,"onUpdate:modelValue":t[17]||(t[17]=o=>q.value=o),placeholder:"Добавить сертификат",dense:s.dense,onClick:t[18]||(t[18]=o=>b("giftcert","Подарочный сертификат")),style:{flex:"1"}},{append:l(()=>[K1]),_:1},8,["modelValue","dense"])):j("",!0)]),x.value&&q.value?(h(),B("div",R1,[e("div",W1,[X1,e("div",Y1,[a(r,{outlined:"",modelValue:s.number,"onUpdate:modelValue":t[19]||(t[19]=o=>s.number=o),type:"number",placeholder:"5000",disable:"",suffix:"₽"},null,8,["modelValue"])])]),e("div",et,[tt,e("div",st,[a(r,{outlined:"",modelValue:s.number,"onUpdate:modelValue":t[20]||(t[20]=o=>s.number=o),type:"number",placeholder:"1000",suffix:"₽"},null,8,["modelValue"])])])])):j("",!0)])])]),e("div",ot,[at,e("div",lt,[e("div",it,[a(O,{class:"checkbox-main",size:"md",modelValue:N.value,"onUpdate:modelValue":t[21]||(t[21]=o=>N.value=o),val:"md",label:"Оплата баллами",onClick:ce},null,8,["modelValue"])]),nt])]),e("div",dt,[ct,e("div",rt,[e("div",ut,[e("div",mt,[a(r,{class:"input-main__input input-main__input--addCert q-mr-md",modelValue:I.value,"onUpdate:modelValue":t[22]||(t[22]=o=>I.value=o),placeholder:"Введите промокод",style:{flex:"1"}},null,8,["modelValue"]),D.value?(h(),S(v,{key:0,unelevated:"",class:"apply-btn text-weight-bold",onClick:ne},{default:l(()=>[_t]),_:1})):j("",!0),$.value?(h(),B("div",pt,[vt,a(v,{unelevated:"",class:"sale-block__reset-btn reset-sale-btn",onClick:de},{default:l(()=>[ht]),_:1})])):j("",!0)])])])]),e("div",gt,[Ct,e("div",bt,[Lt,wt,e("div",ft,H(E.value)+" ₽",1)])]),e("div",kt,[yt,e("div",qt,[e("div",xt,H(A.value)+" ₽",1)])])]),e("div",Mt,[Q.value?(h(),S(v,{key:1,unelevated:"",class:"card-main__btn text-weight-bold col"},{default:l(()=>[Zt]),_:1})):(h(),S(v,{key:0,unelevated:"",class:"card-main__btn text-weight-bold col",onClick:re},{default:l(()=>[Vt]),_:1}))])])])])]),a(z,{modelValue:M.value,"onUpdate:modelValue":t[23]||(t[23]=o=>M.value=o),position:"top","transition-show":"slide-down","transition-hide":"slide-up",persistent:""},{default:l(()=>[a(R,{class:"auth-reg",style:{"max-width":"390px",width:"100%"}},{default:l(()=>[a(K,{class:"row items-center justify-between"},{default:l(()=>[a(v,{unelevated:"",class:"account-btn text-weight-bold"},{default:l(()=>[St]),_:1}),a(v,{unelevated:"",class:"reg-btn text-weight-bold"},{default:l(()=>[Bt]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(z,{modelValue:V.value,"onUpdate:modelValue":t[26]||(t[26]=o=>V.value=o),seamless:"",position:"bottom","transition-show":"slide-up","transition-hide":"slide-down",persistent:""},{default:l(()=>[a(R,{class:"auth-dialog",style:{"max-width":"390px",width:"100%"}},{default:l(()=>[e("div",It,[e("div",Ut,[a(K,{class:"auth-card__icon"},{default:l(()=>[Dt]),_:1}),jt,e("div",Ft,[e("div",Qt,[$t,a(r,{class:"input-main__input",modelValue:w.value,"onUpdate:modelValue":t[24]||(t[24]=o=>w.value=o),dense:s.dense,mask:"+7(###) - ### - ## - ##","fill-mask":""},{prepend:l(()=>[Pt]),_:1},8,["modelValue","dense"])]),e("div",Ht,[Nt,a(r,{class:"input-main__input",modelValue:s.pin,"onUpdate:modelValue":t[25]||(t[25]=o=>s.pin=o),modelModifiers:{number:!0},type:"number",placeholder:"Код из смс",dense:s.dense},null,8,["modelValue","dense"])]),e("div",Et,[a(v,{unelevated:"",class:"btn-still",style:{width:"100%"}},{default:l(()=>[At]),_:1})])]),J((h(),B("div",Gt,[a(v,{unelevated:"",class:"btn text-weight-bold",style:{width:"100%"},onClick:G},{default:l(()=>[Tt]),_:1})])),[[Me]])])])]),_:1})]),_:1},8,["modelValue"]),J(e("div",{class:"q-dialog__backdrop",onClick:G},null,512),[[ke,M.value||V.value]])]),_:1})]),_:1})]),_:1}))}};export{os as default};
