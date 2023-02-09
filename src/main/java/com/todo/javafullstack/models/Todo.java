package com.todo.javafullstack.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

/***
 * Todo Object using lombok annotations to increase readability and fewer
 * boiler plate code.
 */

@Getter
@Setter
@Component
//@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Todo {

//    @Id
//    @GeneratedValue
//    private long id;
    private String title;
    private String description;
    private LocalDate dueDate;
    private LocalDate completionDate;

    @Override
    public String toString(){
        return "Employee{title="+title+",description="+description+",dueDate="+dueDate+",completionDate="+completionDate+"}";
    }
}
