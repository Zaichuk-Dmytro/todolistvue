(function(t){function e(e){for(var s,a,l=e[0],i=e[1],c=e[2],u=0,f=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},r={app:0},o=[];function l(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-035b257f":"790946c7"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-035b257f":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var s="css/"+({}[t]||t)+"."+{"chunk-035b257f":"18961f64"}[t]+".css",r=i.p+s,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var c=o[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===s||u===r))return e()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){c=f[l],u=c.getAttribute("data-href");if(u===s||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var s=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete a[t],d.parentNode.removeChild(d),n(o)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[t]=0})));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise((function(e,n){s=r[t]=[e,n]}));e.push(s[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=l(t);var f=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",f.name="ChunkLoadError",f.type=s,f.request=a,n[1](f)}r[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"06e8":function(t,e,n){"use strict";n("58db")},"1fbd":function(t,e,n){var s={"./CustomButton.vue":"933f","./CustomFooter.vue":"604d","./CustomHeader.vue":"339c","./CustomInput.vue":"ffcc","./TaskList.vue":"8e02","./Wrapper.vue":"8c3d"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=r,t.exports=a,a.id="1fbd"},"265b":function(t,e,n){},"268c":function(t,e,n){"use strict";n("eccd")},"339c":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("p",{staticClass:"header__title"},[t._v("TO DO LIST")])])}],r={name:"custom-header"},o=r,l=(n("268c"),n("2877")),i=Object(l["a"])(o,s,a,!1,null,"c834930e",null);e["default"]=i.exports},"561f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d81d"),n("d3b7"),n("ddb0"),n("b0c0");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},r=[],o={name:"App",data:function(){return{}}},l=o,i=n("2877"),c=Object(i["a"])(l,a,r,!1,null,null,null),u=c.exports,f=(n("3ca3"),n("8c4f"));s["a"].use(f["a"]);var d=[{path:"/",name:"Home",component:function(){return n.e("chunk-035b257f").then(n.bind(null,"6ccf"))}}],m=new f["a"]({mode:"history",base:"/",routes:d}),v=m,p=n("2909"),h=n("2f62");s["a"].use(h["a"]);var k=new h["a"].Store({state:{allTasks:[],mode:"ALL"},mutations:{set_allTasks:function(t,e){t.allTasks=e},push_to_allTasks:function(t,e){if(""!=e){var n=t.allTasks.length?Math.max.apply(Math,Object(p["a"])(t.allTasks.map((function(t){return t.id})))):0;t.allTasks.push({id:++n,value:e,select:!1})}},set_mode:function(t,e){t.mode=e}},getters:{get_allTasks:function(t){return t.allTasks},get_mode:function(t){return t.mode}},actions:{},modules:{}}),b=(n("b107"),n("f309"));s["a"].use(b["a"]);var g=new b["a"]({});s["a"].config.productionTip=!1;var _=n("1fbd");_.keys().map((function(t){(_(t).default||{}).name&&s["a"].component(_(t).default.name,_(t).default)})),new s["a"]({vuetify:g,router:v,store:k,render:function(t){return t(u)}}).$mount("#app")},5809:function(t,e,n){"use strict";n("265b")},"58db":function(t,e,n){},"604d":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.allTasks.length?n("div",{staticClass:"custom-footer white"},[n("div",{staticClass:"item-left"},[t._v(" "+t._s(t.itemLeft)+" ")]),n("div",{staticClass:"btn-footer mx-auto"},[n("v-btn-toggle",{attrs:{mandatory:"",group:""},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}},[n("v-btn",{staticClass:"text-capitalize",attrs:{value:"ALL",ripple:!1,small:""}},[t._v(" All ")]),n("v-btn",{staticClass:"text-capitalize",attrs:{value:"ACTIVE",ripple:!1,small:""}},[t._v(" Active ")]),n("v-btn",{staticClass:"text-capitalize",attrs:{value:"COMPLITED",ripple:!1,small:""}},[t._v(" Complited ")])],1)],1),n("div",{staticClass:"clear-completed"},[n("v-btn",{style:"visibility:"+(t.selected?"visible":"hidden"),attrs:{text:"","x-small":""},on:{click:t.clearTasks}},[t._v(" clear completed ")])],1)]):t._e()},a=[],r=(n("4de4"),{name:"custom-footer",data:function(){return{}},computed:{selected:function(){return this.allTasks.filter((function(t){return t.select})).length},allTasks:{get:function(){return this.$store.getters.get_allTasks},set:function(t){this.$store.commit("set_allTasks",t)}},itemLeft:function(){var t=this.allTasks.filter((function(t){return!t.select})).length;return"".concat(t,0==t?" item left":" items left")},mode:{get:function(){return this.$store.getters.get_mode},set:function(t){this.$store.commit("set_mode",t)}}},methods:{clearTasks:function(){this.allTasks=this.allTasks.filter((function(t){return!t.select}))}}}),o=r,l=(n("06e8"),n("2877")),i=n("6544"),c=n.n(i),u=n("8336"),f=n("a609"),d=Object(l["a"])(o,s,a,!1,null,"62432621",null);e["default"]=d.exports;c()(d,{VBtn:u["a"],VBtnToggle:f["a"]})},"76a6":function(t,e,n){},"8c3d":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("custom-input"),n("task-list"),n("custom-footer")],1)},a=[],r={name:"wrapper",data:function(){return{}}},o=r,l=(n("5809"),n("2877")),i=Object(l["a"])(o,s,a,!1,null,"34f75e6a",null);e["default"]=i.exports},"8e02":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{staticClass:"taskList"},[t._l(t.filtred,(function(e,s){return[n("v-list-item",{key:s,staticClass:"px-0",scopedSlots:t._u([{key:"default",fn:function(s){var a=s.active;return[n("v-list-item-action",{staticClass:"mx-3 my-2"},[n("v-checkbox",{attrs:{"input-value":a,color:"#af2f2f59"},model:{value:e.select,callback:function(n){t.$set(e,"select",n)},expression:"item.select"}})],1),n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(s){var a=s.hover;return[n("div",{staticClass:"hover-wrapper"},[n("v-list-item-content",{staticClass:"py-0",on:{dblclick:function(n){t.edit=e.id}}},[t.edit!=e.id?n("v-list-item-title",{class:{"text-decoration-line-through":e.select}},[t._v(" "+t._s(e.value)+" ")]):n("v-text-field",{staticClass:"input",attrs:{outlined:"",color:"black",dense:"",height:"48",autofocus:"","hide-details":""},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.edit=""},blur:function(e){t.edit=""}},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"item.value"}})],1),n("v-list-item-action",{directives:[{name:"show",rawName:"v-show",value:a&&t.edit!=e.id,expression:"hover && edit != item.id"}],staticClass:"mx-3"},[n("v-btn",{attrs:{icon:"",color:"red","x-small":""},on:{click:function(){return t.deleteItem(e.id)}}},[n("v-icon",[t._v("mdi-close")])],1)],1)],1)]}}],null,!0)})]}}],null,!0)}),n("v-divider",{key:s+"div"})]}))],2)},a=[],r=(n("4de4"),{name:"task-list",data:function(){return{edit:""}},props:{},created:function(){var t=this;window.addEventListener("beforeunload",(function(){localStorage.setItem("test",JSON.stringify(t.allTasks))})),this.allTasks=JSON.parse(localStorage.getItem("test"))},computed:{filtred:function(){var t=this;return"ALL"==this.mode?this.allTasks:this.allTasks.filter((function(e){return e.select?"COMPLITED"==t.mode:"ACTIVE"==t.mode}))},allTasks:{get:function(){return this.$store.getters.get_allTasks},set:function(t){this.$store.commit("set_allTasks",t)}},mode:function(){return this.$store.getters.get_mode}},methods:{deleteItem:function(t){this.allTasks=this.allTasks.filter((function(e){return e.id!==t}))}}}),o=r,l=(n("9582"),n("2877")),i=n("6544"),c=n.n(i),u=n("8336"),f=n("ac7c"),d=n("ce7e"),m=n("ce87"),v=n("132d"),p=n("8860"),h=n("da13"),k=n("1800"),b=n("5d23"),g=n("8654"),_=Object(l["a"])(o,s,a,!1,null,"24a0a543",null);e["default"]=_.exports;c()(_,{VBtn:u["a"],VCheckbox:f["a"],VDivider:d["a"],VHover:m["a"],VIcon:v["a"],VList:p["a"],VListItem:h["a"],VListItemAction:k["a"],VListItemContent:b["a"],VListItemTitle:b["b"],VTextField:g["a"]})},"933f":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"custom-button",attrs:{outlined:"","x-small":t.xSmall}},[t._t("default",(function(){return[t._v(" "+t._s(t.text)+" ")]}))],2)},a=[],r={name:"custom-button",props:{text:String,xSmall:Boolean}},o=r,l=n("2877"),i=n("6544"),c=n.n(i),u=n("8336"),f=Object(l["a"])(o,s,a,!1,null,"1631dd82",null);e["default"]=f.exports;c()(f,{VBtn:u["a"]})},9582:function(t,e,n){"use strict";n("561f")},b107:function(t,e,n){},eccd:function(t,e,n){},fd08:function(t,e,n){"use strict";n("76a6")},ffcc:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"addTodos"},[n("v-text-field",{staticClass:"input",attrs:{placeholder:"What needs to be done?",solo:"","hide-details":""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.keydown.apply(null,arguments)}},scopedSlots:t._u([{key:"prepend-inner",fn:function(){return[t.allTasks.length?n("v-icon",{on:{click:t.selectAll}},[t._v(" mdi-chevron-down ")]):n("div",{staticClass:"pl-6"})]},proxy:!0}]),model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}})],1)},a=[],r=(n("4de4"),n("159b"),{name:"custom-input",data:function(){return{newTask:""}},props:{},computed:{selected:function(){return this.allTasks.filter((function(t){return t.select})).length},allTasks:{get:function(){return this.$store.getters.get_allTasks},set:function(t){this.$store.commit("set_allTasks",t)}}},methods:{keydown:function(){this.$store.commit("push_to_allTasks",this.newTask),this.newTask=""},selectAll:function(){var t=!this.selected||this.selected<this.allTasks.length;this.allTasks.forEach((function(e){return e.select=t}))}}}),o=r,l=(n("fd08"),n("2877")),i=n("6544"),c=n.n(i),u=n("132d"),f=n("8654"),d=Object(l["a"])(o,s,a,!1,null,null,null);e["default"]=d.exports;c()(d,{VIcon:u["a"],VTextField:f["a"]})}});
//# sourceMappingURL=app.d3379f08.js.map