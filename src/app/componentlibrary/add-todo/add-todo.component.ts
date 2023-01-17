import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() addTask: EventEmitter<Todo>=new EventEmitter()
  title: string
  desc: string
  addtodo = () => {
    const todo={
      sno:10,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.addTask.emit(todo)
  }
  
}
