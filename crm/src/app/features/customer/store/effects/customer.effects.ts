import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CustomerActions } from '../actions/customer.actions';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../models/customer.model';
import { Router } from '@angular/router';


@Injectable()
export class CustomerEffects {
  #actions$ = inject(Actions);
  #customerService = inject(CustomersService);
  #router = inject(Router)

  constructor(private actions$: Actions) {}

  loadCustomers$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(CustomerActions.loadCustomers),
      exhaustMap(() =>
       
        this.#customerService.getAll().pipe(
          map(customers => CustomerActions.loadCustomersSuccess({ customers })),
          catchError((error: Error) => of(CustomerActions.loadCustomersFailure({ error: error.message }))))
      )
    );
  });

  deleteCustomer$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(CustomerActions.deleteCustomer),
      exhaustMap(({id}) =>
       
        this.#customerService.deleteById(id).pipe(
          map(() => CustomerActions.deleteCustomerSuccess({ id })),
          catchError((error: Error) => of(CustomerActions.deleteCustomerFailure({ error: error.message }))))
      )
    );
  });

  createCustomer$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(CustomerActions.createCustomer),
      exhaustMap(({customer}) =>
       
        this.#customerService.postOne(customer).pipe(
          map((customer: Customer) => CustomerActions.createCustomerSuccess({ customer })),
          catchError((error: Error) => of(CustomerActions.createCustomerFailure({ error: error.message }))))
      )
    );
  });

  redirectToDashboard$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(
        CustomerActions.createCustomerSuccess,
        CustomerActions.updateCustomerSuccess,
      ),
      map(() => {
        this.#router.navigate(['/dashboard'])
      })
    )
  }, {
    dispatch: false
  });

  updateCustomer$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(CustomerActions.updateCustomer),
      exhaustMap(({customer}) =>
       
        this.#customerService.putOne(customer).pipe(
          map((customer: Customer) => CustomerActions.updateCustomerSuccess({ customer })),
          catchError((error: Error) => of(CustomerActions.updateCustomerFailure({ error: error.message }))))
      )
    );
  })


  
}
