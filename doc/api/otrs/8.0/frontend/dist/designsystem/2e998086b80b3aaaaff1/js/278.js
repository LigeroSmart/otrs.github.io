(window.webpackJsonp=window.webpackJsonp||[]).push([[278,74],{Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var s=n("OvAC"),o=n.n(s),i=n("nS/B"),a=n("lOrp");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,s)}return n}e.a={components:{CommonNotice:function(){return n.e(377).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(84).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(86).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){o()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(a.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},OFqP:function(t,e,n){},R445:function(t,e,n){"use strict";n.r(e);var s={name:"DataFixedTable",extends:n("v1gf").default,props:{emptyText:{type:String,default:"Currently no data available."},isClickable:{type:Boolean}}},o=(n("vboN"),n("psIG")),i=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-responsive ItemListTable",class:t.containerClass},[t.items&&t.items.length>0?n("table",{staticClass:"table table-striped",class:{"table-hover":t.isClickable}},[t.hideHeader?t._e():n("thead",[n("tr",t._l(t.filteredColumns,function(e,s){return n("th",{key:s,class:{ItemListTable__SortingColumn:e.isSortable},on:{click:function(e){return t.sort(e,s)}}},[t._v("\n                    "+t._s(t._f("translate")(t.columnTitle(s)))+"\n                    "),e.isSortable?n("CommonIcon",{attrs:{icon:e.isSorted&&e.isAscending?"keyboard-arrow-down":e.isSorted&&!e.isAscending?"keyboard-arrow-up":"expand-vertical-1",weight:"bold"}}):t._e()],1)}),0)]),t._v(" "),n("tbody",t._l(t.items,function(e,s){return n("tr",{key:s,staticClass:"ItemListTableRow",class:e.rowClass,on:{click:function(n){return t.click(n,e)}}},t._l(t.filteredColumns,function(s,o){return n("td",{key:o,class:s.class},[t._t(o,[t._v("\n                        "+t._s(e[o])+"\n                    ")],{value:e[o],item:e})],2)}),0)}),0)]):t._e(),t._v(" "),t.items&&0==t.items.length?n("div",{staticClass:"py-3 text-center ItemList__EmptyText"},[n("small",[t._v("\n            "+t._s(t._f("translate")(t.emptyText))+"\n        ")])]):t._e()])},[],!1,null,null,null);e.default=i.exports},mxHJ:function(t,e,n){"use strict";n.r(e);var s=n("Iptl"),o=n("R445"),i={name:"DataFixedTable",mixins:[s.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Data/DataFixedTable",value:void 0,component:o.default,example:{items:{default:[{TicketID:1,Title:"Equus burchelli"},{TicketID:2,Title:"Eudyptula minor"},{TicketID:3,Title:"Mungos mungo"},{TicketID:4,Title:"Ovibos moschatus"},{TicketID:5,Title:"Morelia spilotes variegata"},{TicketID:6,Title:"Hippopotamus amphibius"},{TicketID:7,Title:"Morelia spilotes variegata"},{TicketID:8,Title:"Ovibos moschatus"},{TicketID:9,Title:"Mungos mungo"},{TicketID:10,Title:"Eudyptula minor"}],type:"array"},columns:{default:{TicketID:{text:"TicketID",isSortable:!0,isSorted:!1,isAscending:!0,isHidden:!0,isRowKey:!0,class:"ItemList__ID"},Title:{text:"Title",isSortable:!0,isSorted:!1,isAscending:!1,isHidden:!1,isRowKey:!1,class:"ItemList__Title"}},type:"object"},hideHeader:{type:"checkbox",default:!0},size:{type:"select",options:[{value:void 0,text:"-"},{value:"sm",text:"Small"}]},isClickable:{type:"checkbox"}}}}},a=n("psIG"),r=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("h2",{staticClass:"DesignSystem"},[t._v("\n        Wrapper Component\n    ")]),t._v(" "),n("p",[t._v("\n        This component is simply a wrapper around the Data Table, suitable for display of fixed lists. As such it\n        provides exactly the same API as the wrapped component, so make sure to read\n        "),n("b-link",{staticClass:"DesignSystem",attrs:{to:"/documentation/components/data/data-table"}},[t._v("\n            its documentation\n        ")]),t._v("\n        for more information.\n    ")],1),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=r.exports},vboN:function(t,e,n){"use strict";var s=n("OFqP");n.n(s).a}}]);