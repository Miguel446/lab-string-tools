import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplaceTextComponent } from './replace-text.component';

const routes: Routes = [{ path: '', component: ReplaceTextComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReplaceTextRoutingModule { }
