import { MainPageDataServerService } from './../dataModules/MainPageDataServer.service';
import { MakerModel } from './../dataModules/Maker.model';
import { ProductModel } from '../dataModules/Product.model';
import { CategoryModel } from '../dataModules/Category.model';



export class ProductDummyServer{

  static give(how_many : number) : ProductModel[] {
    var res : ProductModel[] = [];
    for(var i = 0 ; i < how_many ; i ++){
      var dummyMaker = new MakerModel("this is a sample maker name" + i, []);
      var prod1 = new ProductModel("this is a sample name" + i,
                                    420 + i,
                                    MainPageDataServerService.lorem_ipsum + i,
                                    221 + i,
                                    dummyMaker,
                                    new CategoryModel("This is a sample category name" + i),
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


