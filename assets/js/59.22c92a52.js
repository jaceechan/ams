(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1249:function(e,i,o){"use strict";o.r(i);var n=o(382),t={originfileField1:{type:"form",resource:{fields:{originfileFieldA:{type:"originfile",label:"文件上传",tip:"不超过500kb",successUrlKey:"url"}}},ctx:"edit"}},s=o(394),a=o.n(s),c=o(393),l=o.n(c),r={mixins:[n.a],mounted:function(){var e=a()(t[this.blockName]);this.configCode=l()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,t[this.blockName]),this.init=!0}},d=o(21),f=Object(d.a)(r,(function(){var e=this,i=e.$createElement,o=e._self._c||i;return o("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?o("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),o("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[o("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),o("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[o("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?o("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);i.default=f.exports},381:function(e,i,o){"use strict";var n=o(0),t=(o(387),o(386)),s=o.n(t),a=o(384),c=o.n(a),l=o(392),r=o(388),d=o.n(r),f=(o(389),o(390)),u=o.n(f),m=o(391),g=o.n(m);n.default.use(s.a),n.default.use(c.a),console.log("ams init config"),n.default.use(u.a),n.default.use(g.a),"undefined"!=typeof window&&(window.Vue=n.default),n.default.use(l.a,{languages:{javascript:d.a}}),c.a.config({resource:{api:{withCredentials:!1}}})},382:function(e,i,o){"use strict";o(381);i.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);