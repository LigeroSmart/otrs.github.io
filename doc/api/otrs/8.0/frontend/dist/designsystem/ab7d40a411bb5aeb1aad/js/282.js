(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{NSvX:function(n,i,a){"use strict";a.r(i);var e={name:"DynamicFieldValueBase",components:{CommonPopover:function(){return a.e(54).then(a.bind(null,"7oBH"))},CommonDateTime:function(){return a.e(57).then(a.bind(null,"g17x"))}},props:{dynamicFieldConfig:{type:Object},dynamicField:{type:Object},type:{type:String}},data:function(){return{isMultiline:!1}},computed:{isList:function(){return"list"===this.type},isSidebar:function(){return"sidebar"===this.type},isTranslatable:function(){return this.dynamicField.TranslatableValues&&"0"!==this.dynamicField.TranslatableValues},displayLink:function(){return this.dynamicField.Link||""},displayPreview:function(){return this.dynamicField.LinkPreview},displayValue:function(){return this.dynamicField.Value}}},l=a("psIG"),t=Object(l.a)(e,function(){var n=this,i=n.$createElement,a=n._self._c||i;return n.isList?a("span",{staticClass:"text-truncate w-100 d-inline-block DynamicFieldValue",attrs:{title:n.displayValue}},[n.isTranslatable?[n._v("\n        "+n._s(n._f("translate")(n.displayValue))+"\n    ")]:[n._v("\n        "+n._s(n.displayValue)+"\n    ")]],2):a("span",{staticClass:"DynamicFieldValue"},[n.dynamicField.LinkPreview?a("CommonPopover",{attrs:{link:n.displayLink,preview:n.displayPreview,"link-text":n.displayValue}}):n.displayLink?a("CommonLink",{attrs:{link:n.displayLink}},[n.isMultiline?a("pre",{staticClass:"DynamicFieldValue__Container"},[n._v("            "+n._s(n.displayValue)+"\n        ")]):a("span",[n.isTranslatable?[n._v("\n                "+n._s(n._f("translate")(n.displayValue))+"\n            ")]:[n._v("\n                "+n._s(n.displayValue)+"\n            ")]],2),n._v(" "),a("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[n.isMultiline?a("pre",{staticClass:"DynamicFieldValue__Container"},[n._v("            "+n._s(n.displayValue)+"\n        ")]):a("span",[n.isTranslatable?[n._v("\n                "+n._s(n._f("translate")(n.displayValue))+"\n            ")]:[n._v("\n                "+n._s(n.displayValue)+"\n            ")]],2)]],2)},[],!1,null,null,null);i.default=t.exports}}]);