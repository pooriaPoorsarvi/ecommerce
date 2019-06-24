import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { MakerModel } from './../dataModules/Maker.model';
import { MainPageDataServerService } from './../dataModules/MainPageDataServer.service';
import { Observable, Subject } from 'rxjs';
import { ProductModel } from '../dataModules/Product.model';
import { Injectable } from '@angular/core';
import { CategoryModel } from '../dataModules/Category.model';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';
import { ShoppingCartModel } from '../dataModules/shopping-cart.model';
import { get_shopping_cart_url, add_ind_shopping_cart_url } from './brand.service';

@Injectable()
export class ShoppingCartService{
  static shopping_cart_name = "shopping cart";
  private products : ShoppingCartModel = null;
  public updated : boolean = false;
  public products_observer : Subject <ShoppingCartModel> = new Subject <ShoppingCartModel> ();

  constructor(
    public authenticationService : AuthenticationService,
    public httpClient : HttpClient,
    private $localStorage: LocalStorageService,){


    // this.products.push(...[prod1, prod2, prod3]);
    this.syncAccounts();
    var tmp = this.getSavedShoppingCart();

    this.authenticationService.activated_user_buffer.subscribe(
      () => {
        this.syncAccounts();
      }
    );

    if(tmp != null){
      this.products = tmp;
    }else{
      this.products = new ShoppingCartModel([]);
    }


    // TODO add the logic to send the request to get the current products in the shopping cart and it should be done in the following lines
    // TODO the following line needs to be deleted and then add a logic in which we can add the added products from before to the shopping cart we got from the internet
    this.updated  = true;

    this.products_observer.next(this.products);
  }

  public getSnapShot() : ShoppingCartModel {
    return this.products;
  }

  public addProduct(product : ProductModel){
    // TODO update server
    this.products.addProduct(product);
    this.saveLocallyShoppingCart();
    this.httpClient.post(add_ind_shopping_cart_url(),product).subscribe(
      (res) => {
        console.log("res adding product", res);
      },
      (err) => {
        console.log("err adding product", err);
      }
    );
    this.products_observer.next(this.products);
  }

  public removeAllProducts(){
    // TODO update server
    this.products.removeAll();
    this.saveLocallyShoppingCart();
    this.products_observer.next(this.products);
  }

  public removeProduct(product : ProductModel){
    // TOD update server
    this.products.removeProduct(product);
    this.saveLocallyShoppingCart();
    this.products_observer.next(this.products);
  }





  getSavedShoppingCart() : ShoppingCartModel{
    var res = this.$localStorage.retrieve(ShoppingCartService.shopping_cart_name);
    if (res == null) {
      return null;
    }
    var res2 = new ShoppingCartModel(res.orders);
    return res2;
  }


  saveLocallyShoppingCart(){
    this.$localStorage.store(ShoppingCartService.shopping_cart_name, this.products)
  }


  syncAccounts(){
    if(!this.authenticationService.is_authenticated()){
      return;
    }
    this.httpClient.get(get_shopping_cart_url()).subscribe(
      (val) => {
        console.log("online shopping cart", val);
      }
    );
  }

}

