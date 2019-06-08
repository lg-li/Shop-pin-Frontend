(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/product/product-detail"],{

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/main.js?{\"page\":\"pages%2Fproduct%2Fproduct-detail\"}":
/*!*********************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/main.js?{"page":"pages%2Fproduct%2Fproduct-detail"} ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _productDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/product/product-detail.vue */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_productDetail.default));

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue":
/*!**************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_detail_vue_vue_type_template_id_66cf40e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail.vue?vue&type=template&id=66cf40e8& */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=template&id=66cf40e8&");
/* harmony import */ var _product_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.vue?vue&type=script&lang=js& */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _product_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _product_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _product_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail.vue?vue&type=style&index=0&lang=scss& */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _product_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_detail_vue_vue_type_template_id_66cf40e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_detail_vue_vue_type_template_id_66cf40e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./product-detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=script&lang=js&");
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./product-detail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=template&id=66cf40e8&":
/*!*********************************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=template&id=66cf40e8& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_template_id_66cf40e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./product-detail.vue?vue&type=template&id=66cf40e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=template&id=66cf40e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_template_id_66cf40e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_detail_vue_vue_type_template_id_66cf40e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =



















































































































































































































{
  data: function data() {
    return {
      //控制渐变标题栏的参数
      beforeHeaderzIndex: 11, //层级
      afterHeaderzIndex: 10, //层级
      beforeHeaderOpacity: 1, //不透明度
      afterHeaderOpacity: 0, //不透明度
      //是否显示返回按钮



      //轮播主图数据
      swiperList: [],
      //轮播图下标
      currentSwiper: 0,
      anchorlist: [], //导航条锚点
      selectAnchor: 0, //选中锚点
      serviceClass: '', //服务弹窗css类，控制开关动画
      attributeModalClass: '', //规格弹窗css类，控制开关动画
      shareClass: '', //分享弹窗css类，控制开关动画
      // 商品信息
      productAttributes: [],
      productAttributeValuesMap: {},
      productSKUStockCache: {},
      productDetail: {},
      selectedResult: {
        sku: null,
        amount: 1,
        skuString: '' },

      attributeSelectMap: {},
      productData: {
        service: [{
          name: "正品保证",
          description: "此商品官方保证为正品" },

        {
          name: "极速退款",
          description: "此商品享受退货极速退款服务" },

        {
          name: "7天退换",
          description: "此商品享受7天无理由退换服务" }],


        comment: {
          number: 102,
          userface: '../../static/img/face.jpg',
          username: '大黑哥',
          content: '很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！' } },


      selectSpec: null, //选中规格
      isKeep: false, //收藏 商品描述html
      descriptionStr: '<div style="text-align:center;"><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOogx.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOHKK.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOTv6.jpg"/></div>' };

  },
  onLoad: function onLoad(option) {

    //小程序隐藏返回按钮
    this.showBack = false;

    //option为object类型，会序列化上个页面传递的参数
    console.log(option.productId); //打印出上个页面传递的参数。
    this.loadProductDetail(option.productId);
  },
  onReady: function onReady() {
    this.calcAnchor(); //计算锚点高度，页面数据是ajax加载时，请把此行放在数据渲染完成事件中执行以保证高度计算正确
  },
  onPageScroll: function onPageScroll(e) {
    //锚点切换
    this.selectAnchor = e.scrollTop >= this.anchorlist[2].top ? 2 : e.scrollTop >= this.anchorlist[1].top ? 1 : 0;
    //导航栏渐变
    var tmpY = 375;
    e.scrollTop = e.scrollTop > tmpY ? 375 : e.scrollTop;
    this.afterHeaderOpacity = e.scrollTop * (1 / tmpY);
    this.beforeHeaderOpacity = 1 - this.afterHeaderOpacity;
    //切换层级
    this.beforeHeaderzIndex = e.scrollTop > 0 ? 10 : 11;
    this.afterHeaderzIndex = e.scrollTop > 0 ? 11 : 10;
  },
  //上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
  onReachBottom: function onReachBottom() {
    uni.showToast({
      title: '触发上拉加载' });

  },
  methods: {
    loadProductDetail: function loadProductDetail(productId) {
      var that = this;
      this.$pin.request('GET', '/commons/product/' + productId, null,
      function (successData) {
        console.log(successData);
        that.productDetail = successData.data;
        uni.setNavigationBarTitle({
          title: that.productDetail.name });

        that.swiperList.push({
          id: 1,
          img: that.productDetail.imageUrls });

        that.parseProductAttributes(successData.data.productAttributeDefinitions, successData.data.productAttributeValues);
      },
      function (failData) {
        console.log(failData);
        uni.showToast({
          icon: 'none',
          title: '加载商品出错' });

      });

    },
    parseProductAttributes: function parseProductAttributes(pinProductAttributeDefinitions, pinProductAttributeValues) {
      var productAttributes = [];
      for (var i = 0; i < pinProductAttributeDefinitions.length; i++) {
        productAttributes.push({
          attributeName: pinProductAttributeDefinitions[i].attributeName,
          attributeValues: pinProductAttributeDefinitions[i].attributeValues.split(';') });

        this.attributeSelectMap[pinProductAttributeDefinitions[i].attributeName] = null;
      }
      console.log(productAttributes);
      this.productAttributes = productAttributes;

      // 生成按规格属性值map的库存数据
      for (var _i = 0; _i < pinProductAttributeValues.length; _i++) {
        this.productAttributeValuesMap[pinProductAttributeValues[_i].sku] = pinProductAttributeValues[_i];
      }
    },
    //轮播图指示器
    swiperChange: function swiperChange(event) {
      this.currentSwiper = event.detail.current;
    },
    //消息列表
    toMsg: function toMsg() {
      uni.navigateTo({
        url: '../message/messages' });

    },
    // 客服
    toChat: function toChat() {
      uni.navigateTo({
        url: "../message/chat/chat?name=客服008" });

    },
    // 分享
    share: function share() {
      this.shareClass = 'show';
    },
    hideShare: function hideShare() {var _this = this;
      this.shareClass = 'hide';
      setTimeout(function () {
        _this.shareClass = 'none';
      }, 150);
    },
    //收藏
    keep: function keep() {
      this.isKeep = this.isKeep ? false : true;
    },
    // 加入购物车
    joinCart: function joinCart() {
      if (this.selectedResult.sku == null || this.selectedResult.skuString == '') {
        uni.showToast({
          icon: "none",
          title: "请选择规格" });

        this.showSpec(this.joinCart);
        return;
      }
      if (this.selectedResult.amount == null || this.selectedResult.amount <= 0) {
        uni.showToast({
          icon: "none",
          title: "请至少选择一件商品加入购物车" });

        return;
      }
      this.$pin.request('POST', '/commons/order/order-item', {
        productId: this.productDetail.id,
        skuId: this.selectedResult.sku.id,
        amount: this.selectedResult.amount },

      function (successData) {
        uni.showToast({
          title: "已加入购物车" });

      },
      function (failData) {
        uni.showToast({
          icon: "none",
          title: "加入购物车失败，请重试" });

      });

    },
    //立即购买
    buy: function buy() {var _this2 = this;
      if (this.selectSpec == null) {
        return this.showSpec(function () {
          _this2.toConfirmation();
        });
      }
      this.toConfirmation();
    },
    //跳转确认订单页面
    toConfirmation: function toConfirmation() {
      var tmpList = [];
      var product = {
        id: this.productData.id,
        img: '../../static/img/product/p1.jpg',
        name: this.productData.name,
        spec: '规格:' + this.productData.spec[this.selectSpec],
        price: this.productData.price,
        number: this.productData.number };

      tmpList.push(product);
      uni.setStorage({
        key: 'buylist',
        data: tmpList,
        success: function success() {
          uni.navigateTo({
            url: '../order/confirmation' });

        } });

    },
    //跳转评论列表
    showComments: function showComments(productid) {

    },
    //选择规格
    setSelectAttribute: function setSelectAttribute(attributeName, selectedAttributeValue) {
      console.log(attributeName + '--' + selectedAttributeValue);
      this.attributeSelectMap[attributeName] = selectedAttributeValue;
      var productSKUString = "";
      for (var i = 0; i < this.productAttributes.length; i++) {
        var tempStr = this.attributeSelectMap[this.productAttributes[i].attributeName];
        if (tempStr != null) {
          productSKUString += tempStr;
        } else {
          continue;
        }
        if (i < this.productAttributes.length - 1) {
          productSKUString += ";";
        }
      }
      this.getSKUStockNum(productSKUString);
      this.selectedResult.skuString = productSKUString;
      this.selectedResult.sku = this.productAttributeValuesMap[productSKUString];
      this.$forceUpdate();
    },
    getSKUStockNum: function getSKUStockNum(key) {
      var result = 0,
      i,j,m,items,n = [];
      //检查是否已计算过
      if (typeof this.productSKUStockCache[key] != 'undefined') {
        return this.productSKUStockCache[key];
      }
      items = key.split(";");
      //已选择数据是最小路径，直接从已端数据获取
      if (items.length === this.productAttributes.length) {
        return this.productAttributeValuesMap[key] ? this.productAttributeValuesMap[key].stock : 0;
      }
      //拼接子串
      for (i = 0; i < this.productAttributes.length; i++) {
        for (j = 0; j < this.productAttributes[i].attributeValues.length && items.length > 0; j++) {
          if (this.productAttributes[i].attributeValues[j] == items[0]) {
            break;
          }
        }
        if (j < this.productAttributes[i].attributeValues.length && items.length > 0) {
          //找到该项，跳过
          n.push(items.shift());
        } else {
          // 递归分解求值
          for (m = 0; m < this.productAttributes[i].attributeValues.length; m++) {
            result += this.getSKUStockNum(n.concat(this.productAttributes[i].attributeValues[m], items).join(";"));
          }
          break;
        }
      }

      //缓存productAttributeValuesMap
      this.productSKUStockCache[key] = result;
      return result;
    },
    //减少数量
    sub: function sub() {
      if (this.selectedResult.amount <= 1) {
        return;
      }
      this.selectedResult.amount--;
    },
    //增加数量
    add: function add() {
      var stock = this.productAttributeValuesMap[this.selectedResult.skuString].stock;
      if (stock == null || stock <= this.selectedResult.amount) {
        uni.showToast({
          title: '已达到库存上限',
          icon: 'none' });

        return;
      }
      this.selectedResult.amount++;
    },
    //跳转锚点
    toAnchor: function toAnchor(index) {
      this.selectAnchor = index;
      uni.pageScrollTo({
        scrollTop: this.anchorlist[index].top,
        duration: 200 });

    },
    //计算锚点高度
    calcAnchor: function calcAnchor() {var _this3 = this;
      this.anchorlist = [{
        name: '主图',
        top: 0 },

      {
        name: '评价',
        top: 0 },

      {
        name: '详情',
        top: 0 }];


      var commentsView = uni.createSelectorQuery().select("#comments");
      commentsView.boundingClientRect(function (data) {
        var statusbarHeight = 0;
        //APP内还要计算状态栏高度



        var headerHeight = uni.upx2px(100);
        _this3.anchorlist[1].top = data.top - headerHeight - statusbarHeight;
        _this3.anchorlist[2].top = data.bottom - headerHeight - statusbarHeight;

      }).exec();
    },
    //返回上一页
    back: function back() {
      uni.navigateBack();
    },
    //服务弹窗
    showService: function showService() {
      console.log('show');
      this.serviceClass = 'show';
    },
    //关闭服务弹窗
    hideService: function hideService() {var _this4 = this;
      this.serviceClass = 'hide';
      setTimeout(function () {
        _this4.serviceClass = 'none';
      }, 200);
    },
    //规格弹窗
    showSpec: function showSpec(fun) {
      console.log('show');
      this.attributeModalClass = 'show';
      this.specCallback = fun;
    },
    specCallback: function specCallback() {
      return;
    },
    //关闭规格弹窗
    hideSpec: function hideSpec() {var _this5 = this;
      this.attributeModalClass = 'hide';
      //回调
      this.selectSpec && this.specCallback && this.specCallback();
      this.specCallback = false;
      setTimeout(function () {
        _this5.attributeModalClass = 'none';
      }, 200);
    },
    discard: function discard() {
      //丢弃
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=template&id=66cf40e8&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/product/product-detail.vue?vue&type=template&id=66cf40e8& ***!
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
    _c("view", {
      staticClass: "status",
      style: { opacity: _vm.afterHeaderOpacity }
    }),
    _c("view", { staticClass: "product-header" }, [
      _c(
        "view",
        {
          staticClass: "before",
          style: {
            opacity: 1 - _vm.afterHeaderOpacity,
            zIndex: _vm.beforeHeaderzIndex
          }
        },
        [
          _c("view", { staticClass: "back" }, [
            _vm.showBack
              ? _c("view", {
                  staticClass: "icon xiangqian",
                  attrs: { eventid: "4ce8c978-0" },
                  on: { tap: _vm.back }
                })
              : _vm._e()
          ]),
          _c("view", { staticClass: "middle" }),
          _c("view", { staticClass: "icon-btn" }, [
            _c(
              "view",
              {
                staticClass: "icon pin-icon",
                attrs: { eventid: "4ce8c978-1" },
                on: { tap: _vm.toMsg }
              },
              [_vm._v("notifications")]
            ),
            _c(
              "view",
              {
                staticClass: "icon pin-icon",
                attrs: { eventid: "4ce8c978-2" },
                on: { tap: _vm.joinCart }
              },
              [_vm._v("shopping_cart")]
            )
          ])
        ]
      ),
      _c(
        "view",
        {
          staticClass: "after",
          style: {
            opacity: _vm.afterHeaderOpacity,
            zIndex: _vm.afterHeaderzIndex
          }
        },
        [
          _c("view", { staticClass: "back" }, [
            _vm.showBack
              ? _c(
                  "view",
                  {
                    staticClass: "icon pin-icon",
                    attrs: { eventid: "4ce8c978-3" },
                    on: { tap: _vm.back }
                  },
                  [_vm._v("arrow_back")]
                )
              : _vm._e()
          ]),
          _c(
            "view",
            { staticClass: "middle" },
            _vm._l(_vm.anchorlist, function(anchor, index) {
              return _c(
                "view",
                {
                  key: index,
                  class: [_vm.selectAnchor == index ? "on" : ""],
                  attrs: { eventid: "4ce8c978-4-" + index },
                  on: {
                    tap: function($event) {
                      _vm.toAnchor(index)
                    }
                  }
                },
                [_vm._v(_vm._s(anchor.name))]
              )
            })
          ),
          _c("view", { staticClass: "icon-btn" }, [
            _c(
              "view",
              {
                staticClass: "icon pin-icon",
                attrs: { eventid: "4ce8c978-5" },
                on: { tap: _vm.toMsg }
              },
              [_vm._v("notifications")]
            ),
            _c(
              "view",
              {
                staticClass: "icon pin-icon",
                attrs: { eventid: "4ce8c978-6" },
                on: { tap: _vm.joinCart }
              },
              [_vm._v("shopping_cart")]
            )
          ])
        ]
      )
    ]),
    _c("view", { staticClass: "footer" }, [
      _c("view", { staticClass: "icons" }, [
        _c(
          "view",
          {
            staticClass: "box",
            attrs: { eventid: "4ce8c978-7" },
            on: { tap: _vm.share }
          },
          [
            _c("view", { staticClass: "icon pin-icon" }, [_vm._v("share")]),
            _c("view", { staticClass: "text" }, [_vm._v("分享")])
          ]
        ),
        _c(
          "view",
          {
            staticClass: "box",
            attrs: { eventid: "4ce8c978-8" },
            on: { tap: _vm.toChat }
          },
          [
            _c("view", { staticClass: "icon pin-icon" }, [
              _vm._v("contact_phone")
            ]),
            _c("view", { staticClass: "text" }, [_vm._v("客服")])
          ]
        ),
        _c(
          "view",
          {
            staticClass: "box",
            attrs: { eventid: "4ce8c978-9" },
            on: { tap: _vm.keep }
          },
          [
            _c("view", { staticClass: "icon pin-icon" }, [
              _vm._v(_vm._s(_vm.isKeep ? "star" : "star_border"))
            ]),
            _c("view", { staticClass: "text" }, [
              _vm._v(_vm._s(_vm.isKeep ? "已" : "") + "收藏")
            ])
          ]
        )
      ]),
      _c("view", { staticClass: "btn" }, [
        _c(
          "view",
          {
            staticClass: "joinCart",
            attrs: { eventid: "4ce8c978-10" },
            on: { tap: _vm.joinCart }
          },
          [_vm._v("加入购物车")]
        ),
        _c(
          "view",
          {
            staticClass: "buy",
            attrs: { eventid: "4ce8c978-11" },
            on: { tap: _vm.buy }
          },
          [_vm._v("立即购买")]
        )
      ])
    ]),
    _c(
      "view",
      {
        staticClass: "share",
        class: _vm.shareClass,
        attrs: { eventid: "4ce8c978-14" },
        on: {
          touchmove: function($event) {
            $event.stopPropagation()
            $event.preventDefault()
            _vm.discard($event)
          },
          tap: _vm.hideShare
        }
      },
      [
        _c("view", { staticClass: "mask" }),
        _c(
          "view",
          {
            staticClass: "layer",
            attrs: { eventid: "4ce8c978-13" },
            on: {
              tap: function($event) {
                $event.stopPropagation()
                _vm.discard($event)
              }
            }
          },
          [
            _c("view", { staticClass: "h1" }, [_vm._v("分享")]),
            _vm._m(0),
            _c(
              "view",
              {
                staticClass: "btn",
                attrs: { eventid: "4ce8c978-12" },
                on: { tap: _vm.hideShare }
              },
              [_vm._v("取消")]
            )
          ]
        )
      ]
    ),
    _c(
      "view",
      {
        staticClass: "popup service",
        class: _vm.serviceClass,
        attrs: { eventid: "4ce8c978-17" },
        on: {
          touchmove: function($event) {
            $event.stopPropagation()
            $event.preventDefault()
            _vm.discard($event)
          },
          tap: _vm.hideService
        }
      },
      [
        _c("view", { staticClass: "mask" }),
        _c(
          "view",
          {
            staticClass: "layer",
            attrs: { eventid: "4ce8c978-16" },
            on: {
              tap: function($event) {
                $event.stopPropagation()
                _vm.discard($event)
              }
            }
          },
          [
            _c(
              "view",
              { staticClass: "content" },
              _vm._l(_vm.productData.service, function(item, index) {
                return _c("view", { key: index, staticClass: "row" }, [
                  _c("view", { staticClass: "title" }, [
                    _vm._v(_vm._s(item.name))
                  ]),
                  _c("view", { staticClass: "description" }, [
                    _vm._v(_vm._s(item.description))
                  ])
                ])
              })
            ),
            _c("view", { staticClass: "btn" }, [
              _c(
                "view",
                {
                  staticClass: "button",
                  attrs: { eventid: "4ce8c978-15" },
                  on: { tap: _vm.hideService }
                },
                [_vm._v("确定")]
              )
            ])
          ]
        )
      ]
    ),
    _c(
      "view",
      {
        staticClass: "popup spec",
        class: _vm.attributeModalClass,
        attrs: { eventid: "4ce8c978-25" },
        on: {
          touchmove: function($event) {
            $event.stopPropagation()
            $event.preventDefault()
            _vm.discard($event)
          },
          tap: _vm.hideSpec
        }
      },
      [
        _c("view", { staticClass: "mask" }),
        _c(
          "view",
          {
            staticClass: "layer",
            attrs: { eventid: "4ce8c978-24" },
            on: {
              tap: function($event) {
                $event.stopPropagation()
                _vm.discard($event)
              }
            }
          },
          [
            _c(
              "view",
              { staticClass: "content" },
              [
                _vm._l(_vm.productAttributes, function(
                  productAttribute,
                  index
                ) {
                  return _c(
                    "view",
                    { key: productAttribute.attributeName + index },
                    [
                      _c("view", { staticClass: "title" }, [
                        _vm._v(_vm._s(productAttribute.attributeName))
                      ]),
                      _c(
                        "view",
                        { staticClass: "attrubite-chip-list" },
                        _vm._l(productAttribute.attributeValues, function(
                          item,
                          index2
                        ) {
                          return _c(
                            "view",
                            {
                              key: item + index2,
                              staticClass: "attrubite-chip",
                              class: [
                                _vm.attributeSelectMap[
                                  productAttribute.attributeName
                                ] == item
                                  ? "on"
                                  : ""
                              ],
                              attrs: {
                                eventid: "4ce8c978-18-" + index + "-" + index2
                              },
                              on: {
                                tap: function($event) {
                                  _vm.setSelectAttribute(
                                    productAttribute.attributeName,
                                    item
                                  )
                                }
                              }
                            },
                            [_vm._v(_vm._s(item))]
                          )
                        })
                      )
                    ]
                  )
                }),
                _vm.selectedResult.sku != null
                  ? _c("view", { staticClass: "length" }, [
                      _c("view", { staticClass: "text" }, [
                        _vm._v(
                          "数量 (" + _vm._s(_vm.productDetail.unitName) + ")"
                        )
                      ]),
                      _c("view", { staticClass: "number" }, [
                        _c(
                          "view",
                          {
                            staticClass: "sub",
                            attrs: { eventid: "4ce8c978-19" },
                            on: {
                              tap: function($event) {
                                $event.stopPropagation()
                                _vm.sub($event)
                              }
                            }
                          },
                          [
                            _c("view", { staticClass: "icon pin-icon" }, [
                              _vm._v("remove")
                            ])
                          ]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: "input",
                            attrs: { eventid: "4ce8c978-21" },
                            on: {
                              tap: function($event) {
                                $event.stopPropagation()
                                _vm.discard($event)
                              }
                            }
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.selectedResult.amount,
                                  expression: "selectedResult.amount"
                                }
                              ],
                              attrs: { type: "number", eventid: "4ce8c978-20" },
                              domProps: { value: _vm.selectedResult.amount },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.selectedResult.amount =
                                    $event.target.value
                                }
                              }
                            })
                          ]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: "add",
                            attrs: { eventid: "4ce8c978-22" },
                            on: {
                              tap: function($event) {
                                $event.stopPropagation()
                                _vm.add($event)
                              }
                            }
                          },
                          [
                            _c("view", { staticClass: "icon pin-icon" }, [
                              _vm._v("add")
                            ])
                          ]
                        )
                      ])
                    ])
                  : _vm._e()
              ],
              2
            ),
            _c(
              "view",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value:
                      _vm.productAttributeValuesMap[
                        _vm.selectedResult.skuString
                      ] != null &&
                      _vm.productAttributeValuesMap[
                        _vm.selectedResult.skuString
                      ].stock > 0,
                    expression:
                      "productAttributeValuesMap[selectedResult.skuString] != null && productAttributeValuesMap[selectedResult.skuString].stock >0"
                  }
                ],
                staticClass: "btn"
              },
              [
                _c(
                  "view",
                  {
                    staticClass: "button",
                    attrs: { eventid: "4ce8c978-23" },
                    on: { tap: _vm.hideSpec }
                  },
                  [_vm._v("完成")]
                )
              ]
            )
          ]
        )
      ]
    ),
    _c(
      "view",
      { staticClass: "swiper-box" },
      [
        _c(
          "swiper",
          {
            attrs: {
              circular: "true",
              autoplay: "true",
              eventid: "4ce8c978-27"
            },
            on: { change: _vm.swiperChange }
          },
          _vm._l(_vm.swiperList, function(swiper, index0) {
            return _c(
              "swiper-item",
              { key: swiper.id, attrs: { mpcomid: "4ce8c978-0-" + index0 } },
              [
                _c("image", {
                  attrs: { src: swiper.img, eventid: "4ce8c978-26-" + index0 },
                  on: {
                    tap: function($event) {
                      _vm.toSwiper(swiper)
                    }
                  }
                })
              ]
            )
          })
        ),
        _c("view", { staticClass: "indicator" }, [
          _vm._v(
            _vm._s(_vm.currentSwiper + 1) + "/" + _vm._s(_vm.swiperList.length)
          )
        ])
      ],
      1
    ),
    _c("view", { staticClass: "info-box product-info" }, [
      _c("view", { staticClass: "price" }, [
        _vm._v("￥" + _vm._s(_vm.productDetail.price))
      ]),
      _c("view", { staticClass: "title" }, [
        _vm._v(_vm._s(_vm.productDetail.name))
      ])
    ]),
    _c("view", { staticClass: "info-box spec" }, [
      _c(
        "view",
        {
          staticClass: "row",
          attrs: { eventid: "4ce8c978-28" },
          on: { tap: _vm.showService }
        },
        [
          _c("view", { staticClass: "text" }, [_vm._v("服务")]),
          _c(
            "view",
            { staticClass: "content" },
            _vm._l(_vm.productData.service, function(item, index) {
              return _c("view", { key: index, staticClass: "serviceitem" }, [
                _vm._v(_vm._s(item.name))
              ])
            })
          ),
          _vm._m(1)
        ]
      ),
      _c(
        "view",
        {
          staticClass: "row",
          attrs: { eventid: "4ce8c978-29" },
          on: {
            tap: function($event) {
              _vm.showSpec(false)
            }
          }
        },
        [
          _c("view", { staticClass: "text" }, [_vm._v("选择")]),
          _c("view", { staticClass: "content" }, [
            _c("view", [
              _vm._v(
                "选择规格：" +
                  _vm._s(
                    _vm.selectedResult.sku == null
                      ? "未选择"
                      : _vm.selectedResult.skuString
                  ) +
                  "\n\t\t\t\t\t" +
                  _vm._s(
                    _vm.selectedResult.amount == 0
                      ? ""
                      : _vm.selectedResult.amount + _vm.productDetail.unitName
                  )
              )
            ])
          ]),
          _vm._m(2)
        ]
      )
    ]),
    _c(
      "view",
      { staticClass: "info-box comments", attrs: { id: "comments" } },
      [
        _c("view", { staticClass: "row" }, [
          _c("view", { staticClass: "text" }, [_vm._v("商品评价")]),
          _c("view", { staticClass: "arrow" }, [
            _c(
              "view",
              {
                staticClass: "show",
                attrs: { eventid: "4ce8c978-30" },
                on: {
                  tap: function($event) {
                    _vm.showComments(_vm.productDetail.id)
                  }
                }
              },
              [
                _vm._v("查看全部"),
                _c("view", { staticClass: "icon pin-icon" }, [
                  _vm._v("keyboard_arrow_right")
                ])
              ]
            )
          ])
        ]),
        _c("view", { staticClass: "comment" }, [
          _c("view", { staticClass: "user-info" }, [
            _c("view", { staticClass: "face" }, [
              _c("image", { attrs: { src: _vm.productData.comment.userface } })
            ]),
            _c("view", { staticClass: "username" }, [
              _vm._v(_vm._s(_vm.productData.comment.username))
            ])
          ]),
          _c("view", { staticClass: "content" }, [
            _vm._v(_vm._s(_vm.productData.comment.content))
          ])
        ])
      ]
    ),
    _c("view", { staticClass: "description" }, [
      _c("view", { staticClass: "title" }, [_vm._v("———— 商品详情 ————")]),
      _c(
        "view",
        { staticClass: "content" },
        [
          _c("rich-text", {
            attrs: { nodes: _vm.descriptionStr, mpcomid: "4ce8c978-1" }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "list" }, [
      _c("view", { staticClass: "box" }, [
        _c("image", { attrs: { src: "../../static/img/share/wx.png" } }),
        _c("view", { staticClass: "title" }, [_vm._v("微信好友")])
      ]),
      _c("view", { staticClass: "box" }, [
        _c("image", { attrs: { src: "../../static/img/share/pyq.png" } }),
        _c("view", { staticClass: "title" }, [_vm._v("朋友圈")])
      ]),
      _c("view", { staticClass: "box" }, [
        _c("image", { attrs: { src: "../../static/img/share/wb.png" } }),
        _c("view", { staticClass: "title" }, [_vm._v("新浪微博")])
      ]),
      _c("view", { staticClass: "box" }, [
        _c("image", { attrs: { src: "../../static/img/share/qq.png" } }),
        _c("view", { staticClass: "title" }, [_vm._v("QQ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "arrow" }, [
      _c("view", { staticClass: "icon pin-icon" }, [
        _vm._v("keyboard_arrow_right")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "arrow" }, [
      _c("view", { staticClass: "icon pin-icon" }, [
        _vm._v("keyboard_arrow_right")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/main.js?{\"page\":\"pages%2Fproduct%2Fproduct-detail\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/product/product-detail.js.map