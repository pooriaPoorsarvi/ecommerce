import { ProductModel } from './Product.model';
import { CategoryModel } from './Category.model';


export class PromoModel{

  // TODO Check if product or category is necasarry
  constructor(public name : string,
              public landing_page : string,
              public percent : number,
              public end_date : Date,
              public category : CategoryModel,
              public image_address  : string,
              public product? : ProductModel,
              // The following is for the promos which has dedicated pictures for promoting them
              public imageAddress_alt? : string,
              ){}
}

