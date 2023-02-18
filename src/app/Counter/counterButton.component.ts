import { OnInit, Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './state/counter.actions';
@Component({
  selector: 'app-counter-btn',
  template: `
    <div>
      <button class="btn btn-primary" (click)="onIncrement()">ADD</button>&nbsp;
      <button class="btn btn-danger" (click)="onDecreament()">DEDUCT</button
      >&nbsp;
      <button class="btn btn-warning" (click)="onReset()">RESET</button>
    </div>
  `,
})
export class CounterButton {
  constructor(private store: Store<{ counter: { count: number } }>) {}

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecreament() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
