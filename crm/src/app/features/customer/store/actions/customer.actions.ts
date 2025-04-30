import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Customer } from '../models/customer.model';

export const CustomerActions = createActionGroup({
  source: 'Customer',
  events: {
    // Load
    'Load Customers': emptyProps(),
    'Load Customers Success': props<{ customers: Customer[] }>(),
    'Load Customers Failure': props<{ error: string | null }>(),

    // Delete
    'Delete Customer': props<{id: number }>(),
    'Delete Customer Success': props<{id: number }>(),
    'Delete Customer Failure': props<{error: string | null }>(),

    // New
    'Create Customer': props<{ customer: Partial<Customer> }>(),
    'Create Customer Success': props<{ customer: Customer }>(),
    'Create Customer Failure': props<{ error: string | null }>(),

    // Update
    'Update Customer': props<{ customer: Customer }>(),
    'Update Customer Success': props<{ customer: Customer }>(),
    'Update Customer Failure': props<{ error: string | null }>(),
  }
});
