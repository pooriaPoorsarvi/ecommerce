import { ClickAble } from './../dataModules/click-able.model';
import { ProductModel } from 'src/app/dataModules/Product.model';
import { SpinnerService } from 'src/app/shared-services/spinner.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { CategoryModel } from '../dataModules/Category.model';


@Injectable()
export class RoutingService{
  constructor(private router : Router,
              private route : ActivatedRoute,
              private spinnerService : SpinnerService){}


  getProductUrl(product : ProductModel){
    return '/detail/'+ product.uid;
  }
  goToProduct(product : ProductModel){
  console.log(product);
  this.finalNavigate([this.getProductUrl(product)], null);
  }


  getCategoryUrl(category : CategoryModel){
    return '/category/'+category.id;
  }
  goToCategory(category : CategoryModel){
    this.finalNavigate([this.getCategoryUrl(category)], null);
  }

  goToShoppingCart(){
    this.finalNavigate(['payment'])
  }



  finalNavigate(address : string[], params? : Params){
    var key = this.spinnerService.getUniqueKey();
    this.spinnerService.add(key);
    this.router.navigate(address,{queryParams : params}).then(
      ()=>{
        this.spinnerService.remove(key);
      }
    );
  }
}






