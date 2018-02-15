import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NgffProviderService, NGFF_DEFAULT_FEATURE_FLAG_JSON_URL } from './ngff-provider.service';
import { NgffDataService, NgffFeatureFlagData, NGFF_LOCAL_STORAGE_DISABLED } from './ngff-data.service';

class MockNgffDataService {
  data: NgffFeatureFlagData[];
  flagValues = {
    'mock-feature-flag-key': NGFF_LOCAL_STORAGE_DISABLED
  };
  getValue = (key: string) => this.flagValues[key];
}

describe('NgffProviderService', () => {
  let injector: TestBed;
  let service: NgffProviderService;
  let dataService: MockNgffDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        NgffProviderService,
        { provide: NgffDataService, useClass: MockNgffDataService }
      ]
    });
    injector = getTestBed();
    service = injector.get(NgffProviderService);
    dataService = injector.get(NgffDataService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#init', () => {
    it('should return an Promise<NgffFeatureFlagData[]>', () => {
      const mockFlagData = [{
        key: 'mock-feature-flag-key',
        title: 'Mock Feature Flag Title',
        description: 'Mock Feature Flag Description',
        default: true
      }];

      service.init().then(response => {
        expect(response.length).toBe(1);
        expect(response).toEqual(mockFlagData);
        expect(dataService.data).toEqual(mockFlagData);
      });

      const req = httpMock.expectOne(NGFF_DEFAULT_FEATURE_FLAG_JSON_URL);
      expect(req.request.method).toBe('GET');
      req.flush(mockFlagData);
    });
  });
});
