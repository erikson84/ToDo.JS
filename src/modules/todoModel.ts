type Priority = "high" | "normal" | "low";
type Note = string;
type Project = string;

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
    project: Project;
};

type TodoList = Array<TodoItem>;

const todoItemFactory = (
    title: string,
    description: string,
    dueDate?: Date,
    priority: Priority = "normal",
    done: boolean = false,
    checklist: Checklist = [],
    note: Note = "",
    project: Project = ""
): TodoItem => {
    return {
        title,
        description,
        dueDate,
        priority,
        done,
        checklist,
        note,
        project,
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

const applyFieldFunction = <T, K extends keyof T>(
    field: K,
    fn: (input: T[K]) => T[K],
    item: T
): T => {
    return { ...item, [field]: fn(item[field]) };
};

const applyItemFunction = <T>(
    idx: number,
    fn: (input: T) => T,
    itemList: T[]
): T[] => {
    const newItem = fn(itemList[idx]);
    return [...itemList.slice(0, idx), newItem, ...itemList.slice(idx + 1)];
};

export {
    Note,
    Priority,
    Checklist,
    ChecklistItem,
    TodoItem,
    TodoList,
    Project,
    checklistItemFactory,
    todoItemFactory,
    toggleItem,
    changePriority,
    changeDueDate,
    addItem,
    removeItem,
    applyFieldFunction,
    applyItemFunction,
};
