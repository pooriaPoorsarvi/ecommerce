import { DetailPageComponent } from './detial-page/detail-page.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const paths : Routes = [
  {"path" : "", component : DetailPageComponent},
];

@NgModule({
  imports : [RouterModule.forChild(paths)],
  exports : [RouterModule]
})
export class DetailRouterModule{

}






