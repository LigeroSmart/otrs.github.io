(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"9uii":function(e,t,i){"use strict";i.r(t);var s={name:"BusinessObjectWidgetStripePeople",components:{CommonAvatarAgent:function(){return Promise.all([i.e(8),i.e(63)]).then(i.bind(null,"evpg"))},PeopleDataPopover:function(){return i.e(79).then(i.bind(null,"zor4"))}},mixins:[i("TfdS").a],props:{testMode:{type:Boolean,default:!1}},data:function(){return{fetchUrl:null,fetchPeopleDataUrlPrefix:null,livePeople:[],otherPeople:[],listExpanded:!1,totalCount:0,testData:{live:[{UserEmail:"admin1@localhost",UserFirstname:"Admin1",UserFullname:"Admin1 OTRS",UserID:1,UserLastname:"OTRS",UserLogin:"admin1@localhost",UserRoles:{Primary:1,Secondary:1}},{UserEmail:"admin2@localhost",UserFirstname:"Admin2",UserFullname:"Admin2 OTRS",UserID:2,UserLastname:"OTRS",UserLogin:"admin2@localhost",UserRoles:{Primary:1,Secondary:0}},{UserEmail:"admin3@localhost",UserFirstname:"Admin3",UserFullname:"Admin3 OTRS",UserID:3,UserLastname:"OTRS",UserLogin:"admin3@localhost",UserRoles:{Primary:0,Secondary:1}},{UserEmail:"admin4@localhost",UserFirstname:"Admin4",UserFullname:"Admin4 OTRS",UserID:4,UserLastname:"OTRS",UserLogin:"admin4@localhost",UserRoles:{Primary:0,Secondary:0}},{UserEmail:"admin5@localhost",UserFirstname:"Admin5",UserFullname:"Admin5 OTRS",UserID:5,UserLastname:"OTRS",UserLogin:"admin5@localhost",UserRoles:{Primary:0,Secondary:0}},{UserEmail:"admin6@localhost",UserFirstname:"Admin6",UserFullname:"Admin6 OTRS",UserID:6,UserLastname:"OTRS",UserLogin:"admin6@localhost",UserRoles:{Primary:0,Secondary:0}},{UserEmail:"admin7@localhost",UserFirstname:"Admin7",UserFullname:"Admin7 OTRS",UserID:7,UserLastname:"OTRS",UserLogin:"admin7@localhost",UserRoles:{Primary:0,Secondary:0}},{UserEmail:"admin8@localhost",UserFirstname:"Admin8",UserFullname:"Admin8 OTRS",UserID:8,UserLastname:"OTRS",UserLogin:"admin8@localhost",UserRoles:{Primary:0,Secondary:0}},{UserEmail:"admin9@localhost",UserFirstname:"Admin9",UserFullname:"Admin9 OTRS",UserID:9,UserLastname:"OTRS",UserLogin:"admin3@localhost",UserRoles:{Primary:0,Secondary:0}},{UserEmail:"admin10@localhost",UserFirstname:"Admin10",UserFullname:"Admin10 OTRS",UserID:10,UserLastname:"OTRS",UserLogin:"admin10@localhost",UserRoles:{Primary:0,Secondary:0}},{UserEmail:"admin11@localhost",UserFirstname:"Admin11",UserFullname:"Admin11 OTRS",UserID:11,UserLastname:"OTRS",UserLogin:"admin11@localhost",UserRoles:{Primary:0,Secondary:0}}],other:[{UserEmail:"admin12@localhost",UserFirstname:"Admin12",UserFullname:"Admin12 OTRS",UserID:12,UserLastname:"OTRS",UserLogin:"admin12@localhost",UserRoles:{Primary:0,Secondary:0}},{UserEmail:"admin13@localhost",UserFirstname:"Admin13",UserFullname:"Admin13 OTRS",UserID:13,UserLastname:"OTRS",UserLogin:"admin13@localhost",UserRoles:{Primary:0,Secondary:0}},{UserEmail:"admin14@localhost",UserFirstname:"Admin14",UserFullname:"Admin14 OTRS",UserID:14,UserLastname:"OTRS",UserLogin:"admin14@localhost",UserRoles:{Primary:0,Secondary:0}}]}}},computed:{config:function(){return this.$store&&this.$store.getters&&this.$store.getters.config?this.$store.getters.config:{}},more:function(){return this.totalCount>this.initialLimit},initialLimit:function(){return this.widgetConfig.InitialLimit||10},peopleDataPopoverWrapperId:function(){return"peopleDataPopoverWrapper-".concat(this.widgetId)}},watch:{itemId:function(){this.fetchPeopleData()}},mounted:function(){this.fetchPeopleData(),this.testMode||this.clientSubscribePushEvent(["UserActivityRegister::BusinessObjectID::".concat(this.itemId,"::BusinessObjectType::").concat(this.businessObjectType),"UserActivityDeregister::BusinessObjectID::".concat(this.itemId,"::BusinessObjectType::").concat(this.businessObjectType),"UserDataUpdate::UserID::<:AuthenticatedUserID>"],this.fetchPeopleData)},methods:{popoverID:function(e){return"bPopover-".concat(e,"-").concat(this.widgetId)},fetchPeopleData:function(){var e=this;if(this.testMode){if(this.listExpanded)this.livePeople=this.testData.live,this.otherPeople=this.testData.other;else{this.livePeople=this.testData.live.slice(0,this.initialLimit);var t=this.initialLimit-this.livePeople.length;this.otherPeople=t>0?this.testData.other.slice(0,this.remainingNumber):[]}this.totalCount=this.testData.live.length+this.testData.other.length}else this.clientSendRequest({Path:this.fetchUrl,Method:"get",Query:{Limit:this.listExpanded?0:this.initialLimit}}).then(function(t){e.livePeople=t.Body.Live,e.otherPeople=t.Body.Other,e.totalCount=t.Body.TotalCount,e.$nextTick(function(){e.$test.setFlag("WidgetFetch::StripePeople::List")})}).catch(function(t){e.$bus.$emit("showToastMessage",{id:"fetchPeopleData",heading:"Unable to fetch people data",text:"Please contact the administrator.",variant:"danger"}),e.$log.error("Fetching people data failed!",t)})},getUserAvatarData:function(e){var t={userType:"agent",image:e.UserAvatar,title:e.UserFullname};return e.UserFullname||e.UserAvatar||e.UserEmail?(this.config&&"Gravatar"===this.config["AgentFrontend::Avatar::Fallback"]?t.gravatarEmailAddress=e.UserEmail:t.realname=e.UserFullname,t):null},getUserClasses:function(e){var t={};return 1===parseInt(e.Primary,10)&&1===parseInt(e.Secondary,10)?t.Stripe__People__PrimarySecondary=!0:1===parseInt(e.Primary,10)?t.Stripe__People__Primary=!0:1===parseInt(e.Secondary,10)&&(t.Stripe__People__Secondary=!0),t},getUserRoleIcons:function(){return[]},toggleListExpand:function(){this.listExpanded=!this.listExpanded,this.fetchPeopleData()}}},o=(i("p6Mv"),i("psIG")),r=Object(o.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.livePeople.length||e.otherPeople.length?i("BusinessObjectWidgetLayout",{staticClass:"Stripe Stripe__People text-center",attrs:{"is-collapsable":!1,"is-configurable":!1,"widget-id":e.widgetId},scopedSlots:e._u([{key:"title",fn:function(){return[i("CommonIcon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e._f("translate")("People"),icon:"multiple-users-1",decorative:""}})]},proxy:!0}],null,!1,1232013713)},[e._v(" "),e.livePeople.length?i("div",{staticClass:"Stripe__People__Live"},[i("div",{staticClass:"pt-1 text-uppercase"},[e._v("\n            "+e._s(e._f("translate")("Live"))+"\n        ")]),e._v(" "),e._l(e.livePeople,function(t){return i("div",{key:t.UserID,staticClass:"pt-1 position-relative Stripe__People__Element",class:e.getUserClasses(t.UserRoles)},[i("CommonAvatarAgent",e._b({attrs:{id:e.popoverID(t.UserID)}},"CommonAvatarAgent",e.getUserAvatarData(t),!1)),e._v(" "),e.getUserClasses(t.UserRoles).Stripe__People__PrimarySecondary?i("div",{staticClass:"DoubleRing"},[i("span",{staticClass:"position-relative Primary"}),e._v(" "),i("span",{staticClass:"position-relative Secondary"})]):e._e(),e._v(" "),i("div",{staticClass:"text-right pr-1 Stripe__People__Meta"},e._l(e.getUserRoleIcons(t.UserRoles),function(t,s){return i("CommonIcon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],key:s,attrs:{icon:t.icon,title:e._f("translate")(t.title),decorative:""}})}),1),e._v(" "),i("PeopleDataPopover",{attrs:{"test-mode":e.testMode,"item-id":e.itemId,"user-id":t.UserID,"popover-id":e.popoverID(t.UserID),"popover-wrapper-id":e.peopleDataPopoverWrapperId,"fetch-people-data-url-prefix":e.fetchPeopleDataUrlPrefix,live:""}})],1)})],2):e._e(),e._v(" "),i("div",{staticClass:"Stripe__People__Other"},e._l(e.otherPeople,function(t){return i("div",{key:t.UserID,staticClass:"pt-1 position-relative Stripe__People__Element",class:e.getUserClasses(t.UserRoles)},[i("CommonAvatarAgent",e._b({attrs:{id:e.popoverID(t.UserID)}},"CommonAvatarAgent",e.getUserAvatarData(t),!1)),e._v(" "),e.getUserClasses(t.UserRoles).Stripe__People__PrimarySecondary?i("div",{staticClass:"DoubleRing"},[i("span",{staticClass:"position-relative Primary"}),e._v(" "),i("span",{staticClass:"position-relative Secondary"})]):e._e(),e._v(" "),i("div",{staticClass:"text-right pr-1 Stripe__People__Meta"},e._l(e.getUserRoleIcons(t.UserRoles),function(t,s){return i("CommonIcon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],key:s,attrs:{icon:t.icon,title:e._f("translate")(t.title),decorative:""}})}),1),e._v(" "),i("PeopleDataPopover",{attrs:{"test-mode":e.testMode,"item-id":e.itemId,"user-id":t.UserID,"popover-id":e.popoverID(t.UserID),"popover-wrapper-id":e.peopleDataPopoverWrapperId,"fetch-people-data-url-prefix":e.fetchPeopleDataUrlPrefix}})],1)}),0),e._v(" "),e.more?i("div",{staticClass:"Stripe__People__More"},[e.listExpanded?i("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e._f("translate")("Show fewer People")},on:{click:function(t){return e.toggleListExpand()}}},[i("CommonIcon",{attrs:{icon:"navigation-menu-horizontal"}})],1):i("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e._f("translate")("Show more People")},on:{click:function(t){return e.toggleListExpand()}}},[i("CommonIcon",{attrs:{weight:"bold",icon:"navigation-menu-horizontal"}})],1)],1):e._e(),e._v(" "),i("div",{staticClass:"PopoverWrapper",attrs:{id:e.peopleDataPopoverWrapperId}})]):e._e()},[],!1,null,null,null);t.default=r.exports},TfdS:function(e,t,i){"use strict";i("W1QL"),i("K/PF"),i("t91x"),i("75LO"),i("e2Kn");var s=i("9va6");t.a={components:{BusinessObjectWidgetLayout:function(){return i.e(276).then(i.bind(null,"Hqm2"))}},props:{widgetId:{type:String,required:!0},value:{type:Object,required:!0},businessObjectType:{type:String,required:!0},itemId:{type:[Number,String],required:!0},itemData:{type:Object,default:null},title:{type:String},defaultConfig:{type:Object,default:function(){return{}}},screenType:{type:String},columnLayout:{type:String}},data:function(){return{oldWidgetConfig:null,showSettingsFlyout:!1}},computed:{widgetConfig:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}}},methods:{onExpand:function(){this.$set(this.widgetConfig,"Collapsed",0),this.emitValue()},onCollapse:function(){this.$set(this.widgetConfig,"Collapsed",1),this.emitValue()},emitValue:function(){Object(s.isEqual)(this.widgetConfig,this.oldWidgetConfig)||(this.$emit("input",this.widgetConfig,this.oldWidgetConfig),this.oldWidgetConfig=Object(s.cloneDeep)(this.widgetConfig))},onConfigUpdate:function(e){var t=this;Object.keys(e).forEach(function(i){return t.$set(t.widgetConfig,i,Object(s.cloneDeep)(e[i])),!0}),this.emitValue(),this.closeSettingsFlyout()},onConfigCancel:function(){this.closeSettingsFlyout()},onConfigReset:function(){this.onConfigUpdate(this.defaultConfig.Config)},openSettingsFlyout:function(){this.showSettingsFlyout=!0,this.$announcer.setMessage("Settings flyout has been opened.",!0),this.$emit("close-other-flyouts","showSettingsFlyout")},closeSettingsFlyout:function(){this.showSettingsFlyout=!1,this.$announcer.setMessage("Settings flyout has been closed.",!0),this.$emit("close-other-flyouts",null)}}}},p6Mv:function(e,t,i){"use strict";var s=i("qMz9");i.n(s).a},qMz9:function(e,t,i){}}]);