import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-lgpd',
  templateUrl: './lgpd.component.html',
  styleUrls: ['./lgpd.component.css']
})
export class LgpdComponent implements OnInit {

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
