(this.webpackJsonpkevinsillo=this.webpackJsonpkevinsillo||[]).push([[3],{50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){"use strict";function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,c=!1,a=void 0;try{for(var r,i=t[Symbol.iterator]();!(o=(r=i.next()).done)&&(n.push(r.value),!e||n.length!==e);o=!0);}catch(s){c=!0,a=s}finally{try{o||null==i.return||i.return()}finally{if(c)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(e);n(50);var a=n(27),r=n.n(a),i=n(26),s=n(13),l=n.n(s),u=n(19),f=n(18);function d(t){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.countapi.xyz/info/".concat(f.a,"/").concat(e)).then((function(t){return t.json()})).then((function(t){null==t.namespace?fetch("https://api.countapi.xyz/create?enable_reset=1&namespace=".concat(f.a,"&key=").concat(e)).then(fetch("https://api.countapi.xyz/hit/".concat(f.a,"/").concat(e))):fetch("https://api.countapi.xyz/hit/".concat(f.a,"/").concat(e))}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var m=n(1),b=(n(51),n(12)),j=function(){return Object(m.useEffect)((function(){Object(i.a)().then((function(t){var e=t.logo?t.logo:"./img/logo.png";r()("#logo").attr({src:e})}))})),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"row mt-3",children:Object(b.jsx)("div",{className:"boton-header",children:Object(b.jsxs)("button",{className:"enlace",children:[Object(b.jsx)("h1",{className:"logo-txt",children:"KEVINSILLO"}),Object(b.jsx)("img",{className:"logo-img",alt:"Logo",id:"logo"})]})})})})},x=(n(52),function(){return Object(b.jsx)("footer",{className:"footer text-light text-center text-lg-start fixed-bottom",children:Object(b.jsxs)("div",{className:"text-center p-3",children:[Object(b.jsx)("span",{className:"text-muted",children:"Powered by "}),Object(b.jsx)("a",{rel:"noreferrer",href:"https://www.instagram.com/kevinsillotwitch",className:"buttonToLink text-muted",onClick:function(){return d("creador")},children:"@Kevinsillo"}),Object(b.jsx)("br",{}),Object(b.jsxs)("a",{rel:"noreferrer",href:"mailto:kevin.illanas@outlook.com?Subject=Petici\xf3n%20de%20web",className:"buttonToLink text-muted",onClick:function(){return d("email")},children:["Quiero una web como esta (\u0e07\u2665",Object(b.jsx)("sub",{children:"\u15dc"}),"\u2665)\u0e07"]})]})})});e.default=function(){var t=c(Object(m.useState)([]),2),e=t[0],n=t[1];return Object(m.useEffect)((function(){Object(i.a)().then((function(t){r()("#nota").html(t.note)}));var t=i.b.collection("users").doc(f.a).collection("buttons").orderBy("timestamp").onSnapshot((function(t){r()("#buttons").empty(),n((function(e){return e.concat(t.docs)}))}),(function(t){console.log(t)})),e=0;c();var o=setInterval((function(){c()}),6e4);function c(){++e>=5&&clearInterval(o),r.a.get({url:"https://twitch-check.glitch.me/".concat(f.a),cache:!1,success:function(t){t?(r()(".cargando").hide(),t.online?(r()("#texto-live").html("ONLINE: "+t.stream_viewers+'<i class="fa fa-eye ml-1"></i>'),r()("#icon-twitch").addClass("logo-animation"),r()("#texto-live").removeClass("texto-offline").addClass("texto-online"),r()("#punto-live").removeClass("punto-offline").addClass("punto-online")):(r()("#texto-live").text("OFFLINE"),r()("#icon-twitch").removeClass("logo-animation"),r()("#texto-live").removeClass("texto-online").addClass("texto-offline"),r()("#punto-live").removeClass("punto-online").addClass("punto-offline"))):setTimeout((function(){c()}),3e3)}})}return r()(".cargando").show(),function(){return t()}}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{}),Object(b.jsx)("div",{className:"row mt-2",children:Object(b.jsx)("div",{className:"nota",id:"nota"})}),Object(b.jsx)("div",{id:"buttons",children:e.length>0?e.map((function(t,e){return Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("a",{className:"boton",rel:"noreferrer",onClick:function(){return d(t.data().visits)},href:t.data().url,target:"_blank",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"d-flex align-items-center",children:[Object(b.jsx)("div",{className:"icon d-flex justify-content-center align-items-center",children:Object(b.jsx)("i",{id:"icon-"+t.data().namelow,className:"icon-text "+t.data().icon})}),Object(b.jsx)("span",{className:"boton-name",children:(n=t.data().name,n.charAt(0).toUpperCase()+n.substring(1))})]})})})},e);var n})):null}),Object(b.jsx)(x,{})]})}}}]);
//# sourceMappingURL=3.99bac644.chunk.js.map