(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,s,t){},,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(1),i=t.n(a),n=t(10),r=t.n(n),l=t(4),d=(t(16),t(6)),j=t.n(d),b=t(7),_=t(5),o=t(2),m="https://jsonplaceholder.typicode.com/users";function x(){return h.apply(this,arguments)}function h(){return(h=Object(b.a)(j.a.mark((function e(){var s,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m);case 2:return s=e.sent,e.next=5,s.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(18);var O=function(){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"header__top",children:[Object(c.jsx)("h3",{className:"header__top-title",children:"Users"}),Object(c.jsxs)("div",{className:"header__top-icons",children:[Object(c.jsx)(l.b,{to:"/",children:Object(c.jsx)("div",{className:"header__top-icons-search"})}),Object(c.jsx)("div",{className:"header__top-icons-bell"}),Object(c.jsx)("div",{className:"header__top-icons-line"}),Object(c.jsx)("p",{className:"header__top-icons-name",children:"Jones Ferdinand"}),Object(c.jsx)("div",{className:"header__top-icons-avatar"})]})]}),Object(c.jsxs)("div",{className:"header__buttons",children:[Object(c.jsxs)("div",{className:"header__button",children:[Object(c.jsx)("span",{className:"header__button-text",children:"Active"}),Object(c.jsx)("span",{className:"header__button-number",children:"60"})]}),Object(c.jsxs)("div",{className:"header__button",children:[Object(c.jsx)("span",{className:"header__button-text",children:"Online"}),Object(c.jsx)("span",{className:"header__button-number",children:"16"})]}),Object(c.jsxs)("div",{className:"header__button",children:[Object(c.jsx)("span",{className:"header__button-text",children:"Filtered"}),Object(c.jsx)("span",{className:"header__button-number",children:"43"})]}),Object(c.jsxs)("div",{className:"header__button",children:[Object(c.jsx)("span",{className:"header__button-text",children:"Banned"}),Object(c.jsx)("span",{className:"header__button-number",children:"64"})]})]})]})},u=(t(19),function(){return Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsxs)("div",{className:"sidebar__title",children:[Object(c.jsx)("div",{className:"sidebar__title-img"}),Object(c.jsx)("span",{className:"sidebar__title-text",children:"Dashboard"})]}),Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-overview"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Overview"})]}),Object(c.jsx)(l.b,{to:"/list",className:"sidebar__link",children:Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-users"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Users"})]})}),Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-ideas"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Ideas"})]}),Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-contacts"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Contacts"})]}),Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-agents"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Agents"})]}),Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-articles"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Articles"})]}),Object(c.jsx)("div",{className:"sidebar__item-divider"}),Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-settings"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Settings"})]}),Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("div",{className:"sidebar__item-subscription"}),Object(c.jsx)("span",{className:"sidebar__item-text",children:"Subscription"})]})]})}),N=(t(20),function(e){var s=e.user,t=e.setUserId;return Object(c.jsxs)("tr",{className:"row",children:[Object(c.jsx)("td",{className:"row",children:Object(c.jsxs)(l.b,{className:"row__link",to:"/list/".concat(s.id),onClick:function(){return t(s.id)},children:[Object(c.jsx)("img",{className:"row__img",src:"users/user".concat(s.id,".png"),alt:"avatar"}),s.name]})}),Object(c.jsx)("td",{className:"row",children:Object(c.jsx)(l.b,{className:"row__link",to:"/list/".concat(s.id),onClick:function(){return t(s.id)},children:s.company.name})}),Object(c.jsx)("td",{className:"row",children:Object(c.jsx)(l.b,{className:"row__link",to:"/list/".concat(s.id),onClick:function(){return t(s.id)},children:s.email})}),Object(c.jsx)("td",{className:"row",children:Object(c.jsx)(l.b,{className:"row__link",to:"/list/".concat(s.id),onClick:function(){return t(s.id)},children:Object(c.jsx)("div",{className:"row__distance",children:"High"})})})]})}),p=(t(21),function(){return Object(c.jsxs)("div",{className:"infoTabs",children:[Object(c.jsxs)("div",{className:"infoTabs__tickets",children:[Object(c.jsxs)("div",{className:"infoTabs__tickets-title",children:[Object(c.jsx)("p",{className:"infoTabs__tickets-title-text",children:"Unresolved tickets"}),Object(c.jsx)("p",{className:"infoTabs__tickets-title-details",children:"View details"})]}),Object(c.jsxs)("p",{className:"infoTabs__tickets-title-paragraph",children:["Group:",Object(c.jsx)("b",{children:"Support"})]}),Object(c.jsxs)("div",{className:"infoTabs__tickets-body",children:[Object(c.jsx)("p",{className:"infoTabs__tickets-body-text",children:"Waiting on Feature Request"}),Object(c.jsx)("p",{className:"infoTabs__tickets-body-number",children:"4238"})]}),Object(c.jsxs)("div",{className:"infoTabs__tickets-body",children:[Object(c.jsx)("p",{className:"infoTabs__tickets-body-text",children:"Awaiting Customer Response"}),Object(c.jsx)("p",{className:"infoTabs__tickets-body-number",children:"1005"})]}),Object(c.jsxs)("div",{className:"infoTabs__tickets-body",children:[Object(c.jsx)("p",{className:"infoTabs__tickets-body-text",children:"Awaiting Developer Fix"}),Object(c.jsx)("p",{className:"infoTabs__tickets-body-number",children:"911"})]}),Object(c.jsxs)("div",{className:"infoTabs__tickets-body",children:[Object(c.jsx)("p",{className:"infoTabs__tickets-body-text",children:"Pending"}),Object(c.jsx)("p",{className:"infoTabs__tickets-body-number",children:"101"})]})]}),Object(c.jsxs)("div",{className:"infoTabs__tasks",children:[Object(c.jsxs)("div",{className:"infoTabs__tickets-title",children:[Object(c.jsx)("p",{className:"infoTabs__tickets-title-text",children:"Tasks"}),Object(c.jsx)("p",{className:"infoTabs__tickets-title-details",children:"View all"})]}),Object(c.jsx)("p",{className:"infoTabs__tickets-title-paragraph",children:"Today"}),Object(c.jsxs)("div",{className:"infoTabs__tickets-body",children:[Object(c.jsx)("p",{className:"infoTabs__tasks-text",children:"Create new task"}),Object(c.jsx)("div",{className:"infoTabs__tasks-new",children:"+"})]}),Object(c.jsxs)("div",{className:"infoTabs__tickets-body",children:[Object(c.jsxs)("p",{className:"infoTabs__tickets-body-text",children:[Object(c.jsx)("input",{type:"checkbox"}),"Finish ticket update"]}),Object(c.jsx)("div",{className:"infoTabs__tasks-finish",children:"Urgent"})]}),Object(c.jsxs)("div",{className:"infoTabs__tickets-body",children:[Object(c.jsxs)("p",{className:"infoTabs__tickets-body-text",children:[Object(c.jsx)("input",{type:"checkbox"}),"Create new ticket example"]}),Object(c.jsx)("div",{className:"infoTabs__tasks-ticket",children:"Ntw"})]}),Object(c.jsxs)("div",{className:"infoTabs__tickets-body",children:[Object(c.jsxs)("p",{className:"infoTabs__tickets-body-text",children:[Object(c.jsx)("input",{type:"checkbox"}),"Update ticket report"]}),Object(c.jsx)("div",{className:"infoTabs__tasks-default",children:"Default"})]})]})]})}),v=(t(22),function(e){var s=e.users,t=e.setUserId;return Object(c.jsxs)("div",{className:"table",children:[Object(c.jsx)("h4",{className:"table__title",children:"All users"}),Object(c.jsxs)("table",{className:"table__body",children:[Object(c.jsxs)("tr",{className:"table__tr-name",children:[Object(c.jsx)("th",{className:"table__tr-name",children:"User details"}),Object(c.jsx)("th",{className:"table__tr-company",children:"Company name"}),Object(c.jsx)("th",{className:"table__tr-email",children:"Email"}),Object(c.jsx)("th",{className:"table__tr-dist",children:"Distance"})]}),s.map((function(e){return Object(c.jsx)(N,{user:e,setUserId:t},e.id)}))]}),Object(c.jsx)(p,{})]})}),f=(t(23),function(e){var s,t,a,i,n=e.user;return Object(c.jsxs)("div",{className:"user",children:[Object(c.jsx)("div",{className:"user__header",children:Object(c.jsx)("img",{className:"user__avatar",src:"users/user".concat(null===n||void 0===n?void 0:n.id,".png"),alt:"avatar"})}),Object(c.jsx)("h2",{className:"user__title",children:null===n||void 0===n?void 0:n.name}),Object(c.jsx)("p",{className:"user__title-text",children:"Multi-layered client-server neural-net"}),Object(c.jsxs)("main",{className:"user__info",children:[Object(c.jsx)("h3",{className:"user__info-kind",children:"Address"}),Object(c.jsx)("p",{className:"user__info-detail",children:"".concat(null===n||void 0===n||null===(s=n.address)||void 0===s?void 0:s.street,",\n         ").concat(null===n||void 0===n||null===(t=n.address)||void 0===t?void 0:t.suite,",\n         ").concat(null===n||void 0===n||null===(a=n.address)||void 0===a?void 0:a.city,",\n         ").concat(null===n||void 0===n||null===(i=n.address)||void 0===i?void 0:i.zipcode)}),Object(c.jsx)("h3",{className:"user__info-kind",children:"Phone"}),Object(c.jsx)("p",{className:"user__info-detail",children:null===n||void 0===n?void 0:n.phone}),Object(c.jsx)("h3",{className:"user__info-kind",children:"Website"}),Object(c.jsx)("p",{className:"user__info-detail",children:null===n||void 0===n?void 0:n.website})]})]})}),k=(t(24),function(){var e=Object(a.useState)(0),s=Object(_.a)(e,2),t=s[0],i=s[1],n=Object(a.useState)([]),r=Object(_.a)(n,2),l=r[0],d=r[1],m=Object(a.useState)({}),h=Object(_.a)(m,2),N=h[0],p=h[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:s=e.sent,d(s);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){var e;0!==t&&(e=l.find((function(e){return e.id===t}))),p(e)}),[t]),Object(c.jsxs)("div",{className:"page_container",children:[Object(c.jsx)("div",{className:"page_container__sidebar",children:Object(c.jsx)(u,{className:"page_container__sidebar"})}),Object(c.jsx)(O,{className:"page_container__header"}),Object(c.jsx)("div",{className:"page_container__main",children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/list",element:Object(c.jsx)(v,{users:l,setUserId:i})}),Object(c.jsx)(o.a,{path:"/list/:userId",element:Object(c.jsx)(f,{user:N})}),Object(c.jsx)(o.a,{path:"*",element:Object(c.jsx)(v,{users:l})})]})})]})});r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(k,{})})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.3d5e7c0e.chunk.js.map