import { Directive, ElementRef, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { NgffDataService } from './ngff-data.service';

@Directive({
  selector: '[ngffIf]'
})
export class NgffIfDirective {

  private featureFlag: string;
  private hide = false;

  @Input()
  set ngffIf(featureFlag: string) {
    this.featureFlag = featureFlag;
    this.updateView();
  }

  @Input()
  set ngffIfHide(hide: boolean) {
    this.hide = hide;
    this.updateView();
  }

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private ngffDataService: NgffDataService
  ) { }

  private check() {
    return this.hide ? !this.ngffDataService.enabled(this.featureFlag) :
      this.ngffDataService.enabled(this.featureFlag);
  }

  private updateView() {
    if (this.check()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
