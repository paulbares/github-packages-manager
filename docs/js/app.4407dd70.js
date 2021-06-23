/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/github-packages-manager/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("85ec");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a305aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=4d61f2d0&
var Appvue_type_template_id_4d61f2d0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{staticClass:"md-layout md-gutter"},[_c('div',{staticClass:"md-layout-item"},[_c('md-field',[_c('label',[_vm._v("organization")]),_c('md-input',{model:{value:(_vm.githubInfo.organization),callback:function ($$v) {_vm.$set(_vm.githubInfo, "organization", $$v)},expression:"githubInfo.organization"}})],1)],1),_c('div',{staticClass:"md-layout-item"},[_c('md-field',[_c('label',[_vm._v("repository")]),_c('md-input',{model:{value:(_vm.githubInfo.repository),callback:function ($$v) {_vm.$set(_vm.githubInfo, "repository", $$v)},expression:"githubInfo.repository"}})],1)],1),_c('div',{staticClass:"md-layout-item"},[_c('md-field',[_c('label',[_vm._v("token")]),_c('md-input',{attrs:{"type":"password"},model:{value:(_vm.githubInfo.token),callback:function ($$v) {_vm.$set(_vm.githubInfo, "token", $$v)},expression:"githubInfo.token"}})],1)],1),_c('div',{staticClass:"md-layout-item"},[_c('md-field',[_c('label',[_vm._v("Page size")]),_c('md-input',{attrs:{"type":"number","maxlength":"3"},model:{value:(_vm.pageSize),callback:function ($$v) {_vm.pageSize=_vm._n($$v)},expression:"pageSize"}})],1)],1)]),_c('md-button',{on:{"click":_vm.fetch}},[_vm._v("Fetch")]),_c('md-button',{attrs:{"disabled":_vm.treeData.length === 0},on:{"click":_vm.expandAllNodes}},[_vm._v("Expand all")]),_c('md-button',{staticClass:"md-accent",attrs:{"disabled":!_vm.deleteEnabled},on:{"click":function($event){_vm.showDialog = true}}},[_vm._v("Delete")]),_c('h3',[_vm._v(_vm._s(_vm.treeData.length)+" packages")]),_c('Tree',{ref:"my-tree-ref",attrs:{"id":"my-tree-id","custom-options":_vm.treeOptions,"custom-styles":_vm.treeStyles,"nodes":_vm.treeData}}),(_vm.getCheckedVersionsByPackage())?_c('div',{staticClass:"md-layout md-gutter"},[_c('md-dialog',{attrs:{"md-active":_vm.showDialog},on:{"update:mdActive":function($event){_vm.showDialog=$event},"update:md-active":function($event){_vm.showDialog=$event}}},[_c('md-dialog-title',[_vm._v("Are you absolutely sure?")]),_c('md-content',{staticClass:"md-scrollbar"},[_c('span',{staticStyle:{"padding":"0px 24px","color":"rgb(255,0,0)"}},[_vm._v(" The following packages will be deleted and will no longer be accessible. ")]),_vm._l((Object.entries(_vm.getCheckedVersionsByPackage())),function(ref){
var packageName = ref[0];
var versions = ref[1];
return _c('md-list',{key:packageName},[_c('md-subheader',[_vm._v(_vm._s(packageName))]),_vm._l((versions),function(version){return _c('md-list-item',{key:version.id},[_c('span',{staticClass:"md-list-item-text"},[_vm._v(_vm._s(version.version))])])})],2)})],2),_c('div',{staticClass:"md-layout md-gutter md-alignment-center-right"},[_c('div',{staticClass:"md-layout-item md-size-25"}),_c('div',{staticClass:"md-layout-item md-size-25"}),_c('div',{staticClass:"md-layout-item md-size-25"},[_c('md-button',{staticClass:"md-primary",on:{"click":function($event){_vm.showDialog = false}}},[_vm._v("Cancel")])],1),_c('div',{staticClass:"md-layout-item md-size-25"},[_c('md-button',{staticClass:"md-primary md-raised",on:{"click":_vm.onConfirm}},[_vm._v("Confirm")])],1)])],1)],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=4d61f2d0&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("3835");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__("b85c");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("4fad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/vuejs-tree/dist/vuejs-tree.common.js
var vuejs_tree_common = __webpack_require__("029e");
var vuejs_tree_common_default = /*#__PURE__*/__webpack_require__.n(vuejs_tree_common);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("8785");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/graphql-request/dist/index.js
var dist = __webpack_require__("e852");

// CONCATENATED MODULE: ./src/utils/graphql.js




var _templateObject, _templateObject2, _templateObject3;







var endpoint = 'https://api.github.com/graphql'; // eslint-disable-next-line no-unused-vars

function createClient(token) {
  return new dist["GraphQLClient"](endpoint, {
    headers: {
      authorization: "Bearer ".concat(token)
    }
  });
}

function getPackages(_x) {
  return _getPackages.apply(this, arguments);
}

function _getPackages() {
  _getPackages = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(githubInfo) {
    var query, data, result, _iterator, _step, node;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = Object(dist["gql"])(_templateObject || (_templateObject = Object(taggedTemplateLiteral["a" /* default */])(["\n\t{\n\t  organization(login: \"", "\") {\n\t    createdAt\n\t    repository(name: \"", "\") {\n\t      packages(first: 100) {\n\t        totalCount\n\t        nodes {\n\t          id\n\t          name\n\t          packageType\n\t          versions {\n\t            totalCount\n\t          }\n\t        }\n\t      }\n\t    }\n\t  }\n\t}\n  "])), githubInfo.organization, githubInfo.repository);
            _context.prev = 1;
            _context.next = 4;
            return createClient(githubInfo.token).request(query);

          case 4:
            data = _context.sent;
            result = [];
            _iterator = Object(createForOfIteratorHelper["a" /* default */])(data.organization.repository.packages.nodes);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                node = _step.value;

                if (node.versions.totalCount != 0) {
                  result.push(node);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return _context.abrupt("return", result);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            alert(_context.t0);
            throw _context.t0;

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));
  return _getPackages.apply(this, arguments);
}

function getPackageVersions(_x2, _x3, _x4, _x5) {
  return _getPackageVersions.apply(this, arguments);
}

function _getPackageVersions() {
  _getPackageVersions = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(githubInfo, pageSize, packageName, afterArg) {
    var argsVersion, query, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            argsVersion = "first: ".concat(Math.min(100, pageSize)); // max is 100

            if (afterArg) {
              argsVersion += ", after: \"".concat(afterArg, "\"");
            }

            query = Object(dist["gql"])(_templateObject2 || (_templateObject2 = Object(taggedTemplateLiteral["a" /* default */])(["\n    {\n      organization(login: \"", "\") {\n        createdAt\n        repository(name: \"", "\") {\n          packages(first: 1, names: \"", "\") {\n            totalCount\n            nodes {\n              versions(", ") {\n                totalCount\n                nodes {\n                  id\n                  version\n                }\n                pageInfo {\n                  endCursor\n                  hasNextPage\n                  hasPreviousPage\n                  startCursor\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "])), githubInfo.organization, githubInfo.repository, packageName, argsVersion);
            _context2.prev = 3;
            _context2.next = 6;
            return createClient(githubInfo.token).request(query);

          case 6:
            data = _context2.sent;
            return _context2.abrupt("return", {
              versions: data.organization.repository.packages.nodes[0].versions.nodes,
              'hasNextPage': data.organization.repository.packages.nodes[0].versions.pageInfo.hasNextPage,
              'endCursor': data.organization.repository.packages.nodes[0].versions.pageInfo.endCursor
            });

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](3);
            alert(_context2.t0);
            throw _context2.t0;

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 10]]);
  }));
  return _getPackageVersions.apply(this, arguments);
}

