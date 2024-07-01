import { Directive } from "@angular/core";

@Directive({
  selector: "[likeMethodUse]",
  standalone: true,
  exportAs: "lm",
})
export class LikeMethodUseDirective {
  constructor() {}

  toggle() {
    console.log("toggle from directive");
  }
}
