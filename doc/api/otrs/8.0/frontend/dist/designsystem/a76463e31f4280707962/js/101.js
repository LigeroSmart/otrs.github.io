(window.webpackJsonp=window.webpackJsonp||[]).push([[101,85],{"9iYM":function(t,e,n){"use strict";n.r(e);n("ScpY"),n("e2Kn");var o={name:"CommonLink",mixins:[n("MHmu").a],props:{link:{type:[String,Object]},name:{type:[String,Number]},isExternal:{type:Boolean,default:!1},isRoute:{type:Boolean,default:!1},active:{type:Boolean,default:!1},activeClass:{type:String},append:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactActiveClass:{type:String},flyoutId:{type:String},rel:{type:String},replace:{type:Boolean,default:!1},routerTag:{type:String},srOnlyText:{type:String},target:{type:String},externalInNewTab:{type:Boolean}},data:function(){return{showFlyout:!1}},computed:{isInternalLink:function(){return!this.isExternal&&(!!this.isRoute||this.isRouteLink(this.link))},localTarget:function(){return this.target?this.target:this.externalInNewTab&&!this.isInternalLink?"_blank":null}},methods:{click:function(t){this.$emit("click",t)},isBlured:function(){var t=this;this.flyoutId&&(this.showFlyout=!1,this.$nextTick(function(){t.checkFocusedElements()}))},isFocused:function(){var t=this;this.flyoutId&&(this.showFlyout=!0,this.$nextTick(function(){t.checkFocusedElements()}))},checkFocusedElements:function(){var t=document.getElementById(this.flyoutId);if(t&&t.classList.contains("has-flyout")){var e=t.getElementsByClassName("Flyout");e&&e.length&&(this.showFlyout?e[0].classList.add("Flyout__Show"):e[0].classList.remove("Flyout__Show"))}}}},i=n("psIG"),s=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-link",{style:{"pointer-events":t.disabled?"none":"inherit"},attrs:{active:t.active,"active-class":t.activeClass,append:t.append,disabled:t.disabled,exact:t.exact,"exact-active-class":t.exactActiveClass,href:t.isInternalLink?null:t.link,name:t.name,rel:t.rel,replace:t.replace,"router-tag":t.routerTag,target:t.localTarget,to:t.isInternalLink?t.link:null,"sr-only-text":t.srOnlyText},on:{click:t.click},nativeOn:{blur:function(e){return t.isBlured(e)},focus:function(e){return t.isFocused(e)}}},[t._t("default"),t._v(" "),t.srOnlyText?n("span",{staticClass:"sr-only"},[t._v("\n        "+t._s(t._f("translate")(t.srOnlyText))+"\n    ")]):t._e()],2)},[],!1,null,null,null);e.default=s.exports},MHmu:function(t,e,n){"use strict";n("GkPX");var o=n("e+GP"),i=n.n(o),s=function(t,e){if("object"===i()(t))return!0;if(!e)return!1;var n=e.resolve({path:t});return!!(n.route&&n.route.matched&&n.route.matched.length&&"ErrorPage"!==n.route.matched[0].name&&"LayoutError"!==n.route.matched[0].name)};e.a={methods:{isRouteLink:function(t){return s(t,this.$router)}}}},"e+GP":function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n}}]);