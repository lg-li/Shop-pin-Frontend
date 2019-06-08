(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user/order-list/order-list"],{

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/main.js?{\"page\":\"pages%2Fuser%2Forder-list%2Forder-list\"}":
/*!***************************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/main.js?{"page":"pages%2Fuser%2Forder-list%2Forder-list"} ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _orderList = _interopRequireDefault(__webpack_require__(/*! ./pages/user/order-list/order-list.vue */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_orderList.default));

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue":
/*!******************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_list_vue_vue_type_template_id_b5d1b738___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-list.vue?vue&type=template&id=b5d1b738& */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=template&id=b5d1b738&");
/* harmony import */ var _order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-list.vue?vue&type=script&lang=js& */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _order_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-list.vue?vue&type=style&index=0&lang=scss& */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_list_vue_vue_type_template_id_b5d1b738___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_list_vue_vue_type_template_id_b5d1b738___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./order-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=script&lang=js&");
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./order-list.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=template&id=b5d1b738&":
/*!*************************************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=template&id=b5d1b738& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_template_id_b5d1b738___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./order-list.vue?vue&type=template&id=b5d1b738& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=template&id=b5d1b738&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_template_id_b5d1b738___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_template_id_b5d1b738___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






































































var _fullPageEmptyState = _interopRequireDefault(__webpack_require__(/*! ../../../components/full-page-empty-state.vue */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/components/full-page-empty-state.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
var STATUS_NOT_PAID = 0;
var STATUS_REFUND_CODE_LIMIT = 5;var _default =
{
  components: {
    "full-page-empty-state": _fullPageEmptyState.default },

  data: function data() {var _orderIndividualStatu;
    return {
      headerPosition: "fixed",
      headerTop: "0px",
      typeText: {
        unpaid: '等待付款',
        back: '等待商家发货',
        unreceived: '商家已发货',
        received: '等待用户评价',
        completed: '交易已完成',
        refunds: '商品退货处理中' },

      orderInidividualMapByStatus: {},
      orderIndividualStatusNameMap: (_orderIndividualStatu = {}, _defineProperty(_orderIndividualStatu,
      STATUS_NOT_PAID, '待付款'), _defineProperty(_orderIndividualStatu,
      1, '待发货'), _defineProperty(_orderIndividualStatu,
      2, '已发货'), _defineProperty(_orderIndividualStatu,
      3, '待评价'), _defineProperty(_orderIndividualStatu,
      4, '已完成'), _defineProperty(_orderIndividualStatu,
      5, '售后订单'), _orderIndividualStatu),

      orderType: ['全部', '待付款', '待发货', '待收货', '待评价', '退换货'],
      shownList: [],
      tabBarStatus: 0,
      orderIndividualList: [] };

  },
  onLoad: function onLoad(option) {
    //option为object类型，会序列化上个页面传递的参数
    console.log("option: " + JSON.stringify(option));
    var tbIndex = parseInt(option.tbIndex);
    this.showType(tbIndex);
    //兼容H5下排序栏位置









    this.loadMyRecentOrders();
  },
  onPageScroll: function onPageScroll(e) {
    return;
    //兼容iOS端下拉时顶部漂移
    this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
  },
  methods: {
    showType: function showType(statusKey) {
      this.tabBarStatus = statusKey;
      this.shownList = this.orderInidividualMapByStatus[statusKey];
    },
    parseOrderIndividuals: function parseOrderIndividuals(orderIndividualList) {
      for (var i = 0; i < orderIndividualList.length; i++) {
        var currentOrderIndividual = orderIndividualList[i];
        var status = currentOrderIndividual.status + 1; // 重要 加一为未付款状态留出位置
        if (this.orderInidividualMapByStatus[status] == null) {
          this.orderInidividualMapByStatus[status] = [];
        }
        if (currentOrderIndividual.paid == false) {
          // 单独处理未支付订单
          if (this.orderInidividualMapByStatus[STATUS_NOT_PAID] == null) {
            this.orderInidividualMapByStatus[STATUS_NOT_PAID] = [];
          }
          this.orderInidividualMapByStatus[STATUS_NOT_PAID].push(currentOrderIndividual);
        } else if (currentOrderIndividual.status >= STATUS_REFUND_CODE_LIMIT) {
          // 售后订单
          this.orderInidividualMapByStatus[STATUS_REFUND_CODE_LIMIT].push(currentOrderIndividual);
        } else {
          // 其它状态下的常规业务流订单
          this.orderInidividualMapByStatus[status].push(currentOrderIndividual);
        }
      }
    },
    loadMyRecentOrders: function loadMyRecentOrders() {
      uni.showLoading();
      var that = this;
      this.$pin.request('GET', '/commons/order/order-individual/recent', null,
      function (successData) {
        that.orderIndividualList = successData.data.orderIndividuals;
        that.parseOrderIndividuals(successData.data.orderIndividuals);
        uni.hideLoading();
      },
      function (failData) {
        uni.hideLoading();
        uni.showToast({
          icon: 'none',
          title: '获取订单信息失败' });

      });
    },
    toPayment: function toPayment(row) {
      //本地模拟订单提交UI效果
      uni.showLoading({
        title: '正在获取订单...' });

      var paymentOrder = [];
      paymentOrder.push(row);
      setTimeout(function () {
        uni.setStorage({
          key: 'paymentOrder',
          data: paymentOrder,
          success: function success() {
            uni.hideLoading();
            uni.navigateTo({
              url: '../../pay/payment/payment?amount=' + row.payment });

          } });

      }, 500);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=template&id=b5d1b738&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/user/order-list/order-list.vue?vue&type=template&id=b5d1b738& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "view",
      {
        staticClass: "top-tab-bar",
        style: { position: _vm.headerPosition, top: _vm.headerTop }
      },
      _vm._l(_vm.orderIndividualStatusNameMap, function(
        statusName,
        statusCode,
        statusIndex
      ) {
        return _c(
          "view",
          {
            key: statusIndex,
            staticClass: "grid",
            attrs: { eventid: "2077f6f4-0-" + statusCode },
            on: {
              tap: function($event) {
                _vm.showType(statusCode)
              }
            }
          },
          [
            _c(
              "view",
              {
                staticClass: "text",
                class: [statusCode == _vm.tabBarStatus ? "on" : ""]
              },
              [_vm._v(_vm._s(statusName))]
            )
          ]
        )
      })
    ),
    _vm.shownList == null || _vm.shownList.length <= 0
      ? _c(
          "view",
          { staticClass: "onorder" },
          [
            _c("full-page-empty-state", {
              attrs: {
                title: "没有相关订单",
                description: "看看其它类别的订单吧",
                mpcomid: "2077f6f4-0"
              }
            })
          ],
          1
        )
      : _vm._e(),
    _c("view", { staticClass: "order-list" }, [
      _c(
        "view",
        { staticClass: "list" },
        _vm._l(_vm.shownList, function(row, index0) {
          return _c(
            "view",
            { key: row, staticClass: "row" },
            [
              _c(
                "view",
                { staticClass: "store-name" },
                [
                  _c("i", { staticClass: "pin-icon" }, [_vm._v("store")]),
                  _vm._v(_vm._s(row.store.name))
                ],
                1
              ),
              _vm._l(row.orderItems, function(item, index1) {
                return _c("view", { key: item, staticClass: "order-info" }, [
                  _c("view", { staticClass: "left" }, [
                    _c("image", {
                      attrs: {
                        mode: "aspectFill",
                        src: item.productAttributeValue.imageUrl
                      }
                    })
                  ]),
                  _c("view", { staticClass: "right" }, [
                    _c("view", { staticClass: "name" }, [
                      _vm._v(_vm._s(item.product.name))
                    ]),
                    _c("view", { staticClass: "spec" }, [
                      _vm._v(_vm._s(item.productAttributeValue.sku))
                    ]),
                    _c("view", { staticClass: "price-number" }, [
                      _vm._v("￥"),
                      _c("view", { staticClass: "price" }, [
                        _vm._v(_vm._s(item.totalPrice))
                      ]),
                      _vm._v("×"),
                      _c("view", { staticClass: "number" }, [
                        _vm._v(_vm._s(item.amount))
                      ])
                    ])
                  ])
                ])
              }),
              _c("view", { staticClass: "detail" }, [
                _c("view", { staticClass: "number" }, [
                  _vm._v("共" + _vm._s(row.orderItems.length) + "件商品")
                ]),
                _c("view", { staticClass: "sum" }, [
                  _vm._v("合计￥"),
                  _c("view", { staticClass: "price" }, [
                    _vm._v(_vm._s(row.totalPrice))
                  ])
                ]),
                _c("view", { staticClass: "nominal" }, [
                  _vm._v("(含运费 ￥" + _vm._s(row.shipppingFee) + ")")
                ])
              ]),
              _c(
                "view",
                { staticClass: "btns" },
                [
                  row.paid == false
                    ? _c("block", [
                        _c("view", { staticClass: "default" }, [
                          _vm._v("取消订单")
                        ]),
                        _c(
                          "view",
                          {
                            staticClass: "pay",
                            attrs: { eventid: "2077f6f4-1-" + index0 },
                            on: {
                              tap: function($event) {
                                _vm.toPayment(row)
                              }
                            }
                          },
                          [_vm._v("付款")]
                        )
                      ])
                    : row.status === 0
                    ? _c("block", [
                        _c("view", { staticClass: "default" }, [
                          _vm._v("提醒发货")
                        ])
                      ])
                    : row.status === 1
                    ? _c("block", [
                        _c("view", { staticClass: "default" }, [
                          _vm._v("查看物流")
                        ]),
                        _c("view", { staticClass: "pay" }, [
                          _vm._v("确认收货")
                        ]),
                        _c("view", { staticClass: "pay" }, [_vm._v("我要退货")])
                      ])
                    : row.status === 2
                    ? _c("block", [
                        _c("view", { staticClass: "default" }, [
                          _vm._v("评价")
                        ]),
                        _c("view", { staticClass: "default" }, [
                          _vm._v("再次购买")
                        ])
                      ])
                    : row.status === 3
                    ? _c("block", [
                        _c("view", { staticClass: "default" }, [
                          _vm._v("再次购买")
                        ])
                      ])
                    : row.type >= 4
                    ? _c("block", [
                        _c("view", { staticClass: "default" }, [
                          _vm._v("查看退款详情")
                        ])
                      ])
                    : _vm._e()
                ],
                1
              )
            ],
            2
          )
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/main.js?{\"page\":\"pages%2Fuser%2Forder-list%2Forder-list\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/user/order-list/order-list.js.map