import { ProductModel } from './Product.model';

export class ReviewModel{

  // TODO check that only reveiews that are head have rates and pros and cons list, both for front end and back call_end
  // TODO add a checking system that checks rates in both back end and front end

  constructor(public head : boolean,
              public title : string,
              public description : string,
              public rate? : number,
              public pros? : string [],
              public cons? : string [],
              public child? : ReviewModel){}

}


