(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1228:function(e,t,o){"use strict";o.r(t);var i=o(388),a={timeField1:{type:"form",resource:{fields:{timeFieldA:{type:"time",label:"时间",props:{placeholder:"请选择时间"}},timeFieldB:{type:"time",label:"带默认值",default:"11:00",props:{placeholder:"请选择时间"}},timeFieldC:{type:"time",label:"纯展示",default:"11:00",ctx:"view"}}},ctx:"edit"}},n=o(400),s=o.n(n),l=o(399),c=o.n(l),d={mixins:[i.a],mounted:function(){var e=s()(a[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,a[this.blockName]),this.init=!0}},r=o(23),m=Object(r.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?o("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),o("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[o("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),o("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[o("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?o("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=m.exports},387:function(e,t,o){"use strict";var i=o(0),a=(o(393),o(392)),n=o.n(a),s=o(390),l=o.n(s),c=o(398),d=o(394),r=o.n(d),m=(o(395),o(396)),f=o.n(m),u=o(397),p=o.n(u);i.default.use(n.a),i.default.use(l.a),console.log("ams init config"),i.default.use(f.a),i.default.use(p.a),"undefined"!=typeof window&&(window.Vue=i.default),i.default.use(c.a,{languages:{javascript:r.a}}),l.a.config({resource:{api:{withCredentials:!1}}})},388:function(e,t,o){"use strict";o(387);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);