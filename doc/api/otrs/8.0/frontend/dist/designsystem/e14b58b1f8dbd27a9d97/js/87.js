(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"+53n":function(t,e,o){"use strict";o.r(e);var i=o("OvAC"),n=o.n(i),s=(o("GkPX"),{name:"CommonFlyout",props:{name:{type:String,required:!0},label:{type:String,default:"Flyout"},size:{type:String,default:"md",validator:function(t){return-1!==["sm","md","lg"].indexOf(t)}},placement:{type:String,default:"right",validator:function(t){return-1!==["top","left","right"].indexOf(t)}},title:{type:String,default:"Edit screen"},titlePlaceholders:{type:Array},hideHeader:{type:Boolean},closeButtonTitle:{type:String,default:"Close this action"},isExpanded:{type:Boolean},isCentered:{type:Boolean},isFullHeight:{type:Boolean},isFullscreen:{type:Boolean},isInWidget:{type:Boolean},isModal:{type:Boolean},hasFrostedOverlay:{type:Boolean},showOrganizerSidebar:{type:Boolean},hasNoContentPadding:{type:Boolean},alwaysRenderContent:{type:Boolean},confirmCloseCallback:{type:Function},hideExpandButton:{type:Boolean},hideMinimizeButton:{type:Boolean}},data:function(){return{isOpen:!1,localIsExpanded:this.isExpanded,isMinimized:!1}},computed:{nameClass:function(){return n()({},"CommonFlyout__".concat(this.name),!0)},expandButtonTitle:function(){return this.localIsExpanded?"Collapse":"Expand"},minimizeButtonTitle:function(){return this.isMinimized?"Expand":"Minimize"},localHideMinimizeButton:function(){return!(!this.isInWidget&&!this.isModal)||this.hideMinimizeButton}},watch:{confirmCloseCallback:function(t){t?this.$flyout.registerCallback(this.name,t):this.$flyout.deregisterCallback(this.name)},isExpanded:function(t){this.localIsExpanded=t},isModal:function(t){t?document.addEventListener("keyup",this.onEscape):document.removeEventListener("keyup",this.onEscape)}},created:function(){this.confirmCloseCallback&&this.$flyout.registerCallback(this.name,this.confirmCloseCallback)},mounted:function(){var t=this;this.$bus.$on("openFlyout",this.openFlyoutCallback),this.$bus.$on("closeFlyout",this.closeFlyoutCallback),this.$nextTick(function(){t.$emit("loaded")})},beforeDestroy:function(){this.isModal&&document.removeEventListener("keyup",this.onEscape),this.$flyout.deregisterCallback(this.name),this.$bus.$off("openFlyout",this.openFlyoutCallback),this.$bus.$off("closeFlyout",this.closeFlyoutCallback)},methods:{closeFlyout:function(t){this.isOpen&&(this.isOpen=!1),this.isModal&&document.removeEventListener("keyup",this.onEscape),this.$announcer&&this.$announcer.setMessage("".concat(this.label," has been closed."),!0),this.$emit("close",t)},openFlyout:function(t){this.isOpen||(this.isOpen=!0),this.isMinimized&&(this.isMinimized=!1),this.isModal&&document.addEventListener("keyup",this.onEscape),this.$announcer&&this.$announcer.setMessage("".concat(this.label," has been opened."),!0),this.$emit("open",t)},openFlyoutCallback:function(t){t&&t.name!==this.name||this.openFlyout(t)},closeFlyoutCallback:function(t){t&&t.name!==this.name||(this.closeFlyout(t),this.localIsExpanded=this.isExpanded,this.isMinimized=!1)},toggleExpanded:function(){this.localIsExpanded=!this.localIsExpanded},toggleMinimized:function(){this.isMinimized=!this.isMinimized},onEscape:function(t){27===t.keyCode&&this.$flyout.close(this.name)}}}),a=(o("gTHR"),o("psIG")),l=Object(a.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-row",{directives:[{name:"show",rawName:"v-show",value:!t.isMinimized,expression:"!isMinimized"}],staticClass:"text-left CommonFlyout",class:Object.assign({},{"h-100":t.isInWidget,"position-fixed":!t.isInWidget,"position-relative":t.isInWidget,"float-right":t.isInWidget,"CommonFlyout--InWidget":t.isInWidget,"CommonFlyout--WithTransition":!t.isInWidget,"CommonFlyout--Show":t.isOpen,"CommonFlyout--FromTop":"top"===t.placement,"CommonFlyout--FromLeft":"left"===t.placement,"CommonFlyout--FromRight":"right"===t.placement,"CommonFlyout--Expanded":t.localIsExpanded,"CommonFlyout--Large":!t.localIsExpanded&&"lg"===t.size,"CommonFlyout--Medium":!t.localIsExpanded&&"md"===t.size,"CommonFlyout--Small":"sm"===t.size,"CommonFlyout--Centered":t.isCentered,"CommonFlyout--FullHeight":t.isFullHeight,"CommonFlyout--Fullscreen":t.isFullscreen,"CommonFlyout--ShowOrganizerSidebar":t.showOrganizerSidebar,"CommonFlyout--HasFrostedOverlay":t.hasFrostedOverlay},t.nameClass),attrs:{"no-gutters":""}},[o("b-col",[t.isOpen||t.alwaysRenderContent?o("b-container",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"px-0 CommonFlyout__Container",class:{"h-100":t.isFullHeight},attrs:{fluid:""}},[t.hideHeader?t._e():o("header",[o("b-row",{staticClass:"px-4",attrs:{"no-gutters":"","align-v":"center"}},[o("b-col",{staticClass:"text-left",attrs:{cols:"8"}},[t._t("title",[o("h3",[t._v("\n                                    "+t._s(t._f("translate").apply(void 0,[t.title].concat(t.titlePlaceholders)))+"\n                                ")])])],2),t._v(" "),o("b-col",{staticClass:"text-right",attrs:{cols:"4"}},[t.hideExpandButton?t._e():o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"CommonFlyout__ExpandButton",attrs:{title:t._f("translate")(t.expandButtonTitle)},on:{click:t.toggleExpanded}},[o("CommonIcon",{attrs:{icon:t.localIsExpanded?"shrink-2":"expand-3"}})],1),t._v(" "),t.localHideMinimizeButton?t._e():o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"CommonFlyout__MinimizeButton",attrs:{title:t._f("translate")(t.minimizeButtonTitle)},on:{click:t.toggleMinimized}},[o("CommonIcon",{attrs:{icon:"minimize-custom"}})],1),t._v(" "),o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t._f("translate")(t.closeButtonTitle)},on:{click:function(e){return t.$flyout.close(t.name)}}},[o("CommonIcon",{attrs:{icon:"close"}})],1)],1)],1)],1),t._v(" "),o("b-row",{class:{"h-100":t.isFullHeight,"pt-3":!t.hasNoContentPadding,"m-0":!t.hasNoContentPadding},attrs:{"no-gutters":t.hasNoContentPadding}},[o("b-col",{staticClass:"CommonFlyout__Content",class:{"px-4":!t.hasNoContentPadding}},[t._t("default")],2)],1)],1):t._e()],1)],1),t._v(" "),t.isMinimized?o("b-row",{staticClass:"position-fixed CommonFlyout CommonFlyout--FromRight CommonFlyout--Minimized CommonFlyout--Show",attrs:{"align-v":"center","no-gutters":""}},[o("b-col",{staticClass:"p-0 text-center"},[o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"CommonFlyout__MinimizeButton",attrs:{title:t._f("translate")(t.minimizeButtonTitle)},on:{click:t.toggleMinimized}},[o("CommonIcon",{attrs:{icon:"expand-3"}})],1)],1)],1):t._e(),t._v(" "),t.isModal&&t.isOpen?o("div",{staticClass:"CommonFlyout__Overlay",class:{"CommonFlyout__Overlay--Frosted":t.hasFrostedOverlay,"CommonFlyout__Overlay--ShowOrganizerSidebar":t.showOrganizerSidebar},on:{click:function(e){return t.$flyout.close(t.name)}}}):t._e()],1)},[],!1,null,null,null);e.default=l.exports},GgAw:function(t,e,o){},gTHR:function(t,e,o){"use strict";var i=o("GgAw");o.n(i).a}}]);