(window.webpackJsonp=window.webpackJsonp||[]).push([[265,283],{"330A":function(e,a,i){"use strict";i.r(a);var t={name:"DynamicFieldValueDate",extends:i("NSvX").default},n=i("psIG"),l=Object(n.a)(t,function(){var e=this,a=e.$createElement,i=e._self._c||a;return e.isList&&e.displayValue?i("CommonDateTime",{staticClass:"DynamicFieldValue",attrs:{type:e.dynamicFieldConfig.OutputTypeFormat,"date-time":e.displayValue,"absolute-format":"Date"}}):e.isProperty?i("span",[i("b-row",[i("b-col",[i("CommonIcon",{attrs:{icon:"calendar-date"}}),e._v(" "),i("CommonDateTime",{staticClass:"DynamicFieldValue",attrs:{"date-time":e.displayValue,type:"absolute","absolute-format":"Date","no-title":""}})],1)],1)],1):e.isList?e._e():i("span",{staticClass:"DynamicFieldValue"},[e.dynamicField.LinkPreview?i("CommonPopover",{attrs:{link:e.displayLink,preview:e.displayPreview,"link-text":e._f("localize")(e.displayValue,"Date")}}):e.displayLink?i("CommonLink",{attrs:{link:e.displayLink}},[e.displayValue?i("CommonDateTime",{attrs:{type:e.dynamicFieldConfig.OutputTypeFormat,"date-time":e.displayValue,"absolute-format":"Date","no-title":""}}):e._e(),e._v(" "),i("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[e.displayValue?i("CommonDateTime",{attrs:{type:e.dynamicFieldConfig.OutputTypeFormat,"date-time":e.displayValue,"absolute-format":"Date","no-title":""}}):e._e()]],2)},[],!1,null,null,null);a.default=l.exports},NSvX:function(e,a,i){"use strict";i.r(a);var t={name:"DynamicFieldValueBase",components:{CommonPopover:function(){return i.e(54).then(i.bind(null,"7oBH"))},CommonDateTime:function(){return i.e(57).then(i.bind(null,"g17x"))}},props:{dynamicFieldConfig:{type:Object},dynamicField:{type:Object},type:{type:String}},data:function(){return{isMultiline:!1}},computed:{isList:function(){return"list"===this.type},isSidebar:function(){return"sidebar"===this.type},isProperty:function(){return"property"===this.type||"property-expanded"===this.type},isTranslatable:function(){return this.dynamicField.TranslatableValues&&"0"!==this.dynamicField.TranslatableValues},displayLink:function(){return this.dynamicField.Link||""},displayPreview:function(){return this.dynamicField.LinkPreview},displayValue:function(){return this.dynamicField.Value}}},n=i("psIG"),l=Object(n.a)(t,function(){var e=this,a=e.$createElement,i=e._self._c||a;return e.isList?i("span",{staticClass:"text-truncate w-100 d-inline-block DynamicFieldValue",attrs:{title:e.displayValue}},[e.isTranslatable?[e._v("\n            "+e._s(e._f("translate")(e.displayValue))+"\n        ")]:[e._v("\n            "+e._s(e.displayValue)+"\n        ")]],2):i("span",{staticClass:"DynamicFieldValue"},[e.dynamicField.LinkPreview?i("CommonPopover",{attrs:{link:e.displayLink,preview:e.displayPreview,"link-text":e.displayValue}}):e.displayLink?i("CommonLink",{attrs:{link:e.displayLink}},[e.isMultiline?i("pre",{staticClass:"DynamicFieldValue__Container"},[e._v(e._s(e.displayValue)+"\n            ")]):i("span",[e.isTranslatable?[e._v("\n                    "+e._s(e._f("translate")(e.displayValue))+"\n                ")]:[e._v("\n                    "+e._s(e.displayValue)+"\n                ")]],2),e._v(" "),i("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[e.isMultiline?i("pre",{staticClass:"DynamicFieldValue__Container"},[e._v(e._s(e.displayValue)+"\n            ")]):i("span",[e.isTranslatable?[e._v("\n                    "+e._s(e._f("translate")(e.displayValue))+"\n                ")]:[e._v("\n                    "+e._s(e.displayValue)+"\n                ")]],2)]],2)},[],!1,null,null,null);a.default=l.exports}}]);