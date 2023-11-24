import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveLineRoutingModule } from './remove-line-routing.module';
import { RemoveLineComponent } from './remove-line.component';


@NgModule({
  declarations: [
    RemoveLineComponent
  ],
  imports: [
    CommonModule,
    RemoveLineRoutingModule
  ]
})
export class RemoveLineModule { }
