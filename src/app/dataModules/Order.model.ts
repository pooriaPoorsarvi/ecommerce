import { AddressModel } from './Address.model';
import { LatLangModel } from './LatLang.model';
import { ProductModel } from './Product.model';


export class OrderModel{

  // TODO check if the uid of the user needs to be a string
  // TODO turn state into an enum in both the back end and the front end
  constructor(public uid_user : string,
              public product_list : ProductModel[],
              public state : string,
              public lat_lang : LatLangModel,
              public destination : AddressModel,
              ){}


}



