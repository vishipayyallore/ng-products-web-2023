import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { SpinnerStructuralComponent } from './spinner-structural/spinner-structural.component';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective {

  @Input()
  set appSpinner(isLoading: boolean) {

    if (isLoading) {
      this.view.clear();
      this.view.createComponent(SpinnerStructuralComponent);
    } else {
      this.view.clear();
      this.view.createEmbeddedView(this.template);
    }

  }

  constructor(private view: ViewContainerRef, readonly template: TemplateRef<AnimationPlayState>) {
  }

}
