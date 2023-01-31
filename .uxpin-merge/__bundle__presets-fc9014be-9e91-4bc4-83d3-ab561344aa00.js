(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.uxpin-merge/presets-fc9014be-9e91-4bc4-83d3-ab561344aa00.js":
/*!**********************************************************************!*\
  !*** ./.uxpin-merge/presets-fc9014be-9e91-4bc4-83d3-ab561344aa00.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: [BABEL] /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/.uxpin-merge/presets-fc9014be-9e91-4bc4-83d3-ab561344aa00.js: Cannot find module 'babel-preset-env'\nRequire stack:\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@salesforce/babel-preset-design-system-react/index.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@babel/core/lib/config/files/module-types.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@babel/core/lib/config/files/configuration.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@babel/core/lib/config/files/index.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@babel/core/lib/index.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/react-docgen/dist/babelParser.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/react-docgen/dist/parse.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/react-docgen/dist/main.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@uxpin/react-docgen-better-proptypes/src/utils/parsePath.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@uxpin/react-docgen-better-proptypes/src/handlers/createHandler.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@uxpin/react-docgen-better-proptypes/src/handlers/importedPropTypesHandler.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@uxpin/react-docgen-better-proptypes/src/index.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@uxpin/merge-cli/src/steps/serialization/component/implementation/javascript/getDefaultComponentFrom.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@uxpin/merge-cli/src/steps/serialization/component/implementation/javascript/serializeJSComponent.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@uxpin/merge-cli/src/steps/serialization/component/implementation/getComponentMetadata.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@uxpin/merge-cli/src/steps/serialization/getDesignSystemMetadata.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@uxpin/merge-cli/src/program/runProgram.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@uxpin/merge-cli/src/index.js\n- /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@uxpin/merge-cli/bin/uxpin-merge (While processing: \"/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@salesforce/babel-preset-design-system-react/index.js\")\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:885:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:730:27)\n    at Module.require (internal/modules/cjs/loader.js:957:19)\n    at require (internal/modules/cjs/helpers.js:88:18)\n    at buildPreset (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@salesforce/babel-preset-design-system-react/index.js:7:4)\n    at async (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@babel/core/src/gensync-utils/async.ts:36:33)\n    at async (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/gensync/index.js:186:15)\n    at /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/gensync/index.js:216:13\n    at Generator.next (<anonymous>)\n    at /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@babel/core/src/config/full.ts:265:23\n    at Generator.next (<anonymous>)\n    at Function.<anonymous> (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@babel/core/src/gensync-utils/async.ts:10:3)\n    at Generator.next (<anonymous>)\n    at step (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/gensync/index.js:269:25)\n    at evaluateAsync (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/gensync/index.js:291:5)\n    at Function.errback (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/gensync/index.js:113:7)\n    at errback (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@babel/core/src/gensync-utils/async.ts:88:18)\n    at async (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/gensync/index.js:188:31)\n    at onFirstPause (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/gensync/index.js:216:13)\n    at Generator.next (<anonymous>)\n    at cachedFunction (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@babel/core/src/config/caching.ts:131:34)\n    at cachedFunction.next (<anonymous>)\n    at loadPresetDescriptor (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@babel/core/src/config/full.ts:478:12)\n    at loadPresetDescriptor.next (<anonymous>)\n    at recursePresetDescriptors (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@babel/core/src/config/full.ts:113:33)\n    at recursePresetDescriptors.next (<anonymous>)\n    at /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@babel/core/src/config/full.ts:218:21\n    at Generator.next (<anonymous>)\n    at loadFullConfig (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@babel/core/src/config/full.ts:161:4)\n    at loadFullConfig.next (<anonymous>)\n    at transform (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@babel/core/src/transform.ts:26:58)\n    at transform.next (<anonymous>)\n    at step (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/gensync/index.js:269:25)\n    at /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/gensync/index.js:223:11)\n    at /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/gensync/index.js:37:40");

/***/ }),

/***/ "./node_modules/@uxpin/merge-cli/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
  return this;
}();
try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
// tslint:disable-next-line:function-name
function __uxpinParsePreset(component, props, ...children) {
  if (component === undefined) {
    const error = new Error('Unknown component!');
    error.message = parsePresetErrorMessage(error);
    throw error;
  }
  const componentName = component.name ? component.name : 'Unknown';
  return {
    children,
    name: componentName,
    props: JSON.parse(JSON.stringify(props)) || {},
    uxpinPresetElementType: 'CodeComponent',
    warnings: getPropertySerializationWarnings(props)
  };
}
function getPropertySerializationWarnings(props) {
  if (!props) {
    return [];
  }
  return Object.keys(props).reduce((warnings, propName) => {
    const propValue = props[propName];
    if (typeof propValue === 'function') {
      warnings.push({
        message: `Unsupported property \`${propName}\` of a type \`${typeof propValue}\``
      });
    }
    return warnings;
  }, []);
}
const ERROR_LINES = 5;
function parsePresetErrorMessage(error) {
  if (!error.stack) {
    return error.message;
  }
  const lines = error.stack.split('\n').filter(line => !line.match(/at __uxpinParsePreset/gi));
  return lines.slice(0, ERROR_LINES).join('\n');
}
global.__uxpinParsePreset = __uxpinParsePreset;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/@uxpin/merge-cli/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 0:
/*!************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js ./.uxpin-merge/presets-fc9014be-9e91-4bc4-83d3-ab561344aa00.js ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js */"./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js");
module.exports = __webpack_require__(/*! /Users/gaustria/Documents/UXPin Merge/merge-salesforce-lightning/.uxpin-merge/presets-fc9014be-9e91-4bc4-83d3-ab561344aa00.js */"./.uxpin-merge/presets-fc9014be-9e91-4bc4-83d3-ab561344aa00.js");


/***/ })

/******/ })));
//# sourceMappingURL=__bundle__presets-fc9014be-9e91-4bc4-83d3-ab561344aa00.js.map