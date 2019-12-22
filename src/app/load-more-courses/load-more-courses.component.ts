import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-more-courses',
  templateUrl: './load-more-courses.component.html',
  styleUrls: ['./load-more-courses.component.scss']
})
export class LoadMoreCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  load(){
    console.log('load');
  }

}
