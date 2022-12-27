import {
    TodoItem,
    TodoList,
    todoItemFactory,
    addItem,
    removeItem,
    applyFieldFunction,
    applyItemFunction,
    toggleItem,
} from "./todoModel";

const documentElements = {
    list: document.getElementById("list") as HTMLElement,
    titleInput: document.getElementById("title") as HTMLInputElement,
    button: document.getElementById("add") as HTMLButtonElement,
};

const buildItemFromForm = (): TodoItem => {
    return todoItemFactory(
        documentElements.titleInput.value as string,
        documentElements.titleInput.value as string
    );
};

const createItem = (index: number): HTMLElement => {
    const container = document.createElement("div");
    container.classList.add("itemList");
    container.dataset.index = index.toString();
    return container;
};

const addCheckbox = (
    container: HTMLElement,
    todoItem: TodoItem,
    todoList: TodoList,
    index: number
): HTMLElement => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todoItem.done;
    if (todoItem.done) container.classList.add("checkItem");
    checkbox.addEventListener("change", (ev: Event): void => {
        const stateList = applyItemFunction(index, toggleItem, todoList);
        controller(stateList);
    });
    container.appendChild(checkbox);
    return container;
};

const addItemTitle = (
    container: HTMLElement,
    todoItem: TodoItem
): HTMLElement => {
    const itemText = document.createElement("span");
    itemText.appendChild(document.createTextNode(todoItem.title));
    container.appendChild(itemText);
    return container;
};

const addButton = (
    container: HTMLElement,
    todoList: TodoList,
    index: number
): HTMLElement => {
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "✖";
    deleteButton.addEventListener("click", (ev: MouseEvent): void => {
        const stateList = removeItem(index, todoList);
        controller(stateList);
    });
    container.appendChild(deleteButton);
    return container;
};

const pipe = (arg: HTMLElement, fns: Array<any>): HTMLElement => {
    return fns.reduce((acc, fn) => fn(acc), arg);
};

const generateCompleteItem = (
    todoList: TodoList,
    todoItem: TodoItem,
    index: number
): HTMLElement => {
    const container = createItem(index);
    return pipe(container, [
        (cont: HTMLElement) => addCheckbox(cont, todoItem, todoList, index),
        (cont: HTMLElement) => addItemTitle(cont, todoItem),
        (cont: HTMLElement) => addButton(cont, todoList, index),
    ]);
};

const updateListDOM = (todoList: TodoList): Array<HTMLElement> => {
    const out = todoList.map((val: TodoItem, idx: number): HTMLElement => {
        return generateCompleteItem(todoList, val, idx);
    });
    return out;
};

const controller = (todoList: TodoList): void => {
    documentElements.list.textContent = "";
    updateListDOM(todoList).forEach((el) =>
        documentElements.list.appendChild(el)
    );

    const updateState = () => {
        const newItem: TodoItem = buildItemFromForm();
        const stateList: TodoList = addItem(newItem, todoList);
        documentElements.titleInput.value = "";
        controller(stateList);
    };

    documentElements.button.onclick = () => {
        if (!documentElements.titleInput.value) return;
        updateState();
    };
    documentElements.titleInput.onkeyup = (e) => {
        if (!documentElements.titleInput.value || e.key != "Enter") return;
        updateState();
    };
};

export { documentElements, buildItemFromForm, updateListDOM, controller };
