import { MainPageDataServerService } from './../dataModules/MainPageDataServer.service';
import { MakerModel } from './../dataModules/Maker.model';
import { Observable } from 'rxjs';
import { ProductModel } from '../dataModules/Product.model';
import { CategoryModel } from '../dataModules/Category.model';


export class ProductServerService {

  constructor(){}

  getProduct(id : number) : Observable <any>{
    var dummyMaker = new MakerModel("this is a sample maker name", []);
    var prod1 = new ProductModel("this is a sample name",
                                  420,
                                  MainPageDataServerService.lorem_ipsum,
                                  221,
                                  dummyMaker,
                                  new CategoryModel("This is a sample category name"),
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
                                  ]
                                  );
    var res = Observable.create(
      (observer) => {
        observer.next(prod1);
      }
    );
    return res;
  }

}





