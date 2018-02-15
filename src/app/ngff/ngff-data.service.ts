import { Injectable } from '@angular/core';

export interface NgffFeatureFlagData {
  key: string;
  title: string;
  description: string;
  default: boolean;
  enabled?: boolean;
}

export const NGFF_LOCAL_STORAGE_KEY_PREFIX = 'ngff-container';
export const NGFF_LOCAL_STORAGE_ENABLED = 'ENABLED';
export const NGFF_LOCAL_STORAGE_DISABLED = 'DISABLED';

@Injectable()
export class NgffDataService {

  data: NgffFeatureFlagData[];

  constructor() { }

  enabled(key: string) {
    return this.checkEnabled(key);
  }

  enable(key: string) {
    localStorage.setItem(this.getKey(key), NGFF_LOCAL_STORAGE_ENABLED);
    this.setEnabled(key, true);
  }

  disable(key: string) {
    localStorage.setItem(this.getKey(key), NGFF_LOCAL_STORAGE_DISABLED);
    this.setEnabled(key, false);
  }

  reset(key: string) {
    localStorage.removeItem(this.getKey(key));
    this.setEnabled(key, undefined);
  }

  getValue(key: string) {
    return localStorage.getItem(this.getKey(key));
  }

  private getKey(key: string) {
    return `${NGFF_LOCAL_STORAGE_KEY_PREFIX}-${key}`;
  }

  private setEnabled(key: string, value: boolean) {
    try {
      return this.data = this.data.map(ff => {
        if (ff.key === key) {
          ff.enabled = value;
        }
        return ff;
      });
    } catch (e) {
      console.error(`Feature flag ${key} does not exist.`);
    }
  }

  private checkEnabled(key: string) {
    try {
      const flag = this.data.filter(d => d.key === key)[0];
      return flag.enabled === undefined ? flag.default : flag.enabled;
    } catch (e) {
      return false;
    }
  }

}
