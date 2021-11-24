import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MidiaComponent } from './midia.component';

const routes: Routes = [{ path: '', component: MidiaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MidiaRoutingModule { }
