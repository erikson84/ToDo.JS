type checklistItem = {
    description: string;
    dueDate?: Date;
    done: boolean;
};

type checklist = Array<checklistItem>;

type note = {
    title: string;
    description?: string;
};

type notes = Array<note>;

type priority = "high" | "normal" | "low";

type todoItem = {
    title: string;
    description: string;
    dueDate: Date;
    priority: priority;
    checklist?: checklist;
    note?: notes;
};

type todoList = Array<todoItem>;

type project = {
    title: string;
    description?: string;
    todoList: todoList;
};

