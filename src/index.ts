import {
    Priority,
    TodoItem,
    TodoList,
    todoItemFactory,
    toggleTodoItem,
    changePriority,
    changeDueTodoItem,
} from "./modules/todo";

import {
    ChecklistItem,
    Checklist,
    checklistItemFactory,
    toggleChecklistItem,
    changeChecklistDate,
} from "./modules/checklist";

import { Note, NoteList, noteFactory } from "./modules/notes";

import { Project, projectFactory } from "./modules/project";

import {documentElements, buildItem, updateListDOM} from "./modules/todoDOM";

const defaultProject = projectFactory("Default");

documentElements.button.addEventListener("click", () => {
    if (!documentElements.titleInput.value) return
    const newItem = buildItem();
    defaultProject.todoList.push(newItem);
    updateListDOM(defaultProject);
})