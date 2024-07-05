import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CardComponent } from "./courses/card/card.component";
import { CourseImageComponent } from "./courses/course-image/course-image.component";
import { LikeMethodUseDirective } from "./directives/like-method-use.directive";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { CoursesModule } from "./courses/courses.module";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { CourseTitleComponent } from "./components/course-title/course-title.component";

// Function to create TranslateHttpLoader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  //declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CourseTitleComponent,
    LikeMethodUseDirective,
    HttpClientModule,
    CoursesModule,
    CardComponent,
    CourseImageComponent,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  // bootstrap: [AppComponent],
})
export class AppModule {}
