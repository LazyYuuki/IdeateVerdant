(this.webpackJsonpuseless=this.webpackJsonpuseless||[]).push([[0],{104:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(38),a=n.n(o),i=(n(104),n(75),n(86)),l=n(159),s=n(158),d=n(49),j=n(15),b=n(13),h=n(153),x=n(162),u=n(165),m=n(152),p=n(169),f=n(160),O=n(157),g=n(163),v=n(155),y=n(164),w=n(84),C=n.n(w),k=n(85),T=n.n(k),S=n(1),P={header:{display:"flex",backgroundColor:"#80fff7",flexDirection:"row"},icon:{display:"inline-block"},drawerContainer:{backgroundColor:"#80fff7"},drawerText:{color:"#98623C",textAlign:"center",fontWeight:"bold"}},A=[{text:"Token",href:"/token"}],R=[{text:"Home",href:"/"},{text:"Account",href:"/info"},{text:"Statistic",href:"/statistic"}];function D(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!1),a=Object(b.a)(o,2),i=a[0],l=a[1],s=function(){c(!n)},j=function(){l(!i)};return Object(S.jsxs)("div",{style:P.header,children:[Object(S.jsx)(f.a,{"aria-label":"account",size:"large",style:P.icon,onClick:j,children:Object(S.jsx)(C.a,{})}),Object(S.jsx)("div",{style:{flex:1}}),Object(S.jsx)(f.a,{"aria-label":"account",size:"large",style:P.icon,onClick:s,children:Object(S.jsx)(T.a,{})}),Object(S.jsx)(O.a,{anchor:"top",open:n,onClose:s,children:Object(S.jsx)(x.a,{role:"presentation",onClick:s,onKeyDown:s,style:P.drawerContainer,children:Object(S.jsx)(g.a,{children:A.map((function(e,t){return Object(S.jsx)(v.a,{button:!0,component:d.b,to:e.href,children:Object(S.jsx)(y.a,{primary:e.text,primaryTypographyProps:P.drawerText})},t)}))})})}),Object(S.jsx)(O.a,{anchor:"top",open:i,onClose:j,children:Object(S.jsx)(x.a,{role:"presentation",onClick:j,onKeyDown:j,style:P.drawerContainer,children:Object(S.jsx)(g.a,{children:R.map((function(e,t){return Object(S.jsx)(v.a,{button:!0,component:d.b,to:e.href,children:Object(S.jsx)(y.a,{primary:e.text,primaryTypographyProps:P.drawerText})},t)}))})})})]})}var W=n(166),F=n(167),M={card:{width:180,height:120,display:"inline-block",margin:"1rem",backgroundColor:"#bffffb",borderRadius:"2rem",elevation:1},merchantText:{fontWeight:"bold"},pointText:{textAlign:"center",padding:"0.5rem"},rewardText:{textAlign:"center"}};function B(e){var t=e.merchant,n=e.point;e.pointTillNext;return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(W.a,{sx:M.card,children:Object(S.jsxs)(F.a,{children:[Object(S.jsx)(u.a,{variant:"h6",align:"center",style:M.merchantText,children:t}),Object(S.jsxs)(u.a,{style:M.pointText,children:["Points earned: ",Object(S.jsx)("br",{}),n]})]})})})}var Q=[{merchant:"Fairprice",point:120,reward:0},{merchant:"H&M",point:40,reward:20},{merchant:"Giant",point:30,reward:40},{merchant:"Cold Storage",point:60,reward:30}],$={container:{height:330,backgroundImage:"url(/tree.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},cardContainer:{flexDirection:"row",overflowX:"scroll",whiteSpace:"nowrap",flextWrap:"nowrap"},textContainer:{padding:"1rem"},welcomeText:{fontWeight:"bold",color:"#98623C"},username:{fontWeight:"bold"},totalPoint:{fontWeight:"bold",textAlign:"center",backgroundColor:"#bffffb",width:200,margin:"0 auto",borderRadius:"2rem",elevation:1,border:"4px solid #006d5b"},totalPointText:{padding:"0.5rem"}};function z(e){var t=e.username;return Object(S.jsxs)("div",{style:$.container,children:[Object(S.jsxs)("div",{style:$.textContainer,children:[Object(S.jsx)(u.a,{variant:"subtitle1",style:$.welcomeText,children:"Welcome back,"}),Object(S.jsx)(u.a,{variant:"h4",style:$.username,children:t})]}),Object(S.jsx)("div",{style:$.cardContainer,class:"noscrollbar",children:Q.map((function(e,t){return Object(S.jsx)(B,{merchant:e.merchant,point:e.point,pointTillNext:e.reward},t)}))}),Object(S.jsx)("div",{style:$.totalPoint,children:Object(S.jsxs)(u.a,{style:$.totalPointText,children:["Total Points Earned: ",Object(S.jsx)("br",{})," 250"]})})]})}var H=n(168),I={modal:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:250,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,textAlign:"center"}};function E(e){var t=e.modalState,n=e.setModalState;return Object(S.jsx)(h.a,{open:t,onBackdropClick:n,children:Object(S.jsxs)(x.a,{component:"form",sx:I.modal,children:[Object(S.jsx)(u.a,{variant:"h6",component:"h2",align:"center",children:"Please present this QR code / Barcode below to the counter to redeem the voucher!"}),Object(S.jsx)(u.a,{variant:"subtitle2",align:"center",children:"(this is a fake QR)"}),Object(S.jsx)("br",{}),Object(S.jsx)("img",{src:"QR.png",alt:"QR",height:200}),Object(S.jsx)("img",{src:"barcode.png",alt:"barcode",width:200}),Object(S.jsx)("br",{})]})})}var G={card:{width:290,height:80,margin:"1rem auto",backgroundColor:"#DACBA9",borderRadius:"1rem",elevation:1},title:{display:"flex",flexDirection:"row"},merchantText:{fontWeight:"bold",display:"inline-block",flex:1,textAlign:"left"},pointText:{display:"inline-block"},rewardText:{textAlign:"left"}};function N(e){var t=e.merchant,n=e.redeemPoint,c=e.content,o=Object(r.useState)(!1),a=Object(b.a)(o,2),i=a[0],l=a[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(E,{modalState:i,setModalState:function(){l(!1)}}),Object(S.jsx)(W.a,{sx:G.card,children:Object(S.jsx)(H.a,{onClick:function(){l(!0)},children:Object(S.jsxs)(F.a,{children:[Object(S.jsxs)("div",{style:G.title,children:[Object(S.jsx)(u.a,{style:G.merchantText,children:t}),Object(S.jsxs)(u.a,{style:G.pointText,children:[Object(S.jsx)("img",{src:"/coin.gif",alt:"coin",width:14,style:{marginRight:3}}),n]})]}),Object(S.jsx)(u.a,{style:G.rewardText,children:c})]})})})]})}var J={container:{backgroundColor:"#98623C",textAlign:"center",justifyContent:"center",overflowY:"scroll",height:450,borderRadius:"2rem 2rem 0 0"},couponContainer:{marginTop:20,height:340,overflow:"scroll"}},K=[{merchant:"Fairprice",redeemPoint:120,content:"$10 off your next purchase"},{merchant:"H&M",redeemPoint:60,content:"$2 off your next purchase"},{merchant:"Giant",redeemPoint:70,content:"$2 off your next purchase"},{merchant:"Cold Storage",redeemPoint:90,content:"1 free beverage product of choice*"},{merchant:"Fairprice",redeemPoint:120,content:"$10 off your next purchase"},{merchant:"H&M",redeemPoint:60,content:"$2 off your next purchase"},{merchant:"Giant",redeemPoint:70,content:"$2 off your next purchase"},{merchant:"Cold Storage",redeemPoint:90,content:"1 free beverage product of choice*"}];function L(){return Object(S.jsx)("div",{style:J.container,children:Object(S.jsx)("div",{style:J.couponContainer,children:K.map((function(e,t){return Object(S.jsx)(N,{merchant:e.merchant,redeemPoint:e.redeemPoint,content:e.content},t)}))})})}var q={modal:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:250,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,textAlign:"center"}};function U(){var e=Object(r.useState)(!0),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),a=Object(b.a)(o,2),i=a[0],l=a[1];return Object(S.jsxs)("div",{children:[Object(S.jsx)(h.a,{open:n,children:Object(S.jsxs)(x.a,{component:"form",onSubmit:function(e){e.preventDefault(),c(!1)},sx:q.modal,children:[Object(S.jsxs)(u.a,{variant:"h6",component:"h2",align:"center",children:["Welcome to our Demo for ",Object(S.jsx)("br",{})," Verdant!"]}),Object(S.jsx)(u.a,{sx:{mt:2},align:"center",children:"Please enter your name below to try out the demo"}),Object(S.jsx)(u.a,{variant:"subtitle2",align:"center",children:"(it is all stored locally on your browser, we do not use a server for this demo)"}),Object(S.jsx)("br",{}),Object(S.jsx)(m.a,{required:!0,label:"Username",variant:"outlined",onChange:function(e){l(e.target.value)}}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)(p.a,{type:"submit",children:"Continue"})]})}),Object(S.jsx)(D,{}),Object(S.jsx)(z,{username:i}),Object(S.jsx)(L,{})]})}var V={modal:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:250,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,textAlign:"center"}};function X(e){var t=e.modalState,n=e.setModalState;return Object(S.jsx)(h.a,{open:t,onBackdropClick:n,children:Object(S.jsxs)(x.a,{component:"form",sx:V.modal,children:[Object(S.jsx)(u.a,{variant:"h6",component:"h2",align:"center",children:"Device is pairing please put the token nearby"}),Object(S.jsx)("img",{src:"earth.gif",alt:"earth",height:200}),Object(S.jsx)("br",{})]})})}var Y={contentContainer:{},text:{fontWeight:"bold",color:"#98623C",width:300,margin:"20px auto",textAlign:"center"},button:{textAlign:"center"}};function Z(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){setTimeout((function(){c(!1)}),8e3)}),[n]);var o=function(){c(!n)};return Object(S.jsxs)("div",{children:[Object(S.jsx)(D,{}),Object(S.jsx)(X,{modalState:n,setModalState:o}),Object(S.jsx)(u.a,{variant:"h4",style:Y.text,children:"Click on the button below to pair with your token!"}),Object(S.jsx)("img",{src:"/tree.svg",alt:"tree",width:"100%"}),Object(S.jsx)("div",{style:{textAlign:"center"},children:Object(S.jsx)(p.a,{variant:"contained",color:"success",size:"large",style:Y.button,onClick:o,children:"Pair"})})]})}var _={contentContainer:{flexDirection:"column",justifyContent:"center",alignItems:"center"},text:{fontWeight:"bold",color:"#98623C",width:300,margin:"20px auto",textAlign:"center"},image:{margin:"20px auto",display:"block"}};function ee(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(D,{}),Object(S.jsxs)("div",{style:_.contentContainer,children:[Object(S.jsx)("img",{src:"/QR.png",alt:"QR",width:"70%",style:_.image}),Object(S.jsx)("img",{src:"/barcode.png",alt:"barcode",width:"80%",style:_.image}),Object(S.jsx)(u.a,{variant:"subtitle2",style:_.text,children:"Please show the staffs the QR code / Barcode above after your purchase using your own carrier/container to earn points!"})]})]})}var te=Object(i.a)();te=Object(l.a)(te);var ne=function(){return Object(S.jsx)(s.a,{theme:te,children:Object(S.jsx)(d.a,{children:Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(j.c,{children:[Object(S.jsx)(j.a,{exact:!0,path:"/",children:Object(S.jsx)(U,{})}),Object(S.jsx)(j.a,{exact:!0,path:"/token",children:Object(S.jsx)(Z,{})}),Object(S.jsx)(j.a,{exact:!0,path:"/info",children:Object(S.jsx)(ee,{})})]})})})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,171)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};a.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(ne,{})}),document.getElementById("root")),re()},75:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.babe15e6.chunk.js.map