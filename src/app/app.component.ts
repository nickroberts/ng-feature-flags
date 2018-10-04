import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <a class="navbar-brand" routerLink="">ng-feature-flags</a>
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      nav {
        margin-bottom: 2rem;
      }
    `
  ]
})
export class AppComponent {}
