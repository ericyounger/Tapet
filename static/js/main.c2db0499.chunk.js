(this.webpackJsonptapestry=this.webpackJsonptapestry||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(3),c=a.n(r),o=(a(10),a(1)),i=(a(11),a(12),a(4)),s=a.n(i);a(14);window.onload=function(){var e=document.querySelectorAll("input[type=range]");s.a.Range.init(e)};var m=function(){var e=Object(l.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(""),i=Object(o.a)(c,2),s=i[0],m=i[1],u=Object(l.useState)(""),d=Object(o.a)(u,2),p=d[0],g=d[1],v=Object(l.useState)(""),h=Object(o.a)(v,2),E=h[0],b=h[1],f=Object(l.useState)(""),y=Object(o.a)(f,2),N=y[0],w=y[1];return Object(l.useEffect)((function(){console.log(N)}),[s,a,p,E,N]),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-panel"},n.a.createElement("div",{className:"card-title"},"Tapet kalkulator"),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12 l6"},n.a.createElement("input",{placeholder:"",id:"rull_lengde",type:"text",onChange:function(e){return r(e.target.value)}}),n.a.createElement("label",{htmlFor:"Rull_lengde"},"Rull lengde i meter")),n.a.createElement("div",{className:"input-field col s12 l6"},n.a.createElement("input",{placeholder:"",id:"rull_bredde",type:"text",onChange:function(e){return m(e.target.value)}}),n.a.createElement("label",{htmlFor:"Rull_bredde"},"Rull bredde i meter"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12 l6"},n.a.createElement("input",{placeholder:"",id:"vegg_h\xf8yde",type:"text",onChange:function(e){return g(e.target.value)}}),n.a.createElement("label",{htmlFor:"vegg_h\xf8yde"},"Veggh\xf8yde i meter")),n.a.createElement("div",{className:"input-field col s12 l6"},n.a.createElement("input",{placeholder:"",id:"vegg_bredde",type:"text",onChange:function(e){return b(e.target.value)}}),n.a.createElement("label",{htmlFor:"vegg_bredde"},"Veggbredde i meter")),n.a.createElement("div",{className:"input-field col s12 l6"},n.a.createElement("form",{action:"#"},n.a.createElement("p",{className:"range-field"},n.a.createElement("label",{htmlFor:"rapport"},"Rapport i cm"),n.a.createElement("input",{type:"range",id:"rapport",min:"0",max:"100",onChange:function(e){return w(e.target.value)}}))))),n.a.createElement("button",{className:"btn waves-light",onClick:function(){console.log(a,s,E,p);var e=parseFloat(E)/parseFloat(s),t=parseFloat(p)+parseFloat(N)/100,l=parseFloat(a)/t,n=1;for(console.log(e),console.log(l);e>l*n;)n++;var r=Math.abs(e-l*n);alert("Du trenger ".concat(n," ruller, og har en rest p\xe5 ").concat(r.toFixed(2),"m"))}},"Kalkuler",n.a.createElement("i",{className:"material-icons right"},"calculate")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.c2db0499.chunk.js.map