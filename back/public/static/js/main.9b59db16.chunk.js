(this.webpackJsonpmelilabs=this.webpackJsonpmelilabs||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(25),o=a.n(r),c=a(7),i=a(28),s=a(136),l=a(138),d=a(140),u=a(141),b=a(139),j=a(2),p=Object(s.a)((function(){return{card:{maxWidth:300,margin:"auto",transition:"0.3s",boxShadow:"0 8px 40px -12px rgba(0,0,0,0.3)","&:hover":{boxShadow:"0 16px 70px -12.125px black"}},media:{paddingTop:"56.25%"},content:{display:"flex",flexDirection:"column",justifyContent:"center",alignSelf:"center",backgroundColor:"#d8d8d8"},divider:{margin:3},heading:{fontWeight:"bold"},subheading:{fontSize:"15px"},title:{textDecoration:"none","&:link":{color:"gray"},"&:visited":{color:"gray"},"&:hover":{color:"black"}}}}));var g=function(e){var t=e.props,a=p({color:"#fff59d"});return Object(j.jsx)("div",{children:Object(j.jsxs)(l.a,{className:a.card,children:[Object(j.jsx)(b.a,{className:a.media,image:t.thumbnail}),Object(j.jsxs)(d.a,{className:a.content,children:[Object(j.jsx)(u.a,{className:a.heading,variant:"h6",gutterBottom:!0,children:Object(j.jsxs)("a",{href:t.permalink,className:a.title,children:[t.title.toUpperCase().slice(0,18),"..."]})}),Object(j.jsxs)(u.a,{className:a.subheading,variant:"caption",children:["$ ",t.price]}),Object(j.jsxs)(u.a,{className:a.subheading,variant:"caption",children:["Stock: ",t.available_quantity," u"]}),Object(j.jsxs)(u.a,{className:a.subheading,variant:"caption",children:["Condition: ","new"===t.condition?"Nuevo":"Usado"]})]})]})})},m=a(11),f=a(74),O=a(69),x=a.n(O),h="GET_PRODUCTS_BY_KEYWORD",v="NUEVO",y="USADO",w="MAYOR",k="MENOR",C="CHANGE_PAGE",N="BEFORE_PAGE",S="RESET";function R(e){return function(t){x.a.get("https://melilabs.herokuapp.com/api/search?q=".concat(e)).then((function(a){t({type:"GET_PRODUCTS_BY_KEYWORD",payload:a.data,keyword:e})}))}}a(49),a(50),Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"row",justifyContent:"center",alignSelf:"center",flexGrow:1},paper:{display:"flex",flexDirection:"column",backgroundColor:"#757575",borderRadius:"5px"},button:{fontFamily:"sans-serif",fontSize:"medium",color:"#fff59d",width:"150px",height:"50px",border:"none",borderRadius:"5px",backgroundColor:"#757575","&:hover":{backgroundColor:"#fff59d",color:"#757575"}}}}));var E=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column",backgroundColor:"white",margin:"5px",borderRadius:"10px"},paper:{display:"flex",flexDirection:"column",backgroundColor:"#757575",borderRadius:"5px"},button:{margin:"1px",fontFamily:"sans-serif",fontSize:"medium",color:"#fff59d",width:"maxContent",height:"80px",border:"none",borderRadius:"1px",backgroundColor:"#757575","&:hover":{backgroundColor:"#fff59d",color:"#757575"}}}}));var D=function(){var e=E(),t=Object(m.b)(),a=Object(m.c)((function(e){return e.keyword})),n=function(e){switch(e.preventDefault(),e.target.name){case"mayor":t({type:"MAYOR"});break;case"menor":t({type:"MENOR"});break;case"usado":t({type:"USADO",payload:"used"});break;case"nuevo":t(function(e){return{type:"NUEVO",payload:e}}("new"));break;case"none":t(R(a));break;default:return null}};return Object(j.jsx)("div",{className:e.root,children:Object(j.jsxs)(f.a,{elevation:3,className:e.paper,children:[Object(j.jsx)("button",{onClick:function(e){return n(e)},name:"none",className:e.button,children:"Sin Filtro"}),Object(j.jsx)("button",{onClick:function(e){return n(e)},name:"mayor",className:e.button,children:"De mayor a menor"}),Object(j.jsx)("button",{onClick:function(e){return n(e)},name:"menor",className:e.button,children:"De menor a mayor"}),Object(j.jsx)("button",{onClick:function(e){return n(e)},name:"usado",className:e.button,children:"Producto Usado"}),Object(j.jsx)("button",{onClick:function(e){return n(e)},name:"nuevo",className:e.button,children:"Producto Nuevo"})]})})},P=a(147),B=a(146),_=Object(s.a)((function(e){return{catalogue:{display:"grid",gridTemplateColumns:"auto auto auto auto",gap:"50px",justifyContent:"space-around",alignContent:"space-around",gridColumnStart:"2",gridColumnEnd:"6",gridRowStart:"2",gridRowEnd:"3"},containerall:{display:"grid",gridTemplateColumns:"auto auto auto auto auto",gridTemplateRows:"auto auto",gap:"20px",margin:"20px"},pagination:{gridRowStart:"1",gridRowEnd:"2",gridColumnStart:"5",gridColumnEnd:"6"},filter:{gridRowStart:"2",gridRowEnd:"3",gridColumnStart:"1",gridColumnEnd:"2"},alert:{width:"400px",textAlign:"center",fontSize:"20px",backgroundColor:"#fff59d",color:"#757575",marginTop:"50px"},alertC:{display:"flex",justifyContent:"center",alignSelf:"center",marginTop:"50px",gridColumnStart:"2",gridColumnEnd:"6",gridRowStart:"2",gridRowEnd:"3"}}}));var T=function(e){var t=e.products,a=_(),r=Object(n.useState)(1),o=Object(i.a)(r,2),c=o[0],s=o[1],l=Object(n.useState)(30),d=Object(i.a)(l,2),u=d[0],b=(d[1],c*u),p=b-u,m=null===t||void 0===t?void 0:t.slice(p,b);return 0===(null===t||void 0===t?void 0:t.length)?Object(j.jsxs)("div",{className:a.containerall,children:[Object(j.jsx)("div",{className:a.filter,children:Object(j.jsx)(D,{})}),Object(j.jsx)("div",{className:a.alertC,children:Object(j.jsx)(P.a,{severity:"info",className:a.alert,children:"No hay productos"})})]}):Object(j.jsxs)("div",{className:a.containerall,children:[Object(j.jsx)("div",{className:a.pagination,children:Object(j.jsx)(B.a,{size:"large",variant:"outlined",shape:"rounded",count:Math.ceil((null===t||void 0===t?void 0:t.length)/u),onChange:function(e,t){return s(t)}})}),Object(j.jsx)("div",{className:a.filter,children:Object(j.jsx)(D,{})}),Object(j.jsx)("div",{className:a.catalogue,children:null===m||void 0===m?void 0:m.map((function(e){return Object(j.jsx)("div",{className:a.product,children:Object(j.jsx)(g,{props:e})},e.id)}))})]})},K=a(26),U=a(148),A=a(143),z=a(142),F=a(70),G=a.n(F),W=Object(s.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}));var M=function(){var e=W(),t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],c=Object(m.b)();return Object(j.jsxs)(f.a,{component:"form",className:e.root,onSubmit:function(e){e.preventDefault(),c(R(r))},children:[Object(j.jsx)(U.a,{className:e.input,placeholder:"ej. zapatilla, computadoras, etc",inputProps:"aria-label",value:r,onChange:function(e){e.preventDefault(),o(e.target.value)}}),Object(j.jsx)(A.a,{className:e.divider,orientation:"vertical"}),Object(j.jsx)(z.a,{type:"submit",className:e.iconButton,"aria-label":"search",children:Object(j.jsx)(G.a,{})})]})},Y=a(20),I=a(144),L=a(145),q=Object(s.a)((function(e){var t;return{grow:{flexGrow:1,backgroundColor:"#757575",borderRadius:"5px"},title:(t={display:"none"},Object(K.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(K.a)(t,"color","#fff59d"),Object(K.a)(t,"fontFamily","sans-serif"),Object(K.a)(t,"fontWeight",500),t),search:Object(K.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Y.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Y.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"})}}));var H=function(){var e=q(),t=Object(m.b)();return Object(j.jsx)("div",{className:e.grow,children:Object(j.jsx)(I.a,{position:"static",className:e.grow,children:Object(j.jsxs)(L.a,{children:[Object(j.jsx)(u.a,{className:e.title,variant:"h6",noWrap:!0,onClick:function(){t({type:"RESET"})},children:"Henry Search"}),Object(j.jsx)("div",{className:e.search,children:Object(j.jsx)(M,{})}),Object(j.jsx)("div",{className:e.grow})]})})})},V=Object(s.a)((function(){return{presentation:{height:"500px",width:"600px",display:"flex",flexDirection:"column",justifyContent:"center",alignSelf:"center",alignItems:"flex-end",margin:"100px auto auto auto",paddingRight:"10px",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundImage:"url(https://image.freepik.com/foto-gratis/retrato-joven-sonriente-creativa-gafas-sol-hermosa-nina-sentada-piso-cerca-pared-gris_158538-1341.jpg)"},font:{fontFamily:"sans-serif",fontSize:"25px",color:"black",textAlign:"right"}}}));function J(){var e=V(),t=Object(m.c)((function(e){return e.getProductsByKeyword})),a=Object(m.c)((function(e){return e.keyword}));return Object(j.jsx)("div",{children:""===a?Object(j.jsxs)("div",{className:e.presentation,children:[Object(j.jsx)("h3",{className:e.font,children:"Haz tu primer busqueda !"}),Object(j.jsx)(M,{})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(H,{}),Object(j.jsx)(T,{products:t})]})})}var X=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(c.a,{path:"/",component:J})})},$=a(48),Q=a(41),Z=a(29),ee=a(12),te={getProductsByKeyword:[],pages:1,keyword:""};var ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(ee.a)(Object(ee.a)({},e),{},{getProductsByKeyword:t.payload,keyword:t.keyword});case w:return Object(ee.a)(Object(ee.a)({},e),{},{getProductsByKeyword:Object(Z.a)(e.getProductsByKeyword).sort((function(e,t){return t.price-e.price}))});case k:return Object(ee.a)(Object(ee.a)({},e),{},{getProductsByKeyword:Object(Z.a)(e.getProductsByKeyword).sort((function(e,t){return e.price-t.price}))});case y:case v:return Object(ee.a)(Object(ee.a)({},e),{},{getProductsByKeyword:Object(Z.a)(e.getProductsByKeyword).filter((function(e){return e.condition===t.payload})).length>0?Object(Z.a)(e.getProductsByKeyword).filter((function(e){return e.condition===t.payload})):null});case C:return Object(ee.a)(Object(ee.a)({},e),{},{pages:e.pages+1});case N:return Object(ee.a)(Object(ee.a)({},e),{},{pages:e.pages-1});case S:return Object(ee.a)(Object(ee.a)({},e),{},{getProductsByKeyword:[]});default:return e}},ne=a(71),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.b,oe=Object(Q.c)(ae,re(Object(Q.a)(ne.a))),ce=a(72);a.n(ce).a.load({google:{families:["Titillium Web:300,400,700","sans-serif"]}}),o.a.render(Object(j.jsx)(m.a,{store:oe,children:Object(j.jsx)($.a,{children:Object(j.jsx)(X,{})})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.9b59db16.chunk.js.map