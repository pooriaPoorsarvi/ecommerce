import { BootstrapSizeService } from './../../shared-services/bootstrap-size.service';
import { AuthenticationService } from './../../shared-services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/dataModules/User.model';
import { SizeStateBootstrap } from 'src/app/shared-services/bootstrap-size.service';

@Component({
  selector: 'app-payment-checkout',
  templateUrl: './payment-checkout.component.html',
  styleUrls: ['./payment-checkout.component.css']
})
export class PaymentCheckoutComponent implements OnInit {

  bs : SizeStateBootstrap;

  lat: any;
  lng: any;

  user : UserModel;

  constructor(public authenticationService : AuthenticationService,
              public bootstrapSizeService : BootstrapSizeService) {
    if (navigator)
    {
      navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      },
      error => {
        console.log(error);
      },
      {timeout:10000}
      )

    }
  }

  ngOnInit() {

    this.bs = this.bootstrapSizeService.stateSnapshot;
    this.bootstrapSizeService.stateBuffer.subscribe(
      (bs) => {
        this.bs = bs ;
      }
    );

    this.user = this.authenticationService.current_activated_user;
    this.authenticationService.activated_user_buffer.subscribe(
      (user) => {
        this.user = user;
      }
    );
  }

}
