import { projectFactory } from "./modules/project";

import { documentElements, buildItem, updateListDOM } from "./modules/todoDOM";

const defaultProject = projectFactory("Default");

documentElements.button.addEventListener("click", () => {
    if (!documentElements.titleInput.value) return;
    const newItem = buildItem();
    defaultProject.todoList.push(newItem);
    updateListDOM(defaultProject);
});
