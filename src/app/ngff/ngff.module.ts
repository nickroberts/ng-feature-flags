import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgffContainerComponent } from './ngff-container/ngff-container.component';
import { NgffProviderService } from './ngff-provider.service';
import { NgffListComponent } from './ngff-list/ngff-list.component';
import { NgffDataService } from './ngff-data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [NgffContainerComponent, NgffListComponent],
  providers: [NgffProviderService, NgffDataService],
  exports: [NgffContainerComponent, NgffListComponent]
})
export class NgffModule { }
