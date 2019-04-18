import { ProductModel } from './Product.model';

export class ReviewModel{

  constructor(public head : boolean,
              public child : ReviewModel,
              public father? : ProductModel,){}

}


