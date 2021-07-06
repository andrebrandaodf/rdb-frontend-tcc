import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
