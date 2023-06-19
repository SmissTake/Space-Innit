import{C as u,D as t,$ as a,a6 as s,a7 as l,a8 as o,G as v,Q as i,_ as P,I as $,a9 as f,E as C,aa as b}from"./index-397ca68d.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";const N=u({name:"SolarSystemPlanetLabel",props:{planet:{type:Object,required:!0},id:{type:Number,required:!0}},computed:{planetClass(){return this.planet.englishName.toLowerCase()}}}),g=["id"],L=["for"],k=s("div",{class:"preview"},null,-1),M={class:"info"},V=s("div",{class:"pip"},null,-1);function w(e,n,m,c,h,_){return t(),a(i,null,[s("input",{checked:"",class:l(["planet"+e.id]),id:e.planetClass,name:"planet",type:"radio"},null,10,g),s("label",{class:l(["menu ",e.planetClass]),for:e.planetClass},[k,s("div",M,[s("h3",null,o(e.planet.englishName),1),s("h2",null,[V,v(" "+o(e.planet.name),1)])])],10,L)],64)}const T=d(N,[["render",w]]),j=u({name:"SolarSystemMoon",props:{planet:{type:Object,required:!0}},computed:{planetClass(){return this.planet.englishName.toLowerCase()}}});function q(e,n,m,c,h,_){return t(),a(i,null,[s("div",{class:l(["moon ",e.planetClass])},[s("h3",null,o(e.planet.bodyType),1),s("h2",null,o(e.planet.name),1)],2),s("div",{class:l(["trajectory ",e.planetClass])},null,2)],64)}const B=d(j,[["render",q]]),D=P(),E=u({name:"SolarSystemPlanetVisual",props:{planet:{type:Object,required:!0}},components:{SolarSystemMoon:B},data(){return{luminaries:[],authMoons:["Triton","Proteus","Nereid","Miranda","Ariel","Umbriel","Titan","Dione","Enceladus","Io","Europa","Ganymede","Deimos","Moon"]}},created(){this.luminaries=D.luminaries},computed:{planetClass(){return this.planet.englishName.toLowerCase()},moons(){return this.luminaries.filter(e=>{var n;return((n=e.aroundPlanet)==null?void 0:n.planet)===this.planet.id&&this.authMoons.includes(e.englishName)})}}}),O={class:"solar_systm"},G=s("div",{class:"overlay"},null,-1);function I(e,n,m,c,h,_){const y=$("SolarSystemMoon");return t(),a("div",O,[s("div",{class:l(["planet ",e.planetClass])},[e.moons.length>0?(t(!0),a(i,{key:0},f(e.moons,(S,r)=>(t(),C(y,{key:r,planet:S},null,8,["planet"]))),128)):b("",!0),s("div",{class:l(["planet_description ",e.planetClass])},[s("h2",null,o(e.planet.bodyType),1),s("h1",null,o(e.planet.name),1)],2),G],2)])}const z=d(E,[["render",I]]),A=P(),F=u({name:"SystemSolar",components:{SolarSystemPlanetLabel:T,SolarSystemPlanetVisual:z},data(){return{luminaries:[]}},created(){this.luminaries=A.luminaries},computed:{solarSystemPlanets(){return this.luminaries=this.luminaries.filter(n=>n.isPlanet)},orderedPlanets(){return this.solarSystemPlanets.sort((e,n)=>n.aphelion-e.aphelion)}}}),Q={class:"solar-system-view"},U={class:"solar"};function H(e,n,m,c,h,_){const y=$("SolarSystemPlanetLabel"),S=$("SolarSystemPlanetVisual");return t(),a("div",Q,[(t(!0),a(i,null,f(e.orderedPlanets,(r,p)=>(t(),C(y,{key:p,planet:r,id:e.orderedPlanets.length-p},null,8,["planet","id"]))),128)),s("div",U,[(t(!0),a(i,null,f(e.orderedPlanets.slice().reverse(),(r,p)=>(t(),C(S,{key:p,planet:r},null,8,["planet"]))),128))])])}const R=d(F,[["render",H]]);export{R as default};
