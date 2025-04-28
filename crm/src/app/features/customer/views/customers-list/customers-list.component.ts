import { Component, inject, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers-list',
  imports: [],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss'
})
export class CustomersListComponent implements OnInit {

  ngOnInit(): void {
    this.loadCustomers();
  }

  #customerService = inject(CustomersService)

  loadCustomers() {
    this.#customerService.getAll();
  }
}
