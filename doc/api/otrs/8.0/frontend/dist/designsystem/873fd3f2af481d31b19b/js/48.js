(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{TfdS:function(e,t,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var i=n("OvAC"),o=n.n(i),r=(n("e2Kn"),n("9va6"));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}t.a={components:{BusinessObjectWidgetLayout:function(){return n.e(295).then(n.bind(null,"Hqm2"))},CommonPermanentConfiguration:function(){return n.e(333).then(n.bind(null,"vivt"))}},props:{widgetId:{type:String,required:!0},value:{type:Object},businessObjectType:{type:String,required:!0},itemId:{type:[Number,String],required:!1},itemData:{type:Object,default:null},title:{type:String},defaultConfig:{type:Object,default:function(){return{}}},screenType:{type:String},columnLayout:{type:String}},data:function(){return{moduleType:"BusinessObjectWidget",oldWidgetConfig:null,showSettingsFlyout:!1,refreshScreenConfig:!1}},computed:{widgetConfig:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t,this.refreshScreenConfig),this.refreshScreenConfig=!1}},collapsed:function(){return 1===parseInt(this.widgetConfig.Collapsed,10)}},methods:{onExpand:function(){this.$set(this.widgetConfig,"Collapsed",0),this.emitValue()},onCollapse:function(){this.$set(this.widgetConfig,"Collapsed",1),this.emitValue()},refreshConfig:function(){this.$emit("refresh-config")},emitValue:function(){Object(r.isEqual)(this.widgetConfig,this.oldWidgetConfig)||(this.$emit("input",this.widgetConfig,this.oldWidgetConfig,this.refreshScreenConfig),this.refreshScreenConfig=!1,this.oldWidgetConfig=Object(r.cloneDeep)(this.widgetConfig))},onConfigUpdate:function(e,t){t?this.$set(this,"widgetConfig",Object(r.cloneDeep)(e)):this.$set(this,"widgetConfig",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},this.widgetConfig,{},Object(r.cloneDeep)(e))),this.closeSettingsFlyout()},onConfigCancel:function(){this.closeSettingsFlyout()},onConfigReset:function(){this.refreshScreenConfig=!0,this.onConfigUpdate(this.defaultConfig.Config,!0)},toggleSettingsFlyout:function(){this.showSettingsFlyout?this.closeSettingsFlyout():(1===parseInt(this.widgetConfig.Collapsed,10)&&this.onExpand(),this.openSettingsFlyout())},openSettingsFlyout:function(){this.showSettingsFlyout=!0,this.$announcer.setMessage("Settings flyout has been opened.",!0),this.$emit("close-other-flyouts","showSettingsFlyout")},closeSettingsFlyout:function(){this.showSettingsFlyout=!1,this.$announcer.setMessage("Settings flyout has been closed.",!0),this.$emit("close-other-flyouts",null)}}}},Vjax:function(e,t,n){},a6sI:function(e,t,n){"use strict";var i=n("Vjax");n.n(i).a},kQZ2:function(e,t,n){"use strict";n.r(t);n("2Tod"),n("ABKx");var i=n("OvAC"),o=n.n(i),r=(n("9ovy"),n("W1QL"),n("K/PF"),n("75LO"),n("4aJ6"),n("t91x"),n("oMRA"),n("6d4m"),n("TfdS")),s=n("9va6");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var l={name:"BusinessObjectWidgetProperty",mixins:[r.a],props:{testMode:{type:Boolean,default:!1}},data:function(){return{editingProperty:null,localProperties:[]}},computed:{properties:function(){var e=this,t=[],n="1";return Boolean(parseInt(this.widgetConfig.UsingDefaultProperties,10))&&(n="2"),this.localProperties.forEach(function(i){e.$set(i,"Key",i.Name),e.$set(i,"FormMode",!1),i.Name.includes("DynamicField_")&&(i.DynamicFieldName=i.Name.substr(13),i.Name="DynamicField"),i.IsVisible.toString()===n&&t.push(i),i.IsReadOnly=!(void 0===i.IsReadOnly||"1"!==i.IsReadOnly.toString())}),t},identifier:function(){var e=this.widgetConfig.Identifier||[];return(!e||!e.IsVisible||"1"===e.IsVisible.toString())&&e.Name},originalProperties:function(){return this.widgetConfig.Properties}},watch:{originalProperties:function(){this.buildLocalProperties()}},created:function(){this.buildLocalProperties()},mounted:function(){this.subscribeRefreshPushEvents()},methods:{buildLocalProperties:function(){this.localProperties=this.originalProperties.map(function(e){return Object(s.cloneDeep)(e)})},refreshOnPushEvents:function(){return[]},refresh:function(){var e=this;Object.keys(this.$refs).forEach(function(t){t.match(/^property/)&&e.$refs[t][0].fetchData()})},onConfigUpdate:function(e){(e=u({UsingDefaultProperties:"0"},e)).Identifier=u({},this.widgetConfig.Identifier,{IsVisible:e.Identifier?"1":"0"}),r.a.methods.onConfigUpdate.call(this,e)},onConfigReset:function(){this.onConfigUpdate(u({},this.defaultConfig.Config,{UsingDefaultProperties:"1"}))},onFormMode:function(e,t){var n=this,i=function(){e.FormMode=t,n.editingProperty=t?e:null};this.editingProperty?this.$refs["property".concat(this.editingProperty.Key)][0].confirmCancel().then(function(e){e&&(n.editingProperty.FormMode=!1,i())}):i()},subscribeRefreshPushEvents:function(){var e=this;this.clientSubscribePushEvent(this.refreshOnPushEvents(),function(){e.refresh()})}}},a=(n("a6sI"),n("psIG")),f=Object(a.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BusinessObjectWidgetLayout",{attrs:{collapsed:e.collapsed,title:e.widgetConfig.CustomTitle||e.title,"widget-id":e.widgetId,"clip-content":e.showSettingsFlyout},on:{expand:e.onExpand,collapse:e.onCollapse,"toggle-configuration":e.toggleSettingsFlyout}},[n("b-container",{class:{"position-absolute":e.showSettingsFlyout},attrs:{fluid:""}},[n("b-row",{staticClass:"p-3"},[n("b-col",{staticClass:"pl-3 pr-0"},[n("b-row",[e.identifier?[n("Property"+e.identifier,{key:e.identifier,tag:"component",attrs:{"item-id":e.itemId}})]:e._e()],2),e._v(" "),n("b-row",e._l(e.properties,function(t){return n("Property"+t.Name,{key:t.Key,ref:"property"+t.Key,refInFor:!0,tag:"component",attrs:{"item-id":e.itemId,"dynamic-field-name":t.DynamicFieldName,"read-only":t.IsReadOnly,"form-mode":t.FormMode,"column-layout":e.columnLayout,"screen-type":e.screenType},on:{"form-mode":function(n){return e.onFormMode(t,n)}}})}),1)],1)],1)],1),e._v(" "),e.showSettingsFlyout?n("CommonPermanentConfiguration",{staticClass:"position-relative float-right text-left\n            Flyout Flyout--FromRight Flyout__Settings Flyout--Show Flyout--InWidget h-100",attrs:{"current-config":e.widgetConfig,"screen-type":e.screenType,"module-type":e.moduleType,"widget-id":e.widgetId,"additional-module-type-params":{BusinessObjectType:e.businessObjectType},title:e._f("translate")("Edit widget"),"no-gutters":""},on:{changed:e.onConfigUpdate,cancel:e.onConfigCancel,reset:e.onConfigReset}}):e._e()],1)},[],!1,null,null,null);t.default=f.exports}}]);