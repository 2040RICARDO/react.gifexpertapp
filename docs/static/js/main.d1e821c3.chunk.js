(this["webpackJsonpreact-fundamentos"]=this["webpackJsonpreact-fundamentos"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),u=n.n(c),i=n(1),l=n(6),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),u=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.trim().length>2&&(t((function(e){return[u].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",value:u,onChange:function(e){o(e.target.value)}}))},s=function(e){var t=e.id,n=e.title,a=e.url;return console.log({id:t,title:n,url:a}),r.a.createElement("div",{className:"card animate__fadeIn animate__delay-5s"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("p",null,n))},m=n(2),d=n.n(m),f=n(5),p=function(){var e=Object(f.a)(d.a.mark((function e(t){var n,a,r,c,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=uqIRTYSW4Dmg8ExIX81izBZ79v35AJII"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,u=c.map((function(e){var t=e.id,n=e.title,a=e.images;return{id:t,title:n,url:null===a||void 0===a?void 0:a.downsized_medium.url}})),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=n.data,u=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),u&&r.a.createElement("p",null,"Loading"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(s,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(a.useState)(["goku"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Gif Expert Ap"),r.a.createElement("hr",null),r.a.createElement(o,{setCategories:c}),r.a.createElement("ol",null,n.map((function(e,t){return r.a.createElement(g,{category:e,key:t+e})}))))};n(13);u.a.render(r.a.createElement(E,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.d1e821c3.chunk.js.map