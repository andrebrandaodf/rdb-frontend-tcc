import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { CertificateInAnalysisComponent } from './components/certificate-in-analysis/certificate-in-analysis.component';
import { NewsComponent } from './components/news/news.component';
import { WorkWithUsComponent } from './components/work-with-us/work-with-us.component';
import { SacComponent } from './components/sac/sac.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { 
      path:'',
      component: HomeComponent,
  },
  // {
  //     path: '**',
  //     redirectTo: 'home',
  // },
  { 
      path:"home",
      component: HomeComponent,
  },
  {
      path:"about-us",
      component: AboutUsComponent
  },
  {
      path:"blog",
      component: BlogComponent
  },
  {
      path:"certificate-in-analysis",
      component: CertificateInAnalysisComponent
  },
  {
      path:"contact",
      component: ContactComponent
  },
  {
      path:"news",
      component: NewsComponent
  },
  {
      path: "work-with-us",
      component: WorkWithUsComponent
  },
  {
      path: "sac",
      component: SacComponent
  },
  {
      path:"products",
      component: ProductsComponent,  
  }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
