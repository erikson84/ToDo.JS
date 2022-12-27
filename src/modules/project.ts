import { TodoList } from "./todoModel";

type Project = {
    title: string;
    todoList: TodoList;
    description?: string;
};

const projectFactory = (
    title: string,
    todoList: TodoList = [],
    description?: string
): Project => {
    return {
        title,
        todoList,
        description,
    };
};

export { Project, projectFactory };
