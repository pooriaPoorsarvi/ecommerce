import { SizeService, SizeState } from './../../shared-services/size-compat.service';
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductServerService } from 'src/app/shared-services/product-server.service';
import { ProductModel } from 'src/app/dataModules/Product.model';
import { Subscription } from 'rxjs';



@Component({
  selector : "app-detail-page",
  templateUrl : "detail-page.component.html",
  styleUrls : ["detail-page.component.css"],
})

export class DetailPageComponent implements OnInit{

  lap : boolean ;

  product : ProductModel;
  subscriptionProduct : Subscription;

  constructor(public sizeService : SizeService,
              public router : Router,
              public route : ActivatedRoute,
              public productServerSerice : ProductServerService){}


  ngOnInit(){


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


