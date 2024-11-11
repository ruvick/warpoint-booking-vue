import{j as _,ad as ot,ae as $t,D as Vt,l as Ft,r as j,h as re,z as g,T as le,v as Xe,af as Et,u as st,g as Nt,o as ie,e as Oe,b as oe,w as se,d as S,_ as Te,c as Ge,a3 as Bt,a2 as At,f as Ue,a0 as Zt,$ as Lt}from"./index.b6191416.js";import{h as zt,b as E,Q as Rt,a as Qt,c as Pt}from"./QLayout.9e19426d.js";import{a as Jt,u as Xt}from"./use-dark.11ae492c.js";import{u as Gt,c as Ut,b as Wt}from"./private.use-form.646a5f94.js";import{p as x}from"./format.611c1390.js";function Kt(){let e=Object.create(null);return{getCache:(r,o)=>e[r]===void 0?e[r]=typeof o=="function"?o():o:e[r],setCache(r,o){e[r]=o},hasCache(r){return Object.hasOwnProperty.call(e,r)},clearCache(r){r!==void 0?delete e[r]:e=Object.create(null)}}}const R=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function ea(e,r,o){return Object.prototype.toString.call(e)==="[object Date]"&&(o=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),ra(je(e,r,o))}function We(e,r,o){return ut(na(e,r,o))}function ta(e){return aa(e)===0}function ye(e,r){return r<=6?31:r<=11||ta(e)?30:29}function aa(e){const r=R.length;let o=R[0],u,d,l,D,s;if(e<o||e>=R[r-1])throw new Error("Invalid Jalaali year "+e);for(s=1;s<r&&(u=R[s],d=u-o,!(e<u));s+=1)o=u;return D=e-o,d-D<6&&(D=D-d+C(d+4,33)*33),l=T(T(D+1,33)-1,4),l===-1&&(l=4),l}function it(e,r){const o=R.length,u=e+621;let d=-14,l=R[0],D,s,f,M,m;if(e<l||e>=R[o-1])throw new Error("Invalid Jalaali year "+e);for(m=1;m<o&&(D=R[m],s=D-l,!(e<D));m+=1)d=d+C(s,33)*8+C(T(s,33),4),l=D;M=e-l,d=d+C(M,33)*8+C(T(M,33)+3,4),T(s,33)===4&&s-M===4&&(d+=1);const b=C(u,4)-C((C(u,100)+1)*3,4)-150,N=20+d-b;return r||(s-M<6&&(M=M-s+C(s+4,33)*33),f=T(T(M+1,33)-1,4),f===-1&&(f=4)),{leap:f,gy:u,march:N}}function na(e,r,o){const u=it(e,!0);return je(u.gy,3,u.march)+(r-1)*31-C(r,7)*(r-7)+o-1}function ra(e){const r=ut(e).gy;let o=r-621,u,d,l;const D=it(o,!1),s=je(r,3,D.march);if(l=e-s,l>=0){if(l<=185)return d=1+C(l,31),u=T(l,31)+1,{jy:o,jm:d,jd:u};l-=186}else o-=1,l+=179,D.leap===1&&(l+=1);return d=7+C(l,30),u=T(l,30)+1,{jy:o,jm:d,jd:u}}function je(e,r,o){let u=C((e+C(r-8,6)+100100)*1461,4)+C(153*T(r+9,12)+2,5)+o-34840408;return u=u-C(C(e+100100+C(r-8,6),100)*3,4)+752,u}function ut(e){let r=4*e+139361631;r=r+C(C(4*e+183187720,146097)*3,4)*4-3908;const o=C(T(r,1461),4)*5+308,u=C(T(o,153),5)+1,d=T(C(o,153),12)+1;return{gy:C(r,1461)-100100+C(8-d,6),gm:d,gd:u}}function C(e,r){return~~(e/r)}function T(e,r){return e-~~(e/r)*r}const la=["gregorian","persian"],Ke={mask:{type:String},locale:Object,calendar:{type:String,validator:e=>la.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},oa=["update:modelValue"];function L(e){return e.year+"/"+x(e.month)+"/"+x(e.day)}function sa(e,r){const o=_(()=>e.disable!==!0&&e.readonly!==!0),u=_(()=>o.value===!0?0:-1),d=_(()=>{const s=[];return e.color!==void 0&&s.push(`bg-${e.color}`),e.textColor!==void 0&&s.push(`text-${e.textColor}`),s.join(" ")});function l(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function D(s){const f=new Date,M=s===!0?null:0;if(e.calendar==="persian"){const m=ea(f);return{year:m.jy,month:m.jm,day:m.jd}}return{year:f.getFullYear(),month:f.getMonth()+1,day:f.getDate(),hour:M,minute:M,second:M,millisecond:M}}return{editable:o,tabindex:u,headerClass:d,getLocale:l,getCurrentDate:D}}const ct=864e5,ia=36e5,Ie=6e4,dt="YYYY-MM-DDTHH:mm:ss.SSSZ",ua=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,ca=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,He={};function da(e,r){const o="("+r.days.join("|")+")",u=e+o;if(He[u]!==void 0)return He[u];const d="("+r.daysShort.join("|")+")",l="("+r.months.join("|")+")",D="("+r.monthsShort.join("|")+")",s={};let f=0;const M=e.replace(ca,b=>{switch(f++,b){case"YY":return s.YY=f,"(-?\\d{1,2})";case"YYYY":return s.YYYY=f,"(-?\\d{1,4})";case"M":return s.M=f,"(\\d{1,2})";case"MM":return s.M=f,"(\\d{2})";case"MMM":return s.MMM=f,D;case"MMMM":return s.MMMM=f,l;case"D":return s.D=f,"(\\d{1,2})";case"Do":return s.D=f++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return s.D=f,"(\\d{2})";case"H":return s.H=f,"(\\d{1,2})";case"HH":return s.H=f,"(\\d{2})";case"h":return s.h=f,"(\\d{1,2})";case"hh":return s.h=f,"(\\d{2})";case"m":return s.m=f,"(\\d{1,2})";case"mm":return s.m=f,"(\\d{2})";case"s":return s.s=f,"(\\d{1,2})";case"ss":return s.s=f,"(\\d{2})";case"S":return s.S=f,"(\\d{1})";case"SS":return s.S=f,"(\\d{2})";case"SSS":return s.S=f,"(\\d{3})";case"A":return s.A=f,"(AM|PM)";case"a":return s.a=f,"(am|pm)";case"aa":return s.aa=f,"(a\\.m\\.|p\\.m\\.)";case"ddd":return d;case"dddd":return o;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return s.Z=f,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return s.ZZ=f,"(Z|[+-]\\d{2}\\d{2})";case"X":return s.X=f,"(-?\\d+)";case"x":return s.x=f,"(-?\\d{4,})";default:return f--,b[0]==="["&&(b=b.substring(1,b.length-1)),b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),m={map:s,regex:new RegExp("^"+M)};return He[u]=m,m}function vt(e,r){return e!==void 0?e:r!==void 0?r.date:$t.date}function et(e,r=""){const o=e>0?"-":"+",u=Math.abs(e),d=Math.floor(u/60),l=u%60;return o+x(d)+r+x(l)}function va(e,r,o,u,d){const l={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(d!==void 0&&Object.assign(l,d),e==null||e===""||typeof e!="string")return l;r===void 0&&(r=dt);const D=vt(o,ot.props),s=D.months,f=D.monthsShort,{regex:M,map:m}=da(r,D),b=e.match(M);if(b===null)return l;let N="";if(m.X!==void 0||m.x!==void 0){const $=parseInt(b[m.X!==void 0?m.X:m.x],10);if(isNaN($)===!0||$<0)return l;const V=new Date($*(m.X!==void 0?1e3:1));l.year=V.getFullYear(),l.month=V.getMonth()+1,l.day=V.getDate(),l.hour=V.getHours(),l.minute=V.getMinutes(),l.second=V.getSeconds(),l.millisecond=V.getMilliseconds()}else{if(m.YYYY!==void 0)l.year=parseInt(b[m.YYYY],10);else if(m.YY!==void 0){const $=parseInt(b[m.YY],10);l.year=$<0?$:2e3+$}if(m.M!==void 0){if(l.month=parseInt(b[m.M],10),l.month<1||l.month>12)return l}else m.MMM!==void 0?l.month=f.indexOf(b[m.MMM])+1:m.MMMM!==void 0&&(l.month=s.indexOf(b[m.MMMM])+1);if(m.D!==void 0){if(l.day=parseInt(b[m.D],10),l.year===null||l.month===null||l.day<1)return l;const $=u!=="persian"?new Date(l.year,l.month,0).getDate():ye(l.year,l.month);if(l.day>$)return l}m.H!==void 0?l.hour=parseInt(b[m.H],10)%24:m.h!==void 0&&(l.hour=parseInt(b[m.h],10)%12,(m.A&&b[m.A]==="PM"||m.a&&b[m.a]==="pm"||m.aa&&b[m.aa]==="p.m.")&&(l.hour+=12),l.hour=l.hour%24),m.m!==void 0&&(l.minute=parseInt(b[m.m],10)%60),m.s!==void 0&&(l.second=parseInt(b[m.s],10)%60),m.S!==void 0&&(l.millisecond=parseInt(b[m.S],10)*10**(3-b[m.S].length)),(m.Z!==void 0||m.ZZ!==void 0)&&(N=m.Z!==void 0?b[m.Z].replace(":",""):b[m.ZZ],l.timezoneOffset=(N[0]==="+"?-1:1)*(60*N.slice(1,3)+1*N.slice(3,5)))}return l.dateHash=x(l.year,6)+"/"+x(l.month)+"/"+x(l.day),l.timeHash=x(l.hour)+":"+x(l.minute)+":"+x(l.second)+N,l}function tt(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const o=new Date(r.getFullYear(),0,4);o.setDate(o.getDate()-(o.getDay()+6)%7+3);const u=r.getTimezoneOffset()-o.getTimezoneOffset();r.setHours(r.getHours()-u);const d=(r-o)/(ct*7);return 1+Math.floor(d)}function A(e,r,o){const u=new Date(e),d=`set${o===!0?"UTC":""}`;switch(r){case"year":case"years":u[`${d}Month`](0);case"month":case"months":u[`${d}Date`](1);case"day":case"days":case"date":u[`${d}Hours`](0);case"hour":case"hours":u[`${d}Minutes`](0);case"minute":case"minutes":u[`${d}Seconds`](0);case"second":case"seconds":u[`${d}Milliseconds`](0)}return u}function ge(e,r,o){return(e.getTime()-e.getTimezoneOffset()*Ie-(r.getTime()-r.getTimezoneOffset()*Ie))/o}function mt(e,r,o="days"){const u=new Date(e),d=new Date(r);switch(o){case"years":case"year":return u.getFullYear()-d.getFullYear();case"months":case"month":return(u.getFullYear()-d.getFullYear())*12+u.getMonth()-d.getMonth();case"days":case"day":case"date":return ge(A(u,"day"),A(d,"day"),ct);case"hours":case"hour":return ge(A(u,"hour"),A(d,"hour"),ia);case"minutes":case"minute":return ge(A(u,"minute"),A(d,"minute"),Ie);case"seconds":case"second":return ge(A(u,"second"),A(d,"second"),1e3)}}function at(e){return mt(e,A(e,"year"),"days")+1}function nt(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const rt={YY(e,r,o){const u=this.YYYY(e,r,o)%100;return u>=0?x(u):"-"+x(Math.abs(u))},YYYY(e,r,o){return o!=null?o:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return x(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return nt(this.Q(e))},D(e){return e.getDate()},Do(e){return nt(e.getDate())},DD(e){return x(e.getDate())},DDD(e){return at(e)},DDDD(e){return x(at(e),3)},d(e){return e.getDay()},dd(e,r){return this.dddd(e,r).slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return tt(e)},ww(e){return x(tt(e))},H(e){return e.getHours()},HH(e){return x(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return x(this.h(e))},m(e){return e.getMinutes()},mm(e){return x(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return x(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return x(Math.floor(e.getMilliseconds()/10))},SSS(e){return x(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,r,o,u){const d=u==null?e.getTimezoneOffset():u;return et(d,":")},ZZ(e,r,o,u){const d=u==null?e.getTimezoneOffset():u;return et(d)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function ma(e,r,o,u,d){if(e!==0&&!e||e===1/0||e===-1/0)return;const l=new Date(e);if(isNaN(l))return;r===void 0&&(r=dt);const D=vt(o,ot.props);return r.replace(ua,(s,f)=>s in rt?rt[s](l,D,u,d):f===void 0?s:f.split("\\]").join("]"))}const X=20,fa=["Calendar","Years","Months"],lt=e=>fa.includes(e),pe=e=>/^-?[\d]+\/[0-1]\d$/.test(e),ee=" \u2014 ";function z(e){return e.year+"/"+x(e.month)}const ha=Vt({name:"QDate",props:{...Ke,...Gt,...Jt,modelValue:{required:!0,validator:e=>typeof e=="string"||Array.isArray(e)===!0||Object(e)===e||e===null},multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{...Ke.mask,default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:pe},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:pe},navigationMaxYearMonth:{type:String,validator:pe},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:lt}},emits:[...oa,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:o}){const{proxy:u}=Ft(),{$q:d}=u,l=Xt(e,d),{getCache:D}=Kt(),{tabindex:s,headerClass:f,getLocale:M,getCurrentDate:m}=sa(e,d);let b;const N=Ut(e),$=Wt(N),V=j(null),Q=j(Ze()),q=j(M()),ft=_(()=>Ze()),ht=_(()=>M()),B=_(()=>m()),h=j(Le(Q.value,q.value)),O=j(e.defaultView),$e=_(()=>d.lang.rtl===!0?"right":"left"),ue=j($e.value),_e=j($e.value),De=h.value.year,ce=j(De-De%X-(De<0?X:0)),p=j(null),gt=_(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(l.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),P=_(()=>e.color||"primary"),G=_(()=>e.textColor||"white"),de=_(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),Me=_(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),F=_(()=>Me.value.filter(t=>typeof t=="string").map(t=>Ye(t,Q.value,q.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),U=_(()=>{const t=a=>Ye(a,Q.value,q.value);return Me.value.filter(a=>Et(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ve=_(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=We(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),be=_(()=>e.calendar==="persian"?L:(t,a,n)=>ma(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?Q.value:a,n===void 0?q.value:n,t.year,t.timezoneOffset)),te=_(()=>F.value.length+U.value.reduce((t,a)=>t+1+mt(ve.value(a.to),ve.value(a.from)),0)),Ve=_(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(p.value!==null){const n=p.value.init,i=ve.value(n);return q.value.daysShort[i.getDay()]+", "+q.value.monthsShort[n.month-1]+" "+n.day+ee+"?"}if(te.value===0)return ee;if(te.value>1)return`${te.value} ${q.value.pluralDay}`;const t=F.value[0],a=ve.value(t);return isNaN(a.valueOf())===!0?ee:q.value.headerTitle!==void 0?q.value.headerTitle(a,t):q.value.daysShort[a.getDay()]+", "+q.value.monthsShort[t.month-1]+" "+t.day}),yt=_(()=>F.value.concat(U.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),_t=_(()=>F.value.concat(U.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Fe=_(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(te.value===0)return ee;if(te.value>1){const t=yt.value,a=_t.value,n=q.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+ee+n[a.month-1]+" ":t.month!==a.month?ee+n[a.month-1]:"")+" "+a.year}return F.value[0].year}),me=_(()=>{const t=[d.iconSet.datetime.arrowLeft,d.iconSet.datetime.arrowRight];return d.lang.rtl===!0?t.reverse():t}),Ee=_(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):q.value.firstDayOfWeek),Dt=_(()=>{const t=q.value.daysShort,a=Ee.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),Z=_(()=>{const t=h.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():ye(t.year,t.month)}),Mt=_(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),k=_(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),H=_(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),we=_(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return k.value!==null&&k.value.year>=h.value.year&&(t.year.prev=!1,k.value.year===h.value.year&&k.value.month>=h.value.month&&(t.month.prev=!1)),H.value!==null&&H.value.year<=h.value.year&&(t.year.next=!1,H.value.year===h.value.year&&H.value.month<=h.value.month&&(t.month.next=!1)),t}),fe=_(()=>{const t={};return F.value.forEach(a=>{const n=z(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),Ne=_(()=>{const t={};return U.value.forEach(a=>{const n=z(a.from),i=z(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===i?a.to.day:void 0,range:a}),n<i){let c;const{year:w,month:v}=a.from,y=v<12?{year:w,month:v+1}:{year:w+1,month:1};for(;(c=z(y))<=i;)t[c]===void 0&&(t[c]=[]),t[c].push({from:void 0,to:c===i?a.to.day:void 0,range:a}),y.month++,y.month>12&&(y.year++,y.month=1)}}),t}),ae=_(()=>{if(p.value===null)return;const{init:t,initHash:a,final:n,finalHash:i}=p.value,[c,w]=a<=i?[t,n]:[n,t],v=z(c),y=z(w);if(v!==I.value&&y!==I.value)return;const Y={};return v===I.value?(Y.from=c.day,Y.includeFrom=!0):Y.from=1,y===I.value?(Y.to=w.day,Y.includeTo=!0):Y.to=Z.value,Y}),I=_(()=>z(h.value)),bt=_(()=>{const t={};if(e.options===void 0){for(let n=1;n<=Z.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=Z.value;n++){const i=I.value+"/"+x(n);t[n]=a(i)}return t}),wt=_(()=>{const t={};if(e.events===void 0)for(let a=1;a<=Z.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=Z.value;n++){const i=I.value+"/"+x(n);t[n]=a(i)===!0&&Mt.value(i)}}return t}),xt=_(()=>{let t,a;const{year:n,month:i}=h.value;if(e.calendar!=="persian")t=new Date(n,i-1,1),a=new Date(n,i-1,0).getDate();else{const c=We(n,i,1);t=new Date(c.gy,c.gm-1,c.gd);let w=i-1,v=n;w===0&&(w=12,v--),a=ye(v,w)}return{days:t.getDay()-Ee.value-1,endDay:a}}),Be=_(()=>{const t=[],{days:a,endDay:n}=xt.value,i=a<0?a+7:a;if(i<6)for(let v=n-i;v<=n;v++)t.push({i:v,fill:!0});const c=t.length;for(let v=1;v<=Z.value;v++){const y={i:v,event:wt.value[v],classes:[]};bt.value[v]===!0&&(y.in=!0,y.flat=!0),t.push(y)}if(fe.value[I.value]!==void 0&&fe.value[I.value].forEach(v=>{const y=c+v-1;Object.assign(t[y],{selected:!0,unelevated:!0,flat:!1,color:P.value,textColor:G.value})}),Ne.value[I.value]!==void 0&&Ne.value[I.value].forEach(v=>{if(v.from!==void 0){const y=c+v.from-1,Y=c+(v.to||Z.value)-1;for(let ne=y;ne<=Y;ne++)Object.assign(t[ne],{range:v.range,unelevated:!0,color:P.value,textColor:G.value});Object.assign(t[y],{rangeFrom:!0,flat:!1}),v.to!==void 0&&Object.assign(t[Y],{rangeTo:!0,flat:!1})}else if(v.to!==void 0){const y=c+v.to-1;for(let Y=c;Y<=y;Y++)Object.assign(t[Y],{range:v.range,unelevated:!0,color:P.value,textColor:G.value});Object.assign(t[y],{flat:!1,rangeTo:!0})}else{const y=c+Z.value-1;for(let Y=c;Y<=y;Y++)Object.assign(t[Y],{range:v.range,unelevated:!0,color:P.value,textColor:G.value})}}),ae.value!==void 0){const v=c+ae.value.from-1,y=c+ae.value.to-1;for(let Y=v;Y<=y;Y++)t[Y].color=P.value,t[Y].editRange=!0;ae.value.includeFrom===!0&&(t[v].editRangeFrom=!0),ae.value.includeTo===!0&&(t[y].editRangeTo=!0)}h.value.year===B.value.year&&h.value.month===B.value.month&&(t[c+B.value.day-1].today=!0);const w=t.length%7;if(w>0){const v=7-w;for(let y=1;y<=v;y++)t.push({i:y,fill:!0})}return t.forEach(v=>{let y="q-date__calendar-item ";v.fill===!0?y+="q-date__calendar-item--fill":(y+=`q-date__calendar-item--${v.in===!0?"in":"out"}`,v.range!==void 0&&(y+=` q-date__range${v.rangeTo===!0?"-to":v.rangeFrom===!0?"-from":""}`),v.editRange===!0&&(y+=` q-date__edit-range${v.editRangeFrom===!0?"-from":""}${v.editRangeTo===!0?"-to":""}`),(v.range!==void 0||v.editRange===!0)&&(y+=` text-${v.color}`)),v.classes=y}),t}),Yt=_(()=>e.disable===!0?{"aria-disabled":"true"}:{});re(()=>e.modelValue,t=>{if(b===t)b=0;else{const a=Le(Q.value,q.value);W(a.year,a.month,a)}}),re(O,()=>{V.value!==null&&u.$el.contains(document.activeElement)===!0&&V.value.focus()}),re(()=>h.value.year+"|"+h.value.month,()=>{o("navigation",{year:h.value.year,month:h.value.month})}),re(ft,t=>{Je(t,q.value,"mask"),Q.value=t}),re(ht,t=>{Je(Q.value,t,"locale"),q.value=t});function Ae(){const{year:t,month:a,day:n}=B.value,i={...h.value,year:t,month:a,day:n},c=fe.value[z(i)];(c===void 0||c.includes(i.day)===!1)&&Ce(i),xe(i.year,i.month)}function St(t){lt(t)===!0&&(O.value=t)}function Ct(t,a){["month","year"].includes(t)&&(t==="month"?Re:Se)(a===!0?-1:1)}function xe(t,a){O.value="Calendar",W(t,a)}function qt(t,a){if(e.range===!1||!t){p.value=null;return}const n=Object.assign({...h.value},t),i=a!==void 0?Object.assign({...h.value},a):n;p.value={init:n,initHash:L(n),final:i,finalHash:L(i)},xe(n.year,n.month)}function Ze(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function Ye(t,a,n){return va(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Le(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return ze();const i=n[n.length-1],c=Ye(i.from!==void 0?i.from:i,t,a);return c.dateHash===null?ze():c}function ze(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=B.value!==void 0?B.value:m();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+x(a)+"/01"}}function Re(t){let a=h.value.year,n=Number(h.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),W(a,n),de.value===!0&&he("month")}function Se(t){const a=Number(h.value.year)+t;W(a,h.value.month),de.value===!0&&he("year")}function kt(t){W(t,h.value.month),O.value=e.defaultView==="Years"?"Months":"Calendar",de.value===!0&&he("year")}function Ht(t){W(h.value.year,t),O.value="Calendar",de.value===!0&&he("month")}function pt(t,a){const n=fe.value[a];(n!==void 0&&n.includes(t.day)===!0?qe:Ce)(t)}function J(t){return{year:t.year,month:t.month,day:t.day}}function W(t,a,n){if(k.value!==null&&t<=k.value.year&&((a<k.value.month||t<k.value.year)&&(a=k.value.month),t=k.value.year),H.value!==null&&t>=H.value.year&&((a>H.value.month||t>H.value.year)&&(a=H.value.month),t=H.value.year),n!==void 0){const{hour:c,minute:w,second:v,millisecond:y,timezoneOffset:Y,timeHash:ne}=n;Object.assign(h.value,{hour:c,minute:w,second:v,millisecond:y,timezoneOffset:Y,timeHash:ne})}const i=t+"/"+x(a)+"/01";i!==h.value.dateHash&&(ue.value=h.value.dateHash<i==(d.lang.rtl!==!0)?"left":"right",t!==h.value.year&&(_e.value=ue.value),Xe(()=>{ce.value=t-t%X-(t<0?X:0),Object.assign(h.value,{year:t,month:a,day:1,dateHash:i})}))}function Qe(t,a,n){const i=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;b=i;const{reason:c,details:w}=Pe(a,n);o("update:modelValue",i,c,w)}function he(t){const a=F.value[0]!==void 0&&F.value[0].dateHash!==null?{...F.value[0]}:{...h.value};Xe(()=>{a.year=h.value.year,a.month=h.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():ye(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const i=K(a);b=i;const{details:c}=Pe("",a);o("update:modelValue",i,t,c)})}function Pe(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...J(a.target),from:J(a.from),to:J(a.to)}}:{reason:`${t}-day`,details:J(a)}}function K(t,a,n){return t.from!==void 0?{from:be.value(t.from,a,n),to:be.value(t.to,a,n)}:be.value(t,a,n)}function Ce(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=L(t.from),i=L(t.to),c=F.value.filter(v=>v.dateHash<n||v.dateHash>i),w=U.value.filter(({from:v,to:y})=>y.dateHash<n||v.dateHash>i);a=c.concat(w).concat(t).map(v=>K(v))}else{const n=Me.value.slice();n.push(K(t)),a=n}else a=K(t);Qe(a,"add",t)}function qe(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=K(t);t.from!==void 0?a=e.modelValue.filter(i=>i.from!==void 0?i.from!==n.from&&i.to!==n.to:!0):a=e.modelValue.filter(i=>i!==n),a.length===0&&(a=null)}Qe(a,"remove",t)}function Je(t,a,n){const i=F.value.concat(U.value).map(c=>K(c,t,a)).filter(c=>c.from!==void 0?c.from.dateHash!==null&&c.to.dateHash!==null:c.dateHash!==null);o("update:modelValue",(e.multiple===!0?i:i[0])||null,n)}function Ot(){if(e.minimal!==!0)return g("div",{class:"q-date__header "+f.value},[g("div",{class:"relative-position"},[g(le,{name:"q-transition--fade"},()=>g("div",{key:"h-yr-"+Fe.value,class:"q-date__header-subtitle q-date__header-link "+(O.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:s.value,...D("vY",{onClick(){O.value="Years"},onKeyup(t){t.keyCode===13&&(O.value="Years")}})},[Fe.value]))]),g("div",{class:"q-date__header-title relative-position flex no-wrap"},[g("div",{class:"relative-position col"},[g(le,{name:"q-transition--fade"},()=>g("div",{key:"h-sub"+Ve.value,class:"q-date__header-title-label q-date__header-link "+(O.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:s.value,...D("vC",{onClick(){O.value="Calendar"},onKeyup(t){t.keyCode===13&&(O.value="Calendar")}})},[Ve.value]))]),e.todayBtn===!0?g(E,{class:"q-date__header-today self-start",icon:d.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:s.value,onClick:Ae}):null])])}function ke({label:t,type:a,key:n,dir:i,goTo:c,boundaries:w,cls:v}){return[g("div",{class:"row items-center q-date__arrow"},[g(E,{round:!0,dense:!0,size:"sm",flat:!0,icon:me.value[0],tabindex:s.value,disable:w.prev===!1,...D("go-#"+a,{onClick(){c(-1)}})})]),g("div",{class:"relative-position overflow-hidden flex flex-center"+v},[g(le,{name:"q-transition--jump-"+i},()=>g("div",{key:n},[g(E,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:s.value,...D("view#"+a,{onClick:()=>{O.value=a}})})]))]),g("div",{class:"row items-center q-date__arrow"},[g(E,{round:!0,dense:!0,size:"sm",flat:!0,icon:me.value[1],tabindex:s.value,disable:w.next===!1,...D("go+#"+a,{onClick(){c(1)}})})])]}const Tt={Calendar:()=>[g("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[g("div",{class:"q-date__navigation row items-center no-wrap"},ke({label:q.value.months[h.value.month-1],type:"Months",key:h.value.month,dir:ue.value,goTo:Re,boundaries:we.value.month,cls:" col"}).concat(ke({label:h.value.year,type:"Years",key:h.value.year,dir:_e.value,goTo:Se,boundaries:we.value.year,cls:""}))),g("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},Dt.value.map(t=>g("div",{class:"q-date__calendar-item"},[g("div",t)]))),g("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[g(le,{name:"q-transition--slide-"+ue.value},()=>g("div",{key:I.value,class:"q-date__calendar-days fit"},Be.value.map(t=>g("div",{class:t.classes},[t.in===!0?g(E,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:s.value,...D("day#"+t.i,{onClick:()=>{It(t.i)},onMouseover:()=>{jt(t.i)}})},t.event!==!1?()=>g("div",{class:"q-date__event bg-"+t.event}):null):g("div",""+t.i)]))))])])],Months(){const t=h.value.year===B.value.year,a=i=>k.value!==null&&h.value.year===k.value.year&&k.value.month>i||H.value!==null&&h.value.year===H.value.year&&H.value.month<i,n=q.value.monthsShort.map((i,c)=>{const w=h.value.month===c+1;return g("div",{class:"q-date__months-item flex flex-center"},[g(E,{class:t===!0&&B.value.month===c+1?"q-date__today":null,flat:w!==!0,label:i,unelevated:w,color:w===!0?P.value:null,textColor:w===!0?G.value:null,tabindex:s.value,disable:a(c+1),...D("month#"+c,{onClick:()=>{Ht(c+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(g("div",{class:"row no-wrap full-width"},[ke({label:h.value.year,type:"Years",key:h.value.year,dir:_e.value,goTo:Se,boundaries:we.value.year,cls:" col"})])),g("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=ce.value,a=t+X,n=[],i=c=>k.value!==null&&k.value.year>c||H.value!==null&&H.value.year<c;for(let c=t;c<=a;c++){const w=h.value.year===c;n.push(g("div",{class:"q-date__years-item flex flex-center"},[g(E,{key:"yr"+c,class:B.value.year===c?"q-date__today":null,flat:!w,label:c,dense:!0,unelevated:w,color:w===!0?P.value:null,textColor:w===!0?G.value:null,tabindex:s.value,disable:i(c),...D("yr#"+c,{onClick:()=>{kt(c)}})})]))}return g("div",{class:"q-date__view q-date__years flex flex-center"},[g("div",{class:"col-auto"},[g(E,{round:!0,dense:!0,flat:!0,icon:me.value[0],tabindex:s.value,disable:i(t),...D("y-",{onClick:()=>{ce.value-=X}})})]),g("div",{class:"q-date__years-content col self-stretch row items-center"},n),g("div",{class:"col-auto"},[g(E,{round:!0,dense:!0,flat:!0,icon:me.value[1],tabindex:s.value,disable:i(a),...D("y+",{onClick:()=>{ce.value+=X}})})])])}};function It(t){const a={...h.value,day:t};if(e.range===!1){pt(a,I.value);return}if(p.value===null){const n=Be.value.find(c=>c.fill!==!0&&c.i===t);if(e.noUnset!==!0&&n.range!==void 0){qe({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){qe(a);return}const i=L(a);p.value={init:a,initHash:i,final:a,finalHash:i},o("rangeStart",J(a))}else{const n=p.value.initHash,i=L(a),c=n<=i?{from:p.value.init,to:a}:{from:a,to:p.value.init};p.value=null,Ce(n===i?a:{target:a,...c}),o("rangeEnd",{from:J(c.from),to:J(c.to)})}}function jt(t){if(p.value!==null){const a={...h.value,day:t};Object.assign(p.value,{final:a,finalHash:L(a)})}}return Object.assign(u,{setToday:Ae,setView:St,offsetCalendar:Ct,setCalendarTo:xe,setEditingRange:qt}),()=>{const t=[g("div",{class:"q-date__content col relative-position"},[g(le,{name:"q-transition--fade"},Tt[O.value])])],a=zt(r.default);return a!==void 0&&t.push(g("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&$(t,"push"),g("div",{class:gt.value,...Yt.value},[Ot(),g("div",{ref:V,class:"q-date__main col column",tabindex:-1},t)])}}});const ga={class:"page-main__header header-page-main row justify-center items-center"},ya={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{"margin-right":"4px"}},_a=S("path",{d:"M12.5 5L7.5 10L12.5 15",stroke:"#C4C8CF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Da=[_a],Ma={class:"row justify-center items-center text-grey text-bold text-uppercase",style:{flex:"1 1 auto"}},ba={class:"header-page-main__inner row items-center"},wa=S("div",{class:"header-page-main__map row items-center justify-center q-mr-sm"},[S("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg"},[S("path",{d:"M20.5 10.4167C20.5 15.8445 14.1 21.5 12.5 21.5C10.9 21.5 4.5 15.8445 4.5 10.4167C4.5 6.04441 8.08172 2.5 12.5 2.5C16.9183 2.5 20.5 6.04441 20.5 10.4167Z",stroke:"white","stroke-width":"1.5"}),S("circle",{cx:"3",cy:"3",r:"3",transform:"matrix(-1 0 0 1 15.5 7)",stroke:"white","stroke-width":"1.5"})])],-1),xa={class:"header-page-main__location"},Ya={class:"header-page-main__metro q-mb-xs"},Sa={__name:"HeaderDateTimeGame",setup(e){const r=st(),o=j("");Nt(()=>{o.value=sessionStorage.getItem("selectedLocation")||""});const u=()=>{const l={date:sessionStorage.getItem("selectedDate"),time:sessionStorage.getItem("selectedTime")};console.log("Saving selectedDateTime:",l),sessionStorage.setItem("selectedDateTimeGame",JSON.stringify(l))},d=()=>{u(),r.back()};return(l,D)=>(ie(),Oe("div",ga,[oe(E,{class:"no-hover no-shadow",primary:"",onClick:d,style:{"font-size":"11px",color:"#C4C8CF",border:"1px solid #30343B","border-radius":"24px"}},{default:se(()=>[(ie(),Oe("svg",ya,Da))]),_:1}),S("div",Ma,[S("div",ba,[wa,S("div",xa,[S("div",Ya,Te(o.value),1)])])])]))}};const Ca={class:"inner-block column items-start",style:{width:"100%"}},qa={class:"container-md q-pt-md q-pl-sm q-pr-sm row"},ka={class:"col-xs-12 col-sm-6 col-md-4"},Ha={class:"date-block q-mb-lg"},pa={class:"time-block row justify-between q-pt-sm q-pb-sm",style:{gap:"6px"}},Oa={class:"item-time-block__quantity"},Ta=S("div",{class:"date-price row items-center q-pt-md q-pt-md"},[S("div",{class:"date-price__item item-date-price row items-center q-mr-xl"},[S("span",{class:"item-date-price__icon blue"}),S("div",{class:"item-date-price__value"},[Ue("2 000 "),S("span",{class:"item-date-price__rub q-ml-sm"},"\u20BD")])]),S("div",{class:"date-price__item item-date-price row items-center"},[S("span",{class:"item-date-price__icon red"}),S("div",{class:"item-date-price__value"},[Ue("2 800 "),S("span",{class:"item-date-price__rub q-ml-sm"},"\u20BD")])])],-1),Ea={__name:"DateTimeGamePage",setup(e){const r=st(),o=j("2024/07/01"),u=["2024/07/01","2024/07/05","2024/07/06","2024/07/09","2024/07/23"],d=j([{label:"10:00",quantity:5,total:10},{label:"11:00",quantity:2,total:10},{label:"12:00",quantity:4,total:10},{label:"13:00",quantity:10,total:10},{label:"14:00",quantity:10,total:10}]),l=()=>{var f;const s={date:o.value,time:((f=d.value.find(M=>M.selected))==null?void 0:f.label)||""};console.log("Saving selectedDateTime:",s),sessionStorage.setItem("selectedDateTimeGame",JSON.stringify(s)),r.push({name:"main"})},D=s=>{d.value.forEach(f=>f.selected=!1),s.selected=!0};return(s,f)=>(ie(),Ge(Rt,null,{default:se(()=>[oe(Pt,{class:"my-page-container body--dark"},{default:se(()=>[oe(Qt,{class:"page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm"},{default:se(()=>[oe(Sa,{onClick:l}),S("div",Ca,[S("div",qa,[S("div",ka,[S("div",Ha,[oe(ha,{modelValue:o.value,"onUpdate:modelValue":f[0]||(f[0]=M=>o.value=M),events:u,"event-color":M=>M[9]%2===0?"blue":"red",locale:new Intl.DateTimeFormat("ru-RU").resolvedOptions(),class:"calendar-custom"},null,8,["modelValue","event-color","locale"])]),S("div",pa,[(ie(!0),Oe(At,null,Bt(d.value,M=>(ie(),Ge(E,{key:M.label,label:M.label,color:"",class:Zt(["time-block__item item-time-block btn-no-effects btn-val-person",{selected:M.selected}]),onClick:m=>D(M)},{default:se(()=>[S("span",{class:"item-time-block__completion",style:Lt({width:`${M.quantity/M.total*100}%`})},null,4),S("span",Oa,Te(M.quantity)+"/"+Te(M.total),1)]),_:2},1032,["label","onClick","class"]))),128))]),Ta])])])]),_:1})]),_:1})]),_:1}))}};export{Ea as default};
