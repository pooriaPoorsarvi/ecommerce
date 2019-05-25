import { ProductModel } from './Product.model';
import { UserModel } from './User.model';


export class RetailerMoel{
  constructor(public user : UserModel,
              public products? : ProductModel[]){}
}
