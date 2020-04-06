import { AppState } from './util/redux/accountant.interfaces';
import * as actions from './util/redux/accountant.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string;
  accountant: number;

  constructor( private store: Store<AppState> ) {
    this.title = 'Father';
  }

  ngOnInit() {
    this.store.select('count').subscribe( count => this.accountant = count);
  }

  protected add(): void {
    this.store.dispatch( actions.increment() );
  }

  protected subtract(): void {
    this.store.dispatch( actions.decrement() );
  }
}

