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

const buildItem = (): TodoItem => {
    return todoItemFactory(
        documentElements.titleInput.value as string,
        documentElements.titleInput.value as string
    );
};

const generateItem = (
    todoList: TodoList,
    todoItem: TodoItem,
    index: number
): HTMLElement => {
    const container = document.createElement("div");
    container.classList.add("itemList");
    container.dataset.index = index.toString();

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todoItem.done;
    checkbox.name = "checkbox" + index;
    if (todoItem.done) container.classList.add("checkItem");
    checkbox.addEventListener("change", (ev: Event): void => {
        const stateList = applyItemFunction(index, toggleItem, todoList);
        controller(stateList);
    });
    container.appendChild(checkbox);

    const itemText = document.createElement("span");
    itemText.appendChild(document.createTextNode(todoItem.title));
    container.appendChild(itemText);

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

const updateListDOM = (todoList: TodoList): Array<HTMLElement> => {
    const out = todoList.map((val: TodoItem, idx: number): HTMLElement => {
        return generateItem(todoList, val, idx);
    });
    return out;
};

const controller = (todoList: TodoList): void => {
    documentElements.list.textContent = "";
    updateListDOM(todoList).forEach((el) =>
        documentElements.list.appendChild(el)
    );

    const updateState = () => {
        const newItem: TodoItem = buildItem();
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

export { documentElements, buildItem, updateListDOM, controller };
