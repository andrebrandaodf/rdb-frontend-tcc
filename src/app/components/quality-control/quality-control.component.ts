import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-quality-control',
  templateUrl: './quality-control.component.html',
  styleUrls: ['./quality-control.component.css']
})
export class QualityControlComponent implements OnInit {

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
