(window.webpackJsonp=window.webpackJsonp||[]).push([[123,13,15],{"3Hfo":function(e,t,l){"use strict";var n=l("8CHY");t.a={methods:{filter:function(e){var t=this,l="";return["label","description","localPlaceholder"].forEach(function(e){l+=t.$locale.translate(t[e])}),Object(n.a)(l,e)}}}},A86J:function(e,t,l){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},CJfq:function(e,t,l){"use strict";l.r(t);l("e2Kn");var n=l("A86J"),a=l("UlwJ"),o=l("3Hfo"),i={name:"FormInput",mixins:[n.a,a.a,o.a],props:{preventCutAndCopy:{type:Boolean,default:!1},value:{type:[String,Number],note:"The value of the field."},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},name:{type:String},size:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},type:{type:String,default:"text"},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String,default:"Placeholder Text"},maxLength:{type:Number},fieldClasses:{type:Object}},computed:{hasInputSlot:function(){return void 0!==this.$slots["input-group-append"]},fieldId:function(){return"formInput-".concat(this._uid)},localValue:{get:function(){return this.value},set:function(e,t){this.maxLength&&e.length>this.maxLength&&(e=e.substr(0,this.maxLength)),this.$emit("input",e,t)}}},methods:{onCutOrCopy:function(e){return!this.preventCutAndCopy||(e.preventDefault(),!1)},focus:function(){this.$refs.input.$el.focus()},onChange:function(e){this.$emit("change",e)},onEnter:function(){this.$emit("enter")}}},r=l("psIG"),s=Object(r.a)(i,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[e.label&&e.description&&e.hideDescription?[l("template",{slot:"label"},[e._v("\n            "+e._s(e._f("translate")(e.label))+"\n            "),l("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],staticClass:"float-right",attrs:{title:e._f("translate")(e.description)}},[l("CommonIcon",{staticClass:"mx-2",attrs:{weight:"bold",icon:"information-circle"}})],1)],1),e._v(" "),l("template",{slot:"description"},[l("small",{staticClass:"sr-only"},[e._v("\n                "+e._s(e._f("translate")(e.description))+"\n            ")])])]:e._e(),e._v(" "),e.hasInputSlot?l("b-input-group",[l("b-form-input",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"input",staticClass:"Form__Input",class:e.fieldClasses,attrs:{id:e.fieldId,name:e.name,size:e.size,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,type:e.type,readonly:e.readonly,plaintext:e.plaintext,autocomplete:e.autocomplete,placeholder:e.localPlaceholder,maxlength:e.maxLength,"allow-pasting":e.preventCutAndCopy},on:{change:e.onChange},nativeOn:{cut:function(t){return e.onCutOrCopy(t)},copy:function(t){return e.onCutOrCopy(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.onEnter(t)}},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}}),e._v(" "),l("b-input-group-append",{staticClass:"pt-2"},[e._t("input-group-append")],2)],1):l("b-form-input",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"input",staticClass:"Form__Input",class:e.fieldClasses,attrs:{id:e.fieldId,name:e.name,size:e.size,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,type:e.type,readonly:e.readonly,plaintext:e.plaintext,autocomplete:e.autocomplete,placeholder:e.localPlaceholder,maxlength:e.maxLength,"allow-pasting":e.preventCutAndCopy},on:{change:e.onChange},nativeOn:{cut:function(t){return e.onCutOrCopy(t)},copy:function(t){return e.onCutOrCopy(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.onEnter()}},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}})],2)},[],!1,null,null,null);t.default=s.exports},UlwJ:function(e,t,l){"use strict";t.a={data:function(){return{localPlaceholder:""}},watch:{labelSrOnly:function(){this.buildLocalPlaceholder()},required:function(){this.buildLocalPlaceholder()},placeholder:function(){this.buildLocalPlaceholder()}},created:function(){var e=this;this.$bus.$on("forceUpdate",function(){e.buildLocalPlaceholder()}),this.buildLocalPlaceholder()},methods:{buildLocalPlaceholder:function(){if(this.placeholder){var e=this.$locale.translate(this.placeholder);this.labelSrOnly&&this.required&&(e="".concat(e,"*")),this.localPlaceholder=e}else this.localPlaceholder=""}}}}}]);