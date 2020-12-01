import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { incremenet, decrement, reset } from '../state/counter.actions';

// import * as pouchDB from 'pouchdb';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pouchdb: any;
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    // TODO: This stream will connect to the current store `count` state
    this.count$ = store.select('count');
    // this.pouchdb = new pouchDB('todo');
  }

  ngOnInit(): void {
    // this.addTodo('Bill payment');
  }

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(incremenet());
    console.log(this.store);
  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
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
