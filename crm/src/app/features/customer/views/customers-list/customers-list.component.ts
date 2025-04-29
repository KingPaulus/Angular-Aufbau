import { Component, inject, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customers } from '../../model/customers';
import { JsonPipe } from '@angular/common';
import { CustomerTableComponent } from "../../components/customer-table/customer-table.component";

@Component({
  selector: 'app-customers-list',
  imports: [
    JsonPipe,
    CustomerTableComponent
],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss'
})
export class CustomersListComponent implements OnInit {

  customers: Customers[] = []; 

  ngOnInit(): void {
    this.loadCustomers();
  }

  #customerService = inject(CustomersService)

  loadCustomers() {
    this.#customerService.getAll().subscribe({
      next: (customers) => {
        this.customers = customers;
      }
    })
  }
}
