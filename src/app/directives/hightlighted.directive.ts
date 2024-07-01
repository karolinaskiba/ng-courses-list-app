import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  input,
  output,
} from "@angular/core";

@Directive({
  selector: "[hightlighted]",
  standalone: true,
})
export class HightlightedDirective {
  @Input("isHighlighted")
  isHighlighted = false;

  onClickDirective = output<string>();

  constructor() {
    console.log("HightlightedDirective");
  }
  @HostBinding("class.hightlighted")
  get cssClasses() {
    return this.isHighlighted;
  }
  // @HostBinding("style.color")
  // get cssClasses() {
  //   return "purple";
  // }

  @HostListener("mouseover")
  mouseOver() {
    this.isHighlighted = true;
  }

  @HostListener("click", ["event"])
  click() {
    console.log(event);
    this.onClickDirective.emit("You can click an directive");
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.isHighlighted = false;
  }
}
