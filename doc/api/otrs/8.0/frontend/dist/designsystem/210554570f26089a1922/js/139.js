(window.webpackJsonp=window.webpackJsonp||[]).push([[139,40],{1:function(t,e){},"8Lk7":function(t,e,n){"use strict";n("Z8gF"),n("asZ9"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var a={system:"OS",agent:"AG",customer:"CU"};e.a={props:{userType:{type:String,required:!0,validator:function(t){return-1!==Object.keys(a).indexOf(t)}},realname:{type:String}},computed:{initials:function(){var t=this.realname;t||(t=[this.$store.getters.userInfo.UserFirstname,this.$store.getters.userInfo.UserLastname].join(" "));var e=[],n=(t=t.replace(/"/g,"").split(/\s+/)).slice(0,1).join(""),s=t.slice(-1).join("");return n?(e.push(n.charAt(0).toUpperCase()),s&&e.push(s.charAt(0).toUpperCase()),e.join("")):a[this.userType]}}}},AD6i:function(t,e,n){},Iptl:function(t,e,n){"use strict";n("GkPX");var a=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(225).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(56).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(59).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(a.b)(this.doc,"summary")},version:function(){return Object(a.b)(this.doc,"version")},description:function(){return Object(a.b)(this.doc,"description")},props:function(){return Object(a.a)(this.doc,"prop")},slots:function(){return Object(a.a)(this.doc,"slot")},events:function(){return Object(a.a)(this.doc,"event")},methods:function(){return Object(a.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},KbHG:function(t,e,n){"use strict";var a=n("q4AK");n.n(a).a},Mb4K:function(t,e,n){"use strict";n.r(e);var a={name:"CommonAvatar",mixins:[n("8Lk7").a],props:{image:{type:String},icon:{type:String},realname:{type:String,default:""},title:{type:String}},data:function(){return{}},computed:{avatarImage:function(){if(null!==this.image&&void 0!==this.image)return this.image}},methods:{click:function(t){this.$emit("click",t)}}},s=(n("KbHG"),n("psIG")),r=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Avatar Avatar__Image",on:{click:function(e){return t.click()}}},[t.icon?n("span",[n("CommonIcon",{attrs:{icon:t.icon,weight:"bold",size:"lg"}})],1):t.avatarImage?n("img",{attrs:{src:t.avatarImage,title:t.title,alt:""}}):n("span",{attrs:{title:t.title}},[t._v("\n        "+t._s(t.initials)+"\n    ")])])},[],!1,null,null,null);e.default=r.exports},"VPD/":function(t,e,n){"use strict";n.r(e);var a=n("Iptl"),s=(n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("OvAC")),r=n.n(s),o=n("Mb4K"),i=n("cq1r"),c=n.n(i),l=n("lOrp");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}var p={name:"CommonAvatarAgent",extends:o.default,props:{gravatarEmailAddress:{type:String}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach(function(e){r()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},Object(l.b)(["config"]),{gravatarLink:function(){if("agent"===this.userType&&this.gravatarEmailAddress){var t="mm",e=(new c.a).update(this.gravatarEmailAddress).digest("hex");return this.$store&&this.$store.getters&&void 0!==this.$store.getters.config&&Object.keys(this.$store.getters.config).length&&this.$store.getters.config["AgentFrontend::Gravatar::DefaultImage"]&&(t=this.$store.getters.config["AgentFrontend::Gravatar::DefaultImage"]),"//www.gravatar.com/avatar/".concat(e,"?s=100&d=").concat(t)}}})},m=(n("aT5g"),n("psIG")),g=Object(m.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CommonLink",{staticClass:"d-block Avatar Avatar__Image",on:{click:function(e){return t.click()}}},[t.icon?n("span",[n("CommonIcon",{attrs:{icon:t.icon,weight:"bold",size:"lg"}})],1):t.avatarImage?n("img",{attrs:{src:t.avatarImage,title:t.title,alt:t._f("translate")("Avatar image of the user")}}):t.gravatarLink?n("img",{attrs:{src:t.gravatarLink,title:t.title,alt:t._f("translate")("Gravatar image of the user")}}):n("span",{attrs:{title:t.title}},[t._v("\n        "+t._s(t.initials)+"\n    ")])])},[],!1,null,null,null).exports,v={name:"CommonAvatarAgent",mixins:[a.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/Agent",componentPath:"Apps/Agent/Components/Common/CommonAvatarAgent",component:g,example:{userType:{default:"agent",type:"select",options:[{value:"agent",text:"agent"},{value:"customer",text:"customer"},{value:"system",text:"system"}]},image:{type:"input"},icon:{type:"input"},gravatarEmailAddress:{type:"input"},realname:{type:"input"},title:{type:"input"}}}}},f=Object(m.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=f.exports},aT5g:function(t,e,n){"use strict";var a=n("AD6i");n.n(a).a},q4AK:function(t,e,n){}}]);