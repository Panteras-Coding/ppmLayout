(this.webpackJsonpppmlayout=this.webpackJsonpppmlayout||[]).push([[0],Array(21).concat([function(e,a,t){e.exports=t(48)},,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/Dashboard.19512b0f.svg"},function(e,a,t){e.exports=t.p+"static/media/monitor.22acbbfe.svg"},function(e,a,t){e.exports=t.p+"static/media/calendario.e550852a.svg"},function(e,a,t){e.exports=t.p+"static/media/Mensaje.85b6c4bc.svg"},function(e,a,t){e.exports=t.p+"static/media/edit.3e4d12ee.svg"},function(e,a,t){e.exports=t.p+"static/media/door-key.dd4595c7.svg"},function(e,a,t){e.exports=t.p+"static/media/engranaje.c5ff09e4.svg"},function(e,a,t){e.exports=t.p+"static/media/logout.27ff8fe7.svg"},function(e,a,t){e.exports=t.p+"static/media/information.a2c95ade.svg"},function(e,a,t){e.exports=t.p+"static/media/upanterasblanco.e78e0ef8.svg"},function(e,a,t){e.exports=t.p+"static/media/Buscar.c3f3a3af.svg"},function(e,a,t){e.exports=t.p+"static/media/menu.7144191d.svg"},,,,function(e,a,t){e.exports=t.p+"static/media/Coding[ING].d4c7368c.svg"},function(e,a,t){e.exports=t.p+"static/media/businessman.05b79e30.svg"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(19),r=t.n(c),o=t(8),m=t(2),s=function(e){var a=[];return e.status||(a=[l.a.createElement("span",null,"Dashboard"),l.a.createElement("span",null,"Mesa de trabajo"),l.a.createElement("span",null,"Calendario"),l.a.createElement("span",null,"Chat")]),l.a.createElement("ul",null,l.a.createElement(m.b,{to:"/",onClick:function(){return e.notHome(!0)},className:"noUnder"},l.a.createElement("li",null,l.a.createElement("img",{alt:"Icon",src:t(30)}),a[0])),l.a.createElement(m.b,{to:"/workplace",onClick:function(){return e.notHome(!1)},className:"noUnder"},l.a.createElement("li",null,l.a.createElement("img",{alt:"Icon2",src:t(31)}),a[1])),l.a.createElement(m.b,{to:"/inbox",onClick:function(){return e.notHome(!1)},className:"noUnder"},l.a.createElement("li",null,l.a.createElement("img",{alt:"Icon3",src:t(32)}),a[2])),l.a.createElement(m.b,{to:"/calendar",onClick:function(){return e.notHome(!1)},className:"noUnder"},l.a.createElement("li",null,l.a.createElement("img",{alt:"Icon4",src:t(33)}),a[3])))},i=function(e){var a=e.imgSrc,n=e.imgClassName,c=e.content;return l.a.createElement("div",{className:"userActions"},l.a.createElement("div",{className:"header"},l.a.createElement("img",{className:n,alt:"Profile Pic",src:a}),c),l.a.createElement("ul",null,l.a.createElement("hr",null),l.a.createElement(m.b,{className:"noUnder"},l.a.createElement("li",{className:"actionBtn"},l.a.createElement("img",{className:"icon",alt:"Icon",src:t(34)}),l.a.createElement("span",null,"Editar Perfil"))),l.a.createElement("hr",null),l.a.createElement(m.b,{className:"noUnder"},l.a.createElement("li",{className:"actionBtn"},l.a.createElement("img",{className:"icon",alt:"Icon",src:t(35)}),l.a.createElement("span",null,"Cambiar contrase\xf1a"))),l.a.createElement("hr",null),l.a.createElement(m.b,{className:"noUnder"},l.a.createElement("li",{className:"actionBtn"},l.a.createElement("img",{className:"icon",alt:"Icon",src:t(36)}),l.a.createElement("span",null,"Configuraci\xf3n"))),l.a.createElement("hr",null),l.a.createElement(m.b,{className:"noUnder"},l.a.createElement("li",{className:"actionBtn"},l.a.createElement("img",{className:"icon",alt:"Icon",src:t(37)}),l.a.createElement("span",null,"Cerrar sesi\xf3n"))),l.a.createElement("hr",null),l.a.createElement(m.b,{className:"noUnder"},l.a.createElement("li",{className:"actionBtn"},l.a.createElement("img",{className:"icon",alt:"Icon",src:t(38)}),l.a.createElement("span",null,"Ayuda"))),l.a.createElement("hr",null)))},u=function(e){var a=l.a.createElement("p",null,e.name),t="https://armandohv.netlify.app/assets/me.26f2d9a77a5b54e87d9ea21847f278d1.jpg",c="profileImgNormal";e.status&&(c="profileImgSmall",a="");var r=Object(n.useState)(!1),m=Object(o.a)(r,2),s=m[0],u=m[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"userProfile"},l.a.createElement("div",{style:{display:s?"block":"none",right:"0",top:"2.5rem",position:"absolute"},onClick:function(){return u(!s)}},l.a.createElement(i,{imgClassName:c,imgSrc:t,content:a})),l.a.createElement("button",{id:"btnUser",onClick:function(){return u(!s)},style:{borderRadius:"50%"}},l.a.createElement("img",{className:c,alt:"Profile Pic",src:t})),a))},E=function(e){var a="";return e.status||(a=l.a.createElement("div",{className:"dataCont"},l.a.createElement("p",null,"Aviso de privacidad"),l.a.createElement("p",null,"Contacto"))),l.a.createElement("div",{className:"infoBox"},a,l.a.createElement("img",{alt:"Logo Panteras",src:t(39)}))},p=function(e){var a="sideBar sbOpened";return e.status&&(a="sideBar sbClosed"),l.a.createElement("div",{className:a},l.a.createElement("header",null,l.a.createElement("span",{onClick:function(){return e.change(!e.status)}},"\u2630")),l.a.createElement(u,{status:e.status,name:e.name}),l.a.createElement("div",{className:"listContainer"},l.a.createElement(s,{status:e.status,notHome:e.notHome}),l.a.createElement(E,{status:e.status})))},d=function(e){var a=e.name.split(" ").slice(0,-1).join(" ");return l.a.createElement("header",null,l.a.createElement("h3",null,"Buen d\xeda, ",l.a.createElement("span",null,a)),l.a.createElement("div",{id:"inputFind"},l.a.createElement("input",{type:"text",className:"inputT",name:"searchbox",placeholder:"Buscar"}),l.a.createElement("img",{src:t(40),id:"inputImg"})))},b=t(3),v=function(){return l.a.createElement("div",{className:"objectiveStatus"},["Nivel","Objetivos"].map((function(e){return l.a.createElement("div",{className:"objCount"},l.a.createElement("p",null,e),l.a.createElement("div",{className:"objNum ".concat(e)},15))})))},g=function(){return l.a.createElement("div",{className:"dashCont"},l.a.createElement("div",{className:"numObj"},l.a.createElement("p",{className:"dashContTitle"},"Mis Objetivos"),l.a.createElement("span",null,13)),l.a.createElement("button",{className:"objBtn",type:"button"},"Filtrar: Por importancia"),l.a.createElement("div",{className:"objList"},l.a.createElement("div",{className:"objectiveCont"},l.a.createElement("p",null,"Nombre"),l.a.createElement("p",null,"Fecha de entrega"),l.a.createElement("p",null,"Equipo")),l.a.createElement("div",{className:"objectiveCont"},l.a.createElement("p",null,"Nombre"),l.a.createElement("p",null,"Fecha de entrega"),l.a.createElement("p",null,"Equipo")),l.a.createElement("div",{className:"objectiveCont"},l.a.createElement("p",null,"Nombre"),l.a.createElement("p",null,"Fecha de entrega"),l.a.createElement("p",null,"Equipo")),l.a.createElement("div",{className:"objectiveCont"},l.a.createElement("p",null,"Nombre"),l.a.createElement("p",null,"Fecha de entrega"),l.a.createElement("p",null,"Equipo")),l.a.createElement("div",{className:"objectiveCont"},l.a.createElement("p",null,"Nombre"),l.a.createElement("p",null,"Fecha de entrega"),l.a.createElement("p",null,"Equipo")),l.a.createElement("div",{className:"objectiveCont"},l.a.createElement("p",null,"Nombre"),l.a.createElement("p",null,"Fecha de entrega"),l.a.createElement("p",null,"Equipo"))))},N=function(){return l.a.createElement("div",{className:"dashContProj"},l.a.createElement("p",{className:"dashContTitle"},"Mis proyectos"),l.a.createElement("div",{className:"projectList"},l.a.createElement("div",{className:"projectCont"},l.a.createElement("p",null,"Proyecto"),l.a.createElement("p",null,"Rango"),l.a.createElement("p",null,"#Miembros"),l.a.createElement("p",null,"#Objetivos")),l.a.createElement("div",{className:"projectCont"},l.a.createElement("p",null,"Proyecto"),l.a.createElement("p",null,"Rango"),l.a.createElement("p",null,"#Miembros"),l.a.createElement("p",null,"#Objetivos")),l.a.createElement("div",{className:"projectCont"},l.a.createElement("p",null,"Proyecto"),l.a.createElement("p",null,"Rango"),l.a.createElement("p",null,"#Miembros"),l.a.createElement("p",null,"#Objetivos"))))},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"widgetsBtn",type:"button"},l.a.createElement("img",{id:"iconMenu",alt:"Icon",src:t(41)}),l.a.createElement("p",null,"Configurar Widgets")),l.a.createElement(v,null),l.a.createElement(g,null),l.a.createElement(N,null))},h=function(e){var a=Object(b.f)(),t=["#A3E1EE","#A3EEC3","#EED5A3","#E9A3EE","#EEA3A3"];return t[e.index]=["#A3E1EE","#A3EEC3","#EED5A3","#E9A3EE","#EEA3A3"][e.index],l.a.createElement("div",{className:"workTableList"},l.a.createElement(m.b,{to:"".concat(a.url,"/"),onClick:function(){return e.changePlace(0)},className:"carpetBtn",style:{backgroundColor:t[0]}},"Lista"),l.a.createElement(m.b,{to:"".concat(a.url,"/"),onClick:function(){return e.changePlace(1)},className:"carpetBtn",style:{backgroundColor:t[1]}},"Gantt"),l.a.createElement(m.b,{to:"".concat(a.url,"/"),onClick:function(){return e.changePlace(2)},className:"carpetBtn",style:{backgroundColor:t[2]}},"Calendario"),l.a.createElement(m.b,{to:"".concat(a.url,"/"),onClick:function(){return e.changePlace(3)},className:"carpetBtn",style:{backgroundColor:t[3]}},"Diagrama"),l.a.createElement(m.b,{to:"".concat(a.url,"/"),onClick:function(){return e.changePlace(4)},className:"carpetBtn",style:{backgroundColor:t[4]}},"\xc1rbol"))},C=(t(10),t(11),function(){Object(b.f)();var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=a[0],c=a[1],r="Objetivos",m="Objetivo";return 1===t&&(r="Miembros",m="Miembro"),l.a.createElement("div",{style:{height:"85%",width:"100%",display:"flex",flexDirection:"column"}},l.a.createElement("button",{className:"workFilterBtn",type:"button"},"Filtrar:   Por equipo"),l.a.createElement("div",{className:"workTableCard"},l.a.createElement(h,{className:"workTableLink",index:t,changePlace:c}),l.a.createElement(b.c,null,l.a.createElement("div",{className:"workListCont"},l.a.createElement("div",{className:"workTitleBar"},l.a.createElement("p",null,r," de Agrupaci\xf3n, proyecto, \xe1rea"),l.a.createElement("button",{className:"workTitleBtn",type:"button"},"+ Agregar ",m)),l.a.createElement("hr",null)))))}),j=function(){return l.a.createElement("span",null,"Este es el Inbox")},k=function(){return l.a.createElement("span",null,"Este es el calendario")},y=function(e){var a="homeWorkPlace";return e.indash||(a="workPlace"),l.a.createElement(b.c,null,l.a.createElement("div",{className:a},l.a.createElement(b.a,{path:"/",exact:!0,component:f}),l.a.createElement(b.a,{path:"/workplace"},l.a.createElement(C,null)),l.a.createElement(b.a,{path:"/inbox"},l.a.createElement(j,null)),l.a.createElement(b.a,{path:"/calendar"},l.a.createElement(k,null))))},x=function(e){var a="main incomplete";return e.status&&(a="main complete"),l.a.createElement("div",{className:a},l.a.createElement(d,{name:e.name}),l.a.createElement(y,{indash:e.indash}))};var P=function(e){return l.a.createElement("div",{className:"mainContainerLogin"},l.a.createElement("div",{className:"container",id:"container"},l.a.createElement("div",{className:"form-container sign-in-container"},l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"overlay-panel overlay-right"},l.a.createElement("h1",null,"Bienvenido a Panteras PM",l.a.createElement("sup",null,"[ING]")),l.a.createElement("p",null,"Si tienes problemas para acceder a tu cuenta, cont\xe1ctanos"),l.a.createElement("img",{alt:"Logo Panteras",src:t(45)})))),l.a.createElement("div",{className:"overlay-container"},l.a.createElement("form",{action:"#"},l.a.createElement("img",{alt:"Logo Panteras",src:t(46)}),l.a.createElement("input",{type:"email",placeholder:"Usuario"}),l.a.createElement("input",{type:"password",placeholder:"Contrase\xf1a"}),l.a.createElement("button",{onClick:e.changeLog},"Login")))))},B=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),i=s[0],u=s[1],E=Object(n.useState)(!0),d=Object(o.a)(E,2),b=d[0],v=d[1];return!0===t?l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(p,{change:u,status:i,name:"Armando Hern\xe1ndez",notHome:v}),l.a.createElement(x,{status:i,name:"Armando Hernandez",indash:b}))):l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(P,{changeLog:function(){return c(!0)}})))};t(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[21,1,2]]]);
//# sourceMappingURL=main.8cdb731e.chunk.js.map