import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent implements OnInit {

  @Input()
  formData ?: Customer | null;

  @Output()
  customerSubmit = new EventEmitter();

  ngOnInit(): void {
    if(this.formData !== void 0 && this.formData !== null) {
      this.customerGroup.patchValue(this.formData);
    }
  }

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
