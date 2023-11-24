import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Base64DecoderRoutingModule } from './base64-decoder-routing.module';
import { Base64DecoderComponent } from './base64-decoder.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    Base64DecoderComponent
  ],
  imports: [
    CommonModule,
    Base64DecoderRoutingModule,
    SharedModule
  ]
})
export class Base64DecoderModule { }
