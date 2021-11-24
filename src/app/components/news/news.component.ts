import { Component, HostListener, OnInit } from '@angular/core';
import { Midia } from 'src/app/core/model/midia.model';
import { MidiaService } from 'src/app/core/service/midia.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})

export class NewsComponent implements OnInit {

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

  getMidiaPage() {
    this.midiaService.getWithPagination(this.pagination.pageNumber, this.pagination.pageSize).subscribe((res: any) => {
      this.midias = this.midias.concat(res.content);
    })
  }

}
