(window.webpackJsonp=window.webpackJsonp||[]).push([[302,351],{Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),s=n.n(o),a=n("nS/B"),i=n("lOrp");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(344).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(74).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(77).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){s()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(a.b)(this.doc,"summary")},version:function(){return Object(a.b)(this.doc,"version")},description:function(){return Object(a.b)(this.doc,"description")},props:function(){return Object(a.a)(this.doc,"prop")},slots:function(){return Object(a.a)(this.doc,"slot")},events:function(){return Object(a.a)(this.doc,"event")},methods:function(){return Object(a.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(i.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},acmX:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),s=n("raa/"),a={name:"CommonRelativeDateTime",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonRelativeDateTime",component:s.default,isGlobal:!0,example:{deltaSeconds:{type:"input",subtype:"number"},dateTime:{default:"2001-12-01 12:34:56",type:"input"}}}}},i=n("psIG"),r=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,"is-global":t.isGlobal,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=r.exports},"raa/":function(t,e,n){"use strict";n.r(e);n("e2Kn");var o=n("F/wX"),s=n.n(o),a={name:"CommonRelativeDateTime",props:{dateTime:{type:String},deltaSeconds:{type:[Number,String]}},data:function(){return{localDeltaSeconds:null}},computed:{relativeDateTime:function(){var t=Math.abs(this.localDeltaSeconds),e=0,n=0,o=0;return t>=86400&&(e=parseInt(t/3600/24,10)),t>=3600&&(n=parseInt(t/3600%24,10)),0!==t&&(o=parseInt(t/60%60,10)),{Days:Math.abs(e)||0,Hours:Math.abs(n)||0,Minutes:Math.abs(o)||0}},localNegativeFlag:function(){return this.localDeltaSeconds<0},formatedRelativeDateTime:function(){var t="";return this.localNegativeFlag&&(t="- "),t+="".concat(this.$locale.translate("%sd",this.relativeDateTime.Days)," "),t+="".concat(this.$locale.translate("%sh",this.relativeDateTime.Hours)," "),t+=this.$locale.translate("%sm",this.relativeDateTime.Minutes),t}},watch:{deltaSeconds:function(){this.setLocalDeltaSeconds(this.deltaSeconds,this.dateTime)},dateTime:function(){this.setLocalDeltaSeconds(this.deltaSeconds,this.dateTime)},"$now.date":{handler:function(){this.localDeltaSeconds--}}},created:function(){this.setLocalDeltaSeconds(this.deltaSeconds,this.dateTime)},methods:{setLocalDeltaSeconds:function(t,e){var n=t;!t&&e&&(n=s()(e).unix()-s()().unix());return this.localDeltaSeconds=n||0,!0}}},i=n("psIG"),r=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n    "+this._s(this.formatedRelativeDateTime)+"\n")])},[],!1,null,null,null);e.default=r.exports}}]);