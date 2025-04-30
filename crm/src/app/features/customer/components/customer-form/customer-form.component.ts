import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {

  @Output()
  customerSubmit = new EventEmitter();

  customerGroup = inject(FormBuilder).group({
    name: [
      '',
      [
        Validators.required,
      ]
    ],
    credit_limit: [
      0,
      [
        Validators.required,
        Validators.min(0),
      ]
    ]
  })

  formSubmitHandler() {
    this.customerSubmit.emit(this.customerGroup.value);
  }

}
