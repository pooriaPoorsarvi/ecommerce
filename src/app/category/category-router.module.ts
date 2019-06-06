import { CategoryComponent } from './category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


var routes : Routes = [
  {path : ':id', component : CategoryComponent}
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class CategoryRouterModule { }


