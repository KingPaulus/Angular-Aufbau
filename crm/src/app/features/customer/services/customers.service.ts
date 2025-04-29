import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customers } from '../model/customers';

const url = environment.api + 'customers/';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  #http = inject(HttpClient);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  getAll(): Observable<Customers[]> {
    return this.#http.get<Customers[]>(url);
  }

  getById(id: number): Observable<Customers[]> {
    return this.#http.get<Customers[]>(url + id);
  }

  postOne(customer: Partial<Customers>): Observable<Customers> {
    return this.#http.post<Customers>(url, customer);
  }
  
  putOne(customer: Customers): Observable<Customers> {
    return this.#http.put<Customers>(url + customer.id, customer);
  }
  
  deleteById(id: number): Observable<void> {
    return this.#http.delete<void>(url + id);
  }
  
}
