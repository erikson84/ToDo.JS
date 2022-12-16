import { Project } from "./project";
import { TodoItem, todoItemFactory } from "./todo";

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

const removeItem = (project: Project, e: MouseEvent): void => {
    const originDiv: HTMLElement = e.composedPath()[1] as HTMLElement;
    const idx: string | undefined = originDiv.dataset.index;
    if (!idx) return;
    project.todoList.splice(+idx, 1);
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
        removeItem(project, ev);
        updateListDOM(project);
    });
    container.appendChild(deleteButton);

    return container;
};

const updateListDOM = (project: Project): void => {
    documentElements.list.textContent = "";
    project.todoList.forEach((val: TodoItem, idx: number): void => {
        const item = generateItem(project, val, idx);
        documentElements.list.appendChild(item);
    });
};

export { documentElements, buildItem, updateListDOM };
