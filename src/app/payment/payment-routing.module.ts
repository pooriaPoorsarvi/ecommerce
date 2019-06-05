import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaymentComponent } from './payment.component';
import { PaymentCheckoutComponent } from './payment-checkout/payment-checkout.component';

var routes : Routes = [
  { path : '', children : [
      {path : '', component : PaymentComponent},
      {path : 'checkout', component : PaymentCheckoutComponent},
    ]
  },

];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class PaymentRoutingModule { }






