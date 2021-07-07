import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/splash-screen/splash-screen.module').then(m => m.SplashScreenModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },

  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)
  },

  {
    path: 'midia',
    loadChildren: () => import('./pages/midia/midia.module').then(m => m.MidiaModule)
  },

  // {
  //   path: '**',
  //   loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
