(window.webpackJsonp=window.webpackJsonp||[]).push([[249,264],{NSvX:function(n,e,i){"use strict";i.r(e);var a={name:"DynamicFieldValueBase",components:{CommonPopover:function(){return i.e(50).then(i.bind(null,"7oBH"))},CommonDateTime:function(){return i.e(59).then(i.bind(null,"g17x"))}},props:{dynamicFieldConfig:{type:Object},dynamicField:{type:Object},type:{type:String}},data:function(){return{isMultiline:!1}},computed:{isList:function(){return"list"===this.type},isSidebar:function(){return"sidebar"===this.type},isTranslatable:function(){return this.dynamicField.TranslatableValues},displayLink:function(){return this.dynamicField.Link||""},displayPreview:function(){return this.dynamicField.LinkPreview},displayValue:function(){return this.dynamicField.Value}}},l=i("psIG"),t=Object(l.a)(a,function(){var n=this,e=n.$createElement,i=n._self._c||e;return n.isList?i("span",{staticClass:"text-truncate w-100 d-inline-block DynamicFieldValue",attrs:{title:n.displayValue}},[n.isTranslatable?[n._v("\n        "+n._s(n._f("translate")(n.displayValue))+"\n    ")]:[n._v("\n        "+n._s(n.displayValue)+"\n    ")]],2):i("span",{staticClass:"DynamicFieldValue"},[n.dynamicField.LinkPreview?i("CommonPopover",{attrs:{link:n.displayLink,preview:n.displayPreview,"link-text":n.displayValue}}):n.displayLink?i("CommonLink",{attrs:{link:n.displayLink}},[n.isMultiline?i("pre",[n._v(n._s(n.displayValue))]):i("span",[n.isTranslatable?[n._v("\n                "+n._s(n._f("translate")(n.displayValue))+"\n            ")]:[n._v("\n                "+n._s(n.displayValue)+"\n            ")]],2),n._v(" "),i("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[n.isMultiline?i("pre",[n._v(n._s(n.displayValue))]):i("span",[n.isTranslatable?[n._v("\n                "+n._s(n._f("translate")(n.displayValue))+"\n            ")]:[n._v("\n                "+n._s(n.displayValue)+"\n            ")]],2)]],2)},[],!1,null,null,null);e.default=t.exports},nf9x:function(n,e,i){"use strict";i.r(e);var a={name:"DynamicFieldValueMultiselect",extends:i("NSvX").default},l=i("psIG"),t=Object(l.a)(a,function(){var n=this,e=n.$createElement,i=n._self._c||e;return n.isList,i("span",{staticClass:"DynamicFieldValue"},[n._l(n.dynamicField.Values,function(e,i){return[n.dynamicField.TranslatableValues?[n._v("\n            "+n._s(n._f("translate")(e))),i<n.dynamicField.Values.length-1?[n._v("\n                "+n._s(n.dynamicField.ItemSeparator)+"\n            ")]:n._e()]:[n._v("\n            "+n._s(e)),i<n.dynamicField.Values.length-1?[n._v("\n                "+n._s(n.dynamicField.ItemSeparator)+"\n            ")]:n._e()]]})],2)},[],!1,null,null,null);e.default=t.exports}}]);