(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subpages-feedinfo-feedinfo"],{"1fcb":function(e,t,n){var i=n("47e7");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("7148d9f0",i,!0,{sourceMap:!1,shadowMode:!1})},"2e92":function(e,t,n){"use strict";n.r(t);var i=n("e811"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"45f8":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));try{i={uAvatar:n("89c1").default,comment:n("a8f3").default}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.getRequestOK?n("v-uni-view",[n("v-uni-view",{staticClass:"feed-user"},[n("u-avatar",{staticClass:"avatar",attrs:{size:"60",src:e.feedInfo.avatar}}),n("v-uni-view",{staticClass:"info"},[n("v-uni-text",[e._v(e._s(e.feedInfo.name))])],1)],1),n("v-uni-view",{staticClass:"feed-info"},[e.feedInfo.feed_content?n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.feedInfo.feed_content))]):e._e(),e._l(e.feedInfo.images,(function(t,i){return n("v-uni-image",{key:i,staticClass:"feed-imgs",attrs:{mode:"widthFix",src:t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage(i)}}})})),n("v-uni-view",{staticClass:"other"},[n("v-uni-text",[e._v(e._s(e._f("timeFormate")(e.feedInfo.created_at))+" 发布")]),n("v-uni-text",[e._v(e._s(e.feedInfo.feed_view_count)+" 阅读 "+e._s(e.feedInfo.like_count)+" 点赞")])],1)],2),n("v-uni-view",{staticClass:"line"}),n("comment",{attrs:{oneInfo:e.feedInfo,type:"feed"}})],1):e._e()},o=[]},"47e7":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.feed-user[data-v-38d214ee]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;margin:%?20?% 0 0 %?25?%}.feed-user .info[data-v-38d214ee]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:left;-webkit-align-items:left;align-items:left;margin-left:%?20?%;font-size:%?24?%;font-weight:bolder;color:#1f2046}.feed-info[data-v-38d214ee]{width:%?700?%;margin-top:%?20?%;margin-left:%?25?%;text-align:center;padding-bottom:%?10?%}.feed-info .title[data-v-38d214ee]{font-size:%?32?%;margin-bottom:%?30?%;text-align:left;line-height:%?52?%;color:#666}.feed-info .feed-imgs[data-v-38d214ee]{margin:%?5?% 0;width:100%}.feed-info .other[data-v-38d214ee]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;padding:%?40?% 0 %?20?%;font-size:%?24?%;color:#888}.feed-info .other .micon[data-v-38d214ee]{padding:%?10?% %?20?%}.line[data-v-38d214ee]{height:%?30?%;width:%?750?%;background-color:#f3f3f3}',""]),e.exports=t},"584f":function(e,t,n){"use strict";n.r(t);var i=n("45f8"),a=n("2e92");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("c336");var r,f=n("f0c5"),s=Object(f["a"])(a["default"],i["b"],i["c"],!1,null,"38d214ee",null,!1,i["a"],r);t["default"]=s.exports},c336:function(e,t,n){"use strict";var i=n("1fcb"),a=n.n(i);a.a},e811:function(e,t,n){"use strict";var i=n("4ea4");n("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("5530"));n("96cf");var o=i(n("1da1")),r=i(n("5011")),f=i(n("a8f3")),s={data:function(){return{getRequestOK:!1,feedInfo:{}}},components:{comment:f.default},onLoad:function(e){var t=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$u.api.getFeedInfo(e);case 2:i=n.sent,o=i.data.images.map((function(e){return t.BaseFileURL+e.file})),t.feedInfo=(0,a.default)((0,a.default)({},i.data),{},{name:i.data.user.name,avatar:i.data.user.avatar?i.data.user.avatar.url:"/static/nopic.png",images:o}),t.getRequestOK=!0;case 6:case"end":return n.stop()}}),n)})))()},filters:{timeFormate:function(e){var t=new Date(e),n=t.getTime(),i=(0,r.default)(n,"yyyy年mm月dd日");return i}},methods:{previewImage:function(e){uni.previewImage({current:e,urls:this.feedInfo.images})}}};t.default=s}}]);