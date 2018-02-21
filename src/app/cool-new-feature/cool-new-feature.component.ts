import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cool-new-feature',
  template: `
    <h1>Cool New Feature</h1>
    <ngff-container featureFlag="cool-new-feature">
      <p>
        <code>cool-new-feature</code> feature flag is turned <code>on</code>.
      </p>
      <p>
        This content is shown using the attribute <code>featureFlag="cool-new-feature"</code>.
      </p>
    </ngff-container>
    <ngff-container featureFlagHide="cool-new-feature">
        <p>
          <code>cool-new-feature</code> feature flag is turned <code>off</code>.
        </p>
        <p>
        This content is shown using the attribute <code>featureFlagHide="cool-new-feature"</code>.
      </p>
    </ngff-container>
  `,
  styles: []
})
export class CoolNewFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
