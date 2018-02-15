import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="jumbotron">
      <h1 class="display-4">ng-feature-flags</h1>
      <p class="lead">Add the ability to turn features on and off through the use of feature flags.</p>
    </div>

    <p>Check out some examples:</p>

    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" routerLink="cool-new-feature">Cool New Feature</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="another-cool-new-feature">Another Cool New Feature</a>
      </li>
    </ul>

    <h2>Feature Flag List Component</h2>

    <ngff-list></ngff-list>
  `,
  styles: [`
    .nav {
      margin-bottom: 1rem;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
