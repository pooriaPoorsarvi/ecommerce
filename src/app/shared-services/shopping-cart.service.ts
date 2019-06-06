import { MakerModel } from './../dataModules/Maker.model';
import { MainPageDataServerService } from './../dataModules/MainPageDataServer.service';
import { Observable, Subject } from 'rxjs';
import { ProductModel } from '../dataModules/Product.model';
import { Injectable } from '@angular/core';
import { CategoryModel } from '../dataModules/Category.model';

@Injectable()
export class ShoppingCartService{
  private products : ProductModel[] = null;
  public updated : boolean = false;
  public products_observer : Subject <ProductModel[]> = new Subject <ProductModel[]> ();

  constructor(){

    this.products = [];
    var dummyMaker = new MakerModel("this is a sample maker name", []);
    var prod1 = new ProductModel("this is a sample name",
                                  420,
                                  MainPageDataServerService.lorem_ipsum,
                                  221,
                                  dummyMaker,
                                  new CategoryModel("This is a sample category name"),
                                  100,
                                  ["http://pluspng.com/img-png/money-png--1663.png"],
                                  ["This is a sample main feature",
                                  "This is a sample main feature",
                                  "This is a sample main feature",
                                  "This is a sample main feature",
                                  ]
                                  );
    var prod2 = new ProductModel("this is a sample name",
                                  420,
                                  MainPageDataServerService.lorem_ipsum,
                                  221,
                                  dummyMaker,
                                  new CategoryModel("This is a sample category name"),
                                  100,
                                  ["http://pluspng.com/img-png/money-png--1663.png"],
                                  ["This is a sample main feature",
                                  "This is a sample main feature",
                                  "This is a sample main feature",
                                  "This is a sample main feature",
                                  ]
                                  );
    var prod3 = new ProductModel("this is a sample name",
                                  420,
                                  MainPageDataServerService.lorem_ipsum,
                                  221,
                                  dummyMaker,
                                  new CategoryModel("This is a sample category name"),
                                  100,
                                  ["http://pluspng.com/img-png/money-png--1663.png"],
                                  ["This is a sample main feature",
                                  "This is a sample main feature",
                                  "This is a sample main feature",
                                  "This is a sample main feature",
                                  ]
                                  );

    this.products.push(...[prod1, prod2, prod3]);


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
    this.products_observer.next(this.products.slice());
  }

  public removeAllProducts(){
    // TODO update server
    this.products.splice(0, this.products.length);
    this.products_observer.next(this.products.slice());
  }

  public removeProduct(ind : number){
    // TOD update server
    if(ind >= this.products.length){
      return;
    }
    this.products.splice(ind, 1);
    this.products_observer.next(this.products.slice());
  }













}


