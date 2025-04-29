import { Component, inject, Input } from '@angular/core';
import { Customer } from '../../model/customer';
import { CurrencyPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { CustomerActions } from '../../store/actions/customer.actions';


@Component({
  selector: 'app-customer-table',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.scss'
})
export class CustomerTableComponent {

  #store = inject(Store)

  @Input()
  tableData: Customer[] | null = [];

  deleteCustomer(id: number) {
    this.#store.dispatch(CustomerActions.deleteCustomer({id}));
  }

}
