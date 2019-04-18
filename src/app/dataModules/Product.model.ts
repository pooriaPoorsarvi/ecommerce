import { PromoModel } from './Promo.model';
import { ReviewModel } from './Review.model';
import {MakerModel }  from './Maker.model'
import { RetailerMoel } from './Retailer.model';
import { CategoryModel } from './Category.model';

export class ProductModel{
  // TODO handle how promos can be public or private in the backend, because we dont wann import all the private promo codes here
  // TODO keep in mind when designing the data base that we might have two completly Identical Products with different Retailers, this might affect the uid
  constructor(public name : string,
              public main_price : number,
              public detail : string,
              public uid : number,
              public maker : MakerModel,
              public category : CategoryModel,
              public remainingCount : number,
              public retailer? : RetailerMoel,
              public promo_code? : PromoModel,
              public reviews? : ReviewModel){}

}


