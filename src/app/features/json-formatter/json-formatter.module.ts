import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonFormatterRoutingModule } from './json-formatter-routing.module';
import { JsonFormatterComponent } from './json-formatter.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    JsonFormatterComponent
  ],
  imports: [
    CommonModule,
    JsonFormatterRoutingModule,
    SharedModule
  ]
})
export class JsonFormatterModule { }
