import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="jumbotron">
      <h1 class="display-4">ng-feature-flags</h1>
      <p class="lead">Add the ability to turn features on and off through the use of feature flags.</p>
    </div>

    <h2>Requirements</h2>

    <ul>
      <li><a href="https://getbootstrap.com" target="_blank">Bootstrap 4.0.0+</a></li>
      <li><a href="https://ng-bootstrap.github.io/" target="_blank">ng-bootstrap 1.0.0+</a></li>
    </ul>

    <h2>Setup</h2>

    <p>
      // TODO<br>
      Need to install this module, add a <code>assets/json/feature-flags.json</code>, load the module, load the json.
    </p>

    <h2>Usage</h2>

    <p>To show content when a feature flag is <code>on</code>:</p>

    <pre><code>&lt;ngff-container featureFlag="cool-new-feature"&gt;
  &lt;p&gt;This content will be shown when the cool-new-feature feature flag is on.&lt;/p&gt;
&lt;/ngff-container&gt;</code></pre>

    <p>To show content when a feature flag is <code>off</code>:</p>

    <pre><code>&lt;ngff-container featureFlagHide="cool-new-feature"&gt;
  &lt;p&gt;This content will be shown when the cool-new-feature feature flag is off.&lt;/p&gt;
&lt;/ngff-container&gt;</code></pre>

    <p>To show the list of feature flags, where you can enable and disable them:</p>

    <pre><code>&lt;ngff-list&gt;&lt;/ngff-list&gt;</code></pre>

    <ngff-list></ngff-list>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
