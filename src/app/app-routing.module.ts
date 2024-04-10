import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'replace-text', loadChildren: () => import('./features/replace-text/replace-text.module').then(m => m.ReplaceTextModule) },
  {
    path: '',
    redirectTo: 'replace-text',
    pathMatch: 'full'
  },
  { path: 'base64-encoder', loadChildren: () => import('./features/base64-encoder/base64-encoder.module').then(m => m.Base64EncoderModule) },
  { path: 'base64-decoder', loadChildren: () => import('./features/base64-decoder/base64-decoder.module').then(m => m.Base64DecoderModule) },
  { path: 'remove-line', loadChildren: () => import('./features/remove-line/remove-line.module').then(m => m.RemoveLineModule) },
  { path: 'json-formatter', loadChildren: () => import('./features/json-formatter/json-formatter.module').then(m => m.JsonFormatterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
