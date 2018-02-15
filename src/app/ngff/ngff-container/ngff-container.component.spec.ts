import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgffContainerComponent } from './ngff-container.component';
import { NgffDataService } from '../ngff-data.service';

class MockNgffDataService {
  enabledFlags = {};
  enabled = (key: string) => !!Object.keys(this.enabledFlags).length;
}

describe('NgffContainerComponent', () => {
  let component: NgffContainerComponent;
  let fixture: ComponentFixture<NgffContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgffContainerComponent ],
      providers: [
        { provide: NgffDataService, useClass: MockNgffDataService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgffContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
