import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[metMultiply]'
})
export class MultiplyDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set metMultiply(count: number) {
    let length = this.viewContainer.length;
    count = Math.max(0, count);
    if (length > count) {
      for (let i = 0; i < length - count; i++) {
        this.viewContainer.remove()
      }
    } else if (length < count) {
      for (let i = 0; i < count - length; i++) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
  }

}
