(window.webpackJsonp=window.webpackJsonp||[]).push([[91,96],{IeUr:function(t,n,e){"use strict";e.r(n);var r={name:"CommonButton",mixins:[e("MHmu").a],props:{type:String,text:String,link:String,icon:String},computed:{customClass:function(){switch(this.type){case"Primary":return"btn btn-md Button--Primary";case"PrimaryInverted":return"btn btn-md Button--PrimaryInverted";case"Secondary":return"btn btn-md Button--Secondary";default:return"btn btn-md"}},iconResource:function(){switch(this.icon){case"Continue":return"keyboard-arrow-right";default:return""}}}},o=e("psIG"),u=Object(o.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-link",{staticClass:"DesignSystem",class:t.customClass,attrs:{href:t.isRouteLink(t.link)?null:t.link,to:t.isRouteLink(t.link)?t.link:null}},[t._v("\n    "+t._s(t.text)+"\n    "),t.icon?e("CommonIcon",{attrs:{icon:t.iconResource,size:"sm"}}):t._e()],1)},[],!1,null,null,null);n.default=u.exports},MHmu:function(t,n,e){"use strict";e("GkPX");var r=e("e+GP"),o=e.n(r);n.a={methods:{isRouteLink:function(t){if("object"===o()(t))return!0;if(!this.$router)return!1;var n=this.$router.resolve({path:t});return!!(n.route&&n.route.matched&&n.route.matched.length&&"ErrorPage"!==n.route.matched[0].name&&"LayoutError"!==n.route.matched[0].name)}}}},"e+GP":function(t,n){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e}}]);