(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),s=n.n(o),i=n("nS/B"),r=n("lOrp");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(377).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(84).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(86).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach(function(e){s()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(r.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},hTYv:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),s=n("N66M"),i={name:"FormAutocomplete",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormRecipients",value:void 0,component:s.default,example:{url:{default:"public/autocomplete",type:"input"},error:{type:"input"},name:{type:"input"},label:{type:"input"},labelSrOnly:{default:!1,subtype:"checkbox"},required:{default:!1,type:"checkbox"},description:{type:"input"},noResultsText:{type:"input"},searchPromptText:{type:"input"},disabled:{default:!1,type:"checkbox"},hidden:{default:!1,type:"checkbox"},hideDescription:{default:!1,type:"checkbox"},placeholder:{type:"input"},testMode:{default:!0}}}}},r=n("psIG"),c=Object(r.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=c.exports}}]);