import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: 'home', loadChildren : "./main/main.module#MainModule"},
  {path: 'detail', loadChildren : "./detail/detail.module#DetailModule"},
  {path : "**", redirectTo:'detail/1'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
