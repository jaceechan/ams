(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1139:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"imagelist-图片列表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#imagelist-图片列表","aria-hidden":"true"}},[t._v("#")]),t._v(" Imagelist 图片列表")]),t._v(" "),n("h3",{attrs:{id:"基础用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),n("p",[t._v("默认是带有图片的模式。")]),t._v(" "),n("ClientOnly",[n("block-imagelist-demo",{attrs:{blockName:"imagelist1",onlineDemo:"https://codepen.io/w3cmark/pen/RwbEgOZ"}})],1),t._v(" "),n("h3",{attrs:{id:"没有图片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#没有图片","aria-hidden":"true"}},[t._v("#")]),t._v(" 没有图片")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    imageText"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// imageSrc不存在，则认为是无图列表模式，图片显示的位置显示该文案")]),t._v("\n        field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ClientOnly",[n("block-imagelist-demo",{attrs:{blockName:"imagelist2",onlineDemo:"https://codepen.io/w3cmark/pen/OJLrgGv"}})],1),t._v(" "),n("h3",{attrs:{id:"多选批量操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多选批量操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 多选批量操作")]),t._v(" "),n("p",[t._v("配置 "),n("code",[t._v("operations")]),t._v("，注意 "),n("code",[t._v("operations.showBatch")]),t._v("（显示所有批量操作按钮）、"),n("code",[t._v("operations.hideBatch")]),t._v("（隐藏所有批量操作按钮）这两个是内置了action")]),t._v(" "),n("ClientOnly",[n("block-imagelist-demo",{attrs:{blockName:"imagelist3",onlineDemo:"https://codepen.io/w3cmark/pen/gOYEGjJ"}})],1),t._v(" "),n("h4",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),n("p",[t._v("显示数据的字段配置：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以通过options设置显示内容映射的字段名")]),t._v("\n    imageSrc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 图片地址（默认为list的image），如果没有image字段且没指定的其它字段，则认为是无图列表模式")]),t._v("\n        field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imagexxx'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认是取image字段，也可以在这指定其它字段")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    imageText"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 无图模式时，图片的位置显示的文案")]),t._v("\n        field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imageText'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认是取imageText字段，也可以在这指定其它字段")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主标题（默认：list的title）")]),t._v("\n        field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或在这指定其它字段")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'prefix-icon': 'el-icon-search' // 主标题前显示icon")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefix-tag'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主标题显示tag标签")]),t._v("\n            type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'info'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// success | info | warning | danger")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("label")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("args")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标签内容，args是当前list-item的所有信息")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    subtitle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 副标题（默认：list的subtitle）")]),t._v("\n        field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或在这指定其它字段")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主标题右边的信息（默认：list的info）")]),t._v("\n        field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'info'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或在这指定其它字段")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("操作栏（没有配置"),n("code",[t._v("slot")]),t._v("的操作都会会显示列表每一项的这左上角）：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("operations"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rejectedItem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文字类型")]),t._v("\n        props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'danger'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可设置状态")]),t._v("\n            size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mini'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'驳回'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rejectedItem2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文字类型")]),t._v("\n        props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mini'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'通过(协助)'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    deleteItem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// icon类型的按钮")]),t._v("\n        props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mini'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            icon"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'el-icon-delete'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    editItem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hover时会带提示的icon")]),t._v("\n        label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'编辑'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        icon"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'el-icon-edit'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("block类型")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("imagelist")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("ctx")]),t._v(" "),n("td",[t._v("状态，可取值")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("view")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("resource")]),t._v(" "),n("td",[t._v("依赖资源")]),t._v(" "),n("td",[t._v("string / object")]),t._v(" "),n("td",[t._v("--")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("operations")]),t._v(" "),n("td",[t._v("可操作项（没有配置"),n("code",[t._v("slot")]),t._v("的操作都会会显示列表每一项的这左上角）")]),t._v(" "),n("td",[t._v("object")]),t._v(" "),n("td",[t._v("--")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("options")]),t._v(" "),n("td",[t._v("可以设置显示内容映射的字段名")]),t._v(" "),n("td",[t._v("object")]),t._v(" "),n("td",[t._v("--")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("props")]),t._v(" "),n("td",[t._v("辅助配置")]),t._v(" "),n("td",[t._v("object")]),t._v(" "),n("td",[t._v("--")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("props.shadow")]),t._v(" "),n("td",[t._v("辅助配置")]),t._v(" "),n("td",[t._v("object")]),t._v(" "),n("td",[t._v("hover / always / never")]),t._v(" "),n("td",[t._v("hover")])]),t._v(" "),n("tr",[n("td",[t._v("props.subtitle")]),t._v(" "),n("td",[t._v("辅助配置")]),t._v(" "),n("td",[t._v("object")]),t._v(" "),n("td",[t._v("hover / always")]),t._v(" "),n("td",[t._v("hover")])]),t._v(" "),n("tr",[n("td",[t._v("props.pagination")]),t._v(" "),n("td",[t._v("前端模拟分页")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("simulate")]),t._v(" "),n("td",[t._v("--")])])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);