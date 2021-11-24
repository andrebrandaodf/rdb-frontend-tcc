import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SafePipeModule } from 'src/app/pipes/safe-url/safe-url.module';
import { TruncatePipeModule } from 'src/app/pipes/pipe-truncate/truncate.module';
import { ControlQualityComponent } from './control-quality.component';
import { ControlQualityRoutingModule } from './control-quality-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';

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
    
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
  ]
})
export class ControlQualityModule { }
