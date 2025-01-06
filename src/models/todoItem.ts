export type TaskContentType = | string | { message: string; deadlineDate: Date };

let globalTodoId = 1;

export class TodoItem<T = TaskContentType> {
  public id: number;
  public content: T;
  public category: string;

  constructor(content: T, category: string = "Általános") {
    this.id = globalTodoId++;
    this.content = content;
    this.category = category;
  }
}
