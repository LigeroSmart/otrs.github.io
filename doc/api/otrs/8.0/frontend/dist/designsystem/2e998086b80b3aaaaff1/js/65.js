(window.webpackJsonp=window.webpackJsonp||[]).push([[65,32],{"+J7U":function(t,e,r){var n,a,o=r("We69"),i=r("4feL"),s=0,c=0;t.exports=function(t,e,r){var p=e&&r||0,u=e||[],d=(t=t||{}).node||n,f=void 0!==t.clockseq?t.clockseq:a;if(null==d||null==f){var l=o();null==d&&(d=n=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==f&&(f=a=16383&(l[6]<<8|l[7]))}var v=void 0!==t.msecs?t.msecs:(new Date).getTime(),h=void 0!==t.nsecs?t.nsecs:c+1,y=v-s+(h-c)/1e4;if(y<0&&void 0===t.clockseq&&(f=f+1&16383),(y<0||v>s)&&void 0===t.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=v,c=h,a=f;var g=(1e4*(268435455&(v+=122192928e5))+h)%4294967296;u[p++]=g>>>24&255,u[p++]=g>>>16&255,u[p++]=g>>>8&255,u[p++]=255&g;var m=v/4294967296*1e4&268435455;u[p++]=m>>>8&255,u[p++]=255&m,u[p++]=m>>>24&15|16,u[p++]=m>>>16&255,u[p++]=f>>>8|128,u[p++]=255&f;for(var b=0;b<6;++b)u[p+b]=d[b];return e||i(u)}},"+PXy":function(t,e,r){},"4feL":function(t,e){for(var r=[],n=0;n<256;++n)r[n]=(n+256).toString(16).substr(1);t.exports=function(t,e){var n=e||0,a=r;return[a[t[n++]],a[t[n++]],a[t[n++]],a[t[n++]],"-",a[t[n++]],a[t[n++]],"-",a[t[n++]],a[t[n++]],"-",a[t[n++]],a[t[n++]],"-",a[t[n++]],a[t[n++]],a[t[n++]],a[t[n++]],a[t[n++]],a[t[n++]]].join("")}},OUCj:function(t,e,r){"use strict";r.r(e);r("2Tod"),r("ABKx"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO");var n=r("OvAC"),a=r.n(n),o=r("rpZP"),i=r("yBo+");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var c={name:"Statistic",components:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(r,!0).forEach(function(e){a()(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},Object(i.a)("Components/Statistics/Charts")),mixins:[o.a],props:{format:{type:String},data:{type:Array},options:{type:Object},errorMessage:{type:String},errorType:{type:String},loadingState:{type:Boolean}},computed:{chartId:function(){return"StatisticChart-".concat(this.uuid)},errorIcon:function(){switch(this.errorType){case"NoStatisticData":return"loading";default:return"graph-stats-square"}},spin:function(){return!(!this.errorType||"NoStatisticData"!==this.errorType)}},methods:{updateGraphPreferences:function(t){this.$emit("graph-preferences-updated",t)},onGraphRendered:function(){this.$emit("graph-rendered")}}},p=(r("epiD"),r("psIG")),u=Object(p.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loadingState?r("div",{staticClass:"StatisticChart__Loading"},[r("CommonIcon",{attrs:{weight:"regular",icon:"loading",spin:"",decorative:""}}),t._v(" "),r("div",[t._v("\n        "+t._s(t._f("translate")("The content of this statistic is being prepared for you, please be patient."))+"\n    ")])],1):t.errorMessage?r("div",{staticClass:"StatisticChart__Error"},[r("CommonIcon",{attrs:{weight:"regular",icon:t.errorIcon,spin:t.spin,decorative:""}}),t._v(" "),r("div",[t._v(t._s(t._f("translate")(t.errorMessage)))])],1):t.errorType&&"NoDataAvailable"===t.errorType||!t.data?r("div",{staticClass:"StatisticChart__NoData"},[r("CommonIcon",{attrs:{weight:"regular",icon:t.errorIcon,decorative:""}}),t._v(" "),r("div",[t._v("\n        "+t._s(t._f("translate")("There is no statistic result data available. Please contact your administrator."))+"\n    ")])],1):r("div",{attrs:{id:t.chartId}},[t.format?r(t.format.replace("D3::",""),{tag:"component",attrs:{"chart-id":t.chartId,type:t.format,data:t.data,options:t.options},on:{"graph-preferences-updated":t.updateGraphPreferences,"graph-rendered":t.onGraphRendered}}):t._e()],1)},[],!1,null,null,null);e.default=u.exports},We69:function(t,e){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var n=new Uint8Array(16);t.exports=function(){return r(n),n}}else{var a=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),a[e]=t>>>((3&e)<<3)&255;return a}}},epiD:function(t,e,r){"use strict";var n=r("+PXy");r.n(n).a},rpZP:function(t,e,r){"use strict";var n=r("+J7U"),a=r.n(n);e.a={data:function(){return{uuid:this.getUuid()}},methods:{getUuid:function(){return a()()}}}}}]);