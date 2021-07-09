import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  innerWidth: number = 0;
  scrollY: number = 0;
  aux: number = 0;
  show: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:scroll') onWindowScroll() {
    this.aux = this.scrollY;
    this.scrollY = window.scrollY;
    this.show = this.scrollY - this.aux <= 0 ? true : false;
  }

  constructor(private router: Router) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void { }

  scrollTo(id: string) {

    if (this.router.url.includes('/blog') || this.router.url.includes('/midia')) {
      this.router.navigate(['']);
      setTimeout(() => {
        const element: HTMLElement = document.getElementById(id)!;
        element.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      const element: HTMLElement = document.getElementById(id)!;
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

}
