(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"00sy":function(e,t,i){"use strict";var o=i("LmvI");i.n(o).a},GgUG:function(e,t,i){"use strict";i.r(t);i("2Tod"),i("ABKx"),i("jPba"),i("75LO"),i("DbwS"),i("W1QL"),i("K/PF"),i("t91x");var o=i("OvAC"),n=i.n(o),r=i("rpZP"),s=i("J+oh"),a=i("ihrN"),l=i("lOrp"),c=i("9va6");function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,o)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach(function(t){n()(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var h={name:"Form",components:{CommonAlert:function(){return i.e(422).then(i.bind(null,"L3zo"))},FormGroup:function(){return Promise.all([i.e(33),i.e(425)]).then(i.bind(null,"yFPx"))},CommonCollisionDetectionMessage:function(){return i.e(110).then(i.bind(null,"JKnt"))}},mixins:[r.a,s.a],props:{url:{type:String},xhr:{type:Boolean,default:!1},params:{type:Object},propOverride:{type:Object},testMode:{type:Boolean,default:!1},noAutofocus:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},filterText:{type:String},enableCollisionDetection:{type:Boolean,default:!1},collisionDetectionEvents:{type:Array,default:function(){return[]}},collisionDetectionHandler:{type:Function},collisionDetectionMessageClass:{type:String},emitValuesInComplexObject:{type:Boolean,default:!1},initialValues:{type:[Object,Function],default:null},showHorizontalBar:{type:Boolean},showValidationErrorMessage:{type:Boolean},showUpdateProgress:{type:Boolean},updateSchemaOnSubmit:{type:Boolean,default:!1},useQueryParams:{type:Boolean,default:!0}},data:function(){return{resetting:!1,showCollisionDetection:null,schema:{},fieldsIndex:{},values:{},errors:{},serverErrors:{},clientValidators:Object(a.a)(),formId:this.generateFormId(),loadingAnimation:!1,loadingAnimationTimeoutId:null,formOverlay:!1,formOverlayTimeoutId:null,testSchema:{HiddenFields:{HiddenField1:"hidden-field-1","HiddenGroup.Field2":"hidden-field-2"},Fields:[{Name:"",Type:"FormGroup",IsFormGroup:1,Config:{Fields:[{Name:"FormInput",Label:"Input Field",Type:"FormInput",Placeholder:"This is a placeholder",Description:"This is an input field description.",Hint:"It even has a hint below.",Required:!0,Validators:["Required"]}]}},{Name:"",Type:"FormGroup",IsFormGroup:1,Config:{Fields:[{Name:"FormSelect",Label:"Select Field",Type:"FormSelect",Placeholder:"Select...",Description:"This is a select field description.",Props:{Options:[{id:1,label:"Option 1"},{id:2,label:"Option 2"},{id:3,label:"Option 3"}]}}]}},{Name:"",Type:"FormGroup",IsFormGroup:1,Config:{Fields:[{Name:"FormTextArea",Label:"Text Field",Type:"FormTextArea",Placeholder:"This is a placeholder",Description:"This is a text field description.",Required:!0,Validators:["Required"]}]}},{Name:"",Type:"FormGroup",IsFormGroup:1,Config:{Fields:[{Name:"FormCheckbox",Label:"Checkbox Field",Type:"FormCheckbox",Description:"This is a checkbox field description."}]}},{Name:"",Type:"FormGroup",IsFormGroup:1,Config:{Fields:[{Name:"FormRadio",Label:"Radio Field",Type:"FormRadio",Description:"This is a radio field description.",Props:{Options:[{id:1,label:"First choice"},{id:2,label:"Second choice"}]}}]}}]}}},computed:d({localPropOverride:function(){return d({},this.propOverride,{formId:this.formId})},body:function(){return Object(c.cloneDeep)(d({},this.params,{},this.values,{},this.hiddenValues,{FormID:this.formId}))},hiddenValues:function(){return this.schema.HiddenFields?this.schema.HiddenFields:{}},showLoadingAnimation:function(){return this.showUpdateProgress&&!this.seleniumTestMode&&this.loadingAnimation},showFormOverlay:function(){return this.showUpdateProgress&&!this.seleniumTestMode&&this.formOverlay}},Object(l.b)(["seleniumTestMode"])),watch:{url:function(){this.getSchema()}},mounted:function(){var e=this;this.getInitialValues().then(function(){var t=e.useQueryParams?e.$route.query:{};e.getSchema({NoAutofocus:e.noAutofocus},t,!1,!0)})},methods:{removeValue:function(e,t){var i=this,o=this.values[t];if(this.$delete(this.values,t),this.$delete(this.errors,t),e.SubmitForm)return this.clientValidation(this.schema)?void this.submitAsync(!0).then(function(){i.emitChanged(t,o,void 0)}):void this.emitChanged(t,o,void 0);e.UpdateForm?this.getSchemaAsync().then(function(){i.emitChanged(t,o,void 0)}):this.emitChanged(t,o,void 0)},setValue:function(e,t,i){var o=this,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(!this.resetting){var r=Object.hasOwnProperty.call(this.values,t),s=this.values[t];if(!Object(c.isEqual)(s,i)){if(this.$set(this.values,t,i),!r)return e.SubmitForm?void this.submit():void(e.UpdateForm&&this.getSchema());var a=this.validateField(e,t,i);if(e.SubmitForm)return a&&this.clientValidation(this.schema)?void this.submitAsync(!0).then(function(){o.emitChanged(t,s,i)}):void this.emitChanged(t,s,i);e.UpdateForm?this.getSchemaAsync({ChangedField:{Name:t,NewValue:i,OldValue:s},NoAutofocus:!n}).then(function(){o.emitChanged(t,s,i)}):this.emitChanged(t,s,i)}}},getSchema:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=function(e){return o?Object.prototype.hasOwnProperty.call(e,"then")?e:new Promise(function(t){return t(e)}):null};if(this.testMode){var s=function(e,t,i,o,n){n.every(function(n){var r=n.Name;return t&&(r="".concat(t,".").concat(n.Name)),n.IsFormGroup?(e(e,r,i,o,n.Config.Fields),!0):i!==r||(n.Value=o,!1)})};return Object.keys(this.values).forEach(function(t){s(s,null,t,e.values[t],e.testSchema.Fields)}),r(this.processSchema(this.testSchema,n))}return n?(this.showAnimation(),t.IsInitialRequest=1):this.showOverlay(),r(this.clientSendRequest({Path:this.url,Method:"post",Query:i,Body:d({},this.body,{Meta:t})},{xhr:this.xhr}).then(function(t){e.processSchema(t.Body.Schema,n),o&&Promise.resolve(t)}).catch(function(t){e.$log.error(t),o&&Promise.reject(t)}).finally(function(){n?e.hideAnimation():e.hideOverlay()}))},getSchemaAsync:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.getSchema(e,t,!0)},processSchema:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=e;this.values={},this.initValues({Name:"",Fields:o.Fields}),this.schema=o,o.Fields.length&&this.$nextTick(function(){t.$emit("ready",t.body,i)}),this.errors&&this.clientValidation(this.schema,null,!0),this.$nextTick(function(){t.$test.setFlag("Form::Update",t.url)})},initValues:function(e){var t=this;this.fieldsIndex={};var i=function(e,i){var o=i.Name.length>0?"".concat(i.Name,"."):"";i.Fields.forEach(function(i){i.Name&&(t.fieldsIndex["".concat(o).concat(i.Name)]=i),i.IsFormGroup?e(e,{Name:o+i.Name,Fields:i.Config.Fields}):t.$set(t.values,"".concat(o).concat(i.Name),i.Value)})};i(i,e)},validateForm:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=Object(c.cloneDeep)(this.body);if(Object.keys(n).forEach(function(e){void 0===n[e]&&(n[e]=null)}),this.enableCollisionDetection&&this.$refs.collisionDetection.close(),this.testMode)return t?Promise.resolve(n):(this.$emit("valid",n),null);this.showOverlay();var r={NoAutofocus:!o};return this.schema.ChangeTime&&(r.ChangeTime=this.schema.ChangeTime),this.clientSendRequest({Path:this.url,Method:"post",Body:d({},n,{Meta:r}),Headers:{"X-OTRS-API-Form-ValidateData":!0}},{xhr:this.xhr}).then(function(o){e.$set(e,"errors",{});var n=e.getValues(!0);return t&&!i?Promise.resolve(n):(e.$emit("valid",n),e.updateSchemaOnSubmit&&e.processSchema(o.Body.Schema),e.$nextTick(function(){e.$test.setFlag("Form::Valid",e.url)}),t?Promise.resolve():null)}).catch(function(o){var n=o.response;return n.Body.Errors&&(e.serverErrors=n.Body.Errors),n.Body.Schema&&(e.schema=n.Body.Schema,e.initValues({Name:"",Fields:e.schema.Fields})),422===n.Code&&e.showServerErrors(),e.enableCollisionDetection&&409===n.Code&&(e.schema.ChangeTime=n.Body.ChangeTime,e.$refs.collisionDetection.open()),t&&!i?Promise.reject(o):(e.$emit("invalid",o),e.$nextTick(function(){e.$test.setFlag("Form::Invalid",e.url)}),t?Promise.reject():null)}).finally(function(){e.hideOverlay()})},submit:function(){this.validateForm()},submitAsync:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.validateForm(!0,e,t)},showServerErrors:function(){var e=this;this.$set(this,"errors",{}),Object.keys(this.serverErrors).forEach(function(t){var i=Object(c.upperFirst)(Object(c.camelCase)(e.serverErrors[t].Validator)),o=e.clientValidators[i];if(o&&"function"==typeof o.errorMessage){var n=o.errorMessage(e.serverErrors[t].Attributes.Arguments);n&&e.$set(e.errors,t,n)}else e.serverErrors[t].Message&&e.$set(e.errors,t,[e.serverErrors[t].Message,e.serverErrors[t].Data])})},clientValidation:function(e,t,i){var o=this,n=!0;return e.Fields.forEach(function(e){var r;r=t?"".concat(t,".").concat(e.Name):e.Name,e.IsFormGroup?o.clientValidation(e.Config,r,i)||(n=!1):i?o.errors[r]&&(o.validateField(e,r,o.values[r])||(n=!1)):o.validateField(e,r,o.values[r])||(n=!1)}),n},validateField:function(e,t,i){var o=this;if(this.errors[t]&&this.$delete(this.errors,t),void 0===e.Validators)return!0;var n=!1;return e.Validators.every(function(r){if(n)return!1;if(!e.Required&&(null===i||void 0===i||""===i))return!1;var s=[],a=r;r instanceof Object&&(a=r.Validator,s=r.Arguments),a=Object(c.upperFirst)(Object(c.camelCase)(a));var l=o.clientValidators[a];if(l&&"function"==typeof l.validate&&!l.validate(i,s)&&(n=!0,"function"==typeof l.errorMessage)){var u=l.errorMessage(s);u&&o.$set(o.errors,t,u)}return!0}),!n},resetForm:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.resetting=!0,i&&this.$set(this,"schema",{}),this.$set(this,"values",{}),this.formId=this.generateFormId(),t&&this.getSchema(),this.$nextTick(function(){e.$set(e,"errors",{}),e.resetting=!1})},onSubmit:function(){this.clientValidation(this.schema)&&this.submit()},onReset:function(){this.resetForm()},onCollisionDetected:function(e){var t=this,i=function(i,o){if(t.collisionDetectionHandler){var n=t.collisionDetectionHandler(e);n&&n.then instanceof Function?n.then(function(e){return i(e)}).catch(function(e){return o(e)}):i(n)}else i({})};return new Promise(function(e,o){t.testMode?i(e,o):t.clientSendRequest({Path:t.url,Method:"post",Headers:{"X-OTRS-API-Form-OnlyChangeTime":!0}},{xhr:t.xhr}).then(function(n){t.schema.ChangeTime=n.Body.ChangeTime,i(e,o)}).catch(function(e){return t.$log.error(e),o(e)})})},closeCollisionDetectionMessage:function(){this.enableCollisionDetection&&this.$refs.collisionDetection.close()},onFiltered:function(e){this.$emit("filtered",e)},onCustomEvent:function(e,t){this.$emit(e,t)},onLoaded:function(){var e=this;this.$nextTick(function(){(e.$test.setFlag("Form::Loaded",e.url),e.useQueryParams)&&(Boolean(parseInt(e.$route.query.SubmitForm,10))&&e.submit())})},buildValuesToEmit:function(){var e=d({},this.values,{},this.hiddenValues);return this.emitValuesInComplexObject?this.convertDotNotationToComplex(e):e},getValues:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.buildValuesToEmit();return e&&(t=d({},this.params,{},t,{FormID:this.formId})),t},emitChanged:function(e,t,i){this.$emit("changed",this.body,{fullName:e,oldValue:t,newValue:i})},fieldNamesOfType:function(e){var t=this;if(!e)return[];var i=[];return Object.keys(this.fieldsIndex).forEach(function(o){var n=t.fieldsIndex[o];n.Type===e&&i.push(n.Name)}),i},generateFormId:function(){return this.getUuid()},showAnimation:function(){var e=this;this.clearLoadingAnimationTimeout(),this.loadingAnimationTimeoutId=setTimeout(function(){e.loadingAnimation=!0},300)},hideAnimation:function(){var e=this;this.clearLoadingAnimationTimeout(),this.loadingAnimationTimeoutId=setTimeout(function(){e.loadingAnimation=!1},300)},clearLoadingAnimationTimeout:function(){this.loadingAnimationTimeoutId&&(clearTimeout(this.loadingAnimationTimeoutId),this.loadingAnimationTimeoutId=null)},showOverlay:function(){var e=this;this.clearFormOverlayTimeout(),this.formOverlayTimeoutId=setTimeout(function(){e.formOverlay=!0},300)},hideOverlay:function(){var e=this;this.clearFormOverlayTimeout(),this.formOverlayTimeoutId=setTimeout(function(){e.formOverlay=!1},300)},clearFormOverlayTimeout:function(){this.formOverlayTimeoutId&&(clearTimeout(this.formOverlayTimeoutId),this.formOverlayTimeoutId=null)},getInitialValues:function(){var e=this;return new Promise(function(t,i){var o=e.initialValues;o||(o={}),"function"==typeof o&&(o=o(e.formId)).then?o.then(function(i){i=i instanceof Object?i:{},e.values=Object(c.cloneDeep)(i),t()}).catch(function(t){e.$log.error(t),i(t)}):(e.values=Object(c.cloneDeep)(o),t())})}}},m=(i("00sy"),i("psIG")),f=Object(m.a)(h,function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.schema.Fields?i("b-form",{staticClass:"Form",on:{reset:function(t){return t.preventDefault(),e.onReset(t)},submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e.enableCollisionDetection?i("CommonCollisionDetectionMessage",{ref:"collisionDetection",class:e.collisionDetectionMessageClass,attrs:{events:e.collisionDetectionEvents,handler:e.onCollisionDetected,"test-mode":e.testMode},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("collision-detection-message",null,null,t)]}}],null,!0)}):e._e(),e._v(" "),e._t("before-form-fields"),e._v(" "),e.showLoadingAnimation?i("div",{staticClass:"text-center Form__LoadingAnimation"},[i("CommonIcon",{attrs:{icon:"loading",spin:"",decorative:""}})],1):e._e(),e._v(" "),i("FormGroup",{attrs:{"set-value":e.setValue,"remove-value":e.removeValue,fields:e.schema.Fields,errors:e.errors,"prop-override":e.localPropOverride,"hide-description":e.hideDescription,"filter-text":e.filterText,"show-horizontal-bar":e.showHorizontalBar,"form-values":e.body,"is-root":""},on:{loaded:e.onLoaded,"custom-event":e.onCustomEvent,filtered:function(t){return e.onFiltered(t)}},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}}),e._v(" "),e.showValidationErrorMessage&&(e.errors.Form&&Object.keys(e.errors).length>1||!e.errors.Form&&Object.keys(e.errors).length)?i("div",{staticClass:"mb-3 d-block text-right invalid-feedback"},[e._v("\n        "+e._s(e._f("translate")("Something went wrong. Please correct the errors above and try again."))+"\n    ")]):e._e(),e._v(" "),e._t("form-error",[e.errors.Form&&e.errors.Form.length&&e.errors.Form[0]?i("div",{staticClass:"mb-3 d-block text-right invalid-feedback"},[e._v("\n            "+e._s(e._f("translate").apply(void 0,[e.errors.Form[0]].concat(e.errors.Form[1])))+"\n        ")]):e._e()],{errors:e.errors}),e._v(" "),e._t("after-form-fields"),e._v(" "),e._t("submit-buttons"),e._v(" "),e.showFormOverlay?i("div",{staticClass:"Form__Overlay"},[i("div",{staticClass:"Form__Overlay__Loading"},[i("CommonIcon",{attrs:{icon:"loading",spin:"",decorative:""}})],1)]):e._e()],2):e._e()},[],!1,null,null,null);t.default=f.exports},"J+oh":function(e,t,i){"use strict";i("asZ9"),i("9ovy"),i("W1QL"),i("K/PF"),i("t91x"),i("75LO");t.a={methods:{convertDotNotationToComplex:function(e){var t={};return Object.keys(e).forEach(function(i){var o=e[i];if(i.match(/\./)){var n=t,r=i.split(".");r.forEach(function(e,t){if(t+1<r.length)return n[e]||(n[e]={}),void(n=n[e]);n[e]=o})}else t[i]=o}),t}}}},LmvI:function(e,t,i){}}]);