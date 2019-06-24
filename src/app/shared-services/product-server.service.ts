import { SpinnerService } from 'src/app/shared-services/spinner.service';
import { HttpClient } from '@angular/common/http';
import { MainPageDataServerService } from './../dataModules/MainPageDataServer.service';
import { MakerModel } from './../dataModules/Maker.model';
import { Observable } from 'rxjs';
import { ProductModel } from '../dataModules/Product.model';
import { CategoryModel } from '../dataModules/Category.model';
import { RetailerMoel } from '../dataModules/Retailer.model';
import { UserModel } from '../dataModules/User.model';
import { PromoModel } from '../dataModules/Promo.model';
import { Injectable } from '@angular/core';
import {get_product_url} from '../shared-services/brand.service';

@Injectable()
export class ProductServerService {

  constructor(public httpClient : HttpClient,
              public spinnerService : SpinnerService){}

  getProduct(id : number) : Observable <any>{
    // console.log("get_product_url", get_product_url, get_product_url(id))
    var key : string = this.spinnerService.getUniqueKey()
    this.spinnerService.add(key);
    var res = this.httpClient.get(get_product_url(id));
    res.subscribe(
      (res) => {
        this.spinnerService.remove(key);
      },
      (err) => {
        this.spinnerService.remove(key);
      }
    );
    return res;



    // This is the dummy one
    var dummyMaker = new MakerModel("this is a sample maker name", []);
    var retailer : RetailerMoel = new RetailerMoel(
      new UserModel('This is a sample retailer name', "pooriapoorsarvi@gmail.com"),
    );
    var prod1 = new ProductModel("this is a sample name",
                                  420,
                                  MainPageDataServerService.lorem_ipsum,
                                  221,
                                  dummyMaker,
                                  new CategoryModel("This is a sample category name", 1),
                                  100,
                                  ["http://pluspng.com/img-png/money-png--1663.png",
                                  "http://pluspng.com/img-png/money-png--1663.png",
                                  "http://pluspng.com/img-png/money-png--1663.png",
                                  "http://pluspng.com/img-png/money-png--1663.png",
                                  "http://pluspng.com/img-png/money-png--1663.png"],
                                  ["This is a sample main feature",
                                  "This is a sample main feature",
                                  "This is a sample main feature",
                                  "This is a sample main feature",
                                  "This is a sample main feature",
                                  "This is a sample main feature",
                                  ],
                                  retailer,
                                  new PromoModel('','', 0.5, new Date(), null, null),
                                  );
    var res1 = Observable.create(
      (observer) => {
        observer.next(prod1);
      }
    );
    return res1;
  }

}





