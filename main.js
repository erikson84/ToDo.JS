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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst project_1 = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.ts\");\nconst todoDOM_1 = __webpack_require__(/*! ./modules/todoDOM */ \"./src/modules/todoDOM.ts\");\nconst stateProject = (0, project_1.projectFactory)(\"Default\");\n(0, todoDOM_1.controller)(stateProject);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/modules/notes.ts":
/*!******************************!*\
  !*** ./src/modules/notes.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.noteFactory = void 0;\nconst noteFactory = (description) => {\n    return { description };\n};\nexports.noteFactory = noteFactory;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/notes.ts?");

/***/ }),

/***/ "./src/modules/project.ts":
/*!********************************!*\
  !*** ./src/modules/project.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.projectFactory = void 0;\nconst projectFactory = (title, todoList = [], description) => {\n    return {\n        title,\n        todoList,\n        description,\n    };\n};\nexports.projectFactory = projectFactory;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/project.ts?");

/***/ }),

/***/ "./src/modules/todo.ts":
/*!*****************************!*\
  !*** ./src/modules/todo.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.removeItem = exports.addItem = exports.changeDueTodoItem = exports.changePriority = exports.toggleTodoItem = exports.todoItemFactory = void 0;\nconst notes_1 = __webpack_require__(/*! ./notes */ \"./src/modules/notes.ts\");\nconst todoItemFactory = (title, description, dueDate, priority = \"normal\", done = false, checklist = [], notes = (0, notes_1.noteFactory)(\"\")) => {\n    return {\n        title,\n        description,\n        dueDate,\n        priority,\n        done,\n        checklist,\n        notes,\n    };\n};\nexports.todoItemFactory = todoItemFactory;\nconst toggleTodoItem = (todoItem) => {\n    todoItem.done = !todoItem.done;\n    return todoItem;\n};\nexports.toggleTodoItem = toggleTodoItem;\nconst changePriority = (todoItem, priority) => {\n    todoItem.priority = priority;\n    return todoItem;\n};\nexports.changePriority = changePriority;\nconst changeDueTodoItem = (todoItem, dueDate) => {\n    todoItem.dueDate = dueDate;\n    return todoItem;\n};\nexports.changeDueTodoItem = changeDueTodoItem;\nconst addItem = (todoItem, todoList) => {\n    const newList = todoList.concat([todoItem]);\n    return newList;\n};\nexports.addItem = addItem;\nconst removeItem = (idx, todoList) => {\n    const newList = [...todoList];\n    newList.splice(idx, 1);\n    return newList;\n};\nexports.removeItem = removeItem;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/todo.ts?");

/***/ }),

/***/ "./src/modules/todoDOM.ts":
/*!********************************!*\
  !*** ./src/modules/todoDOM.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.controller = exports.addItemToProject = exports.updateListDOM = exports.buildItem = exports.documentElements = void 0;\nconst todo_1 = __webpack_require__(/*! ./todo */ \"./src/modules/todo.ts\");\nconst documentElements = {\n    list: document.getElementById(\"list\"),\n    titleInput: document.getElementById(\"title\"),\n    button: document.getElementById(\"add\"),\n};\nexports.documentElements = documentElements;\nconst buildItem = () => {\n    return (0, todo_1.todoItemFactory)(documentElements.titleInput.value, documentElements.titleInput.value);\n};\nexports.buildItem = buildItem;\nconst removeItemFromProject = (project, e) => {\n    const originDiv = e.composedPath()[1];\n    const idx = originDiv.dataset.index;\n    if (!idx)\n        return project;\n    const newProject = Object.assign({}, project);\n    newProject.todoList = (0, todo_1.removeItem)(+idx, newProject.todoList);\n    return newProject;\n};\nconst addItemToProject = (project, todoItem) => {\n    const stateProject = Object.assign({}, project);\n    console.log(stateProject.todoList);\n    stateProject.todoList = (0, todo_1.addItem)(todoItem, stateProject.todoList);\n    console.log(stateProject.todoList);\n    return stateProject;\n};\nexports.addItemToProject = addItemToProject;\nconst generateItem = (project, todoItem, index) => {\n    const container = document.createElement(\"div\");\n    container.dataset.index = index.toString();\n    const itemText = document.createElement(\"span\");\n    itemText.textContent = todoItem.title;\n    container.appendChild(itemText);\n    const deleteButton = document.createElement(\"button\");\n    deleteButton.textContent = \"✖\";\n    deleteButton.addEventListener(\"click\", (ev) => {\n        const stateProject = removeItemFromProject(project, ev);\n        controller(stateProject);\n    });\n    container.appendChild(deleteButton);\n    return container;\n};\nconst updateListDOM = (project) => {\n    const out = project.todoList.map((val, idx) => {\n        return generateItem(project, val, idx);\n    });\n    return out;\n};\nexports.updateListDOM = updateListDOM;\nconst controller = (project) => {\n    documentElements.list.textContent = \"\";\n    updateListDOM(project).forEach((el) => documentElements.list.appendChild(el));\n    documentElements.button.onclick = () => {\n        if (!documentElements.titleInput.value)\n            return;\n        const newItem = buildItem();\n        const stateProject = addItemToProject(project, newItem);\n        console.log(stateProject.todoList);\n        documentElements.titleInput.value = \"\";\n        controller(stateProject);\n    };\n};\nexports.controller = controller;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/todoDOM.ts?");

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