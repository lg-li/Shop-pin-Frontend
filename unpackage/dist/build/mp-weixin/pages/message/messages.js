(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/messages"],{"1e58":function(e,t,i){"use strict";i.r(t);var a=i("4285"),s=i.n(a);for(var c in a)"default"!==c&&function(e){i.d(t,e,function(){return a[e]})}(c);t["default"]=s.a},"35e1":function(e,t,i){"use strict";i.r(t);var a=i("fde3"),s=i("1e58");for(var c in s)"default"!==c&&function(e){i.d(t,e,function(){return s[e]})}(c);i("be03");var m=i("2877"),u=Object(m["a"])(s["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports},"405a":function(e,t,i){"use strict";i("6a7a");var a=c(i("b0ce")),s=c(i("35e1"));function c(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(s.default))},4285:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{chatList:[{uid:1,username:"鲜果蔬专营店",face:"/static/img/im/face/face_1.jpg",time:"13:08",msg:"亲，20点前下单都是当天送达的",tisNum:1},{uid:2,username:"官店大欺客旗舰店",face:"/static/img/im/face/face_2.jpg",time:"13:05",msg:"问那么多干什么？不想买就滚~",tisNum:0},{uid:3,username:"妙不可言",face:"/static/img/im/face/face_3.jpg",time:"12:15",msg:"推荐一个商品呗？",tisNum:0},{uid:4,username:"茶叶专卖",face:"/static/img/im/face/face_4.jpg",time:"12:11",msg:"现在卖的都是未过青的茶哦",tisNum:0},{uid:5,username:"likeKiss客服",face:"/static/img/im/face/face_5.jpg",time:"12:10",msg:"你好，发福建快递多久送到的？",tisNum:0},{uid:6,username:"白开水",face:"/static/img/im/face/face_6.jpg",time:"12:10",msg:"在吗？",tisNum:0},{uid:7,username:"衣帽间的叹息",face:"/static/img/im/face/face_7.jpg",time:"11:56",msg:"新品上市，欢迎选购",tisNum:0},{uid:8,username:"景萧疏",face:"/static/img/im/face/face_8.jpg",time:"11:56",msg:"商品七天无理由退换的",tisNum:0},{uid:9,username:"文宁先生",face:"/static/img/im/face/face_9.jpg",time:"12:15",msg:"星期天再发货的",tisNum:0},{uid:10,username:"高端Chieh",face:"/static/img/im/face/face_10.jpg",time:"12:36",msg:"建议你直接先测量好尺码在选购的。",tisNum:0},{uid:11,username:"mode旗舰店",face:"/static/img/im/face/face_11.jpg",time:"12:40",msg:"新品5折，还有大量优惠券。",tisNum:0},{uid:12,username:"敏萘客服",face:"/static/img/im/face/face_12.jpg",time:"12:36",msg:"还没有用，等我明天早上试一下",tisNum:0},{uid:13,username:"春天里的花",face:"/static/img/im/face/face_13.jpg",time:"12:36",msg:"适用于成年人的，小孩不适用的",tisNum:0},{uid:14,username:"电脑外设专业户",face:"/static/img/im/face/face_13.jpg",time:"12:36",msg:"把上面的螺丝拆下来，把铁片撬开就能看见了",tisNum:0},{uid:15,username:"至善汽车用品",face:"/static/img/im/face/face_15.jpg",time:"12:36",msg:"这个产品是原车配件，完美装上的",tisNum:0}]}},onPullDownRefresh:function(){setTimeout(function(){e.stopPullDownRefresh()},1e3)},onLoad:function(){},methods:{toChat:function(t){e.navigateTo({url:"chat/chat?name="+t.username})}}};t.default=i}).call(this,i("543d")["default"])},be03:function(e,t,i){"use strict";var a=i("f601"),s=i.n(a);s.a},f601:function(e,t,i){},fde3:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",[i("view",{staticClass:"chat-list"},e._l(e.chatList,function(t,a){return i("view",{key:a,staticClass:"chat"},[i("view",{staticClass:"row",attrs:{eventid:"1f00527d-0-"+a},on:{tap:function(i){e.toChat(t)}}},[i("view",{staticClass:"left"},[i("image",{attrs:{src:t.face}})]),i("view",{staticClass:"right"},[i("view",{staticClass:"top"},[i("view",{staticClass:"username"},[e._v(e._s(t.username))]),i("view",{staticClass:"time"},[e._v(e._s(t.time))])]),i("view",{staticClass:"bottom"},[i("view",{staticClass:"msg"},[e._v(e._s(t.msg))]),t.tisNum>0?i("view",{staticClass:"tis"},[e._v(e._s(t.tisNum))]):e._e()])])])])}))])},s=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return s})}},[["405a","common/runtime","common/vendor"]]]);