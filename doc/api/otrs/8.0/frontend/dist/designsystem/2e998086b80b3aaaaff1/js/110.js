(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{"0i9X":function(e,t,n){"use strict";n.r(t);var s={name:"SecretVerify",components:{FormButton:function(){return Promise.all([n.e(2),n.e(10)]).then(n.bind(null,"dphA"))},FormInput:function(){return n.e(15).then(n.bind(null,"CJfq"))}},props:{userType:{type:String,required:!0,validator:function(e){return-1!==["agent","customer"].indexOf(e)}},setupData:{type:Object,required:!0},method:{type:Object,required:!0}},data:function(){return{loading:!1,token:null,secretVerifyError:null}},methods:{cancel:function(){this.$emit("cancel")},checkToken:function(){var e=this;this.loading=!0,this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/secret-verify/").concat(this.method.Name),Method:"post",Body:{Secret:this.setupData.sharedSecret,Token:this.token,EmailSecurity:this.setupData.emailSecurity,PhoneNumber:this.setupData.phoneNumber}}).then(function(){e.$emit("verified"),e.$bus.$emit("showToastMessage",{id:"twoFactorSetupSuccessfulMessage",heading:"Two-Factor Setup Successful",text:"You have successfully configured the two-factor authentication.",variant:"success"}),e.loading=!1,e.$nextTick(function(){e.$test.setFlag("Account::TwoFactor::SecretVerify")})}).catch(function(){e.loading=!1,e.secretVerifyError="The token is invalid. Please try again."})},resendSetupToken:function(){var e=this;this.loading=!0,this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/send-setup-token-via-transport/").concat(this.method.Name),Method:"post",Body:{Secret:this.setupData.sharedSecret,EmailSecurity:this.setupData.emailSecurity,PhoneNumber:this.setupData.phoneNumber}}).then(function(){e.$bus.$emit("showToastMessage",{id:"SendTokenViaTransportSuccessMessage",text:"A message with the verification code was successfully sent.",variant:"success"}),e.$nextTick(function(){e.loading=!1,e.$test.setFlag("Account::TwoFactor::SendSetupTokenViaTransport")})}).catch(function(t){t?t.response&&900===t.response.Code?e.$bus.$emit("showToastMessage",{id:"".concat(t.response.Body.ErrorIdentifier,"CustomErrorMessage"),text:t.response.Body.ErrorMessage,variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"sendTokenViaTransportErrorMessage",heading:"Error Sending Token",text:"The sending of the OTP token via %s transport has failed. Please contact the administrator.",textPlaceholders:[e.method.Name],variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"serverErrorMessage",heading:"Server Communication Error",text:"A server communication error has occurred. Please try again later.",variant:"danger"}),e.loading=!1,e.$log.error("Send setup OTP token via ".concat(e.method.Name," transport failed!"),t)})}}},o=n("psIG"),r=Object(o.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",[n("b-col",[n("b-row",[n("b-col",{staticClass:"mt-4 mb-3 text-center"},[n("h3",[e._v(e._s(e._f("translate")("Two-factor Setup")))])])],1),e._v(" "),n("b-row",[n("b-col",{staticClass:"text-center"},[n("p",[e._v("\n                    "+e._s(e._f("translate")(e.method.EnterSetupCodeMessage.Message))+"\n                ")])])],1),e._v(" "),n("b-row",{staticClass:"TwoFASetup"},[n("b-col",{staticClass:"col-10 offset-1",attrs:{"no-gutters":""}},[n("b-row",{staticClass:"mt-3"},[n("b-col",[n("FormInput",{attrs:{"field-classes":{TwoFASetup__Token:!0},placeholder:e._f("translate")("Enter code"),error:e._f("translate")(e.secretVerifyError),"auto-focus":""},on:{enter:function(t){return e.checkToken()}},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}})],1)],1),e._v(" "),e.method.IsSendingTokenViaTransport?n("b-row",{staticClass:"text-center mb-3"},[n("b-col",{staticClass:"col-10 offset-1",attrs:{"no-gutters":""}},[n("p",[e._v("\n                            "+e._s(e._f("translate")("You did not receive the token?"))+"\n                            "),n("CommonLink",{staticClass:"HoverUnderline",on:{click:function(t){return e.resendSetupToken()}}},[e._v("\n                                "+e._s(e._f("translate")("Resend"))+"\n                            ")])],1)])],1):e._e(),e._v(" "),n("b-row",[n("b-col",{staticClass:"my-3",attrs:{cols:"6"}},[n("FormButton",{attrs:{text:e._f("translate")("Cancel"),variant:"secondary",block:""},on:{click:function(t){return e.cancel()}}})],1),e._v(" "),n("b-col",{staticClass:"my-3",attrs:{cols:"6"}},[n("FormButton",{attrs:{text:e._f("translate")("Verify"),disabled:!e.token,variant:"primary",block:""},on:{click:function(t){return e.checkToken()}}})],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);t.default=r.exports}}]);