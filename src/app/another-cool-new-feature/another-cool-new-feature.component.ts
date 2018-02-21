import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-cool-new-feature',
  template: `
    <h1>Another Cool New Feature</h1>
    <ngff-container featureFlag="another-cool-new-feature">
      <p>
        <code>another-cool-new-feature</code> feature flag is turned <code>on</code>.
      </p>
      <p>
        This content is shown using the attribute <code>featureFlag="another-cool-new-feature"</code>.
      </p>
    </ngff-container>
    <ngff-container featureFlagHide="another-cool-new-feature">
        <p>
          <code>another-cool-new-feature</code> feature flag is turned <code>off</code>.
        </p>
        <p>
        This content is shown using the attribute <code>featureFlagHide="another-cool-new-feature"</code>.
      </p>
    </ngff-container>
  `,
  styles: []
})
export class AnotherCoolNewFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
