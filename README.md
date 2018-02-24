# NgFeatureFlags

Add the ability to turn features on and off through the use of feature flags.

## Requirements

* [Bootstrap 4.0.0+](https://getbootstrap.com)
* [ng-bootstrap 1.0.0+](https://ng-bootstrap.github.io/)

## Installation

```shell
npm i @nickroberts/ng-feature-flags
```

## Feature Flags JSON

Add a file to the public path `assets/json/feature-flags.json`. This is the default path where the `loadRemoteConfig()` function looks for the feature flag data:

```json
[
  {
    "key": "feature-flag-one",
    "title": "Feature Flag One",
    "description": "This is a description of the feature flag.",
    "default": true
  },
  {
    "key": "feature-flag-two",
    "title": "Feature Flag Two",
    "description": "This is a description of the feature flag.",
    "default": false
  }
]
```

## Module

Setup your default `app.module` by adding the `NgffModule` and loading the data before the app starts:

```javascript
// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgffModule, NgffProviderService } from '@nickroberts/ng-feature-flags';

import { AppComponent } from './app.component';

export function setupNgff(ngffProviderService: NgffProviderService) {
  return () => ngffProviderService.loadRemoteData();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    NgbModule.forRoot(),
    NgffModule
  ],
  providers: [
    NgffProviderService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupNgff,
      deps: [NgffProviderService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Custom Feature Flag JSON

You can setup a custom url when loading the json file if you do not want to use the default location:

```javascript
// app.module.ts

export function setupNgff(ngffProviderService: NgffProviderService) {
  const url = 'https://url-for-feature-flags-json';
  return () => ngffProviderService.loadRemoteData(url);
}
```

### Loading Feature Flag Data From Angular's Environment

You can also load feaure flag data from Angular's environment files:

```javascript
// environment.ts

export const environment = {
  production: false,
  featureFlags: [
    {
      key: 'environment-cool-new-feature',
      title: 'Environment Cool New Feature',
      description: 'This is loaded from the Angular environment.',
      default: false
    }
  ]
};
```

```javascript
// app.module.ts

import { environment } from '../environments/environment';

export function setupNgff() {
  return () => ngffProviderService.init(environment.featureFlags);
}
```

### Combining Remote JSON and Environment Data

You can also include both remote and local data:

```javascript
// app.module.ts

export function setupNgff(http: HttpClient, ngffProviderService: NgffProviderService) {
  const url = 'https://url-for-feature-flags-json';
  return () => http
    .get<NgffFeatureFlagData[]>(url)
    .take(1)
    .map(data => {
      if (environment.featureFlags) {
        return <NgffFeatureFlagData[]>[ ...data, ...environment.featureFlags ];
      }
      return data;
    })
    .switchMap(data => ngffProviderService.init(data).take(1))
    .toPromise();
}
```

## Usage

### Components

To show the list of feature flags, where you can enable and disable them:

```HTML
<ngff-list></ngff-list>
```

### Directive

You can use the `*ngffIf="['feature-flag-name']"` directive to show or hide an element based on a feature flag.

To show an element when a feature flag is on:

```HTML
<div *ngffIf="['cool-new-feature']">
  I only show when the "cool-new-feature" feature flag is turned "on".
</div>
```

Tp hide an element when a feature flag is on:

```HTML
<div *ngffIf="['cool-new-feature']; hide: true;">
  I only show when the "cool-new-feature" feature flag is turned "off".
</div>
```

To show an element when multiple feature flags are on:

```HTML
<div *ngffIf="['cool-new-feature', 'another-cool-new-feature']">
  I only show when both the "cool-new-feature" and "another-cool-new-feature" feature flags are turned "on".
</div>
```

To show an element when one of multiple feature flags are on:

```HTML
<div *ngffIf="['cool-new-feature', 'another-cool-new-feature']; operator: 'OR';">
  I show when either the "cool-new-feature" or "another-cool-new-feature" feature flag are turned "on".
</div>
```

_Note: you cannot use other template referral directives when using this, e.g. `*ngIf="true"`._

### Service

Provide the service to your module:

```javascript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgffDataService } from '@nickroberts/ng-feature-flags';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [NgffDataService]
})
export class SharedModule { }
```

Inject the service into your component:

```javascript
import { Component } from '@angular/core';
import { NgffDataService } from '@nickroberts/ng-feature-flags';

@Component({
  selector: 'app-root',
  template: `
    <pre>{{ flag }}: {{ enabled }}
  `,
  styles: []
})
export class AppComponent implements OnInit {

  flag = 'cool-new-feature';
  enabled: boolean;

  constructor(private ngffDataService: NgffDataService) { }

  ngOnInit() {
    this.enabled = this.ngffDataService.enabled(this.flag);
  }

}
```
