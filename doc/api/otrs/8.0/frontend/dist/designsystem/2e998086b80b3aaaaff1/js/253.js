(window.webpackJsonp=window.webpackJsonp||[]).push([[253,330],{A2kn:function(i,a,e){"use strict";var n=e("L9O2");e.n(n).a},L9O2:function(i,a,e){},NSvX:function(i,a,e){"use strict";e.r(a);var n={name:"DynamicFieldValueBase",components:{CommonPopover:function(){return e.e(64).then(e.bind(null,"7oBH"))},CommonDateTime:function(){return e.e(41).then(e.bind(null,"g17x"))}},props:{dynamicFieldConfig:{type:Object},dynamicField:{type:Object},type:{type:String}},data:function(){return{isMultiline:!1,isExpandable:!0}},computed:{isList:function(){return"list"===this.type},isSidebar:function(){return"sidebar"===this.type},isProperty:function(){return"property"===this.type||"property-expanded"===this.type},isTranslatable:function(){return this.dynamicField.TranslatableValues&&"0"!==this.dynamicField.TranslatableValues},displayLink:function(){return this.dynamicField.Link||""},displayPreview:function(){return this.dynamicField.LinkPreview},displayValue:function(){return this.dynamicField.Value}},created:function(){this.$emit("load",{isMultiline:this.isMultiline,isExpandable:this.isExpandable})}},l=(e("Qeht"),e("psIG")),t=Object(l.a)(n,function(){var i=this,a=i.$createElement,e=i._self._c||a;return i.isList?e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"DynamicFieldValue",attrs:{title:i.displayValue.length>50?i.displayValue:""}},[i.isTranslatable?[i.displayValue.length>50?[i._v("\n                "+i._s(i._f("truncate")(i._f("translate")(i.displayValue),50))+"\n            ")]:[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]]:[i.displayValue.length>50?[i._v("\n                "+i._s(i._f("truncate")(i.displayValue,50))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]]],2):e("span",{staticClass:"DynamicFieldValue"},[i.dynamicField.LinkPreview?e("CommonPopover",{attrs:{link:i.displayLink,preview:i.displayPreview,"link-text":i.displayValue}}):i.displayLink?e("CommonLink",{attrs:{link:i.displayLink}},[i.isMultiline?e("pre",{staticClass:"DynamicFieldValue__Container"},[i._v(i._s(i.displayValue))]):e("span",[i.isTranslatable?[i._v("\n                    "+i._s(i._f("translate")(i.displayValue))+"\n                ")]:[i._v("\n                    "+i._s(i.displayValue)+"\n                ")]],2),i._v(" "),e("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[i.isMultiline?e("pre",{staticClass:"DynamicFieldValue__Container"},[i._v(i._s(i.displayValue))]):e("span",[i.isTranslatable?[i._v("\n                    "+i._s(i._f("translate")(i.displayValue))+"\n                ")]:[i._v("\n                    "+i._s(i.displayValue)+"\n                ")]],2)]],2)},[],!1,null,null,null);a.default=t.exports},PIl9:function(i,a,e){"use strict";e.r(a);var n={name:"DynamicFieldValueCheckbox",components:{FormCheckbox:function(){return Promise.all([e.e(6),e.e(32)]).then(e.bind(null,"Hzqv"))}},extends:e("NSvX").default,data:function(){return{isExpandable:!1}},computed:{isChecked:function(){return"Checked"===this.dynamicField.Value},localLabel:function(){return this.isTranslatable?(i=>this.dynamicFieldConfig.Label)():this.dynamicFieldConfig.Label}}},l=(e("A2kn"),e("psIG")),t=Object(l.a)(n,function(){var i=this,a=i.$createElement,e=i._self._c||a;return i.isList?e("span",{staticClass:"DynamicFieldValue",attrs:{title:i.displayValue}},[i.isTranslatable?[i._v("\n        "+i._s(i._f("translate")(i.displayValue))+"\n    ")]:[i._v("\n        "+i._s(i.displayValue)+"\n    ")]],2):i.isProperty?e("span",{staticClass:"DynamicFieldValue",attrs:{title:i.displayValue}},[e("FormCheckbox",{attrs:{label:i.localLabel,disabled:""},model:{value:i.isChecked,callback:function(a){i.isChecked=a},expression:"isChecked"}})],1):e("span",{staticClass:"DynamicFieldValue"},[i.dynamicField.LinkPreview?e("CommonPopover",{attrs:{link:i.displayLink,preview:i.displayPreview,"link-text":i.displayValue}}):i.displayLink?e("CommonLink",{attrs:{link:i.displayLink}},[i.isMultiline?e("pre",{staticClass:"DynamicFieldValue__Container"},[i._v("            "+i._s(i.displayValue)+"\n        ")]):e("span",[i.isTranslatable?[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]],2),i._v(" "),e("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[i.isMultiline?e("pre",{staticClass:"DynamicFieldValue__Container"},[i._v("            "+i._s(i.displayValue)+"\n        ")]):e("span",[i.isTranslatable?[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]],2)]],2)},[],!1,null,null,null);a.default=t.exports},Qeht:function(i,a,e){"use strict";var n=e("mvJA");e.n(n).a},mvJA:function(i,a,e){}}]);