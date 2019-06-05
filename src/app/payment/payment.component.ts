import { Router, ActivatedRoute } from '@angular/router';
import { BootstrapSizeService, SizeStateBootstrap } from './../shared-services/bootstrap-size.service';
import { ShoppingCartService } from './../shared-services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  bs : SizeStateBootstrap;


  constructor(public shoppingCartService : ShoppingCartService,
              public  bootstrapSizeService : BootstrapSizeService,
              public router : Router,
              public route : ActivatedRoute) { }



  computeTotalAmount() : number{
    return 420;
  }


  ngOnInit() {

    this.bs = this.bootstrapSizeService.stateSnapshot;
    this.bootstrapSizeService.stateBuffer.subscribe(
      (bs) => {
        this.bs = bs;
      }
    );

  }



  checkout(){
    this.router.navigate(["checkout"], {relativeTo : this.route});
  }

}
