(this["webpackJsonppizza-shop"]=this["webpackJsonppizza-shop"]||[]).push([[0],{20:function(e,t,a){e.exports=a(35)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),s=a(19),u=a(6),m=a(5),o=a.n(m),l=a(8),d=a(16),p=a(17),f=new(function(){function e(){Object(d.a)(this,e),this._apiBase="https://pizza-shop-66ecb.firebaseio.com/"}return Object(p.a)(e,[{key:"getData",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase,"/").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMenu",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getData("menu.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),b=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=!1;function t(){return(t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getMenu();case 2:a=t.sent,e||r(a);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e=!0}}),[]),a},v=a(4),h=function(e){var t=e.cartItems.count;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary justify-content-end sticky-top"},r.a.createElement(v.b,{to:"/order"},r.a.createElement("button",{className:"btn btn-secondary","data-toggle":"modal","data-target":"#exampleModal"},r.a.createElement("svg",{className:"bi bi-cart3",width:"25px",height:"25px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})),r.a.createElement("span",{className:"badge badge-info"},t))))};a(31),a(32);var E=function(e){var t=e.children,a=e.handler,c=Object(n.useRef)(null);return function(e,t){Object(n.useEffect)((function(){function a(a){e.current&&!e.current.contains(a.target)&&t()}return document.addEventListener("mousedown",a),document.addEventListener("touchmove ",a),document.addEventListener("touchstart ",a),document.addEventListener("scroll",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchmove ",a),document.removeEventListener("touchstart ",a),document.removeEventListener("scroll",a)}}),[t,e])}(c,a),r.a.createElement("div",{ref:c},t)},g=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(u.a)(a,2),i=c[0],s=c[1];return r.a.createElement(E,{handler:function(){return s(!1)}},r.a.createElement("div",{className:"burger"},r.a.createElement("details",{open:i,onClick:function(e){return function(e){e.preventDefault(),s(!i)}(e)}},r.a.createElement("summary",{className:"btn btn-primary burger__summary px-1 py-0 my-1"},r.a.createElement("svg",{className:"bi bi-list",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}))),r.a.createElement("div",{className:"burger__content rounded mt-2 px-2 pb-2"},t))))},w=function(e){var t=e.menuItems.map((function(e){return r.a.createElement(v.b,{to:"/".concat(e.header),key:e.id},r.a.createElement("button",{type:"button",className:"btn btn-primary mt-2 w-100"},e.header))}));return r.a.createElement("div",{className:"sidebar rounded m-2 px-2 pb-2"},r.a.createElement("div",{className:"sidebar__items"},t),r.a.createElement("div",{className:"sidebar__burger-menu"},r.a.createElement(g,null,t)))},y=(a(33),a(34),function(e){var t=e.name,a=e.description,n=e.imageUrl,c=e.addToCard,i=e.priceFirst,s=e.priceFirstSymbol,u=e.priceSecond,m=e.priceSecondSymbol;return r.a.createElement("div",{className:"card mr-3 mb-2 border-secondary card-component"},r.a.createElement("h3",{className:"card-header"},t),r.a.createElement("div",{className:"image-wrap"},r.a.createElement("img",{className:"image",src:n,alt:t})),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},a)),r.a.createElement("div",{className:"card-footer text-muted d-flex justify-content-between align-items-baseline"},r.a.createElement("span",null,"".concat(i).concat(s),u?" / ".concat(u).concat(m):null),r.a.createElement("button",{onClick:c,className:"btn btn-secondary"},"Add +")))}),x=function(e){var t,a=e.menuItem,n=e.addToCard,c=null===a||void 0===a?void 0:a.header,i=null===a||void 0===a?void 0:a.items;return i&&(t=i.map((function(e){var t=e.price.toFixed(2),i=(1.13*e.price).toFixed(2);return r.a.createElement(y,{key:c+e.id,name:e.name,description:e.description,imageUrl:e.img,addToCard:function(){return n(a.id,e.id)},priceFirst:t,priceFirstSymbol:"\u20ac",priceSecond:i,priceSecondSymbol:"$"})}))),r.a.createElement("div",{className:"mr-2 mt-2"},r.a.createElement("h1",null,c),r.a.createElement("div",{className:"d-flex justify-content-start flex-wrap w-100"},t))},N=a(1),j=function(e){var t=e.menuItems.map((function(e){return r.a.createElement(v.b,{className:"btn btn-link",to:"/".concat(e.header),key:e.id},e.header)}));return r.a.createElement("div",{className:"jumbotron bg-transparent"},r.a.createElement("h1",null,"Welcome to Pizza-Shop!"),r.a.createElement("h4",{className:"text-muted"},"Original italian pizzas with fresh dough and carefully selected natural ingredients."),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("h4",null,"In our restaurants, pizzas are baked in a wood brick oven."),r.a.createElement("h5",null,"Our menu: ",t))},z=function(e){e.cartItems,e.menu;return r.a.createElement("div",{className:"mr-2 mt-2"},"123")};var k=function(){var e=Object(n.useState)({count:0}),t=Object(u.a)(e,2),a=t[0],c=t[1],i=b(),m=[];i&&(m=i.map((function(e){return{header:e.header,id:e.id}})));var o=function(e,t){c((function(a){var n=Object(s.a)({},a);return n[e]?(n[e].push(t),n.count=n.count+1):(n[e]=[],n[e].push(t),n.count=n.count+1),n}))};return r.a.createElement(v.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{cartItems:a}),r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("div",{className:"flex-shrink-1 sidebar-wrap"},r.a.createElement(w,{menuItems:m})),r.a.createElement("div",{className:"main-content-wrap"},r.a.createElement(N.d,null,r.a.createElement(N.b,{path:"/",exact:!0,render:function(){return r.a.createElement(j,{menuItems:m})}}),r.a.createElement(N.b,{path:"/order",render:function(){return r.a.createElement(z,{cartItems:a,menu:i})}}),r.a.createElement(N.b,{path:"/:menuHeader",render:function(e){var t=function(e){if(i)return i.find((function(t){return t.header.toLowerCase()===e.toLowerCase()}))}(e.match.params.menuHeader);return t?r.a.createElement(x,{menuItem:t,addToCard:o}):r.a.createElement(N.a,{to:"/"})}}))))))};i.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.f24c88d6.chunk.js.map