import { map } from 'rxjs/operators';
import { SearchResultModel } from '../dataModules/search-result.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductModel } from '../dataModules/Product.model';
import { ProductDummyServer } from './product-dummy-server.service';
import { SERVER_API_URL } from './brand.service';



@Injectable()
export class CategorySearchService {

  constructor(public route : ActivatedRoute,
              public httpClient : HttpClient){}


  getCategory(id : number) : Observable<any>{

    var params = new HttpParams().set('catId', ''+id);
    return this.httpClient.get(SERVER_API_URL+"api/v1/product/category/", {params : params}).pipe(map(
      (products : SearchResultModel<ProductModel>[]) => {

        return products;
      }
    ));

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




