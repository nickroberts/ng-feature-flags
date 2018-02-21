import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environment-cool-new-feature',
  template: `
    <h1>Environment Cool New Feature</h1>
    <ngff-container featureFlag="environment-cool-new-feature">
      <p>
        <code>environment-cool-new-feature</code> feature flag is turned <code>on</code>.
      </p>
      <p>
        This content is shown using the attribute <code>featureFlag="environment-cool-new-feature"</code>.
      </p>
    </ngff-container>
    <ngff-container featureFlagHide="environment-cool-new-feature">
        <p>
          <code>environment-cool-new-feature</code> feature flag is turned <code>off</code>.
        </p>
        <p>
        This content is shown using the attribute <code>featureFlagHide="environment-cool-new-feature"</code>.
      </p>
    </ngff-container>
  `,
  styles: []
})
export class EnvironmentCoolNewFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
