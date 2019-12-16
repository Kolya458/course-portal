import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})

export class CourseItemComponent implements OnInit {

  @Input() 
  course: Course;

  constructor() { }

  ngOnInit() {
  }

  delete(){
    console.log('delete')
  }

  edit(){
    console.log('edit')
  }

}
