(function(){"use strict";var t={638:function(t,s,a){var e=a(144),i=a(998),r=a(3059),c=function(){var t=this,s=t._self._c;return s(i.Z,[s("nav-bar"),s(r.Z,[s("router-view")],1),s("footer-comp")],1)},l=[],n=a(6232),o=a(6190),p=a(4324),f=a(3687),u=a(7953),d=a(2761),g=function(){var t=this,s=t._self._c;return s("div",[s(n.Z,{attrs:{dense:"",dark:"",app:""}},[s(u.qW,[s(d.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:e}){return[s(p.Z,t._g(t._b({staticClass:"text depressed white--text",on:{click:function(s){return t.$router.push("/")}}},"v-icon",e,!1),a),[t._v("mdi-home")])]}}])},[s("span",[t._v("INICIO")])])],1),s(f.Z),s(o.Z,{attrs:{href:"",target:"_blank",text:""}},[s(d.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:e}){return[s(p.Z,t._g(t._b({attrs:{color:"white",dark:""},on:{click:function(s){return t.$router.push("/about")}}},"v-icon",e,!1),a),[t._v(" mdi-numeric-2-box ")])]}}])},[s("span",[t._v("ABOUT")])])],1),s(o.Z,{attrs:{href:"",target:"_blank",text:""}},[s(d.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:e}){return[s(p.Z,t._g(t._b({attrs:{color:"white",dark:""},on:{click:function(s){return t.$router.push("/kids")}}},"v-icon",e,!1),a),[t._v(" mdi-numeric-3-box ")])]}}])},[s("span",[t._v("KIDS")])])],1),s(o.Z,{attrs:{icon:""}},[s(d.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:e}){return[s(p.Z,t._g(t._b({attrs:{color:"white",dark:""},on:{click:function(s){return t.$router.push("/sepia")}}},"v-icon",e,!1),a),[t._v(" mdi-numeric-4-box ")])]}}])},[s("span",[t._v("SEPIA")])])],1),s(o.Z,{attrs:{icon:""}},[s(d.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:e}){return[s(p.Z,t._g(t._b({attrs:{color:"white",dark:""},on:{click:function(s){return t.$router.push("/house")}}},"v-icon",e,!1),a),[t._v(" mdi-numeric-5-box ")])]}}])},[s("span",[t._v("HOUSE")])])],1)],1)],1)},x=[],h={name:"navbar-comp",data:function(){return{menuItems:[{path:"/",name:"home",icon:"mdi-home",title:"HOME"},{path:"/about",name:"about",icon:"mdi-view-comfy",title:"GALERÍA"}]}}},m=h,Z=a(1001),C=(0,Z.Z)(m,g,x,!1,null,"53014a59",null),y=C.exports,j=a(4861),b=a(8271),A=function(){var t=this,s=t._self._c;return s("div",[s(b.Z,{attrs:{dark:"",padless:""}},[s(j.ZB,{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),s("strong",[t._v("Diseñado por WebProfile SpA")])])],1)],1)},v=[],I={name:"footer-comp",data:function(){return{}}},k=I,U=(0,Z.Z)(k,A,v,!1,null,"1a7c891a",null),F=U.exports,Q={name:"App",data:()=>({}),components:{"nav-bar":y,"footer-comp":F}},B=Q,S=(0,Z.Z)(B,c,l,!1,null,"2c1f90ea",null),R=S.exports,w=a(8345),E=function(){var t=this,s=t._self._c;return s("div",[s("gallery-comp")],1)},M=[],q=a(2118),T=a(5495),K=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main"},[s("div",{staticClass:"ful-img",attrs:{id:"fulImages"}},[s(T.Z,{staticClass:"imgFondo d-none d-lg-block",attrs:{id:"fulImgBox",src:a(9441)},on:{click:function(s){return t.$router.push("/house")}}}),s(T.Z,{staticClass:"imgFondo d-none d-md-flex d-lg-none",attrs:{id:"fulImgBox",src:a(9441)},on:{click:function(s){return t.$router.push("/house")}}}),s(T.Z,{staticClass:"imgFondo d-flex d-sm-none",attrs:{id:"fulImgBox1",src:a(9441)},on:{click:function(s){return t.$router.push("/house")}}})],1),s(q.Z,{staticClass:"img-gallery"},[s(T.Z,{staticClass:"img d-lg-none d-xl-flex",attrs:{id:"fullImagen",src:a(6434)},on:{click:function(s){return t.$router.push("/")}}}),s(T.Z,{staticClass:"img d-lg-none d-xl-flex",attrs:{id:"fullImagen",src:a(5051)},on:{click:function(s){return t.$router.push("/")}}}),s(T.Z,{staticClass:"img d-lg-none d-xl-flex",attrs:{id:"fullImagen",src:a(4335)},on:{click:function(s){return t.$router.push("/")}}}),s(T.Z,{staticClass:"img d-none d-md-flex d-lg-none",attrs:{id:"fullImagen",src:a(6434)},on:{click:function(s){return t.$router.push("/")}}},[s("h3",[t._v("BLANCO Y NEGRO")])]),s(T.Z,{staticClass:"img d-none d-lg-block",attrs:{id:"fullImagen",src:a(6123)},on:{click:function(s){return t.$router.push("/sepia")}}}),s(T.Z,{staticClass:"img d-none d-lg-block",attrs:{id:"fullImagen",src:a(7066)},on:{click:function(s){return t.$router.push("/about")}}}),s(T.Z,{staticClass:"img d-none d-lg-block",attrs:{id:"fullImagen",src:a(5090)},on:{click:function(s){return t.$router.push("/kids")}}})],1)],1)},H=[],Y={name:"gallery-comp",data:function(){return{}},methods:{}},L=Y,J=(0,Z.Z)(L,K,H,!1,null,"7d758ceb",null),O=J.exports,_={name:"home-view",data:function(){return{}},components:{"gallery-comp":O}},P=_,W=(0,Z.Z)(P,E,M,!1,null,"1aa28bd2",null),G=W.exports,D=function(){var t=this,s=t._self._c;return s("div",{staticClass:"contenedor"},[s("div",{staticClass:"img-gallery"},[s(T.Z,{staticClass:"img",attrs:{id:"fullImagen",src:a(1141)},on:{click:function(s){return t.$router.push("/aboutgallery")}}})],1)])},N=[],z={name:"about-view",data:function(){return{}},methods:{}},V=z,X=(0,Z.Z)(V,D,N,!1,null,"92de4afc",null),$=X.exports,tt=a(6953),st=a(6760),at=function(){var t=this,s=t._self._c;return s("div",[[s(tt.Z,{staticClass:"d-none d-lg-block",attrs:{height:"1200px"}},[s(st.Z,{attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"}},[s(T.Z,{staticClass:"v-image",attrs:{height:"1200px",src:a(6434)}})],1),s(st.Z,{attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"}},[s(T.Z,{staticClass:"v-image",attrs:{height:"1200px",src:a(5051)}})],1),s(st.Z,{attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"}},[s(T.Z,{staticClass:"v-image",attrs:{height:"1200px",src:a(4335)}})],1)],1)]],2)},et=[],it={name:"carrusel-view",data:function(){return{}}},rt=it,ct=(0,Z.Z)(rt,at,et,!1,null,"b56a1bcc",null),lt=ct.exports,nt=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"contenedor"},[s(T.Z,{staticClass:"paisajeView d-none d-lg-block",attrs:{src:a(3073)}},[s(o.Z,{staticClass:"btnAtras white--text",attrs:{text:"",outlined:"",small:""},on:{click:function(s){return t.$router.push("/")}}},[s(p.Z,{staticClass:"white--text"},[t._v("mdi-arrow-left-bold")]),t._v(" ATRÁS")],1)],1),s(T.Z,{staticClass:"imgFondo d-flex d-sm-none",attrs:{id:"fulImgBox1",src:a(3073)},on:{click:function(s){return t.$router.push("/paisaje")}}}),s(T.Z,{staticClass:"imgFondo d-flex d-sm-none",attrs:{id:"fulImgBox1",src:a(3073)},on:{click:function(s){return t.$router.push("/paisaje")}}}),s(T.Z,{staticClass:"imgFondo d-flex d-sm-none",attrs:{id:"fulImgBox1",src:a(3073)},on:{click:function(s){return t.$router.push("/paisaje")}}}),s(T.Z,{staticClass:"imgFondo d-flex d-sm-none",attrs:{id:"fulImgBox1",src:a(3073)},on:{click:function(s){return t.$router.push("/paisaje")}}}),s(T.Z,{staticClass:"imgFondo d-none d-md-flex d-lg-none",attrs:{id:"fulImgBox2",src:a(3073)},on:{click:function(s){return t.$router.push("/paisaje")}}}),s(T.Z,{staticClass:"imgFondo d-none d-md-flex d-lg-none",attrs:{id:"fulImgBox2",src:a(3073)},on:{click:function(s){return t.$router.push("/paisaje")}}}),s(T.Z,{staticClass:"imgFondo d-none d-md-flex d-lg-none",attrs:{id:"fulImgBox2",src:a(3073)},on:{click:function(s){return t.$router.push("/paisaje")}}})],1)])},ot=[],pt={name:"paisaje-view",data:function(){return{}}},ft=pt,ut=(0,Z.Z)(ft,nt,ot,!1,null,"0977bb61",null),dt=ut.exports,gt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"contenedor"},[s("div",{staticClass:"img-gallery"},[s(T.Z,{staticClass:"img",attrs:{id:"fullImagen",src:a(8322)},on:{click:function(s){return t.$router.push("/sepiagallery")}}})],1)])},xt=[],ht={name:"sepia-view",data:function(){return{}},methods:{}},mt=ht,Zt=(0,Z.Z)(mt,gt,xt,!1,null,"25ec7a79",null),Ct=Zt.exports,yt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"contenedor"},[s("div",{staticClass:"img-gallery"},[s(T.Z,{staticClass:"img",attrs:{id:"fullImagen",src:a(947)},on:{click:function(s){return t.$router.push("/kidsgallery")}}})],1)])},jt=[],bt={name:"kids-view",data:function(){return{}},methods:{}},At=bt,vt=(0,Z.Z)(At,yt,jt,!1,null,"2d44abe1",null),It=vt.exports,kt=a(266),Ut=a(1713),Ft=function(){var t=this,s=t._self._c;return s("div",[[s(Ut.Z,[s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(3248),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(9877),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(7325),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(7690),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(8059),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(7557),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(3076),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(9596),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(5503),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(8350),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(9259),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(7362),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(1700),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(7078),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(1063),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(4391),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(249),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(987),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(8660),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(6053),"aspect-ratio":"1"}})],1)],1)]],2)},Qt=[],Bt={name:"kids-gallery",data:function(){return{}}},St=Bt,Rt=(0,Z.Z)(St,Ft,Qt,!1,null,"5fbfa05e",null),wt=Rt.exports,Et=function(){var t=this,s=t._self._c;return s("div",[[s(Ut.Z,[s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(1141),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(7676),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(5230),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(9383),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(141),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(5279),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(3084),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(2004),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(1606),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(5704),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(50),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(1149),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(7805),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(9962),"aspect-ratio":"1"}})],1)],1)]],2)},Mt=[],qt={name:"sepia-gallery",data:function(){return{}}},Tt=qt,Kt=(0,Z.Z)(Tt,Et,Mt,!1,null,"861cacb6",null),Ht=Kt.exports,Yt=function(){var t=this,s=t._self._c;return s("div",[[s(Ut.Z,[s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(1601),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(2755),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(1760),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(5155),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(8896),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(5794),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(8354),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(9575),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(5910),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(369),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(9337),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(3481),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(1654),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"6"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(6199),"aspect-ratio":"1"}})],1)],1)]],2)},Lt=[],Jt={name:"about-gallery",data:function(){return{}}},Ot=Jt,_t=(0,Z.Z)(Ot,Yt,Lt,!1,null,"fdecf604",null),Pt=_t.exports,Wt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"contenedor"},[s("div",{staticClass:"img-gallery"},[s(T.Z,{staticClass:"img",attrs:{id:"fullImagen",src:a(5268)},on:{click:function(s){return t.$router.push("/housegallery")}}})],1)])},Gt=[],Dt={name:"house-view",data:function(){return{}},methods:{}},Nt=Dt,zt=(0,Z.Z)(Nt,Wt,Gt,!1,null,"0a043362",null),Vt=zt.exports,Xt=function(){var t=this,s=t._self._c;return s("div",[[s(Ut.Z,[s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"12"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(3073),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"12"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(3020),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"12"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(3441),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"12"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(9093),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"12"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(5310),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"12"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(9441),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"12"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(7217),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"12"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(1527),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"12"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(8971),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"12"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(1658),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"12"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(3835),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"12"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(3040),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"12"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(8461),"aspect-ratio":"1"}})],1),s(kt.Z,{staticClass:"d-flex child-flex",attrs:{cols:"12"}},[s(T.Z,{staticClass:"grey lighten-2",attrs:{src:a(4478),"aspect-ratio":"1"}})],1)],1)]],2)},$t=[],ts={name:"house-gallery",data:function(){return{}}},ss=ts,as=(0,Z.Z)(ss,Xt,$t,!1,null,"67403ce9",null),es=as.exports;e.ZP.use(w.ZP);const is=[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:$},{path:"/carrusel",name:"carrusel",component:lt},{path:"/paisaje",name:"paisaje",component:dt},{path:"/sepia",name:"sepia",component:Ct},{path:"/kids",name:"kids",component:It},{path:"/kidsgallery",name:"kidsgallery",component:wt},{path:"/sepiagallery",name:"sepiagallery",component:Ht},{path:"/aboutgallery",name:"aboutgallery",component:Pt},{path:"/house",name:"house",component:Vt},{path:"/housegallery",name:"housegallery",component:es}],rs=new w.ZP({mode:"history",base:"/tiofernando/",routes:is});var cs=rs,ls=a(629);e.ZP.use(ls.ZP);var ns=new ls.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),os=a(8864);e.ZP.use(os.Z);var ps=new os.Z({});e.ZP.config.productionTip=!1,new e.ZP({router:cs,store:ns,vuetify:ps,render:t=>t(R)}).$mount("#app")},1601:function(t,s,a){t.exports=a.p+"img/1.d8ae55cf.jpg"},369:function(t,s,a){t.exports=a.p+"img/10.6f347cac.jpg"},9337:function(t,s,a){t.exports=a.p+"img/11.8362d28c.jpg"},3481:function(t,s,a){t.exports=a.p+"img/12.37ddcbb0.jpg"},1654:function(t,s,a){t.exports=a.p+"img/13.b0a02b22.jpg"},6199:function(t,s,a){t.exports=a.p+"img/14.92f673e1.jpg"},2755:function(t,s,a){t.exports=a.p+"img/2.dfa64385.jpg"},1760:function(t,s,a){t.exports=a.p+"img/3.e26f2c42.jpg"},5155:function(t,s,a){t.exports=a.p+"img/4.53da6753.jpg"},8896:function(t,s,a){t.exports=a.p+"img/5.3ece2a25.jpg"},5794:function(t,s,a){t.exports=a.p+"img/6.18778aa9.jpg"},8354:function(t,s,a){t.exports=a.p+"img/7.e09ecbaf.png"},9575:function(t,s,a){t.exports=a.p+"img/8.2a1d6172.jpg"},5910:function(t,s,a){t.exports=a.p+"img/9.d9f69a4a.jpg"},6434:function(t,s,a){t.exports=a.p+"img/1.19a98964.png"},6123:function(t,s,a){t.exports=a.p+"img/1Circ.84c46140.png"},5051:function(t,s,a){t.exports=a.p+"img/2.db302b77.png"},7066:function(t,s,a){t.exports=a.p+"img/2Circ.662ef34f.png"},4335:function(t,s,a){t.exports=a.p+"img/3.886d7c46.png"},5090:function(t,s,a){t.exports=a.p+"img/3Circ.0e074a94.png"},5268:function(t,s,a){t.exports=a.p+"img/1.861e7aea.jpg"},1658:function(t,s,a){t.exports=a.p+"img/11.cdcd3be2.jpg"},3835:function(t){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABWAJADASIAAhEBAxEB/8QAHQAAAQUBAQEBAAAAAAAAAAAABQAEBgcIAwIBCf/EADwQAAECBQIEBAMFBAsAAAAAAAIDBAABBQYSEyIHETJCFCFSYggjMUFygpKiJDNRYRUWU2OBkbLBwtLi/8QAHAEAAQUBAQEAAAAAAAAAAAAAAwECBAUGBwAI/8QAJxEAAgICAQIGAgMAAAAAAAAAAQIAAxESBAUhBhMiMUFRFDIVYbH/2gAMAwEAAhEDEQA/AMLCBqKEIkI7onltXWjbfD2pUMmqLh88fJuvEF0imI9P5t34Yr5NxpqDz6u72wRFySig7cRH8sVzLnsY/STW0mr65LopdPbo+IcvnQoiIju3Fjt/NE9rtGcUeqXEzUbqIqM01G+oW0Sx9MVlad0PLYuBlV6WRN6kzIlG63USZY45DE6oNzeKUq1SqCzh1Un27JYstZQiy3e0oGQQc/EaUM/RDjq88B8F1gtjlqOHalDCUvtIskzKf+QlGb71qSFy/HzT6hUnRtkaGkCwLiGU0kAT5T2/fiS/E1x5Z3lwlsS1qYCydaYJN3jyTaUhaoTBPkMpT+3zGfKM72nedXTv+tXDU3hP6lUmvhVnS3Vj/wBYHqWXb+sf4I1K2eTb4sr8qPEq+W67xQP6OapaTITHIsMu4vUXVFGqU9IJzy3ZFt2xorj5YrdSyeHl0oEos+q/NnJMekhDu/NFIL01YVCRIiTUHtIYj1sNABLVOGxX9YHeUtJrRmeiWTgiIlMe2A6awt1MiTyx7YPqUhwIll+GAr5io2kRFiPaMHSKeGyr6o0FyQj1cpF9gjHzxpOFCFRFTHT1MhTyxH1Q0UItQRyGJvw4vBrado36ipipVKxTxprUSRyxTL94Xt7YLrgZldZVrIyycqFkRLDp9OJD1R5rcp1WoismSYppjiI4447YHimumkmOniOOMek0z3CRbRHpg2BI+kdrIL09w3JqsmRJ4kQj6Y0X8G9VTq/F+s1uouKchJajrMicGoP7zCfTFMVB5SXVuMR8Gim+TR09TqJT3FEyp1+M7NZ0lGm22mKKSes60U9pKY9SkBt9aFQO5iFYN4i1oHFCWt+nqZIpiQ+KW7i9Ua24H3FbtwWTR6ws0aU2orW6u1qa2WIzNMZDiOXaQ7owhcLl5dM3CiYaKzgukS6d0aDotyKVCwLIt11TcU6OxJms6kOPiCx7oBcmUAimqY7TEhISy6uqHqPUOMxKGafVkMEJD+7xmI9u71RNMsNTHyMtxYjBmkpuk3zciTUFEix2xHWqpSUyHtif26oSzduKhEQ+mBN2hBX6pKzdKL5I5anpEo401vrPBwTyTyxIYNUimqO1BIccvaMWlw64ZC/qApkjlLLLdtiJ5wxrNVwOmi7vJNTFXN4Uq22SslgZ0NMhSQIe4u6PbrhAL554gqfI1BEt3Pti7LYsdCnJJ4p44/Z7omKdA8tif2fw+sEHF3Gwm0NXGoAT6mPLg4KKppFNMSSLHaUUtcljOKc5UFUcyy3e6P0if2sCyZZpiSmPnyikOKfDZvNGbmSI8pDjj3ZQ3yXpOxjfwOPzRrWe8wq8pJCQ7dPGGa6CbeXTp7tpFFuXZaJM11Bx85FtGK8qtMTITkRaYjllDfNxMrz+lLxv2gbTJ0totwJbL3R2cMBazFNQSFT0wXpDQWSKSxlkoJZCQw1u6p+NdKLDLTEtoj6YmKdzMfYirA0ngo5CmJYj2l0xfPw0u6Zd9/0i0XLIAXq6a7ZVyoW3HDaOMZzRXJPbjkWW3KJNaV51Cxa61r1IWJlWmeQorFuHEhxKFsTdSBIzDMLWlRXz+4rqY+HFujR6ks3bl/aYqEMXLe9yMRr1HodNJNwii3TblkOJbh3EX4oz7Qr4fWyFSEVtd08yydF1CRbiIYY/1nUJ8SxZKGW0iLqhrVFmyYFjiQpNT5gyxIfd2w71hEcYj6bocRLLH2jHsXhSLHLUEdsSjU0Vb1kgZriB+ofUUTe0liJWY5ZF1YxXzRyM1R6cf9MSyh1STU5CJbcuoRiLYO0nUtltpoGwSElEy/TGp+EjNCZpzKWc+XnOMl2K8RIxJMuqNTcI6uiiBAZiQyHL07orKajZcs6T00jXA98S/ac1SmMsZcpDOX+MGk0ZT+nl/OUojVEqSSwSwn5c4kyKwkHORf7xthxiBIfKDq2DOC7cJiW2Up8uXnFc8RmALMRAvLl9f5xYr92mgnM1ClL7JRV9+1j9jVPvGfPy7oFdw3eskSz6SH85W+JlLiQwFu5U25Y7RiiriSJNUjIsRLbF6cRqsm5XWIvoJbijNl53IM3SgDtHU2xkkqctE6/yK1GJxc1Hw4yEVMZDtgK5ckUjElMoHTdC4kRam4fVH0NaaH03ZdvpizUae85bZZvPqM5isIl/6j4oCyk/7vt3RyUEB6cch6d0dazUABNPEeeKfb3QrXKJVPZrGVTVURaqGnuId33oZIvVpqIluHLpyhnOqyI/m/M7cS6Y+rVMGpCQkI92PthvmH2xI7OzQbIBGQlIsxjxJ37sS6co4rKaeJfljgakhlkPb2jF7qZHVoVF9jMcd3/KClPqCjfEh3CPb6ojAujMundjuh0k6KZDl9enbEd0WS1dpc1jXwTVyinqYkJdpRo6wuJggLfJYerLIoxBRqkTVYZ9JF24xN6RdyrfASyyH3QfgcdGvXM0fTurWcU4afpTanExAgSnrylOfuidM+JjcAKSio8pfwj857d4uumYCmS22JkHGcwHETy29pR3zi+H6OVQrGbc9ZpuGbR3m0bi4nMQQmc1xIJecpyKKWvzid41uqKZluLbIS2jtiin3FaTmeRHiPpy7ogVc4jqOiUy8vdAeo9F4/D4rKPeP/nqqa9UEJcQ7/8AnaPiNPIu4uqKjrL5u+cErrCoRZfMHugzSX41HiDbzx8giswarEo7RW3ayYjljB/4leN9D4oVuit7UtRnbdGpqJEoSKIiSixDu6e3bHz9zFWq4LWJgOo89uS+0C8Jq5YFvXStU79oLq42yKP7GzRUxTy7iLdEWu29lK9XapUKbS29HauFiURp7fcKKfaMR2bzVLzUIuf6oZ1ZZdqICIkjl6u0YqjlmyZnGtZjJo+tO7aZYjK8n9BctrbeqYN3yqeIqERYj+qAWvqbssfwwTr3H+97n4a0+xay+bP7cpygqt05o4rCQlt3REyq4mGSe3L1QNUbHqA9/j6jYXUASRL5gl3QZsu6KRQBqJVGiN6so6R00ScbtEvUMRFm7FxiOI5ZZFA9R8SbhRMh25dMOKbAqZ6dXRyOYjuyhuXP7R8x3ZR0IRLLb8yELTtLdF0boOeQDluyxyLth2gzWJHU3CPqhCQoSJMk9TduKHD6va6ekinySHtKIzWN8QimGWDVNEeeWc8uqCQLiKeRD+WIW3eLzxIi2kXT6oL+OLEREihtdr1vsIQd5IScEhLaWWXbHwa0qiuKfPkBFjEbGpEHUPOfdthJutRQi7ijpfTfFD8evQwuWkuCsbcshn6YG1CoTJYhEtpdO6A5a08SzmOUelTULHYOXqj3U/Ej8yrQNF3b7nVZ0oRdRCPqHugY5UWVAshIvVj92Hcm7gm2sKfy8sdvqh00pTnSJxNEtHtKOYW3AtkwTGR3WUbqJkI9OJboTqsK1p4Th0Q7chER2j+GCL5sQ89Y9EerIhiP6YplkO3dl0wEEHvA4EcOWOIioA5J9X3YaiQh1fljum5UHbl8su2Gy5cpz7Ry3Q4RZ8TIMtQfVjtjkuvkoWXlP1Rw1cFBLHHtjmqeZ+UvP+MGhQsMLqyFwQjl+KOiMiUkU8vMdv6oUKFjJ4cqaf0l1bYapusZ8yHz5ctsKFCxRHYPtUzmQ+Ui5SlBOS8zknyly7YUKGkT07rI6Q6uRci7Y5ohJQhx2yhQoaD2hIWRSTnKcpjmZj1FCWYJnPHIhHnyyHqhQoiMzfcaPeSZC1jXt0XIOdNICKZJ8urbAxSU27QiFQ+rljz8oUKKpXYkgn5nn+IyXKVVaikvLzNTzKURWrMSp7okZKamH0mUKFFhV2bEAIONSacxlL6RxmeYbvOFCieseIyIplP6+ccp+RcoUKDLJQn/2Q=="},3040:function(t,s,a){t.exports=a.p+"img/13.f43508fd.jpg"},8461:function(t,s,a){t.exports=a.p+"img/14.b2825341.jpg"},4478:function(t,s,a){t.exports=a.p+"img/15.7d08ca19.jpg"},3020:function(t,s,a){t.exports=a.p+"img/2.b0e0584e.jpg"},3441:function(t,s,a){t.exports=a.p+"img/3.08b6c4d9.jpg"},9093:function(t,s,a){t.exports=a.p+"img/4.dbdd5f66.jpg"},5310:function(t,s,a){t.exports=a.p+"img/5.eddf5956.jpg"},9441:function(t,s,a){t.exports=a.p+"img/6.8e21fa6a.jpg"},7217:function(t,s,a){t.exports=a.p+"img/7.7fa13d94.jpg"},1527:function(t,s,a){t.exports=a.p+"img/8.205f4a53.jpg"},8971:function(t,s,a){t.exports=a.p+"img/9.d82274b8.jpg"},3073:function(t,s,a){t.exports=a.p+"img/paisajeFondo.83450dce.jpg"},5503:function(t,s,a){t.exports=a.p+"img/1.cd69afe3.jpg"},947:function(t,s,a){t.exports=a.p+"img/10a.80309852.jpeg"},7078:function(t,s,a){t.exports=a.p+"img/10b.fd67a534.jpeg"},1700:function(t,s,a){t.exports=a.p+"img/10c.510728bf.jpeg"},249:function(t,s,a){t.exports=a.p+"img/11a.31557a91.jpeg"},987:function(t,s,a){t.exports=a.p+"img/11b.4fd2fb0d.jpeg"},8660:function(t,s,a){t.exports=a.p+"img/12a.34d3804f.jpeg"},6053:function(t,s,a){t.exports=a.p+"img/12b.be04eae4.jpeg"},8059:function(t,s,a){t.exports=a.p+"img/13.7358f4b9.jpg"},3076:function(t,s,a){t.exports=a.p+"img/14.9fa43a6e.jpg"},7362:function(t,s,a){t.exports=a.p+"img/15.40b86f8d.jpg"},9596:function(t,s,a){t.exports=a.p+"img/16.bd6da869.jpg"},7557:function(t,s,a){t.exports=a.p+"img/17.48f88010.png"},8322:function(t,s,a){t.exports=a.p+"img/2.922ca8af.jpg"},7325:function(t,s,a){t.exports=a.p+"img/3.95ff94ed.jpg"},7690:function(t,s,a){t.exports=a.p+"img/4.345d5d98.jpg"},3248:function(t,s,a){t.exports=a.p+"img/5A.edb26374.png"},9877:function(t,s,a){t.exports=a.p+"img/5B.2be9aacd.png"},8350:function(t,s,a){t.exports=a.p+"img/6.c55d9c48.jpeg"},9259:function(t,s,a){t.exports=a.p+"img/7.2a091867.jpg"},1063:function(t,s,a){t.exports=a.p+"img/8.96951d2a.jpeg"},4391:function(t,s,a){t.exports=a.p+"img/9.36f77002.jpeg"},5230:function(t,s,a){t.exports=a.p+"img/1.752e8f8d.jpeg"},9962:function(t,s,a){t.exports=a.p+"img/10.92248d12.jpeg"},5704:function(t,s,a){t.exports=a.p+"img/12.f1fadbe1.jpeg"},1141:function(t,s,a){t.exports=a.p+"img/15.a7f9ec7b.jpeg"},9383:function(t,s,a){t.exports=a.p+"img/2.37a9ba31.jpeg"},7676:function(t,s,a){t.exports=a.p+"img/2.845eaedb.jpg"},141:function(t,s,a){t.exports=a.p+"img/3.601340f9.jpeg"},5279:function(t,s,a){t.exports=a.p+"img/4.9bf80ff3.jpeg"},3084:function(t,s,a){t.exports=a.p+"img/5.6d794048.jpeg"},2004:function(t,s,a){t.exports=a.p+"img/6.579ec609.jpeg"},1606:function(t,s,a){t.exports=a.p+"img/6.bec3c864.jpg"},50:function(t,s,a){t.exports=a.p+"img/7.79af1d90.jpg"},1149:function(t,s,a){t.exports=a.p+"img/8.80269751.jpg"},7805:function(t,s,a){t.exports=a.p+"img/9.85d8cd1f.jpg"}},s={};function a(e){var i=s[e];if(void 0!==i)return i.exports;var r=s[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(s,e,i,r){if(!e){var c=1/0;for(p=0;p<t.length;p++){e=t[p][0],i=t[p][1],r=t[p][2];for(var l=!0,n=0;n<e.length;n++)(!1&r||c>=r)&&Object.keys(a.O).every((function(t){return a.O[t](e[n])}))?e.splice(n--,1):(l=!1,r<c&&(c=r));if(l){t.splice(p--,1);var o=i();void 0!==o&&(s=o)}}return s}r=r||0;for(var p=t.length;p>0&&t[p-1][2]>r;p--)t[p]=t[p-1];t[p]=[e,i,r]}}(),function(){a.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(s,{a:s}),s}}(),function(){a.d=function(t,s){for(var e in s)a.o(s,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/tiofernando/"}(),function(){var t={143:0};a.O.j=function(s){return 0===t[s]};var s=function(s,e){var i,r,c=e[0],l=e[1],n=e[2],o=0;if(c.some((function(s){return 0!==t[s]}))){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(n)var p=n(a)}for(s&&s(e);o<c.length;o++)r=c[o],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(p)},e=self["webpackChunktiofernando"]=self["webpackChunktiofernando"]||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(638)}));e=a.O(e)})();
//# sourceMappingURL=app.224b5d98.js.map