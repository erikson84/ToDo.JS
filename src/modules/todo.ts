import { Checklist } from "./checklist";
import { Note, noteFactory } from "./notes";

type Priority = "high" | "normal" | "low";

type TodoItem = {
    title: string;
    description: string;
    dueDate?: Date;
    priority: Priority;
    done: boolean;
    checklist: Checklist;
    notes: Note;
};

type TodoList = Array<TodoItem>;

const todoItemFactory = (
    title: string,
    description: string,
    dueDate?: Date,
    priority: Priority = "normal",
    done: boolean = false,
    checklist: Checklist = [],
    notes: Note = noteFactory("")
): TodoItem => {
    return {
        title,
        description,
        dueDate,
        priority,
        done,
        checklist,
        notes,
    };
};

const toggleTodoItem = (todoItem: TodoItem): TodoItem => {
    return { ...todoItem, done: !todoItem.done };
};

const changePriority = (todoItem: TodoItem, priority: Priority): TodoItem => {
    return { ...todoItem, priority: priority };
};

const changeDueTodoItem = (todoItem: TodoItem, dueDate: Date): TodoItem => {
    return { ...todoItem, dueDate: dueDate };
};

const addItem = (todoItem: TodoItem, todoList: TodoList): TodoList => {
    const newList = todoList.concat([todoItem]);
    return newList;
};

const removeItem = (idx: number, todoList: TodoList): TodoList => {
    const newList = [...todoList];
    newList.splice(idx, 1);
    return newList;
};

export {
    Priority,
    TodoItem,
    TodoList,
    todoItemFactory,
    toggleTodoItem,
    changePriority,
    changeDueTodoItem,
    addItem,
    removeItem,
};
