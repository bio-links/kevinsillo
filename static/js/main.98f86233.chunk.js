(this.webpackJsonplinks_react=this.webpackJsonplinks_react||[]).push([[1],{14:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="kevinsillo",c=!0;"localhost"!==window.location.hostname&&"127.0.0.1"!==window.location.hostname||(c=!1,console.log("Estas en entorno local")),c&&fetch("https://api.countapi.xyz/hit/".concat(a,"/web"))},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(15),c=n.n(a),o=n(19),r=n(23),i=(n(52),n(41),n(14));r.a.initializeApp({apiKey:"AIzaSyCgmC-ZqW43cl6mkXTtMEOyUZbugd5Lj8I",authDomain:"bio-links-database.firebaseapp.com",databaseURL:"https://bio-links-database-default-rtdb.firebaseio.com",projectId:"bio-links-database",storageBucket:"bio-links-database.appspot.com",messagingSenderId:"357226995175",appId:"1:357226995175:web:28b16a37cde038ba63f142"});var s=r.a.auth(),l=r.a.firestore();function u(){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.collection("users").doc(i.a).set({registry:!1,note:"",background:"",logo:""});case 2:b();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.collection("users").doc(i.a).get();case 2:if(!(t=e.sent).exists){e.next=7;break}return e.abrupt("return",t.data());case 7:u();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},24:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return d}));var a=n(15),c=n.n(a),o=n(19),r=n(14);function i(e){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.countapi.xyz/info/".concat(r.a,"/").concat(t)).then((function(e){return e.json()})).then((function(e){null==e.namespace?fetch("https://api.countapi.xyz/create?enable_reset=1&namespace=".concat(r.a,"&key=").concat(t)).then(fetch("https://api.countapi.xyz/hit/".concat(r.a,"/").concat(t))):fetch("https://api.countapi.xyz/hit/".concat(r.a,"/").concat(t))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return null!=e.match(/\.(jpeg|jpg|gif|png)$/)}function u(e){return e.charAt(0).toUpperCase()+e.substring(1)}function d(e,t,n){var a=Array(t-String(e).length+1).join(n||"0");return'<span class="zfill">'.concat(a,"</span>").concat(e)}},38:function(e,t,n){},39:function(e,t,n){},48:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(30),c=n.n(a),o=(n(38),n(9)),r=n.n(o),i=(n(39),n(18)),s=n(5),l=n(1),u=n.n(l),d=n(14),b=n(3),f=function(){var e=Object(s.g)();return Object(l.useEffect)((function(){Object(i.b)().then((function(e){var t=e.logo?e.logo:"./img/logo.png";r()("#logo").attr({src:t})}));var e=0;console.log("( \u0361\xb0 \u035c\u0296 \u0361\xb0) Toc toc, hay alguien?"),n();var t=setInterval((function(){console.log("( \u0361\xb0 \u035c\u0296 \u0361\xb0) Sigues ah\xed...? "),n()}),6e4);function n(){++e>=20&&clearInterval(t),r.a.get({url:"https://twitch-check.glitch.me/".concat(d.a),cache:!1,success:function(e){e?(r()(".cargando").hide(),e.online?(r()("#texto-live").html("ONLINE: "+e.stream_viewers+'<i class="fa fa-eye ml-1"></i>'),r()(".logo-txt").addClass("logo-animation"),r()("#texto-live").removeClass("texto-offline").addClass("texto-online"),r()("#punto-live").removeClass("punto-offline").addClass("punto-online"),console.log("API: El usuario de twitch esta on fire")):(r()("#texto-live").text("OFFLINE"),r()(".logo-txt").removeClass("logo-animation"),r()("#texto-live").removeClass("texto-online").addClass("texto-offline"),r()("#punto-live").removeClass("punto-online").addClass("punto-offline"),console.log("API: El usuario de twitch esta apagado o fuera de covertura"))):(console.log("( \u0360\xb0 \u035f\u0296 \u0361\xb0) Volviendo a llamar a la puerta..."),setTimeout((function(){n()}),3e3))}})}r()(".cargando").show()})),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"banner",children:Object(b.jsxs)("div",{className:"col",children:[Object(b.jsxs)("button",{className:"enlace",onClick:function(){Object(i.b)().then((function(t){!0===t.registry?i.a.onAuthStateChanged((function(t){t?e.push("/admin"):e.push("/login")})):e.push("register")}))},children:[Object(b.jsx)("h1",{className:"logo-txt",children:"KEVINSILLO"}),Object(b.jsx)("img",{className:"logo-img",alt:"Logo",id:"logo"})]}),Object(b.jsxs)("div",{className:"live d-flex",children:[Object(b.jsx)("div",{id:"punto-live"}),Object(b.jsx)("div",{id:"texto-live"}),Object(b.jsx)("div",{className:"cargando",children:"Cargando status..."})]})]})})})})},j=(n(48),n(24)),h=function(){return Object(b.jsx)("footer",{className:"footer text-light text-center text-lg-start fixed-bottom",children:Object(b.jsxs)("div",{className:"text-center p-3",children:[Object(b.jsx)("span",{className:"text-muted",children:"Powered by "}),Object(b.jsx)("a",{rel:"noreferrer",href:"https://www.instagram.com/kevinsillotwitch",className:"buttonToLink text-muted",onClick:function(){return Object(j.c)("creador")},children:"@Kevinsillo"}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{rel:"noreferrer",href:"mailto:kevin.illanas@outlook.com?Subject=Petici\xf3n%20de%20web",className:"buttonToLink text-muted",onClick:function(){return Object(j.c)("email")},children:"Quiero una web como esta \u0ca0_\u0ca0"})]})})},p=u.a.lazy((function(){return n.e(5).then(n.bind(null,73))})),x=u.a.lazy((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,74))})),g=u.a.lazy((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,75))})),m=u.a.lazy((function(){return n.e(12).then(n.bind(null,76))})),O=u.a.lazy((function(){return Promise.all([n.e(8),n.e(9)]).then(n.bind(null,77))}));var v=function(){return Object(l.useEffect)((function(){Object(i.b)().then((function(e){var t=e.background?e.background:"./img/fondo.jpg";r()("body").css({background:"linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 1) 100%), url("+t+")","background-repeat":"no-repeat","background-size":"cover","background-color":"#000000"})}))})),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(f,{}),Object(b.jsx)(l.Suspense,{fallback:Object(b.jsx)("div",{children:"s"}),children:Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(p,{})}}),Object(b.jsx)(s.b,{path:"/login",render:function(){return Object(b.jsx)(x,{})}}),Object(b.jsx)(s.b,{path:"/register",render:function(){return Object(b.jsx)(g,{})}}),Object(b.jsx)(s.b,{path:"/admin",render:function(){return Object(b.jsx)(O,{})}}),Object(b.jsx)(s.b,{path:"/resetpassword",render:function(){return Object(b.jsx)(m,{})}}),Object(b.jsx)(s.b,{render:function(){return Object(b.jsx)(p,{})}})]})}),Object(b.jsx)(h,{})]})},k=n(22);n(49),n(50);c.a.render(Object(b.jsx)(k.a,{basename:"/",children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[51,2,3]]]);
//# sourceMappingURL=main.98f86233.chunk.js.map