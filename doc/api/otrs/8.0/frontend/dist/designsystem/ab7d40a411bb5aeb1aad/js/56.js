(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"4oQB":function(t,e,n){"use strict";n.r(e);var i={name:"BusinessObjectWidgetCustomerInformation",components:{Form:function(){return Promise.all([n.e(7),n.e(8),n.e(15)]).then(n.bind(null,"GgUG"))}},mixins:[n("TfdS").a],props:{testMode:{type:Boolean,default:!1}},data:function(){return{configOpen:!1}},computed:{properties:function(){return this.widgetConfig.Properties}},mounted:function(){this.subscribeRefreshPushEvents()},methods:{refreshOnPushEvents:function(){return[]},refresh:function(){this.$refs.property.forEach(function(t){t.fetchData()})},subscribeRefreshPushEvents:function(){var t=this;this.clientSubscribePushEvent(this.refreshOnPushEvents(),function(){t.refresh()})}}},o=n("psIG"),s=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BusinessObjectWidgetLayout",{attrs:{collapsed:t.collapsed,title:t.widgetConfig.CustomTitle||t.title,"widget-id":t.widgetId,"clip-content":t.showSettingsFlyout},on:{expand:t.onExpand,collapse:t.onCollapse,"toggle-configuration":t.toggleSettingsFlyout}},[n("b-container",{class:{"position-absolute":t.showSettingsFlyout},attrs:{fluid:""}},[n("b-row",{staticClass:"pt-3 pr-3"},t._l(t.properties,function(e){return n("Property"+e,{key:e,ref:"property",refInFor:!0,tag:"component",attrs:{"item-id":t.itemId,"column-layout":t.columnLayout}})}),1)],1),t._v(" "),t.showSettingsFlyout?n("CommonPermanentConfiguration",{staticClass:"position-relative float-right text-left\n            Flyout Flyout--FromRight Flyout__Settings Flyout--Show Flyout--InWidget h-100",attrs:{"current-config":t.widgetConfig,"screen-type":t.screenType,"module-type":t.moduleType,"widget-id":t.widgetId,"additional-module-type-params":{BusinessObjectType:t.businessObjectType},title:t._f("translate")("Edit widget"),"no-gutters":""},on:{changed:t.onConfigUpdate,cancel:t.onConfigCancel,reset:t.onConfigReset}}):t._e()],1)},[],!1,null,null,null);e.default=s.exports},TfdS:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var i=n("OvAC"),o=n.n(i),s=(n("e2Kn"),n("9va6"));function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}e.a={components:{BusinessObjectWidgetLayout:function(){return n.e(294).then(n.bind(null,"Hqm2"))},CommonPermanentConfiguration:function(){return n.e(332).then(n.bind(null,"vivt"))}},props:{widgetId:{type:String,required:!0},value:{type:Object},businessObjectType:{type:String,required:!0},itemId:{type:[Number,String],required:!0},itemData:{type:Object,default:null},title:{type:String},defaultConfig:{type:Object,default:function(){return{}}},screenType:{type:String},columnLayout:{type:String}},data:function(){return{moduleType:"BusinessObjectDetailViewWidget",oldWidgetConfig:null,showSettingsFlyout:!1,refreshScreenConfig:!1}},computed:{widgetConfig:{get:function(){return this.value},set:function(t,e){this.$emit("input",t,e,this.refreshScreenConfig),this.refreshScreenConfig=!1}},collapsed:function(){return 1===parseInt(this.widgetConfig.Collapsed,10)}},methods:{onExpand:function(){this.$set(this.widgetConfig,"Collapsed",0),this.emitValue()},onCollapse:function(){this.$set(this.widgetConfig,"Collapsed",1),this.emitValue()},refreshConfig:function(){this.$emit("refresh-config")},emitValue:function(){Object(s.isEqual)(this.widgetConfig,this.oldWidgetConfig)||(this.$emit("input",this.widgetConfig,this.oldWidgetConfig,this.refreshScreenConfig),this.refreshScreenConfig=!1,this.oldWidgetConfig=Object(s.cloneDeep)(this.widgetConfig))},onConfigUpdate:function(t,e){e?this.$set(this,"widgetConfig",Object(s.cloneDeep)(t)):this.$set(this,"widgetConfig",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){o()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},this.widgetConfig,{},Object(s.cloneDeep)(t))),this.closeSettingsFlyout()},onConfigCancel:function(){this.closeSettingsFlyout()},onConfigReset:function(){this.refreshScreenConfig=!0,this.onConfigUpdate(this.defaultConfig.Config,!0)},toggleSettingsFlyout:function(){this.showSettingsFlyout?this.closeSettingsFlyout():(1===parseInt(this.widgetConfig.Collapsed,10)&&this.onExpand(),this.openSettingsFlyout())},openSettingsFlyout:function(){this.showSettingsFlyout=!0,this.$announcer.setMessage("Settings flyout has been opened.",!0),this.$emit("close-other-flyouts","showSettingsFlyout")},closeSettingsFlyout:function(){this.showSettingsFlyout=!1,this.$announcer.setMessage("Settings flyout has been closed.",!0),this.$emit("close-other-flyouts",null)}}}}}]);