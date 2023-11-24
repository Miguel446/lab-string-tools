import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoveLineComponent } from './remove-line.component';

const routes: Routes = [{ path: '', component: RemoveLineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoveLineRoutingModule { }
