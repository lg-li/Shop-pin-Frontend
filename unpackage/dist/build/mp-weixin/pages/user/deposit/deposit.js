(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/deposit/deposit"],{"19fdc":function(t,e,i){},"73e2":function(t,e,i){"use strict";i.r(e);var a=i("7ce5"),s=i("a1de");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("968a");var o=i("2877"),c=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"7ce5":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[t._m(0),i("view",{staticClass:"block"},[i("view",{staticClass:"title"},[t._v("充值金额")]),i("view",{staticClass:"content"},[i("view",{staticClass:"amount"},[i("view",{staticClass:"list"},t._l(t.amountList,function(e,a){return i("view",{key:a,staticClass:"box pin-shadow",class:{on:e==t.inputAmount},attrs:{eventid:"5d013992-0-"+a},on:{tap:function(i){t.select(e)}}},[t._v(t._s(e)+"元")])})),i("view",{staticClass:"num"},[i("view",{staticClass:"text"},[t._v("自定义充值金额")]),i("view",{staticClass:"input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputAmount,expression:"inputAmount"}],attrs:{type:"number",eventid:"5d013992-1"},domProps:{value:t.inputAmount},on:{input:function(e){e.target.composing||(t.inputAmount=e.target.value)}}})])])])])]),i("view",{staticClass:"block"},[i("view",{staticClass:"title"},[t._v("选择支付方式")]),i("view",{staticClass:"content"},[i("view",{staticClass:"pay-list"},[i("view",{staticClass:"row",attrs:{eventid:"5d013992-2"},on:{tap:function(e){t.paytype="alipay"}}},[t._m(1),i("view",{staticClass:"center"},[t._v("支付宝支付")]),i("view",{staticClass:"right"},[i("radio",{attrs:{checked:"alipay"==t.paytype,color:"$pin-color-primary"}})],1)]),i("view",{staticClass:"row",attrs:{eventid:"5d013992-3"},on:{tap:function(e){t.paytype="wxpay"}}},[t._m(2),i("view",{staticClass:"center"},[t._v("微信支付")]),i("view",{staticClass:"right"},[i("radio",{attrs:{checked:"wxpay"==t.paytype,color:"$pin-color-primary"}})],1)])])])]),i("view",{staticClass:"pay"},[i("view",{staticClass:"pin-button lg margin",attrs:{eventid:"5d013992-4"},on:{tap:t.doDeposit}},[t._v("立即充值")]),t._m(3)])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"block pin-bg-primary"},[i("view",{staticClass:"title"},[t._v("我的账户")]),i("view",{staticClass:"content"},[i("view",{staticClass:"my"},[t._v("￥ 0")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"left"},[i("image",{attrs:{src:"/static/img/alipay.png"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"left"},[i("image",{attrs:{src:"/static/img/wxpay.png"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"tis"},[t._v("点击立即充值，即代表您同意"),i("view",{staticClass:"terms"},[t._v("《条款协议》")])])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"968a":function(t,e,i){"use strict";var a=i("19fdc"),s=i.n(a);s.a},a1de:function(t,e,i){"use strict";i.r(e);var a=i("f36b"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},c2d7:function(t,e,i){"use strict";i("6a7a");var a=n(i("b0ce")),s=n(i("73e2"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},f36b:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{inputAmount:"",amountList:[10,50,100],paytype:"alipay"}},methods:{select:function(t){this.inputAmount=t},doDeposit:function(){var e=this;"NaN"!=parseFloat(this.inputAmount).toString()?this.inputAmount<=0?t.showToast({title:"请输入大于0的金额",icon:"none"}):parseFloat(this.inputAmount).toFixed(2)==parseFloat(this.inputAmount)?(t.showLoading({title:"支付中..."}),setTimeout(function(){t.hideLoading(),t.showToast({title:"支付成功"}),setTimeout(function(){t.redirectTo({url:"../../pay/success/success?amount="+e.inputAmount})},300)},700)):t.showToast({title:"最多只能输入两位小数哦~",icon:"none"}):t.showToast({title:"请输入正确金额",icon:"none"})}},onLoad:function(){}};e.default=i}).call(this,i("543d")["default"])}},[["c2d7","common/runtime","common/vendor"]]]);