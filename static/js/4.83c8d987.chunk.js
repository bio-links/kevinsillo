(this.webpackJsonplinks_react=this.webpackJsonplinks_react||[]).push([[4],{53:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(54);function r(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Object(n.a)(t,e):void 0}}},54:function(t,e,o){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}o.d(e,"a",(function(){return n}))},55:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(53);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var o=[],n=!0,r=!1,c=void 0;try{for(var i,l=t[Symbol.iterator]();!(n=(i=l.next()).done)&&(o.push(i.value),!e||o.length!==e);n=!0);}catch(a){r=!0,c=a}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return o}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},68:function(t,e,o){"use strict";o.r(e);var n=o(55),r=(o(69),o(9)),c=o.n(r),i=o(18),l=o(14),a=o(24),s=o(1),u=o(3);e.default=function(){var t=Object(s.useState)([]),e=Object(n.a)(t,2),o=e[0],r=e[1];return Object(s.useEffect)((function(){var t=i.c.collection("users").doc(l.a).collection("buttons").orderBy("timestamp").onSnapshot((function(t){c()("#eliminar-botones").empty(),r((function(e){return e.concat(t.docs)}))}),(function(t){console.log(t)}));return function(){return t()}}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h5",{className:"text-light titulo-h4 mt-4",children:"Nuevo bot\xf3n"}),Object(u.jsx)("input",{className:"form-control form-control-sm mt-2",id:"boton-nombre",type:"text",name:"nombre",placeholder:"Nombre...",required:!0}),Object(u.jsx)("input",{className:"form-control form-control-sm mt-2",id:"boton-url",type:"url",name:"url",placeholder:"https://...",required:!0}),Object(u.jsxs)("select",{className:"custom-select custom-select-sm mt-2",defaultValue:"1",id:"boton-tipo",name:"tipo",required:!0,children:[Object(u.jsx)("option",{value:"1",disabled:"disabled",required:!0,children:"Tipo de bot\xf3n..."}),Object(u.jsx)("option",{value:"2",children:"Normal"})]}),Object(u.jsxs)("select",{className:"custom-select custom-select-sm mt-2",defaultValue:"none",id:"boton-icono",name:"icono",required:!0,children:[Object(u.jsx)("option",{value:"none",disabled:"disabled",required:!0,children:"Icono de bot\xf3n..."}),Object(u.jsx)("option",{value:"twitch",children:"Twitch"}),Object(u.jsx)("option",{value:"youtube",children:"Youtube"}),Object(u.jsx)("option",{value:"discord",children:"Discord"}),Object(u.jsx)("option",{value:"tiktok",children:"TikTok"}),Object(u.jsx)("option",{value:"onlyfans",children:"OnlyFans"}),Object(u.jsx)("option",{value:"tienda",children:"Tienda"}),Object(u.jsx)("option",{value:"generico",children:"Otro"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-1 btn-sm mt-2",id:"addboton",onClick:function(){var t={};t.nombre=c()("#boton-nombre").val(),t.url=c()("#boton-url").val(),t.tipo=c()("#boton-tipo").val(),t.icono=c()("#boton-icono").val(),""!==t.nombre&&""!==t.url&&null!==t.tipo&&null!==t.icono?(c()("#eliminar-botones").empty(),i.c.collection("users").doc(l.a).collection("buttons").doc(t.nombre.toLowerCase()).set({name:Object(a.a)(t.nombre),link:t.url,type:t.tipo,icon:t.icono,timestamp:new Date},(function(t){console.log(t)})).then((function(){c()("#boton-nombre,#boton-url").val(""),c()("#boton-tipo,#boton-icono").val("1"),c()("#boton-enviado").text("Bot\xf3n a\xf1adido").addClass("success-form")}))):c()("#boton-enviado").text("Rellena todos los campos").addClass("error-form")},children:"A\xf1adir enlace"}),Object(u.jsx)("div",{className:"small mt-1",id:"boton-enviado"})]}),Object(u.jsx)("h5",{className:"text-light titulo-h4 mt-4",children:"Borrar botones"}),Object(u.jsx)("div",{id:"eliminar-botones",children:o.length>0?o.map((function(t,e){return Object(u.jsxs)("button",{id:e,className:"btn btn-2 mr-2 mb-2",onClick:function(){return e=t.data().name,void i.c.collection("users").doc(l.a).collection("buttons").doc(e.toLowerCase()).delete();var e},children:[t.data().name," ",Object(u.jsx)("sup",{children:"x"})]},e)})):null})]})}},69:function(t,e,o){}}]);
//# sourceMappingURL=4.83c8d987.chunk.js.map