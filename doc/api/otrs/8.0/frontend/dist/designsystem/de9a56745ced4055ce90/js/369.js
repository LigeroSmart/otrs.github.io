(window.webpackJsonp=window.webpackJsonp||[]).push([[369,110],{Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),s=n.n(o),r=n("nS/B"),i=n("lOrp");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(386).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(85).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(88).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach(function(e){s()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(r.b)(this.doc,"summary")},version:function(){return Object(r.b)(this.doc,"version")},description:function(){return Object(r.b)(this.doc,"description")},props:function(){return Object(r.a)(this.doc,"prop")},slots:function(){return Object(r.a)(this.doc,"slot")},events:function(){return Object(r.a)(this.doc,"event")},methods:function(){return Object(r.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(i.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},hOs3:function(t,e,n){"use strict";n.r(e);n("e2Kn");var o={name:"CommonTicker",props:{texts:{type:Array,required:!0},interval:{type:Number,default:5e3}},data:function(){return{currentIndex:0,intervalId:null}},watch:{texts:function(t,e){JSON.stringify(t)!==JSON.stringify(e)&&(this.clearIntervalId(),this.setIntervalId())},interval:function(t,e){t!==e&&(this.clearIntervalId(),this.setIntervalId())}},mounted:function(){this.setIntervalId()},beforeDestroy:function(){this.clearIntervalId()},methods:{setIntervalId:function(){var t=this;this.intervalId||(this.intervalId=setInterval(function(){t.currentIndex+1<t.texts.length?t.currentIndex++:t.currentIndex=0},this.interval))},clearIntervalId:function(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null,this.currentIndex=0)}}},s=n("psIG"),r=Object(s.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.texts[this.currentIndex]))])},[],!1,null,null,null);e.default=r.exports},jj06:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),s=n("hOs3"),r={name:"CommonTicker",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonTicker",component:s.default,example:{texts:{default:["Text 1","Text 2","Text 3","Text 4","Text 5"],type:"array"},interval:{default:5e3,type:"input",subType:"number"}}}}},i=n("psIG"),c=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=c.exports}}]);