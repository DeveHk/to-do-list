import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './componentlibrary/todos/todos.component';
import { NavbarComponent } from './componentlibrary/navbar/navbar.component';
import { TodoItemComponent } from './componentlibrary/todo-item/todo-item.component';
import { AddTodoComponent } from './componentlibrary/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './componentlibrary/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NavbarComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
