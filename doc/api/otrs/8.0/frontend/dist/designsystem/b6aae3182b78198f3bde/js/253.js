(window.webpackJsonp=window.webpackJsonp||[]).push([[253,267],{NSvX:function(n,i,e){"use strict";e.r(i);var a={name:"DynamicFieldValueBase",components:{CommonPopover:function(){return e.e(52).then(e.bind(null,"7oBH"))},CommonDateTime:function(){return e.e(60).then(e.bind(null,"g17x"))}},props:{dynamicFieldConfig:{type:Object},dynamicField:{type:Object},type:{type:String}},data:function(){return{isMultiline:!1}},computed:{isList:function(){return"list"===this.type},isSidebar:function(){return"sidebar"===this.type},isTranslatable:function(){return this.dynamicField.TranslatableValues&&"0"!==this.dynamicField.TranslatableValues},displayLink:function(){return this.dynamicField.Link||""},displayPreview:function(){return this.dynamicField.LinkPreview},displayValue:function(){return this.dynamicField.Value}}},l=e("psIG"),t=Object(l.a)(a,function(){var n=this,i=n.$createElement,e=n._self._c||i;return n.isList?e("span",{staticClass:"text-truncate w-100 d-inline-block DynamicFieldValue",attrs:{title:n.displayValue}},[n.isTranslatable?[n._v("\n        "+n._s(n._f("translate")(n.displayValue))+"\n    ")]:[n._v("\n        "+n._s(n.displayValue)+"\n    ")]],2):e("span",{staticClass:"DynamicFieldValue"},[n.dynamicField.LinkPreview?e("CommonPopover",{attrs:{link:n.displayLink,preview:n.displayPreview,"link-text":n.displayValue}}):n.displayLink?e("CommonLink",{attrs:{link:n.displayLink}},[n.isMultiline?e("pre",[n._v(n._s(n.displayValue))]):e("span",[n.isTranslatable?[n._v("\n                "+n._s(n._f("translate")(n.displayValue))+"\n            ")]:[n._v("\n                "+n._s(n.displayValue)+"\n            ")]],2),n._v(" "),e("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[n.isMultiline?e("pre",[n._v(n._s(n.displayValue))]):e("span",[n.isTranslatable?[n._v("\n                "+n._s(n._f("translate")(n.displayValue))+"\n            ")]:[n._v("\n                "+n._s(n.displayValue)+"\n            ")]],2)]],2)},[],!1,null,null,null);i.default=t.exports},"z/9O":function(n,i,e){"use strict";e.r(i);var a={name:"DynamicFieldValueProcessID",extends:e("NSvX").default},l=e("psIG"),t=Object(l.a)(a,void 0,void 0,!1,null,null,null);i.default=t.exports}}]);