import { Routes } from '@angular/router';
import { StartPageComponent } from './features/start-page/start-page.component';
import { AboutPageComponent } from './features/about-page/about-page.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { routesCustomers } from './features/customer/customers.routing';

export const routes: Routes = [
    ...routesCustomers,
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        component: StartPageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
