import { SERVER_API_URL } from './brand.service';
import { HttpClient } from '@angular/common/http';
import { MainPageDataServerService } from './../dataModules/MainPageDataServer.service';
import { MakerModel } from './../dataModules/Maker.model';
import { ProductModel } from '../dataModules/Product.model';
import { CategoryModel } from '../dataModules/Category.model';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductDummyServer{



  constructor(public httpClient : HttpClient){}

  addCat(category : CategoryModel, callBack? : any){
    return this.httpClient.post(SERVER_API_URL + 'api/v1/category', category);
  }



  push_online(){

    var catId = 1 ;

    var makerId = 1;

    var tmp = ProductDummyServer.give(40);

    for(let i of tmp){
      // TODO later check if we can add to the server

      this.httpClient.post(SERVER_API_URL + 'api/v1/product/', {
          "category": {
            "id": catId
          },
          "description": "string",
          "images": i.image_address,
          "mainPrice": i.main_price,
          "maker": {
            "id": makerId
          },
          "name": i.name,
          "promo_code": null,
          "remaining" : i.remainingCount
        }
      ).subscribe(
        (success) => {
          console.log("sucess",  success);
        },
        (error) => {
          console.log("error", error);
        }
      );
    }


  }

  static give(how_many : number) : ProductModel[] {
    var res : ProductModel[] = [];
    for(var i = 0 ; i < how_many ; i ++){
      var dummyMaker = new MakerModel("this is a sample maker name" + i, []);
      var prod1 = new ProductModel("this is a sample name" + i,
                                    420 + i,
                                    MainPageDataServerService.lorem_ipsum + i,
                                    221 + i,
                                    dummyMaker,
                                    new CategoryModel("This is a sample category name" + i,1),
                                    100 + i,
                                    ["http://pluspng.com/img-png/money-png--1663.png" ],
                                    ["This is a sample main feature" + i,
                                    "This is a sample main feature" + i,
                                    "This is a sample main feature" + i,
                                    "This is a sample main feature" + i,
                                    ]
                                    );
      res.push(prod1);
    }
    return res;
  }

}


