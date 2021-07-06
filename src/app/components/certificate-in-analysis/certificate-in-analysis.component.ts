import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-certificate-in-analysis',
  templateUrl: './certificate-in-analysis.component.html',
  styleUrls: ['./certificate-in-analysis.component.css']
})
export class CertificateInAnalysisComponent implements OnInit {
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
