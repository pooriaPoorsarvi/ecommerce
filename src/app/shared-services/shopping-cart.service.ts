import { Observable, Subject } from 'rxjs';
import { ProductModel } from '../dataModules/Product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService{
  private products : ProductModel[] = null;
  public updated : boolean = false;
  public products_observer : Subject <ProductModel[]> = new Subject <ProductModel[]> ();

  constructor(){

    this.products = [];

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

  public removeProduct(ind : number){
    // TOD update server
    if(ind >= this.products.length){
      return;
    }
    this.products.splice(ind, 1);
    this.products_observer.next(this.products.slice());
  }













}


