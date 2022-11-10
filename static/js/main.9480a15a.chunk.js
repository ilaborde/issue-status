(this["webpackJsonpissue-status"]=this["webpackJsonpissue-status"]||[]).push([[0],{31:function(n,e,t){},32:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var o,a,r,c,i,s,u,d,l,b,j,O,p,g,x,m,f,h,S,v,_,E,T,P,C=t(1),A=t.n(C),w=t(18),I=t.n(w),R=(t(31),t(5)),k=t(3),D=(t(32),t(4)),N={message:"All Systems Operational",backgroundColour:"#3da751"},y={message:"Some systems are experiencing issues",backgroundColour:"#4990e2"},L={message:"Some systems are experiencing a major outage",backgroundColour:"#d94430"},F=function(n,e){return 100*n.filter((function(n){return n.labels.find((function(n){return n.name===e}))})).length/n.length},W=t(7),H=t.n(W),K=t(0),M=D.a.div(o||(o=Object(k.a)(["\n  background-color: ",";\n  color: white;\n  padding: 16px;\n  border-radius: 3px;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  transition: 0.3s;\n"])),(function(n){return n.backgroundColour?n.backgroundColour:"#b1b1b1"})),U=D.a.h2(a||(a=Object(k.a)(["\n  font-size: 20px;\n  margin: 0;\n  font-weight: normal;\n"]))),Y=D.a.button(r||(r=Object(k.a)(["\n  background-color: transparent;\n  color: white;\n  text-decoration: underline;\n  border: none;\n  cursor: pointer;\n  text-align: right;\n  padding: 0;\n"]))),B=D.a.code(c||(c=Object(k.a)(["\n  white-space: pre-wrap;\n  display: block;\n"]))),z=function(n){var e=n.loading,t=n.error,o=n.components,a=n.refetch,r=function(n){var e=Object(C.useState)(),t=Object(R.a)(e,2),o=t[0],a=t[1];return Object(C.useEffect)((function(){var e=!1;F(n,"operational")<70&&(a(y),e=!0),F(n,"major outage")>0&&(a(L),e=!0),e||a(N)}),[n]),[o]}(o),c=Object(R.a)(r,1)[0],i=function(n,e){var t=Object(C.useState)(H()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow()),o=Object(R.a)(t,2),a=o[0],r=o[1];return Object(C.useEffect)((function(){var e=setInterval((function(){new Date(localStorage.getItem("issueStatusLastFetchcomponent"))<new Date-24e4?n((function(){r(H()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())})):r(H()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),1e3);return function(){clearInterval(e)}}),[n]),Object(C.useEffect)((function(){r(H()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),[e]),[a]}(a,e),s=Object(R.a)(i,1)[0];return Object(K.jsxs)(K.Fragment,{children:[t.hasError&&Object(K.jsxs)(B,{children:[Object(K.jsx)("div",{children:"An error occured"}),Object(K.jsx)("div",{children:"You may have exceeded the rate limit. Try again in 1 hour to fetch the latest data."}),JSON.stringify(t.errors,null,3)]}),Object(K.jsxs)(M,{backgroundColour:null===c||void 0===c?void 0:c.backgroundColour,children:[Object(K.jsx)(U,{children:null===c||void 0===c?void 0:c.message}),Object(K.jsx)(Y,{onClick:a,children:e?"reloading":s})]})]})},J=function(n){var e=Object(C.useState)([]),t=Object(R.a)(e,2),o=t[0],a=t[1],r=Object(C.useState)(),c=Object(R.a)(r,2),i=c[0],s=c[1],u=Object(C.useState)(!0),d=Object(R.a)(u,2),l=d[0],b=d[1];return Object(C.useEffect)((function(){new Date(localStorage.getItem("issueStatusLastFetch".concat(n)))<new Date-24e4?G(b,s,a,n):(a(JSON.parse(localStorage.getItem("issueStatus".concat(n)))),b(!1),s())}),[n]),[l,i,o||[],function(){return G(b,s,a,n)}]},G=function(n,e,t,o){n(!0),fetch("https://api.github.com/repos/".concat("ilaborde/issue-status","/issues?state=all&labels=issue status,").concat(o)).then((function(n){return n.json()})).then((function(a){e(),localStorage.setItem("issueStatusLastFetch".concat(o),new Date),localStorage.setItem("issueStatus".concat(o),JSON.stringify(a)),t(a),n(!1)})).catch((function(a){e(a.toString()),localStorage.setItem("issueStatusLastFetch".concat(o),new Date),t(JSON.parse(localStorage.getItem("issueStatus".concat(o)))),n(!1)}))},V=D.a.h1(i||(i=Object(k.a)(["\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),$=D.a.img(s||(s=Object(k.a)([""]))),q=D.a.div(u||(u=Object(k.a)(["\n  text-align: center;\n  margin-bottom: 16px;\n"]))),Q=function(){return Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_DESCRIPTION:"Simple, modern and flexible status page",REACT_APP_NAME:"Issue Status",REACT_APP_REPOSITORY:"ilaborde/issue-status",REACT_APP_TITLE:"Injury status"}).REACT_APP_LOGO,Object(K.jsx)(q,{children:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_DESCRIPTION:"Simple, modern and flexible status page",REACT_APP_NAME:"Issue Status",REACT_APP_REPOSITORY:"ilaborde/issue-status",REACT_APP_TITLE:"Injury status"}).REACT_APP_LOGO?Object(K.jsx)($,{src:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_DESCRIPTION:"Simple, modern and flexible status page",REACT_APP_NAME:"Issue Status",REACT_APP_REPOSITORY:"ilaborde/issue-status",REACT_APP_TITLE:"Injury status"}).REACT_APP_LOGO,alt:"Issue Status"}):Object(K.jsx)(V,{children:"Issue Status"})})},X=D.a.div(d||(d=Object(k.a)(["\n  width: 100%;\n  height: 44px;\n  border-radius: 3px;\n  background-color: #f7f8f9;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),Z={operational:{name:"Operational",colour:"#247234",backgroundColour:"rgba(61, 167, 81, 0.1)"},performanceIssues:{name:"Performance Issues",colour:"#2f5888",backgroundColour:"rgba(73, 144, 226, 0.1)"},partialOutage:{name:"Partial Outage",colour:"#74582a",backgroundColour:"rgba(255, 198, 103, 0.1)"},majorOutage:{name:"Major Outage",colour:"#8e3b31",backgroundColour:"rgba(217, 68, 48, 0.1)"},unknown:{name:"Unknown",colour:"#6e6b6b",backgroundColour:"rgba(177, 177, 177, 0.1)"}},nn=D.a.div(l||(l=Object(k.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(n){return n.colour}),(function(n){return n.backgroundColour})),en=function(n){var e=function(n){var e=Object(C.useState)(),t=Object(R.a)(e,2),o=t[0],a=t[1];return Object(C.useEffect)((function(){a(Object.values(Z).find((function(e){return n.find((function(n){return n.name===e.name.toLowerCase()}))})))}),[n]),o||a(Z.unknown),[o]}(n.labels),t=Object(R.a)(e,1)[0];return Object(K.jsx)(nn,{colour:null===t||void 0===t?void 0:t.colour,backgroundColour:null===t||void 0===t?void 0:t.backgroundColour,children:null===t||void 0===t?void 0:t.name})},tn=D.a.div(b||(b=Object(k.a)(["\n  background-color: #f7f8f9;\n  padding: 8px 16px;\n  border-radius: 3px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),on=function(n){var e=n.component;return Object(K.jsxs)(tn,{children:[e.title," ",Object(K.jsx)(en,{labels:e.labels})]})},an=function(){var n=Object(C.useState)(),e=Object(R.a)(n,2),t=e[0],o=e[1];return Object(C.useEffect)((function(){o(!0)}),[]),[t]},rn=function(n){var e=n.loading,t=n.components,o=an(),a=Object(R.a)(o,1)[0];return!e||a?(null===t||void 0===t?void 0:t.length)>0?null===t||void 0===t?void 0:t.map((function(n){return Object(K.jsx)(on,{component:n},n.id)})):Object(K.jsx)("p",{children:"No Components found."}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(X,{}),Object(K.jsx)(X,{}),Object(K.jsx)(X,{})]})},cn=t(24),sn=D.a.div(j||(j=Object(k.a)(["\n  transition: 0.3s;\n  border-left: 16px solid\n    ",";\n  background-color: white;\n  border-radius: 3px;\n  padding: 16px;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  margin-top: 8px;\n\n  :not(:last-child) {\n    margin-bottom: 16px;\n  }\n"])),(function(n){return n.active?"rgba(177, 177, 177,0.2)":"rgba(73, 144, 226, 0.2)"})),un=D.a.div(O||(O=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3px;\n"]))),dn=D.a.div(p||(p=Object(k.a)(["\n  margin-right: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n  color: #1e1e1e;\n"]))),ln=D.a.div(g||(g=Object(k.a)(["\n  white-space: break-spaces;\n  color: #1e1e1e;\n"]))),bn=D.a.div(x||(x=Object(k.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(n){return n.active?"#6e6b6b":"#2f5888"}),(function(n){return n.active?"rgba(177, 177, 177, 0.1)":"rgba(73, 144, 226, 0.1)"})),jn=D.a.div(m||(m=Object(k.a)(["\n  font-size: 13px;\n  color: #6e6b6b;\n  font-weight: bold;\n"]))),On=function(n){var e=n.incident;return Object(K.jsxs)(sn,{active:e.closed_at,children:[Object(K.jsxs)(un,{children:[Object(K.jsx)(jn,{children:H()(e.created_at).format("MMMM Do YYYY, h:mm a").toUpperCase()}),Object(K.jsx)(bn,{active:e.closed_at,children:e.closed_at?"Closed":"Active"})]}),Object(K.jsx)(dn,{children:e.title}),Object(K.jsx)(ln,{children:Object(K.jsx)(cn.a,{children:e.body})})]})},pn=D.a.div(f||(f=Object(k.a)(["\n  width: 100%;\n  height: 84px;\n  border-radius: 3px;\n  background-color: white;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),gn=D.a.div(h||(h=Object(k.a)(["\n  margin: 32px auto 0 auto;\n  max-width: 1040px;\n"]))),xn=D.a.div(S||(S=Object(k.a)(["\n  padding: 0 16px;\n  font-size: 20px;\n  margin-bottom: 16px;\n"]))),mn=D.a.div(v||(v=Object(k.a)(["\n  margin: 0 8px;\n"]))),fn=function(n){var e=n.loading,t=n.incidents,o=an(),a=Object(R.a)(o,1)[0];return Object(K.jsxs)(gn,{children:[Object(K.jsx)(xn,{children:"Incidents"}),!e||a?(null===t||void 0===t?void 0:t.length)>0?null===t||void 0===t?void 0:t.map((function(n){return Object(K.jsx)(On,{incident:n},n.id)})):Object(K.jsx)(mn,{children:"No Incidents found."}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(pn,{}),Object(K.jsx)(pn,{}),Object(K.jsx)(pn,{})]})]})},hn=D.a.div(_||(_=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n"]))),Sn=D.a.a(E||(E=Object(k.a)(["\n  color: #6e6b6b;\n  font-size: 13px;\n  text-decoration: none;\n  transition: 0.3s;\n  display: ",";\n\n  :hover {\n    opacity: 0.9;\n  }\n"])),(function(n){return n.visible?"block":"none"})),vn=function(){return Object(K.jsxs)(hn,{children:[Object(K.jsx)("div",{}),Object(K.jsx)(Sn,{visible:"false"!==Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_DESCRIPTION:"Simple, modern and flexible status page",REACT_APP_NAME:"Issue Status",REACT_APP_REPOSITORY:"ilaborde/issue-status",REACT_APP_TITLE:"Injury status"}).REACT_APP_BRANDING,href:"https://github.com/tadhglewis/issue-status",rel:"noopener",target:"_blank",children:"Powered by Issue Status"})]})},_n=D.a.div(T||(T=Object(k.a)(["\n  max-width: 1008px;\n  padding: 16px;\n  margin: 16px auto;\n"]))),En=D.a.div(P||(P=Object(k.a)(["\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  border-radius: 3px;\n  background-color: white;\n  padding: 16px;\n"]))),Tn=function(){var n=J("component"),e=Object(R.a)(n,4),t=e[0],o=e[1],a=e[2],r=e[3],c=J("incident"),i=Object(R.a)(c,4),s=i[0],u=i[1],d=i[2],l=i[3];return Object(K.jsxs)(_n,{children:[Object(K.jsx)(Q,{}),Object(K.jsxs)(En,{children:[Object(K.jsx)(z,{loading:t||s,error:{hasError:o||u,errors:{componentsError:o,incidentsError:u}},components:a,refetch:function(){r(),l()}}),Object(K.jsx)(rn,{loading:t,components:a})]}),Object(K.jsx)(fn,{loading:s,incidents:d}),Object(K.jsx)(vn,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));I.a.render(Object(K.jsx)(A.a.StrictMode,{children:Object(K.jsx)(Tn,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.9480a15a.chunk.js.map