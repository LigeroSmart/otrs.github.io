(window.webpackJsonp=window.webpackJsonp||[]).push([[77,124],{B2Ms:function(t,e,n){"use strict";n.r(e);var s={name:"CommonBadge",props:{title:{type:String,required:!0},disabled:{type:Boolean,default:!1},size:{type:String},variant:{type:String},inline:{type:Boolean}},computed:{elementClass:function(){var t=[];switch(this.disabled&&t.push("Badge--Disabled"),this.inline&&t.push("Badge--Inline"),this.variant){case"primary":t.push("Badge--Primary")}switch(this.size){case"sm":t.push("Badge--Smaller")}return t}}},o=(n("mv8j"),n("psIG")),i=Object(o.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"badge Badge",class:this.elementClass,attrs:{title:this._f("translate")(this.title)}},[this._v("\n    "+this._s(this._f("translate")(this.title))+"\n")])},[],!1,null,null,null);i.options.__file="index.vue";e.default=i.exports},Iptl:function(t,e,n){"use strict";n("GkPX");var s=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(112).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(10).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(11).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},WHTA:function(t,e,n){},mv8j:function(t,e,n){"use strict";var s=n("WHTA");n.n(s).a},"to/N":function(t,e,n){"use strict";n.r(e);var s=n("Iptl"),o=n("B2Ms"),i={name:"CommonBadge",mixins:[s.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonBadge",component:o.default,example:{title:{default:"My Badge",type:"input"},disabled:{default:!1,type:"checkbox"},inline:{default:!1,type:"checkbox"},variant:{type:"select",options:["primary"]},size:{type:"select",options:["sm"]}}}}},a=n("psIG"),c=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);c.options.__file="CommonBadge.vue";e.default=c.exports}}]);