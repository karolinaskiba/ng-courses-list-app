import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
  ViewChild,
  ContentChild,
  inject,
} from "@angular/core";
import { COURSES } from "../db-data";
import { CardComponent } from "./courses/card/card.component";
import { CourseImageComponent } from "./courses/course-image/course-image.component";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "./model/course";
import { CorsesService } from "./services/corses.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  coreCourse;

  private corsesService = inject(CorsesService);

  ngOnInit(): void {
    this.corsesService.gatData().subscribe(
      (data: { payload: Course[] }) => {
        this.coreCourse = data.payload;
      },
      (error) => {
        console.error("Wystąpił błąd:", error);
      }
    );
  }

  @ViewChildren(CardComponent)
  cards: QueryList<CardComponent>;

  @ViewChild("courseFooter")
  courseFooter: ElementRef;

  @ContentChild("childElement", { static: true })
  childElement!: ElementRef;

  onCourseView(id: number) {
    // console.log("courseFooter", this.courseFooter);
  }
  addNew() {
    this.coreCourse.push({
      id: 0,
      description: "Angular Core Deep Dive",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      longDescription:
        "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: "INTERMEDIATE",
      lessonsCount: 10,
    });
  }
  ngAfterViewInit(): void {
    //   this.cards.forEach((item) => {
    //     console.log(item);
    //   });
    if (this.childElement) {
      console.log(
        "Element child:",
        this.childElement.nativeElement.textContent
      );
    } else {
      console.log("Element child nie został znaleziony");
    }
    console.log("ngAfterViewInit", this.cards.first.course());

    this.cards.changes.subscribe((cards) => {
      console.log(cards);
    });
  }
  save(corse: Course) {
    this.corsesService.saveCors(corse).subscribe(() => {
      console.log("stet");
    });
  }
}
