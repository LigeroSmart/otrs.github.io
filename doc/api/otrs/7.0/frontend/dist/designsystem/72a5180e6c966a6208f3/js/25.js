(window.webpackJsonp=window.webpackJsonp||[]).push([[25,116],{Iptl:function(t,e,s){"use strict";s("GkPX");var n=s("nS/B");e.a={components:{CommonNotice:function(){return s.e(115).then(s.bind(null,"mkLc"))},DocsExample:function(){return s.e(12).then(s.bind(null,"GD02"))},DocsComponentAPI:function(){return s.e(11).then(s.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(n.b)(this.doc,"summary")},version:function(){return Object(n.b)(this.doc,"version")},description:function(){return Object(n.b)(this.doc,"description")},props:function(){return Object(n.a)(this.doc,"prop")},slots:function(){return Object(n.a)(this.doc,"slot")},events:function(){return Object(n.a)(this.doc,"event")},methods:function(){return Object(n.a)(this.doc,"method")}}}},KtDe:function(t,e,s){},W0aG:function(t,e,s){"use strict";s.r(e);var n={name:"CommonBreadcrumb",props:{items:{type:Array,required:!0},size:{type:String}},computed:{sizeClass:function(){return"sm"===this.size?"Breadcrumb--Smaller":""}}},o=(s("aFWd"),s("psIG")),i=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.items.length?s("b-breadcrumb",{staticClass:"Breadcrumb",class:t.sizeClass},t._l(t.items,function(e,n){return s("b-breadcrumb-item",{key:n,staticClass:"Breadcrumb__Item text-truncate",attrs:{text:t._f("translate")(e.name),to:e.link,active:e.active,"aria-current":e.active?"page":null,title:t._f("translate")(e.name)}})})):t._e()},[],!1,null,null,null);i.options.__file="index.vue";e.default=i.exports},aFWd:function(t,e,s){"use strict";var n=s("KtDe");s.n(n).a},nOGR:function(t,e,s){"use strict";s.r(e);var n=s("Iptl"),o=s("W0aG"),i={name:"CommonBreadcrumb",mixins:[n.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonBreadcrumb",component:o.default,example:{size:{type:"select",options:[{value:void 0,text:"-"},{value:"sm",text:"sm"}]},items:{default:[{name:"Homepage",link:"#"},{name:"Login",link:"#"},{name:"Active page",active:!0}]}}}}},a=s("psIG"),r=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),s("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),s("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[s("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),s("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),t._v(" "),s("b-tabs",{staticClass:"tab-content"},[s("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[s("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),s("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[s("h2",{staticClass:"design-system"},[t._v("Header Level 2")]),t._v(" "),s("ol",{staticClass:"design-system"},[s("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),s("li",[t._v("Aliquam tincidunt mauris eu risus.")])]),t._v(" "),s("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[s("b-row",[s("b-col",{attrs:{sm:"6"}},[s("div",[s("h5",{staticClass:"design-system"},[t._v("Do")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),t._v(" "),s("b-col",{attrs:{sm:"6"}},[s("div",[s("h5",{staticClass:"design-system"},[t._v("Don't")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),t._v(" "),s("h3",{staticClass:"design-system"},[t._v("Header Level 3")]),t._v(" "),s("ul",{staticClass:"design-system"},[s("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),s("li",[t._v("Aliquam tincidunt mauris eu risus.")])])],1),t._v(" "),s("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[s("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);r.options.__file="CommonBreadcrumb.vue";e.default=r.exports}}]);