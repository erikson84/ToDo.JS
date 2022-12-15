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

let testTodoList: TodoList = [
    todoItemFactory(
        "Tarefa 1",
        "Fazer a tarefa um.",
        new Date(),
        "normal",
        false
    ),
];

console.log(testTodoList);

console.log(toggleTodoItem(testTodoList[0]));
