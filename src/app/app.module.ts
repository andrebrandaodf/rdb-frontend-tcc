import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { WorkWithUsComponent } from './components/work-with-us/work-with-us.component';
import { CertificateInAnalysisComponent } from './components/certificate-in-analysis/certificate-in-analysis.component';
import { NewsComponent } from './components/news/news.component';
import { SacComponent } from './components/sac/sac.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LgpdComponent } from './components/lgpd/lgpd.component';
import { QualityControlComponent } from './components/quality-control/quality-control.component';
import { InfoVigiComponent } from './components/info-vigi/info-vigi.component';
import { HighlightDirective } from './directives/highlight.directive'; // ->  imported directive
import { FilterPipe } from './pipes/filter.pipe';
import { BlogViewComponent } from './components/views/blog-view/blog-view.component';
import { MatTableModule } from '@angular/material/table';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    WorkWithUsComponent,
    CertificateInAnalysisComponent,
    NewsComponent,
    SacComponent,
    ContactComponent,
    BlogComponent,
    FooterComponent,
    LgpdComponent,
    QualityControlComponent,
    InfoVigiComponent,
    HighlightDirective,
    FilterPipe,
    BlogViewComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
