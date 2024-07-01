import {
  Component,
  Input,
  output,
  input,
  viewChild,
  ViewChild,
  ContentChild,
  ElementRef,
  ContentChildren,
  signal,
} from "@angular/core";
import { Course } from "../../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";
import { CommonModule } from "@angular/common";
import { HightlightedDirective } from "../../directives/hightlighted.directive";
@Component({
  selector: "card",
  standalone: true,
  imports: [CommonModule, CourseImageComponent, HightlightedDirective],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
})
export class CardComponent {
  course = input<Course>();
  onCourseView = output<number>();
  isHighlighted = signal<boolean>(false);

  @ContentChild(CourseImageComponent, { read: ElementRef })
  image: CourseImageComponent;

  courseView(id: number) {
    this.onCourseView.emit(id);
  }

  ngAfterContentInit(): void {
    // console.log("image", this.image);
  }
  onClickDirective(arg: string) {
    console.log(arg);
    this.isHighlighted.set(true);
  }

  ngAfterViewInit(): void {}
  getSomeClass() {
    return {
      beginner: this.course().category === "BEGINNER",
      advanced: this.course().category === "ADVANCED",
      intermediate: this.course().category === "INTERMEDIATE",
    };
  }
}
