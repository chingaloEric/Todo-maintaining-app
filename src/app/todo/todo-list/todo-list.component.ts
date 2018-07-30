import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AddTodo, DoneTodo } from '../../store';
import { AppState } from '../../store/reducers';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
 @Input() todos : {
   todoText: string, 
   todoShow: boolean
  };
    
  constructor(private store: Store<AppState>) {
   }

  ngOnInit() {
  }
  
  removeTodo(payload){
    this.store.dispatch(new DoneTodo(payload))
  }
}
