import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { customersFeature } from './features/customer/store/reducers/customer.reducer';
import { CustomerEffects } from './features/customer/store/effects/customer.effects';
import { AuthEffects } from './features/auth/store/effects/auth.effects';
import { authsFeature } from './features/auth/store/reducers/auth.reducer';

registerLocaleData(localeDe);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
        provide: LOCALE_ID,
        useValue: 'de-DE'
    },
    provideStore({}),
    provideStore({
      [customersFeature.name]: customersFeature.reducer,
      [authsFeature.name]: authsFeature.reducer,
    }),
    provideEffects(
      [
        CustomerEffects,
        AuthEffects,
      ]
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
