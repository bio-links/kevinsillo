(this.webpackJsonpkevinsillo=this.webpackJsonpkevinsillo||[]).push([[11],{60:function(e,r,s){},75:function(e,r,s){"use strict";s.r(r);var t=s(15),a=s.n(t),n=s(19),i=(s(60),s(9)),c=s.n(i),o=s(1),m=s(5),l=s(57),u=s(18),d=s(14),p=s(3);r.default=function(){var e=Object(m.g)(),r=Object(l.a)({}),s=r.register,t=r.errors,i=r.handleSubmit,f=r.watch,b=Object(o.useRef)({});return b.current=f("password",""),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h4",{className:"text-light titulo-h4 mt-4",children:"Registrarse"}),Object(p.jsxs)("form",{id:"form-register",onSubmit:function(e){return e.preventDefault()},children:[Object(p.jsx)("input",{className:"form-control form-control-sm mt-2",id:"registro-email",type:"email",name:"email",ref:s({required:"Debes especificar un email",pattern:{value:/^\S+@\S+$/i,message:"No es un email valido"}}),placeholder:"Email",required:"required"}),t.email&&Object(p.jsx)("p",{className:"eForm",children:t.email.message}),Object(p.jsx)("input",{className:"form-control form-control-sm mt-2",id:"registro-password",type:"password",name:"password",ref:s({required:"Debes especificar una contrase\xf1a",minLength:{value:8,message:"La contrase\xf1a debe tener como m\xednimo 8 caracteres"}}),placeholder:"Contrase\xf1a"}),t.password&&Object(p.jsx)("p",{className:"eForm",children:t.password.message}),Object(p.jsx)("input",{className:"form-control form-control-sm mt-2",id:"registro-confirm-password",type:"password",name:"confirm_password",ref:s({validate:function(e){return e===b.current||"Las contrase\xf1as no coinciden"}}),placeholder:"Confirmar contrase\xf1a"}),t.confirm_password&&Object(p.jsx)("p",{className:"eForm",children:t.confirm_password.message}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:i((function(){var r={};r.email=c()("#registro-email").val(),r.password=c()("#registro-password").val(),u.a.createUserWithEmailAndPassword(r.email,r.password).then(function(){var r=Object(n.a)(a.a.mark((function r(s){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.c.collection("users").doc(d.a).update({registry:!0});case 2:e.push("admin");case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()).catch((function(r){e.push("register")}))})),type:"submit",className:"btn btn-1 btn-sm mt-2",id:"registry-submit",children:"Registrarse"}),Object(p.jsx)("button",{onClick:function(){return e.push("/")},className:"btn btn-2 btn-sm mt-2 ml-2",children:"Volver"})]})]})]})}}}]);
//# sourceMappingURL=11.0b3a3b0c.chunk.js.map