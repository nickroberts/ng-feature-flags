# NgFeatureFlags

Add the ability to turn features on and off through the use of feature flags.

## Requirements

* [Bootstrap 4.0.0+](https://getbootstrap.com)
* [ng-bootstrap 1.0.0](https://ng-bootstrap.github.io/)

## Setup

// TODO\
Need to install this module, add a `assets/json/feature-flags.json`, load the module, load the json.

## Usage

To show content when a feature flag is `on`:

```
<ngff-container featureFlag="cool-new-feature">
  <p>This content will be shown when the cool-new-feature feature flag is on.</p>
</ngff-container>
```

To show content when a feature flag is `off`:

```
<ngff-container featureFlagHide="cool-new-feature">
  <p>This content will be shown when the cool-new-feature feature flag is off.</p>
</ngff-container>
```

To show the list of feature flags, where you can enable and disable them:

```
<ngff-list></ngff-list>
```
