export class Todo {
    title: string;
    description: string;
    dueDate: Date;
    completionDate: Date;

constructor(    title: string,
                description: string,
                dueDate: Date,
                completionDate: Date,) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completionDate = completionDate;
}

static objectToTodo(object: any) {
    let todo = new Todo(object.title, object.description, object.dueDate, object.completionDate);
    return todo;
  }
}
