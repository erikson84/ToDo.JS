import { TodoList, TodoItem, todoItemFactory } from "./modules/todoModel";
import { controller } from "./modules/todoDOM";

const stateList: TodoList = [];

controller(stateList);
