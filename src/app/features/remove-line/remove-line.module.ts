import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveLineRoutingModule } from './remove-line-routing.module';
import { RemoveLineComponent } from './remove-line.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    RemoveLineComponent
  ],
  imports: [
    CommonModule,
    RemoveLineRoutingModule,
    SharedModule
  ]
})
export class RemoveLineModule { }
