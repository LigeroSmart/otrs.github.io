(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"4Mll":function(t,e,n){},"8Lk7":function(t,e,n){"use strict";n("Z8gF"),n("asZ9"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var s={system:"OS",agent:"AG",customer:"CU"};e.a={props:{userType:{type:String,required:!0,validator:function(t){return-1!==Object.keys(s).indexOf(t)}},realname:{type:String}},computed:{initials:function(){var t=this.realname;t||(t=[this.$store.getters.userInfo.UserFirstname,this.$store.getters.userInfo.UserLastname].join(" "));var e=[],n=(t=t.replace(/"/g,"").split(/\s+/)).slice(0,1).join(""),a=t.slice(-1).join("");return n?(e.push(n.charAt(0).toUpperCase()),a&&e.push(a.charAt(0).toUpperCase()),e.join("")):s[this.userType]}}}},IDb8:function(t,e,n){"use strict";var s=n("4Mll");n.n(s).a},Iptl:function(t,e,n){"use strict";n("GkPX");var s=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(162).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(20).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(21).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},KbHG:function(t,e,n){"use strict";var s=n("q4AK");n.n(s).a},Mb4K:function(t,e,n){"use strict";var s={name:"CommonAvatar",mixins:[n("8Lk7").a],props:{image:{type:String},icon:{type:String},realname:{type:String,default:""},title:{type:String}},data:function(){return{}},computed:{avatarImage:function(){if(null!==this.image&&void 0!==this.image)return this.image}},methods:{click:function(t){this.$emit("click",t)}}},a=(n("KbHG"),n("psIG")),o=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Avatar Avatar__Image",on:{click:function(e){return t.click()}}},[t.icon?n("span",[n("CommonIcon",{attrs:{title:t.title,icon:t.icon,weight:"bold",size:"lg"}})],1):t.avatarImage?n("img",{attrs:{src:t.avatarImage,title:t.title}}):n("span",{attrs:{title:t.title}},[t._v("\n        "+t._s(t.initials)+"\n    ")])])},[],!1,null,null,null);e.a=o.exports},YsKT:function(t,e,n){t.exports=n.p+"img/otrs-signet.cb9af2a.png"},q4AK:function(t,e,n){},tEN3:function(t,e,n){"use strict";n.r(e);var s=n("Iptl"),a=(n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),{name:"CommonAvatarExternal",extends:n("Mb4K").a,props:{},computed:{defaultAgentAvatarImage:function(){if(this.$store&&this.$store.getters&&void 0!==this.$store.getters.config&&Object.keys(this.$store.getters.config).length&&this.$store.getters.config["Layout::DefaultAvatar"]&&"agent"===this.userType){var t=this.$store.getters.config["Layout::DefaultAvatar"];return"/api/frontend/external/layout/image?Path=".concat(t)}}}}),o=(n("IDb8"),n("psIG")),i=Object(o.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Avatar Avatar__Image",on:{click:function(e){return t.click()}}},[t.icon?s("span",[s("CommonIcon",{attrs:{title:t.title,icon:t.icon,weight:"bold",size:"lg"}})],1):t.avatarImage?s("img",{attrs:{src:t.avatarImage,title:t.title}}):"agent"===t.userType&&t.defaultAgentAvatarImage?s("img",{attrs:{src:t.defaultAgentAvatarImage,title:t.title}}):"agent"===t.userType?s("img",{attrs:{title:t.title,src:n("YsKT")}}):s("span",{attrs:{title:t.title}},[t._v("\n        "+t._s(t.initials)+"\n    ")])])},[],!1,null,null,null).exports,r={name:"CommonAvatarExternal",mixins:[s.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/External",componentPath:"Apps/External/Components/Common/CommonAvatarExternal",component:i,example:{userType:{default:"agent",type:"select",options:[{value:"agent",text:"agent"},{value:"customer",text:"customer"},{value:"system",text:"system"}]},image:{type:"input"},icon:{type:"input"},realname:{type:"input"},title:{type:"input"}}}}},c=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=c.exports}}]);