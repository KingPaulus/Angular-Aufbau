import { Component, inject } from '@angular/core';
import { CustomerFormComponent } from "../../components/customer-form/customer-form.component";
import { Store } from '@ngrx/store';
import { Customer } from '../../model/customer';
import { CustomerActions } from '../../store/actions/customer.actions';
import { Observable } from 'rxjs';
import { selectCustomerErrorState, SelectCustomerLoadingState } from '../../store/selectors/customer.selectors';
import { AsyncPipe } from '@angular/common';
import { ErrorBoxComponent } from "../../../../components/error-box/error-box.component";
import { LoadingIndicatorComponent } from "../../../../components/loading-indicator/loading-indicator.component";

@Component({
  selector: 'app-customer-create',
  imports: [
    CustomerFormComponent,
    AsyncPipe,
    ErrorBoxComponent,
    LoadingIndicatorComponent
],
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.scss'
})
export class CustomerCreateComponent {

  #store = inject(Store)
  loadingState$ = this.#store.select(SelectCustomerLoadingState);
  error$: Observable<string | null> = this.#store.select(selectCustomerErrorState);


  createCustomer(customer: Partial<Customer>) {
    this.#store.dispatch(CustomerActions.createCustomer({customer}));
  }

}
