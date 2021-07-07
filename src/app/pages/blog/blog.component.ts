import { Component, HostListener, OnInit } from '@angular/core';
import { Blog } from 'src/app/core/model/blog.model';
import { BlogService } from 'src/app/core/service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  innerWidth: number = 0;

  blogs: Blog[] = [];

  pagination = {
    pageNumber : 0,
    pageSize: 3
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  constructor(private blogService: BlogService) {
    this.innerWidth = window.innerWidth;
   }

  ngOnInit(): void {
    this.getBlogPage();
  }

  getNewPage() {
    this.pagination.pageNumber ++;
    this.getBlogPage();
  }

  getBlogPage() {
    this.blogService.getWithPagination(this.pagination.pageNumber, this.pagination.pageSize).subscribe((res: any) => {
      console.log(res);
      this.blogs = this.blogs.concat(res.content);
    })
  }

}
