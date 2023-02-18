import { OnInit, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  template: `
    <div>
      <h3 style="color: white">The Counter Value is : {{ counter }}</h3>
    </div>
  `,
})
export class CounterOutput implements OnInit {
  counter: number;
  constructor(private store: Store<{ counter: { count: number } }>) {}

  ngOnInit() {
    this.store.select('counter').subscribe((data) => {
      this.counter = data.count;
    });
  }
}
