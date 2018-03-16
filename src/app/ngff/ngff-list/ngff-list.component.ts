import { Component, OnInit } from '@angular/core';
import { NgffDataService, NgffFeatureFlagData } from '../ngff-data.service';

@Component({
  selector: 'ngff-list',
  template: `
    <table class="table table-striped table-bordered">
      <thead class="thead-light">
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let ff of data">
          <td>{{ ff.title }}</td>
          <td>
            <p>{{ ff.description }}</p>
          </td>
          <td>
            <div class="btn-group btn-group-toggle"
              ngbRadioGroup
              name="{{ ff.key }}-enabled"
              (change)="change(ff)"
              [(ngModel)]="ff.enabled">
              <label ngbButtonLabel class="btn-secondary">
                <input ngbButton type="radio" [value]="undefined"> Default ({{ ff.default }})
              </label>
              <label ngbButtonLabel class="btn-secondary">
                <input ngbButton type="radio" [value]="true"> On
              </label>
              <label ngbButtonLabel class="btn-secondary">
                <input ngbButton type="radio" [value]="false"> Off
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class NgffListComponent implements OnInit {
  data: NgffFeatureFlagData[];

  constructor(private ngffDataService: NgffDataService) {}

  ngOnInit() {
    this.data = this.ngffDataService.data;
  }

  change(flag: NgffFeatureFlagData) {
    // return;
    switch (flag.enabled) {
      case true:
        this.ngffDataService.enable(flag.key);
        break;
      case false:
        this.ngffDataService.disable(flag.key);
        break;
      default:
        this.ngffDataService.reset(flag.key);
    }
  }
}
