import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';



var routes : Routes = [
  {path : ':id', component : SearchComponent}
];


@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule],
})
export class SearchRouterModule{

}

