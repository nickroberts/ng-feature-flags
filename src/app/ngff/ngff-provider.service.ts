import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NgffDataService,
  NGFF_LOCAL_STORAGE_ENABLED,
  NGFF_LOCAL_STORAGE_DISABLED,
  NgffFeatureFlagData
} from './ngff-data.service';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export const NGFF_DEFAULT_FEATURE_FLAG_JSON_URL = '/assets/json/feature-flags.json';

@Injectable()
export class NgffProviderService {
  constructor(private http: HttpClient, private ngffDataService: NgffDataService) {}

  loadRemoteData(url = NGFF_DEFAULT_FEATURE_FLAG_JSON_URL): Observable<NgffFeatureFlagData[]> {
    return this.http.get<NgffFeatureFlagData[]>(url).pipe(switchMap(data => this.init(data)));
  }

  init(featureFlagData: NgffFeatureFlagData[]): Observable<NgffFeatureFlagData[]> {
    return of(featureFlagData).pipe(
      map(data => {
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
      })
    );
  }
}
