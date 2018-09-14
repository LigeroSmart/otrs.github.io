(window.webpackJsonp=window.webpackJsonp||[]).push([[68,96],{CGHn:function(t,e,s){"use strict";var a=s("wUKL");s.n(a).a},Iptl:function(t,e,s){"use strict";var a=s("nS/B");e.a={components:{CommonNotice:function(){return s.e(117).then(s.bind(null,"mkLc"))},DocsExample:function(){return s.e(7).then(s.bind(null,"GD02"))},DocsComponentAPI:function(){return s.e(8).then(s.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(a.b)(this.doc,"summary")},version:function(){return Object(a.b)(this.doc,"version")},description:function(){return Object(a.b)(this.doc,"description")},props:function(){return Object(a.a)(this.doc,"prop")},slots:function(){return Object(a.a)(this.doc,"slot")},events:function(){return Object(a.a)(this.doc,"event")},methods:function(){return Object(a.a)(this.doc,"method")}}}},Kz1y:function(t,e,s){"use strict";e.__esModule=!0;var a,n=s("PSh9"),i=(a=n)&&a.__esModule?a:{default:a};e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t}},MKqb:function(t,e,s){"use strict";s.r(e);var a=s("tZmG"),n=s.n(a),i=s("Kz1y"),o=s.n(i),r=s("lOrp"),c={name:"FormAvatar",props:{value:{type:String},name:{type:String},error:{type:String},label:{type:String},required:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1}},data:function(){return{image:void 0,uploadText:"",uploadTextType:""}},computed:o()({},Object(r.b)(["userInfo"]),{initials:function(){var t="";return this.$store&&this.$store.getters&&void 0!==this.$store.getters.userInfo&&n()(this.$store.getters.userInfo).length?(t+=this.$store.getters.userInfo.UserFirstname.charAt(0).toUpperCase(),t+=this.$store.getters.userInfo.UserLastname.charAt(0).toUpperCase()):t="CU",t},avatarImage:function(){if(null!==this.value&&void 0!==this.value)return this.value}}),updated:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("FormAvatar::Updated")})},methods:{uploadImage:function(){var t=this;if(this.image){if(this.uploadText="Your avatar is being uploaded.",this.uploadTextType="notice",this.image.size>1048576)return this.uploadText="Image size exceeded (1MB).",this.uploadTextType="danger",void this.$nextTick(function(){t.$test.setFlag("FormAvatar::ImageTooBig")});var e=new FileReader;e.addEventListener("load",function(e){t.$emit("input",e.target.result),t.uploadText="Your avatar was uploaded successfully.",t.uploadTextType="success"}),e.addEventListener("error",function(){t.uploadText="An error occurred during image upload.",t.uploadTextType="danger"}),e.readAsDataURL(this.image)}},removeAvatar:function(){this.$refs.uploadImage.reset(),this.$emit("input",void 0)},dismissStatus:function(){var t=this;setTimeout(function(){t.uploadTextType="",t.uploadText=""},2e3)}}},l=(s("cI0P"),s("CGHn"),s("psIG")),u=Object(l.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],attrs:{state:Boolean(t.error)?"invalid":null,description:t._f("translate")(t.description),"invalid-feedback":t._f("translate")(t.error)}},[s("div",{staticClass:"Form__Avatar"},[s("div",{staticClass:"Avatar Avatar__Image"},[t.avatarImage?s("img",{attrs:{src:t.avatarImage}}):s("span",[t._v(t._s(t.initials))])]),t._v(" "),s("label",{staticClass:"btn btn-secondary Button Button--Secondary Avatar__ChangeButton"},[t._v("\n            "+t._s(t._f("translate")("Change Avatar Image"))+"\n            "),s("b-form-file",{ref:"uploadImage",attrs:{multiple:!1,accept:"image/*",plain:""},on:{input:function(e){t.uploadImage()}},model:{value:t.image,callback:function(e){t.image=e},expression:"image"}})],1),t._v(" "),s("transition",{attrs:{"enter-class":"Transition--SlideFadeEnter","enter-active-class":"Transition--SlideFadeEnterActive","leave-active-class":"Transition--SlideFadeLeaveActive","leave-to-class":"Transition--SlideFadeLeaveTo"},on:{"after-enter":t.dismissStatus}},[t.uploadText?s("small",{staticClass:"form-text Form__Help",class:"text-"+t.uploadTextType},["success"==t.uploadTextType?s("i",{staticClass:"fas fa-check"}):s("i",{staticClass:"fas fa-exclamation-circle"}),t._v("\n                "+t._s(t._f("translate")(t.uploadText))+"\n            ")]):t._e()]),t._v(" "),t.value?s("i",{staticClass:"fas fa-times fa-md Avatar__Remove",attrs:{title:t._f("translate")("Remove avatar")},on:{click:t.removeAvatar}}):t._e()],1)])},[],!1,null,null,null);u.options.__file="index.vue";e.default=u.exports},cI0P:function(t,e,s){"use strict";var a=s("eVP2");s.n(a).a},eVP2:function(t,e,s){},u8Vv:function(t,e,s){"use strict";s.r(e);var a=s("Iptl"),n=s("MKqb"),i={name:"FormAvatar",mixins:[a.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormAvatar",value:void 0,component:n.default,example:{error:{type:"input"},name:{type:"input"},required:{type:"checkbox",default:!1},description:{type:"input"},hidden:{type:"checkbox",default:!1}}}}},o=s("psIG"),r=Object(o.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),s("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),s("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[s("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),s("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),t._v(" "),s("b-tabs",{staticClass:"tab-content"},[s("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[s("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),s("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[s("h2",{staticClass:"design-system"},[t._v("Header Level 2")]),t._v(" "),s("ol",{staticClass:"design-system"},[s("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),s("li",[t._v("Aliquam tincidunt mauris eu risus.")])]),t._v(" "),s("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[s("b-row",[s("b-col",{attrs:{sm:"6"}},[s("div",[s("h5",{staticClass:"design-system"},[t._v("Do")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),t._v(" "),s("b-col",{attrs:{sm:"6"}},[s("div",[s("h5",{staticClass:"design-system"},[t._v("Don't")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),t._v(" "),s("h3",{staticClass:"design-system"},[t._v("Header Level 3")]),t._v(" "),s("ul",{staticClass:"design-system"},[s("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),s("li",[t._v("Aliquam tincidunt mauris eu risus.")])])],1),t._v(" "),s("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[s("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);r.options.__file="FormAvatar.vue";e.default=r.exports},wUKL:function(t,e,s){}}]);