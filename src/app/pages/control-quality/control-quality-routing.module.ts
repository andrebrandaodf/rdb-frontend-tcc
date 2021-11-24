import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlQualityComponent } from './control-quality.component';

const routes: Routes = [{ path: '', component: ControlQualityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlQualityRoutingModule { }
