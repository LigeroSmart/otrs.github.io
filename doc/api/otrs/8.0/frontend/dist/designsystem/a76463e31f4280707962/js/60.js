(window.webpackJsonp=window.webpackJsonp||[]).push([[60,75,407,408],{"+p0e":function(t,e,o){"use strict";o.r(e);o("2Tod"),o("ABKx");var a=o("5WRv"),n=o.n(a),l=(o("GkPX"),o("IKQL"),o("OvAC")),i=o.n(l),s=(o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("9va6")),r=o("8CHY"),u=o("Q6E5"),c=o.n(u),d=o("VixF");function m(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,a)}return o}function h(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?m(Object(o),!0).forEach(function(e){i()(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var f={name:"FormColumnsLayout",components:{VueDraggable:c.a,CommonDelete:function(){return o.e(37).then(o.bind(null,"uda8"))}},mixins:[d.a],props:{value:{type:Object},availableWidgets:{type:Object,default:function(){return{}}},isMultipleWidgetsHintHidden:{type:Boolean,default:!0}},data:function(){return{oldLocalValue:null,addingInCol:null}},computed:{fieldId:function(){return"formColumnsLayout-".concat(this.uuid)},localValue:function(){return Object(s.cloneDeep)(this.value)},isOneColumnLayout:function(){return"OneColumn"===this.activeColumnLayout},isTwoColumnsLayout:function(){return"TwoColumns"===this.activeColumnLayout},isThreeColumnsLayout:function(){return"ThreeColumns"===this.activeColumnLayout},columnLayoutConfig:function(){return this.localValue[this.activeColumnLayout]||this.$set(this.localValue,this.activeColumnLayout,{}),this.localValue[this.activeColumnLayout]},activeColumnLayout:function(){return this.localValue.ActiveColumnLayout||this.$set(this.localValue,"ActiveColumnLayout","OneColumn"),this.localValue.ActiveColumnLayout},availableWidgetsList:function(){var t=this;return Object.keys(this.availableWidgets).map(function(e){return h({Name:e},t.availableWidgets[e])})},columns:function(){return new Array({OneColumn:1,TwoColumns:2,ThreeColumns:3}[this.activeColumnLayout]).fill().map(function(t,e){return e+1})},realLabel:function(){return this.label===this.name?null:this.label}},watch:{value:function(t){this.oldLocalValue=Object(s.cloneDeep)(t)}},created:function(){this.oldLocalValue=Object(s.cloneDeep)(this.localValue)},methods:{switchLayout:function(t){this.addingInCol=null,this.$set(this.localValue,"ActiveColumnLayout",t),this.emitValue()},widgets:function(t){this.columnLayoutConfig[t]||this.$set(this.localValue[this.activeColumnLayout],t,{});var e=this.columnLayoutConfig[t];return e||this.$set(e,[]),e},setWidgets:function(t,e){this.$set(this.columnLayoutConfig,t,e),this.emitValue()},deleteWidget:function(t,e){var o=this;this.$bus.$emit("showModalMessage",{id:"deleteColumnConfigWidgetOne",heading:"Remove Widget",text:"Do you really want to remove this widget from the layout?",buttonBehavior:"yesNo",okCallback:function(){o.columnLayoutConfig[t].splice(e,1),o.emitValue()}})},openWidgetSelection:function(t){t!==this.addingInCol?this.addingInCol=t:this.addingInCol=null},addWidget:function(t){this.columnLayoutConfig[this.addingInCol].push(h({},t,{ID:this.getUuid()})),this.emitValue()},emitValue:function(){Object(s.isEqual)(this.localValue,this.oldLocalValue)||(this.$emit("input",this.localValue,this.oldLocalValue),this.$emit("changed",this.localValue,this.oldLocalValue),this.oldLocalValue=Object(s.cloneDeep)(this.localValue))},colMDForSection:function(t){return{OneColumn:{container:12,widgetName:11,deleteButton:1},TwoColumns:{container:6,widgetName:11,deleteButton:1},ThreeColumns:{container:4,widgetName:10,deleteButton:2}}[this.activeColumnLayout][t]},isTheLastColumn:function(t){return t>1&&t===this.columns.length},filter:function(t){var e,o=this,a="";a+=(e=this.$locale).translate.apply(e,[this.label].concat(n()(this.localLabelPlaceholder)));return["description"].forEach(function(t){a+=o.$locale.translate(o[t])}),Object.keys(this.availableWidgets).forEach(function(t){var e=o.availableWidgets[t];a+=o.$locale.translate(e.Title)}),Object(r.a)(a,t)},hideMultipleWidgetsHint:function(){this.$store.commit("Apps/Agent/Plugins/Store/ScreenBase/isMultipleWidgetsHintHidden",{isMultipleWidgetsHintHidden:!0})},getFullWidgetTitle:function(t){var e,o="";(t.Config&&t.Config.CustomTitle&&(o="".concat(t.Config.CustomTitle," - ")),void 0!==t.TitlePlaceholder)?o+=(e=this.$locale).translate.apply(e,[t.Title].concat(n()(t.TitlePlaceholder))):o+=this.$locale.translate(t.Title);return o}}},p=(o("oswe"),o("psIG")),g=Object(p.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],staticClass:"ColumnsConfig",attrs:{state:!Boolean(t.error)&&null,label:t._f("translate")(t.realLabel,t.labelPlaceholder),"label-for":t.fieldId,"label-sr-only":t.labelSrOnly,description:t._f("translate")(t.description),"invalid-feedback":t._f("translate")(t.error),"aria-label":t._f("translate")(t.realLabel,t.labelPlaceholder)},scopedSlots:t._u([t.label&&t.description&&t.hideDescription?{key:"label",fn:function(){return[t._v("\n        "+t._s(t._f("translate")(t.realLabel,t.labelPlaceholder))+"\n        "),o("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:t._f("translate")(t.description)}},[o("CommonIcon",{staticClass:"mx-2 Font--Small",attrs:{weight:"regular",icon:"messages-bubble-square-information"}})],1)]},proxy:!0}:null,t.label&&t.description&&t.hideDescription?{key:"description",fn:function(){return[o("small",{staticClass:"sr-only"},[t._v("\n            "+t._s(t._f("translate")(t.description))+"\n        ")])]},proxy:!0}:null],null,!0)},[t._v(" "),t._v(" "),o("b-row",{staticClass:"border-bottom pb-2",attrs:{"no-gutters":"","align-v":"center"}},[o("b-col",{staticClass:"px-4 ColumnLayoutSwitch",attrs:{md:"12"}},[o("span",{staticClass:"mr-2"},[t._v("\n                "+t._s(t._f("translate")("Select the layout you want to edit"))+"\n            ")]),t._v(" "),o("CommonLink",{directives:[{name:"focus",rawName:"v-focus",value:t.autoFocus,expression:"autoFocus"},{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"Icon--OpenOneColumnView mr-2",class:{ActiveColumnLayout:t.isOneColumnLayout},attrs:{title:t._f("translate")("Settings for one-column layout"),disabled:t.disabled},on:{click:function(e){return t.switchLayout("OneColumn")}}},[o("CommonIcon",{attrs:{icon:"layout-top"}})],1),t._v(" "),o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"Icon--OpenTwoColumsView mr-2",class:{ActiveColumnLayout:t.isTwoColumnsLayout},attrs:{title:t._f("translate")("Settings for two-column layout"),disabled:t.disabled},on:{click:function(e){return t.switchLayout("TwoColumns")}}},[o("CommonIcon",{attrs:{icon:"layout-4"}})],1),t._v(" "),o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"Icon--OpenThreeColumsView",class:{ActiveColumnLayout:t.isThreeColumnsLayout},attrs:{title:t._f("translate")("Settings for three-column layout"),disabled:t.disabled},on:{click:function(e){return t.switchLayout("ThreeColumns")}}},[o("CommonIcon",{attrs:{icon:"layout-3"}})],1)],1)],1),t._v(" "),o("b-row",{staticClass:"pt-2",attrs:{"no-gutters":"","align-v":"center"}},[o("b-col",{staticClass:"px-4"},[t._v("\n            "+t._s(t._f("translate")("You are editing the %s column layout",t.columns.length))+"\n        ")])],1),t._v(" "),o("b-row",{staticClass:"mt-2",attrs:{"no-gutters":""}},t._l(t.columns,function(e){return o("b-col",{key:e,staticClass:"px-4 py-3 ColumnLayoutSettings__Box",attrs:{cols:t.colMDForSection("container")}},[o("b-row",{attrs:{"no-gutters":""}},[o("b-col",[o("VueDraggable",{attrs:{value:t.widgets(e),disabled:t.disabled,group:"threeColumnLayout",animation:"200","ghost-class":"DragDropGhost",handle:".FormColumnsLayout__DragAndDrop"},on:{input:function(o){return t.setWidgets(e,o)}}},t._l(t.widgets(e),function(a,n){return o("b-row",{key:a.ID,staticClass:"mb-2",attrs:{"no-gutters":"","align-v":"center"}},[o("b-col",{staticClass:"pr-sm-2 pr-xl-0",attrs:{cols:t.colMDForSection("widgetName")}},[o("b-row",{staticClass:"d-flex align-items-center px-3 py-2 ColumnLayoutSettings__Item",attrs:{"no-gutters":""}},[o("b-col",{staticClass:"text-truncate",attrs:{cols:"10",title:t.getFullWidgetTitle(a)}},[t._v("\n                                        "+t._s(t.getFullWidgetTitle(a))+"\n                                    ")]),t._v(" "),o("b-col",{staticClass:"text-right",attrs:{cols:"2"}},[o("CommonIcon",{staticClass:"FormColumnsLayout__DragAndDrop",attrs:{weight:"bold",icon:"layout-module"}})],1)],1)],1),t._v(" "),"0"===a.IsAlwaysPresent||void 0===a.IsAlwaysPresent?o("b-col",{staticClass:"text-right",attrs:{cols:t.colMDForSection("deleteButton")}},[o("CommonDelete",{staticClass:"Delete",attrs:{title:t._f("translate")("Remove widget"),disabled:t.disabled},on:{click:function(o){return t.deleteWidget(e,n)}}})],1):t._e()],1)}),1),t._v(" "),o("b-row",{staticClass:"mt-4 text-center",attrs:{"no-gutters":""}},[o("b-col",{staticClass:"position-relative"},[t.addingInCol===e?o("div",{staticClass:"ColumnLayoutSettings__AddLayer position-absolute",class:{"ColumnLayoutSettings__AddLayer--Inverted":t.isTheLastColumn(e)}},t._l(t.availableWidgetsList,function(e){return o("b-row",{key:e.Name,staticClass:"my-2 mx-1",attrs:{"no-gutters":""}},[o("b-col",{staticClass:"text-truncate"},[o("CommonLink",{staticClass:"px-2 text-truncate\n                                                d-block HoverUnderline ColumnLayoutSettings__Item",on:{click:function(o){return t.addWidget(e)}}},[t._v("\n                                            "+t._s(t.getFullWidgetTitle(e))+"\n                                        ")])],1)],1)}),1):t._e(),t._v(" "),o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"py-2 ColumnLayoutSettings__AddButton",class:{"ColumnLayoutSettings__AddButton--Active":t.addingInCol===e},attrs:{title:t._f("translate")("Add new widget"),disabled:t.disabled},on:{click:function(o){return t.openWidgetSelection(e)}}},[o("CommonIcon",{staticClass:"icon",attrs:{icon:t.addingInCol==e?"close":"add"}})],1)],1)],1)],1)],1)],1)}),1),t._v(" "),o("b-row",{staticClass:"my-3",attrs:{"no-gutters":""}},[o("b-col",{staticClass:"px-4 text-left"},[o("p",{staticClass:"m-0"},[t._v("\n                "+t._s(t._f("translate")("Here you can design the column layout of the detail view according to your requirements."))+"\n            ")]),t._v(" "),o("p",{staticClass:"m-0"},[t._v("\n                "+t._s(t._f("translate")("Please press the add button at the bottom to add a widget you want to get displayed."))+"\n            ")]),t._v(" "),o("p",{staticClass:"m-0"},[t._v("\n                "+t._s(t._f("translate")("You can remove a widget by clicking the trash icon."))+"\n            ")]),t._v(" "),o("p",{staticClass:"m-0"},[t._v("\n                "+t._s(t._f("translate")("You can change the settings of each widget directly from itself."))+"\n            ")])])],1),t._v(" "),t.isMultipleWidgetsHintHidden?t._e():o("div",{staticClass:"mx-4 mb-3 p-2 Hint"},[o("b-row",[o("b-col",{attrs:{cols:"10"}},[o("CommonIcon",{attrs:{size:"sm",icon:"study-light-idea",decorative:""}}),t._v("\n                "+t._s(t._f("translate")("Hint: You can add widgets multiple times. Each widget has its own settings."))+"\n            ")],1),t._v(" "),o("b-col",{staticClass:"text-right",attrs:{cols:"2"}},[o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t._f("translate")("Hide the hint")},on:{click:t.hideMultipleWidgetsHint}},[o("CommonIcon",{attrs:{size:"sm",icon:"close"}})],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=g.exports},"3Hfo":function(t,e,o){"use strict";var a=o("5WRv"),n=o.n(a),l=o("8CHY");e.a={methods:{filter:function(t){var e,o=this,a="";a+=(e=this.$locale).translate.apply(e,[this.label].concat(n()(this.localLabelPlaceholder)));return["description","localPlaceholder"].forEach(function(t){a+=o.$locale.translate(o[t])}),Object(l.a)(a,t)}}}},"8CHY":function(t,e,o){"use strict";o.d(e,"a",function(){return l});o("asZ9");var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","ẞ":"SS","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ɶ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ſ":"s","ẛ":"s","ß":"ss","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","０":"0","₀":"0","⓪":"0","⁰":"0","¹":"1","⑴":"1","₁":"1","❶":"1","⓵":"1","⒈":"1","①":"1","１":"1","²":"2","❷":"2","⑵":"2","２":"2","₂":"2","⓶":"2","②":"2","⒉":"2","³":"3","３":"3","⒊":"3","⑶":"3","₃":"3","❸":"3","⓷":"3","③":"3","⓸":"4","④":"4","⒋":"4","４":"4","⁴":"4","₄":"4","❹":"4","⑷":"4","⒌":"5","₅":"5","⓹":"5","⑸":"5","❺":"5","⑤":"5","５":"5","⁵":"5","⑹":"6","⁶":"6","６":"6","❻":"6","₆":"6","⑥":"6","⓺":"6","⒍":"6","７":"7","⁷":"7","❼":"7","⓻":"7","⒎":"7","₇":"7","⑺":"7","⑦":"7","⑧":"8","⒏":"8","⓼":"8","⑻":"8","⁸":"8","８":"8","❽":"8","₈":"8","⓽":"9","９":"9","⒐":"9","❾":"9","⑼":"9","₉":"9","⑨":"9","⁹":"9"},n=function(t){for(var e,o=t.split(""),n=o.length-1,l=!1;n>=0;n--)e=o[n],a[e]&&(o[n]=a[e],l=!0);return l&&(t=o.join("")),t},l=function(t,e){var o=n(t),a=n(e);return-1!==o.toLowerCase().indexOf(a.toLowerCase())||-1!==o.toUpperCase().indexOf(a.toUpperCase())}},"9ygP":function(t,e,o){},A86J:function(t,e,o){"use strict";e.a={directives:{focus:{inserted:function(t,e){e.value&&t.focus()}}},props:{autoFocus:{type:Boolean,default:!1}},watch:{autoFocus:function(t){t&&"function"==typeof this.focus&&this.focus()}},methods:{focus:function(){this.$el&&"function"==typeof this.$el.focus&&this.$el.focus()}}}},VixF:function(t,e,o){"use strict";var a=o("A86J"),n=o("3Hfo"),l=o("rpZP");e.a={mixins:[a.a,n.a,{computed:{localPlaceholder:function(){if(!this.placeholder)return"";var t=this.$locale.translate(this.placeholder);return this.labelSrOnly&&this.required&&(t="".concat(t,"*")),t}}},l.a],props:{label:{type:String},labelPlaceholder:{type:Array},labelSrOnly:{type:Boolean,default:!1},placeholder:{type:String},description:{type:String},hideDescription:{type:Boolean,default:!1},error:{type:String},required:{type:Boolean,default:!1},name:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},computed:{localLabelPlaceholder:function(){var t=this,e=[];return Array.isArray(this.labelPlaceholder)?(this.labelPlaceholder.forEach(function(o){e.push(t.$locale.translate(o))}),e):e}},mounted:function(){var t=this;this.$nextTick(function(){t.$emit("loaded")})}}},oswe:function(t,e,o){"use strict";var a=o("9ygP");o.n(a).a}}]);