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

  // Load Customer
  on(CustomerActions.loadCustomers, (state): State => {
    return {
      ...state, //Spread-Operator
      loading: true,
      error: null,
    }
  }),
  on(CustomerActions.loadCustomersSuccess, (state, {customers}): State => {
    return {
      ...state, // Speard Operator
      customers,
      loading: false
    }
  }),
  on(CustomerActions.loadCustomersFailure, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error
    }
  }),

  // Delete Customer
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
  }),
  on(CustomerActions.deleteCustomerFailure, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error
    }
  }),

  // Create Customer
  on(CustomerActions.createCustomer, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    }
  }),
  on(CustomerActions.createCustomerSuccess, (state, { customer }) => {
    return {
      ...state,
      loading: false,
      customers: [
        ...state.customers,
        customer
      ],
    }
  }),
  on(CustomerActions.createCustomerFailure, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error
    }
  }),

  // Update Customer
  on(CustomerActions.updateCustomer, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    }
  }),
  on(CustomerActions.updateCustomerSuccess, (state, { customer }) => {
    return {
      ...state,
      customers: [
        ...state.customers,
        customer
      ],
      loading: true,
    }
  }),
  on(CustomerActions.updateCustomerFailure, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error
    }
  }),
);

export const customersFeature = createFeature({
  name: customersFeatureKey,
  reducer,
});

