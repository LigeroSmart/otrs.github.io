(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{"+R2C":function(e,t,l){},"9sbu":function(e,t,l){"use strict";var a=l("+R2C");l.n(a).a},jkjz:function(e,t,l){"use strict";l.r(t);l("2Tod"),l("ABKx"),l("W1QL"),l("K/PF"),l("t91x"),l("75LO");var a=l("OvAC"),n=l.n(a),o=l("KtqP"),i=l("VixF");function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),l.push.apply(l,a)}return l}var s={name:"FormDateTimeRange",components:{FormDateTime:o.default},mixins:[i.a],props:{value:{type:[Array,Object]},multiple:{type:Boolean,default:!1},enableTime:{type:Boolean,default:!1},systemTimezone:{type:String},userTimezone:{type:String},useSystemTimezone:{type:Boolean}},data:function(){return{localValue:null,oldLocalValue:null}},computed:{fieldId:function(){return"formDateTimeRange-".concat(this.uuid)}},watch:{value:function(){this.buildLocalValue()}},created:function(){this.buildLocalValue()},methods:{onInputStart:function(e,t){this.localValue[e].Start=t,this.emitValue()},onInputEnd:function(e,t){this.localValue[e].End=t,this.emitValue()},buildLocalValue:function(){var e=this.value?JSON.parse(JSON.stringify(this.value)):{},t=Array.isArray(e),l=[{Start:null,End:null}];e&&(t&&e.length?l=[].concat(e):t||(l=[function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(l,!0).forEach(function(t){n()(e,t,l[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(l).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))})}return e}({},e)])),this.localValue=l,this.oldLocalValue=JSON.parse(JSON.stringify(l))},add:function(){this.localValue.push({Start:null,End:null}),this.emitValue()},remove:function(e){this.localValue.splice(e,1),this.localValue.length?this.emitValue():this.add()},disableDates:function(e){var t=this,l=[];return this.localValue.forEach(function(a,n){e!==n&&l.push({from:t.localValue[n].Start,to:t.localValue[n].End})}),l},minDateEnd:function(e){return this.localValue[e].Start},emitValue:function(){var e=this,t=function(){var t=JSON.parse(JSON.stringify(e.localValue)),l=JSON.parse(JSON.stringify(t));e.multiple?e.$emit("input",t,e.oldLocalValue):e.$emit("input",t[0],e.oldLocalValue?e.oldLocalValue[0]:null),e.oldLocalValue=l};return this.oldLocalValue?this.localValue.length!==this.oldLocalValue.length?t():(this.localValue.every(function(l,a){var n,o,i,r=e.oldLocalValue[a];return n=l,o=r,i=!0,Object.keys(n).every(function(e){return n[e]===o[e]||(i=!1,!1)}),!!i||(t(),!1)}),null):t()},focus:function(){this.$refs.startFormDateTime&&this.$refs.startFormDateTime.focus()}}},u=(l("9sbu"),l("psIG")),c=Object(u.a)(s,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],staticClass:"FormDateTimeRange",attrs:{state:!Boolean(e.error)&&null,label:e._f("translate").apply(void 0,[e.label].concat(e.localLabelPlaceholder)),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error),"aria-label":e._f("translate").apply(void 0,[e.label].concat(e.localLabelPlaceholder))},scopedSlots:e._u([e.label&&e.description&&e.hideDescription?{key:"label",fn:function(){return[e._v("\n        "+e._s(e._f("translate").apply(void 0,[e.label].concat(e.localLabelPlaceholder)))+"\n        "),l("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:e._f("translate")(e.description)}},[l("CommonIcon",{staticClass:"mx-2 Font--Small",attrs:{weight:"regular",icon:"messages-bubble-square-information"}})],1)]},proxy:!0}:null,e.label&&e.description&&e.hideDescription?{key:"description",fn:function(){return[l("small",{staticClass:"sr-only"},[e._v("\n            "+e._s(e._f("translate")(e.description))+"\n        ")])]},proxy:!0}:null],null,!0)},[e._v(" "),e._v(" "),e._l(e.localValue,function(t,a){return l("div",{key:a},[l("FormDateTime",{directives:[{name:"focus",rawName:"v-focus",value:0===a?e.autoFocus:void 0,expression:"index === 0 ? autoFocus : undefined"}],ref:0===a?"startFormDateTime":void 0,refInFor:!0,attrs:{name:"Start",label:e._f("translate")("Start Date"),"auto-focus":0===a?e.autoFocus:void 0,value:t.Start,"enable-time":e.enableTime,disable:e.disableDates(a),"min-date":"","system-timezone":e.systemTimezone,"user-timezone":e.userTimezone,"use-system-timezone":e.useSystemTimezone,"label-sr-only":""},on:{input:function(t){return e.onInputStart(a,t)}}}),e._v(" "),l("FormDateTime",{attrs:{name:"End",label:e._f("translate")("End Date"),value:t.End,"enable-time":e.enableTime,disable:e.disableDates(a),"min-date":e.minDateEnd(a),"system-timezone":e.systemTimezone,"user-timezone":e.userTimezone,"use-system-timezone":e.useSystemTimezone,"label-sr-only":""},on:{input:function(t){return e.onInputEnd(a,t)}}}),e._v(" "),e.multiple&&a===e.localValue.length-1?l("CommonIcon",{staticClass:"mt-2",attrs:{weight:"regular",icon:"calendar-add-1"},on:{click:e.add}}):e._e(),e._v(" "),l("CommonIcon",{staticClass:"Color--Alert ml-lg-3 mt-2",attrs:{icon:"calendar-remove"},on:{click:function(t){return e.remove(a)}}})],1)})],2)},[],!1,null,null,null);t.default=c.exports}}]);