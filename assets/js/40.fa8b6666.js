(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1268:function(e,o,t){"use strict";t.r(o);var n=t(390),s={popover1Block:{type:"popover",props:{title:"标题1"},slots:{reference:"hover激活",content:"弹出框内容"}},popover2Block:{type:"popover",props:{title:"标题2",trigger:"click"},slots:{content:'这是一段<span style="color: red">内容</span>,这是一段内容,这是一段内容,这是一段内容。',reference:"click激活"}},popover3Block:{type:"popover",props:{title:"标题2"},slots:{content:'这是一段<span style="color: red">内容</span>,这是一段内容,这是一段内容,这是一段内容。',reference:'字段说明<i class="el-icon-question"></i>'}},popover4Block:{type:"popover",slots:{content:'这是一段<span style="color: red">内容</span>,这是一段内容,这是一段内容,这是一段内容。',reference:"hover激活"},blocks:{popoverList:{slot:"content",type:"card",style:{width:"600px",margin:"20px auto"},options:{headerTitle:"卡片标题"},blocks:{emptyCardText:{type:"component",options:{is:"div",text:"我是自定义内容！我是自定义内容！我是自定义内容"}}}}}}},i=t(402),a=t.n(i),c=t(401),l=t.n(c),r={mixins:[n.a],mounted:function(){var e=a()(s[this.blockName]);this.configCode=l()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,s[this.blockName]),this.init=!0}},p=t(23),d=Object(p.a)(r,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?t("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),t("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[t("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[t("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?t("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);o.default=d.exports},389:function(e,o,t){"use strict";var n=t(0),s=(t(395),t(394)),i=t.n(s),a=t(392),c=t.n(a),l=t(400),r=t(396),p=t.n(r),d=(t(397),t(398)),f=t.n(d),u=t(399),m=t.n(u);n.default.use(i.a),n.default.use(c.a),console.log("ams init config"),n.default.use(f.a),n.default.use(m.a),"undefined"!=typeof window&&(window.Vue=n.default),n.default.use(l.a,{languages:{javascript:p.a}}),c.a.config({resource:{api:{withCredentials:!1}}})},390:function(e,o,t){"use strict";t(389);o.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);