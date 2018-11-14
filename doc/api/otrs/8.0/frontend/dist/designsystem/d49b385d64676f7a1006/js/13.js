(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{A86J:function(e,t,n){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},CJfq:function(e,t,n){"use strict";n.r(t);n("e2Kn");var l={name:"FormInput",mixins:[n("A86J").a],props:{value:{type:[String,Number],note:"The value of the field."},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},name:{type:String},size:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},type:{type:String,default:"text"},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String,default:"Placeholder Text"},maxLength:{type:Number},fieldClasses:{type:Object}},computed:{hasInputSlot:function(){return void 0!==this.$slots["input-group-append"]},fieldId:function(){return"formInput-".concat(this._uid)},localValue:{get:function(){return this.value},set:function(e,t){this.maxLength&&e.length>this.maxLength&&(e=e.substr(0,this.maxLength)),this.$emit("input",e,t)}}},methods:{focus:function(){this.$refs.input.$el.focus()},onChange:function(e){this.$emit("change",e)},onEnter:function(){this.$emit("enter")}}},a=n("psIG"),o=Object(a.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[e.hasInputSlot?n("b-input-group",[n("b-form-input",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"input",staticClass:"Form__Input",class:e.fieldClasses,attrs:{id:e.fieldId,name:e.name,size:e.size,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,type:e.type,readonly:e.readonly,plaintext:e.plaintext,autocomplete:e.autocomplete,placeholder:e._f("translate")(e.placeholder),maxlength:e.maxLength},on:{change:e.onChange},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.onEnter(t):null}},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}}),e._v(" "),n("b-input-group-append",{staticClass:"pt-2"},[e._t("input-group-append")],2)],1):n("b-form-input",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"input",staticClass:"Form__Input",class:e.fieldClasses,attrs:{id:e.fieldId,name:e.name,size:e.size,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,type:e.type,readonly:e.readonly,plaintext:e.plaintext,autocomplete:e.autocomplete,placeholder:e._f("translate")(e.placeholder),maxlength:e.maxLength},on:{change:e.onChange},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:void e.onEnter():null}},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}})],1)},[],!1,null,null,null);o.options.__file="FormInput.vue";t.default=o.exports}}]);