import { Component } from "@angular/core";
import { COURSES } from "../db-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  coreCourse = COURSES;
  onCourseView(id: number) {
    console.log("course id", id);
  }
}
