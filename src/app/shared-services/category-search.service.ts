import { SpinnerService } from './spinner.service';
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
              public httpClient : HttpClient,
              public spinnerService : SpinnerService){}


  getCategory(id : number) : Observable<any>{
    var key : string  = this.spinnerService.getUniqueKey();
    this.spinnerService.add(key);
    var params = new HttpParams().set('catId', ''+id);
    var res = this.httpClient.get(SERVER_API_URL+"api/v1/product/category/", {params : params}).pipe(map(
      (products : SearchResultModel<ProductModel>[]) => {

        console.log(<ProductModel>products[0].value );
        return products;
      }
    ));
    // TODO check why we might have more than one request and also if we need to check the same situation for other types of requests
    res.subscribe(
      () =>{
        this.spinnerService.remove(key);
      },
      () => {
        this.spinnerService.remove(key);
      },
    );
    return res;

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




