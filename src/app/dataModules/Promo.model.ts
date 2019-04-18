import { ProductModel } from './Product.model';


export class PromoModel{
  constructor(public name : string,
              public product : ProductModel,
              public percent : number,
              public end_date : Date,
              // The following is for the promos which has dedicated pictures for promoting them
              public imageAddress? : string,
              ){}
}

