import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { incremenet, decrement, reset } from '../state/counter.actions';
import * as TodoActions from '../state/todo.actions';
import { Todo } from '../state/todo.model';
import { TodoState } from '../state/todo.state';

// import * as pouchDB from 'pouchdb';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pouchdb: any;
  count$: Observable<number>;
  todos$: Observable<any>;

  constructor(
    private store: Store<{ count: number }>,
    private todoStore: Store<{ todo: Todo }>
  ) {
    // TODO: This stream will connect to the current store `count` state
    this.count$ = store.select('count');
    this.todos$ = todoStore.select('todo');
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

  addTodo(task: string) {
    this.todoStore.dispatch(
      new TodoActions.AddTodo({
        id: Math.random(),
        task: task,
        complete: false,
      })
    );
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
