(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1165:function(t,e,n){"use strict";var i=n(12),r=n(4),o=n(223),a=n(35),s=n(7),l=n(31),c=n(520),u=n(60),f=n(2),g=n(30),p=n(85).f,d=n(41).f,h=n(9).f,m=n(487).trim,v=r.Number,b=v.prototype,S="Number"==l(g(b)),w=function(t){var e,n,i,r,o,a,s,l,c=u(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=m(c)).charCodeAt(0))||45===e){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(a=(o=c.slice(2)).length,s=0;s<a;s++)if((l=o.charCodeAt(s))<48||l>r)return NaN;return parseInt(o,i)}return+c};if(o("Number",!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var y,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(S?f((function(){b.valueOf.call(n)})):"Number"!=l(n))?c(new v(w(e)),n,N):w(e)},x=i?p(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;x.length>I;I++)s(v,y=x[I])&&!s(N,y)&&h(N,y,d(v,y));N.prototype=b,b.constructor=N,a(r,"Number",N)}},1296:function(t,e,n){"use strict";n.r(e);var i=n(390),r=(n(1165),n(59),n(431),n(57),n(453),n(227),n(8),n(488),{getSetView:{resources:{getSetView:{api:{prefix:"/test/",create:"create"},fields:{datetime:{label:"时间",type:"datetime",get:function(t){return console.log("get",t),Number(t.slice(5))},set:function(t){return console.log("set",t),"date:"+(t instanceof Date?t.getTime():t)},view:function(t){return console.log("view",t),t.slice(5)/1e3}},testSelect:{type:"select",label:"字符串多选",props:{multiple:!0,options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎"}}},testArraySelect:{type:"select",label:"数组多选",props:{multiple:!0,options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎"}},get:function(t){return console.log("get",t),"string"==typeof t?t.split(","):t},set:function(t){return console.log("set",t),"string"==typeof t?t.split(","):t}}}}},blocks:{editGetSetView:{data:{datetime:"",testSelect:"",testArraySelect:[]},type:"form",resource:"getSetView",ctx:"edit",style:{width:"50%"},events:{init:"initFn",submit:"@alert @create"},actions:{initFn:function(){var t=this;setTimeout((function(){t.data.datetime="date:1546278503030",t.data.testSelect="a,b",t.data.testArraySelect=["a","b"]}),1e3)},alert:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){alert("提交的表单数据是："+JSON.stringify(this.data))}))},operations:{submit:{type:"button",label:"提交"}}},viewGetSetView:{data:{datetime:"date:1546278503030",testSelect:"a,b",testArraySelect:["a","b"]},type:"form",resource:"getSetView",ctx:"view",style:{width:"50%"},events:{submit:"@create"}}}}}),o=n(402),a=n.n(o),s=n(401),l=n.n(s),c={mixins:[i.a],mounted:function(){var t=a()(r[this.blockName]);this.configCode=l()(t,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,r[this.blockName]),this.init=!0}},u=n(23),f=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[t.init?n("ams-block",{staticClass:"demo-card-preview",attrs:{name:t.blockName}}):t._e(),t._v(" "),n("div",{class:"demo-card-config "+(t.showConfig?"open":"")},[n("highlight-code",{attrs:{lang:"javascript"}},[t._v("\n            "+t._s(t.configCode)+"\n        ")])],1),t._v(" "),n("div",{staticClass:"demo-card-config-btn",on:{click:t.toggleDemoCofig}},[n("i",{class:"el-icon-caret-"+(t.showConfig?"top":"bottom")}),t._v("\n         "+t._s(t.showConfig?"隐藏":"显示")+"配置\n        "),t.onlineDemo?n("el-link",{attrs:{href:t.onlineDemo,target:"_blank",type:"success"}},[t._v("在线运行")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=f.exports},389:function(t,e,n){"use strict";var i=n(0),r=(n(395),n(394)),o=n.n(r),a=n(392),s=n.n(a),l=n(400),c=n(396),u=n.n(c),f=(n(397),n(398)),g=n.n(f),p=n(399),d=n.n(p);i.default.use(o.a),i.default.use(s.a),console.log("ams init config"),i.default.use(g.a),i.default.use(d.a),"undefined"!=typeof window&&(window.Vue=i.default),i.default.use(l.a,{languages:{javascript:u.a}}),s.a.config({resource:{api:{withCredentials:!1}}})},390:function(t,e,n){"use strict";n(389);e.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(t){"el-link--inner"!==t.target.className&&(this.showConfig=!this.showConfig)}}}},431:function(t,e,n){var i=n(35),r=Date.prototype,o=r.toString,a=r.getTime;new Date(NaN)+""!="Invalid Date"&&i(r,"toString",(function(){var t=a.call(this);return t==t?o.call(this):"Invalid Date"}))},453:function(t,e,n){"use strict";var i=n(214),r=n(216),o=n(11),a=n(28),s=n(466),l=n(218),c=n(24),u=n(215),f=n(84),g=n(217),p=n(2),d=g.UNSUPPORTED_Y,h=[].push,m=Math.min;i("split",(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(a(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,o);for(var s,l,c,u=[],g=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,d=new RegExp(t.source,g+"g");(s=f.call(d,i))&&!((l=d.lastIndex)>p&&(u.push(i.slice(p,s.index)),s.length>1&&s.index<i.length&&h.apply(u,s.slice(1)),c=s[0].length,p=l,u.length>=o));)d.lastIndex===s.index&&d.lastIndex++;return p===i.length?!c&&d.test("")||u.push(""):u.push(i.slice(p)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,r,n):i.call(String(r),e,n)},function(t,r){var a=n(i,this,t,r,i!==e);if(a.done)return a.value;var f=o(this),g=String(t),p=s(f,RegExp),h=f.unicode,v=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(d?"g":"y"),b=new p(d?"^(?:"+f.source+")":f,v),S=void 0===r?4294967295:r>>>0;if(0===S)return[];if(0===g.length)return null===u(b,g)?[g]:[];for(var w=0,y=0,N=[];y<g.length;){b.lastIndex=d?0:y;var x,I=u(b,d?g.slice(y):g);if(null===I||(x=m(c(b.lastIndex+(d?y:0)),g.length))===w)y=l(g,y,h);else{if(N.push(g.slice(w,y)),N.length===S)return N;for(var _=1;_<=I.length-1;_++)if(N.push(I[_]),N.length===S)return N;y=w=x}}return N.push(g.slice(w)),N}]}),!!p((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),d)},466:function(t,e,n){var i=n(11),r=n(58),o=n(3)("species");t.exports=function(t,e){var n,a=i(t).constructor;return void 0===a||null==(n=i(a)[o])?e:r(n)}},467:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},487:function(t,e,n){var i=n(28),r="["+n(467)+"]",o=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),s=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},488:function(t,e,n){"use strict";var i=n(35),r=n(11),o=n(2),a=n(221),s=RegExp.prototype,l=s.toString,c=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u="toString"!=l.name;(c||u)&&i(RegExp.prototype,"toString",(function(){var t=r(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in s)?a.call(t):n)}),{unsafe:!0})},520:function(t,e,n){var i=n(6),r=n(127);t.exports=function(t,e,n){var o,a;return r&&"function"==typeof(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&r(t,a),t}}}]);