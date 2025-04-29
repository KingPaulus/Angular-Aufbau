import { createFeature, createReducer, on } from '@ngrx/store';
import { CustomerActions } from '../actions/customer.actions';
import { Customer } from '../../model/customer';

export const customersFeatureKey = 'customer';

export interface State {
  customers: Customer[],
  loading: boolean,
  error: string | null,
}

export const initialState: State = {
  customers: [],
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(CustomerActions.loadCustomers, (state): State => {
    return {
      ...state, //Spread-Operator
      loading: true
    }
  }),
  on(CustomerActions.loadCustomersSuccess, (state, {customers}): State => {
    return {
      ...state, // Speard Operator
      customers,
      loading: false
    }
  }),
  on(CustomerActions.deleteCustomer, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(CustomerActions.deleteCustomerSuccess, (state, { id }) => {
    return {
      ...state,
      loading: false,
      customers: state.customers.filter((customer) => {
        return customer.id !== id
      })
    }
  })
);

export const customersFeature = createFeature({
  name: customersFeatureKey,
  reducer,
});

