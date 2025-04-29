import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { EMPTY, Observable } from 'rxjs';

import { CustomerEffects } from './customer.effects';

describe('CustomerEffects', () => {
  const actions$: Observable<unknown> = EMPTY;
  let effects: CustomerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CustomerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
