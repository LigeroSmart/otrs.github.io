(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{"raa/":function(t,e,a){"use strict";a.r(e);a("e2Kn");var n=a("F/wX"),s=a.n(n),i={name:"CommonRelativeDateTime",props:{dateTime:{type:String},deltaSeconds:{type:[Number,String]}},data:function(){return{localDeltaSeconds:null}},computed:{relativeDateTime:function(){var t=Math.abs(this.localDeltaSeconds),e=0,a=0,n=0;return t>=86400&&(e=parseInt(t/3600/24,10)),t>=3600&&(a=parseInt(t/3600%24,10)),0!==t&&(n=parseInt(t/60%60,10)),{Days:Math.abs(e)||0,Hours:Math.abs(a)||0,Minutes:Math.abs(n)||0}},localNegativeFlag:function(){return this.localDeltaSeconds<0},formatedRelativeDateTime:function(){var t="";return this.localNegativeFlag&&(t="- "),t+="".concat(this.$locale.translate("%sd",this.relativeDateTime.Days)," "),t+="".concat(this.$locale.translate("%sh",this.relativeDateTime.Hours)," "),t+=this.$locale.translate("%sm",this.relativeDateTime.Minutes),t}},watch:{deltaSeconds:function(){this.setLocalDeltaSeconds(this.deltaSeconds,this.dateTime)},dateTime:function(){this.setLocalDeltaSeconds(this.deltaSeconds,this.dateTime)},"$now.date":{handler:function(){this.localDeltaSeconds--}}},created:function(){this.setLocalDeltaSeconds(this.deltaSeconds,this.dateTime)},methods:{setLocalDeltaSeconds:function(t,e){var a=t;!t&&e&&(a=s()(e).unix()-s()().unix());return this.localDeltaSeconds=a||0,!0}}},l=a("psIG"),o=Object(l.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n    "+this._s(this.formatedRelativeDateTime)+"\n")])},[],!1,null,null,null);e.default=o.exports}}]);