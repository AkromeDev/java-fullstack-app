import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit{
  todoList: Todo[] = [];
  displayedColumns: string[] = ['title', 'description', 'dueDate', 'completionDate'];
  dataSource = new MatTableDataSource<Todo>();
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.postInitialTodos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  postInitialTodos() {
    console.log('1111: postInitialTodos');
    this.todoService.postInitialTodos().subscribe({
      next: (data) => console.log("data posted by post: " + data),
      error: (e) => console.error(e),
      complete: () => this.getTodos()}
    )
    this.todoService.postInitialTodos();
  }
  
  getTodos() {
    console.log('2222: getTodos');
    this.todoService.getTodos().subscribe({
      next: (data) => this.extractData(data),
      error: (e) => console.error(e),
      complete: () => this.updateTodos(),
    })
  }
    
  updateTodos() {
    console.log('3333: updateTodos');
    console.log('todoList: ' + this.todoList);
    this.dataSource = new MatTableDataSource(this.todoList);
    this.dataSource.sort = this.sort;
    this.dataSource.sort = this.sort;
    console.log("DONENENNEENNE update");
  }

  private extractData(objectArray: any) {
    let updatedTodoList: Todo[] = [];
    objectArray.map( (a: any) => updatedTodoList.push(Todo.objectToTodo(a)));
    this.todoList = updatedTodoList;
  }
  }

