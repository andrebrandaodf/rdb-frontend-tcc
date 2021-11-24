import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-info-vigi',
  templateUrl: './info-vigi.component.html',
  styleUrls: ['./info-vigi.component.css']
})
export class InfoVigiComponent implements OnInit {

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
