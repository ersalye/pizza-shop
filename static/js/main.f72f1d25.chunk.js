(this["webpackJsonppizza-shop"]=this["webpackJsonppizza-shop"]||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),s=n.n(c),u=n(5),i=n(4),m=n.n(i),o=n(7),l=n(16),d=n(17),f=new(function(){function e(){Object(l.a)(this,e),this._apiBase="https://pizza-shop-66ecb.firebaseio.com/"}return Object(d.a)(e,[{key:"getData",value:function(){var e=Object(o.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase,"/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMenu",value:function(){var e=Object(o.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getData("menu.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),p=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=!1;function t(){return(t=Object(o.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getMenu();case 2:n=t.sent,e||r(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e=!0}}),[]),n},v=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary justify-content-end sticky-top"},r.a.createElement("button",{className:"btn btn-secondary"},r.a.createElement("svg",{className:"bi bi-cart3",width:"25px",height:"25px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"}))))};n(25),n(26);var b=function(e){var t=e.children,n=e.handler,c=Object(a.useRef)(null);return function(e,t){Object(a.useEffect)((function(){function n(n){e.current&&!e.current.contains(n.target)&&t()}return document.addEventListener("mousedown",n),document.addEventListener("touchmove ",n),document.addEventListener("touchstart ",n),document.addEventListener("scroll",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchmove ",n),document.removeEventListener("touchstart ",n),document.removeEventListener("scroll",n)}}),[t,e])}(c,n),r.a.createElement("div",{ref:c},t)},h=function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(u.a)(n,2),s=c[0],i=c[1];return r.a.createElement(b,{handler:function(){return i(!1)}},r.a.createElement("div",{className:"burger"},r.a.createElement("details",{open:s,onClick:function(e){return function(e){e.preventDefault(),i(!s)}(e)}},r.a.createElement("summary",{className:"btn btn-primary burger__summary px-1 py-0 my-1"},r.a.createElement("svg",{className:"bi bi-list",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}))),r.a.createElement("div",{className:"burger__content rounded mt-2 px-2 pb-2"},t))))},E=n(8),w=function(e){var t=e.menuItems.map((function(e){return r.a.createElement(E.b,{to:"/".concat(e.header),key:e.id},r.a.createElement("button",{type:"button",className:"btn btn-primary mt-2 w-100"},e.header))}));return r.a.createElement("div",{className:"sidebar rounded m-2 px-2 pb-2"},r.a.createElement("div",{className:"sidebar__items"},t),r.a.createElement("div",{className:"sidebar__burger-menu"},r.a.createElement(h,null,t)))},g=(n(32),n(33),function(e){var t=e.name,n=e.description,a=e.imageUrl;return r.a.createElement("div",{className:"card mr-3 mb-2 border-secondary card-component"},r.a.createElement("h3",{className:"card-header"},t),r.a.createElement("div",{className:"image-wrap"},r.a.createElement("img",{className:"image",src:a,alt:t})),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},n)),r.a.createElement("div",{className:"card-footer text-muted d-flex justify-content-between align-items-baseline"},"price",r.a.createElement("button",{className:"btn btn-secondary"},"Add +")))}),y=function(e){var t,n=e.menuItem,a=null===n||void 0===n?void 0:n.header,c=null===n||void 0===n?void 0:n.items;return c&&(t=c.map((function(e){return r.a.createElement(g,{key:a+e.id,name:e.name,description:e.description,imageUrl:e.img})}))),r.a.createElement("div",{className:"mr-2 mt-2"},r.a.createElement("h1",null,a),r.a.createElement("div",{className:"d-flex justify-content-start flex-wrap w-100"},t))},x=n(1);var N=function(){var e=Object(a.useState)(1),t=Object(u.a)(e,2),n=(t[0],t[1],p()),c=[];return n&&(c=n.map((function(e){return{header:e.header,id:e.id}}))),r.a.createElement(E.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("div",{className:"flex-shrink-1 sidebar-wrap"},r.a.createElement(w,{menuItems:c})),r.a.createElement("div",{className:"main-content-wrap"},r.a.createElement(x.a,{path:"/:menuHeader",render:function(e){var t=function(e){if(n)return n.find((function(t){return t.header.toLowerCase()===e.toLowerCase()}))}(e.match.params.menuHeader);return r.a.createElement(y,{menuItem:t})}})))))};s.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f72f1d25.chunk.js.map