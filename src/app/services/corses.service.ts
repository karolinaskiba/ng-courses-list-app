import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../model/course";

@Injectable({
  providedIn: "root",
})
export class CorsesService {
  constructor() {}
  private http = inject(HttpClient);

  gatData(): Observable<any> {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");

    return this.http.get("/api/courses", { params });
  }

  saveCors(corse: Course) {
    const headers = new HttpHeaders().set("X-Auth", "userId");
    return this.http.put("/api/courses/" + corse.id, corse, { headers });
  }
}
