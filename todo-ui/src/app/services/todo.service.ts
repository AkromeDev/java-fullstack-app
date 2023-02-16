import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: any[] = [
    {title: "postInitialTodos", description: 'Hydrogen', dueDate: new Date("2018-01-22"), completionDate: new Date("2018-01-22")},
    {title: "postInitialTodos", description: 'Helium', dueDate: new Date("2023-01-05"), completionDate: new Date("2023-02-04")},
    {title: "postInitialTodos", description: 'Lithium', dueDate: new Date("2023-01-05"), completionDate: new Date("2023-02-04")},
  ];

  todo: any = 
    {title: "1", 
    description: 'Hydrogen', 
    dueDate: new Date("2018-01-22"), 
    completionDate: new Date("2018-01-22")};

  constructor(private http : HttpClient) { }

  getTodos() {
    return this.http.get('/server/app/todos')
  }

  postInitialTodos() {
    return this.http.post('/server/app/todoList', this.todos)
  }

  postTodo(todos: any) {
    return this.http.post('/server/app/todos', todos)
  }
}


