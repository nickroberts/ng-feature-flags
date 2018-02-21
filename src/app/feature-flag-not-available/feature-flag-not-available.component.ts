import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-flag-not-available',
  template: `
    <h1>Feature Flag Not Available</h1>
    <ngff-container featureFlag="feature-flag-not-available">
      <p>
        This content will never show, as the <code>"feature-flag-not-available"</code>
        feature flag is not loaded into the config.
      </p>
    </ngff-container>
    <ngff-container featureFlagHide="feature-flag-not-available">
      <p>
        This content shows, as the <code>"feature-flag-not-available"</code>
        feature flag is not loaded into the config, using <code>feagureFlagHide</code> attribute.
      </p>
    </ngff-container>
  `,
  styles: []
})
export class FeatureFlagNotAvailableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
