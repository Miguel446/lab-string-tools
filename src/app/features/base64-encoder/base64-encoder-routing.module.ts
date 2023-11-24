import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Base64EncoderComponent } from './base64-encoder.component';

const routes: Routes = [{ path: '', component: Base64EncoderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Base64EncoderRoutingModule { }
