import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCustomer from '../reducers/customer.reducer';
import { Customer } from "../../model/customer";

export const selectCustomerState = createFeatureSelector<fromCustomer.State>(
    fromCustomer.customersFeatureKey
);

export const SelectCustomerLoadingState = createSelector(
    selectCustomerState,
    (state): boolean => {
        return state.loading;
    }
);

export const selectCustomers = createSelector(
    selectCustomerState,
    (state): Customer[] => {
        return state.customers;
    }
);

export const selectCustomerErrorState = createSelector(
    selectCustomerState,
    (state): null | string => {
        return state.error;
    }
);