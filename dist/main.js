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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst todoDOM_1 = __webpack_require__(/*! ./modules/todoDOM */ \"./src/modules/todoDOM.ts\");\r\nconst stateList = [];\r\n(0, todoDOM_1.controller)(stateList);\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/modules/todoDOM.ts":
/*!********************************!*\
  !*** ./src/modules/todoDOM.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.controller = exports.updateListDOM = exports.buildItem = exports.documentElements = void 0;\r\nconst todoModel_1 = __webpack_require__(/*! ./todoModel */ \"./src/modules/todoModel.ts\");\r\nconst documentElements = {\r\n    list: document.getElementById(\"list\"),\r\n    titleInput: document.getElementById(\"title\"),\r\n    button: document.getElementById(\"add\"),\r\n};\r\nexports.documentElements = documentElements;\r\nconst buildItem = () => {\r\n    return (0, todoModel_1.todoItemFactory)(documentElements.titleInput.value, documentElements.titleInput.value);\r\n};\r\nexports.buildItem = buildItem;\r\nconst generateItem = (todoList, todoItem, index) => {\r\n    const container = document.createElement(\"div\");\r\n    container.classList.add(\"itemList\");\r\n    container.dataset.index = index.toString();\r\n    const checkbox = document.createElement(\"input\");\r\n    checkbox.type = \"checkbox\";\r\n    checkbox.checked = todoItem.done;\r\n    checkbox.name = \"checkbox\" + index;\r\n    if (todoItem.done)\r\n        container.classList.add(\"checkItem\");\r\n    checkbox.addEventListener(\"change\", (ev) => {\r\n        const stateList = (0, todoModel_1.applyItemFunction)(index, todoModel_1.toggleItem, todoList);\r\n        controller(stateList);\r\n    });\r\n    container.appendChild(checkbox);\r\n    const itemText = document.createElement(\"span\");\r\n    itemText.appendChild(document.createTextNode(todoItem.title));\r\n    container.appendChild(itemText);\r\n    const deleteButton = document.createElement(\"button\");\r\n    deleteButton.classList.add(\"deleteButton\");\r\n    deleteButton.textContent = \"✖\";\r\n    deleteButton.addEventListener(\"click\", (ev) => {\r\n        const stateList = (0, todoModel_1.removeItem)(index, todoList);\r\n        controller(stateList);\r\n    });\r\n    container.appendChild(deleteButton);\r\n    return container;\r\n};\r\nconst updateListDOM = (todoList) => {\r\n    const out = todoList.map((val, idx) => {\r\n        return generateItem(todoList, val, idx);\r\n    });\r\n    return out;\r\n};\r\nexports.updateListDOM = updateListDOM;\r\nconst controller = (todoList) => {\r\n    documentElements.list.textContent = \"\";\r\n    updateListDOM(todoList).forEach((el) => documentElements.list.appendChild(el));\r\n    const updateState = () => {\r\n        const newItem = buildItem();\r\n        const stateList = (0, todoModel_1.addItem)(newItem, todoList);\r\n        documentElements.titleInput.value = \"\";\r\n        controller(stateList);\r\n    };\r\n    documentElements.button.onclick = () => {\r\n        if (!documentElements.titleInput.value)\r\n            return;\r\n        updateState();\r\n    };\r\n    documentElements.titleInput.onkeyup = (e) => {\r\n        if (!documentElements.titleInput.value || e.key != \"Enter\")\r\n            return;\r\n        updateState();\r\n    };\r\n};\r\nexports.controller = controller;\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/todoDOM.ts?");

/***/ }),

/***/ "./src/modules/todoModel.ts":
/*!**********************************!*\
  !*** ./src/modules/todoModel.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.applyItemFunction = exports.applyFieldFunction = exports.removeItem = exports.addItem = exports.changeDueDate = exports.changePriority = exports.toggleItem = exports.todoItemFactory = exports.checklistItemFactory = void 0;\r\nconst checklistItemFactory = (description, done, dueDate) => {\r\n    return {\r\n        description,\r\n        done,\r\n        dueDate,\r\n    };\r\n};\r\nexports.checklistItemFactory = checklistItemFactory;\r\nconst todoItemFactory = (title, description, dueDate, priority = \"normal\", done = false, checklist = [], note = \"\", project = \"\") => {\r\n    return {\r\n        title,\r\n        description,\r\n        dueDate,\r\n        priority,\r\n        done,\r\n        checklist,\r\n        note,\r\n        project,\r\n    };\r\n};\r\nexports.todoItemFactory = todoItemFactory;\r\nconst toggleItem = (item) => {\r\n    return Object.assign(Object.assign({}, item), { done: !item.done });\r\n};\r\nexports.toggleItem = toggleItem;\r\nconst changePriority = (todoItem, priority) => {\r\n    return Object.assign(Object.assign({}, todoItem), { priority: priority });\r\n};\r\nexports.changePriority = changePriority;\r\nconst changeDueDate = (item, dueDate) => {\r\n    return Object.assign(Object.assign({}, item), { dueDate: dueDate });\r\n};\r\nexports.changeDueDate = changeDueDate;\r\nconst addItem = (item, itemList) => {\r\n    return itemList.concat([item]);\r\n};\r\nexports.addItem = addItem;\r\nconst removeItem = (idx, itemList) => {\r\n    return itemList.filter((_, index) => index != idx);\r\n};\r\nexports.removeItem = removeItem;\r\nconst applyFieldFunction = (field, fn, item) => {\r\n    return Object.assign(Object.assign({}, item), { [field]: fn(item[field]) });\r\n};\r\nexports.applyFieldFunction = applyFieldFunction;\r\nconst applyItemFunction = (idx, fn, itemList) => {\r\n    const newItem = fn(itemList[idx]);\r\n    return [...itemList.slice(0, idx), newItem, ...itemList.slice(idx + 1)];\r\n};\r\nexports.applyItemFunction = applyItemFunction;\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/todoModel.ts?");

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