(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{"5v/B":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(e,t,o){this.name=e,this.version=t,this.os=o}}();t.BrowserInfo=o;var n=function(){return function(t){this.version=t,this.name="node",this.os=e.platform}}();t.NodeInfo=n;var i=function(){return function(){this.bot=!0,this.name="bot",this.version=null,this.os=null}}();t.BotInfo=i;var s=3,r=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["vivaldi",/Vivaldi\/([0-9\.]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/Edg\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],a=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/],["Search Bot",/(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]];function l(e){var t=""!==e&&r.reduce(function(t,o){var n=o[0],i=o[1];if(t)return t;var s=i.exec(e);return!!s&&[n,s]},!1);if(!t)return null;var n=t[0],a=t[1];if("searchbot"===n)return new i;var l=a[1]&&a[1].split(/[._]/).slice(0,3);return l?l.length<s&&(l=l.concat(function(e){for(var t=[],o=0;o<e;o++)t.push("0");return t}(s-l.length))):l=[],new o(n,l.join("."),c(e))}function c(e){for(var t=0,o=a.length;t<o;t++){var n=a[t],i=n[0];if(n[1].test(e))return i}return null}function d(){return void 0!==e&&e.version?new n(e.version.slice(1)):null}t.detect=function(){return"undefined"!=typeof navigator?l(navigator.userAgent):d()},t.parseUserAgent=l,t.detectOS=c,t.getNodeVersion=d}).call(this,o("5IsQ"))},CC0I:function(e,t,o){"use strict";var n=o("ZW6s");o.n(n).a},Dcwd:function(e,t,o){"use strict";o.r(t);var n=o("Iptl"),i=(o("GkPX"),o("oMRA"),o("6d4m"),o("F/wX")),s=o.n(i),r=o("5v/B"),a=o("tb9w"),l=o("WlT7"),c=Object(r.detect)(),d={name:"CommonDebugger",components:{FormButton:function(){return Promise.all([o.e(1),o.e(4)]).then(o.bind(null,"dphA"))},FormSelect:function(){return Promise.all([o.e(0),o.e(2),o.e(22)]).then(o.bind(null,"cDBQ"))},CommonDialog:function(){return o.e(24).then(o.bind(null,"CqLK"))}},props:{app:{type:String,default:"OTRS"}},data:function(){return{minimized:!1,stopped:!1}},computed:{logLevel:{get:function(){return this.$store.getters["Plugins/Store/LoggerOptions/".concat(this.app,"/logLevel")]},set:function(e){a.b.includes(e)&&(this.$store.commit("Plugins/Store/LoggerOptions/".concat(this.app,"/logLevel"),{logLevel:e}),this.$log.info("Log level changed to `".concat(e,"`.")))}},logLevelOptions:function(){return a.b.map(function(e){return{id:e,label:e}})},emptyRecordingModalId:function(){return"emptyRecordingModal-".concat(this._uid)}},created:function(){var e=this;Object(l.a)(this.$store,this.app),this.$store.getters["Plugins/Store/LoggerOptions/".concat(this.app,"/logRecord")]&&this.$log.info("Log recording started on `".concat(this.logLevel,"` level...")),a.b.forEach(function(t){window[t]=function(){return e.minimized=!1,e.stopped=!1,a.b.includes(t)&&e.$store.commit("Plugins/Store/LoggerOptions/".concat(e.app,"/logLevel"),{logLevel:t}),e.startRecording(),e.$log.info("Log recording started on `".concat(e.logLevel,"` level...")),!0}})},methods:{startRecording:function(){this.$store.commit("Plugins/Store/LoggerOptions/".concat(this.app,"/logRecord"),{logRecord:!0})},stopRecording:function(){this.$store.commit("Plugins/Store/LoggerOptions/".concat(this.app,"/logRecord"),{logRecord:!1})},download:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.$log.recording.length){var t=document.createElement("a"),o=new Blob([JSON.stringify(this.$log.recording,null,4)],{type:"application/json"});c&&"ie"===c.name||this.downloadType&&"inline"===this.downloadType?t.setAttribute("target","_blank"):t.setAttribute("download","debug-".concat(s()().format(),".json")),t.href=window.URL.createObjectURL(o),document.body.appendChild(t),t.click(),window.URL.revokeObjectURL(t.href),t.remove(),this.$log.clear(),e&&(this.stopped=!1)}else this.$refs.emptyRecordingModal.open()},closeDialog:function(){this.$refs.emptyRecordingModal.close(),this.stopped=!1},stop:function(){this.stopRecording(),this.$store.commit("Plugins/Store/LoggerOptions/".concat(this.app,"/logLevel"),{logLevel:"info"}),this.$log.info("Log recording stopped, switched back to `info` level."),this.stopped=!0},minimize:function(){this.minimized=!0},maximize:function(){this.minimized=!1}}},u=(o("CC0I"),o("psIG")),m=Object(u.a)(d,function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.$store.getters["Plugins/Store/LoggerOptions/"+e.app+"/logRecord"]||e.stopped?o("div",{staticClass:"mx-3 my-2 mr-md-4 position-fixed Debugger"},[o("b-row",[e.minimized?o("b-col",{staticClass:"clearfix px-0",attrs:{md:"12"}},[o("CommonLink",{staticClass:"float-left text-center Debugger--Circle Debugger--Alert",on:{click:e.maximize}},[o("CommonIcon",{staticClass:"mt-3",attrs:{weight:"bold",icon:"controls-stop",size:"lg"}})],1)],1):e.stopped?o("b-col",{staticClass:"clearfix px-0",attrs:{md:"12"}},[o("CommonLink",{staticClass:"float-left text-center Debugger--Circle Debugger--Primary",attrs:{title:e._f("translate")("Download log file")},on:{click:function(t){return e.download(!0)}}},[o("CommonIcon",{staticClass:"mt-3",attrs:{icon:"download-bottom",size:"lg"}})],1)],1):o("b-col",{staticClass:"bg-white mb-3 shadow",attrs:{cols:"12"}},[o("b-row",[o("CommonLink",{staticClass:"Debugger__Icon",on:{click:e.minimize}},[o("CommonIcon",{attrs:{icon:"arrow-up-1"}})],1)],1),e._v(" "),o("b-row",[o("b-col",[o("div",{staticClass:"pt-2 Animation--Spinner"},[o("div",{staticClass:"bounce1"}),e._v(" "),o("div",{staticClass:"bounce2"}),e._v(" "),o("div",{staticClass:"bounce3"})])])],1),e._v(" "),o("b-row",[o("b-col",[o("p",{staticClass:"pt-4 text-center"},[e._v("\n                        "+e._s(e._f("translate")("Debugging mode active, log is being recorded..."))+"\n                    ")]),e._v(" "),o("p",{staticClass:"text-center"},[o("FormSelect",{attrs:{label:e._f("translate")("Log level"),options:e.logLevelOptions,clearable:!1},model:{value:e.logLevel,callback:function(t){e.logLevel=t},expression:"logLevel"}})],1)])],1),e._v(" "),o("b-row",{staticClass:"mb-3"},[o("b-col",{attrs:{cols:"6"}},[o("FormButton",{attrs:{size:"md",variant:"primary",block:""},on:{click:e.download}},[o("CommonIcon",{staticClass:"mr-2",attrs:{icon:"download-bottom"}}),e._v("\n                        "+e._s(e._f("translate")("Download Log File"))+"\n                    ")],1)],1),e._v(" "),o("b-col",{attrs:{cols:"6"}},[o("FormButton",{staticClass:"Debugger__StopButton",attrs:{size:"md",variant:"danger",block:""},on:{click:e.stop}},[o("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"controls-stop"}}),e._v("\n                        "+e._s(e._f("translate")("Stop Recording"))+"\n                    ")],1)],1)],1)],1)],1),e._v(" "),o("CommonDialog",{ref:"emptyRecordingModal",attrs:{id:e.emptyRecordingModalId,title:e._f("translate")("Empty log recording"),"hide-default-cancel-button":"","footer-class":"pull-right",lazy:""},on:{ok:e.closeDialog}},[e._v("\n        "+e._s(e._f("translate")("The log recording is currently empty. There is nothing to download at the moment."))+"\n    ")])],1):e._e()},[],!1,null,null,null).exports,p={name:"CommonDebugger",mixins:[n.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonDebugger",component:m,example:{app:{default:"DesignSystem",type:"resource"}},customCode:[{tag:"p",value:"Please open the browser console, and enter the desired log level, i.e. debug()"}]}}},g=Object(u.a)(p,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"DesignSystem__Main"},[o("h1",{staticClass:"DesignSystem"},[e._v("\n        "+e._s(e.summary)+"\n        "),o("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n            "+e._s(e.version)+"\n        ")])],1),e._v(" "),o("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[o("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),o("h2",{staticClass:"DesignSystem"},[e._v("\n        Activating the log recording mode\n    ")]),e._v(" "),o("p",[e._v("In order to activate the log recording mode, first choose your desired log level from the list:")]),e._v(" "),e._m(0),e._v(" "),o("p",[e._v("\n        Then, open your browser console (i.e. F12) and call the method with the same name as your log level. For\n        example, for debug level enter:\n    ")]),e._v(" "),o("pre",{staticClass:"DesignSystem"},[e._v("debug()")]),e._v(" "),o("p",[e._v("\n        Just press enter, and the debugger should show up. Then you have a possibility to either download the\n        current log, minimize the widget, or stop the recording alltogether. When you stop recording, the log will\n        still be available for download until you click the icon or reload the page. It's also possible to change\n        the log level mid-recording, but please note that it will be applicable only for subsequent logs.\n    ")]),e._v(" "),o("CommonNotice",{attrs:{title:"Recording mode will persist",text:"Please note that the recording mode will be preserved if you refresh the screen. You will need to\n        explicitly stop it before it disappears."}}),e._v(" "),o("b-tabs",{staticClass:"DesignSystem__TabContent"},[o("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[o("DocsExample",{attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,"custom-code":e.customCode,slots:e.slots,example:e.example}})],1),e._v(" "),o("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[o("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("debug")]),e._v(" "),o("li",[e._v("info")]),e._v(" "),o("li",[e._v("warn")]),e._v(" "),o("li",[e._v("error")]),e._v(" "),o("li",[e._v("fatal")])])}],!1,null,null,null);t.default=g.exports},Iptl:function(e,t,o){"use strict";o("GkPX");var n=o("nS/B");t.a={components:{CommonNotice:function(){return o.e(164).then(o.bind(null,"mkLc"))},DocsExample:function(){return o.e(21).then(o.bind(null,"GD02"))},DocsComponentAPI:function(){return o.e(23).then(o.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(n.b)(this.doc,"summary")},version:function(){return Object(n.b)(this.doc,"version")},description:function(){return Object(n.b)(this.doc,"description")},props:function(){return Object(n.a)(this.doc,"prop")},slots:function(){return Object(n.a)(this.doc,"slot")},events:function(){return Object(n.a)(this.doc,"event")},methods:function(){return Object(n.a)(this.doc,"method")}},mounted:function(){var e=this;this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},ZW6s:function(e,t,o){}}]);