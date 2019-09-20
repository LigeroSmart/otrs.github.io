(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{"1vfQ":function(t,n,o){"use strict";o.r(n);o("e2Kn");var e={name:"BusinessObjectPropertyCustomer",components:{BusinessObjectWidgetPropertyCustomerLayout:function(){return o.e(51).then(o.bind(null,"NvFU"))}},props:{itemId:{type:[Number,String]},testMode:{type:Boolean,default:!1},testInfo:{type:Object},columnLayout:{type:String}},data:function(){return{info:{}}},computed:{fetchDataUrl:function(){return null},dynamicFields:function(){return this.info.DynamicFields||[]},socialLinks:function(){return this.info.SocialLinks||[]},mapLinks:function(){return this.info.MapLinks||[]},ticketKpi:function(){return this.info.TicketKPI||{}},customerId:function(){return this.info.CustomerID},personalInfo:function(){return this.info.PersonalInfo?this.info.PersonalInfo:null},name:function(){return this.personalInfo.CustomerCompanyName?this.personalInfo.CustomerCompanyName.Value:null},country:function(){return this.personalInfo.CustomerCompanyCountry?this.personalInfo.CustomerCompanyCountry.Value:null},city:function(){return this.personalInfo.CustomerCompanyCity?this.personalInfo.CustomerCompanyCity.Value:null},street:function(){return this.personalInfo.CustomerCompanyStreet?this.personalInfo.CustomerCompanyStreet.Value:null},zipcode:function(){return this.personalInfo.CustomerCompanyZIP?this.personalInfo.CustomerCompanyZIP.Value:null},url:function(){return this.personalInfo.CustomerCompanyURL?this.personalInfo.CustomerCompanyURL.Value:null},additionalInfo:function(){var t=this.dynamicFields.map(function(t){return{name:t.Name,isDynamicField:!0,field:t}});return t}},watch:{itemId:function(){this.fetchData()}},created:function(){this.itemId&&this.fetchData()},methods:{fetchData:function(){var t=this;this.itemId?this.testMode?this.info=this.testInfo:this.clientSendRequest({Path:this.fetchDataUrl,Method:"get"}).then(function(n){t.info=n.Body,t.$nextTick(function(){t.$test.setFlag("WidgetPropertyFetch::Customer::Data")})}).catch(function(n){t.$bus.$emit("showToastMessage",{id:"fetchCustomerPropertyData",heading:"Unable to fetch customer data",text:"Please contact the administrator.",variant:"danger"}),t.$log.error("Fetching customer data failed!",n)}):this.info={}},onEditCustomer:function(){}}},i=o("psIG"),a=Object(i.a)(e,function(){var t=this,n=t.$createElement,o=t._self._c||n;return t.customerId?o("BusinessObjectWidgetPropertyCustomerLayout",{attrs:{type:"Customer","column-layout":t.columnLayout,"ticket-kpi":t.ticketKpi,"additional-info":t.additionalInfo}},[o("b-row",[o("b-col",{staticClass:"py-2 border-bottom InfoCard__Header"},[o("h3",{staticClass:"p-0 m-0"},[t._v("\n                "+t._s(t._f("translate")("Customer"))+"\n            ")])])],1),t._v(" "),o("b-row",[o("b-col",{staticClass:"py-2 mx-3 px-0 border-bottom InfoCard__Contact"},[o("h4",{staticClass:"m-0"},[t._v("\n                "+t._s(t.name)+"\n            ")]),t._v("\n            "+t._s(t.street)),o("br"),t._v("\n            "+t._s(t.zipcode)+" "+t._s(t.city)),o("br"),t._v("\n            "+t._s(t.country)+"\n        ")])],1),t._v(" "),o("b-row",[o("b-col",{staticClass:"py-2 mx-3 px-0 InfoCard__Meta",class:{"border-bottom":t.dynamicFields.length}},[o("b-row",{attrs:{"align-h":"start"}},[o("b-col",{attrs:{cols:"auto"}},[o("div",{staticClass:"InfoCard__Label"},[t._v("\n                        "+t._s(t._f("translate")("Action"))+"\n                    ")]),t._v(" "),o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t._f("translate")("Edit customer")}},[o("CommonIcon",{attrs:{icon:"single-neutral-actions-edit-1"},on:{click:t.onEditCustomer}})],1)],1),t._v(" "),t.mapLinks.length?o("b-col",{attrs:{cols:"auto"}},[o("div",{staticClass:"InfoCard__Label"},[t._v("\n                        "+t._s(t._f("translate")("Map"))+"\n                    ")]),t._v(" "),t._l(t.mapLinks,function(n,e){return o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],key:n.Name,class:{"ml-2":e>0},attrs:{title:t._f("translate")(n.Title),link:n.URL,target:n.Target,"is-external":""}},[o("CommonIcon",{attrs:{"weight-with-icon":n.CommonIcon}})],1)})],2):t._e(),t._v(" "),t.url?o("b-col",{attrs:{cols:"auto"}},[o("div",{staticClass:"InfoCard__Label"},[t._v("\n                        "+t._s(t._f("translate")("Web"))+"\n                    ")]),t._v(" "),o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{link:t.url,title:t.url,target:"_blank","is-external":""}},[o("CommonIcon",{attrs:{"weight-with-icon":"regular,network-www"}})],1)],1):t._e(),t._v(" "),t.socialLinks.length?o("b-col",{attrs:{cols:"auto"}},[o("div",{staticClass:"InfoCard__Label"},[t._v("\n                        "+t._s(t._f("translate")("Social"))+"\n                    ")]),t._v(" "),t._l(t.socialLinks,function(n,e){return o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],key:n.Name,class:{"ml-2":e>0},attrs:{title:t._f("translate")(n.Title),link:n.URL,target:n.Target,"is-external":""}},[o("CommonIcon",{attrs:{"weight-with-icon":n.CommonIcon}})],1)})],2):t._e()],1)],1)],1)],1):t._e()},[],!1,null,null,null);n.default=a.exports}}]);