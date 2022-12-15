import { Checklist } from "./checklist";
import { NoteList } from "./notes";

type Priority = "high" | "normal" | "low";

type TodoItem = {
    title: string;
    description: string;
    dueDate?: Date;
    priority: Priority;
    done: boolean;
    checklist: Checklist;
    notes: NoteList;
};

type TodoList = Array<TodoItem>;

const todoItemFactory = (
    title: string,
    description: string,
    dueDate?: Date,
    priority: Priority = "normal",
    done: boolean = false,
    checklist: Checklist = [],
    notes: NoteList = []
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
    todoItem.done = !todoItem.done;
    return todoItem;
};

const changePriority = (todoItem: TodoItem, priority: Priority): TodoItem => {
    todoItem.priority = priority;
    return todoItem;
};

const changeDueTodoItem = (todoItem: TodoItem, dueDate: Date): TodoItem => {
    todoItem.dueDate = dueDate;
    return todoItem;
};

export {
    Priority as priority,
    TodoItem,
    TodoList,
    todoItemFactory,
    toggleTodoItem,
    changePriority,
    changeDueTodoItem,
};
