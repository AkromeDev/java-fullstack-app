package com.todo.javafullstack.services;

import com.todo.javafullstack.models.Todo;
import com.todo.javafullstack.respositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.List;

@Service
public class TodoService implements Serializable {

    @Autowired
    TodoRepository todoRepository;

    public void createTodoTable() {
        todoRepository.createTable();
    }

    public List<Todo> getAll() {
        return todoRepository.getAll();
    }

    public void createTodo(Todo todo) {
        todoRepository.createTodo(todo);
    }

    public Todo getById(Long id) {
        return todoRepository.getById(id);
    }

    public void postTodos(List<Todo> todoList) {
        todoRepository.postTodos(todoList);
    }
}
