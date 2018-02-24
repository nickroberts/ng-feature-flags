import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="jumbotron">
      <h1 class="display-4">ng-feature-flags</h1>
      <p class="lead">Add the ability to turn features on and off through the use of feature flags.</p>
    </div>

    <section>
      <h2>Feature Flag List Component</h2>

      <ngff-list></ngff-list>
    </section>

    <section>
      <h2>Feature Flag Directive</h2>

      <div *ngffIf="['cool-new-feature']" class="card bg-light mb-3">
        <div class="card-body">
          <h5 class="card-title">cool-new-feature on</h5>
          <p class="card-text">I only show when the <code>cool-new-feature</code> feature flag is turned <code>on</code>.</p>
        </div>
      </div>

      <div *ngffIf="['cool-new-feature']; hide: true" class="card bg-light mb-3">
        <div class="card-body">
          <h5 class="card-title">cool-new-feature off</h5>
          <p class="card-text">I only show when the <code>cool-new-feature</code> feature flag is turned <code>off</code>.</p>
        </div>
      </div>

      <div *ngffIf="['missing-feature-flag']; hide: true;" class="card bg-light mb-3">
        <div class="card-body">
          <h5 class="card-title">missing-feature-flag</h5>
          <p class="card-text">
            I always show as there is no <code>missing-feature-flag</code> feature flag.
            <br><br>
            I use <code>*ngffIf="['missing-feature-flag']; hide: true;"</code>
          </p>
        </div>
      </div>

      <div *ngffIf="['another-cool-new-feature']" class="card bg-light mb-3">
        <div class="card-body">
          <h5 class="card-title">another-cool-new-feature on</h5>
          <p class="card-text">I only show when the <code>another-cool-new-feature</code> feature flag is turned <code>on</code>.</p>
        </div>
      </div>

      <div *ngffIf="['another-cool-new-feature']; hide: true" class="card bg-light mb-3">
        <div class="card-body">
          <h5 class="card-title">another-cool-new-feature off</h5>
          <p class="card-text">I only show when the <code>another-cool-new-feature</code> feature flag is turned <code>off</code>.</p>
        </div>
      </div>

      <div *ngffIf="['cool-new-feature', 'another-cool-new-feature']" class="card bg-light mb-3">
        <div class="card-body">
          <h5 class="card-title">cool-new-feature and another-cool-new-feature both on</h5>
          <p class="card-text">I only show when both the <code>cool-new-feature</code> and
          <code>another-cool-new-feature</code> feature flags are turned <code>on</code>.</p>
        </div>
      </div>

      <div *ngffIf="['cool-new-feature', 'another-cool-new-feature']; hide: true" class="card bg-light mb-3">
        <div class="card-body">
          <h5 class="card-title">cool-new-feature and another-cool-new-feature both off</h5>
          <p class="card-text">I only show when both the <code>cool-new-feature</code> and
          <code>another-cool-new-feature</code> feature flags are turned <code>off</code>.</p>
        </div>
      </div>

      <div *ngffIf="['cool-new-feature', 'another-cool-new-feature']; operator: 'OR'" class="card bg-light mb-3">
        <div class="card-body">
          <h5 class="card-title">cool-new-feature or another-cool-new-feature on</h5>
          <p class="card-text">I only show when either the <code>cool-new-feature</code> or the
          <code>another-cool-new-feature</code> feature flag is turned <code>on</code>.</p>
        </div>
      </div>

      <div *ngffIf="['cool-new-feature', 'another-cool-new-feature']; operator: 'OR'; hide: true" class="card bg-light mb-3">
        <div class="card-body">
          <h5 class="card-title">cool-new-feature or another-cool-new-feature off</h5>
          <p class="card-text">I only show when either the <code>cool-new-feature</code> or the
          <code>another-cool-new-feature</code> feature flag is turned <code>off</code>.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    h2 {
      margin-bottom: 1rem;
    }
    section {
      margin-bottom: 2rem;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
