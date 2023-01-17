import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[]
  localItem: string
  constructor(){
    this.localItem = localStorage.getItem("todos")
    if(this.localItem==null){
      this.todos=[]
    } else{
      this.todos = JSON.parse(this.localItem)
    }
  }
  deleteTodo=(e:any)=>{
    this.todos.splice(this.todos.indexOf(e),1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  taskAdd=(e:Todo)=>{
    this.todos.push(e)

    localStorage.setItem("todos", JSON.stringify(this.todos))//save in browsr memory
  
  }
  toggleTodo=(e:Todo)=>{
    this.todos[this.todos.indexOf(e)].active=!this.todos[this.todos.indexOf(e)].active
    localStorage.setItem("todos", JSON.stringify(this.todos))//save in browsr memory
  
  }
}
