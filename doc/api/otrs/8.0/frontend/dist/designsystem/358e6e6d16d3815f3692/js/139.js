(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{"21tz":function(t,a,l){},"Wd/+":function(t,a,l){"use strict";l.r(a);l("W1QL"),l("K/PF"),l("t91x"),l("75LO"),l("U8p0");var e={name:"FormAgentStyle",components:{CommonCheckIcon:function(){return l.e(138).then(l.bind(null,"70Qt"))},FormSelect:function(){return Promise.all([l.e(1),l.e(2),l.e(12)]).then(l.bind(null,"cDBQ"))}},props:{value:{type:Object},styles:{type:Object,required:!0},variantsPerStyle:{type:Object,required:!0}},data:function(){return{localStyle:this.value.Style,localVariant:this.value.Variant}},computed:{localStyles:function(){var t=this,a=[];return Object.keys(this.styles).sort().forEach(function(l){a.push({id:l,label:t.styles[l]})}),a}},methods:{changedStyle:function(){var t={Style:this.localStyle};this.variantsPerStyle[this.localStyle]&&this.variantsPerStyle[this.localStyle].length?(this.localVariant=this.variantsPerStyle[this.localStyle][0].Name,t.Variant=this.localVariant):this.localVariant=null,this.$emit("input",t)},changedVariant:function(){var t={Style:this.localStyle,Variant:this.localVariant};this.$emit("input",t)}}},n=(l("aj8B"),l("psIG")),i=Object(n.a)(e,function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("div",{staticClass:"Form__AgentStyle"},[l("FormSelect",{attrs:{label:t._f("translate")("Style"),options:t.localStyles,clearable:!1,required:""},on:{input:t.changedStyle},model:{value:t.localStyle,callback:function(a){t.localStyle=a},expression:"localStyle"}}),t._v(" "),t.variantsPerStyle[t.localStyle]&&t.variantsPerStyle[t.localStyle].length?l("b-form-group",{staticClass:"Variant",attrs:{label:t._f("translate")("Variant")}},[l("b-form-radio-group",{attrs:{plain:""},on:{input:t.changedVariant},model:{value:t.localVariant,callback:function(a){t.localVariant=a},expression:"localVariant"}},t._l(t.variantsPerStyle[t.localStyle],function(a){return l("b-form-radio",{key:a.Name,staticClass:"Variant__Button",attrs:{value:a.Name}},[l("CommonCheckIcon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],style:{color:a.Colors.Primary},attrs:{value:a.Name===t.localVariant,title:a.Label,icon:a.Name===t.localVariant?"check":"sign-badge-circle",weight:"bold",size:"lg"}})],1)}),1)],1):t._e()],1)},[],!1,null,null,null);a.default=i.exports},aj8B:function(t,a,l){"use strict";var e=l("21tz");l.n(e).a}}]);