
import { AddressModel } from './Address.model';

export class MakerModel{
  // add regex control for these controls to both back end and front end
  constructor(public name : string,
              public address_info? : AddressModel[],
              public phone_numbers ?: string,
              public emails ? : string,){}
}


