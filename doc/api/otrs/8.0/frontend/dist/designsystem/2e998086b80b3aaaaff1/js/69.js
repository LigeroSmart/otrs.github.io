(window.webpackJsonp=window.webpackJsonp||[]).push([[69,376],{GAVU:function(t,e,n){"use strict";n.r(e);n("3DBk"),n("oMRA"),n("6d4m"),n("U8p0"),n("DbwS"),n("jPba"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("e2Kn");var i=n("me7x"),a={name:"ChatWidget",components:{ChatCreate:function(){return n.e(36).then(n.bind(null,"cFE3"))},ChatNewMessage:function(){return n.e(105).then(n.bind(null,"cDum"))},ChatConversation:function(){return n.e(398).then(n.bind(null,"4DBq"))},ChatClosed:function(){return n.e(38).then(n.bind(null,"+gqe"))},ChatOverview:function(){return n.e(106).then(n.bind(null,"6AFu"))},ChatButton:function(){return n.e(42).then(n.bind(null,"EpQy"))},ChatBubble:function(){return n.e(99).then(n.bind(null,"uuxT"))},ChatVideoInvite:function(){return n.e(107).then(n.bind(null,"YC5O"))},ChatVideo:function(){return n.e(83).then(n.bind(null,"IZlg"))}},props:{allowChatChannels:{type:Boolean},authenticated:{type:Boolean},chatPublicUserId:{type:String},fixedPosition:{type:Boolean},isVideoChatEnabled:{type:Boolean},noAnswerThreshold:{type:Number},integrationConfig:{type:Object},noAvailableAgentsDescription:{type:String},noAvailableAgentsButtonText:{type:String},noAvailableAgentsButtonLink:{type:String}},data:function(){return{loaded:!1,chatState:"closed",currentChatId:null,chatConversations:{},newMessages:[],skipUpdate:!1,updating:!1,updateChatConversationIntervalId:null,monitorFilters:["IncomingRequests","OutgoingRequests","Active"],videoChatInvite:{},audioCall:!1,invited:!1,popup:!1}},computed:{chatConversationCount:function(){var t=this,e=0;return Object.keys(this.chatConversations).forEach(function(n){e+=t.chatConversations[n].length}),e},incomingChatRequestCount:function(){return this.chatConversations.IncomingRequests?this.chatConversations.IncomingRequests.length:0},currentChatData:function(){return this.chatGet(this.currentChatId)},hasWebRtc:function(){return i.a.hasWebRtc()}},watch:{authenticated:function(){this.chatStateSet("closed"),this.updating&&(this.skipUpdate=!0),this.loaded=!1,this.currentChatId=null,this.chatConversations={},this.newMessages=[],this.updating=!1,this.updateChatConversation()}},mounted:function(){this.updateChatConversation(),this.setUpdateChatConversationInterval()},beforeDestroy:function(){this.clearUpdateChatConversationInterval()},methods:{setUpdateChatConversationInterval:function(){var t=this;this.updateChatConversationIntervalId||(this.updateChatConversationIntervalId=setInterval(function(){t.updateChatConversation()},3e3)),window.addEventListener("beforeunload",this.clearUpdateChatConversationInterval)},clearUpdateChatConversationInterval:function(){this.updateChatConversationIntervalId&&(clearInterval(this.updateChatConversationIntervalId),this.updateChatConversationIntervalId=null),window.removeEventListener("beforeunload",this.clearUpdateChatConversationInterval)},toggleChatState:function(){"closed"===this.chatState?this.currentChatId?this.chatState="conversation":this.chatConversationCount?this.chatState="overview":this.chatState="create":"create"===this.chatState&&(this.chatState="closed"),this.newMessages=[]},chatOpen:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.currentChatId=t,e?(this.popup=!0,this.chatState="conversationVideo"):this.chatState="conversation",this.clearMessages()},chatStateSet:function(t){"overview"!==t&&"closed"!==t||(this.currentChatId=void 0),this.popup=!1,this.chatState=t},chatCreated:function(t){this.currentChatId=t,this.chatState="conversation",this.updateChatConversation()},updateChatConversation:function(){var t=this;if(!this.updating){this.updating=!0,this.setUpdateChatConversationInterval();var e="public/chat/history";this.authenticated||(e="public/chat/".concat(this.chatPublicUserId,"/history"));this.clientSendRequest({Path:e,Method:"get",Query:{}}).then(function(e){if(!t.skipUpdate){t.loaded&&(t.checkVideoChatInvite(e.Body),t.checkNewMessages(e.Body));var n={};Object.keys(e.Body).sort().forEach(function(t){n[t]=e.Body[t]}),t.chatConversations=n,t.authenticated||0!==Object.keys(t.chatConversations).length&&(0!==t.chatConversations.IncomingRequests.length||0!==t.chatConversations.OutgoingRequests.length||0!==t.chatConversations.Active.length)||t.clearUpdateChatConversationInterval(),t.loaded||(t.checkIncomingChatRequests(),t.loaded=!0),t.$nextTick(function(){t.$test.setFlag("Chat::History::Fetch")})}}).catch(function(e){t.skipUpdate||t.$log.error("Error while fetching chat history.",e)}).finally(function(){t.skipUpdate=!1,t.updating=!1})}},checkIncomingChatRequests:function(){var t=this;setTimeout(function(){t.incomingChatRequestCount&&t.$bus.$emit("showToastMessage",{id:"incomingChatRequests",heading:"Unanswered Chat Requests",text:"You have %s unanswered chat request(s). Click here to see them.",textPlaceholders:[t.incomingChatRequestCount],variant:"info",persistent:!0,callback:function(){t.chatStateSet("overview")}})},1e3)},chatGet:function(t){var e=this,n={};return Object.keys(this.chatConversations).forEach(function(i){Object.keys(n).length||e.chatConversations[i].forEach(function(e){Object.keys(n).length||e.ChatID===t&&(n=e)})}),n},checkVideoChatInvite:function(){},checkNewMessages:function(t){var e=this;Object.keys(t).forEach(function(n){e.monitorFilters.includes(n)&&t[n].forEach(function(t){if(e.currentChatId!==t.ChatID){var n=e.chatGet(t.ChatID),i=t.ChatMessages[t.ChatMessages.length-1];"User"===i.ChatterType&&(1===t.ChatMessages.length&&i.SystemGenerated&&1===parseInt(i.SystemGenerated,10)||(Object.keys(n).length?t.ChatMessages.length>n.ChatMessages.length&&e.postMessage(t.ChatID,i):e.postMessage(t.ChatID,i)))}})})},postMessage:function(t,e){var n=this,i=!1;Object.values(this.newMessages).forEach(function(a){a.ChatID===t&&(n.$set(a,"Message",e),i=!0)}),i||this.newMessages.push({ChatID:t,Message:e})},clearMessage:function(t){this.$delete(this.newMessages,t)},clearMessages:function(){var t=this;this.currentChatId&&Object.values(this.newMessages).forEach(function(e,n){e.ChatID===t.currentChatId&&t.$delete(t.newMessages,n)})},acceptVideoChatInvite:function(){this.invited=!0,this.audioCall=4===parseInt(this.videoChatInvite.SignalValue,10),this.currentChatId=this.videoChatInvite.ChatID,this.chatOpen(this.currentChatId,!0),this.clearVideoChatInvite()},startVideoChat:function(t){this.invited=!1,this.audioCall=t,this.chatOpen(this.currentChatId,!0)},clearVideoChatInvite:function(){this.videoChatInvite={}},closeChatWidget:function(){"conversationVideo"!==this.chatState?this.chatStateSet("closed"):this.$refs.chatVideo.close()}}},o=(n("ZCL8"),n("psIG")),r=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-3 my-2 mr-md-4 Chat",class:{"fixed-bottom":t.fixedPosition,"Chat--Popup":t.popup}},[t.newMessages.length?n("ChatNewMessage",{attrs:{messages:t.newMessages,"primary-color":t.integrationConfig&&t.integrationConfig.chatPrimaryColor},on:{click:t.clearMessage,open:t.chatOpen}}):t._e(),t._v(" "),Object.keys(t.videoChatInvite).length?n("ChatVideoInvite",{attrs:{"video-chat-invite":t.videoChatInvite},on:{accept:function(e){return t.acceptVideoChatInvite()},decline:function(e){return t.clearVideoChatInvite()}}}):t._e(),t._v(" "),"closed"===t.chatState?n("ChatBubble",{attrs:{"primary-color":t.integrationConfig&&t.integrationConfig.chatPrimaryColor},on:{click:t.toggleChatState}}):t._e(),t._v(" "),"overview"===t.chatState?n("ChatOverview",{attrs:{"chat-conversations":t.chatConversations,"primary-color":t.integrationConfig&&t.integrationConfig.chatPrimaryColor,"conversations-title-text":t.integrationConfig&&t.integrationConfig.conversationsTitleText,"no-chat-conversations-text":t.integrationConfig&&t.integrationConfig.noChatConversationsText,"new-conversation-link-text":t.integrationConfig&&t.integrationConfig.newConversationLinkText,"incoming-requests-title-text":t.integrationConfig&&t.integrationConfig.incomingRequestsTitleText,"outgoing-requests-title-text":t.integrationConfig&&t.integrationConfig.outgoingRequestsTitleText,"active-chats-title-text":t.integrationConfig&&t.integrationConfig.activeChatsTitleText,"closed-chats-title-text":t.integrationConfig&&t.integrationConfig.closedChatsTitleText},on:{input:t.chatOpen,create:function(e){return t.chatStateSet("create")},close:function(e){return t.chatStateSet("closed")}}}):t._e(),t._v(" "),"create"===t.chatState?n("ChatCreate",{attrs:{"public-user-id":t.chatPublicUserId,"allow-chat-channels":t.allowChatChannels,"default-chat-channel-id":t.integrationConfig&&t.integrationConfig.defaultChatChannelId&&parseInt(t.integrationConfig.defaultChatChannelId,10),authenticated:t.authenticated,"primary-color":t.integrationConfig&&t.integrationConfig.chatPrimaryColor,"create-chat-title":t.integrationConfig&&t.integrationConfig.createChatTitle,"no-available-agents-title":t.integrationConfig&&t.integrationConfig.noAvailableAgentsTitle,"create-ticket-text":t.integrationConfig&&t.integrationConfig.createTicketText,"create-ticket-button-text":t.integrationConfig&&t.integrationConfig.createTicketButtonText,"public-user-name-text":t.integrationConfig&&t.integrationConfig.publicUserNameText,"public-user-name-placeholder":t.integrationConfig&&t.integrationConfig.publicUserNamePlaceholder,"chat-channels-label-text":t.integrationConfig&&t.integrationConfig.chatChannelsLabelText,"write-message-text":t.integrationConfig&&t.integrationConfig.writeMessageText,"show-back-button":Boolean(t.chatConversationCount),"no-available-agents-description":t.noAvailableAgentsDescription,"no-available-agents-button-text":t.noAvailableAgentsButtonText,"no-available-agents-button-link":t.noAvailableAgentsButtonLink},on:{created:t.chatCreated,back:function(e){return t.chatStateSet("overview")},close:function(e){return t.chatStateSet("closed")}}}):t._e(),t._v(" "),"conversation"===t.chatState?n("ChatConversation",{attrs:{authenticated:t.authenticated,"chat-data":t.currentChatData,"public-user-id":t.chatPublicUserId,"no-answer-threshold":t.noAnswerThreshold,"is-video-chat-enabled":t.isVideoChatEnabled,"primary-color":t.integrationConfig&&t.integrationConfig.chatPrimaryColor,"chat-conversation-text":t.integrationConfig&&t.integrationConfig.chatConversationText,"chat-removed-text":t.integrationConfig&&t.integrationConfig.chatRemovedText,"chat-close-text":t.integrationConfig&&t.integrationConfig.chatCloseText,"chat-closed-text":t.integrationConfig&&t.integrationConfig.chatClosedText,"chat-next-steps-text":t.integrationConfig&&t.integrationConfig.chatNextStepsText,"no-answer-text":t.integrationConfig&&t.integrationConfig.noAnswerText,"create-ticket-text":t.integrationConfig&&t.integrationConfig.createTicketText,"request-pending-text":t.integrationConfig&&t.integrationConfig.requestPendingText,"try-again-later-text":t.integrationConfig&&t.integrationConfig.tryAgainLaterText,"chat-request-text":t.integrationConfig&&t.integrationConfig.chatRequestText,"chat-request-accept-text":t.integrationConfig&&t.integrationConfig.chatRequestAcceptText,"close-modal-title":t.integrationConfig&&t.integrationConfig.closeModalTitle,"close-modal-text":t.integrationConfig&&t.integrationConfig.closeModalText,"close-modal-yes":t.integrationConfig&&t.integrationConfig.closeModalYes,"close-modal-no":t.integrationConfig&&t.integrationConfig.closeModalNo,"write-message-text":t.integrationConfig&&t.integrationConfig.writeMessageText},on:{back:function(e){return t.chatStateSet("overview")},change:t.updateChatConversation,closed:function(e){return t.chatStateSet("chatClosed")},close:function(e){return t.chatStateSet("closed")},call:t.startVideoChat}}):t._e(),t._v(" "),"chatClosed"===t.chatState?n("ChatClosed",{attrs:{authenticated:t.authenticated,"chat-id":t.currentChatId,"public-user-id":t.chatPublicUserId,"primary-color":t.integrationConfig&&t.integrationConfig.chatPrimaryColor,"send-email-summary-text":t.integrationConfig&&t.integrationConfig.sendEmailSummaryText,"send-email-placeholder-text":t.integrationConfig&&t.integrationConfig.sendEmailPlaceholderText,"send-email-button-text":t.integrationConfig&&t.integrationConfig.sendEmailButtonText,"create-ticket-summary-text":t.integrationConfig&&t.integrationConfig.createTicketSummaryText,"create-ticket-button-text":t.integrationConfig&&t.integrationConfig.createTicketButtonText},on:{back:function(e){return t.chatStateSet("conversation")},close:function(e){return t.chatStateSet("closed")}}}):t._e(),t._v(" "),"conversationVideo"===t.chatState?n("ChatVideo",{ref:"chatVideo",attrs:{authenticated:t.authenticated,"chat-data":t.currentChatData,"integration-config":t.integrationConfig,"is-audio-call":t.audioCall,"is-invited":t.invited,"no-answer-threshold":t.noAnswerThreshold,"public-user-id":t.chatPublicUserId,"primary-color":t.integrationConfig&&t.integrationConfig.chatPrimaryColor},on:{back:function(e){return t.chatStateSet("overview")},change:t.updateChatConversation,closed:function(e){return t.chatStateSet("chatClosed")},close:function(e){return t.chatStateSet("closed")},end:function(e){return t.chatStateSet("conversation")}}}):t._e(),t._v(" "),"closed"!==t.chatState?n("ChatButton",{attrs:{"primary-color":t.integrationConfig&&t.integrationConfig.chatPrimaryColor},on:{close:t.closeChatWidget}}):t._e()],1)},[],!1,null,null,null);e.default=r.exports},VVY6:function(t,e,n){},ZCL8:function(t,e,n){"use strict";var i=n("VVY6");n.n(i).a},me7x:function(t,e,n){"use strict";var i=n("jHfC"),a=n.n(i),o=function(){return!(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)},r=function(){return!!navigator.mediaDevices},s=function(){return!!window.RTCPeerConnection};e.a={hasWebRtc:function(){return("firefox"===a.a.webrtcDetectedBrowser||"chrome"===a.a.webrtcDetectedBrowser)&&!(a.a.webrtcDetectedVersion<a.a.webrtcMinimumVersion)&&o()&&r()&&s()},hasGetUserMedia:o,hasMediaDevices:r,hasRtcPeerConnection:s}}}]);