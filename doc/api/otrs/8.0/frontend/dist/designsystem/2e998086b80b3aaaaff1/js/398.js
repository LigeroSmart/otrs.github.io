(window.webpackJsonp=window.webpackJsonp||[]).push([[398,32,430],{"+J7U":function(t,e,a){var s,o,n=a("We69"),r=a("4feL"),i=0,l=0;t.exports=function(t,e,a){var c=e&&a||0,h=e||[],u=(t=t||{}).node||s,C=void 0!==t.clockseq?t.clockseq:o;if(null==u||null==C){var d=n();null==u&&(u=s=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==C&&(C=o=16383&(d[6]<<8|d[7]))}var m=void 0!==t.msecs?t.msecs:(new Date).getTime(),p=void 0!==t.nsecs?t.nsecs:l+1,g=m-i+(p-l)/1e4;if(g<0&&void 0===t.clockseq&&(C=C+1&16383),(g<0||m>i)&&void 0===t.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=m,l=p,o=C;var f=(1e4*(268435455&(m+=122192928e5))+p)%4294967296;h[c++]=f>>>24&255,h[c++]=f>>>16&255,h[c++]=f>>>8&255,h[c++]=255&f;var _=m/4294967296*1e4&268435455;h[c++]=_>>>8&255,h[c++]=255&_,h[c++]=_>>>24&15|16,h[c++]=_>>>16&255,h[c++]=C>>>8|128,h[c++]=255&C;for(var y=0;y<6;++y)h[c+y]=u[y];return e||r(h)}},"4DBq":function(t,e,a){"use strict";a.r(e);a("GkPX"),a("DbwS"),a("jPba"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("e2Kn");var s=a("me7x"),o={name:"ChatConversation",components:{ChatMessage:function(){return a.e(78).then(a.bind(null,"OaC0"))},ChatFooter:function(){return a.e(77).then(a.bind(null,"4L3h"))},CommonDialog:function(){return a.e(19).then(a.bind(null,"CqLK"))},CommonTicker:function(){return a.e(109).then(a.bind(null,"hOs3"))}},mixins:[a("rpZP").a],props:{authenticated:{type:Boolean},chatData:{type:Object},noAnswerThreshold:{type:Number},publicUserId:{type:String,default:""},isPopup:{type:Boolean},isVideoChatEnabled:{type:Boolean},primaryColor:{type:String},chatConversationText:{type:String,default:"Chat Conversation"},chatRemovedText:{type:String,default:"This chat has been removed."},chatCloseText:{type:String,default:"Click here to close the chat."},chatClosedText:{type:String,default:"This chat is closed."},chatNextStepsText:{type:String,default:"Click here for next steps."},noAnswerText:{type:String,default:"There are no chat agents available at the moment."},createTicketText:{type:String,default:"To create a new ticket, please click here."},requestPendingText:{type:String,default:"Please bear with us until one of our agents is able to handle your chat request. Thank you for your patience."},tryAgainLaterText:{type:String,default:"Please try again later."},chatRequestText:{type:String,default:"This is a chat request."},chatRequestAcceptText:{type:String,default:"Click here to accept it."},closeModalTitle:{type:String,default:"Close Chat"},closeModalText:{type:String,default:"Are you sure you want to close this chat?"},closeModalYes:{type:String,default:"Yes"},closeModalNo:{type:String,default:"No"},writeMessageText:{type:String}},data:function(){return{messageText:"",initState:0,noAnswer:!1,noAnswerTimeoutId:null,localChatData:this.chatData,isChatRemoved:!1,isScrollNeeded:!1,newMessagesPresent:!1}},computed:{closeChatModalId:function(){return"closeChatModal-".concat(this.uuid)},isValid:function(){return!(!this.messageText||""===this.messageText)},isIncomingChatRequest:function(){return"request"===this.localChatData.Status&&"User"===this.localChatData.RequesterType},activeAgents:function(){var t=[];return Object.keys(this.localChatData).length&&this.localChatData.ActiveUsers&&this.localChatData.ActiveUsers.forEach(function(e){"User"===e.ChatterType&&t.push(e.ChatterName)}),t},activeAgentsLastTime:function(){var t;return Object.keys(this.localChatData).length&&this.localChatData.ActiveUsers&&this.localChatData.ActiveUsers.forEach(function(e){"User"===e.ChatterType&&(!t||t<e.LastMessageTime)&&(t=e.LastMessageTime)}),t},showVideoChatButtons:function(){return this.isVideoChatEnabled&&"active"===this.localChatData.Status&&s.a.hasWebRtc&&1===parseInt(this.localChatData.HasWebRTC,10)&&!this.isPopup}},watch:{chatData:function(t){if(Object.keys(t).length&&t.ChatMessages){var e=this.$el.querySelector(".Chat__Content");this.localChatData&&this.localChatData.ChatMessages&&this.localChatData.ChatMessages.length<t.ChatMessages.length&&e.scrollHeight>e.clientHeight&&(this.newMessagesPresent=!0),this.localChatData=t}else this.isChatRemoved=!0}},mounted:function(){this.scroll(),this.checkNoAnswerTimeout()},beforeUpdate:function(){var t=this.$el.querySelector(".Chat__Content");t.scrollTop>t.scrollHeight-410&&(this.isScrollNeeded=!0)},updated:function(){this.initState<2&&this.initState++,2===this.initState?(this.initState++,this.scroll()):this.isScrollNeeded&&this.scroll(),this.isScrollNeeded=!1,this.checkNoAnswerTimeout()},beforeDestroy:function(){this.clearNoAnswerTimeout()},methods:{scroll:function(){var t=this;this.$nextTick(function(){var e=t.$el.querySelector(".Chat__Content");e.scrollTop=e.scrollHeight})},sendMessage:function(){var t=this,e="public/chat/send-message";this.authenticated||(e="public/chat/".concat(this.publicUserId,"/send-message")),this.clientSendRequest({Path:e,Method:"post",Body:{ChatID:this.localChatData.ChatID,Message:this.messageText}}).then(function(){t.messageText="",t.$emit("change")}).catch(function(e){t.$log.error(e),t.$bus.$emit("showToastMessage",{id:"chatMessageSend",heading:"Error Sending Chat Message",text:"The chat message could not be sent. Please contact the administrator.",variant:"danger",persistent:!1})})},back:function(){this.$emit("back")},showCloseChatModal:function(){this.$refs.closeChatModal.open()},acceptRequest:function(){var t=this,e="public/chat/accept-request";this.authenticated||(e="public/chat/".concat(this.publicUserId,"/accept-request")),this.clientSendRequest({Path:e,Method:"post",Body:{ChatID:this.localChatData.ChatID,Language:this.$store.getters.language}}).then(function(){t.$nextTick(function(){t.$test.setFlag("Chat::Request::Accept")})}).catch(function(e){t.$log.error(e),t.$bus.$emit("showToastMessage",{id:"chatAcceptRequestError",text:e.response.Body&&e.response.Body.ErrorMessage?e.response.Body.ErrorMessage:"An unknown error occurred. Please contact your administrator.",variant:"danger",persistent:!1})})},call:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("call",t)},closeChat:function(){var t=this,e="public/chat/close";this.authenticated||(e="public/chat/".concat(this.publicUserId,"/close")),this.clientSendRequest({Path:e,Method:"post",Body:{ChatID:this.localChatData.ChatID}}).then(function(){t.messageText="",t.$emit("change"),t.$nextTick(function(){t.$test.setFlag("Chat::Close")})}).catch(function(e){t.$log.error(e),t.$bus.$emit("showToastMessage",{id:"chatClose",heading:"Error Closing Chat",text:"The chat conversation could not be closed. Please contact the administrator.",variant:"danger",persistent:!1})}).finally(function(){t.$refs.closeChatModal.close()})},closed:function(){this.$emit("closed")},goToTicketCreate:function(){"TicketCreate"!==this.$route.name&&this.$router.push({name:"TicketCreate"}),this.close()},close:function(){this.$emit("close")},checkNoAnswerTimeout:function(){Object.keys(this.localChatData).length&&"request"===this.localChatData.Status?this.setNoAnswerTimeout():this.clearNoAnswerTimeout()},setNoAnswerTimeout:function(){var t=this;!this.noAnswerTimeoutId&&this.noAnswerThreshold>0&&(this.noAnswerTimeoutId=setTimeout(function(){t.noAnswer=!0},60*this.noAnswerThreshold*1e3))},clearNoAnswerTimeout:function(){this.noAnswerTimeoutId&&(clearTimeout(this.noAnswerTimeoutId),this.noAnswerTimeoutId=null,this.noAnswer=!1)},onScroll:function(){if(this.newMessagesPresent){var t=this.$el.querySelector(".Chat__Content");t.scrollTop>t.scrollHeight-410&&(this.newMessagesPresent=!1)}}}},n=a("psIG"),r=Object(n.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-col",{staticClass:"Chat--WhiteBackground",class:{"pl-0":t.isPopup,"pr-0":t.isPopup,"px-0":!t.isPopup,"mb-3":!t.isPopup,shadow:!t.isPopup},attrs:{cols:t.isPopup?null:12,md:t.isPopup?5:null}},[a("b-col",{staticClass:"py-2 Chat__Head Chat--PrimaryBackground",style:{"background-color":t.primaryColor?t.primaryColor+" !important":null},attrs:{cols:"12"}},[a("b-row",[a("b-col",{staticClass:"d-flex align-items-center",attrs:{cols:"1"}},[a("CommonLink",{staticClass:"Chat__Icon",on:{click:t.back}},[a("CommonIcon",{attrs:{icon:"arrow-left-1"}})],1)],1),t._v(" "),a("b-col",{staticClass:"pl-3",attrs:{cols:"7"}},[t.activeAgents.length?[a("p",{staticClass:"mb-0 Chat__Agent"},[a("CommonTicker",{attrs:{texts:t.activeAgents}})],1),t._v(" "),a("p",{staticClass:"mb-0 Chat__AgentLastActive"},[t._v("\n                        "+t._s(t._f("localize")(t.activeAgentsLastTime,"TimeLong"))+"\n                    ")])]:[a("p",{staticClass:"mb-0 Chat__Agent"},[t._v("\n                        "+t._s(t._f("translate")(t.chatConversationText))+"\n                    ")])]],2),t._v(" "),a("b-col",{staticClass:"d-flex align-items-center Chat__Icons",attrs:{cols:"4"}},["closed"!==t.localChatData.Status?a("CommonLink",{staticClass:"ml-auto Chat__Icon Chat__Icon__Close",on:{click:t.showCloseChatModal}},[a("CommonIcon",{attrs:{weight:"bold",icon:"close",size:"lg"}})],1):t._e()],1)],1)],1),t._v(" "),a("b-col",{staticClass:"position-relative py-2 Chat__Content",attrs:{cols:"12"},on:{scroll:t.onScroll}},[Object.keys(t.localChatData).length&&t.localChatData.ChatMessages?[t._l(t.localChatData.ChatMessages,function(e){return[a("ChatMessage",{key:e.ID,attrs:{message:e,"primary-color":t.primaryColor}})]})]:t._e(),t._v(" "),t.isChatRemoved?a("div",[a("p",{staticClass:"mb-2 Chat__AgentMessageSmall Chat__Message__Removed"},[t._v("\n                "+t._s(t._f("translate")(t.chatRemovedText))+"\n                "),a("CommonLink",{staticClass:"Color--Primary",style:{color:t.primaryColor?t.primaryColor:null},on:{click:t.close}},[t._v("\n                    "+t._s(t._f("translate")(t.chatCloseText))+"\n                ")])],1)]):"closed"===t.localChatData.Status?a("div",[a("p",{staticClass:"mb-2 Chat__AgentMessageSmall Chat__Message__Closed"},[t._v("\n                "+t._s(t._f("translate")(t.chatClosedText))+"\n                "),a("CommonLink",{staticClass:"Color--Primary",style:{color:t.primaryColor?t.primaryColor:null},on:{click:t.closed}},[t._v("\n                    "+t._s(t._f("translate")(t.chatNextStepsText))+"\n                ")])],1)]):"request"===t.localChatData.Status&&"User"!==t.localChatData.RequesterType?a("div",[a("p",{staticClass:"mb-0 Chat__AgentMessageSmall"},[t.noAnswer?[t._v("\n                    "+t._s(t._f("translate")(t.noAnswerText))+"\n                    "),t.authenticated?a("CommonLink",{staticClass:"Color--Primary",style:{color:t.primaryColor?t.primaryColor:null},on:{click:t.goToTicketCreate}},[t._v("\n                        "+t._s(t._f("translate")(t.createTicketText))+"\n                    ")]):[t._v("\n                        "+t._s(t._f("translate")(t.tryAgainLaterText))+"\n                    ")]]:[t._v("\n                    "+t._s(t._f("translate")(t.requestPendingText))+"\n                ")]],2)]):t.isIncomingChatRequest?a("div",[a("p",{staticClass:"mb-2 Chat__AgentMessageSmall Chat__Message__Request"},[t._v("\n                "+t._s(t._f("translate")(t.chatRequestText))+"\n                "),a("CommonLink",{staticClass:"Color--Primary",style:{color:t.primaryColor?t.primaryColor:null},on:{click:t.acceptRequest}},[t._v("\n                    "+t._s(t._f("translate")(t.chatRequestAcceptText))+"\n                ")])],1)]):t._e()],2),t._v(" "),t.newMessagesPresent?a("div",{staticClass:"Chat__NewMessagePresent"},[a("CommonLink",{staticClass:"shadow",style:{color:t.primaryColor?t.primaryColor:null},on:{click:t.scroll}},[a("CommonIcon",{attrs:{icon:"arrow-down-1"}})],1)],1):t._e(),t._v(" "),"closed"===t.localChatData.Status||t.isChatRemoved||t.isIncomingChatRequest?t._e():a("ChatFooter",{attrs:{"is-valid":t.isValid,"primary-color":t.primaryColor,"write-message-text":t.writeMessageText},on:{send:t.sendMessage},model:{value:t.messageText,callback:function(e){t.messageText=e},expression:"messageText"}}),t._v(" "),a("CommonDialog",{ref:"closeChatModal",attrs:{id:t.closeChatModalId,title:t._f("translate")(t.closeModalTitle),"footer-class":"pull-right",lazy:""},scopedSlots:t._u([{key:"footer",fn:function(){return[a("CommonLink",{staticClass:"btn btn-primary Button Button--Secondary",style:{"border-color":t.primaryColor?t.primaryColor:null,"background-color":t.primaryColor?"#fff":null,color:"#000"},on:{click:function(e){return t.$refs.closeChatModal.close()}}},[t._v("\n                "+t._s(t._f("translate")(t.closeModalNo))+"\n            ")]),t._v(" "),a("CommonLink",{staticClass:"btn btn-primary Button Button--Primary",style:{"border-color":t.primaryColor?t.primaryColor:null,"background-color":t.primaryColor?t.primaryColor:null,color:"#fff"},on:{click:t.closeChat}},[t._v("\n                "+t._s(t._f("translate")(t.closeModalYes))+"\n            ")])]},proxy:!0}])},[t._v("\n        "+t._s(t._f("translate")(t.closeModalText))+"\n        ")])],1)},[],!1,null,null,null);e.default=r.exports},"4feL":function(t,e){for(var a=[],s=0;s<256;++s)a[s]=(s+256).toString(16).substr(1);t.exports=function(t,e){var s=e||0,o=a;return[o[t[s++]],o[t[s++]],o[t[s++]],o[t[s++]],"-",o[t[s++]],o[t[s++]],"-",o[t[s++]],o[t[s++]],"-",o[t[s++]],o[t[s++]],"-",o[t[s++]],o[t[s++]],o[t[s++]],o[t[s++]],o[t[s++]],o[t[s++]]].join("")}},We69:function(t,e){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var s=new Uint8Array(16);t.exports=function(){return a(s),s}}else{var o=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),o[e]=t>>>((3&e)<<3)&255;return o}}},rpZP:function(t,e,a){"use strict";var s=a("+J7U"),o=a.n(s);e.a={data:function(){return{uuid:this.getUuid()}},methods:{getUuid:function(){return o()()}}}}}]);