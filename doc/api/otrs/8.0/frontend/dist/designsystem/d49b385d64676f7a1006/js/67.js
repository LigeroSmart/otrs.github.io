(window.webpackJsonp=window.webpackJsonp||[]).push([[67,5,8,110],{"8/AS":function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),i=n("dphA"),s={name:"FormButton",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormButton",component:i.default,isGlobal:!1,example:{block:{default:!1,type:"checkbox"},disabled:{default:!1,type:"checkbox"},loading:{default:!1,type:"checkbox"},size:{type:"select",options:[{value:void 0,text:"-"},{value:"sm",text:"sm"},{value:"md",text:"md"},{value:"lg",text:"lg"}]},text:{default:"Button",type:"input"},type:{default:"button",type:"select",options:[{value:"button",text:"button"},{value:"submit",text:"submit"},{value:"reset",text:"reset"}]},variant:{type:"select",options:[{value:void 0,text:"-"},{value:"-Primary",text:"primary"},{value:"-PrimaryInverted",text:"primaryinverted"},{value:"-Secondary",text:"secondary"},{value:"success",text:"success"},{value:"warning",text:"warning"},{value:"danger",text:"danger"},{value:"info",text:"info"},{value:"light",text:"light"},{value:"dark",text:"dark"}]}}}}},a=n("psIG"),r=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);r.options.__file="FormButton.vue";e.default=r.exports},A86J:function(t,e,n){"use strict";e.a={directives:{focus:{inserted:function(t,e){e.value&&t.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},Iptl:function(t,e,n){"use strict";n("GkPX");var o=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(112).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(10).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(11).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}}}},Loym:function(t,e,n){},MHmu:function(t,e,n){"use strict";n("GkPX");var o=n("e+GP"),i=n.n(o);e.a={methods:{isRouteLink:function(t){if("object"===i()(t))return!0;if(!this.$router)return!1;var e=this.$router.resolve({path:t});return!!(e.route&&e.route.matched&&e.route.matched.length&&"ErrorPage"!==e.route.matched[0].name&&"LayoutError"!==e.route.matched[0].name)}}}},dphA:function(t,e,n){"use strict";n.r(e);n("ScpY");var o=n("MHmu"),i=n("A86J"),s={name:"FormButton",mixins:[o.a,i.a],props:{block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String},hidden:{type:Boolean,default:!1},isExternal:{type:Boolean,default:!1},isRoute:{type:Boolean,default:!1},link:{type:[String,Object]},loading:{type:Boolean,default:!1},size:{type:String},text:{type:String,default:"Button",note:""},type:{type:String,default:"button"},variant:{type:String}},computed:{fieldId:function(){return"formButton-".concat(this._uid)},isDisabled:function(){return this.loading||this.disabled},isInternalLink:function(){return!this.isExternal&&(!!this.isRoute||this.isRouteLink(this.link))}},methods:{click:function(){this.$emit("click",this.$refs[this.fieldId])}}},a=(n("xlZW"),n("psIG")),r=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button",{directives:[{name:"focus",rawName:"v-focus",value:t.autoFocus,expression:"autoFocus"},{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],ref:t.fieldId,staticClass:"Button",class:{"Button--Primary":"primary"===t.variant},attrs:{block:t.block,disabled:t.isDisabled,href:t.isInternalLink?null:t.link,size:t.size,variant:t.variant,to:t.isInternalLink?t.link:null,type:t.type},on:{click:t.click}},[n("div",{staticClass:"placeholder"},[t.loading?n("div",[n("CommonIcon",{attrs:{size:t.size,icon:"circle-notch","class-name":"align-items-center",spin:""}})],1):t._e(),t._v(" "),n("span",{style:{visibility:t.loading?"hidden":"visible"}},[t._t("default",[t._v("\n                "+t._s(t._f("translate")(t.text))+"\n                "),t.icon?n("CommonIcon",{attrs:{icon:t.icon}}):t._e()])],2)])])},[],!1,null,null,null);r.options.__file="index.vue";e.default=r.exports},"e+GP":function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(t){return n(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o},xlZW:function(t,e,n){"use strict";var o=n("Loym");n.n(o).a}}]);