(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"8SKz":function(t,n,e){"use strict";e.r(n);var o=e("Iptl"),s={name:"CommonContentCard",components:{FormButton:function(){return e.e(5).then(e.bind(null,"dphA"))}},props:{description:{type:String},imagePath:{type:String},link:{type:String},linkList:{type:Array},linkText:{type:String},title:{type:String}}},i=(e("RxN1"),e("psIG")),a=Object(i.a)(s,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("b-card",{staticClass:"shadow-sm ContentCard__Item"},[o("h3",{staticClass:"card-title ContentCard__Title"},[t._v("\n        "+t._s(t._f("translate")(t.title))+"\n    ")]),t._v(" "),/\/SampleImage\.jpg$/.test(t.imagePath)?o("img",{staticClass:"card-img ContentCard__Image img-fluid",attrs:{src:e("BJ+R")}}):t.imagePath?o("b-card-img",{staticClass:"ContentCard__Image",attrs:{src:t.imagePath,fluid:""}}):t._e(),t._v(" "),o("p",{staticClass:"card-text ContentCard__Content"},[t._v("\n        "+t._s(t._f("translate")(t.description))+"\n    ")]),t._v(" "),t.link?o("FormButton",{attrs:{link:t.link,variant:"primary",block:""}},[t._v("\n        "+t._s(t._f("translate")(t.linkText))+"\n    ")]):t._e(),t._v(" "),t.linkList?o("ul",{staticClass:"ContentCard__List"},t._l(t.linkList,function(n){return o("li",{key:n.text},[n.link?o("CommonLink",{staticClass:"ContentCard__Link",attrs:{link:n.link}},[t._v("\n                "+t._s(n.text)+"\n            ")]):t._e()],1)})):t._e()],1)},[],!1,null,null,null);a.options.__file="index.vue";var r=a.exports,c={name:"CommonContentCard",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/External",componentPath:"Apps/External/Components/Common/CommonContentCard",component:r,example:{title:{default:"Some title...",type:"input"},description:{default:"Some description...",type:"input"},link:{default:"http://www.otrs.com",type:"input"},linkText:{default:"Follow this link...",type:"input"},linkList:{default:[{text:"FirstLink - (External)",link:"http://www.otrs.com"},{text:"SecondLink - (Route)",link:"/home"}],type:"array"},imagePath:{default:"https://otrs.com/img/SampleImage.jpg",type:"resource"}}}}},l=Object(i.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"DesignSystem__Main"},[e("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),e("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),e("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[e("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),e("b-tabs",{staticClass:"DesignSystem__TabContent"},[e("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[e("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),e("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[e("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);l.options.__file="CommonContentCard.vue";n.default=l.exports},"BJ+R":function(t,n,e){t.exports=e.p+"img/SampleImage.6814ff4.jpg"},Iptl:function(t,n,e){"use strict";e("GkPX");var o=e("nS/B");n.a={components:{CommonNotice:function(){return e.e(113).then(e.bind(null,"mkLc"))},DocsExample:function(){return e.e(10).then(e.bind(null,"GD02"))},DocsComponentAPI:function(){return e.e(11).then(e.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},RxN1:function(t,n,e){"use strict";var o=e("jybZ");e.n(o).a},jybZ:function(t,n,e){}}]);