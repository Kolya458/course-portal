import { Component, OnInit, Input, Output } from '@angular/core';
import { Course } from '../course';
import { EventEmitter } from 'protractor';

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

  @Output() delete = new EventEmitter();

  deleteItem(id: number) {
    this.delete.emit(id.toString());
  }

  edit(){
    console.log('edit')
  }

}
