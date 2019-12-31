(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{"6AFu":function(t,s,e){"use strict";e.r(s);e("W1QL"),e("K/PF"),e("t91x"),e("75LO");var a={name:"ChatOverview",components:{CommonAvatarExternal:function(){return e.e(82).then(e.bind(null,"62pd"))}},props:{chatConversations:{type:Object},primaryColor:{type:String},conversationsTitleText:{type:String,default:"Conversation(s)"},noChatConversationsText:{type:String,default:"You are not participating in a chat at the moment."},newConversationLinkText:{type:String,default:"New conversation"},incomingRequestsTitleText:{type:String,default:"Incoming chat request(s)"},outgoingRequestsTitleText:{type:String,default:"Outgoing chat request(s)"},activeChatsTitleText:{type:String,default:"Active chat(s)"},closedChatsTitleText:{type:String,default:"Closed chat(s)"}},data:function(){return{filters:[{id:"IncomingRequests",label:this.incomingRequestsTitleText},{id:"OutgoingRequests",label:this.outgoingRequestsTitleText},{id:"Active",label:this.activeChatsTitleText},{id:"Closed",label:this.closedChatsTitleText}]}},computed:{chatConversationCount:function(){var t=this,s=0;return Object.keys(this.chatConversations).forEach(function(e){s+=t.chatConversations[e].length}),s}},methods:{lastMessage:function(t){return t.ChatMessages[t.ChatMessages.length-1]},select:function(t){this.$emit("input",t)},create:function(){this.$emit("create")},close:function(){this.$emit("close")}}},o=e("psIG"),n=Object(o.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-col",{staticClass:"px-0 mb-3 shadow Chat--WhiteBackground",attrs:{cols:"12"}},[e("b-col",{staticClass:"py-2 Chat__Head Chat--PrimaryBackground",style:{"background-color":t.primaryColor?t.primaryColor+" !important":null},attrs:{cols:"12"}},[e("b-row",[e("b-col",{staticClass:"d-flex",attrs:{cols:"12"}},[e("p",{staticClass:"mb-0 Chat__Headline"},[t._v("\n                    "+t._s(t._f("translate")(t.conversationsTitleText))+"\n                ")]),t._v(" "),e("CommonLink",{staticClass:"ml-auto mr-0 Chat__Icon",on:{click:function(s){return t.close()}}},[e("CommonIcon",{attrs:{weight:"bold",icon:"app-window-minimize",size:"lg"}})],1)],1)],1)],1),t._v(" "),e("div",{staticClass:"Chat__Overview"},[t.chatConversationCount?t._l(t.filters,function(s){return e("div",{key:s.id},[t.chatConversations[s.id].length?[e("b-col",{attrs:{cols:"12"}},[e("h4",{staticClass:"Chat__FilterHeadline"},[t._v("\n                        "+t._s(t._f("translate")(s.label))+"\n                    ")])]),t._v(" "),e("b-col",{attrs:{cols:"12"}},t._l(t.chatConversations[s.id],function(s){return e("CommonLink",{key:s.ChatID,style:{color:t.primaryColor?t.primaryColor:null},on:{click:function(e){return t.select(s.ChatID)}}},[e("b-row",{staticClass:"my-3 Chat__OverviewMessage"},["User"===t.lastMessage(s).ChatterType?[e("b-col",{staticClass:"Avatar",attrs:{cols:"2"}},[e("CommonAvatarExternal",{attrs:{title:t.lastMessage(s).ChatterName,"user-type":"agent"}})],1),t._v(" "),e("b-col",{attrs:{cols:"10"}},[e("b-row",[e("b-col",{staticClass:"clearfix Chat__AgentMessage",attrs:{cols:"12"}},[e("p",{staticClass:"float-left mb-0 Chat__AgentSmall"},[t._v("\n                                                "+t._s(t.lastMessage(s).ChatterName)+"\n                                            ")]),t._v(" "),e("p",{staticClass:"float-right mb-0 Chat__AgentLastActiveSmall"},[t._v("\n                                                "+t._s(t._f("localize")(t.lastMessage(s).CreateTime,"TimeLong"))+"\n                                                "),e("CommonIcon",{staticClass:"pl-1",attrs:{icon:"arrow-right-1"}})],1)]),t._v(" "),e("b-col",{attrs:{cols:"11"}},[e("p",{staticClass:"text-truncate Chat__AgentMessageSmall",domProps:{innerHTML:t._s(t.lastMessage(s).MessageText)}})])],1)],1)]:[e("b-col",{staticClass:"Avatar",attrs:{cols:"2"}},[e("CommonAvatarExternal",{attrs:{title:t.lastMessage(s).ChatterName,image:t.$store.getters.userInfo&&t.$store.getters.userInfo.UserAvatar,user:t.lastMessage(s).ChatterUser,"user-type":"customer"}})],1),t._v(" "),e("b-col",{attrs:{cols:"10"}},[e("b-row",[e("b-col",{staticClass:"clearfix Chat__AgentMessage",attrs:{cols:"12"}},[e("p",{staticClass:"float-left mb-0 Chat__AgentSmall"},[t._v("\n                                                "+t._s(t.lastMessage(s).ChatterName)+"\n                                            ")]),t._v(" "),e("p",{staticClass:"float-right mb-0 Chat__AgentLastActiveSmall"},[t._v("\n                                                "+t._s(t._f("localize")(t.lastMessage(s).CreateTime,"TimeLong"))+"\n                                                "),e("CommonIcon",{staticClass:"pl-1",attrs:{icon:"arrow-right-1"}})],1)]),t._v(" "),e("b-col",{attrs:{cols:"11"}},[e("p",{staticClass:"text-truncate Chat__AgentMessageSmall",domProps:{innerHTML:t._s(t.lastMessage(s).MessageText)}})])],1)],1)]],2)],1)}),1)]:t._e()],2)}):e("b-col",{staticClass:"my-3",attrs:{cols:"12"}},[e("p",{staticClass:"Chat__AgentMessageSmall"},[t._v("\n                "+t._s(t._f("translate")(t.noChatConversationsText))+"\n            ")])]),t._v(" "),e("b-col",{staticClass:"pb-3",attrs:{md:"12"}},[e("p",{staticClass:"mt-3 mb-1 small text-center"},[e("CommonLink",{staticClass:"btn btn-primary Button Button--Primary",style:{"border-color":t.primaryColor?t.primaryColor:null,"background-color":t.primaryColor?t.primaryColor:null,color:"#fff"},on:{click:t.create}},[e("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"messages-bubble-double"}}),t._v("\n                    "+t._s(t._f("translate")(t.newConversationLinkText))+"\n                ")],1)],1)])],2)],1)},[],!1,null,null,null);s.default=n.exports}}]);