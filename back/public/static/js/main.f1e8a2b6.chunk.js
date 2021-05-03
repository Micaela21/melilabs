(this.webpackJsonpmelilabs=this.webpackJsonpmelilabs||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(22),o=a.n(r),c=a(7),i=a(131),s=a(133),l=a(135),d=a(136),u=a(134),b=a(2),j=Object(i.a)((function(){return{card:{maxWidth:300,margin:"auto",transition:"0.3s",boxShadow:"0 8px 40px -12px rgba(0,0,0,0.3)","&:hover":{boxShadow:"0 16px 70px -12.125px black"}},media:{paddingTop:"56.25%"},content:{display:"flex",flexDirection:"column",justifyContent:"center",alignSelf:"center",backgroundColor:"#d8d8d8"},divider:{margin:3},heading:{fontWeight:"bold"},subheading:{fontSize:"15px"},title:{textDecoration:"none","&:link":{color:"gray"},"&:visited":{color:"gray"},"&:hover":{color:"black"}}}}));var p=function(e){var t=e.props,a=j({color:"#fff59d"});return Object(b.jsx)("div",{children:Object(b.jsxs)(s.a,{className:a.card,children:[Object(b.jsx)(u.a,{className:a.media,image:t.thumbnail}),Object(b.jsxs)(l.a,{className:a.content,children:[Object(b.jsx)(d.a,{className:a.heading,variant:"h6",gutterBottom:!0,children:Object(b.jsxs)("a",{href:t.permalink,className:a.title,children:[t.title.toUpperCase().slice(0,18),"..."]})}),Object(b.jsxs)(d.a,{className:a.subheading,variant:"caption",children:["$ ",t.price]}),Object(b.jsxs)(d.a,{className:a.subheading,variant:"caption",children:["Stock: ",t.available_quantity," u"]}),Object(b.jsxs)(d.a,{className:a.subheading,variant:"caption",children:["Condition: ","new"===t.condition?"Nuevo":"Usado"]})]})]})})},g=a(9),f=a(39),m=a(71),O=a(66),x=a.n(O),h="GET_PRODUCTS_BY_KEYWORD",y="NUEVO",v="USADO",w="MAYOR",N="MENOR",k="CHANGE_PAGE",C="BEFORE_PAGE",E="RESET";function S(e){return function(t){x.a.get("https://melilabs.herokuapp.com/api/search?q=".concat(e)).then((function(a){t({type:"GET_PRODUCTS_BY_KEYWORD",payload:a.data,keyword:e})}))}}var R=a(48),P=a.n(R),B=a(49),D=a.n(B),_=Object(i.a)((function(e){return{root:{display:"flex",flexDirection:"row",justifyContent:"center",alignSelf:"center",flexGrow:1},paper:{display:"flex",flexDirection:"column",backgroundColor:"#757575",borderRadius:"5px"},button:{fontFamily:"sans-serif",fontSize:"medium",color:"#fff59d",width:"150px",height:"50px",border:"none",borderRadius:"5px",backgroundColor:"#757575","&:hover":{backgroundColor:"#fff59d",color:"#757575"}}}}));var T=function(){var e=_(),t=Object(g.c)((function(e){return e.pages})),a=Object(g.c)((function(e){return e.getProductsByKeyword})),r=Object(n.useState)(0),o=Object(f.a)(r,2),c=o[0],i=o[1],s=Object(g.b)();return Object(n.useEffect)((function(){a&&i(Math.ceil(a.length/30))}),[a]),Object(b.jsx)("div",{className:e.root,children:Object(b.jsxs)(m.a,{elevation:3,className:e.paper,children:[t>1?Object(b.jsxs)("button",{onClick:function(){s({type:"BEFORE_PAGE"})},className:e.button,children:[Object(b.jsx)(P.a,{}),Object(b.jsx)(P.a,{})]}):null,t<c?Object(b.jsxs)("button",{onClick:function(){s({type:"CHANGE_PAGE"})},className:e.button,children:[Object(b.jsx)(D.a,{}),Object(b.jsx)(D.a,{})]}):null]})})},K=Object(i.a)((function(e){return{root:{display:"flex",flexDirection:"column",backgroundColor:"white",margin:"5px",borderRadius:"10px"},paper:{display:"flex",flexDirection:"column",backgroundColor:"#757575",borderRadius:"5px"},button:{margin:"1px",fontFamily:"sans-serif",fontSize:"medium",color:"#fff59d",width:"maxContent",height:"80px",border:"none",borderRadius:"1px",backgroundColor:"#757575","&:hover":{backgroundColor:"#fff59d",color:"#757575"}}}}));var A=function(){var e=K(),t=Object(g.b)(),a=Object(g.c)((function(e){return e.keyword})),n=function(e){switch(e.preventDefault(),e.target.name){case"mayor":t({type:"MAYOR"});break;case"menor":t({type:"MENOR"});break;case"usado":t({type:"USADO",payload:"used"});break;case"nuevo":t(function(e){return{type:"NUEVO",payload:e}}("new"));break;case"none":t(S(a));break;default:return null}};return Object(b.jsx)("div",{className:e.root,children:Object(b.jsxs)(m.a,{elevation:3,className:e.paper,children:[Object(b.jsx)("button",{onClick:function(e){return n(e)},name:"none",className:e.button,children:"Sin Filtro"}),Object(b.jsx)("button",{onClick:function(e){return n(e)},name:"mayor",className:e.button,children:"De mayor a menor"}),Object(b.jsx)("button",{onClick:function(e){return n(e)},name:"menor",className:e.button,children:"De menor a mayor"}),Object(b.jsx)("button",{onClick:function(e){return n(e)},name:"usado",className:e.button,children:"Producto Usado"}),Object(b.jsx)("button",{onClick:function(e){return n(e)},name:"nuevo",className:e.button,children:"Producto Nuevo"})]})})},G=a(141),U=Object(i.a)((function(e){return{catalogue:{display:"grid",gridTemplateColumns:"auto auto auto auto",gap:"50px",justifyContent:"space-around",alignContent:"space-around",gridColumnStart:"2",gridColumnEnd:"6",gridRowStart:"2",gridRowEnd:"3"},containerall:{display:"grid",gridTemplateColumns:"auto auto auto auto auto",gridTemplateRows:"auto auto",gap:"20px",margin:"20px"},pagination:{gridRowStart:"1",gridRowEnd:"2",gridColumnStart:"5",gridColumnEnd:"6"},filter:{gridRowStart:"2",gridRowEnd:"3",gridColumnStart:"1",gridColumnEnd:"2"},alert:{width:"400px",textAlign:"center",fontSize:"20px",backgroundColor:"#fff59d",color:"#757575",marginTop:"50px"},alertC:{display:"flex",justifyContent:"center",alignSelf:"center",marginTop:"50px",gridColumnStart:"2",gridColumnEnd:"6",gridRowStart:"2",gridRowEnd:"3"}}}));var F=function(e){var t=e.products,a=Object(g.c)((function(e){return e.pages})),n=U(),r=30*a>t.length?t.length:30*a,o=1===r?t.length:r<=30?30-r:r-30;return 0===(null===t||void 0===t?void 0:t.length)?Object(b.jsxs)("div",{className:n.containerall,children:[Object(b.jsx)("div",{className:n.filter,children:Object(b.jsx)(A,{})}),Object(b.jsx)("div",{className:n.alertC,children:Object(b.jsx)(G.a,{severity:"info",className:n.alert,children:"No hay productos"})})]}):Object(b.jsxs)("div",{className:n.containerall,children:[Object(b.jsx)("div",{className:n.pagination,children:Object(b.jsx)(T,{})}),Object(b.jsx)("div",{className:n.filter,children:Object(b.jsx)(A,{})}),Object(b.jsx)("div",{className:n.catalogue,children:null===t||void 0===t?void 0:t.slice(o,r).map((function(e){return Object(b.jsx)("div",{className:n.product,children:Object(b.jsx)(p,{props:e})},e.id)}))})]})},z=a(23),W=a(142),M=a(137),Y=a(140),I=a(67),H=a.n(I),L=Object(i.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}));var q=function(){var e=L(),t=Object(n.useState)(""),a=Object(f.a)(t,2),r=a[0],o=a[1],c=Object(g.b)();return Object(b.jsxs)(m.a,{component:"form",className:e.root,onSubmit:function(e){e.preventDefault(),c(S(r))},children:[Object(b.jsx)(W.a,{className:e.input,placeholder:"ej. zapatilla, computadoras, etc",inputProps:"aria-label",value:r,onChange:function(e){e.preventDefault(),o(e.target.value)}}),Object(b.jsx)(M.a,{className:e.divider,orientation:"vertical"}),Object(b.jsx)(Y.a,{type:"submit",className:e.iconButton,"aria-label":"search",children:Object(b.jsx)(H.a,{})})]})},V=a(18),J=a(138),X=a(139),$=Object(i.a)((function(e){var t;return{grow:{flexGrow:1,backgroundColor:"#757575",borderRadius:"5px"},title:(t={display:"none"},Object(z.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(z.a)(t,"color","#fff59d"),Object(z.a)(t,"fontFamily","sans-serif"),Object(z.a)(t,"fontWeight",500),t),search:Object(z.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(V.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(V.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"})}}));var Q=function(){var e=$(),t=Object(g.b)();return Object(b.jsx)("div",{className:e.grow,children:Object(b.jsx)(J.a,{position:"static",className:e.grow,children:Object(b.jsxs)(X.a,{children:[Object(b.jsx)(d.a,{className:e.title,variant:"h6",noWrap:!0,onClick:function(){t({type:"RESET"})},children:"Henry Search"}),Object(b.jsx)("div",{className:e.search,children:Object(b.jsx)(q,{})}),Object(b.jsx)("div",{className:e.grow})]})})})},Z=Object(i.a)((function(){return{presentation:{height:"500px",width:"600px",display:"flex",flexDirection:"column",justifyContent:"center",alignSelf:"center",alignItems:"flex-end",margin:"100px auto auto auto",paddingRight:"10px",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundImage:"url(https://image.freepik.com/foto-gratis/retrato-joven-sonriente-creativa-gafas-sol-hermosa-nina-sentada-piso-cerca-pared-gris_158538-1341.jpg)"},font:{fontFamily:"sans-serif",fontSize:"25px",color:"black",textAlign:"right"}}}));function ee(){var e=Z(),t=Object(g.c)((function(e){return e.getProductsByKeyword})),a=Object(g.c)((function(e){return e.keyword}));return Object(b.jsx)("div",{children:""===a?Object(b.jsxs)("div",{className:e.presentation,children:[Object(b.jsx)("h3",{className:e.font,children:"Haz tu primer busqueda !"}),Object(b.jsx)(q,{})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Q,{}),Object(b.jsx)(F,{products:t})]})})}var te=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(c.a,{path:"/",component:ee})})},ae=a(47),ne=a(40),re=a(26),oe=a(12),ce={getProductsByKeyword:[],pages:1,keyword:""};var ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(oe.a)(Object(oe.a)({},e),{},{getProductsByKeyword:t.payload,keyword:t.keyword});case w:return Object(oe.a)(Object(oe.a)({},e),{},{getProductsByKeyword:Object(re.a)(e.getProductsByKeyword).sort((function(e,t){return t.price-e.price}))});case N:return Object(oe.a)(Object(oe.a)({},e),{},{getProductsByKeyword:Object(re.a)(e.getProductsByKeyword).sort((function(e,t){return e.price-t.price}))});case v:case y:return Object(oe.a)(Object(oe.a)({},e),{},{getProductsByKeyword:Object(re.a)(e.getProductsByKeyword).filter((function(e){return e.condition===t.payload})).length>0?Object(re.a)(e.getProductsByKeyword).filter((function(e){return e.condition===t.payload})):null});case k:return Object(oe.a)(Object(oe.a)({},e),{},{pages:e.pages+1});case C:return Object(oe.a)(Object(oe.a)({},e),{},{pages:e.pages-1});case E:return Object(oe.a)(Object(oe.a)({},e),{},{getProductsByKeyword:[]});default:return e}},se=a(68),le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.b,de=Object(ne.c)(ie,le(Object(ne.a)(se.a))),ue=a(69);a.n(ue).a.load({google:{families:["Titillium Web:300,400,700","sans-serif"]}}),o.a.render(Object(b.jsx)(g.a,{store:de,children:Object(b.jsx)(ae.a,{children:Object(b.jsx)(te,{})})}),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.f1e8a2b6.chunk.js.map