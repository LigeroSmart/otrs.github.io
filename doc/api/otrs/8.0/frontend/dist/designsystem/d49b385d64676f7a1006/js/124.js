(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{CqLK:function(e,o,t){"use strict";t.r(o);var n={name:"CommonDialog",props:{value:{type:Boolean},id:{type:String},hideHeader:{type:Boolean,default:!1},hideFooter:{type:Boolean,default:!1},hideDefaultCancelButton:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},modalClass:{type:[String,Array],default:function(){return["Modal"]}},headerClass:{type:[String,Array],default:function(){return["Modal__Header"]}},bodyClass:{type:[String,Array],default:function(){return["Modal__Body"]}},footerClass:{type:[String,Array],default:function(){return["Modal__Footer"]}},noCloseOnBackdrop:{type:Boolean,default:!1},noCloseOnEsc:{type:Boolean,default:!1},noFade:{type:Boolean,default:!1},size:{type:String},title:{type:String}},computed:{localValue:{get:function(){return this.value},set:function(e,o){this.$emit("input",e,o)}}},methods:{open:function(){this.$refs.commonDialog.show()},close:function(){this.$refs.commonDialog.hide()},onChange:function(){this.$emit("change")},onShow:function(){this.$emit("show")},onShown:function(){var e=this;this.$nextTick(function(){e.$test.setFlag("Dialog::Shown")})},onHide:function(){this.$emit("hide")},onHidden:function(){var e=this;this.$emit("hidden"),this.$nextTick(function(){e.$test.setFlag("Dialog::Hidden")})},onOk:function(){this.$emit("ok")},onCancel:function(){this.$emit("cancel")}}},a=(t("a+U3"),t("psIG")),l=Object(a.a)(n,function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("b-modal",{ref:"commonDialog",attrs:{id:e.id,"hide-header":e.hideHeader,"hide-footer":e.hideFooter,lazy:e.lazy,"modal-class":e.modalClass,"header-class":e.headerClass,"body-class":e.bodyClass,"footer-class":e.footerClass,"no-close-on-backdrop":e.noCloseOnBackdrop,"no-close-on-esc":e.noCloseOnEsc,"no-fade":e.noFade,"ok-only":e.hideDefaultCancelButton,size:e.size},on:{change:e.onChange,show:e.onShow,shown:e.onShown,hide:e.onHide,hidden:e.onHidden,ok:e.onOk,cancel:e.onCancel},model:{value:e.localValue,callback:function(o){e.localValue=o},expression:"localValue"}},[t("template",{slot:"modal-header"},[e.$slots.header?[e._t("header")]:[t("h5",{staticClass:"Modal__Title"},[e._v(e._s(e._f("translate")(e.title)))]),e._v(" "),t("b-button",{staticClass:"close Modal__CloseButton",attrs:{"aria-label":e._f("translate")("Close"),type:"button"},on:{click:e.close}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]],2),e._v(" "),e._t("default"),e._v(" "),t("template",{slot:"modal-ok"},[e._t("ok")],2),e._v(" "),t("template",{slot:"modal-cancel"},[e._t("cancel")],2),e._v(" "),t("template",{slot:"modal-footer"},[e._t("footer")],2)],2)},[],!1,null,null,null);l.options.__file="index.vue";o.default=l.exports},"a+U3":function(e,o,t){"use strict";var n=t("idOR");t.n(n).a},idOR:function(e,o,t){}}]);