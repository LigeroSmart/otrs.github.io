(window.webpackJsonp=window.webpackJsonp||[]).push([[7,111],{A86J:function(t,e,n){"use strict";e.a={directives:{focus:{inserted:function(t,e){e.value&&t.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},BFW2:function(t,e,n){"use strict";var i=n("wlFN");n.n(i).a},GJff:function(t,e,n){"use strict";n.r(e);n("GkPX");var i=n("m9dD"),a=n("5v/B"),o=n("A86J"),r=Object(a.detect)(),l={name:"FormEditor",mixins:[o.a],props:{value:{type:String},name:{type:String},formId:{type:String,required:!0},uploadPath:{type:String,required:!0},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1},testMode:{type:Boolean,default:!1}},data:function(){return{instance:null,ckFinderInitialized:!1}},computed:{fieldId:function(){return"formEditor-".concat(this._uid)},supported:function(){return r&&"ie"!==r.name},content:{get:function(){return this.value},set:function(t,e){"<p>&nbsp;</p>"===t&&(t=null),this.$emit("input",t,e)}}},watch:{value:function(){this.supported&&(null!==this.value&&void 0!==this.value?this.instance.getData()!==this.value&&this.instance.setData(this.value):this.instance.setData(""))},formId:function(){this.supported&&!this.testMode&&(null!==this.instance?this.initCkFinder():this.ckFinderInitialized=!1)}},mounted:function(){var t=this;this.supported&&n.e(118).then(n.t.bind(null,"dUKf",7)).then(function(e){var n=t.testMode?void 0:"/api/".concat(t.uploadPath,"/").concat(t.formId);e.default.create(t.$refs.formEditor,{toolbar:["heading","bold","italic","link","bulletedList","numberedList","blockQuote","imageUpload"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"}]},ckfinder:{uploadUrl:n}}).then(function(e){t.instance=e,t.testMode?t.instance.plugins.get("FileRepository").createUploadAdapter=function(){return new i.default}:t.ckFinderInitialized||t.initCkFinder(),null===t.content||void 0===t.content?t.instance.setData(""):t.instance.setData(t.content),e.model.document.on("change",function(){t.content=e.getData()}),t.autoFocus&&t.$refs.formEditor.focus()}).catch(function(e){t.$log.error(e)})})},destroyed:function(){var t=this;void 0!==this.instance&&null!==this.instance&&this.instance.destroy().catch(function(e){t.$log.error(e)})},methods:{labelClick:function(t){this.supported&&"LABEL"===t.target.tagName&&this.$refs.formEditor.focus()},initCkFinder:function(){this.instance.config.set("ckfinder.uploadUrl","/api/".concat(this.uploadPath,"/").concat(this.formId)),this.instance.plugins._plugins.get("CKFinderUploadAdapter").init(),this.ckFinderInitialized=!0}}},s=(n("BFW2"),n("psIG")),d=Object(s.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],attrs:{state:Boolean(t.error)?"invalid":null,label:t._f("translate")(t.label),"label-for":t.fieldId,"label-class":t.required?"required":null,"label-sr-only":t.labelSrOnly,description:t._f("translate")(t.description),"invalid-feedback":t._f("translate")(t.error)},nativeOn:{click:function(e){t.labelClick(e)}}},[t.supported?n("div",{ref:"formEditor",staticClass:"form-editor",attrs:{id:t.fieldId,name:t.name,value:t.content}}):n("b-textarea",{staticClass:"form-editor",attrs:{id:t.fieldId,name:t.name},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},[],!1,null,null,null);d.options.__file="index.vue";e.default=d.exports},m9dD:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return l});n("DbwS");var i=n("SDJZ"),a=n.n(i),o=n("NToG"),r=n.n(o),l=function(){function t(){a()(this,t)}return r()(t,[{key:"upload",value:function(){return Promise.resolve([])}}]),t}()},wlFN:function(t,e,n){}}]);