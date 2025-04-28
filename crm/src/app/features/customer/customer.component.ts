import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer',
  imports: [
    RouterOutlet
  ],
  template: `
  <h1 class="display-3">
    Kundenverwaltung
  </h1>
  <router-outlet></router-outlet>`
})
export class CustomerComponent {

}
