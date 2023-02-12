package com.todo.javafullstack.respositories;

import com.todo.javafullstack.models.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Repository
public class TodoRepository {

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd LLLL yyyy");

    @Value("${spring.datasource.url}")
    protected String url;

    @Value("${spring.datasource.username}")
    protected String username;

    @Value("${spring.datasource.password}")
    protected String password;

    private static final String CREATE_TABLE_SQL =
            "CREATE TABLE Todo (" +
            "id BIGINT auto_increment PRIMARY KEY," +
            "title VARCHAR NOT NULL," +
            "description VARCHAR," +
            "due_date VARCHAR NOT NULL," +
            "completion_date VARCHAR)";

    private static final String INSERT_SQL_TODO =
            "INSERT into Todo(title, description, due_Date, completion_Date) VALUES (?, ?, ?, ?)";

    private static final String SELECT_ALL_SQL =
            "SELECT * FROM Todo";

    private static final String SELECT_BY_ID_SQL =
            "SELECT * FROM Todo WHERE id=?";

    @Autowired
    public void createTable() {
        try (Connection connection = getConnecion()) {
            Statement statement = connection.createStatement();
            statement.executeUpdate(CREATE_TABLE_SQL);
            System.out.println("Table has been created");
        } catch (SQLException sqlException) {
//            TODO: Add log4j
            System.out.println("SQL Error in createTable(): " + sqlException);
        }
    }

    public void createTodo(Todo todo) {
        try (Connection connection = getConnecion()) {
            PreparedStatement preparedStatement = connection.prepareStatement(INSERT_SQL_TODO);
            preparedStatement.setString(1, todo.getTitle());
            preparedStatement.setString(2, todo.getDescription());
            preparedStatement.setString(3, todo.getDueDate().format(formatter));
            preparedStatement.setString(4, todo.getCompletionDate().format(formatter));
            preparedStatement.executeUpdate();
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
    }

    public List<Todo> getAll() {
        try (Connection connection = getConnecion()) {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(SELECT_ALL_SQL);
            List<Todo> todoList = new ArrayList<>();
            while(resultSet.next()) {
                todoList.add(resultSetToTodo(resultSet));
            }
            return todoList;
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return null;
    }

    public Todo getById(Long id) {
        try (Connection connection = getConnecion()) {
            PreparedStatement preparedStatement = connection.prepareStatement(SELECT_BY_ID_SQL);
            preparedStatement.setString(1, id.toString());
            ResultSet result = preparedStatement.executeQuery();
            result.next();
            return resultSetToTodo(result);
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return null;
    }

    private Connection getConnecion() {
        try {
            return DriverManager.getConnection(url, username, password);
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return null;
    }

    private Todo resultSetToTodo(ResultSet result) throws SQLException {
//        Long id = result.getLong("id");
        String title = result.getString("title");
        String description = result.getString("description");
        LocalDate dueDate = LocalDate.parse(result.getString("due_date"), formatter);
        LocalDate completionDate = LocalDate.parse(result.getString("completion_date"), formatter);
        return new Todo(title, description, dueDate, completionDate);
    }

    public void postTodos(List<Todo> todoList) {
    }
}
