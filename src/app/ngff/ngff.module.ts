import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgffProviderService } from './ngff-provider.service';
import { NgffListComponent } from './ngff-list/ngff-list.component';
import { NgffDataService } from './ngff-data.service';
import { NgffIfDirective } from './ngff-if.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [NgffListComponent, NgffIfDirective],
  providers: [NgffProviderService, NgffDataService],
  exports: [NgffListComponent, NgffIfDirective]
})
export class NgffModule { }
