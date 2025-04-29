import { Component, Input } from '@angular/core';
import { Customers } from '../../model/customers';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-customer-table',
  imports: [CommonModule],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.scss'
})
export class CustomerTableComponent {

  @Input()
  tableData: Customers[] = [];

}
