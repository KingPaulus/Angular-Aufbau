import { Routes } from "@angular/router";
import { CustomerComponent } from "./customer.component";
import { CustomersListComponent } from "./views/customers-list/customers-list.component";

export const routesCustomers: Routes = [
    {
        path: 'dashboard',
        component: CustomerComponent,
        children: [
            {
                path: '',
                component: CustomersListComponent
            }
        ]
    }
]