import { AddressModel } from './../../dataModules/Address.model';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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


  selectedAddress = new AddressModel(null, null, null, null, null, null, null, null);




  bs : SizeStateBootstrap;

  lat: any = 51.811774899999996;
  lng: any = 35.747866;

  user : UserModel;


  form : FormGroup;

  latLangCheck = new Subject<boolean>() ;


  constructor(public authenticationService : AuthenticationService,
              public bootstrapSizeService : BootstrapSizeService) {

    // TODO make site SSH and add this geo service
    if (navigator)
    {
      navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        console.log("current lat lang", this.lng, this.lat)
        this.latLangCheck.next(true);
      },
      error => {
        console.log("error geo", error);
      },
      {timeout:100000}
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




    this.form = new FormGroup({
      'name' : new FormControl(null, [Validators.required]),
      'province' : new FormControl(null, [Validators.required]),
      'city' : new FormControl(null, [Validators.required]),
      'zip' : new FormControl(null, [Validators.required]),
      'address' : new FormControl(null, [Validators.required]),
      'phone' : new FormControl(),
    });

  }

  log(a) {
    console.log(a);
  }

}
