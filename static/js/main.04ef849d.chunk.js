(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,s,t){},,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(1),i=t.n(a),n=t(10),r=t.n(n),d=t(4),l=(t(16),t(6)),j=t.n(l),b=t(7),o=t(5),m=t(2),_="https://jsonplaceholder.typicode.com/users";function x(){return h.apply(this,arguments)}function h(){return(h=Object(b.a)(j.a.mark((function e(){var s,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(_);case 2:return s=e.sent,e.next=5,s.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(18);var u=function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsxs)("div",{className:"header__top",children:[Object(c.jsx)("h3",{className:"header__top-title",children:"Users"}),Object(c.jsxs)("div",{className:"header__top-icons",children:[Object(c.jsx)(d.b,{to:"/",children:Object(c.jsx)("div",{className:"header__top-icons-search"})}),Object(c.jsx)("div",{className:"header__top-icons-bell"}),Object(c.jsx)("div",{className:"header__top-icons-line"}),Object(c.jsx)("p",{className:"header__top-icons-name",children:"Jones Ferdinand"}),Object(c.jsx)("div",{className:"header__top-icons-avatar"})]})]})})},O=(t(19),function(){return Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsxs)("div",{className:"sidebar__title",children:[Object(c.jsx)("div",{className:"sidebar__title-img"}),Object(c.jsx)("span",{className:"sidebar__title-text",children:"Dashboard"})]}),Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-overview"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Overview"})]}),Object(c.jsx)(d.b,{to:"/list",className:"sidebar__link",children:Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-users"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Users"})]})}),Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-ideas"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Ideas"})]}),Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-contacts"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Contacts"})]}),Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-agents"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Agents"})]}),Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-articles"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Articles"})]}),Object(c.jsx)("div",{className:"sidebar__item-divider"}),Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-settings"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Settings"})]}),Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-subscription"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Subscription"})]})]})}),v=(t(20),function(e){var s=e.user,t=e.setUserId;return Object(c.jsxs)("tr",{className:"row",children:[Object(c.jsx)("td",{className:"row",children:Object(c.jsxs)(d.b,{className:"row__link",to:"/list/".concat(s.id),onClick:function(){return t(s.id)},children:[Object(c.jsx)("img",{className:"row__img",src:"/users/".concat(s.id,".png"),alt:"avatar"}),s.name]})}),Object(c.jsx)("td",{className:"row",children:Object(c.jsx)(d.b,{className:"row__link",to:"/list/".concat(s.id),onClick:function(){return t(s.id)},children:s.company.name})}),Object(c.jsx)("td",{className:"row",children:Object(c.jsx)(d.b,{className:"row__link",to:"/list/".concat(s.id),onClick:function(){return t(s.id)},children:s.email})}),Object(c.jsx)("td",{className:"row",children:Object(c.jsx)(d.b,{className:"row__link",to:"/list/".concat(s.id),onClick:function(){return t(s.id)},children:s.username})})]})}),N=(t(21),function(e){var s=e.users,t=e.setUserId;return console.log(s),Object(c.jsxs)("div",{className:"table",children:[Object(c.jsx)("h4",{className:"table__title",children:"All users"}),Object(c.jsxs)("table",{className:"table__body",children:[Object(c.jsxs)("tr",{className:"table__tr-name",children:[Object(c.jsx)("th",{className:"table__tr-name",children:"User details"}),Object(c.jsx)("th",{className:"table__tr-company",children:"Company name"}),Object(c.jsx)("th",{className:"table__tr-email",children:"Email"}),Object(c.jsx)("th",{className:"table__tr-dist",children:"Distance"})]}),s.map((function(e){return Object(c.jsx)(v,{user:e,setUserId:t},e.id)}))]})]})}),p=(t(22),function(e){var s,t,a,i,n=e.user;return Object(c.jsxs)("div",{className:"user",children:[Object(c.jsx)("div",{className:"user__header",children:Object(c.jsx)("div",{className:"user__avatar"})}),Object(c.jsx)("h2",{children:null===n||void 0===n?void 0:n.name}),Object(c.jsx)("p",{children:"Multi-layered client-server neural-net"}),Object(c.jsxs)("main",{className:"user__info",children:[Object(c.jsx)("h3",{children:"Address"}),Object(c.jsx)("p",{children:"".concat(null===n||void 0===n||null===(s=n.address)||void 0===s?void 0:s.street,",\n         ").concat(null===n||void 0===n||null===(t=n.address)||void 0===t?void 0:t.suite,",\n         ").concat(null===n||void 0===n||null===(a=n.address)||void 0===a?void 0:a.city,",\n         ").concat(null===n||void 0===n||null===(i=n.address)||void 0===i?void 0:i.zipcode)}),Object(c.jsx)("h3",{children:"Phone"}),Object(c.jsx)("p",{children:null===n||void 0===n?void 0:n.phone}),Object(c.jsx)("h3",{children:"Website"}),Object(c.jsx)("p",{children:null===n||void 0===n?void 0:n.website})]})]})}),f=(t(23),function(){var e=Object(a.useState)(0),s=Object(o.a)(e,2),t=s[0],i=s[1],n=Object(a.useState)([]),r=Object(o.a)(n,2),d=r[0],l=r[1],_=Object(a.useState)({}),h=Object(o.a)(_,2),v=h[0],f=h[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:s=e.sent,l(s);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){var e;0!==t&&(e=d.find((function(e){return e.id===t}))),f(e)}),[t]),Object(c.jsxs)("div",{className:"page_container",children:[Object(c.jsx)("div",{className:"page_container__sidebar",children:Object(c.jsx)(O,{className:"page_container__sidebar"})}),Object(c.jsx)(u,{className:"page_container__header"}),Object(c.jsx)("div",{className:"page_container__main",children:Object(c.jsxs)(m.c,{children:[Object(c.jsx)(m.a,{path:"/list",element:Object(c.jsx)(N,{users:d,setUserId:i})}),Object(c.jsx)(m.a,{path:"/list/:userId",element:Object(c.jsx)(p,{user:v})}),Object(c.jsx)(m.a,{path:"*",element:Object(c.jsx)(N,{users:d})})]})})]})});r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(d.a,{children:Object(c.jsx)(f,{})})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.04ef849d.chunk.js.map