import { divide } from './../../util/redux/accountant.actions';
import { AppState } from './../../util/redux/accountant.interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../util/redux/accountant.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {

  title: string;
  count: number;

  @Input() childAccountant: number;

  constructor( private store: Store<AppState> ) {
    this.title = 'Child accountant';
   }

  ngOnInit() {
    this.store.select('count').subscribe( count => this.count = count);
  }

  protected multiply(): void {
    this.store.dispatch(actions.multiply({ baseNumber: 2}));
  }

  protected divide(): void {
    this.store.dispatch(actions.divide({ baseNumber: 2}));
  }

}
