import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { AddTodo } from '../store';
import { Observable } from 'rxjs/Observable';
import { getTodos } from '../store/selectors/todo.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.todos$ = store.select(getTodos);
  }

  ngOnInit() {}

  update(data: { todoText: string; todoShow: boolean }) {
    const payload = { todoText: data.todoText, todoShow: data.todoShow };
    this.store.dispatch(new AddTodo(payload));
  }
}
