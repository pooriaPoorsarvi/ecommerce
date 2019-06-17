import { ShoppingCartService } from './../../shared-services/shopping-cart.service';
import { BrandService } from './../../shared-services/brand.service';
import { BootstrapSizeService } from './../../shared-services/bootstrap-size.service';
import { SizeService, SizeState } from './../../shared-services/size-compat.service';
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductServerService } from 'src/app/shared-services/product-server.service';
import { ProductModel } from 'src/app/dataModules/Product.model';
import { Subscription } from 'rxjs';
import { SizeStateBootstrap } from 'src/app/shared-services/bootstrap-size.service';



@Component({
  selector : "app-detail-page",
  templateUrl : "detail-page.component.html",
  styleUrls : ["detail-page.component.css"],
})

export class DetailPageComponent implements OnInit{


  sb : SizeStateBootstrap;

  lap : boolean ;

  product : ProductModel;
  subscriptionProduct : Subscription;

  constructor(public sizeService : SizeService,
              public router : Router,
              public route : ActivatedRoute,
              public productServerSerice : ProductServerService,
              public bootstrapSizeService : BootstrapSizeService,
              public brandService : BrandService,
              public shoppingCartService : ShoppingCartService){}


  ngOnInit(){


    this.sb = this.bootstrapSizeService.stateSnapshot;
    this.bootstrapSizeService.stateBuffer.subscribe(
      (sbn) => {
        this.sb = sbn;
      }
    );


    this.subscriptionProduct = this.productServerSerice.getProduct(this.route.snapshot.params["id"] as number).subscribe(
      (product) => {
        this.product = product;
      }
    );
    this.route.params.subscribe(
      (params : Params) => {
        this.subscriptionProduct.unsubscribe();
        this.subscriptionProduct = this.productServerSerice.getProduct(params["id"] as number).subscribe(
          (product) => {
            this.product = product;
          }
        );
      }
    );

    this.lap = ! this.sizeService.stateSnapshot.small;

    this.sizeService.stateBuffer.subscribe(
      (sizeBuffer : SizeState) => {
        this.lap = ! sizeBuffer.small;
      }
    );

  }


}


