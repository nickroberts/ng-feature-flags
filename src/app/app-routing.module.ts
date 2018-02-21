import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoolNewFeatureComponent } from './cool-new-feature/cool-new-feature.component';
import { AnotherCoolNewFeatureComponent } from './another-cool-new-feature/another-cool-new-feature.component';
import { EnvironmentCoolNewFeatureComponent } from './environment-cool-new-feature/another-cool-new-feature.component';
import { FeatureFlagNotAvailableComponent } from './feature-flag-not-available/feature-flag-not-available.component';

const routes: Routes = [
  { path: 'cool-new-feature', component: CoolNewFeatureComponent },
  { path: 'another-cool-new-feature', component: AnotherCoolNewFeatureComponent },
  { path: 'environment-cool-new-feature', component: EnvironmentCoolNewFeatureComponent },
  { path: 'feature-flag-not-available', component: FeatureFlagNotAvailableComponent },
  { path: '', component: HomeComponent },
  { path: '**',   redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
