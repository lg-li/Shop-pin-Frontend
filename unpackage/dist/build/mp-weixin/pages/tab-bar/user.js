(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tab-bar/user"],{"20f3":function(t,e,i){"use strict";i.r(e);var s=i("ad67"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);e["default"]=n.a},"2dac":function(t,e,i){},"2de9":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"user"},[i("view",{staticClass:"left"},[i("image",{attrs:{src:t.userInfo.avatarUrl,eventid:"48ddb7b0-0"},on:{tap:t.toSetting}})]),i("view",{staticClass:"right"},[i("view",{staticClass:"username",attrs:{eventid:"48ddb7b0-1"},on:{tap:t.toLogin}},[t._v(t._s(t.userInfo.nickname))]),i("view",{staticClass:"signature",attrs:{eventid:"48ddb7b0-2"},on:{tap:t.toSetting}},[t._v(t._s(null==t.userInfo.email?"点击完善账户设置":t.userInfo.email))])]),i("view",{staticClass:"qr-code",attrs:{eventid:"48ddb7b0-3"},on:{tap:t.toMyQR}},[i("view",{staticClass:"icon pin-icon"},[t._v("share")])])]),t._m(0),i("view",{staticClass:"order"},[i("view",{staticClass:"list"},t._l(t.orderList,function(e,s){return i("view",{key:s,staticClass:"box",attrs:{eventid:"48ddb7b0-4-"+s},on:{tap:function(i){t.toOrderList(e.key)}}},[i("view",{staticClass:"img"},[i("view",{staticClass:"icon pin-icon"},[t._v(t._s(e.icon))])]),i("view",{staticClass:"text"},[t._v(t._s(e.text))])])})),i("view",{staticClass:"balance-info"},[i("view",{staticClass:"left"},[i("view",{staticClass:"box",attrs:{eventid:"48ddb7b0-5"},on:{tap:function(e){t.toCheckIn()}}},[i("view",{staticClass:"num"},[t._v(t._s(t.hasCheckedIn?"已签到":"未签到"))]),i("view",{staticClass:"text"},[t._v("签到赢积分")])]),i("view",{staticClass:"box"},[i("view",{staticClass:"num"},[t._v(t._s(t.userInfo.credit))]),i("view",{staticClass:"text"},[t._v("积分")])]),i("view",{staticClass:"box"},[i("view",{staticClass:"num"},[t._v(t._s(t.userInfo.balance))]),i("view",{staticClass:"text"},[t._v("余额")])])]),i("view",{staticClass:"right"},[i("view",{staticClass:"box",attrs:{eventid:"48ddb7b0-6"},on:{tap:t.toDeposit}},[t._m(1),i("view",{staticClass:"text"},[t._v("充值")])])])])]),i("view",{staticClass:"toolbar"},[i("view",{staticClass:"title"},[i("i",{staticClass:"pin-icon"},[t._v("style")]),t._v("我的工具栏")],1),i("view",{staticClass:"list"},t._l(t.mytoolbarList,function(e,s){return i("view",{key:s,staticClass:"box",attrs:{eventid:"48ddb7b0-7-"+s},on:{tap:function(i){t.toPage(e.url)}}},[i("view",{staticClass:"icon"},[i("i",{staticClass:"pin-icon"},[t._v(t._s(e.icon))])],1),i("view",{staticClass:"text"},[t._v(t._s(e.text))])])}))]),i("view",{staticClass:"place-bottom"})])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"VIP animation-scale-down"},[i("view",{staticClass:"img"},[i("image",{attrs:{src:"../../static/img/VIP.png"}})]),i("view",{staticClass:"title"},[t._v("Pin Premium 黑金会员")]),i("view",{staticClass:"tis"},[t._v("查看 Premium 特权")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"img"},[i("view",{staticClass:"icon pin-icon"},[t._v("monetization_on")])])}];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return n})},acc0:function(t,e,i){"use strict";var s=i("2dac"),n=i.n(s);n.a},ad67:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{isfirst:!0,headerTop:null,statusTop:null,userInfo:{avatarUrl:"",balance:0,createIp:"",createTime:"",credit:"",email:"",gender:1,id:null,lastLoginIp:"",lastLoginTime:"",lastPaswordEditTime:"",nickname:"未登录",phone:""},user:{username:"未登录",avatarUrl:"../../static/img/logo.png",signature:"点击昵称跳转登录/注册页",integral:0,balance:0,envelope:0},orderList:[{key:0,text:"待付款",icon:"payment"},{key:1,text:"待发货",icon:"move_to_inbox"},{key:2,text:"待收货",icon:"local_shipping"},{key:3,text:"待评价",icon:"local_florist"},{key:5,text:"退换货",icon:"swap_vertical_circle"}],mytoolbarList:[{url:"../user/collection/collection",text:"我的收藏",icon:"favorite"},{url:"../user/coupon/coupon",text:"优惠券",icon:"local_play"},{url:"../user/address/address",text:"收货地址",icon:"location_on"},{url:"",text:"账户安全",icon:"settings"},{url:"",text:"签到",icon:"assignment_turned_in"},{url:"",text:"客服",icon:"contact_phone"}],hasCheckedIn:!1}},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){this.statusHeight=0,this.loadMyUserInfo()},onReady:function(){t.setStorage({key:"UserInfo",data:!1,success:function(){},fail:function(t){}})},onShow:function(){},methods:{toMsg:function(){t.navigateTo({url:"../msg/msg"})},toOrderList:function(e){t.navigateTo({url:"../user/order-list/order-list?tbIndex="+e})},toSetting:function(){t.navigateTo({url:"../user/setting/setting"})},toMyQR:function(){t.navigateTo({url:"../user/my-qr-code/my-qr-code"})},toLogin:function(){t.showToast({title:"请登录",icon:"none"}),t.navigateTo({url:"../login/sign-in"}),this.isfirst=!1},isLogin:function(){var e=t.getStorageSync("UserInfo");return!!e},toDeposit:function(){t.navigateTo({url:"../user/deposit/deposit"})},toPage:function(e){console.log("url: "+e),t.navigateTo({url:e})},toCheckIn:function(){t.navigateTo({url:"../user/activity/check-in"})},loadMyUserInfo:function(){var e=this;this.$pin.request("GET","/commons/user/info",null,function(t){e.userInfo=t.data.user,e.hasCheckedIn=t.data.hasCheckedIn},function(e){console.log(e),t.showToast({icon:"none",title:"加载用户信息时出错"})})}}};e.default=i}).call(this,i("543d")["default"])},afb2:function(t,e,i){"use strict";i.r(e);var s=i("2de9"),n=i("20f3");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("acc0");var o=i("2877"),c=Object(o["a"])(n["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},eeae:function(t,e,i){"use strict";i("6a7a");var s=a(i("b0ce")),n=a(i("afb2"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))}},[["eeae","common/runtime","common/vendor"]]]);