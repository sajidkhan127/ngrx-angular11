import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    PinchZoomModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
})
export class HomeModule {}
