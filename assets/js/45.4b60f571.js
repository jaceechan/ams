(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1254:function(e,a,t){"use strict";t.r(a);var l=t(390),i={arrayField1:{type:"form",resource:{fields:{arrayFieldA:{type:"array",label:"数组",field:{type:"text",label:"text"}},arrayFieldB:{type:"array",label:"带默认值",default:["1","2"],field:{type:"text",label:"元素"}},arrayFieldC:{type:"array",label:"纯展示",default:["唯品会","京东"],field:{type:"text",label:"公司",ctx:"view"},ctx:"view"}}},ctx:"edit"},arrayField2:{type:"form",resource:{fields:{arrayFieldA:{type:"array",label:"地址",field:{type:"array",label:"省份",field:{type:"text",label:"市区"}}},arrayFieldB:{type:"array",label:"带默认值",default:[["广州","深圳"],["北京"]],field:{type:"array",label:"省份",field:{type:"text",label:"市区"}}},arrayFieldC:{type:"array",label:"纯展示",default:[["广州","深圳"],["北京"]],field:{type:"array",label:"省份",field:{type:"text",label:"市区",ctx:"view"},ctx:"view"},ctx:"view"}}},ctx:"edit"}},o=t(402),n=t.n(o),r=t(401),s=t.n(r),c={mixins:[l.a],mounted:function(){var e=n()(i[this.blockName]);this.configCode=s()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,i[this.blockName]),this.init=!0}},d=t(23),f=Object(d.a)(c,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?t("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),t("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[t("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[t("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?t("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);a.default=f.exports},389:function(e,a,t){"use strict";var l=t(0),i=(t(395),t(394)),o=t.n(i),n=t(392),r=t.n(n),s=t(400),c=t(396),d=t.n(c),f=(t(397),t(398)),u=t.n(f),y=t(399),p=t.n(y);l.default.use(o.a),l.default.use(r.a),console.log("ams init config"),l.default.use(u.a),l.default.use(p.a),"undefined"!=typeof window&&(window.Vue=l.default),l.default.use(s.a,{languages:{javascript:d.a}}),r.a.config({resource:{api:{withCredentials:!1}}})},390:function(e,a,t){"use strict";t(389);a.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);