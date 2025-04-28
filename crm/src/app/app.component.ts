import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent],
  template: `
  <app-navigation>
      {{title}}
    </app-navigation>
  <div class="container mt-4">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  title = 'CRM v0.1';
}
