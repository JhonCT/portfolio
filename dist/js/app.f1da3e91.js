(function(t){function e(e){for(var s,n,l=e[0],c=e[1],r=e[2],d=0,m=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&m.push(a[n][0]),a[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,r||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,l=1;l<i.length;l++){var c=i[l];0!==a[c]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=i[0]))}return t}var s={},a={app:0},o=[];function n(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=s,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var r=0;r<l.length;r++)e(l[r]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0140":function(t,e,i){"use strict";var s=i("0ad2"),a=i.n(s);a.a},"0ad2":function(t,e,i){},1676:function(t,e,i){t.exports=i.p+"img/Avatar.bceb3e68.png"},"1d0b":function(t,e,i){"use strict";var s=i("748c"),a=i.n(s);a.a},"31aa":function(t,e,i){},"37fc":function(t,e,i){t.exports=i.p+"img/Captura.e2348a62.png"},"50c47":function(t,e,i){"use strict";var s=i("a9b3"),a=i.n(s);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("section",{staticClass:"hero is-white is-fullheight"},[i("div",{staticClass:"hero-head"},[i("navbar")],1),i("div",{staticClass:"hero-body is-block container"},[i("slogan"),i("projects"),i("comment"),i("about"),i("read-me")],1),i("div",{staticClass:"hero-foot"},[i("Footer")],1)])])},o=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-navbar",{staticClass:"container"},[s("template",{slot:"brand"},[s("b-navbar-item",{attrs:{tag:"div"}},[s("figure",{staticClass:"image is-48x48"},[s("img",{attrs:{src:i("1676"),alt:"Jhon Deyner Catacora Tupa"}})])]),s("b-navbar-item",{staticClass:"is-block",attrs:{tag:"div"}},[s("p",{staticClass:"has-text-weight-bold"},[t._v("Jhon")]),s("p",{staticClass:"has-text-weight-bold"},[t._v("Catacora Tupa")]),s("p",{staticClass:"subtitle is-7"},[t._v("Full Stack Developer")])])],1),s("template",{slot:"end"},[s("b-navbar-item",{attrs:{tag:"div"}},[s("a",{staticClass:"has-text-weight-bold nav-item is-uppercase",attrs:{href:"#"}},[t._v("trabajo")])]),s("b-navbar-item",{attrs:{tag:"div"}},[s("a",{staticClass:"has-text-weight-bold nav-item is-uppercase",attrs:{href:"#"}},[t._v("acerca de mi")])]),s("b-navbar-item",{attrs:{tag:"div"}},[s("a",{staticClass:"has-text-weight-bold nav-item is-uppercase",attrs:{href:"#"}},[t._v("blog")])]),s("b-navbar-item",{attrs:{tag:"div"}},[s("a",{staticClass:"has-text-weight-bold nav-item is-uppercase",attrs:{href:"#"}},[t._v("contacto")])]),s("b-navbar-item",{attrs:{tag:"div"}},[s("contact-button",{attrs:{isOutlined:!0}})],1)],1)],2)},l=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-button",{staticClass:"is-uppercase",attrs:{type:"is-secundary has-text-weight-bold",outlined:t.isOutlined,rounded:""},on:{click:t.modalActive}},[t._v("contáctame")])},r=[],u=new s["a"],d=u,m={name:"ContactButton",data:function(){return{isModalActive:!0}},props:{isOutlined:{type:Boolean,default:!1}},methods:{modalActive:function(){d.$emit("modal-hire-active",this.isModalActive)}}},p=m,v=i("2877"),h=Object(v["a"])(p,c,r,!1,null,null,null),b=h.exports,g={name:"Navbar",data:function(){return{isModalActive:!0}},components:{ContactButton:b}},f=g,C=Object(v["a"])(f,n,l,!1,null,null,null),y=C.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("div",{staticClass:"columns"},[i("div",{staticClass:"column"},[i("h2",{staticClass:"subtitle is-4 has-text-ligth"},[t._v("Hola, Yo soy")]),i("h1",{staticClass:"title has-text-weight-bold"},[t._v("Jhon Catacora Tupa")]),i("h2",{staticClass:"subtitle is-6 has-text-ligth has-text-weight-bold"},[t._v("Full Stack Developer")]),i("div",{staticClass:"block"},t._l(t.skillsList,(function(t){return i("b-icon",{key:t.id,staticClass:"icons",style:{backgroundColor:t.color},attrs:{pack:"fab",icon:t.icon,size:"is-medium",type:"is-white"}})})),1),i("div",{staticClass:"buttons"},[i("contact-button"),i("resume-button")],1)]),t._m(0)])])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column"},[s("figure",{staticClass:"image is-3by2"},[s("img",{attrs:{src:i("37fc"),alt:"Jhon Catacora Tupa"}})])])}],w=[{id:1,icon:"java",color:"#00728b",name:"Java",value:60},{id:2,icon:"php",color:"#8993c1",name:"PHP",value:70},{id:3,icon:"node-js",color:"#8dbf3f",name:"Node JS",value:50},{id:4,icon:"vuejs",color:"#00bc7c",name:"Vue JS",value:80},{id:5,icon:"js",color:"#f0d91d",name:"JS",value:90},{id:6,icon:"angular",color:"#dd0031",name:"Angular",value:30}],A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-button",{staticClass:"has-text-weight-bold has-text-grey is-uppercase",attrs:{type:"is-grey",outlined:"",rounded:""},on:{click:t.modalActive}},[t._v("ver mi cv")])},j=[],k={name:"ResumeButton",data:function(){return{isModalActive:!0}},methods:{modalActive:function(){d.$emit("modal-active-resume",this.isModalActive)}}},q=k,M=Object(v["a"])(q,A,j,!1,null,null,null),P=M.exports,L={name:"Slogan",data:function(){return{skillsList:w}},components:{ContactButton:b,ResumeButton:P}},O=L,z=Object(v["a"])(O,_,x,!1,null,null,null),S=z.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"mb-6 mt-4"},[i("b-tabs",{attrs:{position:"is-centered"}},[i("b-tab-item",{attrs:{label:"All"}},[i("div",{staticClass:"columns is-multiline"},t._l(t.projectsList,(function(t){return i("div",{key:t.id,staticClass:"column is-three-third-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"},[i("ProjectItem",{attrs:{name:t.name,category:t.category,image:t.image,year:t.year}})],1)})),0)]),i("b-tab-item",{attrs:{label:"App"}},[i("div",{staticClass:"columns is-multiline"},t._l(t.projectsList,(function(t){return i("div",{key:t.id,staticClass:"column is-three-third-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"},[i("ProjectItem",{attrs:{name:t.name,category:t.category,image:t.image,year:t.year}})],1)})),0)]),i("b-tab-item",{attrs:{label:"Website"}},[i("div",{staticClass:"columns is-multiline"},t._l(t.projectsList,(function(t){return i("div",{key:t.id,staticClass:"column is-three-third-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"},[i("ProjectItem",{attrs:{name:t.name,category:t.category,image:t.image,year:t.year}})],1)})),0)]),i("b-tab-item",{attrs:{label:"Interaction"}},[i("div",{staticClass:"columns is-multiline"},t._l(t.projectsList,(function(t){return i("div",{key:t.id,staticClass:"column is-three-third-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"},[i("ProjectItem",{attrs:{name:t.name,category:t.category,image:t.image,year:t.year}})],1)})),0)])],1),i("div",{staticClass:"center-item"},[i("b-button",{staticClass:"has-text-weight-bold is-uppercase",attrs:{type:"is-secundary",outlined:"",rounded:""}},[t._v("más trabajos")])],1),i("project-modal")],1)},E=[],I=[{id:1,name:"Project 1",category:"App",image:"https://bulma.io/images/placeholders/1280x960.png",year:"2011"},{id:2,name:"Project 2",category:"App",image:"https://bulma.io/images/placeholders/1280x960.png",year:"2012"},{id:3,name:"Project 3",category:"App",image:"https://bulma.io/images/placeholders/1280x960.png",year:"2013"},{id:4,name:"Project 4",category:"App",image:"https://bulma.io/images/placeholders/1280x960.png",year:"2014"},{id:5,name:"Project 5",category:"App",image:"https://bulma.io/images/placeholders/1280x960.png",year:"2015"},{id:6,name:"Project 6",category:"App",image:"https://bulma.io/images/placeholders/1280x960.png",year:"2016"},{id:7,name:"Project 7",category:"App",image:"https://bulma.io/images/placeholders/1280x960.png",year:"2017"},{id:8,name:"Project 8",category:"App",image:"https://bulma.io/images/placeholders/1280x960.png",year:"2018"},{id:9,name:"Project 9",category:"App",image:"https://bulma.io/images/placeholders/1280x960.png",year:"2019"}],J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{on:{click:t.modalActive}},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-4by3"},[i("img",{staticClass:"image-project",attrs:{src:t.image,alt:"Placeholder image"}})])]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"content"},[i("p",{staticClass:"has-text-weight-bold has-text-light is-uppercase"},[t._v(t._s(t.category))]),i("p",{staticClass:"is-size-5 has-text-weight-bold is-uppercase is-inline"},[t._v(t._s(t.name))]),i("p",{staticClass:"is-size-5 has-text-weight-bold is-inline year"},[t._v(t._s(t.year))])])])])])},D=[],T=(i("b0c0"),{name:"ProjectItem",data:function(){return{isModalActive:!0}},props:{name:String,category:String,image:String,year:String},methods:{modalActive:function(){d.$emit("modal-project-active",{isModalActive:this.isModalActive,image:this.image,category:this.category,name:this.name,year:this.year})}}}),R=T,U=Object(v["a"])(R,J,D,!1,null,null,null),B=U.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-modal",{attrs:{active:t.isModalActive,scroll:"clip",width:1259,"can-cancel":!1},on:{"update:active":function(e){t.isModalActive=e}}},[i("div",{staticClass:"box"},[i("div",{staticClass:"columns has-background-white"},[i("div",{staticClass:"column is-8"},[i("figure",{staticClass:"image is-128by128"},[i("img",{attrs:{src:t.image,alt:"Image"}})])]),i("div",{staticClass:"column is-4 information-project"},[i("div",{staticClass:"has-text-right"},[i("a",{on:{click:function(e){t.isModalActive=!1}}},[i("b-icon",{staticClass:"icons",attrs:{pack:"fas",icon:"times-circle",size:"is-medium",type:"is-secundary"}})],1)]),i("div",{staticClass:"is-uppercase has-text-weight-bold"},[i("p",{staticClass:"title is-4"},[t._v(t._s(t.name))]),i("p",{staticClass:"subtitle is-6"},[i("span",[t._v(t._s(t.category))]),i("span",{staticClass:"ml-2 mr-2"},[t._v("|")]),i("span",[t._v(t._s(t.year))])])]),i("div",{staticClass:"information-client"},[i("p",{staticClass:"is-size-6 has-text-weight-bold is-capitalized"},[t._v("client:")]),i("p",{staticClass:"is-size-6 has-text-light is-italic"},[t._v("Creative Agency")])]),i("div",{staticClass:"description-project"},[i("p",{staticClass:"is-size-7"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ducimus modi voluptatibus maxime quo doloremque earum pariatur accusantium tempora, sit adipisci expedita sed inventore placeat labore mollitia aspernatur corporis minima.")])])])])])])},F=[],N={name:"ProjectModal",data:function(){return{isModalActive:!1,image:"",name:"",category:"",year:""}},mounted:function(){var t=this;d.$on("modal-project-active",(function(e){t.isModalActive=e.isModalActive,t.image=e.image,t.name=e.name,t.category=e.category,t.year=e.year}))}},X=N,Q=(i("1d0b"),Object(v["a"])(X,V,F,!1,null,null,null)),H=Q.exports,W={name:"Projects",data:function(){return{projectsList:I}},components:{ProjectItem:B,ProjectModal:H}},Y=W,G=Object(v["a"])(Y,$,E,!1,null,null,null),K=G.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"mt-6"},[i("div",{staticClass:"columns"},[t._m(0),i("div",{staticClass:"column"},[i("h2",{staticClass:"subtitle is-1 has-text-weight-bold is-uppercase"},[t._v("acerca de mi")]),i("h1",{staticClass:"title has-text-weight-bold has-text-light is-uppercase"},[t._v("¿Quién soy yo?")]),i("p",{staticClass:"is-size-6"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat qui laborum corrupti impedit hic optio a adipisci, quos ad distinctio sit, numquam voluptatem laboriosam! Aut adipisci esse error reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel soluta minus voluptas, praesentium maiores id hic dignissimos ducimus reiciendis tenetur esse fugit libero magnam blanditiis veniam, inventore sunt amet repellat, laudantium molestiae nemo expedita natus autem possimus? Magni eligendi iure doloribus. Laborum at perspiciatis adipisci voluptate ab et recusandae eligendi. Distinctio doloribus laudantium ipsum quia, laboriosam ratione deleniti? Pariatur atque, distinctio aperiam voluptate dignissimos facilis aliquid eius quibusdam deleniti amet quo! Ad, voluptatibus ipsum veritatis fugit aperiam vel dolore porro ex officiis fugiat aliquam repudiandae illo culpa error expedita quo, dignissimos ratione enim obcaecati nisi. Culpa deleniti inventore in cumque.")]),i("div",{staticClass:"buttons"},[i("contact-button"),i("resume-button")],1)])]),i("contact-modal"),i("resume-modal")],1)},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column"},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:i("fc16"),alt:"Jhon Catacora Tupa"}})])])}],et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-modal",{attrs:{active:t.isModalActive,scroll:"clip","can-cancel":!1},on:{"update:active":function(e){t.isModalActive=e}}},[i("div",{staticClass:"box"},[i("div",{staticClass:"columns has-background-white"},[i("div",{staticClass:"column is-6 is-mobile"},[i("div",{staticClass:"mt-5 ml-2 mb-5"},[i("div",{staticClass:"has-text-right is-sr-only-mobile"},[i("a",{staticClass:"container-close",on:{click:function(e){t.isModalActive=!1}}},[i("b-icon",{attrs:{pack:"fas",icon:"times-circle",size:"is-medium",type:"is-secundary"}})],1)]),i("h1",{staticClass:"title is-1 is-uppercase has-text-weight-bold"},[t._v("hablemos")]),i("h2",{staticClass:"subtitle is-6 is-uppercase has-text-weight-bold"},[t._v("llamame o envíame un mensaje")]),i("ul",[i("li",[i("b-icon",{staticClass:"is-inline mr-1",attrs:{pack:"fas",icon:"phone-square",type:"is-secundary"}}),i("span",{},[t._v("97564321")])],1),i("li",[i("b-icon",{staticClass:"is-inline mr-1",attrs:{pack:"fas",icon:"envelope-square",type:"is-secundary"}}),i("span",{},[t._v("xanandra2014@gmail.com")])],1)]),i("div",{staticClass:"form mt-5"},[i("b-field",{attrs:{label:"Email"}},[i("b-input",{attrs:{placeholder:"Email",rounded:""}})],1),i("b-field",{attrs:{label:"Solicitud"}},[i("b-input",{attrs:{"aria-placeholder":"Escribe tu solicitud",maxlength:"200",type:"textarea","has-counter":!1}})],1)],1),i("div",{staticClass:"has-text-right mt-5"},[i("b-button",{staticClass:"is-uppercase has-text-weight-bold",attrs:{type:"is-secundary",rounded:""}},[t._v("enviar")])],1)])]),i("div",{staticClass:"column is-6 is-hidden-mobile"},[i("figure",{staticClass:"image is-3by2 container-image"},[i("img",{attrs:{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Image"}})]),i("a",{staticClass:"container-close",on:{click:function(e){t.isModalActive=!1}}},[i("b-icon",{attrs:{pack:"fas",icon:"times-circle",size:"is-medium",type:"is-secundary"}})],1)])])])])},it=[],st={name:"Contact",data:function(){return{isModalActive:!1}},mounted:function(){var t=this;d.$on("modal-hire-active",(function(e){t.isModalActive=e}))}},at=st,ot=(i("f3e5"),Object(v["a"])(at,et,it,!1,null,null,null)),nt=ot.exports,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-modal",{attrs:{active:t.isModalActive,width:1250,scroll:"clip","can-cancel":!1},on:{"update:active":function(e){t.isModalActive=e}}},[i("div",{staticClass:"box"},[i("div",{staticClass:"has-background-white pb-6"},[i("div",{staticClass:"has-text-right"},[i("a",{on:{click:function(e){t.isModalActive=!1}}},[i("b-icon",{staticClass:"icons",attrs:{pack:"fas",icon:"times-circle",size:"is-medium",type:"is-secundary"}})],1)]),i("div",{staticClass:"has-text-centered"},[i("h1",{staticClass:"title is-2 mb-6 is-capitalized"},[t._v("curriculum vitae")])]),i("div",{staticClass:"container-resume"},[i("div",{staticClass:"columns is-mobile"},[i("div",{staticClass:"column is-6 has-text-right"},[i("b-button",{staticClass:"is-uppercase mb-6",attrs:{type:"is-secundary",outlined:"",rounded:""}},[t._v("descargar pdf")])],1),i("div",{staticClass:"column is-6"},[i("b-button",{staticClass:"is-uppercase mb-6",attrs:{type:"is-secundary",outlined:"",rounded:""}},[t._v("imprimir")])],1)]),i("div",{staticClass:"columns is-mobile"},[i("div",{staticClass:"column is-2-desktop is-3-tablet is-hidden-mobile"}),i("div",{staticClass:"column is-4-desktop is-3-tablet is-6-mobile has-text-right column-border-right"},[i("div",{staticClass:"mr-5"},[i("h3",{staticClass:"title is-5 is-uppercase"},[t._v("experiencia")]),t._l(t.experiences,(function(e){return i("div",{key:e.id,staticClass:"mb-5 is-size-7"},[i("p",{staticClass:"has-text-underline has-text-weight-bold is-capitalized"},[t._v(t._s(e.date))]),i("p",{staticClass:"has-text-weight-bold is-capitalized"},[t._v(t._s(e.agency))]),i("p",{staticClass:"is-italic is-capitalized"},[t._v(t._s(e.position))]),i("p",[t._v(t._s(e.description))])])}))],2)]),i("div",{staticClass:"column is-4-desktop is-3-tablet is-6-mobile column-border-left"},[i("div",{staticClass:"ml-5"},[i("h3",{staticClass:"title is-5 is-uppercase"},[t._v("educación")]),t._l(t.degrees,(function(e){return i("div",{key:e.id,staticClass:"mb-5"},[i("p",{staticClass:"is-size-7 has-text-underline has-text-weight-bold"},[t._v(t._s(e.date))]),i("p",{staticClass:"is-size-7 has-text-weight-bold is-capitalized"},[t._v(t._s(e.career))]),i("p",{staticClass:"is-size-7 is-italic is-capitalized"},[t._v(t._s(e.university))])])})),i("h3",{staticClass:"title is-5 is-uppercase"},[t._v("skills")]),i("div",{staticClass:"mb-6"},t._l(t.skills,(function(e){return i("div",{key:e.id,staticClass:"columns is-mobile"},[i("div",{staticClass:"column is-3-desktop is-4-mobile p-0 ml-3"},[i("span",{staticClass:"is-size-7"},[t._v(t._s(e.name))])]),i("div",{staticClass:"column is-6-mobile p-0 mr-6"},[i("b-progress",{staticClass:"mt-2",attrs:{value:e.value}})],1)])})),0),i("h3",{staticClass:"title is-5 is-uppercase"},[t._v("premios")]),t._l(t.awards,(function(e){return i("div",{key:e.id,staticClass:"columns is-mobile is-size-7"},[i("div",{staticClass:"column is-1-desktop is-3-mobile has-text-underline"},[t._v(t._s(e.date))]),i("div",{staticClass:"column is-11-desktop is-9-mobile"},[i("p",{staticClass:"has-text-weight-bold is-uppercase"},[t._v(t._s(e.title))]),i("p",[t._v(t._s(e.description))])])])}))],2)]),i("div",{staticClass:"column is-2-desktop is-3-tablet is-hidden-mobile"})])])])])])},ct=[],rt=[{id:1,date:"2017 - present",agency:"freelancer",position:"art director",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae obcaecati iste placeat ea repellat, dolorum, voluptates iusto quod labore temporibus modi aliquid est tenetur, quos facere pariatur veniam ratione voluptas."},{id:2,date:"2016 - 2017",agency:"the best agency",position:"art director",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae obcaecati iste placeat ea repellat, dolorum, voluptates iusto quod labore temporibus modi aliquid est tenetur, quos facere pariatur veniam ratione voluptas."},{id:3,date:"2014 - 2016",agency:"better agency",position:"senior UI/UX designer",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae obcaecati iste placeat ea repellat, dolorum, voluptates iusto quod labore temporibus modi aliquid est tenetur, quos facere pariatur veniam ratione voluptas."},{id:4,date:"2012 - 2014",agency:"good agency",position:"UI/UX designer",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae obcaecati iste placeat ea repellat, dolorum, voluptates iusto quod labore temporibus modi aliquid est tenetur, quos facere pariatur veniam ratione voluptas."}],ut=[{id:1,date:"2005 - 2010",career:"UI/UX designer",university:"LA university, USA"},{id:1,date:"2002 - 2005",career:"UI/UX designer",university:"LA college of art, USA"}],dt=[{id:1,date:"2018",title:"the best app interface",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam et corrupti quasi, cupiditate in? Quo, cupiditate, quaerat velit eveniet."},{id:2,date:"2018",title:"the best app interface",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam et corrupti quasi, cupiditate in? Quo, cupiditate, quaerat velit eveniet."}],mt={name:"ResumeModal",data:function(){return{isModalActive:!1,skills:w,experiences:rt,degrees:ut,awards:dt}},mounted:function(){var t=this;d.$on("modal-active-resume",(function(e){t.isModalActive=e}))}},pt=mt,vt=(i("0140"),Object(v["a"])(pt,lt,ct,!1,null,null,null)),ht=vt.exports,bt={name:"About",components:{ContactButton:b,ContactModal:nt,ResumeButton:P,ResumeModal:ht}},gt=bt,ft=(i("50c47"),Object(v["a"])(gt,Z,tt,!1,null,null,null)),Ct=ft.exports,yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"hero is-secundary"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("b-carousel",{attrs:{arrow:!1,indicator:!1,autoplay:!0,"pause-info":!1}},t._l(t.carousels,(function(e,s){return i("b-carousel-item",{key:s},[i("section",{staticClass:"hero is-small is-secundary"},[i("div",{staticClass:"hero-body"},[i("h1",{staticClass:"comment has-text-centered"},[t._v(t._s(e.title))])])])])})),1)],1)])])},_t=[],xt={name:"Comment",data:function(){return{carousels:[{title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores inventore nulla laudantium nisi. Aspernatur eos doloremque iusto deleniti nesciunt dolorem maxime hic cum recusandae veritatis, soluta non cumque? Assumenda, unde."},{title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores inventore nulla laudantium nisi. Aspernatur eos doloremque iusto deleniti nesciunt dolorem maxime hic cum recusandae veritatis, soluta non cumque? Assumenda, unde."},{title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores inventore nulla laudantium nisi. Aspernatur eos doloremque iusto deleniti nesciunt dolorem maxime hic cum recusandae veritatis, soluta non cumque? Assumenda, unde."},{title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores inventore nulla laudantium nisi. Aspernatur eos doloremque iusto deleniti nesciunt dolorem maxime hic cum recusandae veritatis, soluta non cumque? Assumenda, unde."}]}}},wt=xt,At=Object(v["a"])(wt,yt,_t,!1,null,null,null),jt=At.exports,kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"mt-6"},[t._m(0),i("div",[i("div",{staticClass:"columns is-multiline"},[t._l(t.postsList,(function(t){return i("div",{key:t.id,staticClass:"column is-three-third-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"},[i("ReadMeItem",{attrs:{day:t.day,month:t.month,image:t.image,title:t.title,category:t.category,description:t.description,url:t.url}})],1)})),i("div",{staticClass:"column is-full has-text-right mt-5 mb-5"},[i("b-button",{staticClass:"is-size-7",attrs:{type:"is-text"}},[t._v("Ver más posts")])],1)],2)])])},qt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"has-text-centered mb-6"},[i("h1",{staticClass:"title has-text-weight-bold is-uppercase"},[t._v("leeme")]),i("h2",{staticClass:"subtitle has-text-light"},[t._v("A veces escribo algo inteligente")])])}],Mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"post"},[i("div",{staticClass:"container-image-post"},[i("div",{staticClass:"container-date has-background-secundary has-text-white has-text-centered"},[i("p",[t._v(t._s(t.day))]),i("p",{staticClass:"is-capitalized"},[t._v(t._s(t.month))])]),i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:t.image,alt:"Post"}})])]),i("div",{staticClass:"information-post"},[i("div",{staticClass:"has-text-weight-bold is-uppercase"},[i("p",{staticClass:"title is-5"},[t._v(t._s(t.title))]),i("p",{staticClass:"subtitle is-6 has-text-light"},[t._v(t._s(t.category))])]),i("div",{staticClass:"content"},[t._v(t._s(t.description))]),i("div",[i("b-button",{staticClass:"is-uppercase",attrs:{type:"is-secundary",outlined:"",rounded:""},on:{click:function(e){return t.goToPost(t.url)}}},[t._v("leer más")])],1)])])},Pt=[],Lt=(i("a9e3"),{name:"ReadMeItem",props:{day:Number,month:String,image:String,title:String,category:String,description:String,url:String},methods:{goToPost:function(t){window.open(t)}}}),Ot=Lt,zt=(i("9127"),Object(v["a"])(Ot,Mt,Pt,!1,null,null,null)),St=zt.exports,$t=[{id:1,day:10,month:"Junio",image:"https://bulma.io/images/placeholders/1280x960.png",title:"Post 1",category:"App",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto voluptatem porro nihil aliquam provident ex sunt ullam, omnis aliquid, ab fugit aut eius quo delectus facilis aspernatur nam. Dolores!",url:"https://www.google.com"},{id:2,day:20,month:"Agosto",image:"https://bulma.io/images/placeholders/1280x960.png",title:"Post 2",category:"Mobile",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto voluptatem porro nihil aliquam provident ex sunt ullam, omnis aliquid, ab fugit aut eius quo delectus facilis aspernatur nam. Dolores!",url:"https://www.google.com"},{id:3,day:15,month:"Setiembre",image:"https://bulma.io/images/placeholders/1280x960.png",title:"Post 3",category:"Linux",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto voluptatem porro nihil aliquam provident ex sunt ullam, omnis aliquid, ab fugit aut eius quo delectus facilis aspernatur nam. Dolores!",url:"https://www.google.com"}],Et={name:"ReadMe",data:function(){return{postsList:$t}},components:{ReadMeItem:St}},It=Et,Jt=Object(v["a"])(It,kt,qt,!1,null,null,null),Dt=Jt.exports,Tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Rt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"has-background-secundary"},[i("div",{staticClass:"container"},[i("p",{staticClass:"has-text-grey"},[t._v("2020 - Jhon Catacora Tupa")])])])}],Ut={name:"Footer"},Bt=Ut,Vt=Object(v["a"])(Bt,Tt,Rt,!1,null,null,null),Ft=Vt.exports,Nt={name:"App",components:{Navbar:y,Slogan:S,Projects:K,About:Ct,Comment:jt,ReadMe:Dt,Footer:Ft}},Xt=Nt,Qt=Object(v["a"])(Xt,a,o,!1,null,null,null),Ht=Qt.exports,Wt=i("289d"),Yt=i("ad3d"),Gt=i("ecee"),Kt=i("c074"),Zt=i("f2d1");i("b156");Gt["c"].add(Kt["a"],Zt["a"]),s["a"].component("vue-fontawesome",Yt["a"]),s["a"].use(Wt["a"],{defaultIconComponent:"vue-fontawesome",defaultIconPack:"fas"}),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(Ht)}}).$mount("#app")},"748c":function(t,e,i){},9127:function(t,e,i){"use strict";var s=i("f7af"),a=i.n(s);a.a},a9b3:function(t,e,i){},b156:function(t,e,i){},f3e5:function(t,e,i){"use strict";var s=i("31aa"),a=i.n(s);a.a},f7af:function(t,e,i){},fc16:function(t,e,i){t.exports=i.p+"img/Captura2.008b8df7.png"}});
//# sourceMappingURL=app.f1da3e91.js.map