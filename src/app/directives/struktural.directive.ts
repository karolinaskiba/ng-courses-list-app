import {
  Directive,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[struktural]",
  standalone: true,
})
export class StrukturalDirective {
  constructor(
    private templeteRef: TemplateRef<any>,
    private vewContainer: ViewContainerRef
  ) {}
  @Input()
  set struktural(argument: string) {
    if (!argument) {
      this.vewContainer.createEmbeddedView(this.templeteRef);
    } else {
      this.vewContainer.clear();
    }
  }
}
