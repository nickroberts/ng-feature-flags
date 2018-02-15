import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgffListComponent } from './ngff-list.component';
import { NgffDataService } from '../ngff-data.service';
import { FormsModule } from '@angular/forms';

class MockNgffDataService {
  enabledFlags = {};
  enabled = (key: string) => !!Object.keys(this.enabledFlags).length;
  enable = (key: string) => this.enabledFlags[key] = true;
  disable = (key: string) => this.enabledFlags[key] = false;
  reset = (key: string) => delete this.enabledFlags[key];
}

describe('NgffListComponent', () => {
  let component: NgffListComponent;
  let fixture: ComponentFixture<NgffListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ NgffListComponent ],
      providers: [
        { provide: NgffDataService, useClass: MockNgffDataService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
