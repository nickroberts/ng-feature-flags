import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgffModule } from './ngff/ngff.module';
import { NgffProviderService } from './ngff//ngff-provider.service';
import { NgffFeatureFlagData } from './ngff/ngff-data.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { map, take, switchMap } from 'rxjs/operators';

import { environment } from '../environments/environment';

export function setupNgff(http: HttpClient, ngffProviderService: NgffProviderService) {
  return () =>
    http
      .get<NgffFeatureFlagData[]>('/assets/json/feature-flags.json')
      .pipe(
        take(1),
        map(data => {
          if (environment.featureFlags) {
            return <NgffFeatureFlagData[]>[...data, ...environment.featureFlags];
          }
          return data;
        }),
        switchMap(data => ngffProviderService.init(data).pipe(take(1)))
      )
      .toPromise();
}

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule.forRoot(), AppRoutingModule, NgffModule],
  providers: [
    NgffProviderService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupNgff,
      deps: [HttpClient, NgffProviderService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
