import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { CustomerActions } from './store/actions/customer.actions';

@Component({
  selector: 'app-customer',
  imports: [
    RouterOutlet
  ],
  template: `
  <h1 class="display-3">
    Kundenverwaltung
  </h1>
  <router-outlet></router-outlet>
  `})
export class CustomerComponent {
  #store = inject(Store);

  constructor() {
    this.#store.dispatch(CustomerActions.loadCustomers());
  }

}
