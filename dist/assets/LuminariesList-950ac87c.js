import{ab as g,C as p,r as B,D as s,E as I,F as L,m as h,H as D,G as f,a8 as i,ae as C,I as _,$ as a,a6 as u,aa as c,Q as w,a9 as S}from"./index-397ca68d.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{r as b,j as V}from"./VBtn-b8e30933.js";const $=g(),W=p({name:"LikeButton",props:{luminaryId:{type:String,required:!0},isLiked:{type:Boolean,required:!0}},setup(e){return{liked:B(e.isLiked)}},methods:{like(){this.liked?this.unfavorite():this.favorite(),this.liked=!this.liked},favorite(){$.setFavorite(this.luminaryId)},unfavorite(){$.removeFavorite(this.luminaryId)}}});function N(e,t,l,d,n,m){return s(),I(V,{color:"surface",rounded:"xl",size:"x-large",onClick:C(e.like,["prevent"]),style:{height:"5em"}},{default:L(()=>[h(b,{left:"",class:"heart-icon",style:D({color:e.liked?"#26daaa":"white"})},{default:L(()=>[f(i(e.liked?"mdi-heart":"mdi-heart-outline"),1)]),_:1},8,["style"])]),_:1},8,["onClick"])}const P=y(W,[["render",N]]),T=g(),k=T.user,q=p({name:"LuminaryListItem",props:{luminary:{type:Object,required:!0}},methods:{isLuminariesLiked(){return!!(k.favoriteLuminaries&&k.favoriteLuminaries.includes(this.luminary.id))},showData(){const e=this.$refs.data;e&&(e.style.display="block")},hideData(){const e=this.$refs.data;e&&(e.style.display="none")},updateDataPosition(e){const t=this.$refs.data;if(t){const l=e.pageX,d=e.pageY,n=t.offsetWidth,m=window.innerWidth-20;let r=l-n/2,o=d+40;r<0?r=0:r+n>m&&(r=m-n),t.style.left=`${r}px`,t.style.top=`${o}px`}}},data(){return{isScrolling:!1,scrollY:0,scrollVelocity:0}},components:{LikeButton:P}});const A={ref:"data",class:"data"},E={class:"title"},F={key:0},M={key:0},z={key:1},Y={key:2},j={key:3},G={key:4};function H(e,t,l,d,n,m){const r=_("LikeButton");return s(),a(w,null,[u("li",{class:"luminary-list-item",onMouseover:t[0]||(t[0]=(...o)=>e.showData&&e.showData(...o)),onMousemove:t[1]||(t[1]=(...o)=>e.updateDataPosition&&e.updateDataPosition(...o)),onMouseleave:t[2]||(t[2]=(...o)=>e.hideData&&e.hideData(...o))},[u("a",null,[u("h2",null,i(e.luminary.name),1),h(r,{luminaryId:e.luminary.id,isLiked:e.isLuminariesLiked()},null,8,["luminaryId","isLiked"])])],32),u("span",A,[u("div",E,[u("h3",null,i(e.luminary.name),1),e.luminary.bodyType?(s(),a("h4",F,i(e.luminary.bodyType),1)):c("",!0)]),e.luminary.discoveredBy?(s(),a("p",M,[f(" Discovered by "),u("b",null,i(e.luminary.discoveredBy),1),f(" on "+i(e.luminary.discoveryDate),1)])):c("",!0),e.luminary.alternativeName?(s(),a("p",z," Alternative name: "+i(e.luminary.alternativeName),1)):c("",!0),e.luminary.gravity?(s(),a("p",Y," Gravity: "+i(e.luminary.gravity)+" m/s² ",1)):c("",!0),e.luminary.avgTemp?(s(),a("p",j," Average temperature: "+i(e.luminary.avgTemp)+" °K ",1)):c("",!0),e.luminary.aroundPlanet?(s(),a("p",G," Around Planet: "+i(e.luminary.aroundPlanet.planet),1)):c("",!0)],512)],64)}const U=y(q,[["render",H],["__scopeId","data-v-3f0c9b8a"]]),X=p({mounted(){document.addEventListener("mousemove",this.moveCircle)},beforeUnmount(){document.removeEventListener("mousemove",this.moveCircle)},methods:{moveCircle(e){const t=this.$refs.circle,l=t.offsetHeight/2,d=e.clientX,n=e.clientY;t.style.left=`${d-l}px`,t.style.top=`${n-l}px`}}});const K={class:"cursor",ref:"circle"};function O(e,t,l,d,n,m){return s(),a("div",K,null,512)}const Q=y(X,[["render",O],["__scopeId","data-v-61ce675d"]]),J=p({name:"LuminariesList",data(){return{luminaries:[]}},props:{luminariesSet:{type:Array,required:!0}},created(){this.luminaries=this.luminariesSet},updated(){this.luminaries=this.luminariesSet},components:{LuminaryListItem:U,cursorWaw:Q}});function R(e,t,l,d,n,m){const r=_("cursorWaw"),o=_("LuminaryListItem");return s(),a("div",null,[h(r),u("ul",null,[(s(!0),a(w,null,S(e.luminaries,v=>(s(),I(o,{key:v.id,luminary:v},null,8,["luminary"]))),128))])])}const te=y(J,[["render",R],["__scopeId","data-v-51d9901a"]]);export{te as L};
