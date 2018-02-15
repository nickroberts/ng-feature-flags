# NgFeatureFlags

Add the ability to turn features on and off through the use of feature flags.

## Requirements

* [Bootstrap 4.0.0+](https://getbootstrap.com)
* [ng-bootstrap 1.0.0+](https://ng-bootstrap.github.io/)

## Installation

```
npm i @nickroberts/ng-feature-flags
```

## Feature Flags JSON

Add a file to the public path `assets/json/feature-flags.json`:
```
[
  {
    "key": "feature-flag-one",
    "title": "Feature Flag One",
    "description": "This is a description of the feature flag.",
    "default": true
  }
]

```

# Module

Setup you default `app.module` by adding the `NgffModule` and loading the data before the app starts:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgffModule, NgffProviderService } from '@nickroberts/ng-feature-flags';

import { AppComponent } from './app.component';

export function setupNgff(ngffProviderService: NgffProviderService) {
  return () => ngffProviderService.init();
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

## Custom Feature Flag JSON

You can setup a custom url when loading the json file if you do not want to use the default location:

```
export function setupNgff(ngffProviderService: NgffProviderService) {
  const url = 'https://url-for-feature-flags-json`;
  return () => ngffProviderService.init(url);
}

```

## Usage

### Components

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

### Service

Provide the service to your module:

```
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

```
import { Component } from '@angular/core';
import { NgffDataService } from '@nickroberts/ng-feature-flags';

@Component({
  selector: 'app-root',
  template: `
    <pre>{{ flag }}: {{ enabled }}
  `,
  styles: [`
    nav {
      margin-bottom: 2rem;
    }
  `]
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
