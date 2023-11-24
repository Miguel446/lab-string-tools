import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Base64EncoderRoutingModule } from './base64-encoder-routing.module';
import { Base64EncoderComponent } from './base64-encoder.component';


@NgModule({
  declarations: [
    Base64EncoderComponent
  ],
  imports: [
    CommonModule,
    Base64EncoderRoutingModule
  ]
})
export class Base64EncoderModule { }
