(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{iMOA:function(t,e,i){"use strict";i.r(e);var s={name:"VideoMute",props:{muted:{type:Boolean,default:!1}},data:function(){return{isMuted:this.muted}},methods:{toggle:function(){this.isMuted=!this.isMuted,this.$emit("mute",this.isMuted)}}},o=i("psIG"),n=Object(o.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("CommonLink",{on:{click:this.toggle}},[e("div",{staticClass:"position-absolute shadow text-center Chat__CircleVideo Chat--CircleBig",class:{"Chat--DarkBackground":this.isMuted,"Chat--Active":!this.isMuted}},[e("CommonIcon",{attrs:{icon:this.isMuted?"meeting-camera":"controls-camera-off",weight:"bold",size:"lg"}})],1)])},[],!1,null,null,null);e.default=n.exports}}]);