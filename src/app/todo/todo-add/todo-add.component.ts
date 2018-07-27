import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  todoCurrentText: '';
  todoShowStatus: true; //is not passed, rather assumed to be 'undifined'
  constructor() { }
  @Output() todoAdd = new EventEmitter<{todoText: string, todoShow: boolean}> ();
  ngOnInit() {
  }

  onTodoAdd(){
    const data = {
      todoText : this.todoCurrentText,
      todoShow: this.todoShowStatus
    }
   this.todoAdd.emit(data);

   this.todoCurrentText = '';
  }

}
