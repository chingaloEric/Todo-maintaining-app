import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  todoCurrentText = '';
  todoDoneStatus = false;
  constructor() { }
  @Output() todoAdd = new EventEmitter<{todoText: string, todoDone: boolean}> ();
  ngOnInit() {
  }

  onTodoAdd(){
    const data = {
      todoText : this.todoCurrentText,
      todoDone: this.todoDoneStatus
    }
    console.log(data.todoDone)
   this.todoAdd.emit(data);

   this.todoCurrentText = '';
  }

}
