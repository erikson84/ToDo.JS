import {
    TodoItem,
    TodoList,
    todoItemFactory,
    addItem,
    removeItem,
    Project,
    ProjectList,
    applyFieldFunction,
} from "./todoModel";

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

const removeElementFromProject = (project: Project, e: MouseEvent): Project => {
    const originDiv: HTMLElement = e.composedPath()[1] as HTMLElement;
    const idx: string | undefined = originDiv.dataset.index;
    if (!idx) return project;
    const stateProject: Project = applyFieldFunction(
        "todoList",
        (x) => removeItem(+idx, x),
        project
    );
    return stateProject;
};

const addElementToProject = (project: Project, todoItem: TodoItem): Project => {
    const stateProject: Project = applyFieldFunction(
        "todoList",
        (x) => addItem(todoItem, x),
        project
    );
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
        const stateProject = removeElementFromProject(project, ev);
        controller([stateProject]);
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

const controller = (projects: ProjectList): void => {
    documentElements.list.textContent = "";
    updateListDOM(projects[0]).forEach((el) =>
        documentElements.list.appendChild(el)
    );
    documentElements.button.onclick = () => {
        if (!documentElements.titleInput.value) return;
        const newItem: TodoItem = buildItem();
        const stateProject: Project = addElementToProject(projects[0], newItem);
        console.log(stateProject.todoList);
        documentElements.titleInput.value = "";
        controller([stateProject]);
    };
};

export {
    documentElements,
    buildItem,
    updateListDOM,
    addElementToProject,
    removeElementFromProject,
    controller,
};
