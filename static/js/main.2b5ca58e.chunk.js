(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,s,t){},,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var a=t(0),c=t(1),i=t.n(c),n=t(10),r=t.n(n),l=t(4),d=(t(16),t(6)),j=t.n(d),b=t(7),_=t(5),o=t(2),m="https://jsonplaceholder.typicode.com/users";function h(){return u.apply(this,arguments)}function u(){return(u=Object(b.a)(j.a.mark((function e(){var s,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m);case 2:return s=e.sent,e.next=5,s.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(18);var x=function(){return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsxs)("div",{className:"header__top",children:[Object(a.jsx)("h3",{className:"header__top-title",children:"Users"}),Object(a.jsxs)("div",{className:"header__top-icons",children:[Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)("div",{className:"header__top-icons-search"})}),Object(a.jsx)("div",{className:"header__top-icons-bell"}),Object(a.jsx)("div",{className:"header__top-icons-line"}),Object(a.jsx)("p",{className:"header__top-icons-name",children:"Jones Ferdinand"}),Object(a.jsx)("div",{className:"header__top-icons-avatar"})]})]}),Object(a.jsxs)("div",{className:"header__buttons",children:[Object(a.jsxs)("div",{className:"header__button",children:[Object(a.jsx)("span",{className:"header__button-text",children:"Active"}),Object(a.jsx)("span",{className:"header__button-number",children:"60"})]}),Object(a.jsxs)("div",{className:"header__button",children:[Object(a.jsx)("span",{className:"header__button-text",children:"Online"}),Object(a.jsx)("span",{className:"header__button-number",children:"16"})]}),Object(a.jsxs)("div",{className:"header__button",children:[Object(a.jsx)("span",{className:"header__button-text",children:"Filtered"}),Object(a.jsx)("span",{className:"header__button-number",children:"43"})]}),Object(a.jsxs)("div",{className:"header__button",children:[Object(a.jsx)("span",{className:"header__button-text",children:"Banned"}),Object(a.jsx)("span",{className:"header__button-number",children:"64"})]})]})]})},O=(t(19),function(){return Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsxs)("div",{className:"sidebar__title",children:[Object(a.jsx)("div",{className:"sidebar__title-img"}),Object(a.jsx)("span",{className:"sidebar__title-text",children:"Dashboard"})]}),Object(a.jsxs)("div",{className:"sidebar__item",children:[Object(a.jsx)("div",{className:"sidebar__item-overview"}),Object(a.jsx)("span",{className:"sidebar__item-text",children:"Overview"})]}),Object(a.jsx)(l.b,{to:"/list",className:"sidebar__link",children:Object(a.jsxs)("div",{className:"sidebar__item",children:[Object(a.jsx)("div",{className:"sidebar__item-users"}),Object(a.jsx)("span",{className:"sidebar__item-text",children:"Users"})]})}),Object(a.jsxs)("div",{className:"sidebar__item",children:[Object(a.jsx)("div",{className:"sidebar__item-ideas"}),Object(a.jsx)("span",{className:"sidebar__item-text",children:"Ideas"})]}),Object(a.jsxs)("div",{className:"sidebar__item",children:[Object(a.jsx)("div",{className:"sidebar__item-contacts"}),Object(a.jsx)("span",{className:"sidebar__item-text",children:"Contacts"})]}),Object(a.jsxs)("div",{className:"sidebar__item",children:[Object(a.jsx)("div",{className:"sidebar__item-agents"}),Object(a.jsx)("span",{className:"sidebar__item-text",children:"Agents"})]}),Object(a.jsxs)("div",{className:"sidebar__item",children:[Object(a.jsx)("div",{className:"sidebar__item-articles"}),Object(a.jsx)("span",{className:"sidebar__item-text",children:"Articles"})]}),Object(a.jsx)("div",{className:"sidebar__item-divider"}),Object(a.jsxs)("div",{className:"sidebar__item",children:[Object(a.jsx)("div",{className:"sidebar__item-settings"}),Object(a.jsx)("span",{className:"sidebar__item-text",children:"Settings"})]}),Object(a.jsxs)("div",{className:"sidebar__item",children:[Object(a.jsx)("div",{className:"sidebar__item-subscription"}),Object(a.jsx)("span",{className:"sidebar__item-text",children:"Subscription"})]})]})}),N=(t(20),function(e){var s=e.user,t=e.setUserId;return Object(a.jsxs)("tr",{className:"row",children:[Object(a.jsx)("td",{className:"row",children:Object(a.jsxs)(l.b,{className:"row__link",to:"/list/".concat(s.id),onClick:function(){return t(s.id)},children:[Object(a.jsx)("img",{className:"row__img",src:"users/user".concat(s.id,".png"),alt:"avatar"}),s.name]})}),Object(a.jsx)("td",{className:"row",children:Object(a.jsx)(l.b,{className:"row__link",to:"/list/".concat(s.id),onClick:function(){return t(s.id)},children:s.company.name})}),Object(a.jsx)("td",{className:"row",children:Object(a.jsx)(l.b,{className:"row__link",to:"/list/".concat(s.id),onClick:function(){return t(s.id)},children:s.email})}),Object(a.jsx)("td",{className:"row",children:Object(a.jsx)(l.b,{className:"row__link",to:"/list/".concat(s.id),onClick:function(){return t(s.id)},children:Object(a.jsx)("div",{className:"row__distance",children:"High"})})})]})}),v=(t(21),function(e){var s=e.users,t=e.setUserId;return console.log(s),Object(a.jsxs)("div",{className:"table",children:[Object(a.jsx)("h4",{className:"table__title",children:"All users"}),Object(a.jsxs)("table",{className:"table__body",children:[Object(a.jsxs)("tr",{className:"table__tr-name",children:[Object(a.jsx)("th",{className:"table__tr-name",children:"User details"}),Object(a.jsx)("th",{className:"table__tr-company",children:"Company name"}),Object(a.jsx)("th",{className:"table__tr-email",children:"Email"}),Object(a.jsx)("th",{className:"table__tr-dist",children:"Distance"})]}),s.map((function(e){return Object(a.jsx)(N,{user:e,setUserId:t},e.id)}))]})]})}),p=(t(22),function(e){var s,t,c,i,n=e.user;return Object(a.jsxs)("div",{className:"user",children:[Object(a.jsx)("div",{className:"user__header",children:Object(a.jsx)("img",{className:"user__avatar",src:"users/user".concat(null===n||void 0===n?void 0:n.id,".png"),alt:"avatar"})}),Object(a.jsx)("h2",{className:"user__title",children:null===n||void 0===n?void 0:n.name}),Object(a.jsx)("p",{className:"user__title-text",children:"Multi-layered client-server neural-net"}),Object(a.jsxs)("main",{className:"user__info",children:[Object(a.jsx)("h3",{className:"user__info-kind",children:"Address"}),Object(a.jsx)("p",{className:"user__info-detail",children:"".concat(null===n||void 0===n||null===(s=n.address)||void 0===s?void 0:s.street,",\n         ").concat(null===n||void 0===n||null===(t=n.address)||void 0===t?void 0:t.suite,",\n         ").concat(null===n||void 0===n||null===(c=n.address)||void 0===c?void 0:c.city,",\n         ").concat(null===n||void 0===n||null===(i=n.address)||void 0===i?void 0:i.zipcode)}),Object(a.jsx)("h3",{className:"user__info-kind",children:"Phone"}),Object(a.jsx)("p",{className:"user__info-detail",children:null===n||void 0===n?void 0:n.phone}),Object(a.jsx)("h3",{className:"user__info-kind",children:"Website"}),Object(a.jsx)("p",{className:"user__info-detail",children:null===n||void 0===n?void 0:n.website})]})]})}),f=(t(23),function(){var e=Object(c.useState)(0),s=Object(_.a)(e,2),t=s[0],i=s[1],n=Object(c.useState)([]),r=Object(_.a)(n,2),l=r[0],d=r[1],m=Object(c.useState)({}),u=Object(_.a)(m,2),N=u[0],f=u[1];return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:s=e.sent,d(s);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){var e;0!==t&&(e=l.find((function(e){return e.id===t}))),f(e)}),[t]),Object(a.jsxs)("div",{className:"page_container",children:[Object(a.jsx)("div",{className:"page_container__sidebar",children:Object(a.jsx)(O,{className:"page_container__sidebar"})}),Object(a.jsx)(x,{className:"page_container__header"}),Object(a.jsx)("div",{className:"page_container__main",children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/list",element:Object(a.jsx)(v,{users:l,setUserId:i})}),Object(a.jsx)(o.a,{path:"/list/:userId",element:Object(a.jsx)(p,{user:N})}),Object(a.jsx)(o.a,{path:"*",element:Object(a.jsx)(v,{users:l})})]})})]})});r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(f,{})})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.2b5ca58e.chunk.js.map