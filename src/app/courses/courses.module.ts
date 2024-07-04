import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { CourseImageComponent } from "./course-image/course-image.component";
import { FilterByCategoryPipe } from "../pipes/filter-by-category.pipe";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardComponent,
    CourseImageComponent,
    FilterByCategoryPipe,
  ],
  exports: [CardComponent, CourseImageComponent, FilterByCategoryPipe],
})
export class CoursesModule {}
