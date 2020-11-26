import { Component, OnInit } from '@angular/core';

// import * as pouchDB from 'pouchdb';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pouchdb: any;
  constructor() {
    // this.pouchdb = new pouchDB('todo');
  }

  ngOnInit(): void {
    // this.addTodo('Bill payment');
  }

  // addToDo() {
  //   this.store.dispatch(
  //     new AddToDo({
  //       id: Math.random(),
  //       complete: false,
  //       task: this._toDo.task,
  //     })
  //   );
  // }
  // addTodo(text: any) {
  //   var todo = {
  //     _id: new Date().toISOString(),
  //     title: text,
  //     completed: false,
  //   };
  //   this.pouchdb.put(todo);
  // }
}
