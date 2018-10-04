import { Directive, ElementRef, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';
import { NgffDataService } from './ngff-data.service';

export enum NgffIfOperator {
  AND = 'AND',
  OR = 'OR'
}

@Directive({
  selector: '[ngffIf]'
})
export class NgffIfDirective implements OnInit {
  private featureFlags: string[];
  private hide = false;
  private operator = NgffIfOperator.AND;

  @Input()
  set ngffIf(featureFlags: string[]) {
    this.featureFlags = featureFlags;
    this.updateView();
  }

  @Input()
  set ngffIfHide(hide: boolean) {
    this.hide = hide;
    this.updateView();
  }

  @Input()
  set ngffIfOperator(operator: NgffIfOperator) {
    this.operator = operator;
    this.updateView();
  }

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private ngffDataService: NgffDataService
  ) {}

  ngOnInit() {
    this.ngffDataService.data$.subscribe(response => this.updateView());
  }

  private check() {
    if (this.operator === NgffIfOperator.OR) {
      if (this.hide) {
        return this.featureFlags
          .map(ff => !this.ngffDataService.enabled(ff))
          .reduce((init, current) => init || current);
      } else {
        return this.featureFlags.map(ff => this.ngffDataService.enabled(ff)).reduce((init, current) => init || current);
      }
    } else {
      if (this.hide) {
        return this.featureFlags
          .map(ff => !this.ngffDataService.enabled(ff))
          .reduce((init, current) => init && current);
      } else {
        return this.featureFlags.map(ff => this.ngffDataService.enabled(ff)).reduce((init, current) => init && current);
      }
    }
  }

  private updateView() {
    if (this.check()) {
      if (!this.viewContainer.length) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    } else {
      this.viewContainer.clear();
    }
  }
}
