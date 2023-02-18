import { OnInit, Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `
    <div class="row">
      <div class="col-md-12">
        <div class="my-3">
          <app-counter-output></app-counter-output>
        </div>
        <div class="my-3">
          <app-counter-btn></app-counter-btn>
        </div>
      </div>
    </div>
  `,
})
export class Counter {
  constructor() {}
}
