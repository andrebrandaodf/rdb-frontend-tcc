import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MidiaRoutingModule } from './midia-routing.module';
import { MidiaComponent } from './midia.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SafePipeModule } from 'src/app/pipes/safe-url/safe-url.module';
import { TruncatePipeModule } from 'src/app/pipes/pipe-truncate/truncate.module';

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
    SafePipeModule,
    TruncatePipeModule,
  ]
})
export class MidiaModule { }
