import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SafePipeModule } from 'src/app/pipes/safe-url/safe-url.module';
import { TruncatePipeModule } from 'src/app/pipes/pipe-truncate/truncate.module';
import { ControlQualityComponent } from './control-quality.component';
import { ControlQualityRoutingModule } from './control-quality-routing.module';

@NgModule({
  declarations: [
  ControlQualityComponent
  ],
  imports: [
    CommonModule,
    ControlQualityRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    SafePipeModule,
    TruncatePipeModule,
  ]
})
export class ControlQualityModule { }
