(window.webpackJsonp=window.webpackJsonp||[]).push([[85,96],{"2HJu":function(e,t,n){},"8JoN":function(e,t,n){"use strict";var s=n("2HJu");n.n(s).a},GD02:function(e,t,n){"use strict";n.r(t);n("2Tod"),n("ABKx"),n("e2Kn"),n("oMRA"),n("6d4m"),n("asZ9"),n("Z8gF");var s=n("e+GP"),o=n.n(s),a=(n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("it7j"),n("GkPX"),n("OvAC")),r=n.n(a),l=n("9va6"),i=n("lOrp");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var u={name:"DocsExample",components:{CommonCopyToClipboard:function(){return n.e(86).then(n.bind(null,"HvPz"))},CommonNotice:function(){return n.e(386).then(n.bind(null,"mkLc"))}},props:{component:{type:Object,required:!0},componentPath:{type:String,required:!0},componentNamespace:{type:String},isGlobal:{type:Boolean,default:!1},hasOwnApi:{type:Boolean,default:!1},hasValue:{type:Boolean,default:!1},props:{type:Array},events:{type:Array},slots:{type:Array},example:{type:Object},value:{type:null},customCode:{type:Array,default:function(){return[]}}},data:function(){return{frontends:{"":"No style",Agent:"Agent Interface style",External:"External Interface style"},agentFrontendStyles:{Bright:"Bright",Dark:"Dark",HighContrastBright:"High Contrast Bright",HighContrastDark:"High Contrast Dark"},agentFrontendStyle:null,values:this.getExampleValues(),localEvents:{},localSlots:{},currentEvent:"",currentParam:""}},computed:p({localValue:{get:function(){return this.value},set:function(e,t){e!==t&&this.$emit("input",e,t)}},registration:function(){var e="";return this.isGlobal||(e+="components: {\n",e+="    ".concat(this.component.name,": () => import('").concat(this.componentPath,"'),\n"),e+="},"),e},usage:function(){var e=this,t="";if(this.hasOwnApi)return t;t="<".concat(this.component.name);var n=[];return(this.props&&this.props.length&&this.props.find(function(e){return"value"===e.name})&&this.events.length&&this.events.find(function(e){return"input"===e.name})||this.hasValue)&&n.push('v-model="myData"'),Object.keys(this.values).forEach(function(t){var s,a=e.values[t],r=e.props&&e.props.length&&e.props.find(function(e){return e.name===t});if(!r||"Boolean"!==r.type&&"Number"!==r.type?r&&(s=r.default!==a):s=String(r.default)!==String(a),s&&void 0!==a){var i=Object(l.kebabCase)(t);if("Boolean"!==r.type)if(Array.isArray(a)&&!a.length||"object"===o()(a)&&!Object.keys(a).length||"function"==typeof a);else if("object"===o()(a)){var c=JSON.stringify(a);c=(c=(c=(c=c.replace(/'/g,"\\'")).replace(/\\"/g,"&quot;")).replace(/"/g,"'")).replace(/&quot;/g,'"'),i="v-bind:".concat(i,'="').concat(c,'"'),n.push(i)}else i+='="'.concat(e.$options.filters.html(a),'"'),n.push(i);else a?n.push(i):a||(i="v-bind:".concat(i,'="false"'),n.push(i))}}),Object.keys(this.localEvents).forEach(function(e){var t=Object(l.kebabCase)(e);n.push("v-on:".concat(t,'="myMethod()"'))}),n.length>1?(t+="\n    ",t+=n.join("\n    ")):1===n.length&&(t+=" ",t+=n[0]),Object.keys(this.localSlots).length?(t+=">\n",this.slots.forEach(function(n){e.localSlots[n.name]&&("default"===n.name?e.example.slots&&e.example.slots.default&&e.example.slots.default.content?t+="    ".concat(e.example.slots.default.content,"\n"):t+="    \x3c!-- ".concat(n.description," --\x3e\n"):(t+="    <template v-slot:".concat(n.name),n.scope&&(t+='="'.concat(n.scope,'"')),t+=">\n",e.example.slots&&e.example.slots[n.name]&&e.example.slots[n.name].content?t+="    ".concat(e.example.slots[n.name].content,"\n"):t+="        \x3c!-- ".concat(n.description," --\x3e\n"),t+="    </template>\n"))}),t+="</".concat(this.component.name,">")):t+=" />",t},isSharedComponent:function(){return!(!this.componentNamespace||"Components"!==this.componentNamespace)},frontendStyle:function(){var e={};return this.componentNamespace&&/Apps\//.test(this.componentNamespace)?e["App--".concat(this.componentNamespace.split("/")[1])]=!0:this.frontend&&(e["App--".concat(this.frontend)]=!0),e},agentFrontendStyleClass:function(){return this.agentFrontendStyle?["Style__".concat(this.agentFrontendStyle),"Style__".concat(this.agentFrontendStyle,"--Variant1")]:[]}},Object(i.b)(["frontend"])),mounted:function(){var e=this;this.events&&this.events.forEach(function(t){e.example.events&&e.example.events.includes(t.name)&&e.registerEvent(t.name)}),this.slots&&this.slots.forEach(function(t){e.example.slots&&e.example.slots[t.name]&&e.example.slots[t.name].content&&e.activateSlot(t.name)})},methods:{getExampleValues:function(){var e=this,t={};return this.example&&Object.keys(this.example).forEach(function(n){t[n]=e.example[n].default}),t},registerEvent:function(e){var t=this;this.$set(this.localEvents,e,function(){t.currentEvent=e;for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];t.currentParam=s,t.$refs.exampleModal.show()})},unregisterEvent:function(e){this.$delete(this.localEvents,e)},activateSlot:function(e){this.$set(this.localSlots,e,!0)},deactivateSlot:function(e){this.$delete(this.localSlots,e)},vueObjectReplacer:function(){return function(e,t){if(null===t||"object"!==o()(t)||!t._isVue)return t}}},render:function(e){var t=this,n=[],s=[],o=[],a=[],r=[],l=[],i=[],c={};(this.props&&this.props.length&&this.props.find(function(e){return"value"===e.name})&&this.events.length&&this.events.find(function(e){return"input"===e.name})||this.hasValue)&&n.push(e("b-row",{},[e("b-col",{class:{"mb-2":!0}},[e("hr",{class:{"mt-0":!0}}),e("h3",{class:{DesignSystem:!0}},["Value"]),e("pre",{class:{DesignSystem:!0,"mb-2":!0}},[JSON.stringify(this.localValue)||e("em",{class:"text-muted"},["(empty)"])])])]));var u=[];this.example&&Object.keys(this.example).forEach(function(n){if(t.example[n].type){var s={};"checkbox"===t.example[n].type?s.checked=t.values[n]:s.value=t.values[n];var o=[];"object"===t.example[n].type||"array"===t.example[n].type||"resource"===t.example[n].type||"function"===t.example[n].type?o.push(e("p",{class:{"font-italic":!0,small:!0,"m-0":!0}},["This prop expects a complex data type. Changing this kind of value in the design system\nis currently not possible!"])):o.push(e("b-form-".concat(t.example[n].type),{props:p({id:"prop-".concat(n),type:t.example[n].subType,options:t.example[n].options,size:"sm",formatter:t.example[n].subType&&"number"===t.example[n].subType?function(e){return Number(e)}:void 0},s),on:{input:function(e){t.values[n]=e,t.$emit("input-generator-value",n,e)}}})),t.props&&t.props.length&&t.props.find(function(e){return e.name===n})?u.push(e("b-col",{props:{lg:6,xl:4}},[e("b-form-group",{props:{description:t.props.find(function(e){return e.name===n}).description,labelCols:12,labelColsLg:6,labelClass:"text-truncate",horizontal:!1,labelSize:"md",label:n,labelFor:"prop-".concat(n)}},[].concat(o))])):t.$log.warn("DocsExample: Missing documentation for '".concat(n,"' prop, skipping..."))}}),u.length&&s.push(e("b-row",{},[e("b-col",{class:{"mb-2":!0}},[e("hr",{class:{"mt-0":!0}}),e("h3",{class:{DesignSystem:!0}},["Available Attributes"]),e("p",{class:{DesignSystem:!0,DesignSystem__Explanation:!0}},["Change the attributes below to get a live preview and code example."])])]),e("b-row",{},[u]));var m=[];this.events&&this.events.forEach(function(n){m.push(e("b-col",{props:{md:6}},[e("b-form-group",{props:{description:n.description,labelCols:4,horizontal:!1,labelSize:"md",label:n.name,labelFor:"event-".concat(n.name)}},[e("b-form-checkbox",{props:{id:"event-".concat(n.name),size:"sm",checked:Boolean(t.example.events&&t.example.events.includes(n.name))},on:{input:function(e){e?t.registerEvent(n.name):t.unregisterEvent(n.name)}}})])]))}),m.length&&o.push(e("b-row",{},[e("b-col",{class:{"mb-2":!0}},[e("hr",{class:{"mt-0":!0}}),e("h3",{class:{DesignSystem:!0}},["Events"])])]),e("b-row",{},[m]));var h=[];this.slots&&this.slots.forEach(function(n){h.push(e("b-col",{props:{md:6}},[e("b-form-group",{props:{description:n.description,labelCols:4,horizontal:!1,labelSize:"md",label:n.name,labelFor:"slot-".concat(n.name)}},[e("b-form-checkbox",{props:{id:"slot-".concat(n.name),size:"sm",checked:Boolean(t.example.slots&&t.example.slots[n.name]&&t.example.slots[n.name].content)},on:{input:function(e){e?t.activateSlot(n.name):t.deactivateSlot(n.name)}}})])]))}),h.length&&a.push(e("b-row",{},[e("b-col",{class:{"mb-2":!0}},[e("hr",{class:{"mt-0":!0}}),e("h3",{class:{DesignSystem:!0}},["Slots"])])]),e("b-row",{},[h])),this.hasOwnApi||r.push(e("b-row",{},[e("b-col",{class:{"mb-2":!0}},[e("hr",{class:{"mt-0":!0}}),l,e("CommonCopyToClipboard",{class:{DesignSystem__CopyToClipboard:!0},props:{copy:this.usage}}),e("h3",{class:{DesignSystem:!0}},["Template"]),e("p",{class:{DesignSystem:!0,DesignSystem__Explanation:!0}},["Copy this code and use it in your application."]),e("pre",{class:{DesignSystem:!0,DesignSystem__UsageTemplate:!0,"mb-2":!0}},[this.usage])])])),void 0!==this.customCode&&this.customCode.length&&this.customCode.forEach(function(t){i.push(e(t.tag,{attrs:t.attrs?t.attrs:null,class:t.class?t.class:null,directives:t.directives?[t.directives]:null,props:t.props?t.props:null,on:t.on?t.on:null,ref:t.ref?t.ref:null},[t.value]))}),this.example&&this.example.slots&&Object.keys(this.example.slots).forEach(function(n){t.example.slots[n].render&&"function"==typeof t.example.slots[n].render&&(c[n]=t.example.slots[n].render(e,t.example))}),this.isGlobal||l.push(e("hr",{class:{"mt-0":!0}}),e("CommonCopyToClipboard",{class:{DesignSystem__CopyToClipboard:!0},props:{copy:this.registration}}),e("h3",{class:{DesignSystem:!0}},["Vue.js Registration"]),e("p",{class:{DesignSystem:!0,DesignSystem__Explanation:!0}},["Use this code block to register the usage of this component in your code."]),e("pre",{class:{DesignSystem:!0,DesignSystem__ComponentRegistration:!0,"mb-2":!0}},[this.registration]));var f=[];if("Agent"===this.frontend){var d=[];this.agentFrontendStyle||(this.agentFrontendStyle="Bright"),Object.keys(this.agentFrontendStyles).forEach(function(n){d.push(e("b-dropdown-item",{on:{click:function(){t.agentFrontendStyle=n}}},[t.agentFrontendStyles[n]]))}),f.push(e("b-dropdown",{class:{DesignSystem__AgentStyleSelection:!0},props:{text:this.agentFrontendStyle,size:"sm",right:!0}},d))}if(this.isSharedComponent){var y=[];Object.keys(this.frontends).forEach(function(n){y.push(e("b-dropdown-item",{on:{click:function(){t.$store.commit("frontend",{frontend:n})}}},[t.frontends[n]]))}),f.push(e("b-dropdown",{class:{DesignSystem__InterfaceSelection:!0},props:{text:this.frontends[this.frontend],size:"sm",right:!0}},y))}var b=[];return f.length&&b.push(e("b-row",{},[e("b-col",{},f)])),e("div",{},[e("b-container",{props:{fluid:!0}},[].concat(b,[e("b-row",{class:this.agentFrontendStyleClass},[e("b-col",{class:p({"mb-4":!0,"mt-2":!0,DesignSystem__ComponentExample:!0},this.frontendStyle),attrs:{id:"App"}},[].concat(i,[e(this.component,{ref:"componentExample",props:p({value:this.value},this.values),on:p({input:function(e,n){e!==n&&t.$emit("input",e)}},this.localEvents),scopedSlots:c})]))])],n,s,o,a,r,l)),e("b-modal",{props:{okOnly:!0,centered:!0,lazy:!0,"hide-header":!0},ref:"exampleModal"},[e("p",{style:{"word-break":"break-word"},domProps:{innerHTML:"Triggered by <code>".concat(this.currentEvent,"</code> event, got:")+'<pre class="DesignSystem event-payload">'+"".concat(JSON.stringify(this.currentParam,this.vueObjectReplacer(),"    "))+"</pre>"}})])])}},m=(n("8JoN"),n("psIG")),h=Object(m.a)(u,void 0,void 0,!1,null,null,null);t.default=h.exports},"e+GP":function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n}}]);