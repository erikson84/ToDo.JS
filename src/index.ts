import { projectFactory } from "./modules/project";
import { TodoItem } from "./modules/todo";
import {
    documentElements,
    buildItem,
    updateListDOM,
    addItemToProject,
    controller,
} from "./modules/todoDOM";

const stateProject = projectFactory("Default");

controller(stateProject);
