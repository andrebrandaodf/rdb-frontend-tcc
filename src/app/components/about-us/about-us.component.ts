import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  innerWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  constructor() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
  }

}
