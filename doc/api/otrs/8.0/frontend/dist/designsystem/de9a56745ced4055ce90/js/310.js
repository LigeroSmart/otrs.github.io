(window.webpackJsonp=window.webpackJsonp||[]).push([[310,76],{"+yph":function(t,e,n){},"2axH":function(t,e,n){"use strict";n.r(e);n("e2Kn");var a={name:"DataPager",props:{currentPage:{type:[Number],required:!0},totalRows:{type:[Number],default:0},perPage:{type:[Number],default:10},firstText:{type:[String],default:"First"},prevText:{type:[String],default:"Previous"},nextText:{type:[String],default:"Next"},lastText:{type:[String],default:"Last"},align:{type:[String],validator:function(t){return-1!==["center","right","end"].indexOf(t)}},hideGotoEndButtons:{type:[Boolean],default:!1},labelFirstPage:{type:[String],default:"Go to first page"},labelPrevPage:{type:[String],default:"Go to previous page"},labelNextPage:{type:[String],default:"Go to next page"},labelLastPage:{type:[String],default:"Go to last page"},labelPage:{type:[String],default:"Go to page"},ariaLabel:{type:[String],default:"Pagination"},ariaControls:{type:[String]},limit:{type:[Number],default:5}},computed:{localCurrentPage:{get:function(){return this.currentPage},set:function(t){this.$emit("change",t)}}}},o=(n("T2Wx"),n("psIG")),r=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.totalRows>0&&t.totalRows>t.perPage?n("b-pagination",{staticClass:"Pagination",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:t.align,"first-text":t._f("translate")(t.firstText),"prev-text":t._f("translate")(t.prevText),"next-text":t._f("translate")(t.nextText),"last-text":t._f("translate")(t.lastText),"label-first-page":t._f("translate")(t.labelFirstPage),"label-prev-page":t._f("translate")(t.labelPrevPage),"label-next-page":t._f("translate")(t.labelNextPage),"label-last-page":t._f("translate")(t.labelLastPage),"label-page":t._f("translate")(t.labelPage),"aria-label":t._f("translate")(t.ariaLabel),"aria-controls":t._f("translate")(t.ariaControls),"hide-goto-end-buttons":t.hideGotoEndButtons,limit:t.limit},model:{value:t.localCurrentPage,callback:function(e){t.localCurrentPage=e},expression:"localCurrentPage"}}):t._e()},[],!1,null,null,null);e.default=r.exports},Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var a=n("OvAC"),o=n.n(a),r=n("nS/B"),s=n("lOrp");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}e.a={components:{CommonNotice:function(){return n.e(386).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(85).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(88).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach(function(e){o()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(r.b)(this.doc,"summary")},version:function(){return Object(r.b)(this.doc,"version")},description:function(){return Object(r.b)(this.doc,"description")},props:function(){return Object(r.a)(this.doc,"prop")},slots:function(){return Object(r.a)(this.doc,"slot")},events:function(){return Object(r.a)(this.doc,"event")},methods:function(){return Object(r.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(s.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},STGl:function(t,e,n){"use strict";n.r(e);var a=n("Iptl"),o=n("2axH"),r={name:"DataPager",mixins:[a.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Data/DataPager",component:o.default,example:{currentPage:{default:3,type:"input",subType:"number"},totalRows:{default:100,type:"input",subType:"number"},perPage:{default:10,type:"input",subType:"number"},firstText:{default:"First",type:"input"},prevText:{default:"Previous",type:"input"},nextText:{default:"Next",type:"input"},lastText:{default:"Last",type:"input"},align:{default:void 0,type:"select",options:[{value:void 0,text:"-"},{value:"end",text:"right or end"},"center"]},hideGotoEndButtons:{default:!1,type:"checkbox"},labelFirstPage:{default:"Goto first page",type:"input"},labelPrevPage:{default:"Goto previous page",type:"input"},labelNextPage:{default:"Goto next page",type:"input"},labelLastPage:{default:"Goto last page",type:"input"},labelPage:{default:"Goto page",type:"input"},ariaLabel:{default:"Pagination",type:"input"},ariaControls:{type:"input"},limit:{default:5,type:"input",subType:"number"}}}}},s=n("psIG"),i=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=i.exports},T2Wx:function(t,e,n){"use strict";var a=n("+yph");n.n(a).a}}]);