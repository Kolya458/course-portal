import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../course';


@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})

export class CourseItemComponent implements OnInit {

  @Input() course: Course;
  
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteItem(id: number) {
    this.delete.emit(id);
  }

  edit(){
    console.log('edit')
  }

}
