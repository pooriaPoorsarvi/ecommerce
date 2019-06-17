import { MakerModel } from './../dataModules/Maker.model';
import { MainPageDataServerService } from './../dataModules/MainPageDataServer.service';
import { Observable, Subject } from 'rxjs';
import { ProductModel } from '../dataModules/Product.model';
import { Injectable } from '@angular/core';
import { CategoryModel } from '../dataModules/Category.model';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class ShoppingCartService{
  static shopping_cart_name = "shopping cart";
  private products : ProductModel[] = null;
  public updated : boolean = false;
  public products_observer : Subject <ProductModel[]> = new Subject <ProductModel[]> ();

  constructor(
    private $sessionStorage: SessionStorageService){

    // this.products = [];
    // var dummyMaker = new MakerModel("this is a sample maker name", []);
    // var prod1 = new ProductModel("this is a sample name",
    //                               420,
    //                               MainPageDataServerService.lorem_ipsum,
    //                               221,
    //                               dummyMaker,
    //                               new CategoryModel("This is a sample category name"),
    //                               100,
    //                               ["http://pluspng.com/img-png/money-png--1663.png"],
    //                               ["This is a sample main feature",
    //                               "This is a sample main feature",
    //                               "This is a sample main feature",
    //                               "This is a sample main feature",
    //                               ]
    //                               );
    // var prod2 = new ProductModel("this is a sample name",
    //                               420,
    //                               MainPageDataServerService.lorem_ipsum,
    //                               221,
    //                               dummyMaker,
    //                               new CategoryModel("This is a sample category name"),
    //                               100,
    //                               ["http://pluspng.com/img-png/money-png--1663.png"],
    //                               ["This is a sample main feature",
    //                               "This is a sample main feature",
    //                               "This is a sample main feature",
    //                               "This is a sample main feature",
    //                               ]
    //                               );
    // var prod3 = new ProductModel("this is a sample name",
    //                               420,
    //                               MainPageDataServerService.lorem_ipsum,
    //                               221,
    //                               dummyMaker,
    //                               new CategoryModel("This is a sample category name"),
    //                               100,
    //                               ["http://pluspng.com/img-png/money-png--1663.png"],
    //                               ["This is a sample main feature",
    //                               "This is a sample main feature",
    //                               "This is a sample main feature",
    //                               "This is a sample main feature",
    //                               ]
    //                               );

    // this.products.push(...[prod1, prod2, prod3]);
    var tmp = this.getSavedShoppingCart();
    if(tmp != null){
      this.products = tmp;
    }else{
      this.products = [];
    }


    // TODO add the logic to send the request to get the current products in the shopping cart and it should be done in the following lines
    // TODO the following line needs to be deleted and then add a logic in which we can add the added products from before to the shopping cart we got from the internet
    this.updated  = true;

    this.products_observer.next(this.products.slice());
  }

  public getSnapShot() : ProductModel [] {
    return this.products.slice();
  }

  public addProduct(product : ProductModel){
    // TODO update server
    this.products.push(product);
    this.saveLocallyShoppingCart();
    this.products_observer.next(this.products.slice());
  }

  public removeAllProducts(){
    // TODO update server
    this.products.splice(0, this.products.length);
    this.saveLocallyShoppingCart();
    this.products_observer.next(this.products.slice());
  }

  public removeProduct(ind : number){
    // TOD update server
    if(ind >= this.products.length){
      return;
    }
    this.products.splice(ind, 1);
    this.saveLocallyShoppingCart();
    this.products_observer.next(this.products.slice());
  }





  getSavedShoppingCart() : ProductModel[]{
    var res = this.$sessionStorage.retrieve(ShoppingCartService.shopping_cart_name);
    return res;
  }


  saveLocallyShoppingCart(){
    this.$sessionStorage.store(ShoppingCartService.shopping_cart_name, this.products)
  }







}


