(this.webpackJsonpkevinsillo=this.webpackJsonpkevinsillo||[]).push([[5],{58:function(n,t,c){},73:function(n,t,c){"use strict";c.r(t);c(58);var o=c(9),e=c.n(o),s=c(1),a=c(18),i=c(24),l=c(14),r=c(3);t.default=function(){return Object(s.useEffect)((function(){e()("#buttons").empty(),a.c.collection("users").doc(l.a).collection("buttons").orderBy("timestamp").get().then((function(n){n&&n.forEach((function(n){n=n.data(),e()("#buttons").append('<div class="row">\n                            <a rel="noreferrer" class="boton" onclick={visitas(\''.concat(n.name,"')} href=\"").concat(n.url,'" target="_blank">\n                                <div class="col">\n                                    <img alt="').concat(n.icon,'" src="./img/').concat(n.icon,'.png" class="icon" /><span class="boton-name">').concat(Object(i.a)(n.name),"</span>\n                                </div>\n                            </a>\n                        </div>"))}))})),Object(a.b)().then((function(n){e()("#nota").html(n.note)}))})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"nota",id:"nota"})}),Object(r.jsx)("div",{id:"buttons"})]})}}}]);
//# sourceMappingURL=5.0498ac71.chunk.js.map