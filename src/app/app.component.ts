import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
  ViewChild,
  ContentChild,
  inject,
  Injector,
} from "@angular/core";
import { COURSES } from "../db-data";
import { CardComponent } from "./courses/card/card.component";
import { CourseImageComponent } from "./courses/course-image/course-image.component";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "./model/course";
import { CorsesService } from "./services/corses.service";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { createCustomElement } from "@angular/elements";
import { CourseTitleComponent } from "./components/course-title/course-title.component";
import { CoursesModule } from "./courses/courses.module";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [
    CoursesModule,
    CardComponent,
    CourseImageComponent,
    TranslateModule,
    CommonModule,
  ],
})
export class AppComponent {
  coreCourse;
  coursesTotal = 10;
  private corsesService = inject(CorsesService);
  private translate = inject(TranslateService);
  private inj = inject(Injector);

  ngOnInit(): void {
    this.corsesService.gatData().subscribe(
      (data: { payload: Course[] }) => {
        this.coreCourse = data.payload;
        this.coursesTotal = data.payload.length;
      },
      (error) => {
        console.error("Wystąpił błąd:", error);
      }
    );

    const htmlElement = createCustomElement(CourseTitleComponent, {
      injector: this.inj,
    });
    customElements.define("course-title", htmlElement);
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

    this.cards.changes.subscribe((cards) => {
      console.log(cards);
    });
  }
  save(corse: Course) {
    this.corsesService.saveCors(corse).subscribe(() => {
      console.log("stet");
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
