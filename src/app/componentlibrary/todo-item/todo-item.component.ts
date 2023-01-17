import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component,Input } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent{
  @Input() todo:Todo
  @Output() todoDelete: EventEmitter<Todo>= new EventEmitter()
  @Output() todoCheck: EventEmitter<Todo>= new EventEmitter()
  
  done:boolean
  onClick=(todo:Todo )=>{
    this.todoDelete.emit(todo)
  }
  onCheck=(todo:Todo)=>{
    /*if(todo.active)
    todo.active=false
    else
    todo.active=true*/
    this.todoCheck.emit(todo)
  }
}
