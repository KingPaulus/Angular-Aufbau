import { Routes } from "@angular/router";
import { CustomerComponent } from "./customer.component";
import { CustomersListComponent } from "./views/customers-list/customers-list.component";
import { CustomerEditComponent } from "./views/customer-edit/customer-edit.component";
import { CustomerCreateComponent } from "./views/customer-create/customer-create.component";

export const routesCustomers: Routes = [
    {
        path: 'dashboard',
        component: CustomerComponent,
        children: [
            {
                path: '',
                component: CustomersListComponent
            },
            {
                path: 'new',
                component: CustomerCreateComponent
            },
            {
                path: 'edit/:id',
                component: CustomerEditComponent
            }
        ]
    }
]