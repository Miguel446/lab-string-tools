import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'replace-text', loadChildren: () => import('./features/replace-text/replace-text.module').then(m => m.ReplaceTextModule) },
  {
    path: '',
    redirectTo: 'replace-text',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
