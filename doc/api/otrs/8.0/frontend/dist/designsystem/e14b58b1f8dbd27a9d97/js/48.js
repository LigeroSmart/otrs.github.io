(window.webpackJsonp=window.webpackJsonp||[]).push([[48,96],{"+IV6":function(t,e){function s(e){return t.exports=s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(e)}t.exports=s},"3PFr":function(t,e,s){"use strict";s.r(e);var o=s("SDJZ"),i=s.n(o),n=s("NToG"),r=s.n(n),c=s("K4DB"),a=s.n(c),l=s("+IV6"),u=s.n(l),d=s("eef+"),b=s.n(d),f=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),r()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible attachments","+ %s object":"+ %s attachment","+ %s objects":"+ %s attachments","Table limit of %s objects reached (%s remaining).":"Table limit of %s attachments reached (%s remaining).","%s object":"%s attachment","%s objects":"%s attachments","(%s Object)":"(%s Attachment)","(%s Objects)":"(%s Attachments)","%s object selected":"%s attachment selected","%s objects selected":"%s attachments selected","Export %s Object":"Export %s Attachment","Export %s Objects":"Export %s Attachments","Error Loading Object Data":"Error Loading Attachment Data","The data for the object property “%s” could not be loaded. Please contact the administrator.":"The data for the attachment property “%s” could not be loaded. Please contact the administrator."}}}]),e}(s("FgkW").default);e.default=new f},"50Pc":function(t,e,s){"use strict";s.r(e);var o=s("SDJZ"),i=s.n(o),n=s("NToG"),r=s.n(n),c=s("K4DB"),a=s.n(c),l=s("+IV6"),u=s.n(l),d=s("eef+"),b=s.n(d),f=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),r()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible statistics","+ %s object":"+ %s statistic","+ %s objects":"+ %s statistics","Table limit of %s objects reached (%s remaining).":"Table limit of %s statistics reached (%s remaining).","%s object":"%s statistic","%s objects":"%s statistics","(%s Object)":"(%s Statistic)","(%s Objects)":"(%s Statistics)","%s object selected":"%s statistic selected","%s objects selected":"%s statistic selected","Export %s Object":"Export %s Statistic","Export %s Objects":"Export %s Statistics","Error Loading Object Data":"Error Loading Statistics Data","The data for the object property “%s” could not be loaded. Please contact the administrator.":"The data for the statistics property “%s” could not be loaded. Please contact the administrator."}}}]),e}(s("FgkW").default);e.default=new f},Aubc:function(t,e,s){},CqAs:function(t,e,s){"use strict";s("Z8gF"),s("GkPX"),s("J8hF");var o=s("R8iU"),i=s.n(o),n=s("IrnS"),r=function(t){return function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e.forEach(function(e){if(RegExp(/\.js$/).test(e.name)||e.items)if(e.items)r=t(e.items,o,"".concat(n).concat(e.name,"/"),r);else{var c=i.a.basename(e.name,".js");if("index"===c&&(c=i.a.basename(n.replace(/\/index\.js$/,"")),n=n.substr(0,n.length-c.length-1)),o&&!new RegExp("^".concat(o)).test(n))return;r[c]=s("Y2DI")("./".concat(n).concat(c)).default}}),r}(n,"")[t]};e.a={data:function(){return{businessObjectTypeTextsName:"businessObjectType"}},methods:{getBusinessObjectText:function(t){if(this.unitTestMode)return t;if(!this[this.businessObjectTypeTextsName])return this.$log.error("Error: missing '".concat(this.businessObjectTypeTextsName,"' property!")),t;var e=r(this[this.businessObjectTypeTextsName]);return e?e.getString(t):(this.$log.error("Error: missing locale text object for '".concat(this[this.businessObjectTypeTextsName],"'!")),t)}}}},FgkW:function(t,e,s){"use strict";s.r(e);var o=s("SDJZ"),i=s.n(o),n=s("NToG"),r=s.n(n),c=function(){function t(){i()(this,t)}return r()(t,[{key:"baseStrings",value:function(){return["Select all visible objects","+ %s object","+ %s objects","Table limit of %s objects reached (%s remaining).","%s object","%s objects","(%s Object)","(%s Objects)","%s object selected","%s objects selected","Export %s Object","Export %s Objects","Error Loading Object Data","The data for the object property “%s” could not be loaded. Please contact the administrator."]}},{key:"getString",value:function(t){var e=this.strings();return e[t]?e[t]:t}}]),t}();e.default=c},Hqm2:function(t,e,s){"use strict";s.r(e);s("e2Kn");var o=s("rpZP"),i={name:"BusinessObjectWidgetLayout",mixins:[s("CqAs").a,o.a],props:{title:{type:String},customTitle:{type:String},totalItemCount:{type:Number},collapsed:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},isCollapsable:{type:Boolean,default:!0},isConfigurable:{type:Boolean,default:!0},widgetId:{type:String,required:!0},isConfigOpen:{type:Boolean,default:!1},scrollContent:{type:Boolean,default:!0},businessObjectType:{type:String}},data:function(){return{configOpened:!1}},computed:{collapseId:function(){return"widget-".concat(this.uuid)},tooltipWidgetConfiguration:function(){return this.configOpened?this.$locale.translate("Close widget configuration"):this.$locale.translate("Open widget configuration")},expandCollapseTitle:function(){return this.collapsed?this.$locale.translate("Expand widget"):this.$locale.translate("Collapse widget")},totalItemsText:function(){return this.totalItemCount>1?"(%s Objects)":"(%s Object)"}},watch:{isConfigOpen:function(t){this.configOpened=t}},methods:{switchCollapse:function(){this.collapsed?this.$emit("expand"):this.$emit("collapse")},toggleWidgetConfiguration:function(){this.configOpened=!this.configOpened,this.$emit("toggle-configuration")}}},n=(s("iUTv"),s("psIG")),r=Object(n.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"border mt-3 Background--LightGray Widget",class:{"Widget--Expanded":!t.collapsed},attrs:{"data-widget-id":t.widgetId}},[t.showHeader?s("div",{staticClass:"Widget__Header",class:{"border-bottom":!t.collapsed}},[s("b-row",{staticClass:"px-3 py-2",attrs:{"no-gutters":"","align-v":"center"}},[s("b-col",{staticClass:"mb-2 mb-lg-0",attrs:{lg:"6"}},[t.isCollapsable?s("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-2",attrs:{title:t.expandCollapseTitle,"aria-label":t.expandCollapseTitle},on:{click:function(e){return t.switchCollapse()}}},[s("CommonIcon",{staticClass:"Font--Small Widget__Icon",attrs:{icon:t.collapsed?"arrow-right-1":"arrow-down-1"}})],1):t._e(),t._v(" "),t._t("title",[s("h3",{staticClass:"Widget__Header__Title"},[t.customTitle?s("span",{staticClass:"Widget__Header__Title--Custom"},[t._v("\n                            "+t._s(t.customTitle)+"\n                        ")]):s("span",[t._v("\n                            "+t._s(t._f("translate")(t.title))+"\n                        ")]),t._v(" "),t.totalItemCount?[t._v("\n                            "+t._s(t._f("translate")(t.getBusinessObjectText(t.totalItemsText),t.totalItemCount))+"\n                        ")]:t._e()],2)])],2),t._v(" "),t.isConfigurable?s("b-col",{staticClass:"text-right",attrs:{lg:"6"}},[t.$slots.configuration?[t._t("configuration")]:[t._t("additional-configuration"),t._v(" "),s("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t.tooltipWidgetConfiguration,"aria-label":t.tooltipWidgetConfiguration},on:{click:function(e){return t.toggleWidgetConfiguration()}}},[s("CommonIcon",{staticClass:"Widget__Icon Widget__Action",attrs:{icon:"cog"}})],1)]],2):t._e()],1)],1):t._e(),t._v(" "),s("b-collapse",{staticClass:"position-relative Widget__Content",class:{"overflow-auto":!t.isConfigOpen&&t.scrollContent,"overflow-hidden":t.isConfigOpen},attrs:{id:t.collapseId,visible:!t.collapsed}},[t._t("default")],2)],1)},[],!1,null,null,null);e.default=r.exports},IrnS:function(t){t.exports=JSON.parse('[{"name":"Base.js"},{"name":"CustomerUser.js"},{"name":"FormDraft.js"},{"name":"KnowledgeBaseArticle.js"},{"name":"KnowledgeBaseArticleAttachment.js"},{"name":"Statistic.js"},{"name":"StatisticReport.js"},{"name":"Ticket.js"},{"name":"TicketArticle.js"},{"name":"TicketAttachment.js"},{"name":"WebNotification.js"}]')},K4DB:function(t,e,s){var o=s("e+GP"),i=s("T1e2");t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?i(t):e}},"O+kl":function(t,e,s){"use strict";s.r(e);var o=s("SDJZ"),i=s.n(o),n=s("NToG"),r=s.n(n),c=s("K4DB"),a=s.n(c),l=s("+IV6"),u=s.n(l),d=s("eef+"),b=s.n(d),f=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),r()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible articles","+ %s object":"+ %s article","+ %s objects":"+ %s articles","Table limit of %s objects reached (%s remaining).":"Table limit of %s articles reached (%s remaining).","%s object":"%s article","%s objects":"%s articles","(%s Object)":"(%s Article)","(%s Objects)":"(%s Articles)","%s object selected":"%s article selected","%s objects selected":"%s articles selected","Export %s Object":"Export %s Article","Export %s Objects":"Export %s Articles","Error Loading Object Data":"Error Loading Article Data","The data for the object property “%s” could not be loaded. Please contact the administrator.":"The data for the article property “%s” could not be loaded. Please contact the administrator."}}}]),e}(s("FgkW").default);e.default=new f},Qp1C:function(t,e,s){"use strict";s.r(e);var o=s("SDJZ"),i=s.n(o),n=s("NToG"),r=s.n(n),c=s("K4DB"),a=s.n(c),l=s("+IV6"),u=s.n(l),d=s("eef+"),b=s.n(d),f=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),r()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible articles","+ %s object":"+ %s article","+ %s objects":"+ %s articles","Table limit of %s objects reached (%s remaining).":"Table limit of %s articles reached (%s remaining).","%s object":"%s article","%s objects":"%s articles","(%s Object)":"(%s Article)","(%s Objects)":"(%s Articles)","%s object selected":"%s article selected","%s objects selected":"%s articles selected","Export %s Object":"Export %s Article","Export %s Objects":"Export %s Articles","Error Loading Object Data":"Error Loading Article Data","The data for the object property “%s” could not be loaded. Please contact the administrator.":"The data for the article property “%s” could not be loaded. Please contact the administrator."}}}]),e}(s("FgkW").default);e.default=new f},T1e2:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},T81T:function(t,e,s){"use strict";s.r(e);var o=s("SDJZ"),i=s.n(o),n=s("NToG"),r=s.n(n),c=s("K4DB"),a=s.n(c),l=s("+IV6"),u=s.n(l),d=s("eef+"),b=s.n(d),f=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),r()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible notifications","+ %s object":"+ %s notification","+ %s objects":"+ %s notifications","Table limit of %s objects reached (%s remaining).":"Table limit of %s notifications reached (%s remaining).","%s object":"%s notification","%s objects":"%s notifications","(%s Object)":"(%s Notification)","(%s Objects)":"(%s Notifications)","%s object selected":"%s notification selected","%s objects selected":"%s notifications selected","Export %s Object":"Export %s Notification","Export %s Objects":"Export %s Notifications","Error Loading Object Data":"Error Loading Notification Data","The data for the object property “%s” could not be loaded. Please contact the administrator.":"The data for the notification property “%s” could not be loaded. Please contact the administrator."}}}]),e}(s("FgkW").default);e.default=new f},UEi5:function(t,e,s){"use strict";s.r(e);var o=s("SDJZ"),i=s.n(o),n=s("NToG"),r=s.n(n),c=s("K4DB"),a=s.n(c),l=s("+IV6"),u=s.n(l),d=s("eef+"),b=s.n(d),f=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),r()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible attachments","+ %s object":"+ %s attachment","+ %s objects":"+ %s attachments","Table limit of %s objects reached (%s remaining).":"Table limit of %s attachments reached (%s remaining).","%s object":"%s attachment","%s objects":"%s attachments","(%s Object)":"(%s Attachment)","(%s Objects)":"(%s Attachments)","%s object selected":"%s attachment selected","%s objects selected":"%s attachments selected","Export %s Object":"Export %s Attachment","Export %s Objects":"Export %s Attachments","Error Loading Object Data":"Error Loading Attachment Data","The data for the object property “%s” could not be loaded. Please contact the administrator.":"The data for the attachment property “%s” could not be loaded. Please contact the administrator."}}}]),e}(s("FgkW").default);e.default=new f},WI9V:function(t,e){function s(e,o){return t.exports=s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(e,o)}t.exports=s},Wx4K:function(t,e,s){"use strict";s.r(e);var o=s("SDJZ"),i=s.n(o),n=s("NToG"),r=s.n(n),c=s("K4DB"),a=s.n(c),l=s("+IV6"),u=s.n(l),d=s("eef+"),b=s.n(d),f=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),r()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible customer users","+ %s object":"+ %s customer user","+ %s objects":"+ %s customer users","Table limit of %s objects reached (%s remaining).":"Table limit of %s customer users reached (%s remaining).","%s object":"%s customer user","%s objects":"%s customer users","(%s object)":"(%s customer user)","(%s objects)":"(%s customer users)","%s object selected":"%s customer user selected","%s objects selected":"%s customer users selected","Export %s Object":"Export %s Customer User","Export %s Objects":"Export %s Customer Users"}}}]),e}(s("FgkW").default);e.default=new f},Y2DI:function(t,e,s){var o={"./Base":"FgkW","./Base.js":"FgkW","./CustomerUser":"Wx4K","./CustomerUser.js":"Wx4K","./FormDraft":"f3mG","./FormDraft.js":"f3mG","./KnowledgeBaseArticle":"Qp1C","./KnowledgeBaseArticle.js":"Qp1C","./KnowledgeBaseArticleAttachment":"UEi5","./KnowledgeBaseArticleAttachment.js":"UEi5","./Statistic":"50Pc","./Statistic.js":"50Pc","./StatisticReport":"l+FU","./StatisticReport.js":"l+FU","./Ticket":"hkXo","./Ticket.js":"hkXo","./TicketArticle":"O+kl","./TicketArticle.js":"O+kl","./TicketAttachment":"3PFr","./TicketAttachment.js":"3PFr","./WebNotification":"T81T","./WebNotification.js":"T81T","./directory-index":"IrnS","./directory-index.json":"IrnS"};function i(t){var e=n(t);return s(e)}function n(t){if(!s.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=n,t.exports=i,i.id="Y2DI"},"e+GP":function(t,e){function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return"function"==typeof Symbol&&"symbol"===s(Symbol.iterator)?t.exports=o=function(t){return s(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":s(t)},o(e)}t.exports=o},"eef+":function(t,e,s){var o=s("WI9V");t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},f3mG:function(t,e,s){"use strict";s.r(e);var o=s("SDJZ"),i=s.n(o),n=s("NToG"),r=s.n(n),c=s("K4DB"),a=s.n(c),l=s("+IV6"),u=s.n(l),d=s("eef+"),b=s.n(d),f=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),r()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible drafts","+ %s object":"+ %s draft","+ %s objects":"+ %s drafts","Table limit of %s objects reached (%s remaining).":"Table limit of %s drafts reached (%s remaining).","%s object":"%s draft","%s objects":"%s drafts","(%s object)":"(%s draft)","(%s objects)":"(%s drafts)","%s object selected":"%s draft selected","%s objects selected":"%s drafts selected","Export %s Object":"Export %s Draft","Export %s Objects":"Export %s Drafts"}}}]),e}(s("FgkW").default);e.default=new f},hkXo:function(t,e,s){"use strict";s.r(e);var o=s("SDJZ"),i=s.n(o),n=s("NToG"),r=s.n(n),c=s("K4DB"),a=s.n(c),l=s("+IV6"),u=s.n(l),d=s("eef+"),b=s.n(d),f=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),r()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible tickets","+ %s object":"+ %s ticket","+ %s objects":"+ %s tickets","Table limit of %s objects reached (%s remaining).":"Table limit of %s tickets reached (%s remaining).","%s object":"%s ticket","%s objects":"%s tickets","(%s Object)":"(%s Ticket)","(%s Objects)":"(%s Tickets)","%s object selected":"%s ticket selected","%s objects selected":"%s tickets selected","Export %s Object":"Export %s Ticket","Export %s Objects":"Export %s Tickets","Error Loading Object Data":"Error Loading Ticket Data","The data for the object property “%s” could not be loaded. Please contact the administrator.":"The data for the ticket property “%s” could not be loaded. Please contact the administrator."}}}]),e}(s("FgkW").default);e.default=new f},iUTv:function(t,e,s){"use strict";var o=s("Aubc");s.n(o).a},"l+FU":function(t,e,s){"use strict";s.r(e);var o=s("SDJZ"),i=s.n(o),n=s("NToG"),r=s.n(n),c=s("K4DB"),a=s.n(c),l=s("+IV6"),u=s.n(l),d=s("eef+"),b=s.n(d),f=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),r()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible reports","+ %s object":"+ %s report","+ %s objects":"+ %s reports","Table limit of %s objects reached (%s remaining).":"Table limit of %s reports reached (%s remaining).","%s object":"%s report","%s objects":"%s reports","(%s Object)":"(%s Report)","(%s Objects)":"(%s Reports)","%s object selected":"%s report selected","%s objects selected":"%s reports selected","Export %s Object":"Export %s Report","Export %s Objects":"Export %s Reports","Error Loading Object Data":"Error Loading Report Data","The data for the object property “%s” could not be loaded. Please contact the administrator.":"The data for the report property “%s” could not be loaded. Please contact the administrator."}}}]),e}(s("FgkW").default);e.default=new f}}]);