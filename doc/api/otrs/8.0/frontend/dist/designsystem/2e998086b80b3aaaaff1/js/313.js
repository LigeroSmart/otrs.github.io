(window.webpackJsonp=window.webpackJsonp||[]).push([[313,330],{"9YTs":function(i,n,e){"use strict";e.r(n);var a={name:"DynamicFieldValueTextArea",extends:e("NSvX").default,data:function(){return{isMultiline:!0}}},t=e("psIG"),l=Object(t.a)(a,void 0,void 0,!1,null,null,null);n.default=l.exports},NSvX:function(i,n,e){"use strict";e.r(n);var a={name:"DynamicFieldValueBase",components:{CommonPopover:function(){return e.e(64).then(e.bind(null,"7oBH"))},CommonDateTime:function(){return e.e(41).then(e.bind(null,"g17x"))}},props:{dynamicFieldConfig:{type:Object},dynamicField:{type:Object},type:{type:String}},data:function(){return{isMultiline:!1,isExpandable:!0}},computed:{isList:function(){return"list"===this.type},isSidebar:function(){return"sidebar"===this.type},isProperty:function(){return"property"===this.type||"property-expanded"===this.type},isTranslatable:function(){return this.dynamicField.TranslatableValues&&"0"!==this.dynamicField.TranslatableValues},displayLink:function(){return this.dynamicField.Link||""},displayPreview:function(){return this.dynamicField.LinkPreview},displayValue:function(){return this.dynamicField.Value}},created:function(){this.$emit("load",{isMultiline:this.isMultiline,isExpandable:this.isExpandable})}},t=(e("Qeht"),e("psIG")),l=Object(t.a)(a,function(){var i=this,n=i.$createElement,e=i._self._c||n;return i.isList?e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"DynamicFieldValue",attrs:{title:i.displayValue.length>50?i.displayValue:""}},[i.isTranslatable?[i.displayValue.length>50?[i._v("\n                "+i._s(i._f("truncate")(i._f("translate")(i.displayValue),50))+"\n            ")]:[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]]:[i.displayValue.length>50?[i._v("\n                "+i._s(i._f("truncate")(i.displayValue,50))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]]],2):e("span",{staticClass:"DynamicFieldValue"},[i.dynamicField.LinkPreview?e("CommonPopover",{attrs:{link:i.displayLink,preview:i.displayPreview,"link-text":i.displayValue}}):i.displayLink?e("CommonLink",{attrs:{link:i.displayLink}},[i.isMultiline?e("pre",{staticClass:"DynamicFieldValue__Container"},[i._v(i._s(i.displayValue))]):e("span",[i.isTranslatable?[i._v("\n                    "+i._s(i._f("translate")(i.displayValue))+"\n                ")]:[i._v("\n                    "+i._s(i.displayValue)+"\n                ")]],2),i._v(" "),e("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[i.isMultiline?e("pre",{staticClass:"DynamicFieldValue__Container"},[i._v(i._s(i.displayValue))]):e("span",[i.isTranslatable?[i._v("\n                    "+i._s(i._f("translate")(i.displayValue))+"\n                ")]:[i._v("\n                    "+i._s(i.displayValue)+"\n                ")]],2)]],2)},[],!1,null,null,null);n.default=l.exports},Qeht:function(i,n,e){"use strict";var a=e("mvJA");e.n(a).a},mvJA:function(i,n,e){}}]);