(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{fhmp:function(e,t,n){"use strict";n.r(t);var o={name:"DocsComponentsUsage"},s=n("psIG"),a=Object(s.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main documentation-content"},[n("h1",{staticClass:"design-system"},[e._v("How to work with components")]),e._v(" "),n("p",[e._v("\n            You may have already read the "),n("b-link",{staticClass:"design-system",attrs:{to:"/documentation/intro"}},[e._v("introduction")]),e._v("\n            and thus have a basic impression of what components are meant to be. Imagine a screen in OTRS to be a\n            collection of different components which are supposed to handle different tasks:\n        ")],1),e._v(" "),e._m(0),e._v(" "),n("p",[e._v("\n            Now, whenever you would like to include a table into a screen that you're currently working on, instead of\n            browsing through existing screens in OTRS to look for a table which features the things you need, you\n            would just go ahead and browse the design system for a table component, which you will then find in\n            "),n("b-link",{staticClass:"design-system",attrs:{to:"/documentation/components/data/data-table"}},[e._v("shared components >\n            data > table")]),e._v(".\n        ")],1),e._v(" "),n("h2",{staticClass:"design-system"},[e._v("How to use the component documentation")]),e._v(" "),n("p",[e._v("\n            Each components documentation contains of up to four different sections, at least two of them should always\n            be present for all components:\n        ")]),e._v(" "),n("ul",[e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("li",[n("strong",[e._v("Appendix")]),e._v(" - if needed, this section may contain additional documentation for\n                certain aspects of the component, e.g. available date format tokens for the "),n("b-link",{staticClass:"design-system",attrs:{to:"/documentation/components/form-field/form-date-time"}},[e._v("date field")]),e._v(".\n            ")],1)]),e._v(" "),n("h2",{staticClass:"design-system"},[e._v("Using a component")]),e._v(" "),n("p",[e._v("\n            When it comes to using a component, you basically have to do only two things (maybe some more,\n            depending on whether the component requires certain data to be present or not).\n        ")]),e._v(" "),e._m(4),e._v(" "),n("h2",{staticClass:"design-system"},[e._v("Changing and adapting components")]),e._v(" "),n("p",[e._v("\n            From time to time, you may stumble upon use cases where the existing components don't provide\n            everyhing you need (both API or design wise), which may force you to change existing components\n            on the front-end level (Vue.js). In general, you should always try to think of the use case in\n            the most generic way possible and ask yourself:\n        ")]),e._v(" "),e._m(5),e._v(" "),n("p",[e._v("\n            If you're in the need of adapting a component either way, you will find the path to the component\n            in the code base in the registration part at the very bottom of the demo section. The path is\n            relative to the respective frontend. Each component is structured the same (taking the\n            "),n("b-link",{staticClass:"design-system",attrs:{to:"/documentation/components/form-field/form-button"}},[e._v("Button")]),e._v("\n            component as an example):\n        ")],1),e._v(" "),n("ul",[n("li",[e._v("\n                The components HTML code (based on "),n("b-link",{staticClass:"design-system",attrs:{href:"https://bootstrap-vue.js.org/"}},[e._v("bootstrap-vue")]),e._v(").\n            ")],1),e._v(" "),n("li",[e._v("\n                The components JavaScript code which defines the properties, events and more for this component.")]),e._v(" "),n("li",[e._v("\n                Optional: a section to include custom CSS for this component.\n            ")])]),e._v(" "),n("p",[e._v("\n            Whenever you're making changes to a component, please make sure to update the respective documentation\n            component in the design system as well. There is a documentation component for each component available\n            at basically the same path, but relative to the Components/Docs path of the design system.\n        ")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Form fields to handle different types of input.")]),this._v(" "),t("li",[this._v("Tables to display tabular data and allow for sorting, filtering and more.")]),this._v(" "),t("li",[this._v("Different types of buttons to link to other screens or trigger certain actions.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("Demo")]),this._v(" - features a preview of the component (if the component is capable of showing\n                such a preview) as well as a live API configuration. This demo allows for configuring the component\n                as you wish to use it and copying the resulting code template to your clipboard afterwards.\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("Usage")]),this._v(" - this section may contain some general aspects of how and when\n                to use this component.\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("API Documentation")]),this._v(" - all the different properties you have already seen on the\n                demo tab are documented in this section, as well as all events for this component and possible slots.\n            ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("strong",[e._v("Register the component in your code.")]),e._v(" The registration code is part of\n                the demo section of each components documentation (you can find it on the very bottom\n                of the demo section) and will typically look like this:\n                "),n("pre",{staticClass:"design-system mb-3"},[e._v("components: {\n    DataTable: () => import('Components/Data/DataTable'),\n},")]),e._v("\n\n                Of course it is possible to use many components in the same Vue.js feature,\n                which would then look like this:\n                "),n("pre",{staticClass:"design-system mb-3"},[e._v("export default {\n    name: 'NameOfYourFeature',\n\n    components: {\n        CommonLogo: () => import('Apps/External/Components/Common/CommonLogo'),\n        CommonLinkList: () => import('Apps/External/Components/Common/CommonLinkList'),\n        AnotherComponent: () => import('Apps/External/Components/AnotherComponent'),\n    },\n};\n                ")])]),e._v(" "),n("li",[n("strong",[e._v("Use the component in your code.")]),e._v(" To use the component, you can just\n                copy and paste the template generated from the demo section of the components documentation.\n                For a example the template for a button with some example text and a certain variant will\n                look like this:\n                "),n("pre",{staticClass:"design-system mb-3"},[e._v('<FormButton\n    size="sm"\n    text="My Text"\n    variant="info" />\n                ')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("\n                Are there other use cases which could be covered as well with just a\n                slight change to your concept?\n            ")]),this._v(" "),t("li",[this._v("\n                Does the use case justify a change to a global component or would it be better to create\n                a custom version of the component for just this customer extension of feature add-on?\n            ")]),this._v(" "),t("li",[this._v("\n                Does the component really need to be changed or is it possible to acquire the needed\n                result by either combining several of the existing props or by changing the conceptual\n                approach of your features design?\n            ")])])}],!1,null,null,null);a.options.__file="DocsComponentsUsage.vue";t.default=a.exports}}]);