import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { NgffDataService, NGFF_LOCAL_STORAGE_ENABLED, NGFF_LOCAL_STORAGE_DISABLED, NgffFeatureFlagData } from './ngff-data.service';

export const NGFF_DEFAULT_FEATURE_FLAG_JSON_URL = '/assets/json/feature-flags.json';

@Injectable()
export class NgffProviderService {

  constructor(private http: HttpClient, private ngffDataService: NgffDataService) { }

  init(url = NGFF_DEFAULT_FEATURE_FLAG_JSON_URL) {
    return this.http
      .get<NgffFeatureFlagData[]>(url)
      .map(data => {
        this.ngffDataService.data = data.map(ff => {
          switch (this.ngffDataService.getValue(ff.key)) {
            case NGFF_LOCAL_STORAGE_ENABLED:
              ff.enabled = true;
              break;
            case NGFF_LOCAL_STORAGE_DISABLED:
              ff.enabled = false;
              break;
            default:
              delete ff.enabled;
          }
          return ff;
        });
        return data;
      });
  }

}
