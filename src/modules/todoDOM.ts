import { Project } from "./project"
import { TodoItem, todoItemFactory } from "./todo";

const documentElements = {
    list: document.getElementById("list"),
    titleInput: document.getElementById("title") as HTMLInputElement,
    button: document.getElementById("add")
}

const buildItem = (): TodoItem => {
    return todoItemFactory(documentElements.titleInput.value as string, documentElements.titleInput.value as string);
}

const removeItem = () => {console.log("removeItem")};

const generateItem = (todoItem: TodoItem): HTMLElement => {
    const container = document.createElement("div");
    const itemText = document.createElement("span");
    itemText.textContent = todoItem.title;
    container.appendChild(itemText);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✖";
    deleteButton.addEventListener("click", removeItem);
    container.appendChild(deleteButton);

    return container;

}

const updateListDOM = (project: Project): void => {
    project.todoList.map((val: TodoItem): void => {
        const item = generateItem(val);
        documentElements.list?.appendChild(item);
    })
};