(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{Iptl:function(t,n,e){"use strict";e("GkPX");var s=e("nS/B");n.a={components:{CommonNotice:function(){return e.e(145).then(e.bind(null,"mkLc"))},DocsExample:function(){return e.e(17).then(e.bind(null,"GD02"))},DocsComponentAPI:function(){return e.e(18).then(e.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},TUSb:function(t,n,e){"use strict";e.r(n);var s=e("Iptl"),o={name:"CommonChips",props:{title:{type:String,required:!0},variant:{type:String,default:"active"}},computed:{variantClass:function(){switch(this.variant){case"alert":return"StatusIndicator--Alert";case"inactive":return"StatusIndicator--Inactive";case"success":return"StatusIndicator--Success";case"warning":return"StatusIndicator--Warning";case"information":return"StatusIndicator--Information";default:return"StatusIndicator--Active"}}}},i=(e("bKVy"),e("psIG")),a=Object(i.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"TicketDetailView__Chips"},[e("b-row",{staticClass:"px-md-0"},[e("b-col",{staticClass:"TicketDetailView__StatusIndicator pr-1",class:[t.variantClass],attrs:{variant:t.variant,cols:"1",sm:"1"}},[e("CommonIcon",{attrs:{weight:"bold",icon:"sign-badge-circle"}})],1),t._v(" "),e("b-col",{staticClass:"TicketDetailView__ChipsItemList",attrs:{cols:"11",sm:"11"}},[e("h6",{staticClass:"small TicketDetailView__ChipsItemTitle"},[t._v("\n                "+t._s(t._f("translate")(t.title))+"\n            ")]),t._v(" "),e("p",{staticClass:"small TicketDetailView__ChipsItemListItem"},[t._t("itemList")],2)])],1)],1)},[],!1,null,null,null).exports,c={name:"CommonChips",mixins:[s.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonChips",component:a,example:{title:{default:"Test title",type:"input"},variant:{default:"active",type:"input"},slots:{itemList:{content:"    \x3c!-- ITEM CONTENT GOES HERE --\x3e",render:function(t){return function(){return t("span",{},["Test string",t("br"),"Another test string"])}}}}}}}},r=Object(i.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"DesignSystem__Main"},[e("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),e("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),e("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[e("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),e("b-tabs",{staticClass:"DesignSystem__TabContent"},[e("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[e("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),e("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[e("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);n.default=r.exports},V42x:function(t,n,e){},bKVy:function(t,n,e){"use strict";var s=e("V42x");e.n(s).a}}]);