import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Customer } from '../models/customer.model';

export const CustomerActions = createActionGroup({
  source: 'Customer',
  events: {
    'Load Customers': emptyProps(),
    'Load Customers Success': props<{ customers: Customer[] }>(),
    'Load Customers Failure': props<{ error: string | null }>(),

    'Delete Customer': props<{id: number }>(),
    'Delete Customer Success': props<{id: number }>(),
    'Delete Customer Failure': props<{error: string | null }>()
  }
});
