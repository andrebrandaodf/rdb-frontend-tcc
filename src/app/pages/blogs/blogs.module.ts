import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class BlogModule { }
