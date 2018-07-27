import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos : any;
  constructor() { 
    this.todos = []
  }

  ngOnInit() {
  }
  update(data: {todoText: string, todoShow: boolean}){
    this.todos.push(data)

  }

}
