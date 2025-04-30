import { Component, inject } from '@angular/core';
import { ErrorBoxComponent } from "../../../../components/error-box/error-box.component";
import { LoadingIndicatorComponent } from "../../../../components/loading-indicator/loading-indicator.component";
import { CustomerFormComponent } from "../../components/customer-form/customer-form.component";
import { Store } from '@ngrx/store';
import { selectCustomerById, selectCustomerErrorState, SelectCustomerLoadingState } from '../../store/selectors/customer.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Customer } from '../../model/customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  imports: [
    ErrorBoxComponent,
    LoadingIndicatorComponent,
    CustomerFormComponent,
    AsyncPipe
  ],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.scss'
})
export class CustomerEditComponent {

  #store = inject(Store)
  loadingState$ = this.#store.select(SelectCustomerLoadingState);
  error$: Observable<string | null> = this.#store.select(selectCustomerErrorState);

  public id = inject(ActivatedRoute).snapshot.params['id'];
  customer$ = this.#store.select(selectCustomerById(this.id))

  edtiCustomer(customer: Partial<Customer>) {
    console.log(customer);
    customer.id = this.id;
    //this.#store.dispatch(CustomerActions.updateCustomer({customer}));
  }

}
