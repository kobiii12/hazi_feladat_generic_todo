import { TodoItem } from "../models/todoItem";
import { LogAdd } from "../decorators/logDecorator";

export class TodoList<T> {
  private items: Map<number, TodoItem<T>>;

  constructor() {
    this.items = new Map<number, TodoItem<T>>();
  }

  @LogAdd
  addItem(item: TodoItem<T>): void {
    this.items.set(item.id, item);
    console.log(`Feladat (ID: ${item.id}) hozzáadva a(z) "${item.category}" kategóriához.`);
  }

  deleteItem(id: number): void {
    if (this.items.has(id)) {
      this.items.delete(id);
      console.log(`Feladat (ID: ${id}) törölve.`);
    } else {
      console.warn(`Nincs ilyen azonosítójú feladat: ${id}`);
    }
  }

  
  listItems(): void {
    console.log("Jelenlegi teendők listája:");
    this.items.forEach((value, key) => {
        const content =
            typeof value.content === "object"
                ? JSON.stringify(value.content, null, 2)
                : value.content;
        console.log(
            `• ID: ${key}, Tartalom: ${content}, Kategória: ${value.category}`
        );
    });
  }

  filterItemsByCategory(category: string): TodoItem<T>[] {
    const result: TodoItem<T>[] = [];
    this.items.forEach((item) => {
      if (item.category === category) {
        result.push(item);
      }
    });
    return result;
  }
}