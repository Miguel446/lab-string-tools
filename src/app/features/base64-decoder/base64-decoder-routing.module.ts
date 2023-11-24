import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Base64DecoderComponent } from './base64-decoder.component';

const routes: Routes = [{ path: '', component: Base64DecoderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Base64DecoderRoutingModule { }
