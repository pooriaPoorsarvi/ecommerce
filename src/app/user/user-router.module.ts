import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserInvoicesComponent } from './user-invoices/user-invoices.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const paths : Routes = [
  {path : ":id",  component : UserComponent, children : [
    // {path : "edit", component : UserEditComponent},
    {path : "detail", component : UserDetailComponent},
    {path : "invoices", component : UserInvoicesComponent},
  ]},
  {path : "**", redirectTo : "/home"}
];

@NgModule({
  imports : [RouterModule.forChild(paths)],
  exports : [RouterModule]
})
export class UserRouterModule{}


