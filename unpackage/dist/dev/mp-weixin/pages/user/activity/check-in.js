(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user/activity/check-in"],{

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/main.js?{\"page\":\"pages%2Fuser%2Factivity%2Fcheck-in\"}":
/*!***********************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/main.js?{"page":"pages%2Fuser%2Factivity%2Fcheck-in"} ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _checkIn = _interopRequireDefault(__webpack_require__(/*! ./pages/user/activity/check-in.vue */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_checkIn.default));

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue":
/*!**************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_in_vue_vue_type_template_id_5393e1c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-in.vue?vue&type=template&id=5393e1c2& */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue?vue&type=template&id=5393e1c2&");
/* harmony import */ var _check_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-in.vue?vue&type=script&lang=js& */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _check_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _check_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _check_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _check_in_vue_vue_type_template_id_5393e1c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _check_in_vue_vue_type_template_id_5393e1c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_check_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./check-in.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue?vue&type=script&lang=js&");
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_check_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_check_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_check_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_check_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_check_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue?vue&type=template&id=5393e1c2&":
/*!*********************************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue?vue&type=template&id=5393e1c2& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_check_in_vue_vue_type_template_id_5393e1c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./check-in.vue?vue&type=template&id=5393e1c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue?vue&type=template&id=5393e1c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_check_in_vue_vue_type_template_id_5393e1c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_check_in_vue_vue_type_template_id_5393e1c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
















































var _fullPageEmptyState = _interopRequireDefault(__webpack_require__(/*! ../../../components/full-page-empty-state.vue */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/components/full-page-empty-state.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  components: {
    "full-page-empty-state": _fullPageEmptyState.default },

  data: function data() {
    return {
      creditChangeTypes: {
        0: {
          text: "签到获得",
          icon: "assignment_turned_in" },

        1: {
          text: "购买商品奖励",
          icon: "add_shopping_cart" },

        2: {
          text: "购买时抵扣订单金额",
          icon: "redeem" } },


      creditHistory: [],
      credit: 0,
      totalCheckInDays: 0,
      continuousCheckInDays: 0 };

  },
  onShow: function onShow() {
    this.loadMyCreditsRecord();
  },
  methods: {
    doCheckIn: function doCheckIn() {
      var that = this;
      this.$pin.request('GET', '/commons/user/check-in', null,
      function (successData) {
        if (successData.code == that.$pin.code.success) {
          that.loadMyCreditsRecord();
        } else {
          uni.showToast({
            icon: 'none',
            title: successData.message });

        }
      },
      function (failData) {
        uni.showToast({
          icon: 'none',
          title: '签到失败，请重试' });

      });
    },
    loadMyCreditsRecord: function loadMyCreditsRecord() {
      var that = this;
      this.$pin.request('GET', '/commons/user/credit-record', null,
      function (successData) {
        if (successData.code == that.$pin.code.success) {
          for (var i = 0; i < successData.data.creditHistory.length; i++) {
            successData.data.creditHistory[i].createTime = that.$pin.getFriendlyTimeText(successData.data.creditHistory[i].
            createTime);
          }
          that.creditHistory = successData.data.creditHistory;
          that.credit = successData.data.credit;
          that.totalCheckInDays = successData.data.totalCheckInDays;
          that.continuousCheckInDays = successData.data.continuousCheckInDays;
        } else {
          uni.showToast({
            icon: 'none',
            title: '加载签到信息失败' });

        }
      },
      function (failData) {
        uni.showToast({
          icon: 'none',
          title: '加载签到信息失败，请重试' });

      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue?vue&type=template&id=5393e1c2&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/activity/check-in.vue?vue&type=template&id=5393e1c2& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", { staticClass: "pin-card pin-padding" }, [
      _c(
        "view",
        { staticClass: "pin-card-title" },
        [
          _c("i", { staticClass: "pin-icon" }, [
            _vm._v("assignment_turned_in")
          ]),
          _vm._v("每日签到")
        ],
        1
      ),
      _c("view", { staticClass: "pin-flex" }, [
        _c("view", { staticClass: "pin-flex-sub-50 pin-text-center" }, [
          _c("view", { staticClass: "pin-primary pin-text-xxxl" }, [
            _vm._v(_vm._s(_vm.credit))
          ]),
          _c("view", { staticClass: "pin-text-md" }, [_vm._v("我的积分")])
        ]),
        _c("view", { staticClass: "pin-flex-sub-50 pin-text-center" }, [
          _c("view", { staticClass: "pin-primary" }, [
            _c("text", { staticClass: "pin-text-xxxl" }, [
              _vm._v(_vm._s(_vm.continuousCheckInDays))
            ]),
            _c("text", { staticClass: "pin-text-xl" }, [_vm._v("天")])
          ]),
          _c("view", { staticClass: "pin-text-md" }, [_vm._v("连续签到")])
        ])
      ]),
      _c("view", { staticClass: "pin-margin" }, [
        _c(
          "view",
          {
            staticClass: "pin-button pin-bg-primary",
            attrs: { eventid: "933569a2-0" },
            on: {
              click: function($event) {
                _vm.doCheckIn()
              }
            }
          },
          [
            _c("i", { staticClass: "pin-icon" }, [_vm._v("check")]),
            _vm._v("签到")
          ],
          1
        )
      ])
    ]),
    _c(
      "view",
      { staticClass: "pin-card pin-padding" },
      [
        _c(
          "view",
          { staticClass: "pin-card-title" },
          [
            _c("i", { staticClass: "pin-icon" }, [_vm._v("edit")]),
            _vm._v("我的积分动账记录")
          ],
          1
        ),
        _vm.creditHistory.length == 0
          ? _c("full-page-empty-state", {
              attrs: {
                title: "没有积分记录",
                description: "快签到获取积分吧",
                icon: "card_giftcard",
                radius: true,
                mpcomid: "933569a2-0"
              }
            })
          : _vm._e(),
        _vm._l(_vm.creditHistory, function(record, index0) {
          return _c("view", { key: record, staticClass: "pin-list-item" }, [
            _c(
              "view",
              { staticClass: "list-left" },
              [
                _c("i", { staticClass: "pin-icon" }, [
                  _vm._v(_vm._s(_vm.creditChangeTypes[record.type].icon))
                ])
              ],
              1
            ),
            _c("view", { staticClass: "list-right" }, [
              _c("view", { staticClass: "list-header" }, [
                _c(
                  "view",
                  { staticClass: "list-title pin-text-xl pin-primary" },
                  [
                    _vm._v(
                      _vm._s(record.valueChange > 0 ? "+" : "") +
                        _vm._s(record.valueChange)
                    )
                  ]
                ),
                _c(
                  "view",
                  { staticClass: "list-sub-title text-md pin-accent" },
                  [_vm._v(_vm._s(record.createTime))]
                )
              ]),
              _c("view", { staticClass: "list-detail" }, [
                _vm._v(
                  "来自: " + _vm._s(_vm.creditChangeTypes[record.type].text)
                )
              ])
            ])
          ])
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/main.js?{\"page\":\"pages%2Fuser%2Factivity%2Fcheck-in\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/user/activity/check-in.js.map