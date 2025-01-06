import { TaskContentType } from "../models/todoItem";

export function isObjectTask(
  content: TaskContentType
): content is { message: string; deadlineDate: Date } {
  return (
    typeof content === "object" &&
    content !== null &&
    "message" in content &&
    "dueDate" in content &&
    content.dueDate instanceof Date
  );
}