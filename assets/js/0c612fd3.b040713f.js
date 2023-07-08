"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6696],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return t?n.createElement(g,o(o({ref:r},u),{},{components:t})):n.createElement(g,o({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(7294),a=t(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:r,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:t},r)}},4866:(e,r,t)=>{t.d(r,{Z:()=>T});var n=t(7462),a=t(7294),i=t(6010),o=t(2466),l=t(6550),s=t(1980),d=t(7392),u=t(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??c(t);return function(e){const r=(0,d.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:t}=e;const n=(0,l.k6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(n.location.search);r.set(i,e),n.replace({...n.location,search:r.toString()})}),[i,n])]}function v(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,i=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[s,d]=g({queryString:t,groupId:n}),[c,v]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,i]=(0,u.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),h=(()=>{const e=s??c;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var h=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:r,block:t,selectedValue:l,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{const r=e.currentTarget,t=u.indexOf(r),n=d[t].value;n!==l&&(c(r),s(n))},m=e=>{let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}r?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},r)},d.map((e=>{let{value:r,label:t,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,key:r,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===r})}),t??r)})))}function y(e){let{lazy:r,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n}))))}function k(e){const r=v(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},a.createElement(f,(0,n.Z)({},e,r)),a.createElement(y,(0,n.Z)({},e,r)))}function T(e){const r=(0,h.Z)();return a.createElement(k,(0,n.Z)({key:String(r)},e))}},2422:(e,r,t)=>{t.r(r),t.d(r,{Perso:()=>p,assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=t(7462),a=(t(7294),t(3905)),i=t(4866),o=t(5162);const l={id:"FicheDePersonnageDisparu",title:"Fiche de personnage disparu",description:"Lien vers les fiches de personnage disparues",slug:"/FicheDePersonnageDisparu",sidebar_label:"Fiche de personnage disparu",sidebar_position:22,toc_min_heading_level:2,toc_max_heading_level:2},s=void 0,d={unversionedId:"LeDernierVerre/FicheDePersonnage/FicheDePersonnageDisparu",id:"LeDernierVerre/FicheDePersonnage/FicheDePersonnageDisparu",title:"Fiche de personnage disparu",description:"Lien vers les fiches de personnage disparues",source:"@site/docs/LeDernierVerre/02-FicheDePersonnage/022-Disparu.mdx",sourceDirName:"LeDernierVerre/02-FicheDePersonnage",slug:"/FicheDePersonnageDisparu",permalink:"/ArchiveLeDernierVerre/docs/FicheDePersonnageDisparu",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{id:"FicheDePersonnageDisparu",title:"Fiche de personnage disparu",description:"Lien vers les fiches de personnage disparues",slug:"/FicheDePersonnageDisparu",sidebar_label:"Fiche de personnage disparu",sidebar_position:22,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"DernierVerreSidebar",previous:{title:"Fiche de personnage actif",permalink:"/ArchiveLeDernierVerre/docs/FicheDePersonnageActif"},next:{title:"Archives",permalink:"/ArchiveLeDernierVerre/docs/Archives"}},u={},c=[{value:"@drift azura#4060 - 20/12/2021",id:"drift-azura4060---20122021",level:2},{value:"@PetitePatate#0117 / @pata6765 - 06/03/2022",id:"petitepatate0117--pata6765---06032022",level:2},{value:"@Nelfyqueen\ud83d\udc8b\ud83d\udc9c#8605 - 20/12/2022",id:"nelfyqueen8605---20122022",level:2},{value:"@kinoko. - 25/03/2023",id:"kinoko---25032023",level:2},{value:"@moi_merdre - 20/04/2023",id:"moi_merdre---20042023",level:2},{value:"@venusdevotion - 27/04/2023",id:"venusdevotion---27042023",level:2},{value:"@Nicoo_u#6019 - 30/04/2023",id:"nicoo_u6019---30042023",level:2},{value:"@\u018a\u0454\u043c\u03c3\u03b7\u0454 | \ud83c\udf3a#5345 - 22/05/2023",id:"\u0257\u0454\u043c\u03c3\u03b7\u0454--5345---22052023",level:2},{value:"@fawlliin - 19/06/2023",id:"fawlliin---19062023",level:2}],p=e=>{let{source:r,nom:t,"dateArriv\xe9e":n,"d\xe9part":i,"dateArriv\xe9e2":o,"d\xe9part2":l,lien:s}=e;return function(e){var t='Statut : <span style="color: #0b0">actif</span><br/>';null!=i&&(t='Statut : <span style="color: #b00">'+i+"</span><br/>"),null!=o&&null!=l?t+="Fiche valid\xe9e le "+o+'<br/><span style="color: #b00">'+l+"</span><br/>":null!=o&&(t+="Fiche valid\xe9e le "+o+'<br/>Statut : <span style="color: #0b0">actif</span><br/>');e=e="<h3>"+e+"</h3>";return(null!=l||null!=i&&null==o)&&(e="<h3><i>"+e+"</i></h3>"),(0,a.kt)("div",{style:{display:"flex",flexWrap:"wrap"}},(0,a.kt)("div",null,(0,a.kt)("div",{class:"alignCenter",style:{paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px"}},(0,a.kt)("img",{style:{height:"250px",width:"150px",objectFit:"cover",border:"1px solid #000"},src:r,title:e,alt:e}))),(0,a.kt)("div",{style:{width:"300px",paddingTop:"20px",paddingBottom:"20px",paddingLeft:"5px",paddingRight:"5px"}},(0,a.kt)("span",{dangerouslySetInnerHTML:{__html:e}}),"Fiche valid\xe9e le ",n,(0,a.kt)("br",null),(0,a.kt)("span",{dangerouslySetInnerHTML:{__html:t}}),(0,a.kt)("form",{action:s,target:"_blank"},(0,a.kt)("button",{style:{backgroundColor:"#7289da",borderRadius:30,color:"white",cursor:"pointer",margin:"20px",padding:"10px"}},"Lien vers la fiche"))))}(t)},m={toc:c,Perso:p},g="wrapper";function v(e){let{components:r,...t}=e;return(0,a.kt)(g,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"drift-azura4060---20122021"},"@drift azura#4060 - 20/12/2021"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{label:"Rachel Gardner",value:"1",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/d_Rachel.png",nom:"Rachel Gardner","dateArriv\xe9e":"11/01/2022","d\xe9part":"disparue le 06/07/2023",lien:"https://docs.google.com/document/d/1CMTZCaofXABvxUQkYUQEJxTdHZDP6Qd5jkjD3N7f2vs/edit",mdxType:"Perso"})),(0,a.kt)(o.Z,{label:"Alice Cross",value:"2",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/d_Alice.png",nom:"Alice Cross","dateArriv\xe9e":"13/01/2022","d\xe9part":"disparue le 06/07/2023",lien:"https://docs.google.com/document/d/19WdGECv2aZWiJDbrTpntcw6EGiVnvRmYAuzEqftqmOc/edit",mdxType:"Perso"})),(0,a.kt)(o.Z,{label:"Saphir Shiva",value:"3",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/d_Saphir.png",nom:"Saphir Shiva","dateArriv\xe9e":"03/02/2022","d\xe9part":"disparue le 20/01/2023",lien:"https://docs.google.com/document/d/1PPnqSpQ1WC_JSJsx1AyWvFgf9LjN5Mhu6ruUJKyeBB4/edit",mdxType:"Perso"})),(0,a.kt)(o.Z,{label:'Adrien "Zack" Gasxa',value:"4",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/d_Zack.png",nom:'Adrien "Zack" Gasxa',"dateArriv\xe9e":"13/04/2022","d\xe9part":"disparu le 06/07/2023",lien:"https://docs.google.com/document/d/1XJ8-y1B_p7czH8OftKc3lqE0iJu9OZb2xkJSW0tHteU/edit",mdxType:"Perso"})),(0,a.kt)(o.Z,{label:"Eleanore Vignis",value:"5",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/d_Eleanore.png",nom:"Eleanore Vignis","dateArriv\xe9e":"08/02/2023","d\xe9part":"disparue le 06/07/2023",lien:"https://docs.google.com/document/d/1aiIuHTg8sC6zBX8ihBerB-Nf3MfH96wFMVFykWUoi1Y/edit",mdxType:"Perso"}))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"petitepatate0117--pata6765---06032022"},"@PetitePatate#0117 / @pata6765 - 06/03/2022"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{label:"Elliena",value:"1",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/p_Elliena.png",nom:"Elliena","dateArriv\xe9e":"07/03/2022","d\xe9part":"disparue le 11/05/2022",lien:"https://docs.google.com/document/d/1Vy7Pe3TXfh85aKsV2NZbpk23EyzJwYg1jHISjtrui5c/edit",mdxType:"Perso"})),(0,a.kt)(o.Z,{label:"Asmodeus Izaki",value:"2",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/p_Asmodeus.png",nom:"Asmodeus Izaki","dateArriv\xe9e":"08/03/2022","d\xe9part":"disparu le 31/05/2022",lien:"https://docs.google.com/document/d/1QMVJIskFueTFA834CZtkRsKUghTNvFVrVjqbyVhQL6E/edit",mdxType:"Perso"})),(0,a.kt)(o.Z,{label:"Kishan Rajaraam",value:"3",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/p_Kishan.png",nom:"Kishan Rajaraam","dateArriv\xe9e":"15/03/2022","d\xe9part":"disparu le 27/02/2023",lien:"https://docs.google.com/document/d/1kbJ1hgONu98Z7Uwxla87E-KjAfoc1q4bdDtX_vIorvQ/edit",mdxType:"Perso"})),(0,a.kt)(o.Z,{label:"Hana\xe9 Kaari",value:"4",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/p_Hana\xe9.jpg",nom:"Hana\xe9 Kaari","dateArriv\xe9e":"13/04/2022","d\xe9part":"disparue le 08/02/2023",lien:"https://docs.google.com/document/d/1cPU9QTRInIabExqNRhqLizvRcpUD-jX0XFlI9IjDGgw/edit",mdxType:"Perso"})),(0,a.kt)(o.Z,{label:"Callie-Rose Wood",value:"5",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/p_CallieRose.png",nom:"Callie-Rose Wood","dateArriv\xe9e":"12/05/2022","d\xe9part":"disparue le 06/07/2023",lien:"https://docs.google.com/document/d/16vmZUrldNnfSegxwcs7qrTrfPts8Yf0eVTkxEQCSfJA/edit",mdxType:"Perso"})),(0,a.kt)(o.Z,{label:"Li-Wei Fa",value:"6",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/p_LiWei.png",nom:"Li-Wei Fa","dateArriv\xe9e":"30/10/2022","d\xe9part":"disparue le 27/02/2023",lien:"https://docs.google.com/document/d/1K2pj_ff0niCcCaRT7F_3pcnEAWopBwRbJnRK0ZHd6FI/edit",mdxType:"Perso"}))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"nelfyqueen8605---20122022"},"@Nelfyqueen\ud83d\udc8b\ud83d\udc9c#8605 - 20/12/2022"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{label:"Liv Mihiro",value:"1",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/n_Liv.png",nom:"Liv Mihiro","dateArriv\xe9e":"04/05/2023","d\xe9part":"disparue le 06/07/2023",lien:"https://docs.google.com/document/d/1iRHOa1lzGFRL-cC94ZClMrqFvUp3zFAoIglmgF2YE6k/edit",mdxType:"Perso"}))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"kinoko---25032023"},"@kinoko. - 25/03/2023"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{label:"Mary Collins",value:"1",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/k_Mary.png",nom:"Mary Collins","dateArriv\xe9e":"14/04/2023","d\xe9part":"disparue le 06/07/2023",lien:"https://docs.google.com/document/d/1kjKGYKeq_z6n2TI5HZ10g01SJYbIi34o3mKEOjopDLk/edit",mdxType:"Perso"}))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"moi_merdre---20042023"},"@moi_merdre - 20/04/2023"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{label:"John Bentham",value:"1",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/m_John.png",nom:"John Bentham","dateArriv\xe9e":"21/04/2023","d\xe9part":"disparu le 06/07/2023",lien:"https://docs.google.com/document/d/13LvNjb-PbexPtZXx-irNW4-XAiFH16H4UubzyFvhOqk/edit",mdxType:"Perso"}))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"venusdevotion---27042023"},"@venusdevotion - 27/04/2023"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{label:"Akhille\xf9s de Borgia d'Aragon",value:"1",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/v_Akhilleus.png",nom:"Akhille\xf9s de Borgia d'Aragon","dateArriv\xe9e":"27/04/2023","d\xe9part":"disparue le 06/07/2023",lien:"https://docs.google.com/document/d/1gZuE8oV5WmFjQ73Z1x-8p2S-twmU_5KeuJGmL9Ov_xM/edit",mdxType:"Perso"}))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"nicoo_u6019---30042023"},"@Nicoo_u#6019 - 30/04/2023"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{label:"Romuald Brads",value:"1",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/n_Romuald.png",nom:"Romuald Brads","dateArriv\xe9e":"07/05/2023","d\xe9part":"disparu le 30/06/2023",lien:"https://docs.google.com/document/d/1mU5xiA-58_5trVOjGYKGMuiWIYBDrTWy_gQGW5FDojw/edit",mdxType:"Perso"}))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u0257\u0454\u043c\u03c3\u03b7\u0454--5345---22052023"},"@\u018a\u0454\u043c\u03c3\u03b7\u0454 | \ud83c\udf3a#5345 - 22/05/2023"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{label:"Andrew Denver",value:"1",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/d_Andrew.png",nom:"Andrew Denver","dateArriv\xe9e":"23/05/2023","d\xe9part":"disparu le 06/07/2023",lien:"https://docs.google.com/document/d/1zGGH90l0HpsA3He7i2WVZj6O0uVF76GJnwRMN9Qrf6c/edit",mdxType:"Perso"}))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"fawlliin---19062023"},"@fawlliin - 19/06/2023"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{label:"Ayalp Koksal",value:"1",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/f_Ayalp.png",nom:"Ayalp Koksal","dateArriv\xe9e":"19/06/2023","d\xe9part":"disparu le 08/07/2023",lien:"https://docs.google.com/document/d/1qbYSs7dqN_7rr9syxCjtnng4aLTeJcRJt4GRIhHuwtI/edit",mdxType:"Perso"}))),(0,a.kt)("hr",null),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{label:"",value:"1",mdxType:"TabItem"},(0,a.kt)(p,{source:"/ArchiveLeDernierVerre/img/personnage/",nom:"","dateArriv\xe9e":"",lien:"",mdxType:"Perso"}))))}v.isMDXComponent=!0}}]);