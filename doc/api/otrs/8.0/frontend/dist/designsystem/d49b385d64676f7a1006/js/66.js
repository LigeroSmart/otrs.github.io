(window.webpackJsonp=window.webpackJsonp||[]).push([[66,6],{A86J:function(t,e,n){"use strict";e.a={directives:{focus:{inserted:function(t,e){e.value&&t.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},CGHn:function(t,e,n){"use strict";var a=n("Kyb9");n.n(a).a},Iptl:function(t,e,n){"use strict";n("GkPX");var a=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(112).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(10).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(11).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(a.b)(this.doc,"summary")},version:function(){return Object(a.b)(this.doc,"version")},description:function(){return Object(a.b)(this.doc,"description")},props:function(){return Object(a.a)(this.doc,"prop")},slots:function(){return Object(a.a)(this.doc,"slot")},events:function(){return Object(a.a)(this.doc,"event")},methods:function(){return Object(a.a)(this.doc,"method")}}}},Kyb9:function(t,e,n){},MKqb:function(t,e,n){"use strict";n.r(e);n("it7j"),n("lQyR"),n("YhIr"),n("GkPX"),n("W1QL"),n("K/PF"),n("75LO");var a=n("gki9"),o=n.n(a),r=n("5v/B"),s=n("A86J"),i=n("lOrp"),u=Object(r.detect)();function c(t){t.focus(),t.classList.add("Avatar__ChangeButton--Focus")}var l={name:"FormAvatar",directives:{focus:{inserted:function(t,e){e.value&&c(t)}}},mixins:[s.a],props:{value:{type:String},name:{type:String},error:{type:String},label:{type:String},required:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1}},data:function(){return{image:void 0,uploadText:"",uploadTextType:""}},computed:o()({},Object(i.b)(["userInfo"]),{initials:function(){var t="";return this.$store&&this.$store.getters&&void 0!==this.$store.getters.userInfo&&Object.keys(this.$store.getters.userInfo).length?(t+=this.$store.getters.userInfo.UserFirstname.charAt(0).toUpperCase(),t+=this.$store.getters.userInfo.UserLastname.charAt(0).toUpperCase()):t="CU",t},avatarImage:function(){if(null!==this.value&&void 0!==this.value)return this.value}}),updated:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("FormAvatar::Updated")})},methods:{onEnterSpaceInput:function(t){return"firefox"!==u.name||(t.preventDefault(),this.$el.querySelector("input").click(),!1)},onTabInput:function(t){if("firefox"!==u.name||t.shiftKey)return!0;t.preventDefault();var e=Array.from(this.$el.form.querySelectorAll(".b-form-group")).find(function(t){return!!t.classList.contains("b-form-group")&&!t.querySelector("label.Avatar__ChangeButton")});return!e||(e.querySelector("label").click(),!0)},onBlur:function(){!function(t){t.classList.remove("Avatar__ChangeButton--Focus")}(this.$el.querySelector("label.Avatar__ChangeButton"))},onFocus:function(){c(this.$el.querySelector("label.Avatar__ChangeButton"))},uploadImage:function(){var t=this;if(this.image){if(this.image.size>1048576)return this.$refs.uploadImage.reset(),this.uploadText="Image size exceeded (1MB).",this.uploadTextType="danger",void this.$nextTick(function(){t.$test.setFlag("FormAvatar::ImageTooBig")});var e=new FileReader;e.addEventListener("load",function(e){t.$emit("input",e.target.result),t.uploadTextType="",t.uploadText=""}),e.addEventListener("error",function(){t.uploadText="An error occurred during image upload.",t.uploadTextType="danger"}),e.readAsDataURL(this.image)}},removeAvatar:function(){this.$refs.uploadImage.reset(),this.$emit("input",void 0)},dismissStatus:function(){var t=this;setTimeout(function(){t.uploadTextType="",t.uploadText=""},2e3)}}},p=(n("cI0P"),n("CGHn"),n("psIG")),d=Object(p.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],attrs:{state:Boolean(t.error)?"invalid":null,description:t._f("translate")(t.description),"invalid-feedback":t._f("translate")(t.error)}},[n("div",{staticClass:"Form__Avatar"},[n("div",{staticClass:"Avatar Avatar__Image"},[t.avatarImage?n("img",{attrs:{src:t.avatarImage}}):n("span",[t._v(t._s(t.initials))])]),t._v(" "),n("label",{directives:[{name:"focus",rawName:"v-focus",value:t.autoFocus,expression:"autoFocus"}],staticClass:"btn btn-secondary Button Button--Secondary Avatar__ChangeButton"},[t._v("\n            "+t._s(t._f("translate")("Change Avatar Image"))+"\n            "),n("b-form-file",{ref:"uploadImage",attrs:{multiple:!1,accept:"image/*",plain:""},on:{input:t.uploadImage},nativeOn:{blur:function(e){return t.onBlur(e)},focus:function(e){return t.onFocus(e)},keyup:[function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.onEnterSpaceInput(e):null},function(e){return"button"in e||!t._k(e.keyCode,"space",32,e.key," ")?t.onEnterSpaceInput(e):null}],keydown:function(e){return"button"in e||!t._k(e.keyCode,"tab",9,e.key,"Tab")?t.onTabInput(e):null}},model:{value:t.image,callback:function(e){t.image=e},expression:"image"}})],1),t._v(" "),t.value?n("i",{staticClass:"fas fa-times fa-md Avatar__Remove",attrs:{title:t._f("translate")("Remove avatar")},on:{click:t.removeAvatar}}):t._e(),t._v(" "),n("transition",{attrs:{"enter-class":"Transition--SlideFadeEnter","enter-active-class":"Transition--SlideFadeEnterActive","leave-active-class":"Transition--SlideFadeLeaveActive","leave-to-class":"Transition--SlideFadeLeaveTo"},on:{"after-enter":t.dismissStatus}},[t.uploadText?n("small",{staticClass:"form-text Form__Help",class:"text-"+t.uploadTextType},["success"==t.uploadTextType?n("i",{staticClass:"fas fa-check"}):n("i",{staticClass:"fas fa-exclamation-circle"}),t._v("\n                "+t._s(t._f("translate")(t.uploadText))+"\n            ")]):t._e()])],1)])},[],!1,null,null,null);d.options.__file="index.vue";e.default=d.exports},OvAC:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},"Zgm+":function(t,e,n){},cI0P:function(t,e,n){"use strict";var a=n("Zgm+");n.n(a).a},gki9:function(t,e,n){var a=n("OvAC");t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){a(t,e,n[e])})}return t}},u8Vv:function(t,e,n){"use strict";n.r(e);var a=n("Iptl"),o=n("MKqb"),r={name:"FormAvatar",mixins:[a.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormAvatar",value:void 0,component:o.default,example:{error:{type:"input"},name:{type:"input"},required:{type:"checkbox",default:!1},description:{type:"input"},hidden:{type:"checkbox",default:!1}}}}},s=n("psIG"),i=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);i.options.__file="FormAvatar.vue";e.default=i.exports}}]);