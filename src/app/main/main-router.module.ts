import { MainPageComponent } from './main-page/main-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes : Routes = [
  {path : "", component : MainPageComponent},
];

@NgModule({
  imports : [
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class MainRouterModule{}

