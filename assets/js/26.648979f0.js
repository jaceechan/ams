(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1e3:function(e,t,a){"use strict";a.r(t);var s=a(126),n=(a(150),{chartLine:{type:"chart",style:{width:"100%",height:"500px"},data:{title:"折线图表",legend:["邮件营销","联盟广告"],xAxis:["周二","周二","周二","周四","周五","周六","周日"],series1:[120,132,101,134,90,230,210]},options:{BASE:"LINE",series:[{name:"邮件营销",stack:"总量",data:"data.series1"},{name:"联盟广告",stack:"总量",data:[220,182,191,234,290,330,310]}]}},chartBar:{type:"chart",style:{width:"100%",height:"500px"},data:{legend:["邮件营销","联盟广告"],xAxis:["周二","周二","周二","周四","周五","周六","周日"],series1:[120,132,101,134,90,230,210],series2:[220,182,191,234,290,330,310]},options:{BASE:"BAR",series:[{name:"邮件营销",data:"data.series1"},{name:"联盟广告",data:"data.series2"}]}},chartPie:{type:"chart",style:{width:"100%",height:"500px"},data:{legend:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"],xAxis:["周二","周二","周二","周四","周五","周六","周日"],series:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]},options:{BASE:"PIE",series:[{name:"访问来源",type:"pie",radius:["50%","70%"],data:"data.series"}]}},chartFunnel:{type:"chart",style:{width:"100%",height:"500px"},data:{legend:["展现","点击","访问","咨询","订单"],series:[{value:60,name:"访问"},{value:40,name:"咨询"},{value:20,name:"订单"},{value:80,name:"点击"},{value:100,name:"展现"}]},options:{BASE:"FUNNEL",series:[{name:"漏斗图",type:"funnel",data:"data.series"}]}},chartScatter:{type:"chart",style:{width:"100%",height:"500px"},data:{scatterData:[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]]},options:{BASE:"SCATTER",xAxis:{},yAxis:{},series:[{symbolSize:20,data:"data.scatterData",type:"scatter"}]}},chartRadar:{type:"chart",style:{width:"100%",height:"500px"},data:{legend:["预算分配（Allocated Budget）","实际开销（Actual Spending）"],series:[{value:[4300,1e4,28e3,35e3,5e4,19e3],name:"预算分配（Allocated Budget）"},{value:[5e3,14e3,28e3,31e3,42e3,21e3],name:"实际开销（Actual Spending）"}],indicator:[{name:"销售（sales）",max:6500},{name:"管理（Administration）",max:16e3},{name:"信息技术（Information Techology）",max:3e4},{name:"客服（Customer Support）",max:38e3},{name:"研发（Development）",max:52e3},{name:"市场（Marketing）",max:25e3}]},options:{BASE:"RADAR",radar:{indicator:"data.indicator"},series:[{type:"radar",name:"预算 vs 开销（Budget vs spending）",data:"data.series"}]}}}),i=a(138),o=a.n(i),c=a(137),r=a.n(c),l={mixins:[s.a],mounted:function(){var e=o()(n[this.blockName]);this.configCode=r()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,n[this.blockName]),this.init=!0)}},d=a(1),m=Object(d.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?a("ams-block",{attrs:{name:e.blockName}}):e._e(),e._v(" "),a("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[a("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),a("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[a("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?a("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=m.exports},125:function(e,t,a){"use strict";var s=a(0),n=(a(131),a(130)),i=a.n(n),o=a(128),c=a.n(o),r=a(136),l=a(132),d=a.n(l),m=(a(133),a(134)),h=a.n(m),p=a(135),u=a.n(p);s.default.use(i.a),s.default.use(c.a),console.log("ams init config"),s.default.use(h.a),s.default.use(u.a),"undefined"!=typeof window&&(window.Vue=s.default),s.default.use(r.a,{languages:{javascript:d.a}}),c.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,t,a){"use strict";a(125);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}},150:function(e,t,a){"use strict";function s(e,t,a){var s='<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="utf-8">\n    <title>首页</title>\n    <script src="https//h5rsc.vipstatic.com/ams/babel-polyfill/7.4.0/polyfill.min.js"><\/script>\n</head>\n<body>\n    <script>\n        var amsConfigJson = '.concat(a,';\n    <\/script>\n\n    <link rel="stylesheet" href="https://h5rsc.vipstatic.com/ams/element-ui@2.11.1/theme-chalk/index.css" />\n    <script src="https://h5rsc.vipstatic.com/ams/vue@2.6.10.js"><\/script>\n    <script src="https://h5rsc.vipstatic.com/ams/element-ui@2.11.1/index.js"><\/script>\n    <script src="https://unpkg.com/@ams-team/ams/lib/ams.js"><\/script>\n    <script id="ams-config" src="http://h5rsc.vipstatic.com/ams/ams-init@0.1.5.js"><\/script>\n</body>\n</html>');e.download=t,e.href="data:text/plain,".concat(s)}a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return n}));var n="https://www.yournana.club/vipshop/"}}]);