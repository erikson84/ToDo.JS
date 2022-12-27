type Priority = "high" | "normal" | "low";
type Note = string;

type ChecklistItem = {
    description: string;
    done: boolean;
    dueDate?: Date;
};

type Checklist = Array<ChecklistItem>;

const checklistItemFactory = (
    description: string,
    done: boolean,
    dueDate?: Date
): ChecklistItem => {
    return {
        description,
        done,
        dueDate,
    };
};

type TodoItem = {
    title: string;
    description: string;
    dueDate?: Date;
    priority: Priority;
    done: boolean;
    checklist: Checklist;
    note: Note;
};

type TodoList = Array<TodoItem>;

const todoItemFactory = (
    title: string,
    description: string,
    dueDate?: Date,
    priority: Priority = "normal",
    done: boolean = false,
    checklist: Checklist = [],
    note: Note = ""
): TodoItem => {
    return {
        title,
        description,
        dueDate,
        priority,
        done,
        checklist,
        note,
    };
};

const toggleItem = <T extends { done: boolean }>(item: T): T => {
    return { ...item, done: !item.done };
};

const changePriority = (todoItem: TodoItem, priority: Priority): TodoItem => {
    return { ...todoItem, priority: priority };
};

const changeDueDate = <T extends { dueDate: Date }>(
    item: T,
    dueDate: Date
): T => {
    return { ...item, dueDate: dueDate };
};

const addItem = <T>(item: T, itemList: T[]): T[] => {
    return itemList.concat([item]);
};

const removeItem = <T>(idx: number, itemList: T[]): T[] => {
    return itemList.filter((_, index) => index != idx);
};

export {
    Note,
    Priority,
    Checklist,
    ChecklistItem,
    TodoItem,
    TodoList,
    checklistItemFactory,
    todoItemFactory,
    toggleItem,
    changePriority,
    changeDueDate,
    addItem,
    removeItem,
};
