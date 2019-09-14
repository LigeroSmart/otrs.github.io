(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{"6WmC":function(t,e,a){"use strict";a.r(e);a("W1QL"),a("K/PF"),a("t91x"),a("uqQt"),a("75LO"),a("e2Kn");var n={name:"BusinessObjectPropertyUser",components:{CommonClock:function(){return a.e(59).then(a.bind(null,"X54R"))},CommonAvatarAgent:function(){return Promise.all([a.e(9),a.e(65)]).then(a.bind(null,"evpg"))},CommonCopyToClipboard:function(){return a.e(44).then(a.bind(null,"HvPz"))},BusinessObjectWidgetPropertyLayout:function(){return a.e(72).then(a.bind(null,"cZP/"))}},mixins:[{props:{itemId:{type:[Number,String]},readOnly:{type:[Boolean],default:!1}},data:function(){return{content:{}}},computed:{propertyLabel:function(){return this.content.Label||""},readWritePermission:function(){return!this.readOnly&&"rw"===this.content.Permission},hasData:function(){return Boolean(Object.keys(this.content).length)}},watch:{itemId:function(){this.fetchData()}},mounted:function(){this.itemId&&this.fetchData()},methods:{fetchData:function(){var t=this;this.itemId?this.clientSendRequest({Path:this.fetchPropertyDataUrl,Method:"get",Query:this.queryParams||{}}).then(function(e){t.content=e.Body,t.$nextTick(function(){t.$test.setFlag("WidgetPropertyFetch::".concat(t.propertyName,"::Data"))})}).catch(function(e){t.$bus.$emit("showToastMessage",{id:"fetch".concat(t.propertyName,"PropertyData"),heading:"Unable to fetch data",text:"Please contact the administrator.",variant:"danger"}),t.$log.error("Fetching data failed for property ".concat(t.propertyName,"!"),e)}):this.content={}}}}],computed:{config:function(){return this.$store&&this.$store.getters&&this.$store.getters.config?this.$store.getters.config:{}},fetchDataUrl:function(){return null},personalInfo:function(){return this.content.PersonalInfo?this.content.PersonalInfo:{}},header:function(){if(!this.personalInfo.Header)return{};var t=this.personalInfo.Header;return this.config&&"Gravatar"===this.config["AgentFrontend::Avatar::Fallback"]&&(t.Avatar.GravatarEmailAddress=this.content.PersonalInfo.UserEmail),t},contact:function(){if(!this.personalInfo.Contact)return!1;var t=this.personalInfo.Contact;return(0!==Object.entries(t).length||t.constructor!==Object)&&t},chat:function(){if(!this.personalInfo.Chat)return!1;var t=this.personalInfo.Chat;return(0!==Object.entries(t).length||t.constructor!==Object)&&t},additional:function(){if(!this.personalInfo.Additional)return!1;var t=this.personalInfo.Additional;return(0!==Object.entries(t).length||t.constructor!==Object)&&t},hasData:function(){return!!this.personalInfo.UserID},canEdit:function(){return!(!this.readWritePermission||!this.editable)}}},r=(a("z0kW"),a("psIG")),o=Object(r.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.hasData?a("BusinessObjectWidgetPropertyLayout",{attrs:{"property-name":t.propertyName,active:t.propertyActive,label:t.propertyLabel,"form-schema-url":t.formSchemaUrl,"property-update-url":t.propertyUpdateUrl,"is-editable":t.canEdit},on:{updated:function(e){return t.fetchData()}}},[a("div",[a("b-row",[t.header.Avatar?a("b-col",{staticClass:"ml-3 px-0 PropertyCard__Content",attrs:{cols:"auto"}},[a("CommonAvatarAgent",{staticClass:"Avatar--Big",attrs:{"user-type":"agent",image:t.header.Avatar.UserAvatar,"gravatar-email-address":t.header.Avatar.GravatarEmailAddress,title:t.header.Avatar.Title,user:t.header.Avatar.User}})],1):t._e(),t._v(" "),a("b-col",{staticClass:"mt-3 PropertyCard__Content",attrs:{cols:t.header.Avatar?9:12}},[a("b-row",[a("b-col",[a("h4",{staticClass:"m-0"},[t._v("\n                            "+t._s(t.personalInfo.UserFullname)+"\n                        ")]),t._v(" "),a("span",{staticStyle:{display:"inline-block"}},[t._v("\n                            "+t._s(t.header.UserTitle)+"\n                        ")])])],1),t._v(" "),a("b-row",[t.header.UserTimeZone?a("b-col",{staticClass:"pr-2",attrs:{cols:t.header.UserLanguage?6:12}},[a("CommonClock",{attrs:{timezone:t.header.UserTimeZone}})],1):t._e(),t._v(" "),t.header.UserLanguage?a("b-col",{staticClass:"pl-0",attrs:{cols:t.header.UserTimeZone?6:12}},[a("b-row",[a("b-col",{staticClass:"pr-0",attrs:{cols:"auto"}},[a("CommonIcon",{attrs:{icon:"earth-3"}})],1),t._v(" "),a("b-col",{staticClass:"pl-2 pr-0"},[t._v("\n                                "+t._s(t.header.UserLanguage)+"\n                            ")])],1)],1):t._e()],1)],1)],1),t._v(" "),a("b-row",{staticClass:"mt-1"},[a("b-col",{staticClass:"py-2 mx-3 InfoCard__Meta"},[a("b-row",{attrs:{"align-h":"start"}},[t.contact?a("b-col",{attrs:{cols:t.chat?6:12}},[a("div",{staticClass:"InfoCard__Label"},[t._v("\n                            "+t._s(t._f("translate")("Contact"))+"\n                        ")]),t._v(" "),t._l(t.contact,function(t,e){return a("CommonCopyToClipboard",{key:e,staticClass:"Copy position-relative Layout__Header__Link mr-2",attrs:{title:t.Value,copy:t.Value,icon:t.Icon}})})],2):t._e(),t._v(" "),t.chat?a("b-col",{attrs:{cols:t.contact?6:12}},[a("div",{staticClass:"InfoCard__Label"},[t._v("\n                            "+t._s(t._f("translate")("Chat"))+"\n                        ")]),t._v(" "),a("CommonLink",[a("CommonIcon",{class:{"CommonIcon--Disabled":!t.chat.IsVideoAvailable},attrs:{icon:"single-neutral-actions-mobilephone"}})],1),t._v(" "),a("CommonLink",{staticClass:"ml-2"},[a("CommonIcon",{class:{"CommonIcon--Disabled":!t.chat.IsOnline},attrs:{icon:"single-neutral-actions-chat"}})],1),t._v(" "),a("CommonLink",{staticClass:"ml-2"},[a("CommonIcon",{class:{"CommonIcon--Disabled":!t.chat.IsVideoAvailable},attrs:{icon:"single-neutral-actions-video"}})],1)],1):t._e()],1)],1)],1),t._v(" "),t.additional?a("b-row",{staticClass:"mt-1"},[a("b-col",{staticClass:"py-2 mx-3 InfoCard__Meta",attrs:{cols:"12"}},t._l(t.additional,function(e,n){return a("b-row",{key:n},[a("b-col",{staticClass:"Bold",attrs:{cols:"4"}},[t._v("\n                        "+t._s(n)+"\n                    ")]),t._v(" "),a("b-col",{attrs:{cols:"8"}},[t._v("\n                        "+t._s(e)+"\n                    ")])],1)}),1)],1):t._e()],1)]):t._e()},[],!1,null,null,null);e.default=o.exports},oO88:function(t,e,a){},z0kW:function(t,e,a){"use strict";var n=a("oO88");a.n(n).a}}]);