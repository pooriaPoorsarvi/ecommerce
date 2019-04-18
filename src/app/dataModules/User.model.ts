import { OrderModel } from './Order.model';
import { AddressModel } from './Address.model';
import { ProductModel } from './Product.model';
import {ReviewModel} from './Review.model';

export class UserModel{

  // TODO check if name and last name is going to be ok for all retailers
  // TODO make sex and etc into enums
  constructor(public name : string,
              public last_name : string,
              public sex : string,
              public addresses : AddressModel[],
              public phone_numbers : string [],
              public emails : string[],
              public bought_products : ProductModel[],
              public reviews : ReviewModel[],
              public active_oder_list : OrderModel[],
              public shopping_cart : ProductModel[],
              ){}

}



