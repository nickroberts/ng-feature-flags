import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgffModule } from './ngff/ngff.module';
import { NgffProviderService } from './ngff//ngff-provider.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CoolNewFeatureComponent } from './cool-new-feature/cool-new-feature.component';
import { AnotherCoolNewFeatureComponent } from './another-cool-new-feature/another-cool-new-feature.component';

export function setupNgff(ngffProviderService: NgffProviderService) {
  return () => ngffProviderService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoolNewFeatureComponent,
    AnotherCoolNewFeatureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
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
