/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst todo_1 = __webpack_require__(/*! ./modules/todo */ \"./src/modules/todo.ts\");\nlet testTodoList = [\n    (0, todo_1.todoItemFactory)(\"Tarefa 1\", \"Fazer a tarefa um.\", new Date(), \"normal\", false),\n];\nconsole.log(testTodoList);\nconsole.log((0, todo_1.toggleTodoItem)(testTodoList[0]));\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/modules/todo.ts":
/*!*****************************!*\
  !*** ./src/modules/todo.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.changeDueTodoItem = exports.changePriority = exports.toggleTodoItem = exports.todoItemFactory = void 0;\nconst todoItemFactory = (title, description, dueDate, priority = \"normal\", done = false, checklist = [], notes = []) => {\n    return {\n        title,\n        description,\n        dueDate,\n        priority,\n        done,\n        checklist,\n        notes,\n    };\n};\nexports.todoItemFactory = todoItemFactory;\nconst toggleTodoItem = (todoItem) => {\n    todoItem.done = !todoItem.done;\n    return todoItem;\n};\nexports.toggleTodoItem = toggleTodoItem;\nconst changePriority = (todoItem, priority) => {\n    todoItem.priority = priority;\n    return todoItem;\n};\nexports.changePriority = changePriority;\nconst changeDueTodoItem = (todoItem, dueDate) => {\n    todoItem.dueDate = dueDate;\n    return todoItem;\n};\nexports.changeDueTodoItem = changeDueTodoItem;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/todo.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;