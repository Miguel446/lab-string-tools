import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReplaceTextRoutingModule } from './replace-text-routing.module';
import { ReplaceTextComponent } from './replace-text.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ReplaceTextComponent
  ],
  imports: [
    CommonModule,
    ReplaceTextRoutingModule,
    SharedModule
  ]
})
export class ReplaceTextModule { }
