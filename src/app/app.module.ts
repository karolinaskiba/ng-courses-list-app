import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CardComponent } from "./courses/card/card.component";
import { CourseImageComponent } from "./courses/course-image/course-image.component";
import { LikeMethodUseDirective } from "./directives/like-method-use.directive";
import { HttpClientModule } from "@angular/common/http";
import { CoursesModule } from "./courses/courses.module";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    LikeMethodUseDirective,
    HttpClientModule,
    CoursesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
