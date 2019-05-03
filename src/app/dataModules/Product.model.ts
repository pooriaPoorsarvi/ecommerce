import { PromoModel } from './Promo.model';
import { ReviewModel } from './Review.model';
import {MakerModel }  from './Maker.model'
import { RetailerMoel } from './Retailer.model';
import { CategoryModel } from './Category.model';

export class ProductModel{
  // TODO handle how promos can be public or private in the backend, because we dont wann import all the private promo codes here
  // TODO keep in mind when designing the data base that we might have two completly Identical Products with different Retailers, this might affect the uid
  // TODO keep in mind which picture from the image_adress will be used for promos, for now we're gonna use the 0 one
  constructor(public name : string,
              public main_price : number,
              public detail : string,
              public uid : number,
              public maker : MakerModel,
              public category : CategoryModel,
              public remainingCount : number,
              public image_address : string[],
              public main_features? : string [],
              public retailer? : RetailerMoel,
              public promo_code? : PromoModel,
              public reviews? : ReviewModel,
              // Check if you can ommit the last part because right now you use it in carousels
              public reduced_price? : number,){}

}


