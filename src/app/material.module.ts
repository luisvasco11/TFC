import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }