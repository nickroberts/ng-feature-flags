import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgffContainerComponent } from './ngff-container/ngff-container.component';
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
  declarations: [NgffContainerComponent, NgffListComponent, NgffIfDirective],
  providers: [NgffProviderService, NgffDataService],
  exports: [NgffContainerComponent, NgffListComponent, NgffIfDirective]
})
export class NgffModule { }
