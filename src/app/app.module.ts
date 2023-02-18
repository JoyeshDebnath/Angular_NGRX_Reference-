import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Counter } from './Counter/Counter.component';
import { CounterButton } from './Counter/counterButton.component';
import { CounterOutput } from './Counter/counterOutput.component';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './Counter/state/counter.reducer';
@NgModule({
  declarations: [AppComponent, Counter, CounterButton, CounterOutput],
  imports: [
    BrowserModule,
    NgbModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
