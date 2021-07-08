import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/core/model/blog.model';
import { BlogService } from 'src/app/core/service/blog.service';

@Component({
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  blogId: any;
  blogCurrent: any;

  constructor(
    private router: ActivatedRoute,
    private blogService: BlogService,
  ) { }

  ngOnInit(): void {

    this.router.params.subscribe((params: any) => {
      this.blogId = params['id'];
    });

    this.getById();
  }

  getById() {
    this.blogService.getById(this.blogId).subscribe((res: any) => {
      this.blogCurrent = res;
    })
  }

}
