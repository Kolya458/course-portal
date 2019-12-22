import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { SearchComponent } from './search/search.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LoadMoreCoursesComponent } from './load-more-courses/load-more-courses.component';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    SearchComponent,
    CourseItemComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LoadMoreCoursesComponent,
    AddNewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
