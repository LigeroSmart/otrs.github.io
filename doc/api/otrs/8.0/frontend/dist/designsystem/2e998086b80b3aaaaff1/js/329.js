(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{U49d:function(t,e,n){"use strict";n.r(e);n("4aJ6"),n("t91x"),n("9ovy"),n("e2Kn");var a={name:"DataList",components:{CommonDateTime:function(){return n.e(41).then(n.bind(null,"g17x"))}},props:{columnCount:{type:Number},items:{type:Array}},methods:{isDateTimeValue:function(t){return!!t.toString().match(/^\d{4}-\d{1,2}-\d{1,2}[ ]\d{1,2}:\d{1,2}:\d{1,2}$/i)}}},l=(n("nxDm"),n("psIG")),i=Object(l.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{staticClass:"DataList"},[n("ul",{style:{columnCount:t.columnCount?t.columnCount:1}},t._l(t.items,function(e){return n("li",{key:e.id},[n("span",{staticClass:"d-inline-block DataList__Label"},[t._t("label-"+e.id,[t._v("\n                    "+t._s(e.label?t.$locale.translate(e.label):e.id)+":\n                ")],{itemData:e})],2),t._v(" "),n("span",{staticClass:"DataList__Value"},[t._t("value-"+e.id,[t.isDateTimeValue(e.value)?[n("CommonDateTime",{attrs:{"date-time":e.value}})]:[t._v("\n                        "+t._s(t._f("translate")(e.value))+"\n                    ")]],{itemData:e})],2)])}),0)]):t._e()},[],!1,null,null,null);e.default=i.exports},nxDm:function(t,e,n){"use strict";var a=n("yMoR");n.n(a).a},yMoR:function(t,e,n){}}]);