(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/sign-in"],{"0949":function(i,t,e){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{user:"",password:"",isShowOauth:!1,showProvider:{weixin:!1,qq:!1,sinaweibo:!1,xiaomi:!1},isWechatMiniProgram:!1,recommendWechatLogin:!1}},onShow:function(){},onLoad:function(){this.isShowOauth=!0,this.isWechatMiniProgram=!0,this.recommendWechatLogin=!0,this.wechatLogin(),this.getProvider()},methods:{onGetUserInfo:function(i){console.log(i)},oauthLogin:function(t){var e=this;i.showLoading(),i.login({provider:t,success:function(n){console.log("success: "+JSON.stringify(n));var o=n.code;i.getUserInfo({provider:t,success:function(i){console.log("用户信息："+JSON.stringify(i.userInfo));var t=i.userInfo;t.code=o,e.$pin.request("POST","/sign-in/",t,function(i){},function(i){})}})},fail:function(i){console.log("fail: "+JSON.stringify(i))}})},getProvider:function(){var t=this;i.getProvider({service:"oauth",success:function(i){for(var e=i.provider.length,n=0;n<e;n++)t.showProvider[i.provider[n]]=!0;0==i.provider.length&&(t.isShowOauth=!1)}})},toPage:function(t){i.hideKeyboard(),i.navigateTo({url:t})},loginSuccess:function(){i.showToast({title:"登录成功"});var t=getCurrentPages();console.log(t),t.length>1?i.navigateBack(-1):i.switchTab({url:"/pages/tab-bar/home"})},loginFailed:function(){},wechatLogin:function(){console.log("LOGINING WECHAT UNI"),this.$pin.loginFromWechat(this.loginSuccess,this.loginFailed),console.log("LOGINING WECHAT")},doLogin:function(){if(i.hideKeyboard(),!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.user)&&!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.user))return i.showToast({title:"请填写正确手机号或邮箱地址",icon:"none"}),!1;i.showLoading({title:"登录中..."});var t=this;this.$pin.request("POST","/sign-in/default",{user:this.user,password:this.password},function(e){i.hideLoading(),console.log(e),e.code==t.$pin.code.invalidCredential?i.showToast({title:"登录凭据错误，请重试。",icon:"none"}):e.code==t.$pin.code.success&&(i.setStorageSync("pin-token",e.data),t.loginSuccess())},function(t){i.hideLoading()})}}};t.default=e}).call(this,e("543d")["default"])},"4ee1":function(i,t,e){"use strict";var n=e("9709"),o=e.n(n);o.a},"5a84":function(i,t,e){"use strict";e("6a7a");var n=s(e("b0ce")),o=s(e("6e25"));function s(i){return i&&i.__esModule?i:{default:i}}Page((0,n.default)(o.default))},"6e25":function(i,t,e){"use strict";e.r(t);var n=e("7554"),o=e("b57e");for(var s in o)"default"!==s&&function(i){e.d(t,i,function(){return o[i]})}(s);e("4ee1");var a=e("2877"),r=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports},7554:function(i,t,e){"use strict";var n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("view",[i._m(0),i.recommendWechatLogin?e("view",{staticClass:"form"},[e("button",{staticClass:"pin-button pin-bg-accent",attrs:{"open-type":"getUserInfo",eventid:"0f9cd1f4-5"},on:{getuserinfo:i.onGetUserInfo}},[e("i",{staticClass:"icon weixin"}),i._v("使用微信授权登录")],1),i.isWechatMiniProgram?e("view",{staticClass:"pin-margin pin-text-right",attrs:{eventid:"0f9cd1f4-6"},on:{tap:function(t){i.recommendWechatLogin=!1}}},[e("i",{staticClass:"pin-icon"},[i._v("info")]),i._v("您正在使用微信小程序，推荐使用微信登录。\n\t\t\t您亦可选择"),e("i",{staticClass:"pin-icon text-xxxl"},[i._v("person")]),i._v("使用 Pin 帐号密码登录")],1):i._e()],1):e("view",{staticClass:"form"},[e("view",{staticClass:"username pin-shadow"},[e("input",{directives:[{name:"model",rawName:"v-model",value:i.user,expression:"user"}],attrs:{placeholder:"手机号或邮箱...",eventid:"0f9cd1f4-0"},domProps:{value:i.user},on:{input:function(t){t.target.composing||(i.user=t.target.value)}}})]),e("view",{staticClass:"password"},[e("input",{directives:[{name:"model",rawName:"v-model",value:i.password,expression:"password"}],attrs:{placeholder:"密码...",password:"true",eventid:"0f9cd1f4-1"},domProps:{value:i.password},on:{input:function(t){t.target.composing||(i.password=t.target.value)}}})]),e("view",{staticClass:"pin-button pin-bg-accent",attrs:{eventid:"0f9cd1f4-2"},on:{tap:i.doLogin}},[e("i",{staticClass:"pin-icon"},[i._v("done")]),i._v("登 录")],1),e("view",{staticClass:"res"},[e("view",{attrs:{eventid:"0f9cd1f4-3"},on:{tap:function(t){i.toPage("sign-up")}}},[e("i",{staticClass:"pin-icon"},[i._v("person_add")]),i._v("用户注册")],1),e("view",{attrs:{eventid:"0f9cd1f4-4"},on:{tap:function(t){i.toPage("reset-password")}}},[e("i",{staticClass:"pin-icon"},[i._v("help")]),i._v("忘记密码")],1)]),i.isWechatMiniProgram?e("view",{staticClass:"pin-text-center"},[e("i",{staticClass:"pin-icon"},[i._v("info")]),i._v("您正在使用微信小程序，推荐使用微信登录。")],1):i._e()]),i.isShowOauth?e("view",{staticClass:"oauth pin-animation-slide-up"},[e("view",{staticClass:"text"},[i._v("— 第三方快速登录 —")]),e("view",{staticClass:"list"},[i.showProvider.weixin&&!i.isWechatMiniProgram?e("view",{staticClass:"icon weixin",attrs:{eventid:"0f9cd1f4-7"},on:{tap:function(t){i.oauthLogin("weixin")}}}):i._e(),i.showProvider.weixin&&i.isWechatMiniProgram?e("button",{staticClass:"icon weixin",attrs:{"open-type":"getUserInfo",eventid:"0f9cd1f4-8"},on:{getuserinfo:i.onGetUserInfo}}):i._e(),i.showProvider.qq?e("view",{staticClass:"icon qq",attrs:{eventid:"0f9cd1f4-9"},on:{tap:function(t){i.oauthLogin("qq")}}}):i._e(),i.showProvider.sinaweibo?e("view",{staticClass:"icon sinaweibo",attrs:{eventid:"0f9cd1f4-10"},on:{tap:function(t){i.oauthLogin("sinaweibo")}}}):i._e(),i.showProvider.xiaomi?e("view",{staticClass:"icon xiaomi",attrs:{eventid:"0f9cd1f4-11"},on:{tap:function(t){i.oauthLogin("xiaomi")}}}):i._e()],1)]):i._e()])},o=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("view",{staticClass:"logo"},[e("view",{staticClass:"img"},[e("image",{attrs:{mode:"widthFix",src:"../../static/img/logo.png"}})])])}];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return o})},9709:function(i,t,e){},b57e:function(i,t,e){"use strict";e.r(t);var n=e("0949"),o=e.n(n);for(var s in n)"default"!==s&&function(i){e.d(t,i,function(){return n[i]})}(s);t["default"]=o.a}},[["5a84","common/runtime","common/vendor"]]]);