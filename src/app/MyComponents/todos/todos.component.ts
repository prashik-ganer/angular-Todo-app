import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"    // Address of Todo file

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})


export class TodosComponent implements OnInit {

  
  localItem;
  todos:Todo[];
  constructor() {                                                               // When App Reloads
    // this.localItem = JSON.parse(localStorage.getItem("todos");

    
    this.localItem =  localStorage.getItem("todos")

    console.log(localStorage.getItem("todos"));                                 // Debug
    
    // this.localItem =  (localStorage.getItem('todos') || '{}');
    // this.currentName =  JSON.parse(localStorage.getItem('FileName') || '{}') as FileName;

    if(this.localItem == null){

        this.todos = [];
    }
    else{
        this.todos = JSON.parse(this.localItem);
    }

   }

  ngOnInit(): void {
  }

  // To delete a todo-item
  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);         //To get index of todos item
    this.todos.splice(index, 1)                      // Why 1 is added in splice?
    
    console.log(JSON.stringify(this.todos))

    localStorage.setItem("todos", JSON.stringify(this.todos));

  }

  // To Add a new todo - To add it
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);

    console.log(JSON.stringify(this.todos))


    console.log(this.todos)
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
  }
  
  


}
