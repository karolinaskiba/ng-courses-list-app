import { Component, Input, output, input } from "@angular/core";
import { Course } from "../../model/course";
@Component({
  selector: "card",
  standalone: true,
  imports: [],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
})
export class CardComponent {
  course = input<Course>();
  onCourseView = output<number>();

  courseView(id: number) {
    this.onCourseView.emit(id);
  }
}
