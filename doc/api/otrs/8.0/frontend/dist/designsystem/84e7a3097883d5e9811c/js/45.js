(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{GZPz:function(e,t,n){},TfdS:function(e,t,n){"use strict";n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("e2Kn");var i=n("9va6");t.a={components:{BusinessObjectWidgetLayout:function(){return n.e(276).then(n.bind(null,"Hqm2"))}},props:{widgetId:{type:String,required:!0},value:{type:Object,required:!0},businessObjectType:{type:String,required:!0},itemId:{type:[Number,String],required:!0},itemData:{type:Object,default:null},title:{type:String},defaultConfig:{type:Object,default:function(){return{}}},screenType:{type:String},columnLayout:{type:String}},data:function(){return{oldWidgetConfig:null,showSettingsFlyout:!1}},computed:{widgetConfig:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}}},methods:{onExpand:function(){this.$set(this.widgetConfig,"Collapsed",0),this.emitValue()},onCollapse:function(){this.$set(this.widgetConfig,"Collapsed",1),this.emitValue()},emitValue:function(){Object(i.isEqual)(this.widgetConfig,this.oldWidgetConfig)||(this.$emit("input",this.widgetConfig,this.oldWidgetConfig),this.oldWidgetConfig=Object(i.cloneDeep)(this.widgetConfig))},onConfigUpdate:function(e){var t=this;Object.keys(e).forEach(function(n){return t.$set(t.widgetConfig,n,Object(i.cloneDeep)(e[n])),!0}),this.emitValue(),this.closeSettingsFlyout()},onConfigCancel:function(){this.closeSettingsFlyout()},onConfigReset:function(){this.onConfigUpdate(this.defaultConfig.Config)},openSettingsFlyout:function(){this.showSettingsFlyout=!0,this.$announcer.setMessage("Settings flyout has been opened.",!0),this.$emit("close-other-flyouts","showSettingsFlyout")},closeSettingsFlyout:function(){this.showSettingsFlyout=!1,this.$announcer.setMessage("Settings flyout has been closed.",!0),this.$emit("close-other-flyouts",null)}}}},a6sI:function(e,t,n){"use strict";var i=n("GZPz");n.n(i).a},kQZ2:function(e,t,n){"use strict";n.r(t);n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("75LO");var i=n("OvAC"),o=n.n(i),s=(n("4aJ6"),n("t91x"),n("oMRA"),n("6d4m"),n("TfdS"));function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var u={name:"BusinessObjectWidgetProperty",components:{Form:function(){return Promise.all([n.e(5),n.e(11)]).then(n.bind(null,"GgUG"))}},mixins:[s.a],props:{testMode:{type:Boolean,default:!1},screenType:{type:String}},data:function(){return{}},computed:{properties:function(){var e=[],t="1";return Boolean(parseInt(this.widgetConfig.UsingDefaultProperties,10))&&(t="2"),this.widgetConfig.Properties.forEach(function(n){n.Name.includes("DynamicField_")&&(n.DynamicFieldName=n.Name.substr(13),n.Key=n.Name,n.Name="DynamicField"),n.IsVisible.toString()===t&&e.push(n),n.IsReadOnly=!(void 0===n.IsReadOnly||"1"!==n.IsReadOnly.toString())}),e},identifier:function(){var e=this.widgetConfig.Identifier||[];return(!e||!e.IsVisible||"1"===e.IsVisible.toString())&&e.Name},configFormUrl:function(){return["frontend/agent/form/config/screen/module/permanent",this.screenType,"BusinessObjectDetailViewWidget"].join("/")}},mounted:function(){this.subscribeRefreshPushEvents()},methods:{refreshOnPushEvents:function(){return[]},refresh:function(){this.$refs.property.forEach(function(e){e.fetchData()})},onConfigUpdate:function(e){(e=a({UsingDefaultProperties:"0"},e)).Identifier=a({},this.widgetConfig.Identifier,{IsVisible:e.Identifier?"1":"0"}),s.a.methods.onConfigUpdate.call(this,e)},onConfigReset:function(){this.onConfigUpdate(a({},this.defaultConfig.Config,{UsingDefaultProperties:"1"}))},subscribeRefreshPushEvents:function(){var e=this;this.clientSubscribePushEvent(this.refreshOnPushEvents(),function(){e.refresh()})}}},l=(n("a6sI"),n("psIG")),c=Object(l.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BusinessObjectWidgetLayout",{attrs:{collapsed:1===parseInt(e.widgetConfig.Collapsed,10),title:e.title||e.$options.name,"widget-id":e.widgetId},on:{expand:e.onExpand,collapse:e.onCollapse},scopedSlots:e._u([{key:"configuration",fn:function(){return[n("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e._f("translate")("Open widget configuration")},on:{click:e.openSettingsFlyout}},[n("CommonIcon",{staticClass:"Widget__Icon Widget__Action",attrs:{icon:"cog"}})],1)]},proxy:!0}])},[e._v(" "),n("b-container",{class:{"position-absolute":e.showSettingsFlyout},attrs:{fluid:""}},[n("b-row",{staticClass:"p-3"},[n("b-col",{staticClass:"pl-3 pr-0"},[n("b-row",[e.identifier?[n("Property"+e.identifier,{key:e.identifier,tag:"component",attrs:{"item-id":e.itemId}})]:e._e()],2),e._v(" "),n("b-row",[e._l(e.properties,function(t){return["DynamicField"===t.Name?n("Property"+t.Name,{key:t.Key,ref:"property",refInFor:!0,tag:"component",attrs:{"item-id":e.itemId,"dynamic-field-name":t.DynamicFieldName,"read-only":t.IsReadOnly}}):n("Property"+t.Name,{key:t.Name,ref:"property",refInFor:!0,tag:"component",attrs:{"item-id":e.itemId,"read-only":t.IsReadOnly}})]})],2)],1)],1)],1),e._v(" "),e.showSettingsFlyout?n("CommonPermanentConfiguration",{staticClass:"position-relative float-right text-left Flyout Flyout--FromRight Flyout__Settings Flyout--Show h-100",attrs:{"current-config":e.widgetConfig,"screen-type":e.screenType,"module-type":"BusinessObjectDetailViewWidget","widget-id":e.widgetId,"additional-module-type-params":{BusinessObjectType:e.businessObjectType},title:e._f("translate")("Edit widget"),"no-gutters":""},on:{changed:e.onConfigUpdate,cancel:e.onConfigCancel,reset:e.onConfigReset}}):e._e()],1)},[],!1,null,null,null);t.default=c.exports}}]);