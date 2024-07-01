import { Component, input } from "@angular/core";
import { LikeMethodUseDirective } from "src/app/directives/like-method-use.directive";
import { StrukturalDirective } from "src/app/directives/struktural.directive";
@Component({
  selector: "course-image",
  standalone: true,
  imports: [LikeMethodUseDirective, StrukturalDirective],
  templateUrl: "./course-image.component.html",
  styleUrl: "./course-image.component.css",
})
export class CourseImageComponent {
  iconUrl = input<string>();
  iconUrlDesc = input<string>();
}
