import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

const url = environment.api + 'customers/';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  #http = inject(HttpClient);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  getAll(): Observable<Customer[]> {
    return this.#http.get<Customer[]>(url);
  }

  getById(id: number): Observable<Customer[]> {
    return this.#http.get<Customer[]>(url + id);
  }

  postOne(customer: Partial<Customer>): Observable<Customer> {
    return this.#http.post<Customer>(url, customer);
  }
  
  putOne(customer: Customer): Observable<Customer> {
    return this.#http.put<Customer>(url + customer.id, customer);
  }
  
  deleteById(id: number): Observable<void> {
    return this.#http.delete<void>(url + id);
  }
  
}
