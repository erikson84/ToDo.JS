import { todoItemFactory } from "./modules/todo";

const testTodoList = todoItemFactory(
    "Tarefa 1",
    "Fazer a tarefa um.",
    new Date(),
    "normal",
    false
);

console.log(testTodoList);