function deletePackageVersions(_x6, _x7, _x8) {
  return _deletePackageVersions.apply(this, arguments);
}

function _deletePackageVersions() {
  _deletePackageVersions = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(githubInfo, packageName, versions) {
    var previewGraphQLClient;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            previewGraphQLClient = new dist["GraphQLClient"](endpoint, {
              headers: {
                authorization: "Bearer ".concat(githubInfo.token),
                accept: 'application/vnd.github.package-deletes-preview+json'
              }
            });
            _context3.prev = 1;
            _context3.next = 4;
            return Promise.all(versions.map(function (v) {
              return deletePackage(previewGraphQLClient, v.id);
            }));

          case 4:
            _context3.next = 10;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](1);
            alert(_context3.t0);
            throw _context3.t0;

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 6]]);
  }));
  return _deletePackageVersions.apply(this, arguments);
}

function deletePackage(_x9, _x10) {
  return _deletePackage.apply(this, arguments);
}

function _deletePackage() {
  _deletePackage = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(client, packageVersionId) {
    var query;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            query = Object(dist["gql"])(_templateObject3 || (_templateObject3 = Object(taggedTemplateLiteral["a" /* default */])(["\n          mutation {\n            deletePackageVersion(input:{packageVersionId:\"", "\"}) {\n              success\n            }\n          }\n      "], ["\n          mutation {\n            deletePackageVersion(input:{packageVersionId:\\\"", "\\\"}) {\n              success\n            }\n          }\n      "])), packageVersionId);
            _context4.next = 3;
            return client.request(query);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deletePackage.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import {getPackages, getPackageVersions, deletePackageVersions} from "./utils/graphql.mock";

var NIL = {};
var TREE_REF = 'my-tree-ref';
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  components: {
    Tree: vuejs_tree_common_default.a
  },
  data: function data() {
    return {
      treeData: [],
      githubInfo: {
        organization: '',
        repository: '',
        token: ''
      },
      deleteEnabled: false,
      showDialog: false,
      pageSize: 10
    };
  },
  computed: {
    treeOptions: function treeOptions() {
      return {
        treeEvents: {
          expanded: {
            state: true,
            fn: this.onNodeExpended
          },
          selected: {
            state: true,
            fn: this.onNodeSelected
          },
          checked: {
            state: true,
            fn: this.onNodeChecked
          }
        },
        addNode: {
          state: true,
          fn: this.checkSimilarVersions,
          appearOnHover: true
        }
      };
    },
    treeStyles: function treeStyles() {
      return {
        tree: {
          height: 'auto',
          overflowY: 'visible',
          display: 'inline-block'
        },
        addNode: {
          class: 'fa fa-flag-checkered',
          style: {
            color: '#070909'
          }
        },
        selectIcon: {
          class: 'fa fa-plus',
          style: {
            color: '#070909'
          },
          active: {
            class: 'fa fa-plus',
            style: {
              color: '#2ECC71'
            }
          }
        }
      };
    }
  },
  beforeMount: function beforeMount() {
    this.initTree();
  },
  methods: {
    fetch: function fetch() {
      this.initTree();
    },
    onConfirm: function onConfirm() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.showDialog = false;
                _this.deleteEnabled = false;
                _context.next = 4;
                return _this.deleteCheckedPackages();

              case 4:
                _context.next = 6;
                return _this.initTree();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    initTree: function initTree() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var packages, tree, _iterator, _step, pack, n;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (Object.entries(_this2.githubInfo).every(function (e) {
                  return e[1];
                })) {
                  _context2.next = 3;
                  break;
                }

                alert("Please fill in the form");
                return _context2.abrupt("return");

              case 3:
                _context2.next = 5;
                return getPackages(_this2.githubInfo);

              case 5:
                packages = _context2.sent;
                tree = [];
                _iterator = Object(createForOfIteratorHelper["a" /* default */])(packages);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    pack = _step.value;
                    n = {
                      id: pack.id,
                      text: pack.name + " [" + pack.versions.totalCount + "]",
                      name: pack.name,
                      definition: pack.name,
                      checkable: true,
                      expandable: true,
                      root: true,
                      state: {
                        checked: false,
                        expanded: false,
                        selected: false
                      },
                      nodes: [NIL] // to make the expand arrow appear

                    };
                    tree.push(n);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _this2.treeData = tree;

                _this2.$refs[TREE_REF].collapseAllNodes();

                _this2.$refs[TREE_REF].uncheckAllNodes();

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteCheckedPackages: function deleteCheckedPackages() {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var checkedNodes, _i, _Object$entries, _Object$entries$_i, packageName, versions;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                checkedNodes = _this3.getCheckedVersionsByPackage();
                _i = 0, _Object$entries = Object.entries(checkedNodes);

              case 2:
                if (!(_i < _Object$entries.length)) {
                  _context3.next = 9;
                  break;
                }

                _Object$entries$_i = Object(slicedToArray["a" /* default */])(_Object$entries[_i], 2), packageName = _Object$entries$_i[0], versions = _Object$entries$_i[1];
                _context3.next = 6;
                return deletePackageVersions(_this3.githubInfo, packageName, versions);

              case 6:
                _i++;
                _context3.next = 2;
                break;

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getCheckedVersionsByPackage: function getCheckedVersionsByPackage() {
      if (!this.$refs[TREE_REF]) {
        return;
      }

      var checkedNodes = this.$refs[TREE_REF].getCheckedNodes(['packageName', 'id', 'name', 'root'], false);
      checkedNodes = checkedNodes.filter(function (n) {
        return n.id !== undefined && !n.root;
      }); // there is a bug that results in having NIL on the list

      var result = {};

      var _iterator2 = Object(createForOfIteratorHelper["a" /* default */])(checkedNodes),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var n = _step2.value;

          if (n.id === this.getPlusId(n.packageName) || n.root) {
            continue;
          }

          var k = n.packageName;
          result[k] = result[k] || [];
          result[k].push({
            'id': n.id,
            'version': n.name
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return result;
    },
    onNodeChecked: function onNodeChecked(nodeId) {
      // By default, when a parent is checked, its children are also checked but no event is sent.
      // When a root node is checked, state of the delete button depends on its state
      var node = this.findNode(nodeId);

      if (node.root) {
        this.deleteEnabled = node.state.checked && node.nodes.some(function (n) {
          return n !== NIL;
        });
        return;
      }

      var checkedNodes = this.getCheckedVersionsByPackage();

      for (var packageName in checkedNodes) {
        if (checkedNodes[packageName].length > 0) {
          // At least one is checked, that's enough
          this.deleteEnabled = true;
          return;
        }
      }

      this.deleteEnabled = false;
    },
    onNodeSelected: function onNodeSelected(nodeId) {
      var _this4 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var node, rootNode, packageVersions;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                node = _this4.findNode(nodeId);
                rootNode = _this4.findRootNode(nodeId);
                _context4.next = 4;
                return getPackageVersions(_this4.githubInfo, _this4.pageSize, rootNode.name, node.endCursor);

              case 4:
                packageVersions = _context4.sent;

                _this4.appendNewNodes(rootNode, packageVersions);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onNodeExpended: function onNodeExpended(nodeId) {
      var _this5 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var node, packageVersions;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // Call from tree roots which correspond to package names
                node = _this5.treeData.find(function (n) {
                  return n.id === nodeId;
                });
                _context5.next = 3;
                return getPackageVersions(_this5.githubInfo, _this5.pageSize, node.name);

              case 3:
                packageVersions = _context5.sent;

                _this5.appendNewNodes(node, packageVersions);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    appendNewNodes: function appendNewNodes(packageNode, packageVersions) {
      var _this6 = this;

      var children = packageNode.nodes.filter(function (n) {
        return n !== NIL && n.id !== _this6.getPlusId(packageNode.name);
      }); // remove unwanted elements

      var newChildren = [];
      children.forEach(function (c) {
        return newChildren.push(c);
      });

      var _iterator3 = Object(createForOfIteratorHelper["a" /* default */])(packageVersions.versions),
          _step3;

      try {
        var _loop = function _loop() {
          var packageVersion = _step3.value;

          if (children.find(function (c) {
            return c.id === packageVersion.id;
          })) {
            return "continue";
          }

          newChildren.push(_this6.createNewNode(packageVersion.id, packageVersion.version, packageNode.name, true, false));
        };

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _ret = _loop();

          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (packageVersions.hasNextPage) {
        // Add new element
        newChildren.push(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, this.createNewNode(this.getPlusId(packageNode.name), "...", packageNode.name, false, true)), {}, {
          endCursor: packageVersions.endCursor
        }));
      }

      packageNode.nodes = newChildren; // to update the view
    },
    getPlusId: function getPlusId(packageName) {
      return packageName + "+";
    },
    // Tree utility methods
    createNewNode: function createNewNode(nodeId, nodeName, packageName, checkable, selectable) {
      return {
        id: nodeId,
        text: nodeName,
        name: nodeName,
        packageName: packageName,
        definition: nodeName,
        checkable: checkable,
        selectable: selectable,
        state: {
          checked: false,
          expanded: false,
          selected: false
        }
      };
    },
    findRootNode: function findRootNode(nodeId) {
      var _iterator4 = Object(createForOfIteratorHelper["a" /* default */])(this.treeData),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var n = _step4.value;

          if (n.id === nodeId || this.findRec(n.nodes, nodeId)) {
            return n; // itself
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    },
    findRec: function findRec(nodes, nodeId) {
      var _iterator5 = Object(createForOfIteratorHelper["a" /* default */])(nodes),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var n = _step5.value;

          if (n.id === nodeId) {
            return n;
          } else {
            var found = void 0;

            if (n.nodes && n.nodes.length > 0 && (found = this.findRec(n.nodes, nodeId))) {
              return found; // stop here
            }
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    },
    findNode: function findNode(nodeId) {
      return this.findRec(this.treeData, nodeId);
    },
    expandAllNodes: function expandAllNodes() {
      var _iterator6 = Object(createForOfIteratorHelper["a" /* default */])(this.treeData),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var n = _step6.value;
          this.$refs[TREE_REF].expandNode(n.id, 1);
          this.onNodeExpended(n.id);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    },
    checkSimilarVersions: function checkSimilarVersions(node) {
      var _iterator7 = Object(createForOfIteratorHelper["a" /* default */])(this.treeData),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var n = _step7.value;

          var _iterator8 = Object(createForOfIteratorHelper["a" /* default */])(n.nodes),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var vNode = _step8.value;

              if (vNode.name === node.name) {
                this.$refs[TREE_REF].checkNode(vNode.id, 2);
                this.deleteEnabled = true;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("034f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_4d61f2d0_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue-material/dist/vue-material.js
var vue_material = __webpack_require__("43f9");
var vue_material_default = /*#__PURE__*/__webpack_require__.n(vue_material);

// EXTERNAL MODULE: ./node_modules/vue-material/dist/vue-material.min.css
var vue_material_min = __webpack_require__("51de");

// EXTERNAL MODULE: ./node_modules/vue-material/dist/theme/default.css
var theme_default = __webpack_require__("e094");

// CONCATENATED MODULE: ./src/main.js









vue_runtime_esm["default"].config.productionTip = false;
vue_runtime_esm["default"].use(vue_material_default.a);
new vue_runtime_esm["default"]({
  render: function render(h) {
    return h(App);
  }
}).$mount('#app');

/***/ }),

/***/ "85ec":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.4407dd70.js.map