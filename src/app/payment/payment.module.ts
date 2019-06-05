import { PaymentRoutingModule } from './payment-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { SharedMaterialsModule } from '../shared-materials/shared-materials.module';
import { PaymentCheckoutComponent } from './payment-checkout/payment-checkout.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [PaymentComponent, PaymentCheckoutComponent],
  imports: [
    CommonModule,
    SharedMaterialsModule,
    PaymentRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAld0M27MakpmlsiC4CTT1hdSia5pip_hQ'
    })
  ]
})
export class PaymentModule { }



