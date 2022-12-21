import { Project } from "./project";
import {
    TodoItem,
    TodoList,
    todoItemFactory,
    addItem,
    removeItem,
} from "./todo";

const documentElements = {
    list: document.getElementById("list") as HTMLElement,
    titleInput: document.getElementById("title") as HTMLInputElement,
    button: document.getElementById("add") as HTMLButtonElement,
};

const buildItem = (): TodoItem => {
    return todoItemFactory(
        documentElements.titleInput.value as string,
        documentElements.titleInput.value as string
    );
};

const removeItemFromProject = (project: Project, e: MouseEvent): Project => {
    const originDiv: HTMLElement = e.composedPath()[1] as HTMLElement;
    const idx: string | undefined = originDiv.dataset.index;
    if (!idx) return project;
    const newProject = { ...project };
    newProject.todoList = removeItem(+idx, newProject.todoList);
    return newProject;
};

const addItemToProject = (project: Project, todoItem: TodoItem): Project => {
    const stateProject: Project = { ...project };
    console.log(stateProject.todoList);
    stateProject.todoList = addItem(todoItem, stateProject.todoList);
    console.log(stateProject.todoList);
    return stateProject;
};

const generateItem = (
    project: Project,
    todoItem: TodoItem,
    index: number
): HTMLElement => {
    const container = document.createElement("div");
    container.dataset.index = index.toString();
    const itemText = document.createElement("span");
    itemText.textContent = todoItem.title;
    container.appendChild(itemText);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✖";
    deleteButton.addEventListener("click", (ev: MouseEvent): void => {
        const stateProject = removeItemFromProject(project, ev);
        controller(stateProject);
    });
    container.appendChild(deleteButton);

    return container;
};

const updateListDOM = (project: Project): Array<HTMLElement> => {
    const out = project.todoList.map(
        (val: TodoItem, idx: number): HTMLElement => {
            return generateItem(project, val, idx);
        }
    );
    return out;
};

const controller = (project: Project): void => {
    documentElements.list.textContent = "";
    updateListDOM(project).forEach((el) =>
        documentElements.list.appendChild(el)
    );
    documentElements.button.onclick = () => {
        if (!documentElements.titleInput.value) return;
        const newItem: TodoItem = buildItem();
        const stateProject: Project = addItemToProject(project, newItem);
        console.log(stateProject.todoList);
        documentElements.titleInput.value = "";
        controller(stateProject);
    };
};

export {
    documentElements,
    buildItem,
    updateListDOM,
    addItemToProject,
    controller,
};
