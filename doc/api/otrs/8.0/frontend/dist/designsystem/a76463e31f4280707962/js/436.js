(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{FaDK:function(o,t,n){},"PD/b":function(o,t,n){"use strict";var e=n("FaDK");n.n(e).a},nDnJ:function(o,t,n){"use strict";n.r(t);n("GkPX"),n("U8p0"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var e=n("9va6"),i={name:"CommonActionMenu",components:{CommonPopoverCard:function(){return n.e(98).then(n.bind(null,"FdEw"))}},mixins:[n("rpZP").a],props:{actions:{type:Object},label:{type:String,default:"Actions"},isNarrow:{type:Boolean},isInline:{type:Boolean},placement:{type:String,default:"bottomright"}},data:function(){return{popoverExpanded:!1}},computed:{popoverId:function(){return"commonActionMenuPopover-".concat(this.uuid)},popoverCustomClass:function(){var o=["shadow","CommonActionMenu__Popover"];return this.isNarrow&&o.push("CommonActionMenu__Popover--IsNarrow"),o.join(" ")},clusters:function(){var o=this,t=Object(e.cloneDeep)(this.actions),n=[];return Object.keys(t).forEach(function(e){n.push({name:o.$locale.translate(e),actions:t[e]})}),n.sort(function(o,t){return o.name.localeCompare(t.name)}),n}},methods:{onPopoverShow:function(){this.popoverExpanded=!0},onPopoverHidden:function(){this.popoverExpanded=!1},onActionClick:function(o){this.$root.$emit("bv::hide::popover",this.popoverId),this.$emit("action-click",o)}}},r=(n("PD/b"),n("psIG")),s=Object(r.a)(i,function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"CommonActionMenu",class:{"d-inline":o.isInline}},[o._t("label",[n("CommonLink",{staticClass:"CommonActionMenu__Link",attrs:{id:o.popoverId,"aria-label":o._f("translate")(o.label)}},[n("span",{staticClass:"HoverUnderline"},[o._v(o._s(o._f("translate")(o.label)))]),o._v(" "),n("CommonIcon",{staticClass:"pl-1",attrs:{icon:o.popoverExpanded?"arrow-up-1":"arrow-down-1",size:"sm",decorative:""}})],1)],{popoverId:o.popoverId,label:o.label,popoverExpanded:o.popoverExpanded}),o._v(" "),n("CommonPopoverCard",{attrs:{"popover-triggers":"click hover blur","popover-custom-class":o.popoverCustomClass,"popover-placement":o.placement,"popover-id":o.popoverId},on:{show:o.onPopoverShow,hidden:o.onPopoverHidden}},[n("div",{staticClass:"m-1 p-0 CommonActionMenu__Actions"},[n("ul",{staticClass:"list-group list-group-horizontal row no-gutters"},o._l(o.clusters,function(t,e){return n("li",{key:e,staticClass:"col list-group-item py-1 CommonActionMenu__ClusterItem"},[n("span",{staticClass:"d-block pb-1"},[o._v(o._s(t.name))]),o._v(" "),n("ul",{staticClass:"list-group"},o._l(t.actions,function(t,e){return n("li",{key:e,staticClass:"border-bottom list-group-item m-0 p-0 CommonActionMenu__ActionItem",on:{click:function(n){return o.onActionClick(t)}}},[n("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-block HoverUnderline",attrs:{title:o._f("translate")(t.Description)}},[o._v("\n                                "+o._s(o._f("translate")(t.Name))+"\n                            ")])],1)}),0)])}),0)])])],2)},[],!1,null,null,null);t.default=s.exports}}]);