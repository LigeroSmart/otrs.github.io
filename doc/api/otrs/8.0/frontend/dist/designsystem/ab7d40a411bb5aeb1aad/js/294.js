(window.webpackJsonp=window.webpackJsonp||[]).push([[294,247,300],{"+J7U":function(t,e,o){var i,n,a=o("We69"),r=o("4feL"),s=0,l=0;t.exports=function(t,e,o){var c=e&&o||0,d=e||[],u=(t=t||{}).node||i,p=void 0!==t.clockseq?t.clockseq:n;if(null==u||null==p){var f=a();null==u&&(u=i=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==p&&(p=n=16383&(f[6]<<8|f[7]))}var g=void 0!==t.msecs?t.msecs:(new Date).getTime(),v=void 0!==t.nsecs?t.nsecs:l+1,m=g-s+(v-l)/1e4;if(m<0&&void 0===t.clockseq&&(p=p+1&16383),(m<0||g>s)&&void 0===t.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=g,l=v,n=p;var C=(1e4*(268435455&(g+=122192928e5))+v)%4294967296;d[c++]=C>>>24&255,d[c++]=C>>>16&255,d[c++]=C>>>8&255,d[c++]=255&C;var w=g/4294967296*1e4&268435455;d[c++]=w>>>8&255,d[c++]=255&w,d[c++]=w>>>24&15|16,d[c++]=w>>>16&255,d[c++]=p>>>8|128,d[c++]=255&p;for(var b=0;b<6;++b)d[c+b]=u[b];return e||r(d)}},"4feL":function(t,e){for(var o=[],i=0;i<256;++i)o[i]=(i+256).toString(16).substr(1);t.exports=function(t,e){var i=e||0,n=o;return[n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]]].join("")}},Aubc:function(t,e,o){},Hqm2:function(t,e,o){"use strict";o.r(e);var i={name:"BusinessObjectWidgetLayout",mixins:[o("rpZP").a],props:{title:{type:String},collapsed:{type:Boolean,default:!1},isCollapsable:{type:Boolean,default:!0},isConfigurable:{type:Boolean,default:!0},widgetId:{type:String,required:!0},clipContent:{type:Boolean,default:!1},scrollContent:{type:Boolean,default:!0}},data:function(){return{configOpened:!1}},computed:{collapseId:function(){return"widget-".concat(this.uuid)}},methods:{switchCollapse:function(){this.collapsed?this.$emit("expand"):this.$emit("collapse")},toggleWidgetConfiguration:function(){this.$emit("toggle-configuration")}}},n=(o("iUTv"),o("psIG")),a=Object(n.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"border mt-3 pt-2 Background--LightGray Widget",class:{"Widget--Expanded":!t.collapsed},attrs:{"data-widget-id":t.widgetId}},[o("div",{staticClass:"Widget__Header",class:{"border-bottom":!t.collapsed}},[o("b-row",{staticClass:"px-2 pb-2",attrs:{"no-gutters":""}},[o("b-col",[t.isCollapsable?o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-2",attrs:{title:t._f("translate")("Toggle widget visibility")},on:{click:function(e){return t.switchCollapse()}}},[o("CommonIcon",{staticClass:"Widget__Icon",attrs:{weight:"regular",icon:t.collapsed?"arrow-right-1":"arrow-down-1"}})],1):t._e(),t._v(" "),t.$slots.title?[t._t("title")]:[o("h2",[t._v(t._s(t._f("translate")(t.title)))])]],2),t._v(" "),t.isConfigurable?o("b-col",{staticClass:"text-right"},[t.$slots.configuration?[t._t("configuration")]:[t._t("additional-configuration"),t._v(" "),o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t._f("translate")("Toggle widget configuration")},on:{click:function(e){return t.toggleWidgetConfiguration()}}},[o("CommonIcon",{staticClass:"Widget__Icon Widget__Action",attrs:{icon:"cog"}})],1)]],2):t._e()],1)],1),t._v(" "),o("b-collapse",{staticClass:"position-relative Widget__Content",class:{"overflow-auto":!t.clipContent&&t.scrollContent,"overflow-hidden":t.clipContent},attrs:{id:t.collapseId,visible:!t.collapsed}},[t._t("default")],2)],1)},[],!1,null,null,null);e.default=a.exports},We69:function(t,e){var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(o){var i=new Uint8Array(16);t.exports=function(){return o(i),i}}else{var n=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),n[e]=t>>>((3&e)<<3)&255;return n}}},iUTv:function(t,e,o){"use strict";var i=o("Aubc");o.n(i).a},rpZP:function(t,e,o){"use strict";var i=o("+J7U"),n=o.n(i);e.a={data:function(){return{uuid:this.getUuid()}},methods:{getUuid:function(){return n()()}}}}}]);