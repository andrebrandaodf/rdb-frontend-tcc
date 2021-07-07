import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMaskModule } from 'ngx-mask';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';
import { BlogComponent } from 'src/app/components/blog/blog.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { InfoVigiComponent } from 'src/app/components/info-vigi/info-vigi.component';
import { LgpdComponent } from 'src/app/components/lgpd/lgpd.component';
import { NewsComponent } from 'src/app/components/news/news.component';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { QualityControlComponent } from 'src/app/components/quality-control/quality-control.component';
import { TimelineComponent } from 'src/app/components/timeline/timeline.component';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { FilterPipe } from 'src/app/pipes/filter.pipe';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    NewsComponent,
    ContactComponent,
    BlogComponent,
    LgpdComponent,
    QualityControlComponent,
    InfoVigiComponent,
    HighlightDirective,
    FilterPipe,
    TimelineComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMaskModule,
    MatSnackBarModule,
    MatSidenavModule,
  ]
})
export class MainModule { }
