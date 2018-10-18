(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{CC0I:function(t,e,o){"use strict";var n=o("J3Yp");o.n(n).a},Dcwd:function(t,e,o){"use strict";o.r(e);var n=o("Iptl"),s=(o("GkPX"),o("W1QL"),o("oMRA"),o("6d4m"),o("gki9")),i=o.n(s),r=o("F/wX"),l=o.n(r),c=o("5v/B"),a=o("lOrp"),d=o("tb9w"),m=Object(c.detect)(),u={name:"CommonDebugger",components:{FormButton:function(){return o.e(5).then(o.bind(null,"dphA"))},FormSelect:function(){return Promise.all([o.e(3),o.e(2),o.e(100)]).then(o.bind(null,"H8X1"))},CommonDialog:function(){return o.e(117).then(o.bind(null,"CqLK"))}},data:function(){return{minimized:!1,stopped:!1}},computed:i()({logLevel:{get:function(){return this.$store.getters.logLevel},set:function(t){d.b.includes(t)&&(this.$store.commit("logLevel",{logLevel:t}),this.$log.info("Log level changed to `".concat(t,"`.")))}},logLevelOptions:function(){return d.b.map(function(t){return{id:t,label:t}})},emptyRecordingModalId:function(){return"emptyRecordingModal-".concat(this._uid)}},Object(a.b)(["logRecord"])),created:function(){var t=this;this.logRecord&&this.$log.info("Log recording started on `".concat(this.logLevel,"` level...")),d.b.forEach(function(e){window[e]=function(){return t.minimized=!1,t.stopped=!1,d.b.includes(e)&&t.$store.commit("logLevel",{logLevel:e}),t.startRecording(),t.$log.info("Log recording started on `".concat(t.logLevel,"` level...")),!0}})},methods:{startRecording:function(){this.$store.commit("logRecord",{logRecord:!0})},stopRecording:function(){this.$store.commit("logRecord",{logRecord:!1})},download:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.$log.recording.length){var e=document.createElement("a"),o=new Blob([JSON.stringify(this.$log.recording,null,4)],{type:"application/json"});m&&"ie"===m.name||this.downloadType&&"inline"===this.downloadType?e.setAttribute("target","_blank"):e.setAttribute("download","debug-".concat(l()().format(),".json")),e.href=window.URL.createObjectURL(o),document.body.appendChild(e),e.click(),window.URL.revokeObjectURL(e.href),e.remove(),this.$log.clear(),t&&(this.stopped=!1)}else this.$refs.emptyRecordingModal.open()},closeDialog:function(){this.$refs.emptyRecordingModal.close(),this.stopped=!1},stop:function(){this.stopRecording(),this.$store.commit("logLevel",{logLevel:"info"}),this.$log.info("Log recording stopped, switched back to `info` level."),this.stopped=!0},minimize:function(){this.minimized=!0},maximize:function(){this.minimized=!1}}},p=(o("CC0I"),o("psIG")),g=Object(p.a)(u,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.logRecord||t.stopped?o("div",{staticClass:"mx-3 my-2 mr-md-4 position-fixed Debugger"},[o("b-row",[t.minimized?o("b-col",{staticClass:"clearfix px-0",attrs:{md:"12"}},[o("CommonLink",{staticClass:"float-left text-center Debugger--Circle Debugger--Alert",on:{click:t.maximize}},[o("CommonIcon",{staticClass:"mt-3",attrs:{icon:"stop",size:"lg"}})],1)],1):t.stopped?o("b-col",{staticClass:"clearfix px-0",attrs:{md:"12"}},[o("CommonLink",{staticClass:"float-left text-center Debugger--Circle Debugger--Primary",attrs:{title:t._f("translate")("Download log file")},on:{click:function(e){t.download(!0)}}},[o("CommonIcon",{staticClass:"mt-3",attrs:{icon:"download",size:"lg"}})],1)],1):o("b-col",{staticClass:"bg-white mb-3 shadow",attrs:{cols:"12"}},[o("b-row",[o("CommonLink",{staticClass:"Debugger__Icon",on:{click:t.minimize}},[o("CommonIcon",{attrs:{icon:"chevron-up"}})],1)],1),t._v(" "),o("b-row",[o("b-col",[o("div",{staticClass:"pt-2 Animation--Spinner"},[o("div",{staticClass:"bounce1"}),t._v(" "),o("div",{staticClass:"bounce2"}),t._v(" "),o("div",{staticClass:"bounce3"})])])],1),t._v(" "),o("b-row",[o("b-col",[o("p",{staticClass:"pt-4 text-center"},[t._v("\n                        "+t._s(t._f("translate")("Debugging mode active, log is being recorded..."))+"\n                    ")]),t._v(" "),o("p",{staticClass:"text-center"},[o("FormSelect",{attrs:{label:t._f("translate")("Log level"),options:t.logLevelOptions,clearable:!1},model:{value:t.logLevel,callback:function(e){t.logLevel=e},expression:"logLevel"}})],1)])],1),t._v(" "),o("b-row",{staticClass:"mb-3"},[o("b-col",{attrs:{cols:"6"}},[o("FormButton",{attrs:{size:"md",variant:"primary",block:""},on:{click:t.download}},[o("CommonIcon",{staticClass:"mr-2",attrs:{icon:"download"}}),t._v("\n                        "+t._s(t._f("translate")("Download log file"))+"\n                    ")],1)],1),t._v(" "),o("b-col",{attrs:{cols:"6"}},[o("FormButton",{staticClass:"Debugger__StopButton",attrs:{size:"md",variant:"danger",block:""},on:{click:t.stop}},[o("CommonIcon",{staticClass:"mr-2",attrs:{icon:"stop"}}),t._v("\n                        "+t._s(t._f("translate")("Stop recording"))+"\n                    ")],1)],1)],1)],1)],1),t._v(" "),o("CommonDialog",{ref:"emptyRecordingModal",attrs:{id:t.emptyRecordingModalId,title:t._f("translate")("Empty log recording"),"hide-default-cancel-button":"","footer-class":"pull-right",lazy:""},on:{ok:t.closeDialog}},[t._v("\n        "+t._s(t._f("translate")("Log recording is currently empty, there is nothing to download at the moment."))+"\n    ")])],1):t._e()},[],!1,null,null,null);g.options.__file="CommonDebugger.vue";var v=g.exports,b={name:"CommonDebugger",mixins:[n.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonDebugger",component:v,example:{},customCode:[{tag:"p",value:"Please open the browser console, and enter the desired log level, i.e. debug()"}]}}},h=Object(p.a)(b,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main"},[o("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),o("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),o("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[o("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),o("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),t._v(" "),o("h2",{staticClass:"design-system"},[t._v("\n        Activating the log recording mode\n    ")]),t._v(" "),o("p",[t._v("In order to activate the log recording mode, first choose your desired log level from the list:")]),t._v(" "),t._m(0),t._v(" "),o("p",[t._v("\n        Then, open your browser console (i.e. F12) and call the method with the same name as your log level. For\n        example, for debug level enter:\n    ")]),t._v(" "),o("pre",{staticClass:"design-system"},[t._v("debug()")]),t._v(" "),o("p",[t._v("\n        Just press enter, and the debugger should show up. Then you have a possibility to either download the\n        current log, minimize the widget, or stop the recording alltogether. When you stop recording, the log will\n        still be available for download until you click the icon or reload the page. It's also possible to change\n        the log level mid-recording, but please note that it will be applicable only for subsequent logs.\n    ")]),t._v(" "),o("CommonNotice",{attrs:{title:"Recording mode will persist",text:"Please note that the recording mode will be preserved if you refresh the screen. You will need to\n        explicitly stop it before it disappears."}}),t._v(" "),o("b-tabs",{staticClass:"tab-content"},[o("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[o("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,"custom-code":t.customCode,slots:t.slots,example:t.example}})],1),t._v(" "),o("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[o("h2",{staticClass:"design-system"},[t._v("Header Level 2")]),t._v(" "),o("ol",{staticClass:"design-system"},[o("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),o("li",[t._v("Aliquam tincidunt mauris eu risus.")])]),t._v(" "),o("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[o("b-row",[o("b-col",{attrs:{sm:"6"}},[o("div",[o("h5",{staticClass:"design-system"},[t._v("Do")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),t._v(" "),o("b-col",{attrs:{sm:"6"}},[o("div",[o("h5",{staticClass:"design-system"},[t._v("Don't")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),t._v(" "),o("h3",{staticClass:"design-system"},[t._v("Header Level 3")]),t._v(" "),o("ul",{staticClass:"design-system"},[o("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),o("li",[t._v("Aliquam tincidunt mauris eu risus.")])])],1),t._v(" "),o("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[o("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[t._v("debug")]),t._v(" "),o("li",[t._v("info")]),t._v(" "),o("li",[t._v("warn")]),t._v(" "),o("li",[t._v("error")]),t._v(" "),o("li",[t._v("fatal")])])}],!1,null,null,null);h.options.__file="CommonDebugger.vue";e.default=h.exports},Iptl:function(t,e,o){"use strict";o("GkPX");var n=o("nS/B");e.a={components:{CommonNotice:function(){return o.e(115).then(o.bind(null,"mkLc"))},DocsExample:function(){return o.e(12).then(o.bind(null,"GD02"))},DocsComponentAPI:function(){return o.e(11).then(o.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(n.b)(this.doc,"summary")},version:function(){return Object(n.b)(this.doc,"version")},description:function(){return Object(n.b)(this.doc,"description")},props:function(){return Object(n.a)(this.doc,"prop")},slots:function(){return Object(n.a)(this.doc,"slot")},events:function(){return Object(n.a)(this.doc,"event")},methods:function(){return Object(n.a)(this.doc,"method")}}}},J3Yp:function(t,e,o){},OvAC:function(t,e){t.exports=function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}},gki9:function(t,e,o){var n=o("OvAC");t.exports=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},s=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),s.forEach(function(e){n(t,e,o[e])})}return t}}}]);