(window.webpackJsonp=window.webpackJsonp||[]).push([[236,37],{"+3YS":function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},"+bRE":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},"6m2j":function(e,t,r){"use strict";r.r(t);r("2Tod"),r("ABKx");var a=r("nxTg"),i=r.n(a),s=(r("3DBk"),r("oMRA"),r("6d4m"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO"),r("OvAC")),o=r.n(s),n=(r("e2Kn"),r("lOrp")),l=r("VixF"),c=r("J+oh"),u=r("9va6");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}var h={name:"FormStatisticPreview",components:{FormRadioButton:r("rl1q").default,Statistic:function(){return r.e(393).then(r.bind(null,"OUCj"))},DataFixedTable:function(){return Promise.all([r.e(13),r.e(73)]).then(r.bind(null,"R445"))}},mixins:[c.a,l.a],props:{value:{type:String},statisticId:{type:[Number,String]},formatOptions:{type:Array},url:{type:String},previewConfig:{type:Object,required:!0},formValues:{type:Object},testMode:{type:Boolean,default:!1}},data:function(){return{tableColumns:{},tableItems:[],resultData:null,errorMessagePlaceholder:[],errorMessage:null,errorType:null,availableFormatOptions:{"D3::BarChart":{id:"D3::BarChart",label:"Bar Chart"},"D3::LineChart":{id:"D3::LineChart",label:"Line Chart"},"D3::StackedAreaChart":{id:"D3::StackedAreaChart",label:"Stacked Area Chart"},Print:{id:"Print",label:"Print"}},loadingState:!1,delayTimer:void 0}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach(function(t){o()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},Object(n.b)(["language"]),{fieldId:function(){return"formStatisticPreview-".concat(this.uuid)},localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}},selectFormatOptions:function(){var e=this;if(!this.formatOptions)return null;var t=[];return Object.keys(this.availableFormatOptions).forEach(function(r){e.formatOptions.includes(r)&&t.push(e.availableFormatOptions[r])}),t},errorIcon:function(){switch(this.errorType){case"NoXAxisField":return"cog";default:return"remove-circle"}},complexFormValues:function(){if(!this.formValues)return null;var e=this.convertDotNotationToComplex(this.formValues);if("Run"!==this.previewConfig.FormType){Object.values(["UseAsXvalue","UseAsValueSeries","UseAsRestriction"]).forEach(function(t){e[t]?e[t]=e[t].ActiveFields:e[t]={}})}return e},activePreview:function(){return"NoPreviewForStatic"!==this.errorType&&this.statisticId&&this.url&&this.selectFormatOptions}}),watch:{selectFormatOptions:function(){if(!this.formatOptions.includes(this.localValue)){var e=i()(this.formatOptions,1);this.localValue=e[0]}},"previewConfig.ErrorType":{handler:function(e,t){!e&&t?(this.errorMessage=null,this.errorMessagePlaceholder=[],this.errorType=null,this.fetchResultData()):(this.errorMessage=this.previewConfig.ErrorMessage,this.errorMessagePlaceholder=this.previewConfig.ErrorMessagePlaceholder||[],this.errorType=this.previewConfig.ErrorType)}},activePreview:function(e,t){t||!e||this.errorType||this.fetchResultData()},complexFormValues:function(e,t){var r=this;if(this.activePreview){var a=!1;Object.values(["TimeZone","UseAsXvalue","UseAsValueSeries"]).every(function(r){return!!Object(u.isEqual)(e[r],t[r])||(a=!0,!1)}),a&&Object.keys(e.UseAsXvalue).length>0&&(clearTimeout(this.delayTimer),this.delayTimer=setTimeout(function(){r.fetchResultData()},600))}}},mounted:function(){this.previewConfig.ErrorType&&(this.errorMessage=this.previewConfig.ErrorMessage,this.errorMessagePlaceholder=this.previewConfig.ErrorMessagePlaceholder||[],this.errorType=this.previewConfig.ErrorType),!this.errorType&&this.statisticId&&this.url&&this.fetchResultData()},methods:{fetchResultData:function(){var e=this;if(this.testMode)return this.localValue="D3::BarChart",this.resultData=[["Overview about all tickets in the system 2019-01-01 00:00:00-2019-11-12 23:59:59"],["Priority","quarter 1-2019","quarter 2-2019","quarter 3-2019","quarter 4-2019"],["1 very low",1,16,0,0],["2 low",0,20,0,0],["3 normal",7118,51,28,220],["4 high",0,19,0,0],["5 very high",1,23,0,0],["Sum",7120,129,28,220]],void this.updateTablePreview();this.loadingState=!0,this.clientSendRequest({Path:this.url,Method:"post",Body:{Preview:1,ConfiguredExecutionParams:this.complexFormValues,Language:this.language}},{responseTimeout:6e4}).then(function(t){e.resultData=t.Body.StatisticResultData,e.updateTablePreview(),e.errorMessage=null,e.errorMessagePlaceholder=[],e.errorType=null,e.loadingState=!1,e.$nextTick(function(){e.$test.setFlag("PreviewStatistic::ResultData")})}).catch(function(t){e.loadingState=!1,e.resultData=null,t.response&&900===t.response.Code?t.response.Body.ErrorMessageParams.SpecificCode?(e.errorType=t.response.Body.ErrorMessageParams.SpecificCode,e.errorMessage=t.response.Body.ErrorMessageParams.SpecificMessage,e.errorMessagePlaceholder=t.response.Body.ErrorMessageParams.SpecificMessagePlaceholder||[]):(e.errorMessage=t.response.Body.ErrorMessage,e.errorType=t.response.Body.ErrorIdentifier):(e.errorType="NoDataAvailable",e.$log.error(t))})},updateTablePreview:function(){this.createTableColumns(),this.createTableItems()},createTableColumns:function(){var e=this;this.tableColumns={},this.resultData[1].forEach(function(t,r){e.tableColumns["".concat(t," ")]={text:t,isRowKey:0===r}})},createTableItems:function(){var e=Object(u.cloneDeep)(this.resultData);e.splice(0,2);var t=Object.keys(this.tableColumns);this.tableItems=e.map(function(e){var r={};return e.forEach(function(e,a){r[t[a]]=e}),r})}}},f=(r("zgae"),r("psIG")),d=Object(f.a)(h,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],class:["Form__StatisticPreview",{disabled:e.disabled}],attrs:{state:!Boolean(e.error)&&null,label:e._f("translate").apply(void 0,[e.label].concat(e.localLabelPlaceholder)),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":"",description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error),"aria-label":e._f("translate").apply(void 0,[e.label].concat(e.localLabelPlaceholder))},scopedSlots:e._u([e.label&&e.description&&e.hideDescription?{key:"label",fn:function(){return[e._v("\n        "+e._s(e._f("translate").apply(void 0,[e.label].concat(e.localLabelPlaceholder)))+"\n        "),r("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:e._f("translate")(e.description)}},[r("CommonIcon",{staticClass:"mx-2 Font--Small",attrs:{weight:"regular",icon:"messages-bubble-square-information"}})],1)]},proxy:!0}:null,e.label&&e.description&&e.hideDescription?{key:"description",fn:function(){return[r("small",{staticClass:"sr-only"},[e._v("\n            "+e._s(e._f("translate")(e.description))+"\n        ")])]},proxy:!0}:null],null,!0)},[e._v(" "),e._v(" "),e.statisticId&&e.url&&e.selectFormatOptions?r("div",{staticClass:"StatisticPreview"},[r("FormRadioButton",{attrs:{size:"sm",label:e._f("translate")("Preview Type"),options:e.selectFormatOptions},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}}),e._v(" "),r("div",{staticClass:"mb-2 mt-4 StatisticPreview__Description"},[e._v("\n            "+e._s(e._f("translate")("Please note that the preview uses random data and does not consider data filters."))+"\n        ")]),e._v(" "),e.errorType||!e.loadingState&&!e.resultData?r("div",{staticClass:"px-3 StatisticPreview__Error"},[r("div",[e._v(e._s(e._f("translate")("No preview available yet.")))]),e._v(" "),e.errorMessage?r("div",[e._v(e._s(e._f("translate").apply(void 0,[e.errorMessage].concat(e.errorMessagePlaceholder))))]):e._e()]):e.loadingState?r("div",{staticClass:"px-3 StatisticPreview__Loading"},[r("CommonIcon",{attrs:{weight:"regular",icon:"loading",spin:"",decorative:""}}),e._v(" "),r("div",[e._v("\n                "+e._s(e._f("translate")("The preview content of this statistic is being prepared for you, please be patient."))+"\n            ")])],1):r("div",{staticClass:"StatisticPreview__Content"},["Print"!==e.localValue?r("Statistic",{attrs:{data:e.resultData,options:e.previewConfig.Options,"error-message":e.errorMessage,"error-type":e.errorType,format:e.localValue}}):r("DataFixedTable",{attrs:{items:e.tableItems,columns:e.tableColumns}})],1)],1):r("div",{staticClass:"StatisticPreview__EmptyText"},["NoPreviewForStatic"===e.errorType?[e._v("\n            "+e._s(e._f("translate")("No preview available for static statistic objects."))+"\n        ")]:[e._v("\n            "+e._s(e._f("translate")("No preview available yet."))+"\n        ")]],2)])},[],!1,null,null,null);t.default=d.exports},"J+oh":function(e,t,r){"use strict";r("asZ9"),r("9ovy"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO");t.a={methods:{convertDotNotationToComplex:function(e){var t={};return Object.keys(e).forEach(function(r){var a=e[r];if(r.match(/\./)){var i=t,s=r.split(".");s.forEach(function(e,t){if(t+1<s.length)return i[e]||(i[e]={}),void(i=i[e]);i[e]=a})}else t[r]=a}),t}}}},S411:function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],a=!0,i=!1,s=void 0;try{for(var o,n=e[Symbol.iterator]();!(a=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){i=!0,s=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw s}}return r}}},bYNH:function(e,t,r){},nxTg:function(e,t,r){var a=r("+3YS"),i=r("S411"),s=r("+bRE");e.exports=function(e,t){return a(e)||i(e,t)||s()}},zgae:function(e,t,r){"use strict";var a=r("bYNH");r.n(a).a}}]);