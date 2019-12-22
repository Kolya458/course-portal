import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { COURSES } from '../mock-courses-list';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses: Course[] = COURSES;

  constructor() { }

  ngOnInit() {
  }

}
