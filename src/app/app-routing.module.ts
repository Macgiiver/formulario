import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'G8',
    loadChildren: () => import('./reactive/reactive.module').then(m=> m.ReactiveModule)
  },
  {
    path: '**',
    redirectTo: 'G8'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
