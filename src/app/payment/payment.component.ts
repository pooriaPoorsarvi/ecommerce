import { Router, ActivatedRoute } from '@angular/router';
import { BootstrapSizeService, SizeStateBootstrap } from './../shared-services/bootstrap-size.service';
import { ShoppingCartService } from './../shared-services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../dataModules/Product.model';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  form : FormGroup;
  amounts : FormGroup[];

  bs : SizeStateBootstrap;

  products : ProductModel[];


  constructor(public shoppingCartService : ShoppingCartService,
              public  bootstrapSizeService : BootstrapSizeService,
              public router : Router,
              public route : ActivatedRoute) { }



  computeTotalAmount() : number{
    var sum = 0;
    for (let prod of this.products){
      var price : number;
      if(prod.promo_code){
        price = (1-prod.promo_code.percent) * prod.main_price;
      }else{
        price = prod.main_price;
      }
      sum += price * prod.quantity;
    }
    return sum;
  }


  ngOnInit() {


    this.products = this.shoppingCartService.getSnapShot();
    this.shoppingCartService.products_observer.subscribe(
      (products) => {
        this.products = products;
      }
    );

    this.bs = this.bootstrapSizeService.stateSnapshot;
    this.bootstrapSizeService.stateBuffer.subscribe(
      (bs) => {
        this.bs = bs;
      }
    );


    this.amounts = [];
    for(let prod of this.products){
      this.amounts.push(
        new FormGroup({
          "amount" : new FormControl(prod.quantity, [
            Validators.required,
            Validators.min(0),
          ]),
        }),
      );
    }

    this.form = new FormGroup({
      'amounts' : new FormArray(this.amounts),
    });



  }



  checkout(){
    this.router.navigate(["checkout"], {relativeTo : this.route});
  }

}
