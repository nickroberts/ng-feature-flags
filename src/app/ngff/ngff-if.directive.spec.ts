import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NgffIfDirective } from './ngff-if.directive';
import { NgffDataService } from './ngff-data.service';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <h2 *ngffIf="'feature-flag-name'">visible</h2>
    <h2 *ngffIf="'feature-flag-name'; hide: true">hidden</h2>
    <h2 *ngffIf="'another-feature-flag-name'">hidden</h2>
    <h2 *ngffIf="'another-feature-flag-name'; hide: true">visible</h2>
  `
})
class TestComponent { }

class MockNgffDataService {
  enabledFlags = [
    'feature-flag-name'
  ];
  enabled = (featureFlag: string) => this.enabledFlags.indexOf(featureFlag) > -1;
}

describe('NgffIfDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let comps: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
        declarations: [ NgffIfDirective, TestComponent ],
        providers: [
          {
            provide: NgffDataService,
            useClass: MockNgffDataService
          }
        ]
      })
      .createComponent(TestComponent);
    fixture.detectChanges();

    comps = fixture.debugElement.queryAll(By.directive(NgffIfDirective));
  });
  it('should create an instance', () => {
    expect(comps).toBeTruthy();
  });
});
