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

// Selector Factory
export const selectCustomerById = function(id: string) {
    return createSelector(
        selectCustomerState,
        (state): Customer | undefined => {
            return state.customers.find((customer) => {
                // type umwandlung mit + vor id
                return customer.id === +id
            })
        }
    )
}

export const selectCustomerErrorState = createSelector(
    selectCustomerState,
    (state): null | string => {
        return state.error;
    }
);