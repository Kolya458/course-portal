import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links: Link[] = [
    {id: 1, imgPath:"assets/img/header/ic-user.svg", span: 'User login'},
    {id: 1, imgPath:"assets/img/header/ic-exit.svg", span: 'Log off'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
