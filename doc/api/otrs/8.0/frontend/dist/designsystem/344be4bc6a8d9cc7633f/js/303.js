(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{DDRm:function(e,n,t){"use strict";var r=t("z+fN");t.n(r).a},QBNS:function(e,n,t){"use strict";t.r(n);var r={name:"FormPermanentConfiguration",components:{Form:function(){return Promise.all([t.e(7),t.e(8),t.e(15),t.e(302)]).then(t.bind(null,"GgUG"))}},props:{screenType:{type:String},moduleType:{type:String},params:{type:Object,default:null},organizerItemName:{type:String,default:null},widgetId:{type:String},propOverride:{type:Object}},data:function(){return{dataChanged:!1}},computed:{permanentFormConfigEndpointUrl:function(){if(this.organizerItemName)return"frontend/agent/form/config/organizer/item/permanent/".concat(this.organizerItemName);var e="frontend/agent/form/config/screen/module/permanent/".concat(this.screenType,"/").concat(this.moduleType);return this.widgetId&&(e="".concat(e,"/").concat(this.widgetId)),e}},methods:{submit:function(){this.$refs.formPermanentConfig&&this.$refs.formPermanentConfig.submit()},resetForm:function(){this.$refs.formPermanentConfig&&this.$refs.formPermanentConfig.resetForm(!0,!0)},onFormPermanentInValid:function(e){this.$emit("invalid",e)},onFormPermanentValid:function(e){delete e.FormID,delete e.Config,delete e.ContextType,this.$emit("valid",JSON.parse(JSON.stringify(e)))},onPermanentFormChanged:function(e,n){this.$emit("changed",e,n)},onFormPermanentReady:function(e){this.$emit("ready",e)}}},i=(t("DDRm"),t("psIG")),o=Object(i.a)(r,function(){var e=this.$createElement;return(this._self._c||e)("Form",{key:"formPermanentConfig",ref:"formPermanentConfig",attrs:{url:this.permanentFormConfigEndpointUrl,params:this.params,"prop-override":this.propOverride,"hide-description":"","emit-values-in-complex-object":""},on:{changed:this.onPermanentFormChanged,invalid:this.onFormPermanentInValid,valid:this.onFormPermanentValid,ready:this.onFormPermanentReady}})},[],!1,null,null,null);n.default=o.exports},"z+fN":function(e,n,t){}}]);