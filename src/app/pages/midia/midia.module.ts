import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MidiaRoutingModule } from './midia-routing.module';
import { MidiaComponent } from './midia.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    MidiaComponent
  ],
  imports: [
    CommonModule,
    MidiaRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ]
})
export class MidiaModule { }
