(window.webpackJsonp=window.webpackJsonp||[]).push([[368,46],{"+cb4":function(e,t,o){"use strict";o.r(t);var n=o("Iptl"),i=o("g17x"),s={name:"CommonDateTime",mixins:[n.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonDateTime",component:i.default,isGlobal:!0,example:{type:{default:"absolute",type:"select",options:[{value:"absolute",text:"absolute"},{value:"relative",text:"relative"},{value:"combined",text:"combined"}]},dateTime:{default:"2001-12-01 12:34:56",type:"input"},deltaDateTime:{type:"input"},deltaSeconds:{type:"input"},absoluteFormat:{default:"TimeLong",type:"select",options:[{value:"TimeLong",text:"TimeLong"},{value:"TimeShort",text:"TimeShort"},{value:"Date",text:"Date"}]},noAffix:{default:!1,type:"checkbox"},noTitle:{default:!1,type:"checkbox"},tooltipPlacement:{type:"select",options:[{value:null,text:"-"},{value:"top",text:"top"},{value:"topleft",text:"topleft"},{value:"topright",text:"topright"},{value:"right",text:"right"},{value:"righttop",text:"righttop"},{value:"rightbottom",text:"rightbottom"},{value:"bottom",text:"bottom"},{value:"bottomleft",text:"bottomleft"},{value:"bottomright",text:"bottomright"},{value:"left",text:"left"},{value:"lefttop",text:"lefttop"},{value:"leftbottom",text:"leftbottom"}]}}}}},r=o("psIG"),a=Object(r.a)(s,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"DesignSystem__Main"},[o("h1",{staticClass:"DesignSystem"},[e._v("\n        "+e._s(e.summary)+"\n        "),o("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n            "+e._s(e.version)+"\n        ")])],1),e._v(" "),o("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[o("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),o("b-tabs",{staticClass:"DesignSystem__TabContent"},[o("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[o("DocsExample",{attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,"is-global":e.isGlobal,props:e.props,events:e.events,slots:e.slots,example:e.example}})],1),e._v(" "),o("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[o("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);t.default=a.exports},Iptl:function(e,t,o){"use strict";o("2Tod"),o("ABKx"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("asZ9"),o("GkPX");var n=o("OvAC"),i=o.n(n),s=o("nS/B"),r=o("lOrp");function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}t.a={components:{CommonNotice:function(){return o.e(409).then(o.bind(null,"mkLc"))},DocsExample:function(){return o.e(92).then(o.bind(null,"GD02"))},DocsComponentAPI:function(){return o.e(95).then(o.bind(null,"8txu"))}},computed:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach(function(t){i()(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")},initialFrontend:function(){var e=this.componentNamespace.split("/");return e.length>1?e[1]:""}},Object(r.b)(["frontend"])),mounted:function(){var e=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},NAoP:function(e,t,o){"use strict";var n=o("F/wX"),i=o.n(n);t.a={props:{useSystemTimezone:{type:Boolean}},computed:{systemTimezone:function(){return this.$store&&this.$store.getters.config&&this.$store.getters.config.OTRSTimeZone?this.$store.getters.config.OTRSTimeZone:"UTC"},userTimezone:function(){var e="UTC";return this.$store&&this.$store.getters&&this.$store.getters.userInfo&&this.$store.getters.userInfo.UserTimeZone?e=this.$store.getters.userInfo.UserTimeZone:this.$store&&this.$store.getters&&this.$store.getters.config&&this.$store.getters.config.UserDefaultTimeZone&&(e=this.$store.getters.config.UserDefaultTimeZone),e}},methods:{localizeTimestamp:function(e){var t=i.a.tz(e,this.systemTimezone);return this.useSystemTimezone?{date:t,timezone:this.systemTimezone}:{date:t.clone().tz(this.userTimezone),timezone:this.userTimezone}}}}},g17x:function(e,t,o){"use strict";o.r(t);o("2Tod"),o("ABKx"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("Z8gF");var n=o("OvAC"),i=o.n(n),s=(o("e2Kn"),o("NAoP")),r=o("F/wX"),a=o.n(r),l=o("lOrp");function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}var m={name:"CommonDateTime",mixins:[s.a],props:{dateTime:{type:String},deltaDateTime:{type:String},deltaSeconds:{type:[Number,String]},absoluteFormat:{type:String,default:"TimeShort",validator:function(e){return-1!==["TimeLong","TimeShort","Date"].indexOf(e)}},noAffix:{type:Boolean,default:!1},noTitle:{type:Boolean,default:!1},type:{type:String,validator:function(e){return-1!==["absolute","relative","combined"].indexOf(e)}},tooltipPlacement:{type:String,default:"top"}},computed:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach(function(t){i()(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({},Object(l.b)(["language"]),{relativeTime:function(){var e;return this.language&&a.a.locale(this.language.toLowerCase().replace("_","-")),e=this.deltaDateTime?this.localizeTimestamp(this.deltaDateTime).date:this.$now.date,this.deltaSeconds?a.a.duration(parseInt(this.deltaSeconds,10),"seconds").humanize(!0):this.localizeTimestamp(this.dateTime).date.from(e,this.noAffix)},localType:function(){return this.type?this.type:this.$store&&this.$store.getters&&this.$store.getters.userInfo&&this.$store.getters.userInfo.UserDateTimeFormat?this.$store.getters.userInfo.UserDateTimeFormat:"relative"}}),created:function(){a.a.relativeTimeThreshold("h",24),a.a.relativeTimeThreshold("d",31),a.a.relativeTimeThreshold("M",12)}},p=o("psIG"),u=Object(p.a)(m,function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.deltaSeconds?o("span",[e._v("\n    "+e._s(e.relativeTime)+"\n")]):"absolute"!==e.localType||e.noTitle?"absolute"===e.localType&&e.noTitle?o("span",[e._v("\n    "+e._s(e._f("localize")(e.dateTime,e.absoluteFormat,e.useSystemTimezone))+"\n")]):"relative"!==e.localType||e.noTitle?"relative"===e.localType&&e.noTitle?o("span",[e._v("\n    "+e._s(e.relativeTime)+"\n")]):o("span",[e._v("\n    "+e._s(e.relativeTime)+" ("+e._s(e._f("localize")(e.dateTime,e.absoluteFormat,e.useSystemTimezone))+")\n")]):o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:{trigger:"hover",placement:e.tooltipPlacement},expression:"{ trigger: 'hover', placement: tooltipPlacement }"}],attrs:{title:e._f("localize")(e.dateTime,e.absoluteFormat,e.useSystemTimezone)}},[e._v("\n    "+e._s(e.relativeTime)+"\n")]):o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:{trigger:"hover",placement:e.tooltipPlacement},expression:"{ trigger: 'hover', placement: tooltipPlacement }"}],attrs:{title:e.relativeTime}},[e._v("\n    "+e._s(e._f("localize")(e.dateTime,e.absoluteFormat,e.useSystemTimezone))+"\n")])},[],!1,null,null,null);t.default=u.exports}}]);