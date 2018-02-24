import { Component, OnInit, Input } from '@angular/core';
import { NgffDataService } from '../ngff-data.service';

@Component({
  selector: 'ngff-container',
  template: `
    <ng-template [ngIf]="enabled">
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: []
})
export class NgffContainerComponent implements OnInit {

  @Input() featureFlag;
  @Input() featureFlagHide;
  enabled = false;

  constructor(private ngffDataService: NgffDataService) { }

  ngOnInit() {
    this.ngffDataService.data$.subscribe(response => this.updateView());
  }

  private updateView() {
    if (this.featureFlagHide) {
      this.enabled = !this.ngffDataService.enabled(this.featureFlagHide);
    } else if (this.featureFlag) {
      this.enabled = this.ngffDataService.enabled(this.featureFlag);
    } else {
      this.enabled = true;
    }
  }

}
