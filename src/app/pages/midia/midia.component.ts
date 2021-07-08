import { Component, HostListener, OnInit } from '@angular/core';
import { Midia } from 'src/app/core/model/midia.model';
import { MidiaService } from 'src/app/core/service/midia.service';

@Component({
  selector: 'app-midia',
  templateUrl: './midia.component.html',
  styleUrls: ['./midia.component.css']
})
export class MidiaComponent implements OnInit {

  innerWidth: number = 0;

  midias: Midia[] = [];

  pagination = {
    pageNumber: 0,
    pageSize: 3
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  constructor(private midiaService: MidiaService) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.getMidiaPage();
  }

  getNewPage() {
    this.pagination.pageNumber++;
    this.getMidiaPage();
  }

  getMidiaPage() {
    this.midiaService.getWithPagination(this.pagination.pageNumber, this.pagination.pageSize).subscribe((res: any) => {
      this.midias = this.midias.concat(res.content);
    })
  }

}
