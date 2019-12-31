(window.webpackJsonp=window.webpackJsonp||[]).push([[342,386],{"A+bb":function(e,t,r){"use strict";r.r(t);var n=r("SDJZ"),o=r.n(n),a=r("NToG"),i=r.n(a),s=r("oSwp"),u=new(function(){function e(){o()(this,e)}return i()(e,[{key:"validate",value:function(e){if(!e)return!0;var t;if(!/^\+\d{1,3}\d{4,}$/.test(e))return!1;try{var r=s.PhoneNumberUtil.getInstance(),n=r.parse(e);t=r.isValidNumber(n)}catch(e){return!1}return t}},{key:"errorMessage",value:function(){return"This phone number is invalid."}}]),e}());t.default=u},T0ip:function(e,t,r){"use strict";r.r(t);r("2Tod"),r("ABKx"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO");var n=r("OvAC"),o=r.n(n),a=r("lOrp");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var s={name:"Base",props:{userType:{type:String,required:!0,validator:function(e){return-1!==["agent","customer"].indexOf(e)}},method:{type:Object}},data:function(){return{sharedSecret:null,emailSecurity:null}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach(function(t){o()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},Object(a.b)(["userInfo","config"])),mounted:function(){this.sharedSecret=this.generateSecret()},methods:{cancel:function(){this.$emit("cancel")},provideSetupData:function(){this.$emit("setup-data-provided",{sharedSecret:this.sharedSecret})},generateSecret:function(){for(var e=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","2","3","4","5","6","7"],t="",r=0;r<e.length;r++){var n=Math.floor(Math.random()*e.length),o=e[r];e[r]=e[n],e[n]=o}for(var a=0;a<16;a++)t+=e[a];return t}}},u=r("psIG"),c=Object(u.a)(s,void 0,void 0,!1,null,null,null);t.default=c.exports},kAYO:function(e,t,r){"use strict";r.r(t);var n=r("T0ip"),o=r("A+bb"),a={name:"SMS",components:{FormButton:function(){return Promise.all([r.e(2),r.e(10)]).then(r.bind(null,"dphA"))},FormInput:function(){return r.e(15).then(r.bind(null,"CJfq"))},FormCheckbox:function(){return Promise.all([r.e(6),r.e(32)]).then(r.bind(null,"Hzqv"))}},extends:n.default,data:function(){return{loading:!1,phoneNumber:"",phoneNumberDescription:"Please enter a phone number in international format, i.e. +491234567890.",emailSecurity:!1}},computed:{validPhoneNumber:function(){return!this.phoneNumber||o.default.validate(this.phoneNumber)},phoneNumberError:function(){var e=null;return this.validPhoneNumber||(e=o.default.errorMessage()),e}},mounted:function(){this.phoneNumber=this.method.TransportFieldValue||""},methods:{provideSetupData:function(){var e=this;this.loading=!0,this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/send-setup-token-via-transport/SMS"),Method:"post",Body:{Secret:this.sharedSecret,PhoneNumber:this.phoneNumber}}).then(function(){e.$nextTick(function(){e.$bus.$emit("showToastMessage",{id:"SendTokenViaTransportSuccessMessage",text:"A text message with the verification code was sent to your mobile phone number.",variant:"success"}),e.$emit("setup-data-provided",{sharedSecret:e.sharedSecret,emailSecurity:e.emailSecurity,phoneNumber:e.phoneNumber}),e.$nextTick(function(){e.loading=!1,e.$test.setFlag("Account::TwoFactor::SendSetupTokenViaTransport")})})}).catch(function(t){t?t.response&&900===t.response.Code?e.$bus.$emit("showToastMessage",{id:"".concat(t.response.Body.ErrorIdentifier,"CustomErrorMessage"),text:t.response.Body.ErrorMessage,variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"sendTokenViaTransportErrorMessage",heading:"Error Sending Token",text:"The sending of the OTP token via transport has failed. Please contact the administrator.",variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"serverErrorMessage",heading:"Server Communication Error",text:"A server communication error has occurred. Please try again later.",variant:"danger"}),e.loading=!1,e.$log.error("The sending of the OTP token via transport has failed.",t)})}}},i=r("psIG"),s=Object(i.a)(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",[r("b-row",[r("b-col",{staticClass:"mt-4 mb-3 text-center"},[r("h3",[e._v(e._s(e._f("translate")("Two-factor Setup")))])])],1),e._v(" "),r("b-row",[r("b-col",{staticClass:"text-center"},[r("p",[e._v("\n                    "+e._s(e._f("translate")("Please enter your mobile phone number to receive an authentication code."))+"\n                ")])])],1),e._v(" "),r("b-row",{staticClass:"TwoFASetup"},[r("b-col",[r("b-row",[r("b-col",[r("FormInput",{attrs:{"field-classes":{TwoFASetup__CellphoneNumber:!0},placeholder:e._f("translate")("Enter your mobile phone number"),description:e._f("translate")(e.phoneNumberDescription),error:e._f("translate")(e.phoneNumberError),name:"PhoneNumber","auto-focus":""},on:{enter:function(t){return e.provideSetupData()}},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})],1)],1),e._v(" "),r("b-row",[r("b-col",[r("FormCheckbox",{staticClass:"TwoFASetup__EmailSecurity",attrs:{label:e._f("translate")("Enable email security when using the fallback")},model:{value:e.emailSecurity,callback:function(t){e.emailSecurity=t},expression:"emailSecurity"}})],1)],1),e._v(" "),r("b-row",[r("b-col",{staticClass:"my-3",attrs:{cols:"6"}},[r("FormButton",{attrs:{text:e._f("translate")("Cancel"),variant:"primary",block:""},on:{click:function(t){return e.cancel()}}})],1),e._v(" "),r("b-col",{staticClass:"my-3",attrs:{cols:"6"}},[r("FormButton",{attrs:{loading:e.loading,text:e._f("translate")("Next"),disabled:!e.phoneNumber&&e.validPhoneNumber,variant:"primary",block:""},on:{click:function(t){return e.provideSetupData()}}})],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);t.default=s.exports}}]);