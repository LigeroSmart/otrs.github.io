(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{Iptl:function(e,t,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),s=n.n(o),i=n("nS/B"),a=n("lOrp");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}t.a={components:{CommonNotice:function(){return n.e(377).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(84).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(86).then(n.bind(null,"8txu"))}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){s()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")},initialFrontend:function(){var e=this.componentNamespace.split("/");return e.length>1?e[1]:""}},Object(a.b)(["frontend"])),mounted:function(){var e=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},MzN6:function(e,t,n){"use strict";n.r(t);var o=n("Iptl"),s=n("V8Iu"),i={name:"FormRadioAutocomplete",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormRadioAutocomplete",selected:void 0,component:s.default,example:{error:{type:"input"},name:{type:"input"},label:{type:"input"},labelSrOnly:{type:"checkbox",default:!1},required:{type:"checkbox",default:!1},disabled:{type:"checkbox",default:!1},description:{type:"input"},hidden:{default:!1,type:"checkbox"},hideDescription:{default:!1,type:"checkbox"},options:{default:[{label:"The first",id:"node-1"},{label:"The seconds",id:"node-2"},{label:"The third",id:"node-3"},{label:"The disabled",id:"node-4",disabled:!0},{label:"auto-complete value",id:"Other"}],type:"array"},stacked:{default:!1,type:"checkbox"},buttons:{type:"checkbox",default:!1},buttonVariant:{type:"select",options:[{value:void 0,text:"-"},{value:"primary",text:"primary"},{value:"secondary",text:"secondary"},{value:"success",text:"success"},{value:"warning",text:"warning"},{value:"danger",text:"danger"},{value:"info",text:"info"},{value:"light",text:"light"},{value:"dark",text:"dark"}]},url:{type:"input",default:""},hideLabel:{type:"checkbox",default:!1},testMode:{default:!0}}}}},a=n("psIG"),r=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n            "+e._s(e.version)+"\n        ")])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("h2",{staticClass:"DesignSystem"},[e._v("\n        Passing options\n    ")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Prop "),t("code",[this._v("options")]),this._v(" property accepts following types of options:")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",{staticClass:"DesignSystem"},[n("li",[e._v("Array of strings - key and value are the same")]),e._v(" "),n("li",[e._v("Array of objects - object need to have "),n("code",[e._v("id")]),e._v(" and "),n("code",[e._v("label")]),e._v(" values")]),e._v(" "),n("li",[e._v("Objects (hash) - in this case value is used as "),n("code",[e._v("label")])])])}],!1,null,null,null);t.default=r.exports}}]);