import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { Blog } from '../../model/blog.model';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  blog: Blog[] = [];
  displayedColumns = [
    'id',
    'title',
    'description',
    'urlImage',
  ];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    console.log('entrou');
    this.blogService.getAll().subscribe((blog: any) => {
      console.log(blog);
      this.blog = blog;
    });
    this.blogService.read().subscribe((blog: any) => {
      this.blog = blog;
      console.log(blog);
    });
  }
}
