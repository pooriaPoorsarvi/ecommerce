import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserInvoicesComponent } from './user-invoices/user-invoices.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { InvoiceComponent } from './invoice/invoice.component';

const paths : Routes = [
  {path : ":id", children : [
    {path:'', component : UserComponent},
    {path : 'invoice/:param', component : InvoiceComponent},
  ]},
  {path : "**", redirectTo : "/home"}
];

@NgModule({
  imports : [RouterModule.forChild(paths)],
  exports : [RouterModule]
})
export class UserRouterModule{}


