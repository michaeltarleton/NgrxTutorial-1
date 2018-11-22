import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { Increment, Decrement, Reset } from 'counter.action'

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'))
  }

  increment() {
    this.store.dispatch(new Increment())
  }

  decrement() {
    this.store.dispatch(new Decrement())
  }

  reset() {
    this.store.dispatch(new Reset())
  }

  ngOnInit() {}
}
