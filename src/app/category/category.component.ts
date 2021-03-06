import { RoutingService } from './../shared-services/routing.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CategorySearchService } from '../shared-services/category-search.service';
import { SearchResultModel } from './../dataModules/search-result.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductModel } from '../dataModules/Product.model';
import { PageEvent } from '@angular/material';
import { BrandService } from '../shared-services/brand.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {


  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];



  // MatPaginator Output
  pageEvent: PageEvent;

  search_results : SearchResultModel<ProductModel>[];
  subs : Subscription;

  subs_route : Subscription;

  id : number;


  constructor(public categoryService : CategorySearchService,
              public route : ActivatedRoute,
              public routingService : RoutingService,
              public bs : BrandService) { }



  ngOnInit() {

    var f = (search_results) => {
      this.search_results = search_results;
    };
    this.subs = this.categoryService.getCategory(+this.route.snapshot.params['id']).subscribe(f);
    this.subs_route = this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
        if(this.subs != null){
          this.subs.unsubscribe();
        }
        this.subs = this.categoryService.getCategory(this.id).subscribe(f);
      }
    );

  }

  ngOnDestroy(){
    this.subs.unsubscribe();
    this.subs_route.unsubscribe();
  }

  getStart(){
    if(this.pageEvent){
      return this.pageEvent.pageIndex * this.pageEvent.pageSize;
    }else{
      return 0;
    }
  }
  getEnd(){
    if(this.pageEvent){
      return Math.min((this.pageEvent.pageIndex + 1) * this.pageEvent.pageSize, this.search_results.length);
    }else{
      return this.pageSize;
    }
  }


  sort_pop(){
    this.search_results.sort(
      (a, b) => {
        return -1 * (a.popularity - b.popularity);
      }
    );
  }

  sort_relevance(){
    this.search_results.sort(
      (a, b) => {
        return -1 * (a.relevance - b.relevance);
      }
    );
  }

  sort_low_price(){
    this.search_results.sort(
      (a, b) => {
        var price_a = a.value.promo_code ? a.value.main_price * (1-a.value.promo_code.percent) : a.value.main_price;
        var price_b = b.value.promo_code ? b.value.main_price * (1-b.value.promo_code.percent) : b.value.main_price;
        return price_a - price_b;
      }
    );
  }

  sort_high_price(){
    this.search_results.sort(
      (a, b) => {
        var price_a = a.value.promo_code ? a.value.main_price * (1-a.value.promo_code.percent) : a.value.main_price;
        var price_b = b.value.promo_code ? b.value.main_price * (1-b.value.promo_code.percent) : b.value.main_price;
        return -1 * (price_a - price_b);
      }
    );
  }



}

