(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3SaBd",ImageGalleryItemimage:"ImageGalleryItem_ImageGalleryItemimage__3l2ld"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2o3ca",Modal:"Modal_Modal__3A_Sq"}},27:function(e,t,a){e.exports={spinnerWrapper:"Loader_spinnerWrapper__3GA9Q"}},28:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2Jy0A"}},29:function(e,t,a){e.exports={Button:"Button_Button__2tymU"}},30:function(e,t,a){e.exports={App:"App_App__-gifw"}},6:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__3o2_l",SearchForm:"SearchBar_SearchForm__2zh2h",SearchFormbutton:"SearchBar_SearchFormbutton__3QzGG",SearchFormbuttonlabel:"SearchBar_SearchFormbuttonlabel__3xv64",SearchForminput:"SearchBar_SearchForminput__3b-_-"}},75:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(10),c=a.n(n),o=a(5),s=a.n(o),i=a(16),l=a(12),u=a(4),m=a(25),b=a.n(m),h=function(){var e=Object(l.a)(s.a.mark((function e(t,a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"23294543-72cf202e86e11bc05e525db7a","https://pixabay.com/api",e.next=4,b.a.get("".concat("https://pixabay.com/api","/?q=").concat(t,"&page=").concat(a,"&key=").concat("23294543-72cf202e86e11bc05e525db7a","&image_type=photo&orientation=horizontal&per_page=12"));case 4:return r=e.sent,e.abrupt("return",r.data.hits);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),j=a(26),p=a.n(j),d=a(27),g=a.n(d),f=a(0),O=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:g.a.spinnerWrapper,children:Object(f.jsx)(p.a,{type:"BallTriangle",color:"#0a121634",height:100,weidht:100,timeout:15e3})})})},x=a(6),_=a.n(x),S=function(e){var t=e.onSubmit;return Object(f.jsx)("header",{className:_.a.Searchbar,children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(e.target.elements.searchImage.value.toLowerCase())},className:_.a.SearchForm,children:[Object(f.jsx)("button",{type:"submit",className:_.a.SearchFormbutton,children:Object(f.jsx)("span",{className:_.a.SearchFormbuttonlabel,children:"Search"})}),Object(f.jsx)("input",{className:_.a.SearchForminput,name:"searchImage",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},v=a(28),y=a.n(v),I=a(14),k=a.n(I),w=function(e){var t=e.image,a=e.onClick,r=t.id,n=t.webformatURL,c=t.largeImageURL,o=t.tags;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("li",{className:k.a.ImageGalleryItem,children:Object(f.jsx)("img",{onClick:function(){return a(c)},src:n,alt:o,className:k.a.ImageGalleryItemimage},r)})})},F=function(e){var t=e.images,a=e.onClick;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{className:y.a.ImageGallery,children:t.map((function(e,t){return Object(f.jsx)(w,{onClick:a,image:e},t)}))})})},G=a(29),C=a.n(G),N=function(e){var t=e.onClick;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("button",{className:C.a.Button,onClick:t,type:"button",children:"Load more"})})},B=a(15),A=a.n(B),E=document.querySelector("#modal-root");function L(e){var t=e.scr,a=e.alt,c=e.onClick;Object(r.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var o=function(e){return"Escape"===e.code&&c()};return Object(n.createPortal)(Object(f.jsx)("div",{className:A.a.Overlay,onClick:function(e){return e.currentTarget===e.target&&c()},children:Object(f.jsx)("div",{className:A.a.Modal,children:Object(f.jsx)("img",{src:t,alt:a})})}),E)}var M=a(30),q=a.n(M);function z(){var e=this,t=Object(r.useState)([]),a=Object(u.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)(1),m=Object(u.a)(o,2),b=m[0],j=m[1],p=Object(r.useState)(null),d=Object(u.a)(p,2),g=d[0],x=(d[1],Object(r.useState)(null)),_=Object(u.a)(x,2),v=_[0],y=_[1],I=Object(r.useState)("idle"),k=Object(u.a)(I,2),w=k[0],G=k[1],C=Object(r.useState)(!1),B=Object(u.a)(C,2),A=B[0];B[1];Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,G("pending"),e.next=4,h(v,b);case 4:if(t=e.sent,G("resolved"),""!==v.trim()&&0!==t.length){e.next=8;break}return e.abrupt("return",console.log(alert("there r no images")));case 8:c([].concat(Object(i.a)(n),Object(i.a)(t))),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),G("rejected"),e.abrupt("return",console.log(alert("this is the end")));case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}v&&function(){e.apply(this,arguments)}()}),[v,b]);var E=function(t){e.setState((function(e){return{setShowModal:!e.showModal,setSelectedImage:t}}))};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:q.a.App,children:[Object(f.jsx)(S,{onSubmit:function(e){y(e),j(1),c([])}}),"pending"===w&&Object(f.jsx)(O,{}),Object(f.jsx)(F,{images:n,onClick:E}),n.length>=1&&Object(f.jsx)(N,{onClick:function(){j((function(e){return e+1}))}}),A&&Object(f.jsx)(L,{onClick:E,scr:g,alt:g})]})})}c.a.render(Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(z,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.0f96ea5f.chunk.js.map