import { AppState } from './../../util/redux/accountant.interfaces';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../util/redux/accountant.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: []
})
export class GrandchildComponent implements OnInit {

  title: string;
  count: number;

  constructor( private store: Store<AppState>) {
    this.title = 'Grandchild accountant';
  }

  ngOnInit() {
    this.store.select('count').subscribe( count => this.count = count);
  }

  protected reset(): void {
    this.store.dispatch( actions.reset() );
  }

}
