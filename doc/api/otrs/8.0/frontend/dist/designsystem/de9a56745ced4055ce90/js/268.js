(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{"+J7U":function(e,t,s){var o,a,n=s("We69"),i=s("4feL"),r=0,l=0;e.exports=function(e,t,s){var c=t&&s||0,d=t||[],m=(e=e||{}).node||o,u=void 0!==e.clockseq?e.clockseq:a;if(null==m||null==u){var h=n();null==m&&(m=o=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==u&&(u=a=16383&(h[6]<<8|h[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:l+1,f=p-r+(v-l)/1e4;if(f<0&&void 0===e.clockseq&&(u=u+1&16383),(f<0||p>r)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");r=p,l=v,a=u;var b=(1e4*(268435455&(p+=122192928e5))+v)%4294967296;d[c++]=b>>>24&255,d[c++]=b>>>16&255,d[c++]=b>>>8&255,d[c++]=255&b;var g=p/4294967296*1e4&268435455;d[c++]=g>>>8&255,d[c++]=255&g,d[c++]=g>>>24&15|16,d[c++]=g>>>16&255,d[c++]=u>>>8|128,d[c++]=255&u;for(var y=0;y<6;++y)d[c+y]=m[y];return t||i(d)}},"4feL":function(e,t){for(var s=[],o=0;o<256;++o)s[o]=(o+256).toString(16).substr(1);e.exports=function(e,t){var o=t||0,a=s;return[a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]]].join("")}},Iptl:function(e,t,s){"use strict";s("2Tod"),s("ABKx"),s("W1QL"),s("K/PF"),s("t91x"),s("75LO"),s("asZ9"),s("GkPX");var o=s("OvAC"),a=s.n(o),n=s("nS/B"),i=s("lOrp");function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,o)}return s}t.a={components:{CommonNotice:function(){return s.e(386).then(s.bind(null,"mkLc"))},DocsExample:function(){return s.e(85).then(s.bind(null,"GD02"))},DocsComponentAPI:function(){return s.e(88).then(s.bind(null,"8txu"))}},computed:function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach(function(t){a()(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}({doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(n.b)(this.doc,"summary")},version:function(){return Object(n.b)(this.doc,"version")},description:function(){return Object(n.b)(this.doc,"description")},props:function(){return Object(n.a)(this.doc,"prop")},slots:function(){return Object(n.a)(this.doc,"slot")},events:function(){return Object(n.a)(this.doc,"event")},methods:function(){return Object(n.a)(this.doc,"method")},initialFrontend:function(){var e=this.componentNamespace.split("/");return e.length>1?e[1]:""}},Object(i.b)(["frontend"])),mounted:function(){var e=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},We69:function(e,t){var s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(s){var o=new Uint8Array(16);e.exports=function(){return s(o),o}}else{var a=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}},rpZP:function(e,t,s){"use strict";var o=s("+J7U"),a=s.n(o);t.a={data:function(){return{uuid:this.getUuid()}},methods:{getUuid:function(){return a()()}}}},tegL:function(e,t,s){"use strict";s.r(t);var o=s("Iptl"),a=s("B0ip"),n=s("rpZP"),i={name:"CommonMessages",mixins:[o.a,n.a],data:function(){var e=this;return{docVersion:"1.0.2",componentNamespace:"Components",componentPath:"Components/Common/CommonMessages",component:a.default,isGlobal:!0,hasOwnApi:!0,example:{noAppReloadMessage:{default:!0}},frostModeId:null,customCode:[{tag:"b-button",directives:[],props:{variant:"info"},on:{click:function(){e.$bus.$emit("showToastMessage",{id:"infoToast",heading:"Info Toast Heading",text:"Info toast text with a %s. It will fade away automatically.",textPlaceholders:["placeholder"]})}},value:"Info toast"},{tag:"b-button",directives:[],class:{"ml-2":!0},props:{variant:"success"},on:{click:function(){e.$bus.$emit("showToastMessage",{id:"successToast",heading:"Success Toast Heading",text:"Success toast text. Click to dismiss and execute the callback.",variant:"success",persistent:!0,callback:function(){e.$refs.docsExample.$refs.callbackModal.show()}})}},value:"Success toast w/ callback"},{tag:"b-button",directives:[],class:{"ml-2":!0},props:{variant:"warning"},on:{click:function(){e.$bus.$emit("showToastMessage",{id:"warningToast",heading:"Warning Toast Heading",text:"Warning toast text. Will persist, but will be dismissed on click.",variant:"warning",persistent:!0})}},value:"Warning toast"},{tag:"b-button",directives:[],class:{"ml-2":!0},props:{variant:"danger"},on:{click:function(){e.$bus.$emit("showToastMessage",{id:"dangerToast",heading:"Danger Toast Heading",text:"Danger toast text. Will persist and cannot be dismissed.",variant:"danger",persistent:!0,dismissible:!1})}},value:"Error toast (persistent)"},{tag:"b-modal",directives:[],props:{okOnly:!0,size:"sm",centered:!0,lazy:!0,"hide-header":!0},ref:"callbackModal",value:"Shown by the callback!"},{tag:"br"},{tag:"b-button",directives:[],on:{click:function(){e.$bus.$emit("showModalMessage",{id:"okModal",text:"Modal with an %s button.",textPlaceholders:["OK"],buttonBehavior:"ok"})}},value:"OK modal"},{tag:"b-button",directives:[],class:{"ml-2":!0},props:{variant:"dark"},on:{click:function(){e.$bus.$emit("showModalMessage",{id:"yesNoModal",heading:"Are you sure?",text:"Modal with a Yes/No choice and a confirm callback.",buttonBehavior:"yesNo",okCallback:function(){e.$refs.docsExample.$refs.callbackModal.show()}})}},value:"Yes/No modal"},{tag:"b-button",directives:[],class:{"ml-2":!0},props:{variant:"light"},on:{click:function(){e.$bus.$emit("showModalMessage",{id:"okCancelModal",heading:"All your base are belong to us.",text:"Modal with an OK/Cancel choice, both confirm and deny callbacks and a close\n                                    button.",buttonBehavior:"okCancel",allowClose:!0,okCallback:function(){e.$refs.docsExample.$refs.callbackModal.show()},cancelCallback:function(){e.$refs.docsExample.$refs.callbackModal.show()}})}},value:"OK/Cancel modal"},{tag:"br"},{tag:"br"},{tag:"b-button",directives:[],props:{variant:"outline-primary"},on:{click:function(){e.frostModeId=e.getUuid(),e.$bus.$emit("activateFrostMode",e.frostModeId)}},value:"Activate frost mode"},{tag:"b-button",class:{"ml-2":!0},directives:[],props:{variant:"outline-secondary"},on:{click:function(){e.$bus.$emit("deactivateFrostMode",e.frostModeId),e.frostModeId=null}},value:"Deactivate frost mode"},{tag:"b-button",directives:[],class:{"ml-2":!0},props:{variant:"outline-info"},on:{click:function(){e.$bus.$emit("showToastMessage",{id:"infoToastFrostMode",heading:"Frost Toast",text:"My callback works in frost mode too. Go on, click at me, I dare you!",variant:"info",callback:function(){e.$refs.docsExample.$refs.callbackModal.show()},frostModeId:e.frostModeId})}},value:"Info toast w/ callback (frost mode)"},{tag:"b-button",directives:[],class:{"ml-2":!0},props:{variant:"outline-dark"},on:{click:function(){e.$bus.$emit("showModalMessage",{id:"okModalFrostMode",text:"I work in the frost mode too!",buttonBehavior:"ok",frostModeId:e.frostModeId})}},value:"OK modal (frost mode)"}]}}},r=s("psIG"),l=Object(r.a)(i,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"DesignSystem__Main"},[s("h1",{staticClass:"DesignSystem"},[e._v("\n            "+e._s(e.summary)+"\n            "),s("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n                "+e._s(e.version)+"\n            ")])],1),e._v(" "),s("p",[e._v("\n            "+e._s(e.description)+"\n        ")]),e._v(" "),e.docVersion!==e.version?[s("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                    ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),s("p",[e._v("\n            This is a global component with its own API that is supposed to be included in the app on the base level. In\n            order to display a message to the user, you can use one of the methods found below.\n        ")]),e._v(" "),s("h2",{staticClass:"DesignSystem"},[e._v("\n            Toast Messages\n        ")]),e._v(" "),s("p",[e._v("Toast messages can be spawned by emitting on the global event bus with the message payload:")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('showToastMessage', message);")]),e._v(" "),e._m(0),e._v(" "),s("p",[e._v("\n            In order to dismiss the toast message from code, without waiting for it to disappear, emit a separate event\n            with the same message ID set earlier:\n        ")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('hideToastMessage', id);")]),e._v(" "),e._m(1),e._v(" "),s("h2",{staticClass:"DesignSystem"},[e._v("\n            Modal Messages\n        ")]),e._v(" "),s("p",[e._v("Modal messages can be also triggered by emitting on the global event bus with the message payload:")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('showModalMessage', message);")]),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("\n            In order to forcefully dismiss the modal message from code, emit a separate event with the same message ID\n            set earlier:\n        ")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('hideModalMessage', id);")]),e._v(" "),e._m(3),e._v(" "),s("CommonNotice",{attrs:{text:"Modal messages support only a single message at one time. If you trigger another message while\n                the modal is still open, the component will just throw an error in the browser console and preserve the\n                last message on screen. If your use-case is about showing multiple messages that could be displayed at\n                the same time, please consider using toast messages instead.",title:"One at a time",type:"Warning"}}),e._v(" "),s("h2",{staticClass:"DesignSystem"},[e._v("\n            Recommended Usage\n        ")]),e._v(" "),s("p",[e._v("\n            It is strongly recommended to primarily use toast messages for informing users about the application events.\n            They support multiple messages at the same time, and will be automatically dismissed by default. An example\n            includes an error message about failed action, or confirmation message that an action was successfully\n            executed.\n        ")]),e._v(" "),s("p",[e._v("\n            Only in case you need to explicitly block the user from interacting with the app should you use modal\n            messages. Even in this case you need to be extra careful not to trigger them in an automated way, since they\n            support only one message at a time. An example could be a confirmation dialog in case an entity will\n            irrevocably be deleted, or if the user is asked to acknowledge an important information.\n        ")]),e._v(" "),s("h2",{staticClass:"DesignSystem"},[e._v("\n            Frost Mode\n        ")]),e._v(" "),s("p",[e._v('\n            Both toast and modal messages support the "frost mode". It can be used to limit the user interaction with\n            the messages in case they don\'t originate from the current task. The filtering is done via an identifier\n            which is unique for the current view (i.e. one that activated the frost mode).\n        ')]),e._v(" "),s("p",[e._v("\n            To activate the frost mode, simply emit the following event with a randomly generated identifier:\n        ")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('activateFrostMode', '473d8240-5b77-11e9-befd-0b344ce825c2');")]),e._v(" "),s("CommonNotice",{attrs:{text:"If frost mode is activated by several different views, only the identifier of the last caller\n                that did it will be considered the valid one. This behavior will try to rectify an unexpected state\n                where one caller forgot to deactivate the frost mode.",title:"Last caller wins",type:"Warning"}}),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("For example, following modal message will be blocked:")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('showModalMessage', {\n    id: 'anExternalModalMessage',\n    text: translatable('You will never see me :('),\n    okCallback: () => {\n        // Do something when OK is clicked.\n    },\n});")]),e._v(" "),s("p",[e._v("\n            However, the following modal message will be shown to the user, since it contains the same identifier used\n            to activate the frost mode:\n        ")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('showModalMessage', {\n    id: 'anInternalModalMessage',\n    text: translatable('I work even in frost mode!'),\n    okCallback: () => {\n        // Do something when OK is clicked.\n    },\n    frostModeId: '473d8240-5b77-11e9-befd-0b344ce825c2',\n});")]),e._v(" "),s("CommonNotice",{attrs:{text:"It's always a good practice to save the frost mode identifier in the local data model for\n                further usage. Remember, you will still be required to deactivate the frost mode after it's not\n                applicable anymore (i.e. user task has been finished).",title:"Keep track of the frost mode identifier locally"}}),e._v(" "),s("p",[e._v("\n            To deactivate the frost mode, just emit the following event with the same identifier used to activate it:\n        ")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('deactivateFrostMode', '473d8240-5b77-11e9-befd-0b344ce825c2');")]),e._v(" "),s("CommonNotice",{attrs:{text:"If supplied identifier during the deactivation call is not the same as one used to activate\n                the current frost mode, it will simply be ignored, and the frost mode will persist.",title:"Make sure your deactivation identifier is valid",type:"Warning"}}),e._v(" "),s("h2",{staticClass:"DesignSystem"},[e._v("\n            Application Reload Message\n        ")]),e._v(" "),e._m(5),e._v(" "),s("b-tabs",{staticClass:"DesignSystem__TabContent"},[s("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[s("DocsExample",{ref:"docsExample",attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,"custom-code":e.customCode,slots:e.slots,"is-global":e.isGlobal,"has-own-api":e.hasOwnApi,example:e.example}})],1),e._v(" "),s("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[s("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            Please take a look at the API Documentation for "),t("code",[this._v("showToastMessage()")]),this._v(" method for the description\n            of the message payload and supported features.\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            It's also possible to automatically dismiss any shown toast messages every time app navigates to another\n            route. Just make sure that "),t("code",[this._v("autoClearToastMessages")]),this._v(" prop is set to true, this is a global\n            configuration.\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            Please take a look at the API Documentation for "),t("code",[this._v("showModalMessage()")]),this._v(" method for the description\n            of the message payload and supported features.\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            Please note that modal messages are of blocking nature by default. If you want to allow users to dismiss the\n            modal without actually selecting one of the offered choices, you can trigger it with "),t("code",[this._v("allowClose")]),this._v("\n            flag. In this case, users will be able to close the dialog via a close button too, or by clicking anywhere\n            outside it, or via the escape key.\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            When the frost mode is active, all toast callbacks (i.e. on "),t("em",[this._v("click")]),this._v(") and complete modal messages will\n            be blocked with a suitable message, unless they contain the same identifier for their\n            "),t("code",[this._v("frostModeId")]),this._v(" message key as the one used to activate it.\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            When this component is included in the app, an application manifest check will be executed in the background\n            every 30 seconds. If the manifest changes (i.e. app has been rebuilt), a suitable toast message will inform\n            user about it and offer a way to reload the app. In case this is not desired, the feature can be disabled\n            via "),t("code",[this._v("noAppReloadMessage")]),this._v(" prop, just make sure it's set to true.\n        ")])}],!1,null,null,null);t.default=l.exports}}]);