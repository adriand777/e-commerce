(this["webpackJsonpecommerce-site"]=this["webpackJsonpecommerce-site"]||[]).push([[0],{106:function(t,e,a){},107:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(21),i=a.n(c),r=a(20),s=a.n(r),o=a(31),l=a(27),d=a(48),j=new(a.n(d).a)("pk_30547de79481b342870d644aab62bd8a10e5afb89599c",!0),b=a(123),u=a(124),m=a(125),p=a(126),h=a(127),x=a(128),O=a.p+"static/media/default-logo.1643ab75.png",g=a(17),f=a(121),v=a(11),y=Object(f.a)((function(t){var e;return{appBar:(e={boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},Object(g.a)(e,t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),Object(g.a)(e,"display","flex"),e),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px",alignSelf:"center"},menuButton:Object(g.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(g.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(v.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(g.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),w=a(19),C=a(2),k=function(t){var e=t.totalItems,a=y();return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(b.a,{position:"fixed",className:a.appBar,color:"inherit",children:Object(C.jsxs)(u.a,{children:[Object(C.jsxs)(m.a,{variant:"h6",className:a.appBar,color:"inherit",children:[Object(C.jsx)("img",{src:O,alt:"Marketing App",height:"25px",className:a.image}),"Marketing App"]}),Object(C.jsx)("div",{className:a.grow}),Object(C.jsxs)("div",{style:{width:"50%",display:"flex",justifyContent:"space-evenly"},children:[Object(C.jsx)(w.b,{to:"/clothing",children:"Clothing"}),Object(C.jsx)(w.b,{to:"/cart",children:"Cart"}),Object(C.jsx)(w.b,{to:"/products",children:"Products"}),Object(C.jsx)(w.b,{to:"/contact",children:"Contact"})]}),Object(C.jsx)("div",{className:a.button,children:Object(C.jsx)(p.a,{"aria-label":"Show cart items",color:"inherit",children:Object(C.jsx)(h.a,{badgeContent:e,color:"secondary",children:Object(C.jsx)(x.a,{})})})})]})})})},N=a(134),_=a(129),B=a(130),S=a(131),A=a(132),I=a(133),T=Object(f.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),R=function(t){var e=t.product,a=t.onAddToCart,n=T();return Object(C.jsxs)(_.a,{className:n.root,children:[Object(C.jsx)(B.a,{className:n.media,image:e.media.source,title:e.name}),Object(C.jsxs)(S.a,{children:[Object(C.jsxs)("div",{className:n.cardContent,children:[Object(C.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(C.jsx)(m.a,{variant:"h5",children:e.price.formatted_with_symbol})]}),Object(C.jsx)(m.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})]}),Object(C.jsx)(A.a,{disableSpacing:!0,className:n.cardActions,children:Object(C.jsx)(p.a,{"aria-label":"Add to Cart",onClick:function(){return a(e.id,1)},children:Object(C.jsx)(I.a,{})})})]})},E=Object(f.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),L=function(t){var e=t.products,a=t.onAddToCart,n=E();return Object(C.jsxs)("main",{className:n.content,children:[Object(C.jsx)("div",{className:n.toolbar}),Object(C.jsx)(N.a,{container:!0,justifyContent:"center",spacing:4,children:e.map((function(t){return Object(C.jsx)(N.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(C.jsx)(R,{product:t,onAddToCart:a})},t.id)}))})]})},z=a(135),D=a(136),G=Object(f.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(g.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(g.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),M=Object(f.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space=between"},cardActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),W=function(t){var e=t.item,a=M();return Object(C.jsxs)(_.a,{children:[Object(C.jsx)(B.a,{image:e.media.source,alt:e.name,className:a.media}),Object(C.jsxs)(S.a,{className:a.cardContent,children:[Object(C.jsx)(m.a,{variant:"h4",children:e.name}),Object(C.jsx)(m.a,{variant:"h5",children:e.line_total.formatted_with_symbol})]}),Object(C.jsxs)(A.a,{className:a.cardActions,children:[Object(C.jsxs)("div",{className:a.buttons,children:[Object(C.jsx)(z.a,{type:"button",size:"small",children:"-"}),Object(C.jsx)(m.a,{children:e.quantity}),Object(C.jsx)(z.a,{type:"button",size:"small",children:"+"})]}),Object(C.jsx)(z.a,{variant:"contained",type:"button",color:"secondary",children:"Remove"})]})]})},F=function(t){var e=t.cart,a=G(),n=function(){return Object(C.jsx)(m.a,{variant:"subtitle1",children:"You have no items in cart, add some!"})},c=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(N.a,{container:!0,spacing:3,children:e.line_items.map((function(t){return Object(C.jsx)(N.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(W,{item:t})},t.id)}))}),Object(C.jsxs)("div",{className:a.cardDetails,children:[Object(C.jsxs)(m.a,{variant:"h4",children:["Subtotal: ",e.subtotal.formatted_with_symbol]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(z.a,{className:a.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",children:"Empty Cart"}),Object(C.jsx)(z.a,{className:a.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})};return e.line_items?Object(C.jsxs)(D.a,{children:[Object(C.jsx)("div",{className:a.toolbar}),Object(C.jsx)(m.a,{className:a.title,variant:"h3",children:"Your Shopping Cart"}),e.line_items.length?Object(C.jsx)(c,{}):Object(C.jsx)(n,{})]}):"Loading..."},J=(a(106),function(){return Object(C.jsx)("div",{className:"clothing",children:"This will be my clothing page where you can see all the clothing stuff."})}),Y=function(){var t=Object(n.useState)({name:"",email:"",about:""}),e=Object(l.a)(t,2),a=e[0],c=e[1],i=function(t){c(Object(g.a)({},t.target.name,t.target.value))};return Object(C.jsxs)("form",{onSubmit:function(t){console.log("sending to database or gmail")},className:"contact-form",children:[Object(C.jsx)("label",{children:"Name"}),Object(C.jsx)("input",{type:"text",name:"name",onChange:i,value:a.name}),Object(C.jsx)("label",{children:"Email"}),Object(C.jsx)("input",{type:"text",name:"name",onChange:i,value:a.email}),Object(C.jsx)("label",{children:"Comment"}),Object(C.jsx)("input",{type:"text",name:"name",onChange:i,value:a.about})]})},q=a(8),H=function(){var t=Object(n.useState)([]),e=Object(l.a)(t,2),a=e[0],c=e[1],i=Object(n.useState)({}),r=Object(l.a)(i,2),d=r[0],b=r[1],u=function(){var t=Object(o.a)(s.a.mark((function t(){var e,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.products.list();case 2:e=t.sent,a=e.data,c(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=b,t.next=3,j.cart.retrieve();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(o.a)(s.a.mark((function t(e,a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.add(e,a);case 2:n=t.sent,b(n.cart);case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){u(),m()}),[]),console.log(d),Object(C.jsx)("div",{children:Object(C.jsxs)(w.a,{children:[Object(C.jsx)(k,{totalItems:d.total_items}),Object(C.jsx)(q.a,{exact:!0,path:"/cart",children:Object(C.jsx)(F,{cart:d})}),Object(C.jsx)(q.a,{exact:!0,path:"/products",children:Object(C.jsx)(L,{products:a,onAddToCart:p})}),Object(C.jsx)(q.a,{exact:!0,path:"/clothing",component:J}),Object(C.jsx)(q.a,{exact:!0,path:"/contact",component:Y})]})})};i.a.render(Object(C.jsx)(H,{}),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.42d02319.chunk.js.map