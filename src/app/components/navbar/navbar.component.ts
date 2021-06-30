import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(el: string) {
    const element: HTMLElement = document.getElementById(el)!;
    element.scrollIntoView({ behavior:"smooth" });
  }

}
