import { TodoList } from "./services/todoList";
import { TodoItem, TaskContentType } from "./models/todoItem";
import { isObjectTask } from "./utils/typeGuards";

function main() {
  const todoList = new TodoList<TaskContentType>();

  const stringTask = new TodoItem("Bevásárlás");
  todoList.addItem(stringTask);

  const objectTask = new TodoItem(
    {
      message: "Csekkek befizetése",
      deadlineDate: new Date(Date.now() + 86400000),
    },
    "Pénzügy"
  );
  todoList.addItem(objectTask);

  const workTask = new TodoItem("Termékfeltöltés", "Munka");
  todoList.addItem(workTask);

  if (isObjectTask(objectTask.content)) {
    console.log(
      `Ez egy objektum alapú feladat, üzenet: ${objectTask.content.message}`
    );
  }

  console.log("\n-- ÖSSZES FELADAT KIÍRÁSA --");
  todoList.listItems();

  console.log('\n-- "Munka" KATEGÓRIA SZERINTI SZŰRÉS --');
  const munkaFeladatok = todoList.filterItemsByCategory("Munka");
  munkaFeladatok.forEach((item) => {
    console.log(
      `Munka kategóriájú feladat -> ID: ${item.id}, Tartalom: ${JSON.stringify(item.content)}`
    );
  });

  console.log("\n-- FELADAT TÖRLÉSE ID = 1 --");
  todoList.deleteItem(1);

  console.log("\n-- ÖSSZES FELADAT KIÍRÁSA TÖRLÉS UTÁN --");
  todoList.listItems();
}

main();