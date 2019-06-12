import { OrderModel } from './Order.model';
import { AddressModel } from './Address.model';
import { ProductModel } from './Product.model';
import {ReviewModel} from './Review.model';

export class UserModel{

  // TODO check if name and last name is going to be ok for all retailers
  // TODO make sex and etc into enums
  // Add last name to sign up
  constructor(public name : string,
              public email  : string,
              public last_name? : string,
              public shopping_cart? : ProductModel[],
              public image_profile ? : string,
              public addresses ? : AddressModel[],
              public phone_numbers ? : string [],
              public bought_products ? : ProductModel[],
              public active_oder_list ? : OrderModel[],
              public reviews ? : ReviewModel[],
              public sex? : string,
              public role? : string,
              public id? : number,
              ){}

}



