(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{NAoP:function(e,t,r){"use strict";r("2Tod"),r("ABKx"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO");var o=r("OvAC"),n=r.n(o),i=r("F/wX"),a=r.n(i),l=r("lOrp");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}t.a={computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach(function(t){n()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},Object(l.b)(["config","userInfo"])),methods:{localizeTimestamp:function(e){var t="UTC",r="UTC";return this.config&&this.config.OTRSTimeZone&&(t=this.config.OTRSTimeZone),this.userInfo&&this.userInfo.UserTimeZone?r=this.userInfo.UserTimeZone:this.config&&this.config.UserDefaultTimeZone&&(r=this.config.UserDefaultTimeZone),{date:a.a.tz(e,t).clone().tz(r),timezone:r}}}}},g17x:function(e,t,r){"use strict";r.r(t);r("2Tod"),r("ABKx"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO"),r("Z8gF");var o=r("OvAC"),n=r.n(o),i=(r("e2Kn"),r("NAoP")),a=r("F/wX"),l=r.n(a),s=r("lOrp");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}var p={name:"CommonDateTime",mixins:[i.a],props:{dateTime:{type:String},deltaDateTime:{type:String},deltaSeconds:{type:[Number,String]},absoluteFormat:{type:String,default:"TimeShort",validator:function(e){return-1!==["TimeLong","TimeShort","Date"].indexOf(e)}},noAffix:{type:Boolean,default:!1},noTitle:{type:Boolean,default:!1},type:{type:String,validator:function(e){return-1!==["absolute","relative","combined"].indexOf(e)}},tooltipPlacement:{type:String,default:"top"}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach(function(t){n()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},Object(s.b)(["language"]),{relativeTime:function(){var e;return this.language&&l.a.locale(this.language.toLowerCase().replace("_","-")),e=this.deltaDateTime?this.localizeTimestamp(this.deltaDateTime).date:this.$now.date,this.deltaSeconds?l.a.duration(parseInt(this.deltaSeconds,10),"seconds").humanize(!0):this.localizeTimestamp(this.dateTime).date.from(e,this.noAffix)},localType:function(){return this.type?this.type:this.userInfo&&this.userInfo.UserDateTimeFormat?this.userInfo.UserDateTimeFormat:"relative"}}),created:function(){l.a.relativeTimeThreshold("h",24),l.a.relativeTimeThreshold("d",31),l.a.relativeTimeThreshold("M",12)}},m=r("psIG"),u=Object(m.a)(p,function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.deltaSeconds?r("span",[e._v("\n    "+e._s(e.relativeTime)+"\n")]):"absolute"!==e.localType||e.noTitle?"absolute"===e.localType&&e.noTitle?r("span",[e._v("\n    "+e._s(e._f("localize")(e.dateTime,e.absoluteFormat))+"\n")]):"relative"!==e.localType||e.noTitle?"relative"===e.localType&&e.noTitle?r("span",[e._v("\n    "+e._s(e.relativeTime)+"\n")]):r("span",[e._v("\n    "+e._s(e.relativeTime)+" ("+e._s(e._f("localize")(e.dateTime,e.absoluteFormat))+")\n")]):r("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:{trigger:"hover",placement:e.tooltipPlacement},expression:"{ trigger: 'hover', placement: tooltipPlacement }"}],attrs:{title:e._f("localize")(e.dateTime,e.absoluteFormat)}},[e._v("\n    "+e._s(e.relativeTime)+"\n")]):r("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:{trigger:"hover",placement:e.tooltipPlacement},expression:"{ trigger: 'hover', placement: tooltipPlacement }"}],attrs:{title:e.relativeTime}},[e._v("\n    "+e._s(e._f("localize")(e.dateTime,e.absoluteFormat))+"\n")])},[],!1,null,null,null);t.default=u.exports}}]);