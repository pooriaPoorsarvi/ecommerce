import { SearchResultModel } from '../dataModules/search-result.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../dataModules/Product.model';
import { ProductDummyServer } from './product-dummy-server.service';



@Injectable()
export class CategorySearchService {

  constructor(public route : ActivatedRoute,
              public httpClient : HttpClient){}


  getCategory() : Observable<SearchResultModel<ProductModel> [] >{

    var products = ProductDummyServer.give(50);
    var search_results : SearchResultModel<ProductModel>[] = [];
    for (var i = 0 ; i < products.length ; i ++){
      search_results.push(new SearchResultModel<ProductModel>(
        products[i],
        i,
        new Date(),
        i,
      ));
    }


    return Observable.create(
      observer => {
        observer.next(search_results);
      }
    );

  }

}




