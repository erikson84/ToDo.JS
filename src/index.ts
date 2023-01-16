import { projectFactory } from "./modules/project";
import { controller } from "./modules/todoDOM";

const stateProject = projectFactory("Default");

controller(stateProject);
