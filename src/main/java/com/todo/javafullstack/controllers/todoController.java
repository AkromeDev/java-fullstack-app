package com.todo.javafullstack.controllers;

import com.todo.javafullstack.models.Todo;
import com.todo.javafullstack.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/app")
public class todoController {

    @Autowired
    private TodoService todoService;

    @GetMapping
    public void createTable() {
        todoService.createTodoTable();
    }

    @GetMapping("/todos")
    public List<Todo> getAll() {
        return todoService.getAll();
    }

    @GetMapping("/todo")
    public Todo getTodoById(@RequestParam Long id) {
        return todoService.getById(id);
    }

    @PostMapping("/todoList")
    @ResponseStatus(HttpStatus.OK)
    public void postTodos(@RequestBody List<Todo> todoList) {
        todoService.postTodos(todoList);
    }

    @PostMapping("/todos")
    @ResponseStatus(HttpStatus.OK)
    public void createTodo(@RequestBody Todo todo) {
        todoService.createTodo(todo);
    }
}
