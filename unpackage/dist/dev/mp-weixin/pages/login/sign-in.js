(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/login/sign-in"],{

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/main.js?{\"page\":\"pages%2Flogin%2Fsign-in\"}":
/*!************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/main.js?{"page":"pages%2Flogin%2Fsign-in"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _signIn = _interopRequireDefault(__webpack_require__(/*! ./pages/login/sign-in.vue */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_signIn.default));

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue":
/*!*****************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sign_in_vue_vue_type_template_id_461b42c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.vue?vue&type=template&id=461b42c6& */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=template&id=461b42c6&");
/* harmony import */ var _sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.vue?vue&type=script&lang=js& */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sign_in_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.vue?vue&type=style&index=0&lang=scss& */ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sign_in_vue_vue_type_template_id_461b42c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sign_in_vue_vue_type_template_id_461b42c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./sign-in.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=script&lang=js&");
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./sign-in.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=template&id=461b42c6&":
/*!************************************************************************************************************************!*\
  !*** C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=template&id=461b42c6& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_template_id_461b42c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Standalone/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./sign-in.vue?vue&type=template&id=461b42c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=template&id=461b42c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_template_id_461b42c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Standalone_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_template_id_461b42c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =














































{
  data: function data() {
    return {
      user: '',
      password: '',
      isShowOauth: false,
      showProvider: {
        weixin: false,
        qq: false,
        sinaweibo: false,
        xiaomi: false },

      isWechatMiniProgram: false,
      recommendWechatLogin: false };

  },
  onShow: function onShow() {},
  onLoad: function onLoad() {
    //APP显示第三方登录




    this.isShowOauth = true;
    this.isWechatMiniProgram = true;
    this.recommendWechatLogin = true;
    this.wechatLogin();

    this.getProvider();
  },
  methods: {
    onGetUserInfo: function onGetUserInfo(e) {
      console.log(e);
    },
    oauthLogin: function oauthLogin(provider) {
      var that = this;
      uni.showLoading();
      //第三方登录
      uni.login({
        provider: provider,
        success: function success(loginRes) {
          console.log("success: " + JSON.stringify(loginRes));
          var code = loginRes.code;
          //案例直接获取用户信息，一般不是在APP端直接获取用户信息，比如微信，获取一个code，传递给后端，后端再去请求微信服务器获取用户信息
          uni.getUserInfo({
            provider: provider,
            success: function success(infoRes) {
              console.log('用户信息：' + JSON.stringify(infoRes.userInfo));
              var userInfo = infoRes.userInfo;
              userInfo.code = code;
              that.$pin.request('POST', '/sign-in/', userInfo,
              function (successData) {

              },
              function (failData) {

              });
            } });

        },
        fail: function fail(e) {
          console.log("fail: " + JSON.stringify(e));
        } });

    },
    getProvider: function getProvider() {var _this = this;
      //获取第三方登录服务
      uni.getProvider({
        service: 'oauth',
        success: function success(res) {
          var len = res.provider.length;
          for (var i = 0; i < len; i++) {
            //有服务才显示按钮图标
            _this.showProvider[res.provider[i]] = true;
          }
          if (res.provider.length == 0) {
            _this.isShowOauth = false;
          }
        } });

    },
    toPage: function toPage(page) {
      uni.hideKeyboard();
      uni.navigateTo({
        url: page });

    },
    loginSuccess: function loginSuccess() {
      uni.showToast({
        title: '登录成功' });

      var pages = getCurrentPages();
      console.log(pages);
      if (pages.length > 1) {
        uni.navigateBack(-1);
      } else {
        uni.switchTab({
          url: "/pages/tab-bar/home" });

      }
    },
    loginFailed: function loginFailed() {

    },
    wechatLogin: function wechatLogin() {
      console.log("LOGINING WECHAT UNI");

      this.$pin.loginFromWechat(this.loginSuccess, this.loginFailed);

      console.log("LOGINING WECHAT");
    },
    doLogin: function doLogin() {
      uni.hideKeyboard();
      //验证手机号码
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.user) && !
      /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.user)) {
        uni.showToast({
          title: '请填写正确手机号或邮箱地址',
          icon: "none" });

        return false;
      }
      uni.showLoading({
        title: '登录中...' });

      var that = this;
      this.$pin.request('POST', '/sign-in/default', {
        user: this.user,
        password: this.password },

      function (successData) {
        uni.hideLoading();
        console.log(successData);
        if (successData.code == that.$pin.code.invalidCredential) {
          // 登录失败
          uni.showToast({
            title: '登录凭据错误，请重试。',
            icon: 'none' });

        } else if (successData.code == that.$pin.code.success) {
          uni.setStorageSync('pin-token', successData.data);
          that.loginSuccess();
        }
      },
      function (failData) {
        uni.hideLoading();
      });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=template&id=461b42c6&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/pages/login/sign-in.vue?vue&type=template&id=461b42c6& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    !_vm.recommendWechatLogin
      ? _c("view", { staticClass: "form" }, [
          _c("view", { staticClass: "username pin-shadow" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user,
                  expression: "user"
                }
              ],
              attrs: { placeholder: "手机号或邮箱...", eventid: "0f9cd1f4-0" },
              domProps: { value: _vm.user },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.user = $event.target.value
                }
              }
            })
          ]),
          _c("view", { staticClass: "password" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password,
                  expression: "password"
                }
              ],
              attrs: {
                placeholder: "密码...",
                password: "true",
                eventid: "0f9cd1f4-1"
              },
              domProps: { value: _vm.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.password = $event.target.value
                }
              }
            })
          ]),
          _c(
            "view",
            {
              staticClass: "pin-button pin-bg-accent",
              attrs: { eventid: "0f9cd1f4-2" },
              on: { tap: _vm.doLogin }
            },
            [
              _c("i", { staticClass: "pin-icon" }, [_vm._v("done")]),
              _vm._v("登 录")
            ],
            1
          ),
          _c("view", { staticClass: "res" }, [
            _c(
              "view",
              {
                attrs: { eventid: "0f9cd1f4-3" },
                on: {
                  tap: function($event) {
                    _vm.toPage("sign-up")
                  }
                }
              },
              [
                _c("i", { staticClass: "pin-icon" }, [_vm._v("person_add")]),
                _vm._v("用户注册")
              ],
              1
            ),
            _c(
              "view",
              {
                attrs: { eventid: "0f9cd1f4-4" },
                on: {
                  tap: function($event) {
                    _vm.toPage("reset-password")
                  }
                }
              },
              [
                _c("i", { staticClass: "pin-icon" }, [_vm._v("help")]),
                _vm._v("忘记密码")
              ],
              1
            )
          ]),
          _vm.isWechatMiniProgram
            ? _c(
                "view",
                { staticClass: "pin-text-center" },
                [
                  _c("i", { staticClass: "pin-icon" }, [_vm._v("info")]),
                  _vm._v("您正在使用微信小程序，推荐使用微信登录。")
                ],
                1
              )
            : _vm._e()
        ])
      : _c(
          "view",
          { staticClass: "form" },
          [
            _c(
              "button",
              {
                staticClass: "pin-button pin-bg-accent",
                attrs: { "open-type": "getUserInfo", eventid: "0f9cd1f4-5" },
                on: { getuserinfo: _vm.onGetUserInfo }
              },
              [
                _c("i", { staticClass: "icon weixin" }),
                _vm._v("使用微信授权登录")
              ],
              1
            ),
            _vm.isWechatMiniProgram
              ? _c(
                  "view",
                  {
                    staticClass: "pin-margin pin-text-right",
                    attrs: { eventid: "0f9cd1f4-6" },
                    on: {
                      tap: function($event) {
                        _vm.recommendWechatLogin = false
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "pin-icon" }, [_vm._v("info")]),
                    _vm._v(
                      "您正在使用微信小程序，推荐使用微信登录。\n\t\t\t您亦可选择"
                    ),
                    _c("i", { staticClass: "pin-icon text-xxxl" }, [
                      _vm._v("person")
                    ]),
                    _vm._v("使用 Pin 帐号密码登录")
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        ),
    _vm.isShowOauth
      ? _c("view", { staticClass: "oauth pin-animation-slide-up" }, [
          _c("view", { staticClass: "text" }, [_vm._v("— 第三方快速登录 —")]),
          _c(
            "view",
            { staticClass: "list" },
            [
              _vm.showProvider.weixin && !_vm.isWechatMiniProgram
                ? _c("view", {
                    staticClass: "icon weixin",
                    attrs: { eventid: "0f9cd1f4-7" },
                    on: {
                      tap: function($event) {
                        _vm.oauthLogin("weixin")
                      }
                    }
                  })
                : _vm._e(),
              _vm.showProvider.weixin && _vm.isWechatMiniProgram
                ? _c("button", {
                    staticClass: "icon weixin",
                    attrs: {
                      "open-type": "getUserInfo",
                      eventid: "0f9cd1f4-8"
                    },
                    on: { getuserinfo: _vm.onGetUserInfo }
                  })
                : _vm._e(),
              _vm.showProvider.qq
                ? _c("view", {
                    staticClass: "icon qq",
                    attrs: { eventid: "0f9cd1f4-9" },
                    on: {
                      tap: function($event) {
                        _vm.oauthLogin("qq")
                      }
                    }
                  })
                : _vm._e(),
              _vm.showProvider.sinaweibo
                ? _c("view", {
                    staticClass: "icon sinaweibo",
                    attrs: { eventid: "0f9cd1f4-10" },
                    on: {
                      tap: function($event) {
                        _vm.oauthLogin("sinaweibo")
                      }
                    }
                  })
                : _vm._e(),
              _vm.showProvider.xiaomi
                ? _c("view", {
                    staticClass: "icon xiaomi",
                    attrs: { eventid: "0f9cd1f4-11" },
                    on: {
                      tap: function($event) {
                        _vm.oauthLogin("xiaomi")
                      }
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "logo" }, [
      _c("view", { staticClass: "img" }, [
        _c("image", {
          attrs: { mode: "widthFix", src: "../../static/img/logo.png" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../Development/NodeJS/Shop-pin-Frontend/Shop-pin-Frontend/main.js?{\"page\":\"pages%2Flogin%2Fsign-in\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/sign-in.js.map