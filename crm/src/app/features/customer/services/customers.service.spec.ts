import { TestBed } from '@angular/core/testing';

import { CustomersService } from './customers.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

describe('CustomersService', () => {
  let service: CustomersService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(CustomersService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('should exist',() => {
      expect(service.getAll).toBeTruthy();
    })

    it('should exist',async () => {
      const url = 'http://localhost:3001/customers';
      const respones$ = service.getAll();
      const responesPromise = firstValueFrom(respones$);

      const req = httpTesting.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush([]);
      expect(await responesPromise).toEqual([]);

      httpTesting.verify();
    })
  })
});
