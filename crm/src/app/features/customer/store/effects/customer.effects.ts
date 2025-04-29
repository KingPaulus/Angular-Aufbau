import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CustomerActions } from '../actions/customer.actions';
import { CustomersService } from '../../services/customers.service';


@Injectable()
export class CustomerEffects {
  #actions$ = inject(Actions);
  #customerService = inject(CustomersService);

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


  
}
