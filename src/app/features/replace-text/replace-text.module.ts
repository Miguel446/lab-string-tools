import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReplaceTextRoutingModule } from './replace-text-routing.module';
import { ReplaceTextComponent } from './replace-text.component';


@NgModule({
  declarations: [
    ReplaceTextComponent
  ],
  imports: [
    CommonModule,
    ReplaceTextRoutingModule
  ]
})
export class ReplaceTextModule { }
