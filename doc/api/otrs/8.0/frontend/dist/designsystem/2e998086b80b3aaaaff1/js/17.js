(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1BT7":function(e,t,n){"use strict";n.r(t);n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var o=n("OvAC"),r=n.n(o),i=n("VixF"),l=n("F/wX"),s=n.n(l);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}var a={name:"FormAutocomplete",components:{FormSelect:function(){return Promise.all([n.e(0),n.e(1),n.e(37)]).then(n.bind(null,"cDBQ"))}},mixins:[i.a],props:{value:{type:null},actionIcon:{type:String},url:{type:String,required:!0},params:{type:Object},noResultsText:{type:String},multiple:{type:Boolean,default:!1},searchPromptText:{type:String},clearOnSelect:{type:Boolean,default:!1},testMode:{type:Boolean,default:!1}},data:function(){return{options:[],searchTimeout:{id:null,callback:null}}},computed:{localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}},finalParams:function(){return this.params},hasAppendInlineSlot:function(){return void 0!==this.$slots["append-inline"]}},methods:{loadOptions:function(e){var t=this,n=e.action,o=e.callback,r=e.searchQuery;if("ASYNC_SEARCH"===n){if(this.searchQuery=r,this.searchTimeout.id&&(clearTimeout(this.searchTimeout.id),this.searchTimeout.callback(null,[]),this.searchTimeout.id=null,this.searchTimeout.callback=null),!r)return this.options=[],void o(null,this.options);this.searchTimeout.callback=o,this.searchTimeout.id=setTimeout(function(){t.fetchOptions(r,o)},400)}},fetchOptions:function(e,t){var n=this;this.testMode?setTimeout(function(){n.options=s.a.tz.names().reduce(function(t,n){return t.length<20&&-1!==n.toLowerCase().indexOf(e.toLowerCase())&&t.push({id:n,label:n,data:{timezoneId:n}}),t},[]),t(null,n.options)},300):this.clientSendRequest({Path:this.url,Method:"get",Query:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({SearchTerm:e},this.finalParams)}).then(function(e){n.options=e.Body.Options,t(null,n.options)}).catch(function(e){n.options=[],n.$log.error(e),t("An error occurred while fetching the options.",[])})},focus:function(){this.$refs.formSelect&&this.$refs.formSelect.focus()},select:function(e,t){this.$emit("select",e,t)},filter:function(e){return this.$refs.formSelect.filter(e)},clear:function(){return this.$refs.formSelect.clear()}}},u=(n("Mk2q"),n("psIG")),p=Object(u.a)(a,function(){var e=this,t=e.$createElement;return(e._self._c||t)("FormSelect",{ref:"formSelect",staticClass:"Form__Autocomplete",attrs:{"auto-focus":e.autoFocus,error:e.error,label:e.label,"label-placeholder":e.labelPlaceholder,"label-sr-only":e.labelSrOnly,required:e.required,description:e.description,name:e.name,multiple:e.multiple,disabled:e.disabled,hidden:e.hidden,"hide-description":e.hideDescription,placeholder:e.placeholder,"clear-on-select":e.clearOnSelect,options:e.options,"load-options":e.loadOptions,"cache-options":!1,"no-results-text":e.noResultsText,"search-prompt-text":e.searchPromptText,async:"","open-on-focus":""},on:{select:e.select},scopedSlots:e._u([e.hasAppendInlineSlot?{key:"append-inline",fn:function(){return[e._t("append-inline")]},proxy:!0}:null],null,!0),model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}})},[],!1,null,null,null);t.default=p.exports},Mk2q:function(e,t,n){"use strict";var o=n("S9By");n.n(o).a},S9By:function(e,t,n){}}]);