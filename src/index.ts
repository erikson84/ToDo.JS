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
    done: boolean;
    checklist?: checklist;
    note?: notes;
};

type todoList = Array<todoItem>;

type project = {
    title: string;
    description?: string;
    todoList: todoList;
};

const todoItemFactory = (title: string,
                         description: string,
                         dueDate: Date,
                         priority: priority,
                         done: boolean,
                         checklist?: checklist,
                         note?: notes): todoItem => {
    
    
    return {
        title,
        description,
        dueDate,
        priority,
        done,
        checklist,
        note,
    }
};

const testTodoList = todoItemFactory('Tarefa 1', 'Fazer a tarefa um.', new Date(), 'normal', false);

console.log(testTodoList);