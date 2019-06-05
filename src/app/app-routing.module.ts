import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren : "./main/main.module#MainModule"},
  {path: 'detail', loadChildren : "./detail/detail.module#DetailModule"},
  {path : "user", loadChildren : "./user/user.module#UserModule"},
  {path : "payment", loadChildren : "./payment/payment.module#PaymentModule"},
  {path : "**", redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
