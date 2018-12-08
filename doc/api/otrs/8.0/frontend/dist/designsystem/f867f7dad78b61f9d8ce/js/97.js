(window.webpackJsonp=window.webpackJsonp||[]).push([[97,108],{"0jP1":function(e,t,n){"use strict";n.r(t);var o=n("Iptl"),s=n("Hzqv"),a={name:"FormCheckbox",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormCheckbox",value:void 0,component:s.default,example:{error:{type:"input"},name:{type:"input"},label:{type:"input"},required:{type:"checkbox",default:!1},description:{type:"input"},disabled:{type:"checkbox",default:!1}}}}},i=n("psIG"),c=Object(i.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n            "+e._s(e.version)+"\n        ")])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);c.options.__file="FormCheckbox.vue";t.default=c.exports},A86J:function(e,t,n){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},Hzqv:function(e,t,n){"use strict";n.r(t);var o={name:"FormCheckbox",directives:{focus:{inserted:function(e,t){t.value&&e.querySelector("input").focus()}}},mixins:[n("A86J").a],props:{value:{type:Boolean},name:{type:String},error:{type:String},label:{type:String},required:{type:Boolean,default:!1},description:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1}},computed:{fieldId:function(){return"formCheckbox-".concat(this._uid)},localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}}},methods:{onChange:function(e,t){this.$emit("change",e,t)}}},s=n("psIG"),a=Object(s.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[n("b-form-checkbox",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],attrs:{id:e.fieldId,name:e.name,disabled:e.disabled,state:Boolean(e.error)?"invalid":null},on:{change:e.onChange},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}},[e._v("\n        "+e._s(e._f("translate")(e.label))+"\n    ")])],1)},[],!1,null,null,null);a.options.__file="FormCheckbox.vue";t.default=a.exports},Iptl:function(e,t,n){"use strict";n("GkPX");var o=n("nS/B");t.a={components:{CommonNotice:function(){return n.e(113).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(10).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(11).then(n.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}},mounted:function(){var e=this;this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}}}]);