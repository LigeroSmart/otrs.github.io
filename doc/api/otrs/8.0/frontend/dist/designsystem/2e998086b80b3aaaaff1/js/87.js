(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{MLVc:function(l,o,t){"use strict";t.r(o);var s={name:"CommonCollapsible",props:{title:{type:String},isCollapsed:{type:Boolean}},data:function(){return{localIsCollapsed:this.isCollapsed}},watch:{isCollapsed:function(l){this.localIsCollapsed=l}},methods:{onTitleClick:function(){this.localIsCollapsed=!this.localIsCollapsed,this.$emit("toggle",this.localIsCollapsed)}}},a=(t("ZrkM"),t("psIG")),e=Object(a.a)(s,function(){var l=this,o=l.$createElement,t=l._self._c||o;return t("div",{staticClass:"CommonCollapsible"},[t("div",{staticClass:"mb-1 CommonCollapsible__Header"},[t("div",{staticClass:"float-right CommonCollapsible__Info"},[l._t("info")],2),l._v(" "),t("CommonLink",{staticClass:"d-block CommonCollapsible__Title",on:{click:l.onTitleClick}},[t("CommonIcon",{staticClass:"mr-2",attrs:{icon:l.localIsCollapsed?"arrow-right-1":"arrow-down-1",decorative:""}}),l._v(" "),l._t("title",[l._v("\n                "+l._s(l._f("translate")(l.title))+"\n            ")],{title:l.title})],2)],1),l._v(" "),t("div",{staticClass:"border-bottom mb-3"}),l._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!l.localIsCollapsed,expression:"!localIsCollapsed"}],staticClass:"mb-3 CommonCollapsible__Content"},[l._t("default")],2)])},[],!1,null,null,null);o.default=e.exports},ZYM5:function(l,o,t){},ZrkM:function(l,o,t){"use strict";var s=t("ZYM5");t.n(s).a}}]);