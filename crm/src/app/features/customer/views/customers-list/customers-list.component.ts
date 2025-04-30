import { Component, inject } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerTableComponent } from "../../components/customer-table/customer-table.component";
import { Store } from '@ngrx/store';
import { selectCustomerErrorState, SelectCustomerLoadingState, selectCustomers } from '../../store/selectors/customer.selectors';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { LoadingIndicatorComponent } from "../../../../components/loading-indicator/loading-indicator.component";
import { CustomerActions } from '../../store/actions/customer.actions';
import { ErrorBoxComponent } from "../../../../components/error-box/error-box.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  imports: [
    AsyncPipe,
    CustomerTableComponent,
    LoadingIndicatorComponent,
    ErrorBoxComponent,
    RouterLink,
],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss'
})
export class CustomersListComponent {
  
  // #customerService = inject(CustomersService)
  #store = inject(Store)

  loadingState$ = this.#store.select(SelectCustomerLoadingState);
  customers$: Observable<Customer[]> = this.#store.select((selectCustomers));
  error$: Observable<string | null> = this.#store.select(selectCustomerErrorState);

  loadCustomers() {
    this.#store.dispatch(CustomerActions.loadCustomers());
  }


  /* ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.#customerService.getAll().subscribe({
      next: (customers) => {
        this.customers = customers;
      }
    })
  } */
}
