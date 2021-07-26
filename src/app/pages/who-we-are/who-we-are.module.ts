import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SafePipeModule } from 'src/app/pipes/safe-url/safe-url.module';
import { WhoWeAreComponent } from './who-we-are.component';
import { WhoWeAreRoutingModule } from './who-we-are-routing.module';

@NgModule({
  declarations: [
    WhoWeAreComponent
  ],
  imports: [
    CommonModule,
    WhoWeAreRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    SafePipeModule,
  ]
})
export class WhoWeAreModule { }
