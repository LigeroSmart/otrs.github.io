(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{kpUM:function(e,t,n){"use strict";n.r(t);var i=n("gki9"),a=n.n(i),o=(n("Z8gF"),n("GkPX"),n("J8hF"),n("R8iU")),r=n.n(o),u=n("xlkx"),s={name:"TwoFactorSetup",components:a()({PasswordCheck:function(){return n.e(165).then(n.bind(null,"/kAC"))},SecretVerify:function(){return n.e(191).then(n.bind(null,"0i9X"))}},function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.forEach(function(t){if(RegExp(/\.vue$/).test(t.name)||t.items)if(t.items)o=e(t.items,i,"".concat(a).concat(t.name,"/"),o);else{var u=r.a.basename(t.name,".vue");if("index"===u&&(u=r.a.basename(a.replace(/\/index\.vue$/,"")),a=a.substr(0,a.length-u.length-1)),i&&!new RegExp("^".concat(i)).test(a))return;o[u]=function(){return n("yicQ")("./".concat(a).concat(u))}}}),o}(u)),props:{userType:{type:String,required:!0,validator:function(e){return-1!==["agent","customer"].indexOf(e)}},method:{type:Object,default:function(){}},checkPassword:{type:Boolean,default:!0}},data:function(){return{passwordVerified:!1,setupData:null}},methods:{onCancelSetup:function(){this.setupData=null,this.$emit("cancel")},onSetupDataProvided:function(e){this.setupData=e},onPasswordVerified:function(){this.passwordVerified=!0},onVerified:function(){this.setupData=null,this.$emit("finished-setup")}}},c=n("psIG"),d=Object(c.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.checkPassword&&!e.passwordVerified?n("PasswordCheck",{attrs:{"user-type":e.userType},on:{verified:e.onPasswordVerified,cancel:e.onCancelSetup}}):e.method&&e.setupData?n("SecretVerify",{attrs:{"user-type":e.userType,"setup-data":e.setupData,method:e.method},on:{verified:e.onVerified,cancel:e.onCancelSetup}}):n(e.method&&e.method.Name,{tag:"component",attrs:{"user-type":e.userType,method:e.method},on:{cancel:e.onCancelSetup,"setup-data-provided":e.onSetupDataProvided}})},[],!1,null,null,null);t.default=d.exports},xlkx:function(e){e.exports=[{name:"AuthenticatorApp.vue"},{name:"Base.vue"},{name:"Email.vue"},{name:"SMS.vue"}]},yicQ:function(e,t,n){var i={"./AuthenticatorApp":["9xT8",9,75,158],"./AuthenticatorApp.vue":["9xT8",9,75,158],"./Base":["T0ip",9,164],"./Base.vue":["T0ip",9,164],"./Email":["ns/e",9,159],"./Email.vue":["ns/e",9,159],"./SMS":["kAYO",9,8,144],"./SMS.vue":["kAYO",9,8,144],"./directory-index":["xlkx",3],"./directory-index.json":["xlkx",3]};function a(e){if(!n.o(i,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=i[e],a=t[0];return Promise.all(t.slice(2).map(n.e)).then(function(){return n.t(a,t[1])})}a.keys=function(){return Object.keys(i)},a.id="yicQ",e.exports=a}}]);