(window.webpackJsonp=window.webpackJsonp||[]).push([[82,109,111],{A86J:function(t,e,n){"use strict";e.a={directives:{focus:{inserted:function(t,e){e.value&&t.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},EC4j:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),s=n("Khac"),a={name:"FormRadio",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormRadio",selected:void 0,component:s.default,example:{error:{type:"input"},name:{type:"input"},label:{type:"input"},labelSrOnly:{type:"checkbox",default:!1},required:{type:"checkbox",default:!1},disabled:{type:"checkbox",default:!1},description:{type:"input"},options:{default:[{label:"The first",id:"node-1"},{label:"The seconds",id:"node-2"},{label:"The third",id:"node-3"},{label:"The disabled",id:"node-4",disabled:!0}],type:"array"},stacked:{default:!1,type:"checkbox"},buttons:{type:"checkbox",default:!1},buttonVariant:{type:"select",options:[{value:void 0,text:"-"},{value:"primary",text:"primary"},{value:"secondary",text:"secondary"},{value:"success",text:"success"},{value:"warning",text:"warning"},{value:"danger",text:"danger"},{value:"info",text:"info"},{value:"light",text:"light"},{value:"dark",text:"dark"}]}}}}},i=n("psIG"),l=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),n("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[n("h2",{staticClass:"design-system"},[t._v("\n                Passing options\n            ")]),t._v(" "),n("p",[t._v("This property accepts following types of options:")]),t._v(" "),n("ol",{staticClass:"design-system"},[n("li",[t._v("Array of strings - key and value are the same")]),t._v(" "),n("li",[t._v('Array of objects - object need to have "id" and "label" values')]),t._v(" "),n("li",[t._v('Objects (hash) - in this case value is used as "label"')])])]),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);l.options.__file="FormRadio.vue";e.default=l.exports},Iptl:function(t,e,n){"use strict";n("GkPX");var o=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(113).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(10).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(11).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},Khac:function(t,e,n){"use strict";n.r(e);var o=n("e+GP"),s=n.n(o),a=(n("K/PF"),n("75LO"),n("W1QL"),n("e2Kn"),n("9va6")),i={name:"FormRadio",directives:{focus:{inserted:function(t,e){e.value&&t.querySelector("input").focus()}}},mixins:[n("A86J").a],props:{error:{type:String},name:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1},options:{type:[Array,Object]},stacked:{type:Boolean,default:!1},buttons:{type:Boolean,default:!1},buttonVariant:{type:String,default:"info"},translateOptions:{type:Boolean,default:!1},value:{type:[String,Number],default:""}},data:function(){return{localOptions:this.buildLocalOptions()}},computed:{localSelected:{get:function(){return this.isValidOption(this.value)?this.value:""},set:function(t){this.isValidOption(t)&&this.$emit("input",t)}}},watch:{options:function(){this.localOptions=this.buildLocalOptions()}},created:function(){var t=this;this.$bus.$on("forceUpdate",function(){t.localOptions=t.buildLocalOptions()})},methods:{buildLocalOptions:function(){var t=this,e=Object(a.cloneDeep)(this.options);return Array.isArray(e)?Object.keys(e).forEach(function(n){if("object"===s()(e[n]))e[n].value=e[n].id,delete e[n].id,t.translateOptions?e[n].text=t.$locale.translate(e[n].label):e[n].text=e[n].label,delete e[n].label;else if("string"==typeof e[n]){var o=e[n],a={value:o,text:t.translateOptions?t.$locale.translate(o):o};e[n]=a}}):"object"===s()(e)&&this.translateOptions&&Object.keys(e).forEach(function(n){e[n]=t.$locale.translate(e[n])}),e},isValidOption:function(t){var e=!1;return Array.isArray(this.options)?this.options.forEach(function(n){n.disabled||n.id!==t||(e=!0)}):Object.keys(t).forEach(function(n){n===t&&(e=!0)}),e},onChange:function(t,e){this.isValidOption(t)&&this.$emit("change",t,e)}}},l=n("psIG"),r=Object(l.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],attrs:{state:t.error?"invalid":null,label:t._f("translate")(t.label),"label-class":t.required?"required":null,"label-sr-only":t.labelSrOnly,description:t._f("translate")(t.description),"invalid-feedback":t._f("translate")(t.error)}},[n("b-form-radio-group",{directives:[{name:"focus",rawName:"v-focus",value:t.autoFocus,expression:"autoFocus"}],attrs:{options:t.localOptions,stacked:t.stacked,buttons:t.buttons,"button-variant":t.buttonVariant,name:t.name,plain:""},on:{change:t.onChange},model:{value:t.localSelected,callback:function(e){t.localSelected=e},expression:"localSelected"}})],1)},[],!1,null,null,null);r.options.__file="FormRadio.vue";e.default=r.exports},"e+GP":function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(t){return n(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o}}]);