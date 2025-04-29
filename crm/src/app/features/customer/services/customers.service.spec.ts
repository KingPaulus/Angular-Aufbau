import { TestBed } from '@angular/core/testing';

import { CustomersService } from './customers.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { customersMock } from '../../../../_mocks_/api/customers';
import { Customers } from '../model/customers';

describe('CustomersService', () => {
  let service: CustomersService;
  let httpTesting: HttpTestingController;
  const url = 'http://localhost:3001/customers/';

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
    });

    it('should work',async () => {
      const respones$ = service.getAll();
      const responesPromise = firstValueFrom(respones$);

      const req = httpTesting.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(customersMock); // ✅ korrekt
      expect(await responesPromise).toEqual(customersMock);


      httpTesting.verify();
    })
  })

  describe('getById', () => {
    it('should exist',() => {
      expect(service.getById).toBeTruthy();
    });

    it('should work',async () => {

      const customerId = customersMock[0].id;
      const respones$ = service.getById(customerId);
      const responesPromise = firstValueFrom(respones$);

      const req = httpTesting.expectOne(url + customerId);
      expect(req.request.method).toBe('GET');
      req.flush([customersMock[0]]);
      expect(await responesPromise).toEqual([customersMock[0]]);

      httpTesting.verify();
    })

  })

  describe('postOne', () => {
    it('should exist', () => {
      expect(service.postOne).toBeTruthy();
    });
  
    it('should work', async () => {
      const customer: Partial<Customers> = customersMock[0];
      delete customer.id;
      const response$ = service.postOne(customer);
      const responsePromise = firstValueFrom(response$);
  
      const req = httpTesting.expectOne(url);
      expect(req.request.method).toBe('POST');
      req.flush(customersMock[0]);
  
      expect(await responsePromise).toEqual(customersMock[0]);
      httpTesting.verify();
    });
  });
  
  describe('putOne', () => {
    it('should exist', () => {
      expect(service.putOne).toBeTruthy();
    });
  
    it('should work', async () => {
      const id = customersMock[0].id;
      const putOneUrl = url + id;

      // Service
      const response$ = service.putOne(customersMock[0]);
      const responsePromise = firstValueFrom(response$);
  
      const req = httpTesting.expectOne(putOneUrl);
      expect(req.request.method).toBe('PUT');
      req.flush(customersMock[0]);
  
      expect(await responsePromise).toEqual(customersMock[0]);
      httpTesting.verify();
    });
  });
  
  describe('deleteById', () => {
    it('should exist', () => {
      expect(service.deleteById).toBeTruthy();
    });
  
    it('should work', async () => {
      const id = customersMock[0].id;
      const deleteById = url + id;

      const response$ = service.deleteById(id);
      const responsePromise = firstValueFrom(response$);
  
      const req = httpTesting.expectOne(deleteById);
      expect(req.request.method).toBe('DELETE');
      req.flush(null);
  
      expect(await responsePromise).toBeNull();
      httpTesting.verify();
    });
  });
  
});
