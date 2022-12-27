import { TodoItem, projectFactory, ProjectList } from "./modules/todoModel";
import {
    documentElements,
    buildItem,
    updateListDOM,
    addElementToProject,
    controller,
} from "./modules/todoDOM";

const stateProject: ProjectList = [projectFactory("Default")];

controller(stateProject);
